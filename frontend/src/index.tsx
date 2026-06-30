export {};

//Função para extrair os dados do formulario de login e tratar campo não preenchido.
const usuario = document.getElementById('usuario') as HTMLInputElement
const senha = document.getElementById('senha') as HTMLInputElement
const btnLogin = document.getElementById('btn_login') as HTMLButtonElement

btnLogin.addEventListener('click', (evento) => {
    evento.preventDefault();

    const usuarioInfo = usuario.value;
    const senhaInfo = senha.value;

    if (usuarioInfo ==='' || senhaInfo === '') { 

        console.log('tem parada errada, irmão.')

    } else{
        console.log({usuarioInfo}, {senhaInfo})
        
    };

});