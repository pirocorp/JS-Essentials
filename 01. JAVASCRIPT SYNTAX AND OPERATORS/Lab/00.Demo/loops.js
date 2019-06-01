//for loop
for(let i = 0; i < 10; i++) {
    console.log(i);
}

//while loop
let count = 1;
while (count < 1024) {
    console.log(count *= 2); // 2 4 8 16 32 64 128 256 512 1024
};

//do-while loop
let s = "ho";
do {
    console.log(s);	   // ho hoho hohohoho hohohohohohohoho
    s = s + s;
} while (s.length < 20);

//for … in loop
let nums = [10, 15, 20, 25, 'maria', true];
for (let index in nums) {
    console.log(index);
}
// 0 1 2 3 4 5 -> loops through the indices (keys), not values

//for … of loop
for (let value of nums) {
    console.log(value);
}
// 5 10 15 20 maria true -> loops through the values