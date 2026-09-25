# Zadanie 7 – Interaktywny panel produktów (zadanie podsumowujące)

## Cel

Zadanie podsumowujące łączy **wszystkie poznane techniki**: wyszukiwanie elementów różnymi metodami,
zmianę tekstu, zarządzanie kolorami przez `style` i `classList`, pracę z listą selektorów
i iterację po NodeList. Zbudujesz interaktywny panel zarządzania kartami produktów.

---

## Przydatne (teoria)

Wszystkie metody poznane w zadaniach 1–6:
- `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`
- `textContent`, `innerHTML`
- `style.color`, `style.backgroundColor`, `style.border`
- `classList.add`, `classList.remove`, `classList.toggle`, `classList.contains`
- `addEventListener("click", fn)`
- `element.querySelector(...)` – szukanie wewnątrz elementu
- `Array.from(nodeList).filter(...)` – filtrowanie nodelist

---

## Opis aplikacji

Strona zawiera panel z kartami produktów (np. laptop, smartfon, słuchawki...).
Każda karta ma: nazwę, cenę, kategorię i przycisk „Dodaj do koszyka".

Za pomocą przycisków filtrujących i sterujących użytkownik może:
1. Wyróżnić kartę po kliknięciu „Dodaj do koszyka" (przez zmianę klasy).
2. Przefiltrować widoczne karty wg kategorii (ukryć/pokazać).
3. Zaznaczyć wszystkie karty lub odznaczyć.
4. Wyświetlić liczbę produktów w koszyku.

---

## Kroki – wykonaj po kolei

### Krok 1 – Wyszukanie i wypisanie elementów
Wyszukaj wszystkie karty (`.karta`) i wypisz w konsoli ich liczbę.  
Dla każdej karty wypisz jej tytuł (wyszukaj `h2` wewnątrz karty).

### Krok 2 – Przycisk „Dodaj do koszyka"
Każdemu przyciskowi `.btn-koszyk` na kartach dodaj nasłuchiwanie `click`.  
Po kliknięciu:
- Przełącz klasę `"w-koszyku"` na elemencie-nadrzędnym `.karta` (to zmieni jej wygląd).
- Zaktualizuj `textContent` przycisku na `"✓ W koszyku"` lub z powrotem na `"Dodaj do koszyka"` (sprawdź stanem klasy).
- Zaktualizuj licznik `#licznik-koszyka` – zlicz ile kart ma aktualnie klasę `"w-koszyku"`.

### Krok 3 – Filtrowanie wg kategorii
Przyciskom `#btn-wszystkie`, `#btn-elektronika`, `#btn-akcesoria` dodaj nasłuchiwanie `click`.  
Po kliknięciu:
- Pokaż lub ukryj karty na podstawie atrybutu `data-kategoria` na karcie.
- Ukrywanie: `element.style.display = "none"`, pokazywanie: `element.style.display = ""`.
- Klasa `"aktywny-filtr"` powinna być dodana do aktywnego przycisku, usunięta z pozostałych.

### Krok 4 – Zaznacz wszystko / Odznacz wszystko
Przyciskowi `#btn-zaznacz-wszystko` dodaj `click`:  
Dodaj klasę `"w-koszyku"` do każdej karty i zaktualizuj licznik.

Przyciskowi `#btn-odznacz-wszystko` dodaj `click`:  
Usuń klasę `"w-koszyku"` z każdej karty, przywróć teksty przycisków, zaktualizuj licznik.

---

## Oczekiwany efekt

- Kliknięcie „Dodaj do koszyka" wyróżnia kartę i aktualizuje licznik.
- Filtry ukrywają/pokazują karty wg kategorii.
- Aktywny filtr jest wyróżniony.
- „Zaznacz wszystko" dodaje wszystkie do koszyka.
- Licznik zawsze pokazuje aktualną liczbę produktów w koszyku.
