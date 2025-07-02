// Efeitos de digitação para o título
const titulo = document.querySelector('h1');
const textoOriginal = titulo.textContent;
titulo.textContent = '';

let i = 0;
const velocidadeDigitacao = 100;

function digitar() {
    if (i < textoOriginal.length) {
        titulo.textContent += textoOriginal.charAt(i);
        i++;
        setTimeout(digitar, velocidadeDigitacao);
    } else {
        // Adiciona efeito de cursor piscante após terminar
        titulo.classList.add('cursor-ativo');
    }
}

// Inicia o efeito de digitação após o carregamento
window.addEventListener('load', () => {
    setTimeout(digitar, 500);
    
    // Efeito de hover nos botões de alternativas
    const botoes = document.querySelectorAll('.caixa-alternativas button');
    botoes.forEach(botao => {
        botao.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        botao.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// Adiciona classe ao body para efeitos de carga
document.body.classList.add('carregado');