let totalRound = 4;
const randomToss = () => {
    let playerResult = [];
    let toss = ["Head", "Tail"];
    for (i = 0; i < 10; i++) {
        playerResult.push(toss[Math.floor(Math.random() * 2)]);
    }
    return playerResult;
}
const findFinalWinner = (totalRound) => {
    let player1HeadPassibility = [];
    let player2HeadPassibility = [];
    for (index = 1; index <= totalRound; index++) {
        let player1Result = randomToss();
        let player2Result = randomToss();
        let player1Count = player1Result.filter(Element => Element === "Head");
        let player2Count = player2Result.filter(Element => Element === "Tail");
        player1HeadPassibility.push(player1Count.length);
        player2HeadPassibility.push(player2Count.length);
    }
    let player1TotalCount = player1HeadPassibility.reduce((element1, element2) => element1 + element2);
    let player2TotalCount = player2HeadPassibility.reduce((element1, element2) => element1 + element2);
    console.log(`player1TotalCount :-${player1TotalCount} || player2TotalCount:-${player2TotalCount}`);
    if (player1TotalCount > player2TotalCount) {
        console.log("The Final Winner is Player1");
    } else if (player1TotalCount < player2TotalCount) {
        console.log("The Final Winner is Player2");
    } else {
        console.log("Both are Same Points ");
    }
}
const findWinner = () => {
    let player1Result = randomToss();
    let player2Result = randomToss();
    player1HeadPassibility = 0
    player2HeadPassibility = 0
    let player1Count = player1Result.filter(Element => Element === "Head");
    let player2Count = player2Result.filter(Element => Element === "Head");
    player1HeadPassibility += player1Count.length;
    player2HeadPassibility += player2Count.length;
    let a = 0
    let time = setInterval(() => {
        console.log(`${a+1}-toss  player1    player2`);
        console.log("       ",player1Result[a], "      ", player2Result[a]);
        if (a === 9) {
            console.log("player1count:-", player1HeadPassibility, "player2count:-", player2HeadPassibility);
            if (player1HeadPassibility > player2HeadPassibility) {
                console.log("The Winner is Player1");
                console.log("____________________");
            } else if (player1HeadPassibility < player2HeadPassibility) {
                console.log("The Winner is Player2");
                console.log("____________________");
            } else {
                console.log("Both are Same Points");
                console.log("____________________");
            }
            clearInterval(time)
        }
        a++;
    }, 1000)
}
const findRound=()=>{
    let b = 0;
    let times = setInterval(() => {
        console.log("round:-", b + 1);
        findWinner()
        if (b === totalRound - 1) {
            clearInterval(times)
            setTimeout(()=>{
                findFinalWinner(totalRound) 
            },12000)  
        }
        b++
    },12000)
}
findRound(totalRound)

