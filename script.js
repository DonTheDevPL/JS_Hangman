var alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","y","z"];
function stworzTabele() {
    tabela = new Array();
    tabela.push("informatyka");
    tabela.push("technikum");
    tabela.push("kot");
    tabela.push("samochod");
    tabela.push("koronawirus");
    tabela.push("komputer");
    tabela.push("linux");
    tabela.push("opensuse");
    tabela.push("wisielec");
    tabela.push("javascript");
    return tabela;
}
function losujWyraz(tabela){
    var i=Math.random()*10;
    i = Math.round(i);
    var wynik = tabela.slice(i,i+1);
    return wynik.toString();
}

function handlecorrect(inputVal){
}
function clearInput() {
    document.getElementById("literyinput").value="";
}
var wyrazy = stworzTabele();
var wyraz = losujWyraz(wyrazy);
console.log(wyraz);
var tab = wyraz.split('');
var output = "";

for(var i in tab){

    output = output + " _ ";
}
document.getElementById("slowo_kod").innerText=output;

var uzyte = new Array();





var input = document.querySelector("#literyinput");

var onInput = () => {
    var inputVal = document.getElementById("literyinput").value;
    inputVal = inputVal.toLowerCase();
    if (inputVal.length == 1 && alfabet.includes(inputVal) && inputVal != " " && !(uzyte.includes(inputVal))){
        if(inputVal in tab){
            handlecorrect(inputVal);
        }



    var createList = document.createElement("li");
    var punkt = document.createTextNode(inputVal);
    createList.appendChild(punkt);
    var element = document.getElementById("listaID");
    element.appendChild(createList);
    uzyte.push(inputVal);    



    }
    clearInput();
}
input.addEventListener("keyup", onInput);