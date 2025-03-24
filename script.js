function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    document.getElementById("datetime").textContent = formattedDateTime;
}

function changeBackgroundColor() {
    const colors = ["#f4f4f4", "#ffcccb", "#c3e6cb", "#d6d8ff", "#fff3cd"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to set immediately
