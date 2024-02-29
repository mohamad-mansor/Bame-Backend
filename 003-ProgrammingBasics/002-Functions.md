# Interactions

## Themen

- [x] [Function Scope](#one)
- [x] [Function Expressions](#two)
- [x] [Aufgaben](#seven)

<br>

### Ressourcen

- [ ] [Ressourcen](#ressources)

<br>

### Exercises

- [x] [Exercises](#exe)

<br>
<br>
<br>

# <a name="one"></a>1. Function Scope

## Parameters Scope

Parameter sind Variablen, die wir verwenden, um Daten in Funktionen zu übergeben. Der Gültigkeitsbereich dieser Parameter (also der Bereich, in dem sie anerkannt und verwendet werden können) beschränkt sich auf die Funktion, in der sie definiert sind.

```js
function meineFunktion(parameter1) {
  console.log(parameter1);
}
```

###### In diesem Fall ist parameter1 innerhalb von meineFunktion gültig, wird aber außerhalb der Funktion nicht erkannt.

<br>

## Deklaration von Variablen in Funktionen

Variablen, die in einer Funktion deklariert werden, sind nur innerhalb dieser Funktion bekannt.

```js
function eineAndereFunktion() {
  let innerhalbFunktionVariable = "Ich bin innerhalb der Funktion!";
  console.log(innerhalbFunktionVariable);
}
```

###### In diesem Fall wird die Variable innerhalbFunktionVariable nur innerhalb von eineAndereFunktion erkannt. Wenn du versuchst, sie außerhalb der Funktion zu verwenden, wird ein Fehler angezeigt.

<br>

## Global vs. Lokal Scope

"Scope" bezieht sich auf den Bereich, in dem eine Variable sichtbar oder zugänglich ist. Eine Variable kann entweder einen globalen oder lokalen Scope haben.

Eine globale Variable ist eine, die im gesamten Programm sichtbar ist, während eine lokale Variable nur innerhalb der Funktion sichtbar ist, in der sie deklariert wurde.

```js
let globaleVariable = "Ich bin global!";

function meineFunktion() {
  let lokaleVariable = "Ich bin lokal!";
  console.log(globaleVariable);
  console.log(lokaleVariable);
}
```

###### In diesem Beispiel kann globaleVariable überall im Code verwendet werden, während lokaleVariable nur innerhalb von meineFunktion gültig ist.

<br>

## Variablen-Neuzuweisung in Funktionen

Manchmal möchtest du den Wert einer Variablen innerhalb einer Funktion ändern.

```js
function meineFunktion() {
  let x = 1;
  x = 2;
  console.log(x);
}
```

###### In diesem Fall wird x zunächst auf 1 gesetzt, dann auf 2 neu zugewiesen. Wenn die Funktion ausgeführt wird, wird sie 2 ausgeben. Es ist wichtig zu beachten, dass diese Neuzuweisung nur innerhalb der Funktion wirksam ist und keinen Einfluss auf den Wert von x außerhalb der Funktion hat (falls x eine globale Variable ist).

<br>
<br>
<br>

# <a name="two"></a>2. Function Expressions (Ausdrücke)

In JavaScript gibt es verschiedene Arten, Funktionen zu definieren.

- `Standard-Funktionsdeklaration`

  Die klassische Art, eine Funktion in JavaScript zu deklarieren, sieht so aus:

  ```js
  function meineFunktion() {
    console.log("Hallo Welt!");
  }
  ```

  ###### In diesem Fall haben wir eine Funktion namens meineFunktion deklariert, die "Hallo Welt!" in die Konsole schreibt, wenn sie aufgerufen wird.

  <br>

- `Funktionsausdruck`

  Eine andere Art, eine Funktion zu definieren, ist der Funktionsausdruck. Dabei weisen wir einer Variablen eine anonyme Funktion zu.

  ```js
  const meineFunktion = function () {
    console.log("Hallo Welt!");
  };
  ```

  <br>

- `Pfeilfunktionsausdruck (Arrowfunction)`

  Eine modernere Art, Funktionen in JavaScript zu definieren, ist der Pfeilfunktionsausdruck. Dies ist eine verkürzte Schreibweise, die oft weniger Code erfordert:

  ```js
  const meineFunktion = () => {
    console.log("Hallo Welt!");
  };
  ```

  ###### In diesem Fall haben wir eine Variable meineFunktion, die auf eine anonyme Funktion verweist, die "Hallo Welt!" in die Konsole schreibt. Der Hauptunterschied ist, dass wir das Schlüsselwort function durch den Pfeil => ersetzt haben.

  <br>

- `Varianten der Pfeilfunktion`

  Es gibt verschiedene Varianten von Pfeilfunktionen, die je nach Situation verwendet werden können. Wenn die Funktion nur einen Parameter hat, können wir die Klammern weglassen:

  ```js
  const gruessen = (name) => {
    console.log(`Hallo ${name}!`);
  };
  ```

    <br>

  Außerdem, wenn der Körper der Funktion nur aus einer einzelnen Anweisung besteht, können wir die geschweiften Klammern weglassen und die Funktion wird den Wert dieser Anweisung zurückgeben:

  ```js
  const quadrat = (x) => x * x;
  ```

<br>
<br>
<br>

# <a name="two"></a>3. BONUS (Vorgriff Rekursive Funktionen)

Eine rekursive Funktion in JavaScript ist eine Funktion, die sich selbst aufruft, um ein Problem zu lösen.

Um eine rekursive Funktion zu erstellen, schreibst du eine Funktion, die sich selbst unter bestimmten Bedingungen aufruft. Wichtig ist, dass du eine Abbruchbedingung festlegst, damit die Funktion nicht unendlich oft aufgerufen wird.

```js
function zaehleHerunter(n) {
  // Wenn n kleiner als 0 ist, sind wir fertig
  if (n < 0) {
    console.log("Fertig!");
  }
  // Ansonsten, gib n aus und rufe die Funktion mit n - 1 auf
  else {
    console.log(n);
    zaehleHerunter(n - 1);
  }
}

zaehleHerunter(5);
```

<br>

#### ACHTUNG PERFORMANCE:

Rekursion kann zu Performance-Problemen führen, wenn die Rekursionstiefe sehr groß ist, da jeder Funktionsaufruf Ressourcen (insbesondere Stack-Speicher) benötigt. In solchen Fällen kann es sinnvoller sein, eine iterative Lösung zu verwenden. Darüber hinaus sind rekursive Funktionen manchmal schwieriger zu verstehen und zu debuggen als ihre iterativen Äquivalente.

##### INFO:

Mit einer rekursiven Funktion, kann man das selbe Ergebnis wie mit einer while-Schleife erreichen.

<br>
<br>
<br>

# <a name="seven"></a>Aufgaben

## Zahlen raten

Erstelle ein einfaches Zahlenraten-Spiel in der Konsole mit JavaScript und der Node.js-Bibliothek readline-sync.

Details:

- Das Spiel sollte eine zufällige Zahl zwischen 1 und 100 generieren. Dies ist die Zahl, die der Benutzer erraten muss.
- Das Programm sollte den Benutzer nach seiner geratenen Zahl fragen. Die Benutzereingabe sollte eine ganze Zahl sein.
- Das Programm sollte prüfen, ob die geratene Zahl zu hoch, zu niedrig oder gleich der generierten zufälligen Zahl ist.
- Wenn die geratene Zahl zu hoch ist, sollte das Programm dem Benutzer einen Hinweis geben, dass die Zahl zu hoch ist, und den Benutzer bitten, es erneut zu versuchen.
- Wenn die geratene Zahl zu niedrig ist, sollte das Programm dem Benutzer einen Hinweis geben, dass die Zahl zu niedrig ist, und den Benutzer bitten, es erneut zu versuchen.
- Wenn der Benutzer die Zahl errät, sollte das Programm ihm gratulieren und die Anzahl der Versuche anzeigen, die er benötigt hat, um die Zahl zu erraten.
- Das Programm sollte weiterlaufen, bis der Benutzer die richtige Zahl errät.

_Lösung: Nach Ablauf der Zeit coden wir das ganze zusammen._

<br />
<br />
<br />

# <a name="ressources"></a>Ressourcen

-

# <a name="exe"></a>Exercises
