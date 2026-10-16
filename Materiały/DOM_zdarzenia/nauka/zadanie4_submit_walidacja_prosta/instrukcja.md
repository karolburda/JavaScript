# Zadanie 4: `submit` i `preventDefault`

## Cel

Formularz `#loginForm` ma pole `#passwordInput` i akapit `#message`. Wysłanie formularza **nie** odświeża strony. Puste hasło pokazuje komunikat błędu. Wpisane hasło pokazuje komunikat sukcesu.

## Przydatne

- Zdarzenie `"submit"` ląduje na **formularzu** (`#loginForm`), nie na przycisku.
- `e.preventDefault()` zatrzymuje przeładowanie strony. Bez tego komunikat w `#message` zniknie.
- Treść hasła to `#passwordInput.value`. Komunikat wypisujesz przez `textContent`. Kolor możesz ustawić przez `style.color`.

## Wymagania

1. Po „Zaloguj” adres strony się nie zmienia i komunikat zostaje na ekranie.
2. Puste hasło i niepuste hasło dają dwa różne komunikaty.
3. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

Zostaw hasło puste i kliknij „Zaloguj”. W `#message` pojawia się „Wpisz hasło!” (czerwony). Wpisz dowolne znaki i wyślij ponownie. Tekst zmienia się na „Formularz wysłany (teoretycznie)” (zielony).
