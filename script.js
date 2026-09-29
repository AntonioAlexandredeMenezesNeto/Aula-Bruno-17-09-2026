// Função auxiliar para determinar a classificação usando if/else (Requisito obrigatório)
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}

function calcularEExibirIMC() {
    const pesoInput = document.getElementById("peso").value;
    const alturaInput = document.getElementById("altura").value;
    const resultadoDiv = document.getElementById("resultado");

       if (!pesoInput || !alturaInput || pesoInput <= 0 || alturaInput <= 0) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Erro: Por favor, preencha todos os campos com valores válidos maiores que zero.</p>";
        return; 
    }

    const paciente = {
        peso: parseFloat(pesoInput),
        altura: parseFloat(alturaInput),
        imc: 0,
        classificacao: ""
    };

    paciente.imc = paciente.peso / (paciente.altura * paciente.altura);
    
    paciente.classificacao = classificarIMC(paciente.imc);

    resultadoDiv.innerHTML = `
        <p>O seu IMC é: <strong>${paciente.imc.toFixed(2)}</strong></p>
        <p>Classificação: <strong>${paciente.classificacao}</strong></p>
    `;
}