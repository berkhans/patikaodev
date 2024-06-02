function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();

    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayName = days[now.getDay()];

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    dateTimeElement.textContent = `${dayName}, ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function greetUser() {
    const userName = prompt("Lütfen isminizi girin:");
    const welcomeElement = document.getElementById('welcome');
    if (userName) {
        welcomeElement.textContent = `Merhaba ${userName}, hoş geldiniz!`;
    } else {
        welcomeElement.textContent = "Merhaba, hoş geldiniz!";
    }
}

setInterval(updateDateTime, 1000); // Update the date and time every second
updateDateTime(); // Initial call to display the date and time immediately
greetUser(); // Prompt the user for their name and greet them
