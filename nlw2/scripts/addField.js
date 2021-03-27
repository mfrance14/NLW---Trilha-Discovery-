//procurar o botao 
document.querySelector("#add-time")
.addEventListener('click',cloneField)//clicar no botao

//executar uma ação
function cloneField(){
    
 //duplicar os campos
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//pega ele e todo conteudo dele se nao pegaria so a div vazia

   //pegar os campo
   const fields = newFieldContainer.querySelectorAll('input')//procura tudo que é input e atribui ao fields
    //para cada campo ser limpo

    fields.forEach(function(field){
        //pegar o field do momento e limpa
        field.value = ''
        
    })
    //colocar na página
    document.querySelector('#schedule-itens').appendChild(newFieldContainer)
}
   