function cadastraProduto() {

    var produto = document.getElementById("produto").value;
    var preco = document.getElementById("preco").value;

    let info = {
        produto: produto,
        preco: preco
    };

    let cadastrados = localStorage.getItem("cadastrados");

    if(cadastrados == null){
        cadastrados = []
    }
    else{
        cadastrados = JSON.parse(cadastrados);
    }

    cadastrados.push(info);

    var infoJson = JSON.stringify(cadastrados);
    localStorage.setItem("cadastrados", infoJson);

    alert("Produto cadastrado com sucesso!");
    location.reload();
}