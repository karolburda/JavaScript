# Zadanie 5: `keydown` — sterowanie kropką

## Cel

W `#gameArea` jest kropka `#player`. Strzałkami na klawiaturze przesuwasz ją wewnątrz obszaru gry.

## Przydatne

- Nasłuch `"keydown"` dodajesz na `document`. Przed testem kliknij w okno, żeby strona miała fokus.
- Klawisz odczytasz z `e.key`: `"ArrowRight"`, `"ArrowLeft"`, `"ArrowUp"`, `"ArrowDown"`.
- Pozycję trzymaj w zmiennych `x` i `y`. Po zmianie ustawiasz na przykład `player.style.transform = "translate(" + x + "px, " + y + "px)"`.

## Wymagania

1. Cztery strzałki ruszają kropkę w odpowiednie strony.
2. Inne klawisze nic nie psują.
3. Przed testem strzałek klikasz w stronę, żeby okno miało fokus.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Kliknij w stronę, potem naciśnij strzałkę w prawo. Kropka przesuwa się w prawo. Naciśnij strzałkę w górę. Kropka jedzie w górę.
