//var invitati = ['fabio', 'daniele', 'massimo', 'giorgio'];

 //chiedi all'utente il suo nome
//var nome = prompt('dimmi il tuo nome');
//var messaggio = 'non puoi entrare';
//controllo se il nome sia nell'array

//for (var i = 0; i < invitati.length; i++) {
//  var thisNome = invitati[i];

//  if (nome == thisNome) {
//    messaggio = 'Puoi entrare';
//  }
//}
//console.log(messaggio);

//chiedo un numero di 4 cifre all'utente

var richiesta = prompt('dimmi un numero di quattro cifre');
var numeri = richiesta.split('');
var somma = 0;
var valore = 0;


for (var i = 0; i < numeri.length; i++) {
  somma += parseInt(numeri[i]);
}
alert(somma);
