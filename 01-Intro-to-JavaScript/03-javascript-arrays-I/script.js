// # Array Grundlagen
// * Arrays speichern mehrere Werte in einer festen Reihenfolge; der Index ist deshalb der zentrale Zugriffspunkt.
const mixedValues = ['John', 40, true, function () {}, [], {}];
const students = ['Alexander', 'Anton', 'Thomas', 'Christopher', 'Philipp', 'Valeriia'];

console.group('Array Grundlagen');
console.log('Gemischtes Array:', mixedValues);
console.log('Anzahl der Namen:', students.length);
console.log('Name an Index 4:', students[4]);
console.log('Erster Name vorher:', students[0]);

students[0] = 'John';
console.log('Erster Name nachher:', students[0]);
console.groupEnd();

// # Loops
// * for - hier haben wir den Index und können gezielt auf Positionen im Array reagieren.
console.group('Loops');
for (let i = 0; i < students.length; i++) {
  console.log(`Index ${i}:`, students[i]);
}

// * for...of - hier steht der Wert im Fokus, nicht seine Position im Array.
for (const studentName of students) {
  console.log(studentName.toUpperCase());
}
console.groupEnd();

// # Primitive Datentypen
console.group('Primitive Datentypen');
const a = 10;
const b = 10;
console.log('a === b:', a === b);
console.groupEnd();

// # Objekte / Referenz-Datentypen
// * Arrays und Objekte werden über ihre Speicheradresse verglichen, nicht über identischen Inhalt.
console.group('Objekte / Referenz-Datentypen');
const obj1 = { value: 10 };
const obj2 = { value: 10 };
const obj3 = obj1;

console.log('obj1 === obj2:', obj1 === obj2);
console.log('obj1 === obj3:', obj1 === obj3);
console.groupEnd();

// # Array Methoden
const names = ['Alexander', 'Anton', 'Thomas', 'Christopher', 'Philipp', 'Valeriia'];

console.group('Array Methoden');
console.log('Start:', names);

// * push verändert das bestehende Array direkt und fügt neue Elemente am Ende hinzu.
names.push('Renke', 'Tim');
console.log('Nach push:', names);

// ! const schützt nur die Variable vor einer Neuzuweisung, nicht den Inhalt des Arrays vor Mutation.
// * pop verändert dasselbe Array und entfernt das letzte Element.
names.pop();
console.log('Nach pop:', names);

// * reverse mutiert das Array, auf dem die Methode ausgeführt wird.
const namesForReverse = [...names];
namesForReverse.reverse();
console.log('Nach reverse:', namesForReverse);
console.log('Original nach reverse-Kopie:', names);

// * toReversed erzeugt ein neues Array; das Original bleibt dadurch unverändert.
const newArray = names.toReversed();
console.log('Nach toReversed Original:', names);
console.log('Neues Array von toReversed:', newArray);
console.groupEnd();

// # Teilbereiche
console.group('Teilbereiche');
// * slice erzeugt eine Kopie eines Teilbereichs und lässt das Original unverändert.
console.log('Vor slice:', names);
const slicedArray = names.slice(2, -2);
console.log('Nach slice:', names);
console.log('Sliced array:', slicedArray);

// * splice verändert das Original-Array, weil Elemente direkt eingefügt, ersetzt oder entfernt werden.
// ! slice und splice klingen ähnlich, haben aber unterschiedliche Auswirkungen auf das Original.
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');
console.log('Nach erstem splice:', months);

months.splice(4, 1, 'May');
console.log('Nach zweitem splice:', months);
console.groupEnd();

// # Array und String umwandeln
console.group('Array und String umwandeln');
// * join verbindet Array-Elemente zu einem String; der Separator entscheidet, wie die Werte getrennt werden.
console.log('Namen als Array:', names);
const joinedStrings = names.join(', ');
console.log('Names of G-SD29:', joinedStrings);
console.log('Großgeschriebener String:', joinedStrings.toUpperCase());

// * split macht den umgekehrten Schritt: Aus einem String wird anhand des Separators wieder ein Array.
console.log('String zurück als Array:', joinedStrings.split(', '));

const sentence = 'Hi, my name is Renke';
const splitString = sentence.split(' ');
console.log('Satz als Array:', splitString);

// * Nach dem split können einzelne Wörter wie Array-Elemente per Index ersetzt werden.
splitString[4] = 'Gandalf';
console.log('Veränderter Satz:', splitString.join(' '));
console.groupEnd();
