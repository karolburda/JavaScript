# Nauka – kombinacje: tylko promocja

## Cel

Na stronie są dwie karty `.produkt`. Jedna ma dodatkowo klasę `promocja`. Do nazwy w karcie promocyjnej dopisujesz `" (promocja)"`. Druga karta zostaje bez zmian.

## Przydatne

- Selektor potomka `.promocja .nazwa` (spacja) oznacza „element `.nazwa` **wewnątrz** `.promocja`”.
- Samo `.nazwa` trafiłoby **obie** nazwy na stronie.
- `textContent` służy i do odczytu, i do dopisania: najpierw bierzesz obecny napis, potem doklejasz dopisek.

## Wymagania

1. Używasz złożonego selektora, a nie „drugiego produktu z brzegu”.
2. Zmiana dotyczy tylko karty `.promocja`.
3. Cen nie ruszasz.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po odświeżeniu „chleb” zostaje „chleb”, a „sok” zmienia się na „sok (promocja)”. Ceny „4.50” i „6.00” zostają takie same.
