const users = [
    { username: atob("TG9yaXMgTGEgVGVnb2xh"), password: atob("U0B0amVIZWIzNTZnZlRS") },
    { username: atob("dXNlcjI="), password: atob("cGFzc3dvcmQy") }
];

function login() {
    const username = document.getElementById(atob("dXNlcm5hbWU=")).value;
    const password = document.getElementById(atob("cGFzc3dvcmQ=")).value;
    const errorMessage = document.getElementById(atob("ZXJyb3ItbWVzc2FnZQ=="));

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        errorMessage.textContent = atob("TG9naW4gc3VjY2Vzc2Z1bCE=");
        errorMessage.style.color = "green";

        // Redirection après 1 seconde
        setTimeout(() => {
            const path = [String.fromCharCode(97), String.fromCharCode(100), String.fromCharCode(109), String.fromCharCode(105), String.fromCharCode(110), '.', 'h', 't', 'm', 'l'].join('');
            window.location.href = path;
        }, 1000);
    } else {
        errorMessage.textContent = atob("SW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCE=");
    }
}
