
const names = ['Grzegorz', 'Wiktoria', 'Mateusz', 'Ania', 'Sandra', 'Kasia', 'Izabela', 'Weronika'];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];


const countries = [
    { name: 'Nigeria', continent: 'Africa' },
    { name: 'Nepal', continent: 'Asia' },
    { name: 'Angola', continent: 'Africa' },
    { name: 'Poland', continent: 'Europe' },
    { name: 'Kenya', continent: 'Africa' },
    { name: 'Greece', continent: 'Europe' },
    { name: 'France', continent: 'Europe' },
    { name: 'China', continent: 'Asia' }
]

let people = [
    { "id": 123, "name": "Rick Deckard", "email": "rick@bladerunner.org" },
    { "id": 456, "name": "Roy Batty", "email": "roy@replicant.io" },
    { "id": 789, "name": "J.F. Sebastian", "email": "j.f@tyler.com" },
    { "id": 258, "name": "Pris", "email": "pris@replicant.io" }
];

let duplicateName = ['John', 'Paul', 'George', 'Ringo', 'Paul', 'Paul', 'Ringo'];

function showNames() {
    var list = document.getElementById("names");
    let out = names.filter(name => name.includes("r") == true);
    for (const el of out) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(el));
        list.appendChild(li);
    }


}
function showCountries() {
    var list = document.getElementById("countries");
    let out = countries.filter(country => country.continent == 'Europe');
    for (const el of out) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(el.name));
        list.appendChild(li);
    }


}
function showEmails() {
    var list = document.getElementById("people");
    let out = people.filter(people => people.email.includes("replicant.io"));
    for (const el of out) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(el.name));
        list.appendChild(li);
    }


}
function fullDuplicates() {
    var list = document.getElementById("duplicates");
    for (const el of duplicateName) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(el));
        list.appendChild(li);
    }


}
function deleteDuplicates() {
    var nameToDelete = prompt("Wprowadz imie do usuniecia");
    var list = document.getElementById("duplicates");
    list.innerHTML = "";
    let array = duplicateName.filter((value, index) => value !== nameToDelete || duplicateName.indexOf(nameToDelete) === index);
    duplicateName=array;
    for (const el of array) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(el));
        list.appendChild(li);
    }
}
fullDuplicates()
showNames()
showCountries()
showEmails()
document.getElementById("usun").addEventListener("click", deleteDuplicates)

// 1. Na stronach internetowych wyświetlają się nazwy zawierające znak "r".  ( tablica names)

// 2. sprawdź czy tablica zawiera tylko elementy mniejsze niż 9. wynik wyswietl na stronei w sekcji 2
// sprawdź, czy tablica zawiera jakieś elementy mniejsze niż 6 wyników.wynik wyświetl w przeglądarce w sekcji 2
//       inkrementuj wszystkie elementy w tablicy numbers.Nastepnie stwórz nowa tablice zawierajaca tylko elementy nieparzyste.
//       Nesteopnie Oblicz sumę wszystkich elementów z tablicy.Wynik wyswietl w sekcji 2

// 3. Na stronach internetowych wyświetlają się kraje z Europy

// 4. Znajdź nazwiska wszystkich osób, które mają e-maile „replicant.io”. wyświetlanie wyników na stronach internetowych.

// 5. usuwanie zduplikowanych wartości z tablicy nazwaduplikatu