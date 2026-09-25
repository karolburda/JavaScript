# Zadanie 9: Rozbudowana Logika - "Klimatyzacja"

## Cel

Nauczysz się zarządzać bardziej skomplikowanymi warunkami wewnątrz funkcji (`else if`, operatory `&&`).

## Instrukcja

1.  W pliku `index.html` w sekcji `<head>` zdefiniuj funkcję `sterujKlimatyzacja(temperatura, czyWlaczona)`. Funkcja przyjmuje liczbę i wartość logiczną (true/false).
2.  Logika funkcji (użyj `document.write` wewnątrz):
    - Jeśli klimatyzacja jest wyłączona (`czyWlaczona === false`), wypisz: "Klimatyzacja nie działa.<br>".
    - W przeciwnym razie (jest włączona):
      - Jeśli temperatura > 30, wypisz: "Chłodzenie na MAX!<br>".
      - Jeśli temperatura > 25, wypisz: "Chłodzenie umiarkowane.<br>".
      - W przeciwnym razie: "Temperatura idealna, wiatrak wolny.<br>".
3.  Zjedź do sekcji `<body>`. Znajdź element `<div id="wynik">`.
4.  Wewnątrz tego diva wstaw znacznik `<script>` i wywołaj funkcję dla różnych kombinacji:
    - `sterujKlimatyzacja(35, true)`
    - `sterujKlimatyzacja(15, true)`
    - `sterujKlimatyzacja(40, false)`
5.  **W stopce pliku HTML (w sekcji `<footer>`) wpisz swoje imię, nazwisko i klasę.**

## Wskazówka

Zauważ, jak czytelny staje się kod wywołania. Zamiast pisać wszędzie "if... else...", piszemy po prostu `sterujKlimatyzacja(...)`.
