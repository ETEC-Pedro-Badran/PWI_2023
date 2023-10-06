function adicionar(){
    let produto = document.getElementById("produto").value;
    
    document.getElementById("produto").value = "";

    let lista = document.getElementById("lista");

    lista.innerHTML = lista.innerHTML + "<li>"+produto+"</li>";

}