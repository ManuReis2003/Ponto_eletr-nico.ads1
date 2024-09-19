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

navigator.geolocation.getCurrentPosition((position) => {   // API 
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});
//To do : 

//Apresentar para o user a data e hora atualizados
// atualizar a data todos os dia 0:00
//atualizar a hr td segundo
//Organizar código
//salvar o histório de ponto ( não sobrescrever)
//salvar no localstore o último tipo de pono do usuário
//Recuperar localização do user
// Ao registrar ponto, fechar modal
// Estilo 


//3- Fazer uma condicional e atrbuir o valor o select confroe a tabela:
   // tipo útimo ponto  | valor select 
   // entrada           | intervalo
   //intervalo          | volta-intervalo
   //volta-intervalo    | saída
   //saída              | entrada
    // TO-DO:
    // 1 - recuperar o select por meio de id ("select-tipos-ponto")
    let dialogSelect = document.getElementById("select-tipos-ponto");
    
    // 2 - recuperar o tipo do ultimo ponto que está salvo no localstorage
    // 2.1 - salvamos o tipo na chave "tipoUltimoPonto"
    // 2.2 - conseguimos recuperar um valor do localstorage com o getItem(chave)
    let ultimoPonto = localStorage.getItem("tipoUltimoPonto");
    
    // 3 - Fazer uma condicional e atribuir o valor do select conforme tabela
    // tipo ultimo ponto  |  valor select
    // entrada            |  intervalo
    // intervalo          |  volta-intervalo
    // volta-intervalo    |  saida
    // saida              |  entrada
    // let proximoPonto = proxPonto[/*tipo do último ponto*/];
    // 3.1 para setar o valor de um select, usamos o atributo value

const btnRegistrarPonto = document.getElementById("btn-registrar-ponto");
btnRegistrarPonto.addEventListener("click", () => { // () => ARROW FUNCTION)
    dialogPonto.showModal();
});


const btnDialogFechar = document.getElementById("btn-dialog-fechar");
btnDialogFechar.addEventListener("click", () => {
    dialogPonto.close();
});


const btnDialogRegistrarPonto = document.getElementById("btn-dialog-registrar-ponto");
btnDialogRegistrarPonto.addEventListener("Click", () => { 

  let dataCompleta = dataCompleta();
  let hora = horaCompleta();
  let tipoPonto = document.getElementById("select-tipos-ponto").value;


  let ponto = {
    "data": dataCompleta,
    "hora": hora,
    "tipo": tipoPonto,
    "id": 1
  }
  console.log(ponto);     ////////////////////////
  
 localStorage.setItem("registro", JSON.String(ponto));      //armazena dados
 localStorage.setItem("tipoUltimoponto", tipoPonto);
 });

// Todo conjunto numérico (exceto ano) deve ter 2 dígitos (adicionar 0 se for menor q 10)
// Retornar dia da semana por extenso (em pt-br)
// recuperar tipo do último acesso 
// salvamos o tipo de chave 


function daySemana() {
    //retorna dia semana
  const date = new Date();
  return arrayDayWeek[date.getDay()];
}
// Função para retornar a data completa
function dataCompleta(){ 
  const date = new Date();     //FUNÇÃO QUE TRAZ A DATA   -- padstart - define tamanho da string (dígitos)
  return String(date.getDate()).padtart(2,'0') + "/" + String(date.getMonth() + 1).padStart(2,'0') + "/" + date.getFullYear();
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
setInterval(atualizaHora,1000);
// Atualiza os elementos da página       /sobreescreve oq ta no HTML com oq a função retorna
diaMesAno.textContent = dataCompleta();
horaMinSeg.textContent = horaCompleta();
diaSemana.textContent = daySemana();
