function numbersFrom1ToN(input) {
    let n = Number(input[0]);

    for (let i = 1; i <= n; i = i + 3){
        console.log(i);
    }
    
}

numbersFrom1ToN(["10"]);