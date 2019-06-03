const arr = [
    {
        id: 1245,
        val: "Pesho"
    },

    {
        id: 4623,
        val: "Pesho"
    },

    {
        id: 9245,
        val: "Pesho"
    }
];

const assocArr = arr.reduce((p, c) => {
    p[c.id] = c;
    return p;
}, {});

console.log(assocArr);
console.log(assocArr[4623]);