// Quando a página carregar completamente
document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o token está armazenado no localStorage
    const token = localStorage.getItem('authToken');

    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    // Botão de logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('authToken');
            window.location.href = 'login.html';
        });
    }

    // Lógica de adicionar conta
    const contaForm = document.getElementById('conta-form');
    const listaContas = document.getElementById('lista-contas');

    function criarContaElement(conta) {
        const itemLista = document.createElement('li');
        itemLista.classList.add('bg-white/20', 'rounded', 'p-2', 'relative');
    
        itemLista.innerHTML = `
            <h3 class="text-lg font-semibold">${conta.descricao}</h3>
            <p>Valor: R$ ${conta.valor}</p>
            <p>Vencimento: ${conta.vencimento}</p>
            <button class="absolute top-2 right-2 text-red-600 hover:text-red-800" title="Excluir">✖</button>
        `;
    
        // Seleciona o botão recém-criado e adiciona o evento de clique
        const botaoExcluir = itemLista.querySelector('button');
        botaoExcluir.addEventListener('click', () => {
            itemLista.remove(); // Remove o card da lista
        });
    
        listaContas.appendChild(itemLista);
    }
    

    contaForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const descricao = document.getElementById('descricao').value;
        const valor = document.getElementById('valor').value.replace('.', ',');
        const vencimento = document.getElementById('vencimento').value;

        if (!descricao || !valor || !vencimento) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        const novaConta = { descricao, valor, vencimento };
        criarContaElement(novaConta);
        contaForm.reset();
    });
});
