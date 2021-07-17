const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    console.log(nome, email);
    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = '<p>Carregando...</p>'

    let pronto = '<p>Cadastro realizado com sucesso!</p>'

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    },1000)

})