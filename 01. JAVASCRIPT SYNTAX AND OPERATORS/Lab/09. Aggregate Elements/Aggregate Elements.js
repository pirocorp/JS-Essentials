function solve(array) {
    console.log(sum(array));
    console.log(inverseSum(array));
    console.log(concat(array));

    function sum(nums) {
        let total = 0;
        for (let value of nums) {
            total += value;
        }
        return total;
    }

    function inverseSum(nums) {
        let total = 0;
        for (let value of nums) {
            total += 1 / value;
        }
        return total;
    }

    function concat(nums) {
        let total = '';
        for (let value of nums) {
            total += value;
        }
        return total;
    }
}

solve([2, 4, 8, 16]);