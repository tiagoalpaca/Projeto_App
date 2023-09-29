// mais de um elementos vamos selecionar todos.
let modal = document.querySelectorAll(".produtos-carrinho");
let excluir = document.querySelectorAll(".bi-trash-fill");

for(let i=0; i < excluir.length;i++){
    excluir[i].addEventListener("click",function(event){
        if(!event.target.classList.contains(".bi-trash-fill")){
            modal[i].remove();
        }
    });
};

//script para incrementar e decrementar o numero de produtos
let decrementar = document.querySelector(".bi-dash-square");
let incrementar = document.querySelector(".bi-plus-square");
let textoProduto = document.querySelector(".numero-produto");
let quantidadeProduto = parseInt(textoProduto.textContent);

incrementar.addEventListener("click",function(){
    quantidadeProduto++;
    textoProduto.innerHTML = quantidadeProduto;
});

decrementar.addEventListener("click",function(){
    if(quantidadeProduto <=1){
        alert("A quantidade de produto não pode ser menor que 1.")
    }else{
        quantidadeProduto--;
        textoProduto.innerHTML = quantidadeProduto;
    }
    
});

function consultaEndereco(){
    let cep= document.querySelector("#cep").value;
    if(cep.length != 8){
        alert("CEP invalido, o CEP precisa ter obrigatoriamente 8 numeros");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(function(data){
            mostrarEndereco(data);
        })
    })
}

function mostrarEndereco(dados){

    let nomeLocalizacao = document.querySelector(".nome-localizacao");
    if(dados.erro){
        nomeLocalizacao.innerHTML = "CEP nao encontrado";
    }else{
        nomeLocalizacao.innerHTML = dados.localidade;
    }
}