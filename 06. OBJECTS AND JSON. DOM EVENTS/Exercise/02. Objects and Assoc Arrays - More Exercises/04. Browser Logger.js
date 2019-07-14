function solve(inputObj, strArr) {

    const browserName = 'Browser Name';
    const openTabs = 'Open Tabs';
    const recentlyClosed = 'Recently Closed';
    const browserLogs = 'Browser Logs';

    for (const inputString of strArr) {
        let[command, tabName] = inputString.split(' ').map(x => x.trim()).filter(x => x !== '');
        
        if(command === 'Open'){
            inputObj[openTabs].push(tabName);
            inputObj[browserLogs].push(inputString);
        } else if(command === 'Close') {
            if (inputObj[openTabs].includes(tabName)){
                const index = inputObj[openTabs].indexOf(tabName);

                inputObj[openTabs].splice(index, 1);
                inputObj[recentlyClosed].push(tabName);
                inputObj[browserLogs].push(inputString);
            }
        } else if (inputString === 'Clear History and Cache'){
            inputObj[openTabs] = [];
            inputObj[recentlyClosed] = [];
            inputObj[browserLogs] = [];
        }
    }

    console.log(inputObj[browserName]);
    console.log(`Open Tabs: ${inputObj[openTabs].join(', ')}`);
    console.log(`Recently Closed: ${inputObj[recentlyClosed].join(', ')}`);
    console.log(`Browser Logs: ${inputObj[browserLogs].join(', ')}`);
}
solve({
    "Browser Name": "Google Chrome", 
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ['Close Facebook', 'Open StackOverFlow', 'Open Google']
);