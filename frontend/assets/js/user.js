
document.addEventListener("DOMContentLoaded", function () {
    // fetch user data from backend
    const user = {
        name: "Imadud Keremu",
        role: "Owner"
    };

    document.getElementById("user-name").textContent = user.name;
    document.getElementById("user-role").textContent = user.role;

    const initials = user.name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();

    document.getElementById("user-avatar").textContent = initials;
});
