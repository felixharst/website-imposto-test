document.getElementById("abo-monatlich").onclick = function () { aboMonatlich() };
document.getElementById("abo-jaehrlich").onclick = function () { aboJaehrlich() };

function aboMonatlich() {
    // Hauptpreise
    document.getElementById("price-kostenlos").textContent = "0 € pro Monat";
    document.getElementById("price-small").textContent = "3 € pro Monat";
    document.getElementById("price-medium").textContent = "6 € pro Monat";
    document.getElementById("price-large").textContent = "12 € pro Monat";

    // Monatliche Berechnung
    document.getElementById("calculate-monthly-kostenlos").textContent = "";
    document.getElementById("calculate-monthly-small").textContent = "";
    document.getElementById("calculate-monthly-medium").textContent = "";
    document.getElementById("calculate-monthly-large").textContent = "";

    // Kuendigungszeitraum
    kuendigung = document.getElementsByClassName("set-kuendbar");  // Find the elements
    for (var i = 0; i < kuendigung.length; i++) {
        kuendigung[i].textContent = "Jederzeit kündbar";    // Change the content
    }

    //Styling via Klassenzuweisung
    document.getElementById("abo-monatlich").classList.add("pricing-selected");
    document.getElementById("abo-monatlich").classList.remove("pricing-unselected");
    document.getElementById("abo-jaehrlich").classList.add("pricing-unselected");
    document.getElementById("abo-jaehrlich").classList.remove("pricing-selected");
}
function aboJaehrlich() {
    // Hauptpreise
    document.getElementById("price-kostenlos").textContent = "0 € pro Jahr";
    document.getElementById("price-small").textContent = "29 € pro Jahr";
    document.getElementById("price-medium").textContent = "59 € pro Jahr";
    document.getElementById("price-large").textContent = "119 € pro Jahr";

    // Monatliche Berechnung
    document.getElementById("calculate-monthly-kostenlos").textContent = "für immer kostenlos";
    document.getElementById("calculate-monthly-small").textContent = "also 2,40 €/Monat";
    document.getElementById("calculate-monthly-medium").textContent = "also 4,90 €/Monat";
    document.getElementById("calculate-monthly-large").textContent = "also 9,90 €/Monat";

    // Kuendigungszeitraum
    kuendigung = document.getElementsByClassName("set-kuendbar");  // Find the elements
    for (var i = 0; i < kuendigung.length; i++) {
        kuendigung[i].textContent = "Jährlich kündbar";    // Change the content
    }

    //Styling via Klassenzuweisung
    document.getElementById("abo-monatlich").classList.add("pricing-unselected");
    document.getElementById("abo-monatlich").classList.remove("pricing-selected");
    document.getElementById("abo-jaehrlich").classList.add("pricing-selected");
    document.getElementById("abo-jaehrlich").classList.remove("pricing-unselected");
}