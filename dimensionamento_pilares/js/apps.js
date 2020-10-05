document.getElementById('calcula_nd').addEventListener('click', function() {
    var nk = document.getElementById('nk').value;
    nk = nk.replace(",", ".");
    nd = nk * 1.4;

    document.getElementById('nd').value = nd
    localStorage.nd = nd
})

document.getElementById('compEquivX').addEventListener('click', function() {
    h_piso = document.getElementById('h_piso').value;
    h_viga = document.getElementById('h_viga').value;
    hx = document.getElementById('hx').value;

    h_piso1 = parseFloat(h_piso);
    h_viga1 = parseFloat(h_viga);
    hx1 = parseFloat(hx);
    l0 = h_piso1 - h_viga1;
    lex = l0 + hx1

    document.getElementById('l0x').value = l0;
    document.getElementById('lex').value = lex;

    if (lex < h_piso1) {
        document.getElementById('lex_efetivo').value = lex;
    } else {
        document.getElementById('lex_efetivo').value = h_piso1;
    }

    localStorage.l0 = l0
    localStorage.h_piso = h_piso1
    localStorage.h_viga = h_viga1
    localStorage.hx = hx1
})


function compEquivY() {
    hy = document.getElementById('hy').value;
    hy1 = parseFloat(hy);
    ley = parseFloat(localStorage.l0) + hy1;

    document.getElementById('ley').value = ley;

    if (ley < localStorage.h_piso) {
        document.getElementById('ley_efetivo').value = ley;
    } else {
        document.getElementById('ley_efetivo').value = localStorage.h_piso;
    }

    localStorage.hy = hy1
}

function vaoEfetivoV1() {
    comp_eixo = document.getElementById('comp_e_e').value;
    hx_p2 = document.getElementById('hx_p2').value;

    comp_eixo = parseFloat(comp_eixo);
    hx_p2 = parseFloat(hx_p2);

    l0v1 = comp_eixo - (localStorage.hx / 2) - (hx_p2 / 2);
    a1_a = (localStorage.hx / 2);
    a1_b = (localStorage.h_viga * 0.3);

    if (a1_a < a1_b) {
        a1 = a1_a
    } else {
        a1 = a1_b
    }

    a2_a = (hx_p2 / 2);
    a2_b = a1_b;

    if (a2_a < a2_b) {
        a2 = a2_a
    } else {
        a2 = a2_b
    }

    lefv1 = l0v1 + a1 + a2;

    document.getElementById('a2').value = a2;
    document.getElementById('a1').value = a1;
    document.getElementById('l0v1').value = l0v1;
    document.getElementById('lefv1').value = lefv1;
}

function vaoEfetivoV2() {
    comp_eixo_2 = document.getElementById('comp_e_e_2').value;
    hy_p3 = document.getElementById('hy_p3').value;

    comp_eixo_2 = parseFloat(comp_eixo_2);
    hy_p3 = parseFloat(hy_p3);

    l0v2 = comp_eixo_2 - (localStorage.hy / 2) - (hy_p3 / 2);
    a1_v2_a = (localStorage.hy / 2);
    a1_v2_b = (localStorage.h_viga * 0.3);

    if (a1_v2_a < a1_v2_b) {
        a1_v2 = a1_v2_a
    } else {
        a1_v2 = a1_v2_b
    }

    a2_v2_a = (hy_p3 / 2);
    a2_v2_b = a1_v2_b;

    if (a2_v2_a < a2_v2_b) {
        a2_v2 = a2_v2_a
    } else {
        a2_v2 = a2_v2_b
    }

    lefv2 = l0v2 + a1_v2 + a2_v2;

    document.getElementById('a2_v2').value = a2_v2;
    document.getElementById('a1_v2').value = a1_v2;
    document.getElementById('l0v2').value = l0v2;
    document.getElementById('lefv2').value = lefv2;
}

document.getElementById('r_sup').addEventListener('click', function() {
    rigidez = ((3 * hy1 * (hx1 ** 3)) / 12) * (1 / (lex / 2));
    console.log(rigidez)
    document.getElementById('r_sup_inf').value = rigidez;
})