function lista(valor){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myArr = JSON.parse(this.responseText);
            var texto = "<table><tr>";

            if (valor === "pessoal") {
                itens = Object.keys(myArr.pessoal).length;
            }
            else if (valor === "profissional") {
                itens = Object.keys(myArr.profissional).length;
            }
            else if (valor === "interno") {
                itens = Object.keys(myArr.interno).length;
            }
            else {
                itens = Object.keys(myArr.estudo).length;
            }
            var count = 0;
            for (var i = 0; i < itens; i++) {
                count++
                if (valor === "pessoal") {
                    texto += "<td>" +
                        "<a href='" + myArr.pessoal[i].lnk + "' target='_blank'><div id='cor_pessoal'>" +
                        "<br><img width='50px' height='50px' src='" + myArr.pessoal[i].ico + "' alt=''>" +
                        "<div id='tit_pessoal'>" + myArr.pessoal[i].tit.toUpperCase() +
                    "</div></div></a></td>"
                } else if (valor === "profissional") {
                    texto += "<td>" +
                        "<a href='" + myArr.profissional[i].lnk + "' target='_blank'><div id='cor_profissional'>" +
                        "<br><img width='50px' height='50px' src='" + myArr.profissional[i].ico + "' alt=''>" +
                        "<div id='tit_profissional'>" + myArr.profissional[i].tit.toUpperCase() +
                    "</div></div></a></td>"
                }
                else if (valor === "interno"){
                    texto += "<td>" +
                        "<a href='" + myArr.interno[i].lnk + "' target='_blank'><div id='cor_interno'>" +
                        "<br><img width='50px' height='50px' src='" + myArr.interno[i].ico + "' alt=''>" +
                        "<div id='tit_interno'>" + myArr.interno[i].tit.toUpperCase() +
                        "</div></div></a></td>"
                }
            else {
                    texto += "<td>" +
                        "<a href='" + myArr.estudo[i].lnk + "' target='_blank'><div id='cor_estudo'>" +
                        "<br><img width='50px' height='50px' src='" + myArr.estudo[i].ico + "' alt=''>" +
                        "<div id='tit_estudo'>" + myArr.estudo[i].tit.toUpperCase() +
                        "</div></div></a></td>"
                }
                if (count === 6) {
                    texto += "</tr><tr>";
                    count = 0;
                }
            }
            texto += "</tr></table>";
            if (valor === "pessoal") {
                document.getElementById("pessoal").innerHTML = texto;
            } else if (valor === "profissional") {
                document.getElementById("profissional").innerHTML = texto;
            }
            else if (valor === "interno"){
                document.getElementById("interno").innerHTML = texto;
                }
            else {
                document.getElementById("estudo").innerHTML = texto;
            }
        }
    };
    xmlhttp.open("GET", "inc/links.json", true);
    xmlhttp.send();
}
function ass(){
    let author = "By Thiago Airold Perez";
    return document.getElementById('ass').textContent = author;
}

function traduzir(val1,val2){
    if (val1!==""){
        document.getElementById("text").value = val1;
        document.getElementById("sl").value = "en";
        document.getElementById("tl").value = "pt";
    }
    if (val2!==""){
        document.getElementById("text").value = val2;
        document.getElementById("sl").value = "pt";
        document.getElementById("tl").value = "en";
    }
}
function verEnter(val1,val2){
    let vEnt=/[\n|\r]/;
    if ( vEnt.test(val1) || vEnt.test(val2) ){
        traduzir(val1,val2);
        document.getElementById("tradutor").submit();
    }
}
function relogio(){
    setInterval(function(){
        let novaHora = new Date();
        let hora = zero(novaHora.getHours());
        let minuto = zero(novaHora.getMinutes());
        let segundo = zero(novaHora.getSeconds());
        return document.getElementById('rel').textContent = hora+':'+minuto+':'+segundo;
    },1000)
}
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
function data(){
    let dayName = ["domingo", "segunda", "ter??a", "quarta", "quinta", "sexta", "s??bado"]
    let monName = ["janeiro", "fevereiro", "mar??o", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]
    let agora = new Date
    let varData = dayName[agora.getDay() ] + ", " + agora.getDate () + " de " + monName [agora.getMonth() ]   +  " de "  +     agora.getFullYear ();
    return document.getElementById('dat').textContent = varData.toUpperCase();
}
function busca() {
    let v = "";
    v += "<form action='https://www.google.com/search' method='get' target='_blank'>" +
        "<label><input name='q' type='text' placeholder='PESQUISAR  NO  GOOGLE' onClick=this.value=''>"+
        "</label></form>"
    return document.getElementById('search').innerHTML = v;
}
function tradutor() {
    let v = "";
    v += "<form action='https://translate.google.com' onsubmit='traduzir(this.texto1.value,this.texto2.value)' method='get' target='_blank' id='tradutor'>" +
        "<label><textarea name='texto1' onkeyup=verEnter(this.value,'') placeholder='INGL??S >>>> PORTUGU??S' onclick=this.value=''></textarea><br> </label>"+
        "<label><textarea name='texto2' onkeyup=verEnter('',this.value) placeholder='PORTUGU??S >>>> INGL??S' onclick=this.value=''></textarea></label>"+
        "<input type='hidden' name='teste' id='teste' value=''><input type='hidden' name='op' value='translate'><input type='hidden' name='sl' id='sl' value=''><input type='hidden' name='tl' id='tl' value=''><input type='hidden' name='text' id='text' value=''></form>"
    return document.getElementById('translator').innerHTML = v;
}