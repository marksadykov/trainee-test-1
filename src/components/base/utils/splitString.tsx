/**
 * return string divided into 3 parts
 * @param   {string} toSplit  original string to split
 * @return  {string[]}        array of 3 parts of string
 */
const splitString = (toSplit: string): (string[]) => {

    const midIndex = Math.floor(toSplit.length / 2);
    let mid = toSplit[midIndex];
    const before = toSplit.substr(0, midIndex);
    const after = toSplit.substr(midIndex + 1);

    mid = (typeof mid === 'undefined') ? '': mid;

    return [before, mid, after];
}

export default splitString;
