// Snack 1

// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

/*var primo_numero = parseInt(prompt("Inserisci il primo numero"));
    console.log(primo_numero)

var secondo_numero = parseInt(prompt("Inserisci il secondo numero"));
    console.log(secondo_numero)


if (primo_numero > secondo_numero) {

    console.log("Il primo numero è il più grande");

} else if (secondo_numero > primo_numero) {

    console.log("Il secondo numero è il più grande");

} else {

    console.log("I numeri sono grandi uguali");

}*/




// Snack 2

// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/*var word_1 = prompt("Scrivere parola 1");
console.log(word_1)


var word_2 = prompt("Scrivere parola 2");
console.log(word_2)

var short

if (word_1.length < word_2.length) {

    short = word_1;

} else if (word_2.length < word_1.length) {

    short = word_2;

} else {

    short = "Le parole sono lunghe uguali"

} 

document.getElementById("parola-corta").innerHTML = short;

var long

if (word_1.length > word_2.length) {

    long = word_1;

} else if (word_2.length > word_1.length) {

    long = word_2;

} else {

    long = "Le parole sono lunghe uguali"

} 

document.getElementById("parola-lunga").innerHTML = long;*/



// Snack 3

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


// var numeri = [parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero")), parseInt(prompt("inserisci un numero"))];

// console.log(numeri);

// var somma = 0;

// for (i = 0; i < numeri.length; i++) {
    
//     somma = somma + numeri[i] 

// }

// console.log("la tua somma è " + somma, "e la tua media è " + (somma / numeri.length));


// Snack 4

/* Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while */

// var number = [];

// var userNumber;

// var i = 0; 

// while (i < 5) {

    // userNumber = parseInt(prompt("inserisci un numero"));
//     number.push(userNumber);
//     i++;

// }

// console.log(number)


// Snack 5

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

// var numbers = [];
// var userNumber;

// for (var i = 0; i < 6 ; i++) {  
//     userNumber = parseInt(prompt("inserisci un numero"));
//     if ((userNumber % 2) != 0) {
//         numbers.push(userNumber);
//     }
// }

// console.log(numbers);

// var i = 0;

// do {
//     userNumber = parseInt(prompt("inserisci un numero"));
//     if ((userNumber % 2) != 0) {
//         numbers.push(userNumber);
//     }
//     i++;
// } while (i < 6);

// console.log(numbers);

// var i = 0;

// while (i < 6) {
//     userNumber = parseInt(prompt("inserisci un numero"));
//     if ((userNumber % 2) != 0) {
//         numbers.push(userNumber);
//     }
//     i++;
// } 
// console.log(numbers)


// Snack 6

// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// var numero = parseInt(prompt("Inserisci un numero"));

// if (numero % 2 == 0) {
//     console.log(numero);
// } else {
//     console.log(numero + 1);
// }


// Snack 7

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

// var nomi = ["Simone", "Stefano", "Barbara", "Samuele", "Federico"];
// var cognomi = ["Benato", "Franco", "Zimoli", "Letizia", "Pegoraro"];

// var nom_cog = [];

// nom_cog.push(nomi[Math.floor(Math.random() * nomi.length)] + " " + cognomi[Math.floor(Math.random() * cognomi.length)]);

// console.log(nom_cog)


// Snack 8

// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// sum = 0;

// for (var i = 0; i < numbers.length; i++) {
// 	if (element % 2 != 0) {
// 		sum += element;
// 	}
// }

// console.log("La somma dei numeri dispari e': " + sum);

// Snack 9


var bianco = ["a", "b", "c", "d", "e", "f", "g"];
var nero = ["a", "b", "c"];

if (bianco.length > nero.length) {
	do {
		nero.push(' ');
	} while (bianco.length > nero.length);
} else if (nero.length > bianco.length) {
	do {
		bianco.push(' ');
	} while (nero.length > bianco.length);
} else {
	console.log('I gruppi sono uguali');
}

console.log(bianco)
console.log(nero)

