function adicionar(){
    let cor = document.getElementById("cor").value;
    
    let quadro = document.getElementById("quadro");

    let div = document.createElement("div");
    div.style.backgroundColor = cor;
    div.classList.add("quadro");
    let p = document.createElement("p");
    p.innerText = cor;
    div.appendChild(p);
    quadro.appendChild(div);
}