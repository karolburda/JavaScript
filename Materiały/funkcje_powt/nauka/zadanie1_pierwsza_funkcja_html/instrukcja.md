# Zadanie 1: Pierwsza Funkcja

## Cel

Nauczysz się definiować i wywoływać prostą funkcję w JavaScript oraz wyświetlać wynik w elemencie HTML.

## Wstęp

Funkcja to nazwany blok kodu. Aby jej użyć, musisz ją najpierw zdefiniować, a potem wywołać. Zamiast `alert`, użyjemy profesjonalnej metody wyświetlania w HTML.

## Instrukcja

1.  W pliku `index.html` w sekcji `<head>` zdefiniuj funkcję o nazwie `powitanie`.
2.  Wewnątrz funkcji użyj polecenia `document.write("Witaj w świecie funkcji!");`.
3.  Zjedź do sekcji `<body>`. Znajdź element `<div id="wynik">`.
4.  Wewnątrz tego diva wstaw znacznik `<script>` i wywołaj w nim swoją funkcję: `powitanie();`.
5.  **W stopce pliku HTML (w sekcji `<footer>`) wpisz swoje imię, nazwisko i klasę.**

## Podpowiedź składni

**W sekcji HEAD:**

```javascript
function nazwa() {
  document.write("Tekst");
}
```

**W sekcji BODY (wewnątrz diva):**

```html
<script>
  nazwa();
</script>
```
