# Nauka – `textContent` kontra `innerHTML`

## Cel

Okno `prompt` wczytuje napis, na przykład `<b>hit</b>`. Ten sam string wstawiasz w dwa pudełka: do `#jako-tekst` przez `textContent`, do `#jako-html` przez `innerHTML`. Porównujesz, co widać na stronie.

## Przydatne

- `textContent` pokazuje znaki dosłownie, także nawiasy ostrokątne.
- `innerHTML` parsuje znaczniki, więc `<b>` zrobi pogrubienie.
- W pozostałych zadaniach działu zostajesz przy `textContent`. `innerHTML` z `prompt` bywa niebezpieczny — tu tylko eksperyment porównawczy.

## Wymagania

1. Ten sam string trafia do obu pudełek, ale przez dwie różne właściwości.
2. Różnica jest widoczna bez zgadywania: jeden podgląd pokazuje kody, drugi sformatowany tekst.
3. W stopce zostawiasz „Imię Nazwisko klasa”.

## Przykład

W oknie wpisz `<b>hit</b>` i potwierdź. W `#jako-tekst` widać nawiasy ostrokątne i litery „hit”. W `#jako-html` widać pogrubione słowo „hit” bez znaczników.
