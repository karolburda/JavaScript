# Zadanie 7: Zasięg zmiennych (Globalne) - "Fabryka"

## Cel

Zrozumiesz, jak działają zmienne globalne i jak funkcje mogą je zmieniać.

## Instrukcja

1.  W pliku `index.html` w sekcji `<head>`:
    - Stwórz zmienną globalną: `let liczbaProduktow = 0;`.
    - Zdefiniuj funkcję `wyprodukuj()`.
2.  Wewnątrz funkcji zwiększ licznik: `liczbaProduktow++;`.
3.  Użyj `document.write("Wyprodukowano! Stan magazynu: " + liczbaProduktow + "<br>");` wewnątrz funkcji.
4.  Zjedź do sekcji `<body>`. Znajdź element `<div id="wynik">`.
5.  Wewnątrz tego diva wstaw znacznik `<script>` i wywołaj funkcję `wyprodukuj()` trzy razy.
6.  **W stopce pliku HTML (w sekcji `<footer>`) wpisz swoje imię, nazwisko i klasę.**
7.  Zobacz, jak zmienna globalna zachowuje swoją wartość między wywołaniami funkcji.

## Wniosek

Funkcje mają dostęp do zmiennych globalnych i mogą je trwale zmieniać.
