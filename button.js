function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    var correctPassword = "Golu0311";

    if (enteredPassword === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect password. Try again!";
        document.getElementById("errorMessage").style.color = "red";
    }
}
