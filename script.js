var alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","y","z","v","x"];
var uzyte = new Array();
var wynik_punktowy=0;
function pointsHandle(typ,wynik_punktowy){
    var wynik = document.getElementById("punkty");
    if(typ == 0){
        wynik_punktowy = wynik_punktowy+1;        
        wynik.innerText="Punkty: "+ wynik_punktowy;
        return wynik_punktowy;
    }else{
        if(wynik_punktowy != 0){
        wynik_punktowy = wynik_punktowy-1;}
        wynik.innerText="Punkty: "+ wynik_punktowy;
        return wynik_punktowy;        
    }

}
function zakonczGre(){
    document.getElementById("koniec_gry").innerHTML="Poddałeś się<br>"+ "Słowo to: "+ wyraz + '<br /><span class="reset" onclick="location.reload()">Zagraj Jeszcze Raz</span>';
    document.getElementById("literyinput").disabled = true;

}
function stworzTabele() {
    tabela = new Array();
    tabela.push("informatyka");
    tabela.push("technikum");
    tabela.push("kot");
    tabela.push("cyklopentanoperhydrofenantren");
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
    sprawdzwygrana(tab,uzyte,wynik_punktowy);
}
function sprawdzwygrana(tab,uzyte,wynik){
    var punkty = 0;
    for(var i in tab){
        if(uzyte.includes(tab[i])){
            
            punkty++;
        }
        if(tab.length == punkty){
            document.getElementById("koniec_gry").innerHTML="Gratulacje!<br> Ukończyłeś z wynikiem: "+wynik+'<br /><span class="reset" onclick="location.reload()">Zagraj Jeszcze Raz</span>';
            document.getElementById("literyinput").disabled = true;
        }
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
        robListe("listaID",inputVal);
        wynik_punktowy = pointsHandle(0,wynik_punktowy);
        handle(tab,uzyte);        
    }else{
        robListe("listaID2",inputVal);
        wynik_punktowy = pointsHandle(1,wynik_punktowy);
    }


    }
    clearInput();
}
input.addEventListener("keyup", onInput);