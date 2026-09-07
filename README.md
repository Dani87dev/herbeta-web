# Herbeta del Bosc

Web de **Herbeta del Bosc**, un projecte de banys de bosc, educació ambiental i
experiències a la natura a Mallorca.

**En producció: [herbetadelbosc.com](https://herbetadelbosc.com)**

## El projecte

Herbeta del Bosc acompanya particulars, escoles i entitats en experiències de
connexió amb l'entorn natural. La web presenta les experiències i l'agenda,
desplega una proposta específica per a centres educatius i obre un canal de
contacte directe.

És un encàrrec per a un negoci real, en funcionament i amb domini propi.

## Plantejament

Un negoci petit necessita una web que duri anys sense manteniment, que carregui
de pressa amb la cobertura justa i que no depengui de serveis que puguin
desaparèixer. D'aquí surten les decisions tècniques:

- **Sense dependències ni procés de construcció.** HTML, CSS i JavaScript
  escrits a mà. No hi ha empaquetador, ni `node_modules`, ni res que caduqui:
  el repositori és, literalment, el que es publica.
- **Dues càrregues externes**: les tipografies de Google Fonts i el comptador
  de Cloudflare Web Analytics, que no posa galetes ni recull dades personals.
- **Il·lustracions dibuixades amb codi.** Les fulles, les branquetes del retrat
  i les aiguades de fons són SVG generats en JavaScript. No són fitxers: no
  pesen, escalen a qualsevol pantalla i segueixen el traç dels materials de la
  marca.
- **Contingut separat del marcatge.** Les targetes de públics i de botiga es
  generen a partir d'objectes de dades, de manera que actualitzar l'oferta no
  obliga a tocar HTML.
- **Dues pàgines en un sol document**, que s'alternen al navegador sense
  recarregar.

## Sistema visual

La paleta surt dels materials de la marca —teal, arena, topo i terra sobre un
fons de paper— i tot el lloc es construeix sobre la metàfora d'un plec
d'herbari: retolació en versaleta, filets fins i fitxes d'espècimen.

Tres tipografies amb feines separades: **Newsreader** per als titulars,
**Karla** per al text i **Courier Prime** per a les etiquetes i les dades.

## Accessibilitat

- Totes les animacions respecten `prefers-reduced-motion`.
- Enllaç per saltar al contingut, focus visible i elements decoratius marcats
  com a `aria-hidden`.
- El titular de la portada és text real sobre la fotografia, no una imatge:
  s'indexa, se selecciona i el llegeix un lector de pantalla.

## Animació d'entrada

Un vel d'obertura amb el logotip i una salutació, que apareix un cop per sessió,
dura uns dos segons i es pot saltar amb un clic, amb l'scroll o amb `Esc`.

Ara mateix està **desactivada** darrere d'un indicador (`INTRO_ACTIVA`), a
l'espera del logotip en alta resolució. Està escrita perquè activar-la o
retirar-la no pugui afectar la resta del lloc: viu en dos blocs delimitats, no
amaga res de la pàgina en repòs i el vel du una sortida de seguretat en CSS que
la retira encara que el JavaScript no arribi a executar-se mai.

## Imatges

Fotografies pròpies del projecte i material de Pexels. `CREDITS.md` en recull
l'autoria, l'origen i la llicència, fitxer per fitxer.

## Repositori

```
index.html          el lloc
CNAME               domini
CREDITS.md          autoria i llicència de les imatges
assets/img/         imatges que carrega el web
assets/originals/   material d'origen, ordenat per ús
```
