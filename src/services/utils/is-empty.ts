export function isEmpty(valor: any): boolean {
    if (valor === null || valor === undefined) {
        return true;
    } else if (typeof valor === 'string' || Array.isArray(valor)) {
        return valor.length === 0;
    } else if (typeof valor === 'object') {
        return Object.keys(valor).length === 0;
    } else {
        // Para outros tipos de dados, consideramos não vazio
        return false;
    }
}
