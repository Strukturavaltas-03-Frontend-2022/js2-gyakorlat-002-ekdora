/* ## 1. feladat
- A `01/solution/js/summarize.js` fájlban dolgozz!
- Készíts egy függvényt `summarize` néven!
- Ez a paraméterként kapott tetszőleges darabszámú, tetszőleges értékű egész számot összeadja, és visszatér az összeadás végeredményével. 
- A paraméterként kapott értékek egyszerű number típusúak legyenek! 
- Amennyiben bármelyik paraméter értéke vagy a részeredmény meghaladja a biztonságos tartományt, automatikusan konvertáljad
`BigInt`-be, és természetesen a visszatérési érték is `BigInt` típusú legyen! */

const isBigInt = (num) => {
	const maxNum = BigInt(Number.MAX_SAFE_INTEGER);
	const numToBigInt = BigInt(num);
	return numToBigInt > maxNum;
};

const sumNums = (a, b) => a + b;

const sumBigInts = (a, b) => BigInt(a) + BigInt(b);

const summarize = (...nums) => {
	const numbers = [ ...nums	].filter(num => Number.isInteger(num));
	const hasBigInt = !!numbers.filter(num => isBigInt(num)).length;
	return numbers.reduce(
		(prev, curr) => hasBigInt ? sumBigInts(prev, curr) : sumNums(prev, curr),
		hasBigInt ? BigInt(0) : 0
	);
};

console.log(summarize(10**45, 22, 45.2).toString());

export default summarize;
