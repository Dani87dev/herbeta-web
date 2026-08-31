# Herbeta del Bosc

Maqueta web per a **Herbeta del Bosc** — banys de bosc, educació ambiental i
experiències a la natura a Mallorca.

Lloc estàtic d'un sol fitxer: HTML, CSS i JavaScript sense dependències ni
procés de build. L'única càrrega externa són les tipografies de Google Fonts
(Newsreader, Karla i Courier Prime).

## Com obrir-lo

Obrir `index.html` al navegador n'hi ha prou. Per servir-lo en local:

```bash
python3 -m http.server 8000
# després: http://localhost:8000
```

## Estructura

```
index.html            maqueta actual
index2.html           primera versió, conservada per comparar
assets/
  img/                imatges que fa servir la web
  originals/          fotografies d'origen i material sense fer servir
```

`index.html` conté dues pàgines dins el mateix document (`data-page="home"` i
`data-page="escoles"`), que el JavaScript del final del fitxer alterna sense
recarregar. Les targetes de públics i de botiga també es generen des d'aquí,
a partir dels objectes `PUB` i `PROD`.

## Notes

Les fotografies de producte marcades com a exemple (`botiga-*`,
`public-*`) són provisionals i s'han de substituir per material propi abans de
publicar.
