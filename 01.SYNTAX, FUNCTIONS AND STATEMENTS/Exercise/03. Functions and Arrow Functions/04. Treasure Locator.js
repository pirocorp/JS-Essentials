function solve(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        let pointX = arr[i];
        let pointY = arr[i + 1];

        let result = checkMap(pointX, pointY);
        
        if(result) {
            console.log(result.name);
        } else {
            console.log("On the bottom of the ocean");
        }
    }

    function checkMap(x, y) {
        let ilands = [
            {
                name: 'Tuvalu',
                xMin: 1,
                xMax: 3,
                yMin: 1,
                yMax: 3
            },
            {
                name: 'Tokelau',
                xMin: 8,
                xMax: 9,
                yMin: 0,
                yMax: 1
            },
            {
                name: 'Samoa',
                xMin: 5,
                xMax: 7,
                yMin: 3,
                yMax: 6
            },
            {
                name: 'Tonga',
                xMin: 0,
                xMax: 2,
                yMin: 6,
                yMax: 8
            },
            {
                name: 'Cook',
                xMin: 4,
                xMax: 9,
                yMin: 7,
                yMax: 8
            }
        ];

        let result = ilands.find(i => checkPointInside(i, x, y));
        return result
    }

    /**
    *
    * @param {Object} iland
    * @param {Number} x
    * @param {Number} y
    * @returns {Boolean}
    */
    function checkPointInside(iland, x, y) {
        let cordinateX = iland.xMin <= x && iland.xMax >= x;
        let cordinateY = iland.yMin <= y && iland.yMax >= y;
        return cordinateX && cordinateY;
    }
}

solve([4, 2, 1.5, 6.5, 1, 3]);