function register() {
    event.preventDefault();
    var fname = document.getElementById("fname").value
    var sname = document.getElementById("sname").value
    var email = document.getElementById("re").value
    var password = document.getElementById("rp").value
    var passwordRetype = document.getElementById("rrp").value
    if (fname == "") {
        alert("Imię jest wymagane.");
        return;
    }
    else if (sname == "") {
        alert("Nazwisko jest wymagane.");
        return;
    }
    else if (email == "") {
        alert("E-mail jest wymagany.");
        return;
    }
    else if (password == "") {
        alert("Hasło jest wymagane.");
        return;
    }
    else if (passwordRetype == "") {
        alert("Należy powtórzyć hasło.");
        return;
    }
    else if (password != passwordRetype) {
        alert("Podane hasła nie są identyczne.");
        return;
    }
    else {
        alert(email + "  Dziękujemy za rejestracje. \nTeraz możesz się zalogować");
        var nazwa = document.getElementById("re").value;
        var haslo = document.getElementById("rrp").value;
        localStorage.setItem("nazwa", nazwa)
        localStorage.setItem("haslo", haslo)
        localStorage.setItem("fname", fname)
        localStorage.setItem("sname", sname)
        localStorage.setItem("email", email)
        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
        document.getElementById("sname").value = "";
        document.getElementById("fname").value = "";
        window.location.assign("./login.html");
    }
}
function login() {
    event.preventDefault();
    let nazwa2 = localStorage.getItem("nazwa")
    let haslo2 = localStorage.getItem("haslo")
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    if (email != nazwa2) {
        if (email == "") {
            alert("E-mail jest wymagany.");
            return;
        }
        alert("Podany adres E-mail nie istnieje.");
        return;
    }
    else if (password != haslo2) {
        if (password == "") {
            alert("Hasło jest wymagane");
            return;
        }
        alert("Podane hasło jest niepoprawne.");
        return;
    }
    else {
        alert(email + " Udało się! \n Witaj na naszej stronie.");
        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        window.location.assign("./main.html");
        localStorage.setItem("stan", 1);
        return;
    }
}
function forgot() {
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("E-mail jest wymagany.");
            return;
        }
        alert("Podany adres E-mail nie istnieje.");
        return;
    }

    alert("Na podany adres zostanie wysłana wiadomość e-mail z dalszymi instrukcjami. \n Dziękujemy");
    document.getElementById("fe").value = "";
}