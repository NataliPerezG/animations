

const greetings = ['Hello', 'Bonjour', 'Salut', 'Ciao', 'Hallo', 'Olá', 'Nǐ hǎo', 'Konnichiwa', 'Privet']

let indexGreetings = 0 // índice del array
let indexWord = 0 // índice de cada palabra

let span = document.querySelector('.type__word')

function showGreeting() {
    let greeting = greetings[indexGreetings]
    span.textContent = greeting.slice(0, indexWord)
    if (indexWord < greeting.length) {
        indexWord++
        setTimeout(showGreeting, 300) // repetir cada 300ms
    } else {
        indexWord = 0
        indexGreetings = (indexGreetings + 1) % greetings.length // reiniciar el índice
        setTimeout(showGreeting, 800) // esperar un poco más en cada palabra
    }
}

showGreeting()
