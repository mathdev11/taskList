$(document).ready(function(){
    $('form').on('submit' , function(e){
        e.preventDefault();
        const inputTarefas = $('#nomeTarefa');
        const ListaDeTarefas = $('#taskList');
        
        $(`<li> ${inputTarefas.val()} </li>`).appendTo(ListaDeTarefas)
        inputTarefas.val('')
        $("ul").on("click", "li", function(){
            $(this).toggleClass('line-through');
        });
    })
})