# Functions

## Themen

- [x] [Einführung Funktionen](#one)
- [x] [Funktionen deklarieren](#two)
- [x] [Funktionen aufrufen](#three)

<br>

### Ressourcen

- [ ] [Ressourcen](#ressources)

<br>

### Exercises

- [x] [Exercises](#exe)

<br>
<br>
<br>

# <a name="one"></a>1. Einführung Funktionen

Funktionen sind grundlegende Bausteine in der Programmierung. Man kann sie sich wie kleine Maschinen vorstellen, die eine bestimmte Aufgabe ausführen. Sie nehmen Eingaben (bekannt als Argumente), führen einige Operationen aus und liefern oft ein Ergebnis zurück (das ist die Rückgabe der Funktion).

Ein einfacher Weg, eine Funktion zu visualisieren, ist folgender: Stell dir vor, du hast eine Kaffeemaschine. Diese "Funktion" nimmt Wasser und Kaffeepulver (die Argumente) auf, führt einen Prozess durch (das Brühen des Kaffees), und gibt dann Kaffee aus (die Rückgabe).

<br>

## Vorteile des Schreibens von Funktionen

- `Wiederholungen vermeiden`: Wenn du denselben Code mehrmals schreibst, ist es oft besser, eine Funktion zu erstellen und sie jedes Mal aufzurufen, wenn du diesen Code brauchst. Das macht deinen Code sauberer, einfacher zu lesen und zu warten.

- `Bessere Struktur` in unserem Code: Funktionen helfen, unseren Code zu organisieren und zu strukturieren. Jede Funktion sollte eine spezifische Aufgabe erfüllen. Dadurch wird der Code einfacher zu verstehen und zu testen.

- Möglichkeit, einige `Code in Reaktion auf eine Interaktion auszuführen` (das sehen wir später): Mit Funktionen können wir Code ausführen, wenn bestimmte Ereignisse eintreten, wie z.B. ein Klick auf einen Button in einer Webseite.

- `Neustart eines Programms`, zum Beispiel bei der Verwendung von readline-sync: Manchmal wollen wir einen bestimmten Teil unseres Codes wiederholen, zum Beispiel wenn wir den Benutzer nach Eingaben fragen und er etwas Ungültiges eingibt. Mit Funktionen können wir einfach die Funktion erneut aufrufen.

<br>

## Funktionsweise einer Funktion

Um zu verstehen, wie Funktionen funktionieren, haben wir bereits einige Funktionen aufgerufen. Zum Beispiel haben wir die `console.log` Funktion verwendet, um Informationen in der Konsole auszugeben.

Wir haben die Funktion `Math.floor` verwendet, um eine Zahl abzurunden.

Alle diese Funktionen nehmen Argumente und geben Ergebnisse zurück. Sie sind Beispiele dafür, wie Funktionen uns helfen, komplexere Programme zu schreiben, indem sie uns erlauben, Code zu wiederholen und zu organisieren.

<br>
<br>
<br>

# <a name="one"></a>2. Funktionen deklarieren

Eine Funktion zu deklarieren ist recht einfach. In den meisten Programmiersprachen nutzt du das Schlüsselwort function, gefolgt vom Namen der Funktion und einer Liste von Parametern in Klammern. Danach kommt der Codeblock (auch als Funktionskörper bezeichnet), der in geschweifte Klammern gesetzt wird.

```js
function sagHallo() {
  console.log("Hallo Welt");
}
```

###### In diesem Fall ist sagHallo der Name der Funktion und der Funktionskörper besteht aus dem Befehl console.log("Hallo Welt");.

<br>

### Anatomie einer Funktion

- `Das Schlüsselwort` 'function': Dies signalisiert der Programmiersprache, dass du eine Funktion deklarierst.

- `Funktionsname`: Der Name der Funktion, wie er später aufgerufen wird.

- `Funktionsparameter`: Die Eingaben für die Funktion. Diese sind in Klammern nach dem Namen der Funktion aufgeführt und durch Kommas getrennt.

- `Funktionskörper`: Der Codeblock, der ausgeführt wird, wenn die Funktion aufgerufen wird. In vielen Programmiersprachen wird dieser Codeblock in geschweifte Klammern gesetzt.

- `Die Rückgabeerklärung`: Manchmal möchtest du, dass deine Funktion ein Ergebnis produziert und dieses zurückgibt, wenn die Funktion aufgerufen wird. Dies wird mit dem Schlüsselwort return erreicht.

```js
function addiereZahlen(a, b) {
  var summe = a + b;
  return summe;
}
```

###### In diesem Fall nimmt die Funktion addiereZahlen zwei Parameter a und b, addiert sie und gibt das Ergebnis zurück.

<br>

### Funktionsparameter: Benennung und Reihenfolge

Die Benennung und Reihenfolge der Parameter in einer Funktion ist sehr wichtig. Die Parameter werden in der Reihenfolge verwendet, in der sie aufgeführt sind, und innerhalb der Funktion verweist der Parametername auf den Wert, der an diese Funktion übergeben wird.

```js
function begrüßePerson(vorname, nachname) {
  console.log("Hallo " + vorname + " " + nachname);
}
```

###### Wenn du begrüßePerson("Max", "Mustermann") aufrufst, dann wird "Max" dem Parameter vorname zugewiesen und "Mustermann" dem Parameter nachname.

<br>
<br>
<br>

# <a name="three"></a>3. Eine Funktion aufrufen

## Funktionsargumente

Funktionsargumente sind die tatsächlichen Werte, die du einer Funktion übergibst, wenn du sie aufrufst. Sie entsprechen den Parametern, die du in der Funktionsdefinition festgelegt hast.

```js
function sagHallo(zuName) {
  console.log("Hallo, " + zuName);
}

sagHallo("Anna"); // "Anna" ist hier das Argument
```

###### In diesem Fall ist "Anna" das Argument, das wir der Funktion sagHallo übergeben. Argumente können von jeder Art sein: Zahlen, Strings, Arrays, Objekte, und sogar andere Funktionen.

<br>

## Unterschied zwischen Parametern und Argumenten

Obwohl die Begriffe oft synonym verwendet werden, gibt es einen kleinen, aber wichtigen Unterschied zwischen Parametern und Argumenten in der Programmierung.

- `Parameter `sind die `Variablen`, die in der Definition einer Funktion aufgelistet sind. Sie repräsentieren die Werte, die die Funktion benötigt, um ihre Aufgabe zu erfüllen. Zum Beispiel, in der Funktion function addiere(a, b) {...}, sind a und b die Parameter.

- `Argumente` hingegen sind die `tatsächlichen Werte`, die einer Funktion übergeben werden, wenn sie aufgerufen wird. Zum Beispiel, wenn du die Funktion addiere aufrufst, wie in addiere(2, 3);, sind 2 und 3 die Argumente.

<br>
<br>
<br>

# <a name="seven"></a>Aufgaben

## 1. Programm

Schreibe eine Funktion mit dem Namen kalkuliereMehrwertsteuer, die den Nettopreis eines Produkts und den Mehrwertsteuersatz als Argumente nimmt. Die Funktion soll den Bruttobetrag in der Konsole ausgeben, der sich aus dem Nettopreis plus der Mehrwertsteuer ergibt.

```js
function kalkuliereMehrwertsteuer(nettopreis, steuersatz) {
  // dein Code hier
}

console.log(kalkuliereMehrwertsteuer(100, 20)); // sollte 120 zurückgeben
```

<br>

## 2. Programm

Du sollst eine Funktion namens filtereUndAddiere erstellen. Diese Funktion soll ein Array von Zahlen und zwei Grenzwerte als Argumente entgegennehmen: eine untere Grenze und eine obere Grenze. Die Funktion soll alle Zahlen im Array, die zwischen diesen beiden Grenzen liegen, addieren und die Summe zurückgeben.

```js
function filtereUndAddiere(zahlen, untereGrenze, obereGrenze) {
  // dein Code hier
}

console.log(filtereUndAddiere([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 7)); // sollte 22 zurückgeben
```

_Nach Ablauf der Zeit coden wir das ganze zusammen._

<br>
<br>
<br>
<br>

# <a name="ressources"></a>Ressourcen

-

# <a name="exe"></a>Exercises

- [PB-function-1-functions-basic](https://classroom.github.com/a/r5thX8zs)
- [PB-function-1-simple-functions](https://classroom.github.com/a/4Sfo7iD-)
- [PB-function-1-challenge](https://classroom.github.com/a/NiI3HfRk)

<br>
<br>
<br>
<br>
<details>
  <summary></summary>

```js
// Aufgabe 1
function kalkuliereMehrwertsteuer(nettopreis, steuersatz) {
  return nettopreis * parseFloat(`1.${steuersatz}`);
}

console.log(kalkuliereMehrwertsteuer(120, 20)); // sollte 120 zurückgeben

// Aufgabe 2
function filtereUndAddiere(zahlen, untereGrenze, obereGrenze) {
  let sum = 0;

  for (let x = 0; x < zahlen.length; x++) {
    let num = zahlen[x];
    if (num < untereGrenze) {
      continue;
    } else if (num > obereGrenze) {
      continue;
    } else {
      sum += num;
    }
  }

  return sum;
}

console.log(filtereUndAddiere([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 7)); // sollte 22 zurückgeben
```

</details>
