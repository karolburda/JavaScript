# Nauka – `querySelectorAll`: numerowana lista

## Cel

Lista `#zakupy` ma trzy pozycje: mleko, chleb, masło. Każda ma dostać numer z przodu, na przykład `1. mleko`. Numerów nie dopisujesz ręcznie w HTML — skrypt ma przejść po wszystkich `li` i złożyć nowy napis.

## Przydatne

- `document.querySelectorAll("#zakupy li")` zwraca NodeList, nie jeden element.
- Na NodeList nie ustawisz `textContent` od razu. Pętla `for` po `lista.length` i `lista[i].textContent` trafia w każdą pozycję.
- Numer dla człowieka to `i + 1`. Składasz string, na przykład `(i + 1) + ". " + lista[i].textContent`.

## Wymagania

1. Numerujesz wszystkie `li` wewnątrz `#zakupy`.
2. Oryginalna nazwa produktu zostaje, tylko na początku pojawia się prefiks.
3. Nie używasz `innerHTML`.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Po odświeżeniu strony lista zmienia się z „mleko / chleb / masło” na „1. mleko”, „2. chleb”, „3. masło”.
