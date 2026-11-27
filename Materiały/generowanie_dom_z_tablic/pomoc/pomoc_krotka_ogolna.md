# Pomoc dydaktyczna: Skrót ogólny i ściąga operacyjna

## 1. Organizacja pracy w katalogu zadania

W każdym zadaniu modułu pracujesz na dedykowanym zestawie plików:

| Element | Szablon w folderze zadania (`nauka/zadanieX/`) | Wzorzec w `rozwiazanie/` |
|:---|:---|:---|
| **Plik HTML** | Kompletna struktura strony, formularzy i kontenerów wyjściowych | Identyczna struktura z wpiętym działającym skryptem |
| **Plik CSS** | Gotowe style układu, siatek kart i klas stanu | Gotowe style układu (współdzielone) |
| **Plik JS** | Definicje danych źródłowych oraz komentarze `// TODO` | Kompletna, w 100% działająca implementacja skryptu |

---

## 2. Minimum składniowe modułu: Renderowanie DOM z tablic

### Wzorzec A: Lista z tablicy 1D (`createElement` + `forEach`)
```javascript
const kontener = document.querySelector('#lista-zamowien');
kontener.innerHTML = ''; // Wyczyszczenie przed renderowaniem

dane.forEach((element) => {
  const li = document.createElement('li');
  li.textContent = element;
  kontener.appendChild(li);
});
```

### Wzorzec B: Tabela danych z tablicy obiektów
```javascript
const tbody = document.querySelector('#tabela-danych tbody');
tbody.innerHTML = '';

rekordy.forEach((rekord) => {
  const tr = document.createElement('tr');
  
  const tdNazwa = document.createElement('td');
  tdNazwa.textContent = rekord.nazwa;
  
  const tdCena = document.createElement('td');
  tdCena.textContent = `${rekord.cena} zł`;
  
  tr.append(tdNazwa, tdCena);
  tbody.appendChild(tr);
});
```

### Wzorzec C: Optymalizacja z `DocumentFragment`
```javascript
const fragment = document.createDocumentFragment();

pozycje.forEach((poz) => {
  const div = document.createElement('div');
  div.className = 'element-katalogu';
  div.textContent = poz.tytul;
  fragment.appendChild(div);
});

kontener.appendChild(fragment); // Tylko jedno wstawienie do DOM
```

### Wzorzec D: Składanie szablonu przez `map()` i `innerHTML`
```javascript
const html = produkty.map((p) => `
  <article class="karta-produktu">
    <h3>${p.nazwa}</h3>
    <p>Cena: ${p.cena} zł</p>
    <button class="btn-wybierz" data-id="${p.id}">Wybierz</button>
  </article>
`).join('');

kontener.innerHTML = html;
```

---

## 3. Identyfikatory kontraktowe i standardy DOM (Semestr 3)
- Pola formularzy: `#imie`, `#nazwisko`, `#email`, `#haslo`, `#telefon`, `#kod-pocztowy`, `#pesel`, `#usluga`, `#ilosc`, `#regulamin`
- Przyciski akcji: `#btn-dodaj`, `#btn-filtruj`, `#btn-czysc`, `#btn-wyslij`
- Wyjścia i kontenery widoku: `#wynik`, `#podsumowanie`, `#komunikat-status`, `#lista-zamowien`, `#tabela-danych`
- Klasy pomocnicze stanu: `.ukryty`, `.blad-walidacji`, `.sukces-walidacji`, `.aktywny`

---

## 4. Szybkie przypomnienie: Dobre praktyki i diagnostyka
1. **Zawsze czyść kontener przed pętlą:** Brak instrukcji `kontener.innerHTML = ''` spowoduje powielenie elementów przy każdym kliknięciu.
2. **Narzędzia deweloperskie (F12):** Zakładka *Elements* / *Elementy* pozwala na żywo sprawdzić, czy nowe znaczniki pojawiły się w drzewie dokumentu i jakie mają atrybuty.
3. **Pamiętaj o `.join('')`:** Przy stosowaniu metody `map()` zawsze łącz elementy tablicy pustym separatorem, aby uniknąć przecinków w tekście strony.
4. **Weryfikacja składniowa:** Sprawdź poprawność kodu skryptu poleceniem `node --check script.js` w terminalu.
5. **Poprawne ścieżki:** Pamiętaj, że plik JavaScript jest dołączany w pliku HTML za pomocą znacznika `<script src="script.js"></script>` tuż przed zamykającym znacznikiem `</body>`.
