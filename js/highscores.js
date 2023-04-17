const highSocresList = document.getElementById('high-scores-list');
const highScores = JSON.parse(localStorage.getItem('highScore')) || [];

highSocresList.innerHTML = highScores
  .map((score) => {
    console.log(score);
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join('');
