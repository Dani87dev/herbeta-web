# Herbeta del Bosc

Web de **Herbeta del Bosc**, el projecte de na Malen Bibiloni Amorós: banys de
bosc, educació ambiental i experiències a la natura a Mallorca.

És un negoci real i la web ja és en línia:

- **https://herbetadelbosc.com** (i `www.herbetadelbosc.com`)

## Desplegament

GitHub Pages, servint la branca `main` des de l'arrel. El domini propi surt
del fitxer `CNAME`, que ha de contenir el domini i prou — si es perd, Pages
torna a `dani87dev.github.io/herbeta-web` i el domini deixa de resoldre.

**Cada push a `main` publica.** No hi ha entorn de proves ni pas de
construcció: el que es puja és el que es veu.

## Com treballar-hi en local

Obrir `index.html` al navegador ja basta per a la major part de la feina.
Per servir-lo com al domini real:

```bash
python3 -m http.server 8000
# després: http://localhost:8000
```

Lloc estàtic d'un sol fitxer: HTML, CSS i JavaScript sense dependències ni
procés de construcció. L'única càrrega externa són les tipografies de Google
Fonts (Newsreader, Karla i Courier Prime).

## Estructura

```
index.html            la web
index2.html           primera versió, conservada per comparar
CNAME                 domini propi de GitHub Pages
CREDITS.md            origen i llicència de cada imatge
PENDENT.md            feina oberta i coses per demanar a na Malena
assets/
  img/                imatges que fa servir la web
  originals/          fotografies d'origen i material sense fer servir
```

## Com funciona per dins

Tot és dins `index.html`. El JavaScript del final del fitxer s'encarrega de:

- **Dues pàgines en un sol document.** `data-page="home"` i
  `data-page="escoles"` s'alternen sense recarregar. No hi ha rutes ni
  ancoratges d'entrada: sempre s'arriba a la portada.
- **Contingut generat.** Les targetes de públics i de botiga surten dels
  objectes `PUB` i `PROD`; per canviar-les, es toquen aquests objectes i no
  el marcatge.
- **Il·lustracions dibuixades.** Les fulles del contacte, les branquetes del
  retrat i les aiguades de fons són SVG generats des del mateix script. No
  són fitxers d'imatge.
- **Aparició per scroll.** Els elements amb classe `rv` entren amb un
  `IntersectionObserver`.

### Animació d'entrada

Hi ha un vel d'entrada amb el logo i «Benvinguda / Benvingut», dins dos blocs
marcats amb `── INICI INTRO ──` / `── FI INTRO ──`: un a la fulla d'estils i
un altre a dalt del `<body>`.

**Ara està apagat** (`var INTRO_ACTIVA = false`), pendent de refer-lo amb el
logo en alta resolució, perquè a la mida de l'intro el fitxer actual s'escala
massa. Per encendre'l, `true` i prou.

Dues coses a recordar si s'hi torna: el logo es fon amb el paper gràcies a
`mix-blend-mode: multiply`, que funciona perquè el JPG té fons blanc (amb un
PNG amb transparència s'ha de llevar); i `.intro__in` no pot dur `position`,
`z-index`, `opacity` ni `transform`, perquè faria capa pròpia i trencaria
aquesta fusió.

## Imatges

Totes les fotografies són **de na Malena o de Pexels**. `CREDITS.md` en duu
l'autoria i l'enllaç una per una, i s'hi ha d'afegir una fila cada vegada que
n'entri una de nova.

Queda un serrell obert, detallat a `PENDENT.md`: les imatges de la botiga
tenen llicència però mostren productes que no són els seus, així que s'han de
substituir per fotografies dels reals.

## Avís de maqueta

La web encara mostra la franja «Maqueta de treball · continguts i preus
d'exemple» i els formularis no envien res: només responen amb un missatge.
Abans de donar-la per oberta al públic s'ha de llevar la franja i connectar
els formularis a `herbetadelbosc@gmail.com`.
