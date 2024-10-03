function rollDice() {
    let sides = document.getElementById('numSides').value
    let results = getDiceResults(sides)
    document.getElementById('dice-result').innerText = 'you rolled a '+results
}

function getDiceResults(max) {
    let result = Math.ceil(Math.random() * max)
    return result 
}

for (let i = 1; i< 100; i++){
    let testResults = getDiceResults(i)
    if (testResults > i || testResults <1) throw Error("Invaild dice result " +testResults+ "for max "+ 1)
}