function alo(){
    alert('Alo!')
}
function olaNome(nome) {
    alert('Olá ' + nome + '. Bem vindo ao curso.') //Concatenação de strings
}
function saudacao(){
    const nome = document.getElementById('nome').value
    alert(`Boa noite ${nome}.`) //interpolação de texto
}
function mouseSobre(){
    alert('O mouse está em cima!')
}
function mouseFora(){
    alert('O mouse saiu!')
}
function textoMudou(){
    alert('O texto mudou.')
}
function emFoco(){
    const user = document.getElementById('user')
    user.style.border = '5px green solid'
    user.style.backgroundColor = 'grey'
}
function perdeuFoco(){
    const user = document.getElementById('user')
    user.style.border = '1px black solid'
    user.style.background = 'white'
}