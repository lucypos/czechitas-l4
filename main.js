
//1. úkol
let title = 'Nejhorší člověk na světě'
//title.length

title.toUpperCase()


title.slice(0, 5)

title.slice(19, 24)

//2. úkol
let email = prompt('Zadej svůj e-mail')
let atIndex = email.indexOf('@')


const parsedEmail = {
	username: email.slice(0, atIndex),
	domain: email.slice(atIndex + 1),
}
document.body.innerHTML += '<p>Uživatelské jméno: ' + parsedEmail.username + '</p>'
document.body.innerHTML += '<p>Doména: ' + parsedEmail.domain + '</p>'