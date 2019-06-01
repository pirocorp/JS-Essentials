function main(firstString, secondString, thirdString) {
    let firstStringLength = firstString.length;
    let secondStringLength = secondString.length;
    let thirdStringLength = thirdString.length;

    let sumLength = firstStringLength + secondStringLength + thirdStringLength;
    console.log(sumLength);
    console.log(Math.floor(sumLength / 3));
}

main("asd", "asd", "ad");