let ketQua = "";
let a = 1, b = 2;
let type;

function nhap1(){

    ketQua = ketQua + "1";
    document.getElementById("screen").innerText= ketQua;
}
function nhap2(){

    ketQua = ketQua + "2";
    document.getElementById("screen").innerText= ketQua;
}
function nhap3(){

    ketQua = ketQua + "3";
    document.getElementById("screen").innerText= ketQua;
}
function nhap4(){

    ketQua = ketQua + "4";
    document.getElementById("screen").innerText= ketQua;
}
function nhap5(){

    ketQua = ketQua + "5";
    document.getElementById("screen").innerText= ketQua;
}
function nhap6(){

    ketQua = ketQua + "6";
    document.getElementById("screen").innerText= ketQua;
}
function nhap7(){

    ketQua = ketQua + "7";
    document.getElementById("screen").innerText= ketQua;
}
function nhap8(){

    ketQua = ketQua + "8";
    document.getElementById("screen").innerText= ketQua;
}
function nhap9(){

    ketQua = ketQua + "9";
    document.getElementById("screen").innerText= ketQua;
}
function nhap0(){

    ketQua = ketQua + "0";
    document.getElementById("screen").innerText= ketQua;
}

function cong(){
    a = parseInt(document.getElementById("screen").textContent);
    type = 1;
    ketQua = "";
}
function tru(){
    a = parseInt(document.getElementById("screen").textContent);
    type = 2;
    ketQua = "";
}
function nhan(){
    a = parseInt(document.getElementById("screen").textContent);
    type = 3;
    ketQua = "";
}
function chia(){
    a = parseInt(document.getElementById("screen").textContent);
    type = 4;
    ketQua = "";
}
function anC(){
    ketQua = "";
    document.getElementById("screen").innerText= ketQua;
}
function daubang(){
    let c;
    b = parseInt(document.getElementById("screen").textContent);
    switch (type) {
        case 1:
            c = a + b;
            document.getElementById("screen").innerText = c;
            ketQua = document.getElementById("screen").textContent;
            break;
        case 2:
            c = a - b;
            document.getElementById("screen").innerText = c;
            ketQua = document.getElementById("screen").textContent;
            break;
        case 3:
            c = a * b;
            document.getElementById("screen").innerText = c;
            ketQua = document.getElementById("screen").textContent;
            break;
        case 4:
            c = a / b;
            document.getElementById("screen").innerText = c;
            ketQua = document.getElementById("screen").textContent;
            break;

    }
}