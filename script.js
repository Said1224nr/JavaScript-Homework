let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
console.log(letterSearch);
let wordsWithN = [];
let wordsWithoutN = [];

for (let word of letterSearch) {
    if (word.includes('n')) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
}

console.log(`n harfi ishtirok etgan so'zlar: ${wordsWithN}`);
console.log(`n harfi ishtirok etmagan so'zlar: ${wordsWithoutN}`);