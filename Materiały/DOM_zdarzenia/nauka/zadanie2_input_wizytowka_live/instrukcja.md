# Zadanie 2: `input` — wizytówka na żywo

## Cel

Pole `#nameInput` ma na żywo kopiować wpis do `#namePreview`. Przy każdym znaku wizytówka się aktualizuje. Gdy pole jest puste, wracasz do tekstu „Jan Nowak”.

## Przydatne

- Zdarzenie `"input"` reaguje przy każdej zmianie w polu, nie dopiero po kliknięciu przycisku.
- Treść pola to właściwość `.value`, nie atrybut i nie `textContent`. Możesz wziąć `pole.value` albo `e.target.value`.
- Podgląd na wizytówce to zwykły tekst: `textContent`.

## Wymagania

1. Nasłuch ląduje na polu `#nameInput`.
2. Wizytówka aktualizuje się w trakcie pisania, bez dodatkowego przycisku.
3. Puste pole przywraca tekst „Jan Nowak”.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

W pole wpisz `Anna`. Na wizytówce od razu widać „Anna” zamiast „Jan Nowak”. Skasuj wszystko. Nagłówek wraca do „Jan Nowak”.
