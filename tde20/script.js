function somar(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if(num1 != '' && num2 != ''){
        let soma = num1 + num2
        document.getElementById('result').innerHTML = 'Resultado: ' + soma
    }else{
        alert('Preencha todos os campos!')
    }
}

function limpar(){
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    document.getElementById('result').innerHTML = 'Resultado:'
}


//Código exercício 2

function calcular(){
    const ap1 = Number(document.getElementById('ap1').value)
    const ap2 = Number(document.getElementById('ap2').value)
    const as = Number(document.getElementById('as').value)
    let nota = ap1 + ap2 + as
    //Verificar aprovação 
    document.getElementById('nota').innerHTML = 'Nota: ' + nota
}

function verificaAp1(){
    const ap1 = document.getElementById('ap1').value
    if(ap1 < 0 || ap1 > 1.5){
        document.getElementById('ap1').value = ''
        alert('Nota inválida. Digite uma nota entre 0 e 1.5')
        document.getElementById('ap1').focus()
    }
}