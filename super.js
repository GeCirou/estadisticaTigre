// var ganancia1 = 0;
// var perdida1 =  0;
// var propina1 =  0;

var totalCapital = 0;
document.getElementById("total_capital").innerHTML = totalCapital;
var totalPropina = 0;
document.getElementById("total_propi").innerHTML = totalPropina;

// LIMPIAR CASILLEROS
function limpiarGan1() {
    gan1.value = "";
}
function limpiarPer1() {
    per1.value = "";
}
function limpiarPropi1() {
    propi1.value = "";
}

function limpiarGan2() {
    gan2.value = "";
}
function limpiarPer2() {
    per2.value = "";
}
function limpiarPropi2() {
    propi2.value = "";
}

function limpiarGan3() {
    gan3.value = "";
}
function limpiarPer3() {
    per3.value = "";
}
function limpiarPropi3() {
    propi3.value = "";
}

function limpiarGan4() {
    gan4.value = "";
}
function limpiarPer4() {
    per4.value = "";
}
function limpiarPropi4() {
    propi4.value = "";
}

function limpiarGan5() {
    gan5.value = "";
}
function limpiarPer5() {
    per5.value = "";
}
function limpiarPropi5() {
    propi5.value = "";
}

function limpiarGan6() {
    gan6.value = "";
}
function limpiarPer6() {
    per6.value = "";
}
function limpiarPropi6() {
    propi6.value = "";
}

function limpiarGan7() {
    gan7.value = "";
}
function limpiarPer7() {
    per7.value = "";
}
function limpiarPropi7() {
    propi7.value = "";
}

function limpiarGan8() {
    gan8.value = "";
}
function limpiarPer8() {
    per8.value = "";
}
function limpiarPropi8() {
    propi8.value = "";
}

// CALCULO TOTAL
function calcularTotal() {
    let ganancia1 = parseInt(document.getElementById("gan1").value);
    let perdida1 =  parseInt(document.getElementById("per1").value);
    let propina1 =  document.getElementById("propi1").value;

    let ganancia2 = parseInt(document.getElementById("gan2").value);
    let perdida2 = parseInt(document.getElementById("per2").value);
    let propina2 = document.getElementById("propi2").value;

    let ganancia3 = parseInt(document.getElementById("gan3").value);
    let perdida3 = parseInt(document.getElementById("per3").value);
    let propina3 = document.getElementById("propi3").value;

    let ganancia4 = parseInt(document.getElementById("gan4").value);
    let perdida4 = parseInt(document.getElementById("per4").value);
    let propina4 = document.getElementById("propi4").value;

    let ganancia5 = parseInt(document.getElementById("gan5").value);
    let perdida5 = parseInt(document.getElementById("per5").value);
    let propina5 = document.getElementById("propi5").value;

    let ganancia6 = parseInt(document.getElementById("gan6").value);
    let perdida6 = parseInt(document.getElementById("per6").value);
    let propina6 = document.getElementById("propi6").value;

    let ganancia7 = parseInt(document.getElementById("gan7").value);
    let perdida7 = parseInt(document.getElementById("per7").value);
    let propina7 = document.getElementById("propi7").value;

    let ganancia8 = parseInt(document.getElementById("gan8").value);
    let perdida8 = parseInt(document.getElementById("per8").value);
    let propina8 = document.getElementById("propi8").value;

    totalCapital = ganancia1 + ganancia2 +  ganancia3 + ganancia4 + ganancia5  + ganancia6 + ganancia7 + ganancia8 - perdida1 - perdida2 - perdida3 - perdida4 - perdida5 - perdida6 - perdida7 - perdida8;
    totalPropina = parseInt(propina1) + parseInt(propina2) + parseInt(propina3) + parseInt(propina4)  + parseInt(propina5) + parseInt(propina6) + parseInt(propina7) + parseInt(propina8);

    document.getElementById("total_capital").innerHTML = totalCapital;
    document.getElementById("total_propi").innerHTML = totalPropina;
}