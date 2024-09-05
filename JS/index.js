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

const btnRegistrarPonto = document.getElementById("btn-registrar-ponto");
btnRegistrarPonto.addEventListener("click", () => {
    dialogPonto.showModal();
});


const btnDialogFechar = document.getElementById("btn-dialog-fechar");
btnDialogFechar.addEventListener("click", () => {
    dialogPonto.close();
});

// 
function daySemana() {
    //retorna dia semana
  const date = new Date();
  return arrayDayWeek[date.getDay()];
}
// Função para retornar a data completa
function dataCompleta(){ 
  const date = new Date();     //FUNÇÃO QUE TRAZ A DATA 
  return date.getDate()+ "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}
                // PAD padStart(2, "0"): Adiciona zeros à esquerda da string até que ela tenha pelo menos 2 caracteres. Isso garante que a hora seja sempre exibida com 2 dígitos 
function horaCompleta() {  // FUNÇÃO QUE TRAZ A HORA COMPLETA
  const date = new Date();
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
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