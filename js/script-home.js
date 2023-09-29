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