> Descrizione:
> Rifare l'esercizio della to do list visto insieme a lezione. Ogni oggetto dovra' avere almeno due proprietà:

    text, una stringa che indica il testo del todo
    done, un booleano (true/false) che indica se il todo è stato fatto oppure no
> MILESTONE 1
> Stampare all'interno di una lista HTML un item per ogni todo.
> Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
>MILESTONE 2
> Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
> Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


-------------------------------------------------------------------------------------------------------------------------------

Creo la struttura nell'html e aggiungo Vue.  creo un array di oggetti con per ognunomun titlo la descrizione e una variable booleana ,creo una funzione collegata ad un bottone che al click cambia la variabile booleana in true sbarrando il testo, creo un  altro bottone con una funzione per rimuovere l'elemento dall'array e un altro pulsante per aggiungere elementi nell array e negli oggetti.