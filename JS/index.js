// Recebe a página toda
const diaSemanaElement = document.getElementById("dia-semana")
const diaMesAnoElement = document.getElementById("dia-mes-ano")
const horaMinSegElement = document.getElementById("hora-min-seg")


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
function getDiaSemana() {
  const date = new Date();
  const diasSemana =["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  return diasSemana[date.getDay()];
}

// Função para retornar a data completa
function dataCompleta(){ 
  const date = new Date();     //FUNÇÃO QUE TRAZ A DATA 
  return date.getDate()+ "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}


// Função para retornar a hora completa
                // PAD padStart(2, "0"): Adiciona zeros à esquerda da string até que ela tenha pelo menos 2 caracteres. Isso garante que a hora seja sempre exibida com 2 dígitos 
function horaCompleta() {
  const date = new Date();
  const horas = date.getHours().toString().padStart(2, "0");   //date.getHours(): Obtém a hora atual como um número (0-23). toString(): Converte o número em uma string.
  const minutos = date.getMinutes().toString().padStart(2, "0");   //Essa linha obtém os minutos atuais a partir do objeto Date e os converte em uma string
  const segundos = date.getSeconds().toString().padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;   //Essa linha retorna uma string que representa a hora completa no formato "HH:MM:SS". 
}

// Atualiza os elementos da página       /sobreescreve oq ta no HTML com oq a função retorna
diaMesAnoElement.textContent = getDataCompleta();
horaMinSegElement.textContent = getHoraCompleta();
diaSemanaElement.textContent = getDiaSemana();