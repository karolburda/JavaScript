## Cel
Stwórz skrypt konfiguratora wyposażenia stanowiska biurowego, który generuje listę zestawu na podstawie kombinacji dwóch kontrolek: listy wyboru profilu stanowiska (`<select id="usluga">`) oraz pola liczbowego (`<input type="number" id="ilosc">`). Sukcesem jest dynamiczne wygenerowanie listy pozycji wraz z przeliczeniem łącznego budżetu za cały pakiet.

Zależność wieloargumentowa to fundament m.in. kalkulatorów polis ubezpieczeniowych (wiek + pakiet ochrony), konfiguratorów serwerów VPS (liczba rdzeni + pamięć RAM) oraz formularzy rezerwacji sal konferencyjnych (typ sali + czas trwania).

## Wskazówki aktywizujące
- Przeczytaj sekcję 5 w pliku `teoria.md` dotyczącą tworzenia widoków z szablonów oraz sekcję 3 o obliczeniach.
- W jaki sposób uzależnić liczbę sztuk wiersza od wartości pola numerycznego? Przemnóż cenę jednostkową przez `ilosc.value`.
- Wpisz w konsoli DevTools: `document.querySelector('#usluga').value` oraz `document.querySelector('#ilosc').value`.

## Treść do wpisania
Wpisz dokładnie następujące teksty, nazwy pozycji wyposażenia i szablony: elementy wyposażenia "Monitor 27 cali 4K IPS", "Fotel ergonomiczny z podparciem lędźwiowym", "Stacja dokująca USB-C Thunderbolt", "Monitor 24 cale FHD z filtrem niebieskiego światła", "Klawiatura numeryczna bezprzewodowa", "Niszczarka dokumentów poziom P-4", "Monitor 32 cale z kalibracją barw DCI-P3", "Tablet graficzny z piórkiem indukcyjnym", "Ramię obrotowe na dwa monitory", etykietę przycisku "Generuj wycenę zestawu", łączniki " x ", " - łączny koszt: ", " zł" oraz raport "Łączna wartość zamówienia: " i " zł dla stanowisk w liczbie: ".

## Wymagania
1. Pobierz kontrolki `#usluga`, `#ilosc`, przycisk `#btn-dodaj`, kontener `#lista-zamowien` oraz `#podsumowanie`.
2. Do przycisku `#btn-dodaj` przypnij zdarzenie `click`.
3. W funkcji obsługi:
   - Odczytaj wybrany profil z `#usluga` oraz liczbę stanowisk z `#ilosc` (wymuś minimum 1 stanowisko).
   - Opróżnij `#lista-zamowien`.
   - Zdefiniuj sumator całkowitego kosztu.
   - Dla każdego elementu z wybranego profilu:
     - Oblicz koszt pozycji: `cena jednostkowa * liczba stanowisk`.
     - Dodaj koszt pozycji do sumatora.
     - Utwórz element `div` z klasą `element-zestawu` i wypisz treść: `[Nazwa elementu] x [Liczba] - łączny koszt: [Wartość] zł`.
     - Wstaw element do `#lista-zamowien`.
   - Wypisz w `#podsumowanie` tekst: "Łączna wartość zamówienia: [Suma] zł dla stanowisk w liczbie: [Liczba]".

## Przykład
Stan początkowy: Wybrany profil "Stanowisko programistyczne", liczba stanowisk: 2.
Akcja: Użytkownik klika "Generuj wycenę zestawu".
Efekt: W `#lista-zamowien` pojawiają się 3 wiersze:
- "Monitor 27 cali 4K IPS x 2 - łączny koszt: 2800 zł"
- "Fotel ergonomiczny z podparciem lędźwiowym x 2 - łączny koszt: 1900 zł"
- "Stacja dokująca USB-C Thunderbolt x 2 - łączny koszt: 1300 zł"
W `#podsumowanie` pojawia się napis: "Łączna wartość zamówienia: 6000.00 zł dla stanowisk w liczbie: 2".
