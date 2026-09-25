# Zadanie 10: Pętle w funkcjach - "Drukarka"

## Cel

Nauczysz się łączyć funkcje z pętlami, aby automatyzować powtarzalne zadania.

## Instrukcja

1.  W pliku `index.html` w sekcji `<head>` zdefiniuj funkcję `drukujLinie(ilosc)`. Argument `ilosc` informuje, ile razy ma się coś wydarzyć.
2.  Wewnątrz funkcji użyj pętli `for` (lub `while`), która wykona się tyle razy, ile wynosi `ilosc`.
3.  W każdej iteracji pętli wyświetl znak poziomej kreski, np. `document.write("-");`.
4.  Po zakończeniu pętli (nadal wewnątrz funkcji) dodaj `document.write("<br>");`, aby przejść do nowej linii.
5.  Zjedź do sekcji `<body>`. Znajdź element `<div id="wynik">`.
6.  Wewnątrz tego diva wstaw znacznik `<script>` i wywołaj funkcję dla różnych długości:
    - `drukujLinie(10);`
    - `drukujLinie(50);`
    - `drukujLinie(5);`
7.  **W stopce pliku HTML (w sekcji `<footer>`) wpisz swoje imię, nazwisko i klasę.**

## Zastosowanie

Taka funkcja pozwala łatwo generować elementy interfejsu lub proste grafiki tekstowe bez kopiowania kodu pętli.
