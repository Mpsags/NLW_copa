function creatGame(player1, hour, player2) {
  return ` <li>
              <img src="../Projeto NLW_Copa/assets/${player1}.svg" alt="Brazil" />
              <strong>${hour}</strong>
              <img src="../Projeto NLW_Copa/assets/${player2}.svg" alt="Serbia" />
            </li>
  `
}

let delay = -0.3
function creatCard(date, day, games) {
  delay = delay + 0.3
  return ` 
        <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>

          <ul>
            ${games}
            </ul>
            </div>
  `
}

document.querySelector("#cards").innerHTML = `
      
    
      ${creatCard("24-11", "quinta", creatGame("brazil", "16:00", "serbia"))}
      ${creatCard(
        "28-11",
        "domingo",
        creatGame("switzerland", "13:00", "brazil")
      )}
      ${creatCard("02-12", "terca", creatGame("brazil", "16:00", "cameeron"))}
              
      `
