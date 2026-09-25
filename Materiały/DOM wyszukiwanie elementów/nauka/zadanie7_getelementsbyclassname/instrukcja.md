# Nauka – `getElementsByClassName`

## Cel

Na stronie są trzy elementy z klasą `status` i tekstem „oczekuje”. Wszystkie mają dostać tekst `OK`. Używasz **starej** metody `getElementsByClassName` (bez kropki w argumencie), potem pętli i `textContent`.

## Przydatne

- `document.getElementsByClassName("status")` przyjmuje samą nazwę klasy, **nie** `".status"`.
- Wynik to HTMLCollection. `length` i `[i]` działają podobnie jak przy NodeList.
- Na co dzień wygodniejszy jest `querySelectorAll(".status")`. Tu chodzi o rozpoznanie zapisu bez kropki.

## Wymagania

1. Używasz `getElementsByClassName`, nie `querySelectorAll`.
2. Zmieniasz wszystkie `.status` na stronie.
3. Wypis idzie przez `textContent`, nie przez `innerHTML`.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po odświeżeniu trzy napisy „oczekuje” (zamówienia A, B i C) stają się „OK”.
