# Nauka – `getElementById` i `textContent`

## Cel

Na stronie jest nagłówek z `id` `tytul` i startowym tekstem „Witamy”. Po wczytaniu strony okno `prompt` pyta o nową nazwę sklepu. Ten napis ma trafić do nagłówka jako zwykły tekst.

## Przydatne

- `document.getElementById("tytul")` szuka po `id`. W argumencie podajesz samą nazwę, **bez** kratki.
- `element.textContent = napis` wstawia zwykły tekst, bez interpretowania znaczników.
- Skrypt jest na końcu `body`, więc nagłówek już istnieje. W tym dziale nie dodajesz `addEventListener` i nie używasz `innerHTML`.

## Wymagania

1. Element pobierasz po `id`, nie po zgadywaniu znacznika.
2. Treść nagłówka pochodzi z `prompt`, nie jest wpisana na sztywno.
3. Po odświeżeniu strony i potwierdzeniu okna widać nową nazwę zamiast „Witamy”.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po odświeżeniu w oknie wpisz `Sklep 3Ti` i potwierdź. Nagłówek na stronie zmienia się z „Witamy” na „Sklep 3Ti”.
