# Zadanie: Kontrola limitu gości w recepcji hotelowej

## Cel
Napisz skrypt rejestrujący rezerwacje gości hotelowych i blokujący dodawanie nowych węzłów z komunikatem ostrzegawczym po osiągnięciu maksymalnego limitu 5 pokoi.
Rozwiązanie to jest kluczowe w systemach rezerwacji biletów lotniczych, ograniczaniu liczby uczestników warsztatów oraz limitowaniu liczby pozycji w darmowych planach subskrypcyjnych.

## Wskazówki aktywizujące
- Przeanalizuj w `teoria.md` sekcję 6 dotyczącą bezpiecznego usuwania węzłów oraz manipulacji listą.
- Zastanów się: jak sprawdzić bieżącą liczbę dzieci w elemencie za pomocą właściwości `children.length`?
- Przetestuj w konsoli: `document.querySelector('#lista-gosci').children.length`.

## Treść do wpisania
Wpisz dokładnie następujące teksty: komunikat błędu limitu "Osiągnięto limit miejsc! Brak wolnych pokoi w obiekcie." oraz ostrzeżenie walidacji "Wprowadź poprawne nazwisko gościa przed zatwierdzeniem." i szablon rezerwacji "Gość hotelowy: ".

## Wymagania
1. Pobierz referencje do pola `#nazwisko-goscia`, przycisku `#btn-zamelduj`, listy `#lista-gosci` oraz kontenera `#komunikat-limitu`.
2. Po kliknięciu przycisku `#btn-zamelduj`:
   - sprawdź czy pole nie jest puste; jeśli puste, wyświetl w `#komunikat-limitu`: "Wprowadź poprawne nazwisko gościa przed zatwierdzeniem.",
   - sprawdź warunek progowy: czy `listaGosci.children.length >= 5`,
   - jeśli limit został osiągnięty, utwórz w `#komunikat-limitu` element ostrzeżenia z klasą `komunikat-ostrzezenie` i tekstem "Osiągnięto limit miejsc! Brak wolnych pokoi w obiekcie." oraz zablokuj dodawanie węzła,
   - jeśli limit nie jest przekroczony: utwórz element `li`, nadaj klasę `wpis-rezerwacji`, wstaw tekst "Gość hotelowy: " + nazwiskoGoscia, dołącz metodą `appendChild()` do `#lista-gosci`, wyczyść pole i usuń ostrzeżenie.

## Przykład
Stan początkowy: lista zawiera 2 zameldowanych gości.
Akcja: użytkownik wprowadza kolejne nazwiska, aż liczba gości osiągnie 5, a potem próbuje dodać szóstego.
Efekt: przy próbie dodania szóstego gościa nowy wpis nie powstaje, a nad listą pojawia się czerwony komunikat "Osiągnięto limit miejsc! Brak wolnych pokoi w obiekcie.".
