# Zadanie 6: Zasięg zmiennych (Lokalne) - "Sejf"

## Cel

Zrozumiesz, że zmienne utworzone wewnątrz funkcji są **niewidoczne** i niedostępne poza nią. Nazywamy to zasięgiem lokalnym.

## Instrukcja

1.  W pliku `index.html` w sekcji `<head>` zdefiniuj funkcję `otworzSejf()`.
2.  Wewnątrz niej stwórz zmienną: `let tajnyKod = 1234;`.
3.  Wewnątrz funkcji wyświetl ten kod: `document.write("Kod w środku sejfu: " + tajnyKod + "<br>");`.
4.  Zjedź do sekcji `<body>`. Znajdź element `<div id="wynik">`.
5.  Wewnątrz tego diva wstaw znacznik `<script>` i wywołaj funkcję `otworzSejf()`.
6.  Teraz, w tym samym bloku `<script>` (pod wywołaniem), spróbuj wyświetlić tę samą zmienną: `document.write("Kod na zewnątrz: " + tajnyKod);`.
7.  **W stopce pliku HTML (w sekcji `<footer>`) wpisz swoje imię, nazwisko i klasę.**
8.  Uruchom stronę i otwórz Konsolę przeglądarki (F12 -> Console). Zobaczysz błąd!

## Dlaczego?

Zmienna `tajnyKod` "żyje" tylko wewnątrz funkcji. Poza nią nie istnieje. To mechanizm bezpieczeństwa.

## Zadanie dodatkowe

Zakomentuj linię, która powoduje błąd (tę poza funkcją), aby naprawić skrypt.
