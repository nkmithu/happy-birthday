function openSurprise() {
    document.getElementById("surpriseModal").style.display = "flex";
    generateBalloons();
}

function closeSurprise() {
    document.getElementById("surpriseModal").style.display = "none";
}

/* Confetti Effect */
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];

for (let i = 0; i < 100; i++) {
    confettiParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 5 + 1
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(drawConfetti);
}

drawConfetti();

/* Balloon Animation */
function generateBalloons() {
    const balloonContainer = document.querySelector(".balloons");
    balloonContainer.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = `${Math.random() * 90}%`;
        balloon.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        balloonContainer.appendChild(balloon);
    }
}
