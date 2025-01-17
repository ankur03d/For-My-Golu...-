// Password Protection
function checkPassword() {
    let input = document.getElementById("passwordInput").value;
    if (input === "Golu0311") {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect password!";
    }
}

// Click to Reveal Surprise
function revealLove() {
    document.getElementById("loveMessage").style.display = "block";
}

// Message Reply Function
function sendMessage() {
    let message = document.getElementById("response").value;
    if (message.trim() !== "") {
        alert("Message sent! I will read it soon. ❤️");
    }
}