/* Lognos landing copy. EN is the HTML fallback; FR/ES overlay it. */
(function () {
  var KEY = "lognos-lang";
  var LANGS = { en: true, fr: true, es: true };

  var I18N = {
    en: {
      meta: {
        title: "Lognos: Project controls, reconciled continuously",
        description:
          "Schedule, cost, and risk reconcile against each other continuously. One system, not three tools stitched together. Nothing writes without your confirmation, and that confirmation is the decision."
      },
      skip: "Skip to content",
      news: { html: "<b>News!</b> v1.0 shipped with Claude / ChatGPT / Gemini connectors" },
      nav: {
        home: "Home",
        search: "Quick search",
        menu: "Navigation",
        close: "Close menu",
        product: "Product",
        how: "How it works",
        playbooks: "Playbooks",
        governance: "Governance",
        contact: "Contact",
        lang: "Language",
        ec: "Engineering & construction delivery"
      },
      hero: {
        title: "Schedule, cost, and risk.<br>Reconciled by AI, <em>governed by your team.</em>",
        sub:
          "Our agents and yours reach the same engines, over MCP or from Teams, Outlook and other channels. Every confirmation is human-authenticated and attributed. Your know-how stays readable and portable, never locked inside a model.",
        running: "running",
        cascadeAria:
          "Field progress is queued. A guardrail either writes into the schedule engine or holds for a planner. Cost actuals pass a readiness gate into a waterfall forecast and cost sign-off. Both join the risk engine, then a report the PM confirms.",
        video: "Lognos product walkthrough",
        integrations: "Compatible agents and tools"
      },
      cascade: {
        s1t: "Field progress",
        s1d: "Site capture enters the cascade. Cost actuals can start the same loop from the other side.",
        s2t: "Schedule engine",
        s2d: "Queued updates pass a guardrail. Direct and mechanical fixes write; second-order or unclear changes are held for a planner.",
        s3t: "Waterfall forecast",
        s3d: "A deterministic commitment + accrual forecast, signed off by the cost controller. Not the risk engine.",
        s4t: "Risk engine",
        s4d: "A separate computation: cost × schedule × the risk register, producing a risk-adjusted forecast.",
        s5t: "Report",
        s5d: "The PM confirms. That confirmation is the decision. Pending tasks start the next cycle.",
        nField: "Field progress",
        nQueue: "Update queue",
        nPlanner: "Planner",
        nSched: "Schedule engine",
        nActuals: "Actuals in",
        nWaterfall: "Waterfall",
        nCost: "Cost signs off",
        nRisk: "Risk engine",
        nReport: "Report",
        nPm: "PM confirms",
        tField: "capturing progress ✓",
        tQueue: "triaging updates ✓",
        tPlanner: "held for planner ✓",
        tSched: "writing schedule ✓",
        tActuals: "ingesting actuals ✓",
        tWaterfall: "forecasting ✓",
        tCost: "awaiting sign-off ✓",
        tRisk: "simulating composite ✓",
        tReport: "compiling report ✓",
        tPm: "awaiting confirm ✓"
      },
      what: {
        cat: "What it is",
        title: "Project controls, done continuously",
        lede:
          "Three teams maintain three versions of the truth, and they only agree on the day the report goes out. That isn't carelessness. It's arithmetic. A validated, reconciled forecast used to take days of expert work, so it happened monthly, and everyone agreed to call that current. That constraint is gone. Lognos reconciles schedule, cost, and risk against each other continuously, so the picture a decision gets made against is never more than an update old.",
        t1: "One picture, not three",
        b1:
          "Schedule, cost, and risk aren't separate products wired together after the fact. They run as three engines over a single record, reconciling against each other continuously. Most tools in this market do one of the three well and leave the reconciliation between them to you and a spreadsheet.",
        t2: "The confirmation is the decision",
        b2:
          "Nothing writes without prepare → confirm → commit. Not a policy bolted on after the fact. It's the same mechanism that makes the loop worth having.",
        t3: "Open at the edges",
        b3:
          "Integrated inside, open outside. The engines are reachable over MCP by any compatible agent: Claude, ChatGPT, or one your own team builds. You shouldn't have to adopt our interface to get value from our reasoning.",
        t4: "Says what it doesn't know",
        b4:
          "Per-project, per-question capability declaration: available, unavailable, or partial, with a reason. Never a confident wrong answer."
      },
      tag: { live: "LIVE" },
      risk: {
        cat: "Risk",
        title: "Risk, triggered from more than one place",
        lede:
          "Project communications, ingested documents, live world signals, and schedule or cost deltas all land in the same identification step. Matches update the register; new actions open a governed review. The reviewer-commit path is still being hardened. Everything around it is live.",
        aria:
          "Four signal sources (communications, documents, world search, and schedule or cost deltas) feed extraction and de-duplication, then a match against the existing register. Classification updates the register and opens a proposed-to-review workflow. The reviewer commit step is in progress. The register feeds the same risk engine, then a risk board and tasks back to owners.",
        s1t: "Four signal sources",
        s1d: "Communications, documents, world search, and schedule or cost deltas. Documents are built, not yet live on a client register.",
        s2t: "Identification",
        s2d: "Extract, de-duplicate, match the existing register, classify, and assign an owner. Proposals, not silent duplicates.",
        s3t: "Action workflow",
        s3d: "Proposed → in review → final validation. The reviewer commit that advances a task is the gap still being hardened.",
        s4t: "Risk engine",
        s4d: "The same engine as the main cascade: cost × schedule × the register. One computation, not a second risk model.",
        s5t: "Board & tasks",
        s5d: "Status lands on the risk board; work is surfaced to the owner over the app, Telegram, email, or MCP.",
        nComms: "Communications",
        nDocs: "Documents",
        nWorld: "World signals",
        nDelta: "Schedule & cost",
        nExtract: "Extract",
        nClassify: "Classify",
        nRegister: "Risk register",
        nEngine: "Risk engine",
        nBoard: "Risk board",
        nOwner: "Task to owner",
        nProposed: "Proposed",
        nReview: "In review",
        nReviewer: "Reviewer",
        tComms: "reading comms ✓",
        tDocs: "ingesting docs …",
        tWorld: "searching world ✓",
        tDelta: "reading deltas ✓",
        tExtract: "de-duplicating ✓",
        tClassify: "assigning owners ✓",
        tRegister: "updating register ✓",
        tEngine: "simulating composite ✓",
        tBoard: "compiling board ✓",
        tOwner: "notifying owner ✓",
        tProposed: "opening proposal ✓",
        tReview: "awaiting review ✓",
        tReviewer: "commit not live"
      },
      playbooks: {
        cat: "Playbooks",
        title: "Every loop is a playbook you can read",
        lede:
          "A workflow isn't a black box inside the agent. It's a declared document: which engines run, in what order, under which guardrail, and exactly where a named human has to confirm before anything commits.",
        xmlComment: "<!-- field + actuals → schedule guardrail → waterfall, then a separate Monte Carlo -->"
      },
      gov: {
        cat: "Governance",
        title:
          'The confirmation <em style="font-style:normal;color:var(--accent)">is</em> the decision.',
        lede:
          "In most agentic tools, governance is the tax paid for automation, bolted on after the agent already acts. For Lognos the confirmation step and the decision moment are the same event. The loop runs continuously so that when you're asked, you're asked at the moment that matters, with a current picture.",
        p1t: "Prepare",
        p1d: "An immutable draft is rendered: schedule, cost, and risk impact, in full.",
        p2t: "Confirm",
        p2d: "A named person reviews the draft and confirms. This is the decision.",
        p3t: "Commit",
        p3d: "The write lands with a content fingerprint and an audit trail. Not before."
      },
      who: {
        cat: "Who it's for",
        title: "Centered on whoever signs the delivery decision",
        e1: "Owns the call",
        t1: "The project manager",
        b1:
          "Owns the delivery decision and its consequences. The forecast isn't wrong. It arrives too late to act on. Lognos closes that gap.",
        e2: "Signs, more often",
        t2: "The client-side controls lead",
        b2: "Feels the same staleness one level abstracted, and more often holds the budget that approves the purchase.",
        e3: "Freed from the assembly",
        t3: "Planners & cost controllers",
        b3: "Spend the month assembling the picture instead of judging it. Lognos takes the assembly; the judgment stays theirs."
      },
      footer: {
        copy: "© 2026 Lognos. E&C delivery, reconciled continuously.",
        about: "About",
        whitepaper: "Whitepaper",
        contact: "Contact"
      },
      palette: {
        aria: "Quick search",
        placeholder: "Jump to a section…",
        empty: "No section matches.",
        sections: [
          { label: "Reconciliation loop: cost & schedule", href: "#top" },
          { label: "What Lognos does", href: "#what-we-do" },
          { label: "Risk loop: four signal sources", href: "#risk" },
          { label: "Playbooks", href: "#playbooks" },
          { label: "Governance: prepare, confirm, commit", href: "#governance" },
          { label: "Who it's for", href: "#who" }
        ]
      },
      cal: { book: "Book a demo" }
    },

    fr: {
      meta: {
        title: "Lognos : contrôles de projet, réconciliés en continu",
        description:
          "Échéancier, coûts et risques se réconcilient en continu. Un système, pas trois outils recollés. Rien n'est écrit sans votre confirmation, et cette confirmation est la décision."
      },
      skip: "Aller au contenu",
      news: { html: "<b>Nouveauté!</b> v1.0 est en ligne, avec les connecteurs Claude / ChatGPT / Gemini" },
      nav: {
        home: "Accueil",
        search: "Recherche rapide",
        menu: "Navigation",
        close: "Fermer le menu",
        product: "Produit",
        how: "Fonctionnement",
        playbooks: "Playbooks",
        governance: "Gouvernance",
        contact: "Contact",
        lang: "Langue",
        ec: "Livraison ingénierie et construction"
      },
      hero: {
        title: "Échéancier, coûts et risques.<br>Réconciliés par l'IA, <em>gouvernés par votre équipe.</em>",
        sub:
          "Nos agents et les vôtres atteignent les mêmes moteurs, via MCP ou depuis Teams, Outlook et d'autres canaux. Chaque confirmation est authentifiée par un humain et attribuée. Votre savoir-faire reste lisible et portable, jamais enfermé dans un modèle.",
        running: "en cours",
        cascadeAria:
          "L'avancement terrain est mis en file. Un garde-fou écrit dans le Schedule engine ou retient pour un planificateur. Les réels de coûts passent une porte de préparation vers une prévision waterfall et une validation coûts. Les deux rejoignent le Risk engine, puis un rapport que le GP confirme.",
        video: "Parcours produit Lognos",
        integrations: "Agents et outils compatibles"
      },
      cascade: {
        s1t: "Avancement terrain",
        s1d: "La capture de chantier entre dans la cascade. Les réels de coûts peuvent lancer la même boucle de l'autre côté.",
        s2t: "Schedule engine",
        s2d: "Les mises à jour en file passent un garde-fou. Les corrections directes et mécaniques s'écrivent ; les effets du second ordre ou flous sont retenus pour un planificateur.",
        s3t: "Prévision waterfall",
        s3d: "Une prévision déterministe engagement + constat, validée par le contrôleur des coûts. Pas le Risk engine.",
        s4t: "Risk engine",
        s4d: "Un calcul distinct : coût × échéancier × registre des risques, pour une prévision ajustée au risque.",
        s5t: "Rapport",
        s5d: "Le GP confirme. Cette confirmation est la décision. Les tâches en attente lancent le cycle suivant.",
        nField: "Avancement terrain",
        nQueue: "File d'attente",
        nPlanner: "Planificateur",
        nSched: "Schedule engine",
        nActuals: "Réels",
        nWaterfall: "Waterfall",
        nCost: "Coûts valident",
        nRisk: "Risk engine",
        nReport: "Rapport",
        nPm: "GP confirme",
        tField: "saisie terrain ✓",
        tQueue: "tri des updates ✓",
        tPlanner: "retenu planif. ✓",
        tSched: "écriture planning ✓",
        tActuals: "ingestion réels ✓",
        tWaterfall: "prévision ✓",
        tCost: "en attente visa ✓",
        tRisk: "simulation composite ✓",
        tReport: "compilation rapport ✓",
        tPm: "en attente GP ✓"
      },
      what: {
        cat: "Ce que c'est",
        title: "Contrôles de projet, en continu",
        lede:
          "Trois équipes tiennent trois versions de la vérité, et elles ne s'accordent que le jour où le rapport part. Ce n'est pas de la négligence. C'est de l'arithmétique. Une prévision validée et réconciliée prenait des jours d'expertise, donc elle était mensuelle, et tout le monde acceptait de l'appeler à jour. Cette contrainte a disparu. Lognos réconcilie échéancier, coûts et risques en continu, pour que la photo sur laquelle on décide n'ait jamais plus d'une mise à jour de retard.",
        t1: "Une photo, pas trois",
        b1:
          "Échéancier, coûts et risques ne sont pas des produits séparés recablés après coup. Ce sont trois moteurs sur un seul registre, qui se réconcilient en continu. La plupart des outils de ce marché font bien l'un des trois et vous laissent la réconciliation, à vous et à un tableur.",
        t2: "La confirmation est la décision",
        b2:
          "Rien ne s'écrit sans préparer → confirmer → commiter. Ce n'est pas une politique ajoutée après. C'est le même mécanisme qui rend la boucle utile.",
        t3: "Ouvert aux bords",
        b3:
          "Intégré à l'intérieur, ouvert à l'extérieur. Les moteurs sont joignables en MCP par tout agent compatible : Claude, ChatGPT, ou un agent que votre équipe construit. Vous n'avez pas à adopter notre interface pour tirer parti de notre raisonnement.",
        t4: "Dit ce qu'il ne sait pas",
        b4:
          "Déclaration de capacité par projet et par question : disponible, indisponible ou partielle, avec une raison. Jamais une mauvaise réponse assurée."
      },
      tag: { live: "LIVE" },
      risk: {
        cat: "Risques",
        title: "Le risque, déclenché de plus d'un endroit",
        lede:
          "Communications de projet, documents ingérés, signaux du monde réel, et écarts d'échéancier ou de coûts aboutissent à la même étape d'identification. Les correspondances mettent à jour le registre ; les nouvelles actions ouvrent une revue gouvernée. Le chemin reviewer-commit est encore en durcissement. Tout autour est en production.",
        aria:
          "Quatre sources de signal (communications, documents, recherche monde, écarts d'échéancier ou de coûts) alimentent l'extraction et la dé-duplication, puis une correspondance avec le registre existant. La classification met à jour le registre et ouvre un workflow proposé-à-revoir. L'étape de commit du reviewer est en cours. Le registre alimente le même Risk engine, puis un tableau des risques et des tâches vers les responsables.",
        s1t: "Quatre sources de signal",
        s1d: "Communications, documents, recherche monde, et écarts d'échéancier ou de coûts. Les documents sont construits, pas encore en production sur un registre client.",
        s2t: "Identification",
        s2d: "Extraire, dé-dupliquer, apparier le registre existant, classer, et attribuer un responsable. Des propositions, pas des doublons silencieux.",
        s3t: "Workflow d'action",
        s3d: "Proposé → en revue → validation finale. Le commit du reviewer qui fait avancer une tâche est l'écart encore en durcissement.",
        s4t: "Risk engine",
        s4d: "Le même moteur que la cascade principale : coût × échéancier × registre. Un calcul, pas un second modèle de risque.",
        s5t: "Tableau et tâches",
        s5d: "Le statut arrive sur le tableau des risques ; le travail est poussé au responsable via l'app, Telegram, e-mail ou MCP.",
        nComms: "Communications",
        nDocs: "Documents",
        nWorld: "Signaux monde",
        nDelta: "Échéancier & coûts",
        nExtract: "Extraction",
        nClassify: "Classification",
        nRegister: "Registre risques",
        nEngine: "Risk engine",
        nBoard: "Tableau risques",
        nOwner: "Tâche au responsable",
        nProposed: "Proposé",
        nReview: "En revue",
        nReviewer: "Reviewer",
        tComms: "lecture comms ✓",
        tDocs: "ingestion docs …",
        tWorld: "recherche monde ✓",
        tDelta: "lecture écarts ✓",
        tExtract: "dé-duplication ✓",
        tClassify: "attribution ✓",
        tRegister: "maj registre ✓",
        tEngine: "simulation composite ✓",
        tBoard: "compilation tableau ✓",
        tOwner: "notif responsable ✓",
        tProposed: "ouverture proposition ✓",
        tReview: "en attente revue ✓",
        tReviewer: "commit pas live"
      },
      playbooks: {
        cat: "Playbooks",
        title: "Chaque boucle est un playbook lisible",
        lede:
          "Un workflow n'est pas une boîte noire dans l'agent. C'est un document déclaré : quels moteurs tournent, dans quel ordre, sous quel garde-fou, et exactement où un humain nommé doit confirmer avant tout commit.",
        xmlComment: "<!-- terrain + réels → garde-fou échéancier → waterfall, puis un Monte Carlo séparé -->"
      },
      gov: {
        cat: "Gouvernance",
        title:
          'La confirmation <em style="font-style:normal;color:var(--accent)">est</em> la décision.',
        lede:
          "Dans la plupart des outils agentiques, la gouvernance est la taxe payée pour l'automatisation, ajoutée après que l'agent a déjà agi. Chez Lognos, l'étape de confirmation et le moment de décision sont le même événement. La boucle tourne en continu pour que, lorsqu'on vous demande, ce soit au moment qui compte, avec une photo à jour.",
        p1t: "Préparer",
        p1d: "Un brouillon immuable est rendu : impact échéancier, coûts et risques, en entier.",
        p2t: "Confirmer",
        p2d: "Une personne nommée relit le brouillon et confirme. C'est la décision.",
        p3t: "Commiter",
        p3d: "L'écriture atterrit avec une empreinte de contenu et une piste d'audit. Pas avant."
      },
      who: {
        cat: "Pour qui",
        title: "Centré sur qui signe la décision de livraison",
        e1: "Porte l'appel",
        t1: "Le chef de projet",
        b1:
          "Porte la décision de livraison et ses conséquences. La prévision n'est pas fausse. Elle arrive trop tard pour agir. Lognos ferme cet écart.",
        e2: "Signe, plus souvent",
        t2: "Le responsable contrôles côté client",
        b2: "Vit la même caducité, un cran plus abstrait, et tient plus souvent le budget qui approuve l'achat.",
        e3: "Libérés de l'assemblage",
        t3: "Planificateurs et contrôleurs des coûts",
        b3: "Passent le mois à assembler la photo au lieu de la juger. Lognos prend l'assemblage ; le jugement reste le leur."
      },
      footer: {
        copy: "© 2026 Lognos. Livraison E&C, réconciliée en continu.",
        about: "À propos",
        whitepaper: "Livre blanc",
        contact: "Contact"
      },
      palette: {
        aria: "Recherche rapide",
        placeholder: "Aller à une section…",
        empty: "Aucune section ne correspond.",
        sections: [
          { label: "Boucle de réconciliation : coûts et échéancier", href: "#top" },
          { label: "Ce que fait Lognos", href: "#what-we-do" },
          { label: "Boucle risques : quatre sources de signal", href: "#risk" },
          { label: "Playbooks", href: "#playbooks" },
          { label: "Gouvernance : préparer, confirmer, commiter", href: "#governance" },
          { label: "Pour qui", href: "#who" }
        ]
      },
      cal: { book: "Réserver une démo" }
    },

    es: {
      meta: {
        title: "Lognos: controles de proyecto, reconciliados en continuo",
        description:
          "Cronograma, costo y riesgo se reconcilian entre sí en continuo. Un sistema, no tres herramientas recosidas. Nada se escribe sin tu confirmación, y esa confirmación es la decisión."
      },
      skip: "Saltar al contenido",
      news: { html: "<b>¡Novedad!</b> v1.0 ya está en línea, con conectores Claude / ChatGPT / Gemini" },
      nav: {
        home: "Inicio",
        search: "Búsqueda rápida",
        menu: "Navegación",
        close: "Cerrar menú",
        product: "Producto",
        how: "Cómo funciona",
        playbooks: "Playbooks",
        governance: "Gobernanza",
        contact: "Contacto",
        lang: "Idioma",
        ec: "Entrega de ingeniería y construcción"
      },
      hero: {
        title: "Cronograma, costo y riesgo.<br>Reconciliados por IA, <em>gobernados por tu equipo.</em>",
        sub:
          "Nuestros agentes y los tuyos llegan a los mismos motores, por MCP o desde Teams, Outlook y otros canales. Cada confirmación está autenticada por una persona y atribuida. Tu know-how permanece legible y portable, nunca encerrado en un modelo.",
        running: "en curso",
        cascadeAria:
          "El avance de obra entra en cola. Un guardrail escribe en el Schedule engine o retiene para un planificador. Los reales de costo pasan una puerta de preparación hacia un pronóstico waterfall y la firma de costos. Ambos se unen al Risk engine, luego un informe que el PM confirma.",
        video: "Recorrido de producto Lognos",
        integrations: "Agentes y herramientas compatibles"
      },
      cascade: {
        s1t: "Avance de obra",
        s1d: "La captura de sitio entra a la cascada. Los reales de costo pueden iniciar el mismo ciclo desde el otro lado.",
        s2t: "Schedule engine",
        s2d: "Las actualizaciones en cola pasan un guardrail. Las correcciones directas y mecánicas se escriben; los efectos de segundo orden o poco claros se retienen para un planificador.",
        s3t: "Pronóstico waterfall",
        s3d: "Un pronóstico determinista de compromiso + devengo, firmado por el controller de costos. No el Risk engine.",
        s4t: "Risk engine",
        s4d: "Un cálculo aparte: costo × cronograma × registro de riesgos, para un pronóstico ajustado al riesgo.",
        s5t: "Informe",
        s5d: "El PM confirma. Esa confirmación es la decisión. Las tareas pendientes inician el ciclo siguiente.",
        nField: "Avance de obra",
        nQueue: "Cola de updates",
        nPlanner: "Planificador",
        nSched: "Schedule engine",
        nActuals: "Reales",
        nWaterfall: "Waterfall",
        nCost: "Costos firman",
        nRisk: "Risk engine",
        nReport: "Informe",
        nPm: "PM confirma",
        tField: "captura avance ✓",
        tQueue: "triage updates ✓",
        tPlanner: "retenido planif. ✓",
        tSched: "escribe cronograma ✓",
        tActuals: "ingesta reales ✓",
        tWaterfall: "pronóstico ✓",
        tCost: "espera firma ✓",
        tRisk: "simula compuesto ✓",
        tReport: "compila informe ✓",
        tPm: "espera confirm ✓"
      },
      what: {
        cat: "Qué es",
        title: "Controles de proyecto, en continuo",
        lede:
          "Tres equipos mantienen tres versiones de la verdad, y solo coinciden el día en que sale el informe. No es descuido. Es aritmética. Un pronóstico validado y reconciliado tardaba días de trabajo experto, así que era mensual, y todos aceptaban llamarlo vigente. Esa restricción ya no está. Lognos reconcilia cronograma, costo y riesgo en continuo, para que la foto contra la que se decide nunca tenga más de una actualización de atraso.",
        t1: "Una foto, no tres",
        b1:
          "Cronograma, costo y riesgo no son productos separados recableados después. Corren como tres motores sobre un solo registro, reconciliándose en continuo. La mayoría de las herramientas de este mercado hacen bien una de las tres y te dejan la reconciliación a ti y a una hoja de cálculo.",
        t2: "La confirmación es la decisión",
        b2:
          "Nada se escribe sin preparar → confirmar → commitear. No es una política añadida después. Es el mismo mecanismo que hace que el ciclo valga la pena.",
        t3: "Abierto en los bordes",
        b3:
          "Integrado adentro, abierto afuera. Los motores se alcanzan por MCP con cualquier agente compatible: Claude, ChatGPT, o uno que arme tu propio equipo. No deberías tener que adoptar nuestra interfaz para sacar valor de nuestro razonamiento.",
        t4: "Dice lo que no sabe",
        b4:
          "Declaración de capacidad por proyecto y por pregunta: disponible, no disponible o parcial, con una razón. Nunca una respuesta incorrecta con confianza."
      },
      tag: { live: "LIVE" },
      risk: {
        cat: "Riesgo",
        title: "Riesgo, disparado desde más de un lugar",
        lede:
          "Comunicaciones de proyecto, documentos ingeridos, señales del mundo en vivo, y deltas de cronograma o costo llegan al mismo paso de identificación. Los matches actualizan el registro; las acciones nuevas abren una revisión gobernada. El camino reviewer-commit todavía se está endureciendo. Todo alrededor está en vivo.",
        aria:
          "Cuatro fuentes de señal (comunicaciones, documentos, búsqueda mundial, y deltas de cronograma o costo) alimentan la extracción y la de-duplicación, luego un match contra el registro existente. La clasificación actualiza el registro y abre un flujo de propuesto-a-revisión. El paso de commit del reviewer está en progreso. El registro alimenta el mismo Risk engine, luego un tablero de riesgos y tareas hacia los responsables.",
        s1t: "Cuatro fuentes de señal",
        s1d: "Comunicaciones, documentos, búsqueda mundial, y deltas de cronograma o costo. Los documentos están construidos, aún no en vivo en un registro de cliente.",
        s2t: "Identificación",
        s2d: "Extraer, de-duplicar, emparejar el registro existente, clasificar y asignar un responsable. Propuestas, no duplicados silenciosos.",
        s3t: "Flujo de acción",
        s3d: "Propuesto → en revisión → validación final. El commit del reviewer que avanza una tarea es el hueco que todavía se está endureciendo.",
        s4t: "Risk engine",
        s4d: "El mismo motor que la cascada principal: costo × cronograma × registro. Un cálculo, no un segundo modelo de riesgo.",
        s5t: "Tablero y tareas",
        s5d: "El estado llega al tablero de riesgos; el trabajo se muestra al responsable por la app, Telegram, email o MCP.",
        nComms: "Comunicaciones",
        nDocs: "Documentos",
        nWorld: "Señales mundo",
        nDelta: "Cronograma y costo",
        nExtract: "Extracción",
        nClassify: "Clasificar",
        nRegister: "Registro de riesgos",
        nEngine: "Risk engine",
        nBoard: "Tablero de riesgos",
        nOwner: "Tarea al owner",
        nProposed: "Propuesto",
        nReview: "En revisión",
        nReviewer: "Reviewer",
        tComms: "lee comms ✓",
        tDocs: "ingesta docs …",
        tWorld: "busca mundo ✓",
        tDelta: "lee deltas ✓",
        tExtract: "de-duplica ✓",
        tClassify: "asigna owners ✓",
        tRegister: "actualiza registro ✓",
        tEngine: "simula compuesto ✓",
        tBoard: "compila tablero ✓",
        tOwner: "notifica owner ✓",
        tProposed: "abre propuesta ✓",
        tReview: "espera revisión ✓",
        tReviewer: "commit no live"
      },
      playbooks: {
        cat: "Playbooks",
        title: "Cada ciclo es un playbook que se puede leer",
        lede:
          "Un workflow no es una caja negra dentro del agente. Es un documento declarado: qué motores corren, en qué orden, bajo qué guardrail, y exactamente dónde una persona nombrada tiene que confirmar antes de que algo se commitee.",
        xmlComment: "<!-- obra + reales → guardrail de cronograma → waterfall, luego un Monte Carlo aparte -->"
      },
      gov: {
        cat: "Gobernanza",
        title:
          'La confirmación <em style="font-style:normal;color:var(--accent)">es</em> la decisión.',
        lede:
          "En la mayoría de las herramientas agénticas, la gobernanza es el impuesto que se paga por automatizar, puesto después de que el agente ya actuó. En Lognos el paso de confirmación y el momento de decisión son el mismo evento. El ciclo corre en continuo para que, cuando te preguntan, te pregunten en el momento que importa, con una foto vigente.",
        p1t: "Preparar",
        p1d: "Se renderiza un borrador inmutable: impacto de cronograma, costo y riesgo, completo.",
        p2t: "Confirmar",
        p2d: "Una persona identificada revisa el borrador y confirma. Esta es la decisión.",
        p3t: "Commitear",
        p3d: "La escritura aterriza con una huella de contenido y una pista de auditoría. No antes."
      },
      who: {
        cat: "Para quién",
        title: "Centrado en quien firma la decisión de entrega",
        e1: "Dueño del llamado",
        t1: "El project manager",
        b1:
          "Dueño de la decisión de entrega y de sus consecuencias. El pronóstico no está mal. Llega demasiado tarde para actuar. Lognos cierra ese hueco.",
        e2: "Firma, más seguido",
        t2: "El lead de controles del lado cliente",
        b2: "Siente la misma caducidad un nivel más abstracto, y con más frecuencia sostiene el presupuesto que aprueba la compra.",
        e3: "Libres del armado",
        t3: "Planificadores y controllers de costo",
        b3: "Pasan el mes armando la foto en vez de juzgarla. Lognos toma el armado; el juicio sigue siendo de ellos."
      },
      footer: {
        copy: "© 2026 Lognos. Entrega E&C, reconciliada en continuo.",
        about: "Acerca de",
        whitepaper: "Whitepaper",
        contact: "Contacto"
      },
      palette: {
        aria: "Búsqueda rápida",
        placeholder: "Ir a una sección…",
        empty: "Ninguna sección coincide.",
        sections: [
          { label: "Ciclo de reconciliación: costo y cronograma", href: "#top" },
          { label: "Qué hace Lognos", href: "#what-we-do" },
          { label: "Ciclo de riesgo: cuatro fuentes de señal", href: "#risk" },
          { label: "Playbooks", href: "#playbooks" },
          { label: "Gobernanza: preparar, confirmar, commitear", href: "#governance" },
          { label: "Para quién", href: "#who" }
        ]
      },
      cal: { book: "Agendar una demo" }
    }
  };

  function get(dict, path) {
    return path.split(".").reduce(function (o, k) {
      return o == null ? o : o[k];
    }, dict);
  }

  function readLang() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      if (q) q = q.toLowerCase();
      if (LANGS[q]) return q;
    } catch (e) {}
    try {
      var stored = localStorage.getItem(KEY);
      if (LANGS[stored]) return stored;
    } catch (e) {}
    var nav = ((navigator.language || navigator.userLanguage || "en") + "").slice(0, 2).toLowerCase();
    if (nav === "fr" || nav === "es") return nav;
    return "en";
  }

  function writeUrl(lang) {
    try {
      var url = new URL(location.href);
      if (lang === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (e) {}
  }

  function setMeta(sel, attr, value) {
    var el = document.querySelector(sel);
    if (el) el.setAttribute(attr, value);
  }

  function applyCal(label) {
    var host = document.querySelector("cal-floating-button");
    var root = host && host.shadowRoot;
    if (!root) return;
    var btn = root.querySelector("#button") || root.querySelector("button span#button") || root.querySelector("button");
    if (!btn) return;
    var textNode = root.getElementById("button");
    if (textNode) textNode.textContent = label;
    else if (btn.childNodes.length) {
      /* keep the icon; replace visible label if present */
      var span = root.querySelector("#button");
      if (span) span.textContent = label;
    }
  }

  var current = "en";

  function apply(lang) {
    if (!LANGS[lang]) lang = "en";
    current = lang;
    var dict = I18N[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = get(dict, el.getAttribute("data-i18n"));
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = get(dict, el.getAttribute("data-i18n-html"));
      if (typeof v === "string") el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = get(dict, el.getAttribute("data-i18n-aria"));
      if (typeof v === "string") el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var v = get(dict, el.getAttribute("data-i18n-title"));
      if (typeof v === "string") el.setAttribute("title", v);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = get(dict, el.getAttribute("data-i18n-placeholder"));
      if (typeof v === "string") el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-ft]").forEach(function (el) {
      var v = get(dict, el.getAttribute("data-i18n-ft"));
      if (typeof v !== "string") return;
      el.textContent = v;
      el.style.setProperty("--ft-w", Math.max(12, v.length) + "ch");
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = "";
    });

    var title = get(dict, "meta.title");
    var desc = get(dict, "meta.description");
    if (title) {
      document.title = title;
      setMeta('meta[property="og:title"]', "content", title);
      setMeta('meta[name="twitter:title"]', "content", title);
    }
    if (desc) {
      setMeta('meta[name="description"]', "content", desc);
      setMeta('meta[property="og:description"]', "content", desc);
      setMeta('meta[name="twitter:description"]', "content", desc);
    }

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    applyCal(get(dict, "cal.book"));
    document.dispatchEvent(new CustomEvent("lognos:lang", { detail: { lang: lang, dict: dict } }));
  }

  function setLang(lang) {
    if (!LANGS[lang]) lang = "en";
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
    writeUrl(lang);
    apply(lang);
  }

  document.addEventListener("click", function (e) {
    var btn = e.target && e.target.closest && e.target.closest("[data-lang]");
    if (!btn) return;
    e.preventDefault();
    setLang(btn.getAttribute("data-lang"));
  });

  var start = readLang();
  apply(start);
  if (start !== "en") writeUrl(start);

  window.LognosI18n = {
    t: function (path) {
      return get(I18N[current], path);
    },
    lang: function () {
      return current;
    },
    set: setLang,
    apply: apply
  };
})();
