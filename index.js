function superbowlWin(games) {
    let winGame = games.find((games) => games.result === "W");
    if (winGame) { return winGame.year; }
}
superbowlWin(record);