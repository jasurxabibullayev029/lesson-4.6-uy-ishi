let player1 = Number (prompt("raqam talang. \n 0) qogozni \n 1) chaychi \n 2) quduq"))
let player2 = Math.floor(Math.random() * 3)

if(player2 ===0){
    alert("kompyuter qogozni taladi")
}else if (player2 === 1) {
    alert("kompyuter qaychini taladi...")
}else{
    alert("kompyuter quduqni taladi");
}