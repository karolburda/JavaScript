# Zadanie 7: `change` — sposób dostawy

## Cel

Lista `#dostawa` (`select`) ma opcje odbioru, kuriera i paczkomatu oraz pusty wybór „— wybierz —”. Wybranie opcji ustawia opis w `#opis`. Pusty wybór przywraca tekst startowy „Wybierz sposób dostawy.”.

## Przydatne

- Zdarzenie `"change"` na `select` odpala się po zatwierdzeniu wyboru, nie przy każdym ruchu myszy.
- Wartość opcji to `select.value` albo `e.target.value`. To właściwość, nie atrybut HTML.
- Tekst widoczny na opcji weźmiesz przez `select.options[select.selectedIndex].textContent`.
- Opis wypisujesz w `#opis` przez `textContent`.

## Wymagania

1. Nasłuch ląduje na `#dostawa`.
2. Każda realna opcja ma własny, widoczny opis (może być wartość `value` albo treść opcji).
3. Powrót do „— wybierz —” przywraca tekst „Wybierz sposób dostawy.”.
4. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Wybierz „Kurier”. W `#opis` pojawia się opis dostawy kurierem, na przykład „Wybrano: Kurier”. Wróć do „— wybierz —”. Tekst znowu brzmi „Wybierz sposób dostawy.”.
