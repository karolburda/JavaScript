# Zadanie 8: Instrukcje warunkowe - "Bramkarz"

## Cel

Nauczysz się, jak sprawić, by funkcja podejmowała decyzje w oparciu o otrzymane argumenty.

## Instrukcja

1.  W pliku `index.html` w sekcji `<head>` zdefiniuj funkcję `wpuscNaImpreze(wiek)`.
2.  Wewnątrz funkcji użyj instrukcji `if`, aby sprawdzić, czy `wiek` jest większy lub równy 18.
3.  Jeśli tak: `document.write("Zapraszamy! Masz " + wiek + " lat.<br>");`.
4.  W przeciwnym wypadku (`else`): `document.write("Niestety, wstęp od 18 lat.<br>");`.
5.  Zjedź do sekcji `<body>`. Znajdź element `<div id="wynik">`.
6.  Wewnątrz tego diva wstaw znacznik `<script>` i wywołaj funkcję dla różnych argumentów (np. 15, 18, 25).
7.  **W stopce pliku HTML (w sekcji `<footer>`) wpisz swoje imię, nazwisko i klasę.**

## Wskazówka

Funkcja to idealne miejsce na "schowanie" logiki sprawdzającej. Dzięki temu w głównym kodzie tylko pytamy funkcję o działanie, nie martwiąc się o szczegóły `if`.
