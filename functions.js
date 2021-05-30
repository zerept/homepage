dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date

function lista(valor){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var myArr = JSON.parse(this.responseText);

            var texto = "<table><tr>";
            let itens = "";

            if (valor === "pessoal") {
                itens = Object.keys(myArr.pessoal).length;
            }
            else if (valor === "profissional") {
                itens = Object.keys(myArr.profissional).length;
            }
            else {
                itens = Object.keys(myArr.interno).length;
            }
            var count = 0;
            for (var i = 0; i < itens; i++) {
                count++
                if (valor === "pessoal") {
                    texto += "<td id='cor_pessoal' >" +
                        "<a href='" + myArr.pessoal[i].lnk + "' target='_blank'>" +
                        "<img width='60px' height='60px' src='" + myArr.pessoal[i].ico + "' alt=''>" +
                        "<br><br>" + myArr.pessoal[i].tit.toUpperCase() +
                    "</a></td>"
                } else if (valor === "profissional") {
                    texto += "<td id='cor_profissional' >" +
                        "<a href='" + myArr.profissional[i].lnk + "' target='_blank'>" +
                        "<img width='60px' height='60px' src='" + myArr.profissional[i].ico + "' alt=''>" +
                        "<br><br>" + myArr.profissional[i].tit.toUpperCase() +
                    "</a></td>"
                }
                else {
                    texto += "<td id='cor_interno' >" +
                        "<a href='" + myArr.interno[i].lnk + "' target='_blank'>" +
                        "<img width='60px' height='60px' src='" + myArr.interno[i].ico + "' alt=''>" +
                        "<br><br>" + myArr.interno[i].tit.toUpperCase() +
                        "</a></td>"
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
            else {
                document.getElementById("interno").innerHTML = texto;
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
function muda(valor){
    alert(valor)
    if (valor === "pessoal") {
        document.getElementById("cor_pessoal").style.color = "#cccccc";
    } else if (valor === "profissional") {
        document.getElementById("cor_profissional").style.color = "#cccccc";
    }
    else {
        document.getElementById("cor_interno").style.color = "#cccccc";
    }
}
