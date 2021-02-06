const clearSymbols = (needClean: string): string =>  {

    return needClean
        .replace(/о/g, 'o')
        .replace(/О/g, 'O')
        .replace(/с/g, 'c')
        .replace(/С/g, 'C')
        .replace(/а/g, 'a')
        .replace(/А/g, 'A')
        .replace(/М/g, 'M')
        .replace(/К/g, 'K')
        .replace(/&laquo;/g, '\u00AB')
        .replace(/&raquo;/g, '\u00BB');
}

export default clearSymbols ;
