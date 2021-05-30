dayName = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
monName = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]
now = new Date

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
                        "<br><img width='60px' height='60px' src='" + myArr.pessoal[i].ico + "' alt=''>" +
                        "<div id='tit_pessoal'>" + myArr.pessoal[i].tit.toUpperCase() +
                    "</div></div></a></td>"
                } else if (valor === "profissional") {
                    texto += "<td>" +
                        "<a href='" + myArr.profissional[i].lnk + "' target='_blank'><div id='cor_profissional'>" +
                        "<br><img width='60px' height='60px' src='" + myArr.profissional[i].ico + "' alt=''>" +
                        "<div id='tit_profissional'>" + myArr.profissional[i].tit.toUpperCase() +
                    "</div></div></a></td>"
                }
                else if (valor === "interno"){
                    texto += "<td>" +
                        "<a href='" + myArr.interno[i].lnk + "' target='_blank'><div id='cor_interno'>" +
                        "<br><img width='60px' height='60px' src='" + myArr.interno[i].ico + "' alt=''>" +
                        "<div id='tit_interno'>" + myArr.interno[i].tit.toUpperCase() +
                        "</div></div></a></td>"
                }
            else {
                    texto += "<td>" +
                        "<a href='" + myArr.estudo[i].lnk + "' target='_blank'><div id='cor_estudo'>" +
                        "<br><img width='60px' height='60px' src='" + myArr.estudo[i].ico + "' alt=''>" +
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
    xmlhttp.open("GET", "links.json", true);
    xmlhttp.send();
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
    if ( /[\n|\n\r]/.test(val1) || /[\n|\n\r]/.test(val2) ){
        traduzir(val1,val2);
        document.getElementById("tradutor").submit();
    }
}

