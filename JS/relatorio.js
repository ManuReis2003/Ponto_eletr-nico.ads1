function criarRelatorio(){
/* 1 e 1.1 */ 

const containerRegistros = document.getElementById("container-registros");


let registros = JSO.parse (localStorage.getItem("registro");     /*1.Recuperar índices do localstorae (getItem) passar c parâmetro e índice. */
registros.forEach(registro => {
     console.log(registro);
})
    console.log (registros)   /* type of ve o tipo de variável - checar n console! */
// 2  for


for ( let i=0; i < registros.length; i++) {
    console.log(registros[i]);  //console.log(registros[i])

  }

  //  2.2 foreach  //imprimir no HTML

registros.forEach(registro => {  //variável aque representa cada um dos índices do array
    console.log(registro);     //garante que passe por cada  índice desse array

    

    divRegistro.innerHTML = "<p>Olá, Mundo! </p>"
    containerRegistros.appendChild    //adiciona um elemento dentro de outro

  })


        

/* 
   /*1.Recuperar índices do localstorae (getItem) passar c parâmetro e índice.
1.1 Índice registro

2.iterar sobre os registros - relatório  passar item for item - or while
2.1 para cada reistro, criar um elemento na página
2.2 tipo|hora| obs?| anexo| editar| excluir
2.3 agrupar registros por data

*/


criarRelatorio();
