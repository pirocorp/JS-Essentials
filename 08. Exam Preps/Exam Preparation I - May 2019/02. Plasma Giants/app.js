function solve(arr, number) {
    const leftPart = arr.slice(0, arr.length / 2);
    const rightPart = arr.slice(arr.length / 2);

    function createGiant(inputArr, cutSize){
        let cuts = [];

        while(inputArr.length > 0) {
            cuts.push(inputArr.splice(0, cutSize))
        }

        cuts = cuts.map(x => x.reduce((a, b) => a * b, 1));

        return cuts.reduce((a, b) => a + b, 0);
    }

    const leftGiant = createGiant(leftPart, number);
    const rightGiant = createGiant(rightPart, number);

    function giantFight(first, second) {
        const damagePerHit = Math.min(...arr);
        const deadLine = Math.max(...arr);

        let rounds = 1;

        if(damagePerHit > 0) {
            while (first > deadLine && second > deadLine) {
                first -= damagePerHit;
                second -= damagePerHit;
                rounds++;
            }
        }

        if (first > second) {
            console.log(`First Giant defeated Second Giant with result ${first} - ${second} in ${rounds} rounds`);
        } else if(second > first) {
            console.log(`Second Giant defeated First Giant with result ${second} - ${first} in ${rounds} rounds`);
        } else {
            console.log(`Its a draw ${first} - ${second}`);
        }
    }

    giantFight(leftGiant, rightGiant);
}
solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);