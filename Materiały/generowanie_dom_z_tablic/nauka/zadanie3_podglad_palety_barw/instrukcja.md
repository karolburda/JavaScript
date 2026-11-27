## Cel
Zaimplementuj skrypt próbnika kolorów dla pracowni graficznej, który na podstawie wybranego koloru z kontrolki `<select>` generuje siatkę próbek odcieni, a po kliknięciu w dowolną próbkę natychmiast synchronizuje podgląd w `#wynik` oraz wypisuje kod szesnastkowy w etykiecie `#podsumowanie`. Sukcesem jest pełna dwukierunkowa spójność między wygenerowanymi kafelkami a wskaźnikami podglądu.

Synchronizacja dwukierunkowa znajduje powszechne zastosowanie m.in. w konfiguratorach tapicerki i lakieru samochodowego, w edytorach motywów graficznych CMS oraz przy wyborze wariantów kolorystycznych obuwia i odzieży.

## Wskazówki aktywizujące
- Przeczytaj sekcję 7 w pliku `teoria.md` omawiającą delegowanie zdarzeń oraz atrybuty danych `dataset`.
- Jak pobrać kod koloru klikniętego kafelka? Wykorzystaj `event.target.dataset.kolor`.
- Wpisz w konsoli przeglądarki polecenie: `document.querySelector('#wynik').style.backgroundColor = '#2563eb'` i zobacz natychmiastową reakcję interfejsu.

## Treść do wpisania
Wpisz dokładnie następujące teksty i etykiety: komunikat początkowy podglądu "Kliknij dowolny kafelek barwy, aby zobaczyć podgląd", etykietę startową "Wybrany odcień: brak wyboru", szablon podglądu "Podgląd koloru: " oraz szablon etykiety "Wybrany odcień: ". W kodzie użyj barw "#1d4ed8", "#2563eb", "#3b82f6", "#047857", "#059669", "#b45309", "#d97706".

## Wymagania
1. Pobierz elementy: listę wyboru `#usluga`, kontener próbek `#lista-zamowien`, pole podglądu `#wynik` oraz etykietę `#podsumowanie`.
2. Zdefiniuj funkcję generującą próbki na podstawie aktualnie wybranej palety w `#usluga`.
3. Podczas generowania:
   - Wyczyść kontener `#lista-zamowien`.
   - Dla każdego koloru z wybranej palety utwórz element `div` z klasą `probka-koloru`.
   - Ustaw kolor tła próbki na wartość koloru (`style.backgroundColor`) oraz zapisz ten kod w atrybucie danych (`dataset.kolor`).
   - Wstaw utworzoną próbkę do `#lista-zamowien`.
4. Podepnij zdarzenie `change` do `#usluga`, aby ponowne wybranie grupy barw regenerowało kafelki.
5. Wykorzystaj delegowanie zdarzeń na `#lista-zamowien` ze zdarzeniem `click`:
   - Jeśli kliknięty element posiada klasę `probka-koloru`, odczytaj jego `dataset.kolor`.
   - Zmień tło `#wynik` na wybrany kolor oraz ustaw w nim tekst informacyjny.
   - Zaktualizuj `#podsumowanie` na tekst: "Wybrany odcień: " z doklejonym kodem szesnastkowym.
6. Zainicjuj widok próbek przy starcie skryptu.

## Przykład
Stan początkowy: Wybrana paleta "Odcienie niebieskiego". Wyświetlonych jest 5 kafelków odcieni błękitu. W `#podsumowanie` widnieje napis "Wybrany odcień: brak wyboru".
Akcja: Użytkownik klika drugi kafelek (kod `#2563eb`).
Efekt: Tło prostokąta `#wynik` przyjmuje barwę `#2563eb`, a w `#podsumowanie` pojawia się napis: "Wybrany odcień: #2563eb".
