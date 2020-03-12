var alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","y","z","v","x"];
var uzyte = new Array();
function stworzTabele() {
    tabela = new Array();
    tabela.push("informatyka");
    tabela.push("technikum");
    tabela.push("kot");
    tabela.push("tetrahydrokannabinol");
    tabela.push("monitor");
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
    console.log(i);
    if(i==10)i=9;
    var wynik = tabela.slice(i,i+1);
    return wynik.toString();
}

function clearInput() {
    document.getElementById("literyinput").value="";
}
function zrobkreski(tab){
    var output = "";    
    for(var i in tab){

        output = output + " _ ";
    }
    document.getElementById("slowo_kod").innerText=output;   
}
function handle(tab,uzyte){
    var output = "";    
    for(var i in tab){
        if(uzyte.includes(tab[i])){
            
            output = output + tab[i];
        }else{
            output = output + " _ ";
        }
    }
    document.getElementById("slowo_kod").innerText=output;
    sprawdzwygrana(tab,uzyte);
}
function sprawdzwygrana(tab,uzyte){
    var punkty =0;
    for(var i in tab){
        if(uzyte.includes(tab[i])){
            
            punkty++;
        }
    if(tab.length == punkty){alert("Brawo! Zgadłeś słowo");}
    }
}
function robListe(tag,element){
    var createList = document.createElement("li");
    var punkt = document.createTextNode(element);
    createList.appendChild(punkt);
    var element = document.getElementById(tag);
    element.appendChild(createList);

}


var wyrazy = stworzTabele();
var wyraz = losujWyraz(wyrazy);
console.log(wyraz);
var tab = wyraz.split('');
zrobkreski(tab);







var input = document.querySelector("#literyinput");

var onInput = () => {
    var inputVal = document.getElementById("literyinput").value;
    inputVal = inputVal.toLowerCase();
    if (inputVal.length == 1 && alfabet.includes(inputVal) && inputVal != " " && !(uzyte.includes(inputVal))){

    uzyte.push(inputVal);    
    if(tab.includes(inputVal)){
        handle(tab,uzyte);
        robListe("listaID",inputVal);
    }else{
        robListe("listaID2",inputVal);
    }


    }
    clearInput();
}
input.addEventListener("keyup", onInput);