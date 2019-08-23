function solve() {
    const sendButtonElement = document.getElementById('btnSend');

    const restaurants = {}
    
    sendButtonElement.addEventListener('click', processData);

    function processData(e) {
        const inputData = JSON.parse(document.getElementsByTagName('textarea')[0].value);

        for (let i = 0; i < inputData.length; i++) {
            const currentData = inputData[i];
            const currentDataTokens = currentData.split(' - ');

            const restaurantName = currentDataTokens[0];

            if(!restaurants.hasOwnProperty(restaurantName)){
                restaurants[restaurantName] = {
                    name: restaurantName,
                    employees: [],
                    averageSalary: function() {
                        const result = this.employees
                            .map(x => x.salary)
                            .reduce((a, b) => a + b, 0) / this.employees.length;
                        return result;
                    },
                    bestSalary: function() {
                        const result = Math.max(...this.employees.map(x => x.salary));
                        return result;
                    }
                }
            }

            const currentRestaurant = restaurants[restaurantName];

            const employeesDataTokens = currentDataTokens[1].split(', ');

            for (let i = 0; i < employeesDataTokens.length; i++) {
                const currentEmployeeData = employeesDataTokens[i]
                    .split(' ')
                    .filter(x => x !== '');

                const currentEmployee = {
                    name: currentEmployeeData[0],
                    salary: Number(currentEmployeeData[1])
                }

                currentRestaurant.employees.push(currentEmployee);
            }
        }
        
        let bestRestaurant;

        for (const key in restaurants) {
            if(!bestRestaurant) {
                bestRestaurant = restaurants[key];
                continue;
            }

            const currentRestaurant = restaurants[key];

            if(currentRestaurant.averageSalary() > bestRestaurant.averageSalary()) {
                bestRestaurant = currentRestaurant;
            }
        }

        const bestRestaurantElement = document.getElementById('bestRestaurant').querySelector('p');
        bestRestaurantElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary().toFixed(2)} Best Salary: ${bestRestaurant.bestSalary().toFixed(2)}`;
        
        const workers = bestRestaurant.employees
            .sort((a, b) => b.salary - a.salary)
            .map(x => `Name: ${x.name} With Salary: ${x.salary}`);
        const bestRestaurantWorkersElement = document.getElementById('workers').querySelector('p');
        bestRestaurantWorkersElement.textContent = workers.join(' ');
    }
}