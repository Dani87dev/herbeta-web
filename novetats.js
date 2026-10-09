/* ══ NOVETATS DE LA PREVISUALITZACIO ══
   Nomes surt a herbetadelbosc.com/wip/: el flux de publicacio (pages.yml)
   l'afegeix a les pagines de la previsualitzacio i no el puja mai a la web
   oficial. Cap pagina el carrega per si mateixa.

   Per a cada tanda de canvis: actualitzar VERSIO i CANVIS.
   Despres de passar wip a main, buidar CANVIS per a la tanda seguent. */
(function(){
  "use strict";

  /* canviar-la fa que la finestra torni a sortir sola a qui ja l'havia vist */
  var VERSIO = "2026-10-09c";
  var CLAU = "herbeta:novetats-vistes";

  var CANVIS = [
    {
      titol: "Ja no diu «Web en construcció»: cal revisar els preus",
      intro: "Hem llevat la franja de dalt («Web en construcció · alguns preus o dates poden no estar actualitzats») i el «Web en construcció · 2026» del peu, en català i en castellà. Com que ja no hi ha l'avís, <b>tots els preus que surten a la web han de ser correctes</b>. Són aquests:",
      punts: [
        "<b>Portada</b>, davall el titular: «Des de 30 € / persona».",
        "<b>Escoles i entitats</b>, a dalt: «Des de 150 € / grup».",
        "<b>Escoles i entitats</b>, apartat «Durades i preus orientatius»: de 120 € a 350 € per sessió, i els banys de bosc escolars a partir de 150 € per grup de fins a 25 alumnes.",
        "<b>Programes de benestar</b>, taula de formats: sessió puntual 200-300 €, programa de 6 setmanes 1.000-1.500 €, programa de 12 setmanes 1.800-2.500 €."
      ],
      nota: "Els preus de l'agenda ja són els que ens vas passar i ja surten a la web oficial. Els de la botiga no hi són: la botiga la mirarem més endavant i de moment queda com està."
    },
    {
      titol: "Versió en castellà",
      intro: "Tota la web està traduïda al castellà, sense afegir-hi contingut nou. Convé llegir-la de dalt a baix per si alguna frase no sona natural.",
      punts: [
        "A dalt a la dreta hi ha un selector <b>CA · ES</b> per canviar d'idioma.",
        "Els noms de les activitats queden en català, igual que els cartells: Sospirs de Bosc, Nit i Alba al Refugi, Jornada Origen.",
        "Si algú escriu des de la versió en castellà, el correu arriba amb «(en castellà)» a l'assumpte.",
        "L'article de la revista Alimara s'enllaça tal com és, indicant que està en català."
      ]
    },
    {
      titol: "Textos que canvien en català",
      intro: "Perquè la web surti quan es cerca «banys de bosc Mallorca» o «educació ambiental Mallorca». En castellà s'han fet els mateixos canvis.",
      taula: [
        ["Portada, etiqueta damunt el titular", "Cultivant vincles amb la natura", "Banys de bosc i educació ambiental a Mallorca"],
        ["«Què és», primer paràgraf", "…originària del Japó (<i>shinrin-yoku</i>)…", "…originària del Japó (<i>shinrin-yoku</i>, o <i>forest bathing</i> en anglès)…"],
        ["Titular de la pàgina d'escoles", "Programa educatiu i vivencial a la natura", "Programa d'educació ambiental i vivencial a Mallorca"],
        ["Titular de la pàgina de benestar", "Programes de benestar a la natura", "Banys i teràpia de bosc: benestar a la natura de Mallorca"],
        ["Peu de pàgina", "Malena Bibiloni Amorós · Mallorca", "Malena Bibiloni Amorós · Banys de bosc a Mallorca"]
      ],
      nota: "«Cultivant vincles amb la natura» es continua veient al peu de pàgina."
    },
    {
      titol: "El que surt a Google",
      intro: "No es veu a la pàgina: surt a la pestanya del navegador i als resultats de cerca.",
      taula: [
        ["Títol", "Herbeta del Bosc", "Banys de bosc i educació ambiental a Mallorca · Herbeta del Bosc"],
        ["Descripció", "Herbeta del Bosc - banys de bosc, educacio ambiental i experiencies…", "Banys de bosc (shinrin-yoku o forest bathing), teràpia de bosc i educació ambiental a Mallorca per a particulars, escoles i entitats, amb na Malena Bibiloni."]
      ]
    }
  ];

  if(!CANVIS.length) return;

  var css =
    ".nv-bar{position:relative;z-index:6;display:flex;justify-content:center;align-items:center;gap:.8rem;flex-wrap:wrap;"+
      "padding:.55rem 1rem;background:var(--terra,#B6715B);color:#fff;font-family:var(--f-label,monospace);"+
      "font-size:.68rem;letter-spacing:.14em;text-transform:uppercase}"+
    ".nv-bar button{font:inherit;letter-spacing:inherit;text-transform:inherit;color:var(--terra,#B6715B);background:#fff;"+
      "border:0;border-radius:2px;padding:.35rem .8rem;cursor:pointer}"+
    ".nv-bar button:hover{background:var(--paper,#F5F2EA)}"+
    /* al mobil, 100vh inclou la barra d'adreces: per aixo dvh, i la caixa arrenca de dalt */
    ".nv{position:fixed;inset:0;z-index:100;display:flex;align-items:flex-start;justify-content:center;padding:12px;"+
      "background:rgba(52,48,48,.55)}"+
    ".nv[hidden]{display:none}"+
    "@media (min-width:640px){.nv{align-items:center;padding:16px}}"+
    /* la capcalera amb la X no es mou; nomes llisca el cos */
    ".nv__box{position:relative;width:100%;max-width:760px;max-height:calc(100vh - 24px);max-height:calc(100dvh - 24px);"+
      "display:flex;flex-direction:column;overflow:hidden;"+
      "background:var(--paper,#F5F2EA);color:var(--ink,#343030);border-radius:3px;box-shadow:0 20px 60px rgba(0,0,0,.3);"+
      "font-family:var(--f-body,sans-serif);font-size:1rem;line-height:1.55}"+
    ".nv__top{flex:none;display:flex;justify-content:flex-end;padding:.35rem .35rem 0}"+
    ".nv__body{flex:1 1 auto;min-height:0;overflow:auto;-webkit-overflow-scrolling:touch;"+
      "padding:0 clamp(1.2rem,4vw,2.6rem) clamp(1.4rem,4vw,2.4rem)}"+
    ".nv__fi{display:flex;justify-content:center;margin-top:1.8rem}"+
    ".nv__ok{font-family:var(--f-body,sans-serif);font-size:.95rem;color:#fff;background:var(--teal,#506A6B);border:0;"+
      "border-radius:2px;padding:.75rem 1.4rem;cursor:pointer}"+
    ".nv__ok:hover{background:var(--teal-deep,#3D4D4E)}"+
    ".nv__box:focus{outline:none}"+
    ".nv__close{width:2.9rem;height:2.9rem;border:0;background:none;touch-action:manipulation;"+
      "font-size:1.8rem;line-height:1;color:var(--ink-2,#5C5751);cursor:pointer;border-radius:2px}"+
    ".nv__close:hover{color:var(--terra,#B6715B)}"+
    ".nv__kicker{font-family:var(--f-label,monospace);font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;"+
      "color:var(--terra,#B6715B);margin:0 0 .5rem}"+
    ".nv h2{font-family:var(--f-display,serif);font-weight:500;font-size:clamp(1.6rem,4vw,2.1rem);line-height:1.1;margin:0 0 .4rem}"+
    ".nv__lead{color:var(--ink-2,#5C5751);margin:0 0 1.6rem}"+
    ".nv__sec{border-top:1px solid var(--rule,rgba(52,48,48,.16));padding-top:1.2rem;margin-top:1.4rem}"+
    ".nv h3{font-family:var(--f-display,serif);font-weight:500;font-size:1.25rem;margin:0 0 .4rem;color:var(--teal,#506A6B)}"+
    ".nv p{margin:0 0 .7rem}"+
    ".nv ul{margin:0;padding-left:1.1rem;list-style:disc}"+
    ".nv li{margin:.3rem 0}"+
    ".nv__nota{font-size:.9rem;color:var(--ink-3,#8A8279);margin-top:.7rem}"+
    ".nv__taula{display:grid;gap:.6rem}"+
    ".nv__fila{display:grid;grid-template-columns:1fr;gap:.25rem;background:var(--field,#FCFAF5);"+
      "border:1px solid var(--rule-soft,rgba(52,48,48,.08));border-radius:2px;padding:.75rem .9rem}"+
    ".nv__on{font-family:var(--f-label,monospace);font-size:.66rem;letter-spacing:.13em;text-transform:uppercase;color:var(--ink-3,#8A8279)}"+
    ".nv__abans{color:var(--ink-3,#8A8279);text-decoration:line-through;text-decoration-color:rgba(182,113,91,.6)}"+
    ".nv__ara{color:var(--ink,#343030)}"+
    ".nv__abans::before,.nv__ara::before{display:inline-block;width:4.2rem;font-family:var(--f-label,monospace);"+
      "font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;text-decoration:none}"+
    ".nv__abans::before{content:'Abans';color:var(--ink-3,#8A8279)}"+
    ".nv__ara::before{content:'Ara';color:var(--teal,#506A6B)}"+
    "@media (min-width:640px){.nv__fila{padding:.85rem 1.1rem}}";

  function seccio(c){
    var h = '<div class="nv__sec"><h3>'+c.titol+'</h3>';
    if(c.intro) h += '<p>'+c.intro+'</p>';
    if(c.punts) h += '<ul>'+c.punts.map(function(p){ return '<li>'+p+'</li>'; }).join('')+'</ul>';
    if(c.taula) h += '<div class="nv__taula">'+c.taula.map(function(f){
      return '<div class="nv__fila"><span class="nv__on">'+f[0]+'</span>'+
        '<span class="nv__abans">'+f[1]+'</span><span class="nv__ara">'+f[2]+'</span></div>';
    }).join('')+'</div>';
    if(c.nota) h += '<p class="nv__nota">'+c.nota+'</p>';
    return h+'</div>';
  }

  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  var bar = document.createElement("div");
  bar.className = "nv-bar";
  bar.innerHTML = '<span>Previsualització · hi ha canvis per revisar</span>'+
    '<button type="button" aria-haspopup="dialog">Veure els canvis</button>';
  document.body.insertBefore(bar, document.body.firstChild);

  var nv = document.createElement("div");
  nv.className = "nv";
  nv.hidden = true;
  nv.innerHTML =
    '<div class="nv__box" role="dialog" aria-modal="true" aria-labelledby="nv-titol" tabindex="-1">'+
      '<div class="nv__top"><button type="button" class="nv__close" aria-label="Tanca">×</button></div>'+
      '<div class="nv__body">'+
        '<p class="nv__kicker">Novetats a la previsualització</p>'+
        '<h2 id="nv-titol">Què ha canviat a la web</h2>'+
        '<p class="nv__lead">Tot això es veu aquí, a la previsualització. Encara no és a la web oficial.</p>'+
        CANVIS.map(seccio).join('')+
        '<div class="nv__fi"><button type="button" class="nv__ok">Tanca</button></div>'+
      '</div>'+
    '</div>';
  document.body.appendChild(nv);

  var box = nv.querySelector(".nv__box"), cos = nv.querySelector(".nv__body"), desDe = null;

  function obre(){
    desDe = document.activeElement;
    nv.hidden = false;
    document.documentElement.style.overflow = "hidden";
    cos.scrollTop = 0;
    box.focus();
    try{ localStorage.setItem(CLAU, VERSIO); }catch(e){}
  }
  function tanca(){
    if(nv.hidden) return;
    nv.hidden = true;
    document.documentElement.style.overflow = "";
    if(desDe && desDe.focus) desDe.focus();
  }

  bar.querySelector("button").addEventListener("click", obre);
  nv.querySelector(".nv__close").addEventListener("click", tanca);
  nv.querySelector(".nv__ok").addEventListener("click", tanca);
  nv.addEventListener("click", function(e){ if(e.target === nv) tanca(); });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") tanca(); });

  /* sola, nomes a la pagina en catala i nomes si aquesta tanda encara no s'ha vist */
  var vista = null;
  try{ vista = localStorage.getItem(CLAU); }catch(e){}
  var esCastella = /\/es\/?$/.test(location.pathname);
  if(vista !== VERSIO && !esCastella) obre();
})();
