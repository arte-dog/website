# arte.dog

Strona marki osobistej Magdaleny Greś zbudowana w Hugo. Motyw znajduje się w katalogu `themes/artedog`.

## Uruchomienie

```bash
hugo server
```

Wersja produkcyjna:

```bash
hugo --minify
```

Gotowe pliki pojawią się w katalogu `public/`.

## Zdjęcia do uzupełnienia

Zdjęcia używane przez stronę znajdują się w `themes/artedog/assets/images/`. Hugo automatycznie tworzy z nich zoptymalizowane warianty WebP. Obecnie uzupełnione są:

- `photo-hero-meadow.jpg` — aktywny kadr hero Magdaleny i Joko na łące, przygotowany w proporcji 5:6;
- `photo-hero-original.jpg` — poprzedni kadr Magdaleny z psem, zachowany jako materiał źródłowy;
- `photo-portrait-beach.png` — drugi kadr Magdaleny na plaży, przygotowany do proporcji 9:7;
- `photo-portrait-beach-original.jpg` — zachowany oryginał drugiego kadru;
- `photo-sheltie-original.jpg` — trzeci kadr, portret psa, zachowany z pliku źródłowego.

W katalogu `themes/artedog/static/images/` pozostają też trzy estetyczne placeholdery:

- `placeholder-hero.svg` — zapasowy pionowy kadr Magdaleny z psem, najlepiej 5:6;
- `placeholder-portret.svg` — poziomy, naturalny portret, najlepiej 9:7;
- `placeholder-dog.svg` — zapasowy pionowy portret psa, najlepiej 4:5.

Można też zmienić ścieżki w `themes/artedog/layouts/home.html`. Zalecany format zdjęć to WebP lub AVIF, szerokość 1400–1800 px, bez tekstu naniesionego na fotografię.

## Dane do potwierdzenia przed publikacją

- adres e-mail `kontakt@arte.dog`;
- miasto / rzeczywisty obszar działania;
- kwalifikacje, certyfikaty i nazwy ukończonych szkół;
- informacje o psie lub psach uczestniczących w spotkaniach;
- profile społecznościowe;
- docelowy hosting i wynikająca z niego aktualizacja polityki prywatności.

## Dane kontaktowe i lokalizacja

Telefon, miejscowość oraz opcjonalny adres ustawia się w sekcji `[params]` pliku `hugo.toml`:

```toml
phone = "+48 000 000 000"
locality = "Nazwa miejscowości"
address = "ul. Przykładowa 1" # opcjonalnie
postalCode = "00-000"         # opcjonalnie
```

Puste pola nie generują etykiet ani wolnego miejsca. Telefon pojawia się również w stopce i działa jako link `tel:`. Uzupełnione dane są automatycznie dodawane do Schema.org `ProfessionalService` jako `telephone` i `PostalAddress`.

## Kwalifikacje i certyfikaty

Osobna strona `content/kwalifikacje/index.md` jest przygotowana do publikacji kwalifikacji bez przeciążania głównego onepage’a. Każdy wpis obsługuje grupę (`main` lub `supplementary`), kategorię, pełną nazwę, organizatora, datę, krótki opis oraz opcjonalny adres weryfikacji. Na stronie dokumenty są automatycznie dzielone na „Główne kwalifikacje” i „Szkolenia uzupełniające”.

Strona jest opublikowana (`draft: false`), dlatego link „Kwalifikacje” pojawia się automatycznie w górnej nawigacji przed „Kontakt” oraz w stopce.

Certyfikaty są zapisane jako zasoby pakietu strony w `content/kwalifikacje/`. Obrazy są automatycznie konwertowane przez Hugo do responsywnego WebP, a kliknięcie miniatury otwiera pełny dokument.

Dane z `hugo.toml` są automatycznie przekazywane do Schema.org `ProfessionalService`. Warto zachować identyczny telefon, miejscowość i nazwę w Profilu Firmy w Google.

## Paleta

- leśna zieleń `#173F39` — zaufanie, spokój;
- kość słoniowa `#F6F1E7` — ciepło, przestrzeń;
- glina `#BD6B51` — twórczość, ludzki akcent;
- szałwia `#A9BCA8` / `#DCE5D9` — natura;
- pudrowy błękit `#A8BEC1` — wyciszenie;
- ochra `#D6AD61` — drobne akcenty artystyczne.

## SEO i dostępność

Motyw zawiera canonical URL, Open Graph, Twitter Cards, dane strukturalne Schema.org (`WebSite`, `Person`, `ProfessionalService`), `robots.txt`, sitemapę, semantyczne nagłówki, skip-link, widoczne focusy i obsługę `prefers-reduced-motion`. Strona nie ładuje zewnętrznych fontów ani skryptów śledzących.

Banner udostępniania dla Signal, Messengera i innych komunikatorów znajduje się w `themes/artedog/static/images/og-arte-dog-bialystok.png` (`1200×630`). Ma osobny adres, aby ograniczyć problem ze starym cache podglądów. Lokalne SEO wykorzystuje naturalnie sformułowany tytuł i opis, widoczną miejscowość oraz Schema.org `City` dla Białegostoku — bez sztucznego powtarzania słów kluczowych.

## Deploy na GitHub Pages

Repozytorium zawiera workflow `.github/workflows/hugo.yml`. Każdy push do gałęzi `main` buduje stronę za pomocą Hugo i publikuje katalog `public/` jako artefakt GitHub Pages. Katalogu `public/` nie należy commitować.

Build produkcyjny zawsze korzysta z kanonicznego adresu `https://arte.dog/`. Dzięki temu `sitemap.xml`, canonicale i metadane społecznościowe nie wskazują technicznego adresu `github.io`.

Po wysłaniu projektu na GitHub:

1. Otwórz **Settings → Pages** i w polu **Source** wybierz **GitHub Actions**.
2. W **Custom domain** wpisz `arte.dog` i zapisz ustawienie.
3. Po poprawnym skonfigurowaniu DNS włącz **Enforce HTTPS**.
4. W zakładce **Actions** sprawdź wykonanie workflow „Deploy Hugo site to GitHub Pages”.

Dla domeny głównej `arte.dog` ustaw u operatora DNS cztery rekordy `A` dla hosta `@`:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Dodatkowo warto ustawić `www` jako rekord `CNAME` wskazujący na `<nazwa-konta>.github.io`. GitHub przekieruje wtedy `www.arte.dog` na domenę główną. Nie używaj rekordów wildcard `*`.

Sam plik `CNAME` nie ustawia domeny przy publikacji przez własny workflow — domenę trzeba zapisać w **Settings → Pages**.
