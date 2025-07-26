function calcularDemolidor() {
    let meuNumero = document.getElementById("meuNumero");
    let quantidade = meuNumero.value;
    let resultadoDemolidor = quantidade * 230;
    document.getElementById("resultadoDemolidor").innerHTML = resultadoDemolidor + ",00";

}

function calcularXMen() {
    let meuNumero = document.getElementById("meuNumero");
    let quantidade = meuNumero.value;
    let resultaXMen = quantidade * 95;
    document.getElementById("resultaXMen").innerHTML = resultaXMen + ",00";
}

function calcularSandman() {
    let meuNumero = document.getElementById("meuNumero");
    let quantidade = meuNumero.value;
    let resultadoSandman = quantidade * 28;
    document.getElementById("resultadoSandman").innerHTML = resultadoSandman + ",00";
}

function calcularReinoDoAmanha() {
    let meuNumero = document.getElementById("meuNumero");
    let quantidade = meuNumero.value;
    let resultadoReinoDoAmanha = quantidade * 160;
    document.getElementById("resultadoReinoDoAmanha").innerHTML = resultadoReinoDoAmanha + ",00";
}

function calcularPiadaMortal() {
    let meuNumero = document.getElementById("meuNumero");
    let quantidade = meuNumero.value;
    let resultadoPiadaMortal = quantidade * 45;
    document.getElementById("resultadoPiadaMortal").innerHTML = resultadoPiadaMortal + ",00";
}

function calcularSupergirl() {
    let meuNumero = document.getElementById("meuNumero");
    let quantidade = meuNumero.value;
    let resultadoSupergirl = quantidade * 119;
    document.getElementById("resultadoSupergirl").innerHTML = resultadoSupergirl + ",00";
}