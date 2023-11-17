function carregarEstados(estados){
     var select = document.getElementById("estados");
     for(var i=0;i<select.length;i++){
        var option = document.createElement('option');
        option.innerHTML = estados[i].nome;
        select.appendChild(option);
     }
}


fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").
then(response=>response.json()).
then(response=>carregarEstados(response));