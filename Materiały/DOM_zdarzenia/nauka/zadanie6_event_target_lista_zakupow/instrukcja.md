# Zadanie 6: `e.target` — lista zakupów

## Cel

Lista `#shoppingList` ma kilka pozycji `li`. Jedno nasłuchiwanie `click` na całej liście oznacza kliknięty produkt jako kupiony (klasa `.done` jest już w CSS). Ponowny klik zdejmuje oznaczenie.

## Przydatne

- Nasłuch dodajesz na `ul`, nie na każdym `li` osobno.
- `e.target` to kliknięty węzeł. Tag sprawdzisz przez `e.target.tagName === "LI"` (wielkie litery).
- Przełączenie wyglądu: `e.target.classList.toggle("done")`. Klasy dokładniej poznasz w dziale 15 — tu tylko ten jeden przełącznik.

## Wymagania

1. Na liście jest jedno `addEventListener`.
2. Klik w `li` przełącza przekreślenie. Klik obok pozycji nic nie robi.
3. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Kliknij „Mleko”. Pozycja jest przekreślona. Kliknij „Mleko” drugi raz. Przekreślenie znika. Klik w puste miejsce obok listy nic nie zmienia.
