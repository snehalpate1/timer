function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    document.getElementById("datetime").textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to set immediately
