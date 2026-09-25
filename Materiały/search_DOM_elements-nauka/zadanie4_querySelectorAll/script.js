// ============================================================
// Zadanie 4 – querySelectorAll() z różnymi selektorami CSS
// ============================================================
// querySelectorAll zwraca NodeList WSZYSTKICH pasujących elementów.
// NodeList ma metodę forEach – nie trzeba konwertować!
// ============================================================

// KROK 1 – Wszystkie paragrafy <p>
// Wypisz NodeList i jej .length w konsoli
// forEach: zmień kolor tekstu każdego paragrafu


// KROK 2 – Elementy po klasie "wiersz"
// Ile znaleziono? Zmień kolor tła każdego wiersza (forEach)


// KROK 3 – Pseudoklasa :nth-child(odd/even) – "zebra stripes" w tabeli
// Zaznacz nieparzyste wiersze:  "table tr:nth-child(odd)"
// Zaznacz parzyste wiersze:     "table tr:nth-child(even)"
// Każdej grupie daj inny kolor tła


// KROK 4 – Selektor po atrybucie data-*
// Wyszukaj wszystkie elementy posiadające atrybut data-priorytet (dowolna wartość)
// Selektor: "[data-priorytet]"
// Wypisz je w konsoli

// Wyszukaj elementy z data-priorytet="wysoki"
// Zmień kolor ich obramowania (border)


// KROK 5 – Lista selektorów (operator ,)
// Wyszukaj JEDNOCZEŚNIE elementy z klasą "kategoria-a" i "kategoria-b"
// Jeden querySelectroAll, jeden selektor z przecinkiem
// Zmień kolor tekstu wszystkich znalezionych


// KROK 6 – Bezpośrednie dzieci (>)
// Wyszukaj tylko bezpośrednie dzieci <li> elementu ul#glowna-lista
// Selektor: "ul#glowna-lista > li"
// Zmień kolor tekstu, wypisz w konsoli liczbę elementów
// Czy zagnieżdżone li z .podlista zostały zaznaczone?


// KROK 7 – Konwersja NodeList na tablicę + filter()
// Wyszukaj wszystkie elementy .produkt
// Skonwertuj NodeList na tablicę (Array.from)
// Odfiltruj tylko te, których textContent zawiera "VIP" (.filter + .includes)
// Wypisz przefiltrowane elementy w konsoli
