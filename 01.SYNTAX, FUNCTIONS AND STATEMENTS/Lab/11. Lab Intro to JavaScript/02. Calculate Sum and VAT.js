function sumAndVat(arr) {
    let sum = 0;
    let vat = 0;

    for (let x of arr) {
        sum += x;
        vat += 0.2 * x;
    }

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${sum + vat}`);
}

sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);