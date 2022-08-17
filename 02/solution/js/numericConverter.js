/* ## 2. feladat
- A `02/solution/js/numericConverter.js` fájlban dolgozz!
- Készíts egy függvényt `numericConverter` néven!
- Ez a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas és tizenhatos
számrendszerbe is.
- Ezeket az értékeket egy objektumban add vissza. A property-k neve legyen: binary, octal, hexa. */


const numericConverter = (num) => {
  return {
    binary: num.toString(2),
    octal: num.toString(8),
    hexa: num.toString(16),
  };
}

console.log(numericConverter(55));

export default numericConverter;