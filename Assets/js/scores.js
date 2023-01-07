function populateHighScores() {
  let scores = json.parse(localStorage.getItem('highScores')) || [];
  let list = '';
  scores.forEach(score => {
    list = list + "<p> + score.initials + ' : ' + score.score + '</p>";
  })
  highScores.innerHTML = list;
}
populateHighScores();