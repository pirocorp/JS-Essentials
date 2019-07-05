function solve(pattern, text) {
    let result = 0;
    const patternLength = pattern.length;

    for (let i = 0; i < text.length; i++) {
        let currentSubstring = text.substr(i, patternLength);
        
        if(currentSubstring === pattern) {
            result++;
        }
    }

    console.log(result);
}
solve('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');