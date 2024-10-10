// Recebe a página toda
const diaSemana = document.getElementById("dia-semana")
const diaMesAno = document.getElementById("dia-mes-ano")
const horaMinSeg = document.getElementById("hora-min-seg")
const arrayDayWeek =["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

//diaSemana.textContent= "AAAAAAAA" // Elemento textual ( troca o valor do diaSemana )
//console.log(diaSemana.textContent)
//const date = new Date();
//console.log(date.getDay());
//console.log(date.getMonth());


         //FAZER!!!!!
//Todo conjunto numérico exceto ano deve ter 2 dígitos ( adicionar 0 se for menor que 10)
//Retornar dia da semana por extenso -----------
// Formatação DATA/HORA Você precisa adicionar zeros à esquerda para os números menores que 10.

// Função para retornar o dia da semana por extenso
const dialogPonto = document.getElementById("dialog-ponto")

// ARRUMAR !!!!
function getUserLocation(){ 
navigator.geolocation.getCurrentPosition((position) => {   // API 
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});


let proxPonto = {
  "entrada": "intervalo",
  "intervalo": "volta-intervalo",
  "volta-intervalo": "saida",
  "saida": "entrada"
}

let dialogHora = document.getElementById("dialog-hora");
let dialogData = document.getElementById("dialog-data");

dialogData.textContent = "Data: " + dataCompleta();


//     verificar linhas 44 e 45  ****
    // 1 - recuperar o select por meio de id ("select-tipos-ponto")
// let dialogSelect = document.getElementById("select-tipos-ponto");     // 2 - recuperar o tipo do ultimo ponto que está salvo no localstorage
//let ultimoPonto = localStorage.getItem("tipoUltimoPonto");     // 2.2 - conseguimos recuperar um valor do localstorage com o getItem(chave)


const btnRegistrarPonto = document.getElementById("btn-registrar-ponto");
btnRegistrarPonto.addEventListener("click", () => {
    let dialogSelect = document.getElementById("select-tipos-ponto");
    let ultimoPonto = localStorage.getItem("tipoUltimoPonto");
    dialogSelect.value = proxPonto[ultimoPonto];
      //dialogHora.textContent = horaCompleta();

      dialogPonto.showModal();
});

const btnDialogFechar = document.getElementById("btn-dialog-fechar");
btnDialogFechar.addEventListener("click", () => {
    dialogPonto.close();
});

function recuperaPontosLocalStorage() {
  let todosOsPontos = localStorage.getItem("registro");

  if(!todosOsPontos) {
      return [];
  }

  return JSON.parse(todosOsPontos);      //armazena dados
}

function salvarRegistroLocalStorage(ponto) {
  let pontos = recuperaPontosLocalStorage();
  
    pontos.push(ponto);
    // 1 - recuperar os registros anteriores
    // 2 - adicionar o novo registro (ponto) no final do array de registros

    localStorage.setItem("registro", JSON.stringify(pontos));
}

const divAlerta = document.getElementById("div-alerta");


const btnDialogRegistrarPonto = document.getElementById("btn-dialog-registrar-ponto");
btnDialogRegistrarPonto.addEventListener("Click", async () => { 
                                                // pesquisar sobre ASYNC 
    let dataCompleta = dataCompleta();
    let hora = horaCompleta();
    let tipoPonto = document.getElementById("select-tipos-ponto").value;

    let location = await getUserLocation();    //  verificar!!!!!!
                  // pesquisar sobre AWAIT   //PESQUISAR SOBRE COMO JS TRAZ A LATITUDE E LONGITUDE 
    let ponto = {
      "data": dataCompleta,
      "hora": hora,
      "tipo": tipoPonto,
      "id": 1
  }

  salvarRegistroLocalStorage(ponto);
    
  localStorage.setItem("tipoUltimoPonto", tipoPonto);

  console.log(ponto);     ////////////////////////
  dialogPonto.close();

  divAlerta.classList.remove("hidden");
  divAlerta.classList.add("show");

  setTimeout(() => {
      divAlerta.classList.remove("show");
      divAlerta.classList.add("hidden");
  }, 5000);
});

function daySemana() {
  const date = new Date();  //retorna dia semana
  return arrayDayWeek[date.getDay()];
}
// Função para retornar a data completa
function dataCompleta(){ 
  const date = new Date();     //FUNÇÃO QUE TRAZ A DATA   -- padstart - define tamanho da string (dígitos)
  return String(date.getDate()).padStart(2,'0') + "/" + String(date.getMonth() + 1).padStart(2,'0') + "/" + date.getFullYear();
}
                // PAD padStart(2, "0"): Adiciona zeros à esquerda da string até que ela tenha pelo menos 2 caracteres. Isso garante que a hora seja sempre exibida com 2 dígitos 
function horaCompleta() {  // FUNÇÃO QUE TRAZ A HORA COMPLETA
  const date = new Date();
  return String( date.getHours()).padStart(2,'0') + ":" + String(date.getMinutes()).padStart(2,'0') + ":" + date.getSeconds();
    //date.getHours(): Obtém a hora atual como um número (0-23). toString(): Converte o número em uma string.
     //Essa linha obtém os minutos atuais a partir do objeto Date e os converte em uma string
     //Essa linha retorna uma string que representa a hora completa no formato "HH:MM:SS". 
}
function atualizaHora(){
    horaMinSeg.textContent = horaCompleta();                                             //-> tempo de intervalo entre as execuções em horas
                                //funçaõ que quero executar 
}
function atualizaHoraDialog() {
  dialogHora.textContent = "Hora: " + horaCompleta();
}

atualizaHora();
setInterval(atualizaHora,1000);

atualizaHoraDialog()
setInterval(atualizaHoraDialog, 1000);


// Atualiza os elementos da página       /sobreescreve oq ta no HTML com oq a função retorna
diaMesAno.textContent = dataCompleta();
diaSemana.textContent = daySemana();
