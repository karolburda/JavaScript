# Nauka – `querySelector`: karta produktu

## Cel

W karcie produktu są dwa pola z klasami `nazwa` i `cena` (startowo „chleb” i „4.50”). Dwa okna `prompt` wczytują nową nazwę i nową cenę. Oba napisy ustawiasz przez `querySelector` i `textContent`.

## Przydatne

- `document.querySelector(".nazwa")` szuka po selektorze CSS. Klasa w selektorze ma **kropkę**.
- `querySelector` zwraca pierwszy pasujący element. Do zapisu tekstu służy `textContent`.
- Ceny nie musisz zamieniać na liczbę, jeśli tylko wypisujesz tekst z okna.

## Wymagania

1. Trafiasz w `.nazwa` i `.cena` selektorem, nie po zgadywaniu znacznika.
2. Oba napisy pochodzą z `prompt`.
3. Reszta karty (etykiety, układ) zostaje bez zmian.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

W pierwszym oknie wpisz `masło`, w drugim `8.50` i potwierdź oba. W karcie zamiast „chleb” i „4.50” widać „masło” oraz „8.50”.
