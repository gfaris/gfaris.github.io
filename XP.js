let xp = 0;

function completeTask(taskXP) {
  earnXP(taskXP); // Call the earnXP function with the XP points for the completed task
}

function earnXP(points) {
  xp += points;
  document.getElementById("xpPoints").innerText = xp;

  const maxXP = 500; // Maximum XP needed to fill the progress bar
  const progress = Math.min((xp / maxXP) * 100, 100); // Calculate the progress percentage

  document.getElementById("progress").style.width = progress + "%"; // Update the width of the progress bar
}

function clearProgress() {
  xp = 0;

  document.getElementById("xpPoints").innerText = xp;

  document.getElementById("progress").style.width = "0%";
}
