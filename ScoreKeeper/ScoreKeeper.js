var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("reset");
var p1Current = document.getElementById("p1score");
var p2Current = document.getElementById("p2score");
var endScore = document.querySelector("input");
var maxScore = document.getElementById("max");
var winLog = document.getElementById("content");
var p1Score = 0;
var p2Score = 0;
var gameCount = 0;
var scoreUpdateable = true;

endScore.addEventListener("change", function() {
	resetGame();
	maxScore.value = this.value;
	maxScore.textContent = this.value;
});

p1.addEventListener("click", function() {
	if(scoreUpdateable === true) {
		p1Score++;
		p1Current.textContent = p1Score;
		if(p1Score == maxScore.textContent) {
			gameCount++;
			p1Current.style.color = "green";
			scoreUpdateable = false;
			winLog.innerHTML = winLog.innerHTML + "<br>" + "[" + gameCount + "] Player 1 win: " + p1Score + " - " + p2Score;
		}
	}

});

p2.addEventListener("click", function() {
	if(scoreUpdateable === true) {
		p2Score++;
		p2Current.textContent = p2Score;
		if(p2Score == maxScore.textContent) {
			gameCount++;
			p2Current.style.color = "green";
			scoreUpdateable = false;
			winLog.innerHTML = winLog.innerHTML + "<br>" + "[" + gameCount + "] Player 2 win: " + p2Score + " - " + p1Score;
		}
	}
});

reset.addEventListener("click", function() {
	resetGame();
});

function resetGame() {
	scoreUpdateable = true;
	p1Score = 0;
	p2Score = 0;
	p1Current.textContent = p1Score;
	p2Current.textContent = p2Score;
	p1Current.style.color = "white";
	p2Current.style.color = "white";
}