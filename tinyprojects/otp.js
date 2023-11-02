document.addEventListener("DOMContentLoaded", function () {
    const generateOTPButton = document.getElementById("generateOTP");
    const validateOTPButton = document.getElementById("validateOTP");
    const messageElement = document.getElementById("message");

    let otp = "";

    generateOTPButton.addEventListener("click", function () {
        // Generate a random 6-digit OTP
        otp = Math.floor(100000 + Math.random() * 900000).toString();
        alert("Generated OTP: " + otp);
    });

    validateOTPButton.addEventListener("click", function () {
        const enteredOTP = document.getElementById("otp").value;
        if (enteredOTP === otp) {
            messageElement.textContent = "OTP is valid!";
        } else {
            messageElement.textContent = "Invalid OTP. Please try again.";
        }
    });
});
