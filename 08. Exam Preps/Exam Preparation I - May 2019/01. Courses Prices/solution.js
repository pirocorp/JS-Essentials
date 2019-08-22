function solve(fund, advanced, app, educationForm) {
    let courseDiscount = 1;

    const courses = {
        fund: 170,
        advanced: 180,
        app: 190,
    };

    if(!fund) {
        courses.fund = 0;
    }

    if(!advanced) {
        courses.advanced = 0;
    }

    if(!app) {
        courses.app = 0;
    }

    if(advanced && fund) {
        courses.advanced *= 0.9;
    }

    if(fund && advanced && app) {
        courseDiscount -= 0.06;
    }

    if (educationForm === 'online') {
        for (const key in courses) {
            courses[key] *= 0.94;
        }
    }

    let result = 0;

    for (const key in courses) {
        result += courses[key];
    }

    result *= courseDiscount;
    result = Math.round(result);
    
    console.log(result);
}
solve(true, true, false, "onsite");