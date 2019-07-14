function solve(array) {
    const defaulthFlightStatus = 'Ready to fly';
    const inputFlights = array[0];
    const statusChanged = array[1];
    const checkFlightsWithStatus = array[2][0];
    let flights = [];

    for (const currentFlight of inputFlights) {
        const [flightNumber, destination] = currentFlight
            .split(' ')
            .map(x => x.trim())
            .filter(x => x !== '');

        const newFlight = {
            flightNumber: flightNumber,
            destination: destination,
            status: defaulthFlightStatus
        }

        flights.push(newFlight);
    }

    for (const currentStatus of statusChanged) {
        const [flightNumber, newStatus] = currentStatus
            .split(' ')
            .map(x => x.trim())
            .filter(x => x !== '');

        let currentFlight = flights.find(x => x.flightNumber === flightNumber);

        if (currentFlight) {
            currentFlight.status = newStatus;
        }
    }

    flights
        .filter(x => x.status === checkFlightsWithStatus)
        .map(x => {
            return {
                Destination: x.destination,
                Status: x.status
            }
        })
        .forEach(x => console.log(x));    
}
solve([ ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
        ['Cancelled'] ]
);