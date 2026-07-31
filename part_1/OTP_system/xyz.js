let otp = Math.random() * 10000;
let roundOTP = Math.round(otp);

console.log("OTP:", roundOTP);

while (true) {
    let userOTP = prompt("Enter OTP");

    if (userOTP == roundOTP) {
        alert("OTP matched successfully");
        console.log("OTP successfully verified");
        break; // ✅ Exits the while loop
    } else {
        alert("Wrong OTP. Try again.");
    }
}