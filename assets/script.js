document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newitem input').value.length == 0){
        alert("Por favor escreva no campo");
    } else {
        document.querySelector('#item').innerHTML += `
        
        <div class="itens">
            <span class="tarefa">
                ${document.querySelector('#newitem input').value}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;
        
        // Para remover os items
        let itematual = document.querySelectorAll('.delete');
            for(var i=0; i<itematual.length; i++){
            itematual[i].onclick = function(){
                this.parentNode.remove();
                alert("Tarefa removida");
            }
        }

        let itens = document.querySelectorAll('.itens');
            for(var i=0; i<itens.length; i++){
                itens[i].onclick = function(){
                    this.classList.toggle('feito');
                }
            }

        document.querySelector('#newitem input').value = "";
    }


}

