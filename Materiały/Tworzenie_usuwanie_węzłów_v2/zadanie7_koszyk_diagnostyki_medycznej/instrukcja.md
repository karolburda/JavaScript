# Zadanie 7: Dynamiczny kalkulator pakietu badań (Zadanie celujące)

## Cel
Zaimplementuj kalkulator badań diagnostycznych, który umożliwia dodawanie pozycji z listy predefiniowanych procedur wraz z ceną, usuwanie dowolnego badania z rachunku oraz natychmiastowe przeliczanie sumy końcowej.

## Wskazówki / pułapki
- W jaki sposób podpiąć usuwanie pozycji bezpośrednio pod przycisk stworzony w skrypcie? Odsyłacz: teoria.md, sekcja 7.
- Upewnij się, że po usunięciu badania kwota w podsumowaniu jest poprawnie zmniejszana.

## Treść merytoryczna
Tekst na przycisku usunięcia: Zrezygnuj z badania.
Prefiks podsumowania: Łączny koszt badań laboratoryjnych: 
Sufiks waluty: zł.
Klasa pozycji badania: pozycja-badania.
Klasa przycisku rezygnacji: btn-zrezygnuj-badanie.
Identyfikator wyboru badania: #wybor-badania.
Identyfikator pola ceny: #cena-badania.
Identyfikator przycisku dodania: #btn-dodaj-badanie.
Identyfikator listy: #lista-badan.
Identyfikator podsumowania: #suma-badan.

## Wymagania
1. Obsłuż kliknięcie przycisku #btn-dodaj-badanie:
   - odczytaj nazwę z #wybor-badania oraz cenę z #cena-badania; jeśli cena <= 0, przerwij,
   - utwórz element listy z klasą pozycja-badania,
   - utwórz element opisowy z nazwą badania i ceną w zł,
   - utwórz przycisk z klasą btn-zrezygnuj-badanie i zadanym tekstem,
   - podepnij obsługę kliknięcia pod przycisk usuwania: odejmij cenę od sumy łącznej, usuń pozycję z listy i zaktualizuj podsumowanie,
   - dodaj elementy do listy #lista-badan, zwiększ sumę i zaktualizuj element #suma-badan,
   - zresetuj pole ceny.

## Przykład
Stan początkowy: lista badań jest pusta, koszt wynosi 0 zł.
Akcja: użytkownik dodaje Morfologię z rozmazem (40 zł) oraz Lipidogram (60 zł).
Efekt: rachunek zawiera dwie pozycje, a suma wynosi 100 zł. Po rezygnacji z Lipidogramu suma spada do 40 zł.
