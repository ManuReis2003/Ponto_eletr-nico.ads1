                //recebe a pág td
const diaSemana = document.getElementById("dia-semana")
const diaMesAno = document.getElementById("dia-mes-ano")
const horaMinSeg = document.getElementById("hora-min-seg")

//diaSemana.textContent= "AAAAAAAA" // Elemento textual ( troca o valor do diaSemana )

//console.log(diaSemana.textContent)
//const date = new Date();
//console.log(date.getDay());
//console.log(date.getMonth());


         //FAZER!!!!!
//Todo conjunto numérico exceto ano deve ter 2 dígitos ( adicionar 0 se for menor que 10)
//Retornar dia da semana por extenso 

function diaSemana(){
    //retornar dia da semana
}


function dataCompleta(){ 
    const date = new Date();     //FUNÇÃO QUE TRAZ A DATA 
    return date.getDate()+ "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

function horaCompleta(){ 
    const date = new Date();      //FUNÇÃO QUE TRAZ A DATA 
    return date.getHours()+ ":" + date.getMinutes() + ":" + date.getSeconds();
}

diaMesAno.textContent = dataCompleta(); //sobreescreve oq ta no HTML com oq a função retorna
horaMinSeg.textContent = horaCompleta();
