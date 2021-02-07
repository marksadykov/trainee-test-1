const makeClassName = (length: number): string => {
    let className = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const alphabetLength = alphabet.length;
    for ( let i = 0; i < length; i++ ) {
        className += alphabet.charAt(Math.floor(Math.random() * alphabetLength));
    }
    return className;
}

export default makeClassName;

