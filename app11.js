// Função para mostrar informações sobre Taís Araújo
function mostrarInformacaoFigura(nome) {
    let infoContainer = document.getElementById('informacao');
    if (nome === 'tais') {
        infoContainer.innerHTML = `
            <h3>Taís Araújo</h3>
            <p>Taís Araújo é uma das principais atrizes brasileiras, conhecida não apenas pelo seu talento, mas também pelo seu ativismo em defesa da igualdade racial. Ela tem sido uma voz ativa na luta contra o racismo, promovendo a visibilidade da mulher negra na mídia.</p>
            <p>Além de sua carreira como atriz, Taís Araújo também defende temas como a autoestima da mulher negra e a importância de representações autênticas de negros e negras em papéis de protagonismo na televisão brasileira.</p>
        `;
    } else if (nome === 'zumbi') {
        infoContainer.innerHTML = `
            <h3>Zumbi dos Palmares</h3>
            <p>Zumbi dos Palmares foi o líder do Quilombo dos Palmares, um dos maiores focos de resistência à escravidão no Brasil colonial. Ele representa a luta pela liberdade e pela dignidade do povo negro.</p>
            <p>A morte de Zumbi, em 1695, tornou-se um símbolo da resistência negra, e sua memória é celebrada no Dia da Consciência Negra, 20 de novembro.</p>
        `;
    } else if (nome === 'martin') {
        infoContainer.innerHTML = `
            <h3>Martin Luther King Jr.</h3>
            <p>Martin Luther King Jr. foi um dos maiores líderes do movimento pelos direitos civis nos Estados Unidos. Sua luta pela igualdade e contra o racismo é um marco histórico que inspirou gerações de ativistas no mundo inteiro.</p>
            <p>Famoso pelo seu discurso “Eu Tenho Um Sonho”, King defendia a justiça, a paz e a liberdade para todos, independentemente da cor da pele.</p>
        `;
    }
}

// Função para exibir uma citação inspiradora
function mostrarCitacao() {
    const citacoes = [
        "A luta pela liberdade nunca é em vão. - Taís Araújo",
        "O maior inimigo da mudança é o medo. - Martin Luther King Jr.",
        "Ninguém é livre enquanto o último de nós não for livre. - Zumbi dos Palmares",
        "A verdadeira revolução começa na cabeça. - C.L.R. James",
        "É preciso lutar contra os preconceitos, todos os dias. - Lélia Gonzalez"
    ];
    const citacao = citacoes[Math.floor(Math.random() * citacoes.length)];
    document.getElementById('citacao').innerHTML = `<p><i>"${citacao}"</i></p>`;
}

// Função para destacar um texto com a classe 'destaque' ao passar o mouse
function adicionarDestaque(event) {
    event.target.classList.add('destaque');
}

// Função para remover o destaque quando o mouse sai
function removerDestaque(event) {
    event.target.classList.remove('destaque');
}

// Event listeners para destacar o texto
document.querySelectorAll('.destaque-item').forEach(item => {
    item.addEventListener('mouseover', adicionarDestaque);
    item.addEventListener('mouseout', removerDestaque);
});

// Função para exibir um alerta com uma mensagem importante
function exibirAlerta() {
    alert("Este é um lembrete importante sobre a luta pela igualdade racial!");
}

