# Nauka – podsumowanie: panel sklepu

## Cel

Składasz wyszukiwanie z całego działu. Pierwszy `prompt` wczytuje nazwę sklepu i trafia do `#nazwa`. Drugi wczytuje dopisek i doklejasz go tylko do ceny w karcie `.promocja`. Pozycje w `#godziny` numerujesz od 1.

## Przydatne

- Nagłówek możesz wziąć przez `getElementById("nazwa")` albo `querySelector("#nazwa")`.
- Cena promocji to potomek: `.promocja .cena`. Samo `.cena` trafiłoby obie karty.
- Listę numerujesz przez `querySelectorAll` i pętlę. Wszędzie zostajesz przy `textContent`, bez `innerHTML`.

## Wymagania

1. Nagłówek `#nazwa` pochodzi z pierwszego `prompt`.
2. Tylko cena w karcie `.promocja` dostaje dopisek z drugiego `prompt` (na przykład `" (do wyczerpania)"` albo `" -30%"`).
3. Godziny otwarcia są ponumerowane (`1. …`).
4. Stopka i zwykła karta bez promocji zostają bez zmian. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

W pierwszym oknie wpisz `Sklep 3Ti`, w drugim ` -30%`. Nagłówek zmienia się na „Sklep 3Ti”. Cena soka staje się „6.00 -30%”, a chleb zostaje „4.50”. Lista godzin to „1. Pn–Pt 8–16”, „2. Sb 9–13”, „3. Nd nieczynne”.
