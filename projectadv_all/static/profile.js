async function loadProfile() {
    const response = await fetch("/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
    });
    if (response.ok) {
        const profile = await response.json();
        document.getElementById("name").value = profile.name;
        document.getElementById("email").value = profile.email;
    } else {
        alert("Failed to load profile");
    }
}

async function updateProfile(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch("/profile/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
        alert("Profile updated successfully");
    } else {
        alert("Failed to update profile");
    }
}

async function changePassword(event) {
    event.preventDefault();
    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;

    const response = await fetch("/profile/password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({ old_password: oldPassword, new_password: newPassword }),
    });

    if (response.ok) {
        alert("Password changed successfully");
    } else {
        alert("Failed to change password");
    }
}

document.addEventListener("DOMContentLoaded", loadProfile);
