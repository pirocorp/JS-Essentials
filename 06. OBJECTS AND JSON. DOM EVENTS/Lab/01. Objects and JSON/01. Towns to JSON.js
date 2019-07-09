function solve(arr) {
    let result = [];

    const objProperties = arr[0]
        .split('|')
        .filter(x => x !== '')
        .map(x => x.trim());

    for (let i = 1; i < arr.length; i++) {   
        const currentObject = createObject(arr[i]);
        result.push(currentObject)
    }

    console.log(JSON.stringify(result));

    function createObject(str) {
        let currentObj = {};

        const tokens = str
            .split('|')
            .filter(x => x !== '')
            .map(x => x.trim());

        for (let i = 0; i < objProperties.length; i++) {
            let element = tokens[i];
            
            if(!isNaN(element)) {
                element = Number(element);
            }

            currentObj[objProperties[i]] = element;
        }

        return currentObj;
    }
}
solve(['| Town | Latitude | Longitude |',
    '| Random Town | 0.00 | 0.00 |']
);