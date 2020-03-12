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
    return tabela.slice(i,i+1);

}
var wyrazy = stworzTabele();
var wyraz = losujWyraz(wyrazy);