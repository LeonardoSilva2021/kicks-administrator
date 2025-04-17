export function maskSKU(sku: string): string {
    // Remove caracteres que não sejam letras, números ou hífens
    let valor = sku.replace(/[^A-Za-z0-9]/g, '');

    // Limita o tamanho a 12 caracteres
    if (valor.length > 12) {
        valor = valor.slice(0, 12);
    }

    // Aplica a máscara no formato: XXXXX-XXX (5 letras/números, traço, 3 números)
    if (valor.length > 5) {
        valor = valor.slice(0, 5) + '-' + valor.slice(5, 8);
    }

    return valor;
}