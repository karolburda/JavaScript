## Cel
Napisz skrypt, który przetworzy tablicę obiektów reprezentujących stan magazynowy hurtowni i wygeneruje wiersze w tabeli `#tabela-danych`, nakładając klasę ostrzegawczą `.blad-walidacji` na pozycje z krytycznym zapasem (poniżej 5 sztuk). Sukcesem jest poprawne wyrenderowanie wszystkich kolumn tabeli oraz wizualne wyróżnienie produktów o niskim stanie.

Warunkowe oznaczanie progowe stosuje się powszechnie m.in. w systemach kontroli dat ważności artykułów spożywczych, we wskaźnikach przekroczenia dopuszczalnego limitu zużycia prądu oraz przy monitorowaniu stanu rezerw biletowych.

## Wskazówki aktywizujące
- Przeczytaj sekcję 3 w pliku `teoria.md` dotyczącą generowania tabel danych za pomocą `document.createElement('tr')` i `append()`.
- W jaki sposób nadać klasę CSS całemu wierszowi tabeli? Użyj `tr.classList.add('blad-walidacji')`.
- Sprawdź w inspektorze elementów DevTools, czy wiersze z małym stanem magazynowym otrzymały odpowiednią klasę w drzewie DOM.

## Treść do wpisania
Wpisz dokładnie następujące teksty, nazwy artykułów i etykiety: nazwy w bazie "Kabel HDMI 2.1 2m", "Zasilacz ATX 650W Gold", "Pasta termoprzewodząca 4g", "Wentylator PWM 120mm", "Klawiatura mechaniczna TKL", etykietę ostrzeżenia "Niski stan magazynowy", etykietę normy "Stan optymalny", jednostki " szt." oraz " zł", a także szablon podsumowania "Liczba pozycji wymagających zamówienia: ".

## Wymagania
1. Pobierz element `tbody` wewnątrz tabeli `#tabela-danych` oraz element `#podsumowanie`.
2. Opróżnij zawartość `tbody` przed rozpoczęciem tworzenia wierszy.
3. Zainicjuj licznik pozycji o niskim stanie (`let krytyczne = 0`).
4. Przejdź pętlą po tablicy obiektów:
   - Utwórz element wiersza `tr`.
   - Utwórz komórki `td` dla: nazwy towaru, stanu ilościowego z dopiskiem " szt.", ceny z dopiskiem " zł" oraz statusu.
   - Jeśli stan ilościowy jest mniejszy niż 5:
     - Przypisz do wiersza `tr` klasę `.blad-walidacji`.
     - Ustaw treść komórki statusu na "Niski stan magazynowy".
     - Zwiększ licznik pozycji krytycznych o 1.
   - W przeciwnym razie ustaw treść statusu na "Stan optymalny".
   - Dołącz komórki do wiersza za pomocą metody `tr.append(...)`, a wiersz wstaw do `tbody`.
5. Zaktualizuj treść `#podsumowanie` do postaci: "Liczba pozycji wymagających zamówienia: X" (gdzie X to wartość licznika).

## Przykład
Stan początkowy: Tabela zawiera pusty korpus `<tbody>`.
Akcja: Skrypt przetwarza zbiór 5 produktów.
Efekt: W tabeli pojawia się 5 wierszy. Wiersze 2 ("Zasilacz ATX 650W Gold", 3 szt.) oraz 4 ("Wentylator PWM 120mm", 4 szt.) zostają podświetlone czerwonawym tłem klasy `.blad-walidacji`, a w etykiecie `#podsumowanie` pojawia się informacja: "Liczba pozycji wymagających zamówienia: 2".
