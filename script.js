document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("All fields must be filled out!");
        return;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email address!");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number!");
        return;
    }

    alert("Order placed successfully!");
});
