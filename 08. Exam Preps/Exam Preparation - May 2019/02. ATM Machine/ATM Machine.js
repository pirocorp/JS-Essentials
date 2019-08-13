function atmMachine(commandArrays) {
    let atm = {};
    atm['balance'] = 0;

    for (const commandArr of commandArrays) {
        let commandArrLength = commandArr.length;

        switch(true){
            case (commandArrLength > 2):
                insertCommand(commandArr);
                break;
            case (commandArrLength === 2):
                withdrawCommand(commandArr);
                break;
            case (commandArrLength === 1):
                reportCommand(commandArr);
                break;
        }

        /* console.log('----------------------------------------------');
        console.log(atm);
        console.log('----------------------------------------------'); */
    }
    function insertCommand(command) {  
        let insertedCash = 0; 

        for (const currentBanknote of command) {
            if(!atm[currentBanknote]) {
                atm[currentBanknote] = 0;
            }

            atm[currentBanknote]++;
            atm['balance'] += currentBanknote;
            insertedCash += currentBanknote;
        }

        console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${atm['balance']}$.`);
    }

    function withdrawCommand(command) {
        let [accBalance, withdrawAmount] = command;
        
        if(accBalance < withdrawAmount) {
            console.log(`Not enough money in your account. Account balance: ${accBalance}$.`);
            return;
        }

        if (atm['balance'] < withdrawAmount) {
            console.log(`ATM machine is out of order!`);
            return;
        }

        withdraw(withdrawAmount);
        accBalance -= withdrawAmount;
        console.log(`You get ${withdrawAmount}$. Account balance: ${accBalance}$. Thank you!`);
    }

    function withdraw(amount) {
        let banknotes = Array.from(Object.keys(atm))
                        .filter(Number)
                        .sort((a, b) => b - a);
                        
        while(amount > 0) {
            let currentBanknote = 0;

            for (let banknote of banknotes) {
                banknote = +banknote;
                if (atm[banknote] > 0 && banknote <= amount) {
                    currentBanknote = banknote
                    break;
                }
            }

            atm[currentBanknote]--;
            amount -= currentBanknote;
            atm['balance'] -= currentBanknote;
        }
    }

    function reportCommand(command) {
        let [banknote] = command;
        let banknotesCount = atm[banknote];

        if(!banknotesCount) {
            banknotesCount = 0;
        }

        console.log(`Service Report: Banknotes from ${banknote}$: ${banknotesCount}.`);
    }
}
atmMachine([[50, 5, 5, 5, 5, 5, 100, 50, 1],
            [457, 25],
            [200],
            [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
            [20, 85],
            [5000, 4500],] 
);