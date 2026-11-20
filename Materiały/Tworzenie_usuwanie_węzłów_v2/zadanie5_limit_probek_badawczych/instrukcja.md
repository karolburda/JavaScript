# Zadanie 5: Limit załadunku komory wirówki

## Cel
Aplikacja ma dodawać numer fiolki z próbką do wirówki, pilnując aby w komorze nie umieszczono więcej niż 6 próbek badawczych.

## Wskazówki / pułapki
- Jak sprawdzić liczbę dzieci w kontenerze komory wirówki? Odsyłacz: teoria.md, sekcja 4 oraz Ściąga.
- Zadbaj o wyświetlenie ostrzeżenia, gdy komora osiągnie maksymalną pojemność.

## Treść merytoryczna
Komunikat o pełnej komorze: Osiągnięto limit wirówki! Maksymalnie 6 próbek w rotorze.
Prefiks próbki: Próbka laboratoryjna ID: 
Klasa fiolki: fiolka-badawcza.
Klasa ostrzeżenia: alarm-rotora.
Identyfikator pola: #nr-probki.
Identyfikator przycisku: #btn-zaladuj-probke.
Identyfikator komory: #komora-wirowki.
Identyfikator statusu: #status-wirowki.

## Wymagania
1. Obsłuż kliknięcie przycisku #btn-zaladuj-probke.
2. Sprawdź liczbę elementów potomnych w #komora-wirowki:
   - jeśli liczba dzieci wynosi co najmniej 6, ustaw w #status-wirowki komunikat o pełnej komorze z klasą alarm-rotora i przerwij operację,
   - jeśli jest mniejsza niż 6 i pole #nr-probki nie jest puste, utwórz element listy z klasą fiolka-badawcza i zadanym prefiksem, dołącz go do #komora-wirowki, wyczyść pole i zresetuj komunikat statusu.

## Przykład
Stan początkowy: w wirówce znajdują się 2 próbki.
Akcja: użytkownik dodaje kolejne fiolki aż do 6, a następnie próbuje dodać siódmą.
Efekt: siódma próbka nie zostaje dodana, a na ekranie pojawia się ostrzeżenie o zapełnieniu rotora.
