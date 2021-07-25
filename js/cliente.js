function cadastraCliente() {

    var nome = document.getElementById("nome").value;
    var celular = document.getElementById("celular").value;
    var endereco = document.getElementById("endereco").value;
    var cidade = document.getElementById("cidade").value;

    let info = {
        nome: nome,
        celular: celular,
        endereco: endereco,
        cidade: cidade
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

    alert("Cliente cadastrado com sucesso!");
    location.reload();
}