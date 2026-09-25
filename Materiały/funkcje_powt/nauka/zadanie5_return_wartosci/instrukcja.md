# Zadanie 5: Zwracanie wartości (return)

## Cel

Zrozumiesz kluczową różnicę między **wyświetlaniem** (document.write) a **zwracaniem** (return) wyniku.

## Opis

Profesjonalne funkcje zazwyczaj nie wyświetlają nic na ekranie. One wykonują obliczenia i "oddają" wynik, żeby program mógł go użyć dalej (np. dodać do innej liczby).

## Instrukcja

1.  W pliku `index.html` w sekcji `<head>` zdefiniuj funkcję `przeliczNaMetry(km)`.
2.  Wewnątrz funkcji oblicz metry: `let metry = km * 1000;`.
3.  Użyj instrukcji `return metry;`, aby funkcja zwróciła wynik. (Nie używaj tu document.write!).
4.  Zjedź do sekcji `<body>`. Znajdź element `<div id="wynik">`.
5.  Wewnątrz tego diva wstaw znacznik `<script>`.
6.  W tym skrypcie:
    - Stwórz zmienną: `let wynik1 = przeliczNaMetry(5);`
    - Stwórz drugą zmienną: `let wynik2 = przeliczNaMetry(1.5);`.
    - Wyświetl obie zmienne używając `document.write("Wynik: " + wynik1 + "<br>");`.
7.  **W stopce pliku HTML (w sekcji `<footer>`) wpisz swoje imię, nazwisko i klasę.**

Dzięki `return` funkcja jest "cisza" - oddaje liczbę, a my decydujemy co z nią zrobić (wyświetlić, zapisać, dodać).
