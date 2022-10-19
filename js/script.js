// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22

let name = prompt ("Come ti chiami?");
document.getElementById("name").innerHTML = name

let lastname = prompt("Come fai di cognome?")
document.getElementById("lastname").innerHTML = lastname

let color = prompt("Qual è il tuo colore preferito?")
document.getElementById("color").innerHTML = color

let completeInfo = name + lastname + color + 22
document.getElementById("all-info").innerHTML = completeInfo
