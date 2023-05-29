/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// i principali data type di java script sono stringe, numeri, booleano, null e undefined

// le stringe sono dei data di tipo testo ad esempio "let name = "Gurinder"" facendo cosi sto assegnando a name, il suo valore. Il valore di una stringa va sempre inserito fra le "".
// i numeri sono dei data che  assegnano un valore numerico a una variabile. questi non vanno inseriti fra le "" perchè se no sarebbero scambiati per una stringa 
// il valore booleano è un valore che definisce se una cosa è vera o falsa, in base alla tua richiesta ad esempio guarda dalla riga 62,  il risultato della prima console sarà falso siccome John e john non sono uguali, ma mettendo in minuscolo la prima j si ottiene true poichè i risultati sono uguali
// il valore null, è un valore che si assegna a una variabile per dire che quella variabile è = null, cioe è = niente, nulla.
// undefined è quando noi creiamo una variabile e non assegnamo nessun valore ad esempio " let y  " così facendo io ho creato una variabile però non le ho ancora assegnato un valore, e facendo console.log di questo uscirà undefined, possiamo assegnare il valore anche più tardi se necessario, ma per ora è una variabile con nessun valore assegnato


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Gurinder"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1 = 12
let number2 = 20
let number3 = number1 + number2
console.log ("somma number3", number3)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name= "Mann"
console.log(name)
const firstName = "mario" 
name = "rossi"
 console.log( firstName)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x -= 4
console.log(x)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john"
let name2 = "John"
let nameresult = name1 === name2
console.log(nameresult)
let truename = name1 === name2.toLowerCase()
console.log(truename)
