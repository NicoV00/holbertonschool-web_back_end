export default function hasValuesFromArray(set, array) {
    const matchArr = Array.from(set);
    return array.every(num => matchArr.includes(num));
}
