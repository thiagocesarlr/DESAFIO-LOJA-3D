function finalizarCompra() {
    // 1. Preços dos 10 produtos cadastrados na ordem da página
    const precos = [
        35.00, // 1. Suporte de Controle
        50.00, // 2. Miniatura Robô
        25.00, // 3. Vaso Geométrico
        20.00, // 4. Suporte de Celular
        75.00, // 5. Luminária LED
        10.00, // 6. Chaveiro Geeks
        40.00, // 7. Organizador de Mesa
        30.00, // 8. Porta-Copos
        90.00, // 9. Dragão Articulado
        60.00  // 10. Apoio de Livros
    ];

    const nomesProdutos = [
        "Suporte de Controle Minimalista",
        "Miniatura Robô Articulado",
        "Vaso Geométrico para Suculentas",
        "Suporte de Celular Dobrável",
        "Luminária Geométrica LED",
        "Chaveiro Geeks Variados",
        "Organizador de Mesa Modular",
        "Kit Porta-Copos Hexagonal",
        "Dragão Chinês Articulado",
        "Apoio de Livros Gamer"
    ];

    let quantidades = [];
    let totalGeral = 0;
    let produtosComprados = 0;

    // 2. Coletando os valores diretamente dos inputs da tela
    for (let i = 0; i < nomesProdutos.length; i++) {
        let inputEl = document.getElementById(`qtd-${i}`);
        let qtd = Number(inputEl.value);

        if (isNaN(qtd) || qtd < 0) {
            alert(`Quantidade inválida para o produto: ${nomesProdutos[i]}`);
            return;
        }

        quantidades.push(qtd);
        totalGeral += qtd * precos[i];
        produtosComprados += qtd;
    }

    // 3. Verificando se nenhum produto foi selecionado
    if (produtosComprados === 0) {
        alert("Nenhum produto foi selecionado! Por favor, escolha pelo menos uma quantidade nos itens acima.");
        return;
    }

    // 4. Perguntando a forma de pagamento
    let formaPagamento = prompt(
        `Valor total da compra: R$ ${totalGeral.toFixed(2)}\n\n` +
        "Escolha a forma de pagamento:\n" +
        "1 - Pix (5% de desconto)\n" +
        "2 - Cartão de Crédito\n" +
        "3 - Boleto Bancário\n\n" +
        "Digite o número da opção desejada:"
    );

    let nomePagamento = "";
    let desconto = 0;

    if (formaPagamento === "1") {
        nomePagamento = "Pix (com desconto)";
        desconto = totalGeral * 0.05; // 5% de desconto
        totalGeral -= desconto;
    } else if (formaPagamento === "2") {
        nomePagamento = "Cartão de Crédito";
    } else if (formaPagamento === "3") {
        nomePagamento = "Boleto Bancário";
    } else {
        alert("Opção de pagamento inválida. A compra foi cancelada.");
        return;
    }

    // 5. Montando o recibo final da compra
    let resumo = "=== PEDIDO FINALIZADO COM SUCESSO! ===\n\n";

    for (let i = 0; i < nomesProdutos.length; i++) {
        if (quantidades[i] > 0) {
            let subtotal = quantidades[i] * precos[i];
            resumo += `- ${nomesProdutos[i]}: ${quantidades[i]}x (R$ ${subtotal.toFixed(2)})\n`;
        }
    }

    if (desconto > 0) {
        resumo += `\nDesconto Aplicado (Pix): - R$ ${desconto.toFixed(2)}`;
    }

    resumo += `\nFORMA DE PAGAMENTO: ${nomePagamento}`;
    resumo += `\n\nVALOR TOTAL A PAGAR: R$ ${totalGeral.toFixed(2)}`;
    resumo += "\n\nObrigado por comprar na ThiKaPrint 3D! Volte sempre! 🚀";

    alert(resumo);
}