// ============================================================
// Zadanie 3 – querySelector() z różnymi selektorami CSS
// ============================================================
// querySelector zwraca PIERWSZY pasujący element lub null.
// Argument to dowolny selektor CSS – ten sam co w arkuszu stylów!
// ============================================================

// KROK 1 – Selektor po id i po tagu
// Znajdź h1 przez id="glowny-naglowek" i zmień jego tekst


// Znajdź PIERWSZY paragraf <p> na stronie (selektor po tagu) i zmień kolor tekstu


// KROK 2 – Selektor po klasie
// Znajdź element z klasą "baner" i zmień jego kolor tła (backgroundColor)


// Znajdź span wewnątrz elementu z klasą "baner" (selektor: ".baner span")
// i zmień jego textContent


// KROK 3 – Selektor zagnieżdżony (relacja rodzic–dziecko)
// Znajdź PIERWSZE li wewnątrz .menu (selektor: ".menu li") i zmień kolor tekstu


// Znajdź li będące BEZPOŚREDNIM dzieckiem ul.menu (selektor: "ul.menu > li")
// Wypisz oba elementy w konsoli – czy to ten sam element?


// KROK 4 – Selektor po atrybucie
// Znajdź input z type="text" i zmień jego atrybut placeholder


// Znajdź element z atrybutem data-typ="vip" i zmień kolor jego tła


// KROK 5 – Pseudoklasy CSS
// Znajdź PIERWSZE li w liście .produkty (:first-child) i zmień kolor tekstu


// Znajdź OSTATNIE li (:last-child) i zmień kolor tła


// Znajdź DRUGIE li (:nth-child(2)) i pogrub tekst (fontWeight = "bold")


// KROK 6 – Wyszukiwanie wewnątrz elementu (kontekst)
// Znajdź element .profil i zapisz do zmiennej


// Na tym elemencie (nie na document!) wywołaj querySelector("h2")
// i zmień tekst nagłówka profilu


// Na tym samym elemencie wywołaj querySelector("p")
// i zmień kolor tekstu
