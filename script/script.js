    /* SCRIPT PARA FAZER SUBSTITUIÇÃO DE DIVS */

document.getElementById("cadastrarBotao").addEventListener("click", function() {
    
    var leftFrame = document.getElementById("leftFrame");
    var divNova = document.getElementById("divNova");
    var rightFrame = document.getElementById("rightFrame");

    leftFrame.style.display = "none";
    rightFrame.style.display = "none";
    divNova.style.display = "block";

    
    divNova.classList.add("visivel");
});

document.getElementById("voltarBotao").addEventListener("click", function() {
    var leftFrame = document.getElementById("leftFrame");
    var divNova = document.getElementById("divNova");
    var rightFrame = document.getElementById("rightFrame");

    leftFrame.style.display = "block";
    rightFrame.style.display = "block";

  
    divNova.classList.remove("visivel");
});


/* FIM DO SCRIPT  */


/* FUNÇÃO DE AUTOMAÇÃO DE CARACTERES DO CPF */

function formatarCPF(campo) {
    campo.value = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (campo.value.length > 3) {
        campo.value = campo.value.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (campo.value.length > 6) {
        campo.value = campo.value.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (campo.value.length > 9) {
        campo.value = campo.value.replace(/(\d{3})(\d{2})$/, '$1-$2');
    }
}
    /* NÃO ESQUECER DA VERIFICAÇÃO NO SERVIDOR PARA VALIDAR O CPF */






function mostrarCampo(campo) {
        var cpfInput = document.getElementById('cpf-input');
        var cnpjInput = document.getElementById('cnpj-input');

        if (campo.value === 'cpf') {
            cpfInput.style.display = 'block';
            cnpjInput.style.display = 'none';
        } else if (campo.value === 'cnpj') {
            cnpjInput.style.display = 'block';
            cpfInput.style.display = 'none';
        }
}

function formatarCNPJ(campo) {
    var valor = campo.value.replace(/\D/g, '');

    if (valor.length <= 14) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
        print.documentwrite("Dígito inválido.");
    }

    campo.value = valor;
}



/* TESTE DE API PARA CEP */

function consultarCEP() {
    var cep = document.getElementById('cep').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        })
        .catch(error => {
            alert('CEP não encontrado. Verifique o CEP e tente novamente.');
        });
}