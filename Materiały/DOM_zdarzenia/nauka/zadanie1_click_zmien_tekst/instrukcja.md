# Zadanie 1: `click` — zmiana tekstu

## Cel

Na stronie jest akapit `#text` z napisem „Ten tekst zmieni się po kliknięciu.” oraz przycisk `#changeBtn`. Po kliknięciu przycisku zmieniasz tekst w akapicie i kolor tła strony.

## Przydatne

- Element szukasz tak jak w dziale 12: `getElementById` albo `querySelector`.
- Nasłuch dodajesz przez `element.addEventListener("click", function () { ... })`.
- Tekst zapisujesz w `textContent`. Tło strony ustawiasz przez `document.body.style.backgroundColor`.

## Wymagania

1. Nasłuch ląduje na przycisku, nie na całym `body`.
2. Po kliknięciu widać nowy napis w `#text` oraz inną barwę tła.
3. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Przed kliknięciem akapit mówi „Ten tekst zmieni się po kliknięciu.”. Kliknij „Kliknij mnie”. W akapicie pojawia się inny napis, a tło strony zmienia kolor, na przykład na jasnoniebieski.
