# Zadanie 5 – Dynamiczna zmiana tekstu (`textContent` i `innerHTML`)

## Cel

Nauczysz się czytać i modyfikować zawartość tekstową elementów DOM za pomocą właściwości
`textContent` i `innerHTML`. Odkryjesz różnicę między nimi i zastosujesz je w praktyce.

---

## Przydatne (teoria)

- `element.textContent` – odczytuje lub ustawia **czysty tekst** bez interpretacji tagów HTML. Bezpieczniejsze – użytkownik nie może wstrzyknąć tagów HTML.
- `element.innerHTML` – odczytuje lub ustawia zawartość **jako HTML** (tagi są interpretowane).
- Porównanie:
  ```javascript
  el.textContent = "<strong>Ważne!</strong>";   // wyświetli dosłownie "<strong>Ważne!</strong>"
  el.innerHTML   = "<strong>Ważne!</strong>";   // wyświetli pogrubione "Ważne!"
  ```
- Odczyt aktualnej wartości: `const tekst = el.textContent;`
- Łączenie z wartością wejściową: `document.querySelector("input").value` – odczytuje wartość pola input.
- `element.placeholder` – zmiana tekstu pomocniczego pola formularza.

---

## Kroki – wykonaj po kolei

### Krok 1 – Odczyt i zmiana `textContent`
- Wyszukaj element `#tytul` i wypisz w konsoli jego aktualny `textContent`.
- Zmień `textContent` na nową wartość wg własnego pomysłu.

### Krok 2 – `textContent` vs `innerHTML` – obserwacja różnicy
- Wyszukaj element `#demo-tekst`.
- Przypisz mu przez `textContent` łańcuch zawierający tag HTML, np. `"Tekst z <em>kursywą</em>"`.
- Sprawdź efekt w przeglądarce.
- Teraz zmień to samo na `innerHTML` z tym samym łańcuchem.
- Porównaj wyniki – jaką różnicę widzisz?

### Krok 3 – Budowanie treści przez `innerHTML`
- Wyszukaj element `#lista-wynikow`.
- Przypisz mu przez `innerHTML` gotowy kod HTML z kilkoma `<li>` wewnątrz `<ul>`.
- Przykładowy efekt:  `<ul><li>Wynik 1</li><li>Wynik 2</li></ul>`

### Krok 4 – Reaktywna zmiana tekstu (odczyt z formularza)
- Wyszukaj pole `#pole-imienia` (input).
- Wyszukaj przycisk `#btn-przywitaj`.
- Wyszukaj element `#powitanie`.
- Dodaj do przycisku obsługę zdarzenia `click`:  
  po kliknięciu odczytaj `value` z pola i zaktualizuj `textContent` elementu `#powitanie`  
  tak, aby wyświetlał np. `"Cześć, [imię]!"`.

### Krok 5 – Aktualizacja licznika
- Wyszukaj element `#licznik`.
- Wyszukaj przycisk `#btn-dodaj`.
- Przechowaj wartość licznika w zmiennej (zacznij od 0).
- Po każdym kliknięciu przycisku zwiększ licznik i zaktualizuj `textContent` elementu `#licznik`.

---

## Oczekiwany efekt

- Nagłówek ma nowy tekst.
- Widać różnicę między `textContent` a `innerHTML`.
- Lista wyników jest dynamicznie wstawiona przez `innerHTML`.
- Formularz wyświetla spersonalizowane powitanie po kliknięciu.
- Kliknięcia przycisku inkrementują licznik na ekranie.
