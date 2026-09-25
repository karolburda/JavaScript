# Nauka – zakres: tylko linki w menu

## Cel

Na stronie są linki w `#menu` (Sklep, Kontakt) oraz link „Regulamin” w stopce. Dopisujesz `" ↗"` **tylko** do linków w menu. Stopka zostaje bez zmian.

## Przydatne

- Najpierw bierzesz rodzica: `document.getElementById("menu")`.
- Potem `menu.querySelectorAll("a")` szuka **od** menu, nie od całego `document`.
- `document.querySelectorAll("a")` trafiłoby też „Regulamin” w stopce.

## Wymagania

1. Wyszukiwanie zaczynasz od rodzica, nie od całej strony.
2. Po NodeList przechodzisz pętlą i dopisujesz strzałkę do `textContent`.
3. Link w stopce zostaje nienaruszony.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po odświeżeniu w menu widać „Sklep ↗” i „Kontakt ↗”. Napis „Regulamin” w stopce nie dostaje strzałki.
