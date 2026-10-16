# Zadanie 3: `mouseenter` / `mouseleave`

## Cel

Na stronie są trzy kafle `.box` oraz akapit `#info` z tekstem startowym „Tutaj pojawi się opis...”. Najazd na kafel pokazuje jego opis w `#info` i podświetla kafel. Zjazd przywraca tekst startowy i zwykły wygląd.

## Przydatne

- `querySelectorAll(".box")` i pętla (albo `forEach`) — nasłuch dodajesz **na każdym** kafelku.
- Pary zdarzeń: `"mouseenter"` przy najechaniu i `"mouseleave"` przy zjechaniu.
- Opis jest w atrybucie `data-opis`. Odczytasz go przez `element.dataset.opis` albo `getAttribute("data-opis")`.
- W `#info` wstawiasz zwykły tekst przez `textContent`.

## Wymagania

1. Każdy z trzech kafli ma dwa nasłuchy: wjazd i zjazd.
2. Opis bierzesz z atrybutu kafla, nie wpisujesz go na sztywno w `if`.
3. Po zjechaniu myszy stan wraca do startowego.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Najedź na kafel „2”. W `#info` pojawia się „Niebieski kwadrat numer 2 jest super”. Zjedź myszą. Tekst wraca do „Tutaj pojawi się opis...”.
