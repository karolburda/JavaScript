# Zadanie 6 – Zmiana kolorów przez `style` i `classList`

## Cel

Nauczysz się zmieniać wygląd elementów na dwa sposoby: przez właściwość `style` (styl inline)
oraz przez zarządzanie klasami CSS (`classList`). Odkryjesz, kiedy używać każdego z nich.

---

## Przydatne (teoria)

**Styl inline (`element.style`):**
- `element.style.color` – kolor tekstu
- `element.style.backgroundColor` – kolor tła
- `element.style.border` – ramka (np. `"2px solid red"`)
- `element.style.opacity` – przezroczystość (0–1)
- Właściwości CSS z myślnikiem → camelCase: `font-size` → `fontSize`, `border-radius` → `borderRadius`

**Klasy CSS (`element.classList`):**
- `element.classList.add("nazwa")` – dodaje klasę
- `element.classList.remove("nazwa")` – usuwa klasę
- `element.classList.toggle("nazwa")` – dodaje jeśli nie ma, usuwa jeśli ma
- `element.classList.contains("nazwa")` – sprawdza, czy klasa istnieje (true/false)
- Zaleta: logika w CSS (pliku zewnętrznym), JS tylko przełącza klasy → czystszy kod.

**Zdarzenie kliknięcia:**
- `element.addEventListener("click", funkcja)` – reagowanie na kliknięcia.

---

## Kroki – wykonaj po kolei

### Krok 1 – Zmiana koloru przez `style` inline
- Wyszukaj element `#panel-inline`.
- Zmień kolor tekstu, kolor tła i dodaj ramkę przez właściwości `style`.

### Krok 2 – Zmiana wielu elementów przez `style` (querySelectorAll + forEach)
- Wyszukaj wszystkie elementy `.blok`.
- Każdemu zmień `backgroundColor` i `color` (forEach).

### Krok 3 – Przełączanie klasy (classList.toggle) – tryb ciemny
- Wyszukaj przycisk `#btn-dark` i element `#strefa-dark`.
- Po kliknięciu przycisku przełącz klasę `"dark-mode"` na elemencie `#strefa-dark`.
- Klasa `dark-mode` jest już zdefiniowana w CSS – sprawdź jak zmienia wygląd!

### Krok 4 – classList.add / classList.remove – podświetlanie aktywnej karty
- Wyszukaj wszystkie elementy `.opcja`.
- Każdemu dodaj nasłuchiwanie zdarzenia `click`.
- Po kliknięciu: usuń klasę `"aktywna"` ze wszystkich `.opcja`, a następnie dodaj ją tylko do klikniętego elementu.
- Klasa `aktywna` jest zdefiniowana w CSS.

### Krok 5 – classList.contains – warunkowa zmiana stylu
- Wyszukaj przycisk `#btn-zmien`.
- Po kliknięciu sprawdź, czy element `#komunikat` posiada klasę `"sukces"`.
  - Jeśli **tak** – usuń ją i dodaj klasę `"blad"`.
  - Jeśli **nie** – dodaj klasę `"sukces"` i usuń `"blad"`.

---

## Oczekiwany efekt

- Panel inline ma zmienione kolory przez `style`.
- Bloki mają zmienione tła przez `forEach`.
- Przycisk przełącza tryb ciemny.
- Klikanie opcji wyróżnia aktywną (tło/kolor zmienia się).
- Przycisk „Zmień stan" naprzemiennie zmienia klasę komunikatu.
