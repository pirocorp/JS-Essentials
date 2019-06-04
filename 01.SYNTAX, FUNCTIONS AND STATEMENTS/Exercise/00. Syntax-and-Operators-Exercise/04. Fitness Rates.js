function solve(day, service, time) {
    let dayOfWeek = function(day) {
        return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].indexOf(day);
    }

    let weekDayService = {
        "Fitness": 5,
        "Sauna": 4,
        "Instructor": 10
    }

    let weekendService = {
        "Fitness": 8,
        "Sauna": 7,
        "Instructor": 15
    }

    let currentDayOfWeek = dayOfWeek(day);

    if(currentDayOfWeek <= 4) {
        let baseValue = weekDayService[service]

        if (time >= 15) {
            baseValue += 2.5;
        }

        console.log(baseValue);
    } else {
        console.log(weekendService[service]);
    }
}

solve('Monday', 'Fitness', 12.00);

