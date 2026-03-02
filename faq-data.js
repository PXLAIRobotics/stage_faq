/**
 * FAQ-inhoud voor Stage & Eindwerk
 * ================================
 * Wijzig ALLEEN dit bestand om teksten, vragen of categorieën aan te passen.
 * index.html hoef je niet aan te raken.
 *
 * Structuur:
 * - Elke sectie heeft: id, name, tagline, questions
 * - Elke vraag heeft: id, question, tags (array), answer (HTML-string)
 * - In answer mag je o.a. gebruiken: <p>, <ul>, <li>, <strong>, <em>, <h4>,
 *   <span class="highlight-text">...</span>, <a href="...">...</a>
 */

const FAQ_DATA = [
  {
    id: "algemeen",
    name: "Algemene info",
    tagline: "Blackboard, OnStage & overzicht",
    questions: [
      {
        id: "waar-informatie-stage",
        question: "Waar vind ik alle algemene informatie over de stage?",
        tags: ["algemeen", "Blackboard", "OnStage", "informatie"],
        answer: `
              <p>Alle officiële informatie over de stage vind je in de Blackboard‑cursus
              <span class="highlight-text">Algemene cursussen → DIGITAL: 2025‑26 Stages Toegepaste informatica semester 2</span>.</p>
              <p>Bij vragen over details (deadlines, documenten, richtlijnen, …) is dit je <strong>eerste</strong> referentiepunt.</p>
              <p>Heb je <strong>geen toegang</strong> tot deze cursus, laat dat dan zo snel mogelijk weten zodat dit in orde kan worden gebracht.</p>
            `
      },
      {
        id: "docu-doorlezen",
        question: "Moet ik de documentatie op Blackboard/OnStage echt volledig doorlezen?",
        tags: ["Blackboard", "OnStage", "documenten", "richtlijnen"],
        answer: `
              <p>Ja. De documenten op Blackboard en OnStage geven een duidelijk overzicht van <strong>wat er precies van je verwacht wordt</strong> tijdens de stage- en eindwerkperiode.</p>
              <p>Door deze vooraf grondig te lezen, vermijd je verrassingen en begrijp je beter
              hoe je je werk moet organiseren.</p>
            `
      }
    ]
  },
  {
    id: "portfolio",
    name: "Portfolio",
    tagline: "Wekelijkse uploads & feedback",
    questions: [
      {
        id: "portfolio-wat",
        question: "Wat wordt er verwacht van mijn stageportfolio?",
        tags: ["portfolio", "dagverslag", "OnStage"],
        answer: `
              <p>Je houdt <strong>wekelijks</strong> een portfolio bij met een <strong>bondige beschrijving</strong> van het dagelijks verloop.</p>
              <ul>
                <li>Focus op wat je hebt gedaan, geleerd en waar je tegenaan liep.</li>
                <li>Ik lees het niet tot in de kleinste details.</li>
                <li><strong>Belangrijk:</strong> als er iets misloopt, neem je zo snel mogelijk contact met mij op.</li>
                <li>Ik verkies eerder om regelmatig korte meetings te houden om te bespreken wat er gaande is. Zie sectie <a href="#communicatie">Communicatie & afspraken</a>.</li>
              </ul>
            `
      },
      {
        id: "portfolio-deadline",
        question: "Wanneer en hoe vaak moet ik mijn portfolio uploaden?",
        tags: ["portfolio", "deadline", "OnStage", "wekelijks"],
        answer: `
              <p>In principe upload je je portfolio <strong>elke vrijdag</strong> op OnStage.</p>
              <ul>
                <li>Ik lees het ten vroegste op maandag na, dus als het er <strong>tegen zondagavond</strong> op staat, is dat ook in orde.</li>
                <li>Je kan dus een beetje schuiven, maar hou de wekelijkse cadans goed aan.</li>
              </ul>
            `
      },
      {
        id: "portfolio-feedback",
        question: "Hoe ziet de feedback op mijn portfolio eruit?",
        tags: ["portfolio", "feedback", "OnStage"],
        answer: `
              <p>Als je portfolio in orde is, kan het zijn dat ik slechts heel kort reageer, bv. gewoon <span class="highlight-text">"OK"</span> op OnStage.</p>
              <ul>
                <li>Vooral in de tweede helft van de stage gebeurt dit vaker.</li>
                <li>Ik ga geen feedback verzinnen als alles goed loopt; zie het als een teken dat je op koers zit.</li>
              </ul>
            `
      },
      {
        id: "portfolio-markeren",
        question: "Moet ik nieuwe of aangepaste delen in mijn portfolio markeren?",
        tags: ["portfolio", "markeren", "feedback"],
        answer: `
              <p>Ja. Ik vraag je uitdrukkelijk om <strong>nieuwe of aangepaste delen in het portfolio in het geel te markeren</strong>.</p>
              <p>Zo zie ik meteen wat ik moet reviewen en verspillen we geen tijd aan het overlopen van oude stukken.</p>
            `
      }
    ]
  },
  {
    id: "eindwerk",
    name: "Eindwerk & onderzoek",
    tagline: "Onderzoeksvraag, AI & structuur",
    questions: [
      {
        id: "onderzoeksvraag-wanneer",
        question: "Wanneer moet mijn probleemstelling en onderzoeksvraag vastliggen?",
        tags: ["eindwerk", "onderzoeksvraag", "probleemstelling"],
        answer: `
              <p>We werken met een <strong>gestructureerde aanpak</strong> voor je eindwerk.</p>
              <ul>
                <li>We gaan samen grondig in op je <strong>probleemstelling en onderzoeksvraag</strong>.</li>
                <li>Die vormen de kern van je onderzoek en moeten helder en goed geformuleerd zijn.</li>
                <li>Het is de bedoeling dat dit <strong>tegen week 2-3</strong> redelijk duidelijk vastligt, zodat je tijdig kan starten met het onderzoek en de uitwerking.</li>
              </ul>
              <p>Denk hierbij aan het <strong>SMART‑principe</strong> en hoe je je onderzoek concreet kan organiseren.</p>
            `
      },
      {
        id: "probleemstelling-belang",
        question: "Waarom is de probleemstelling zo belangrijk bij mijn onderzoek?",
        tags: ["eindwerk", "probleemstelling", "onderzoeksvraag"],
        answer: `
              <p>De <strong>probleemstelling</strong> is bij onderzoek <span class="highlight-text">uiterst belangrijk</span>. Alles vertrekt daaruit.</p>
              <p>Wanneer je begint te twijfelen over je onderzoeksvraag of de richting van je onderzoek, keer dan altijd terug naar de probleemstelling. Die is je anker om je vraag en aanpak scherp te houden.</p>
            `
      },
      {
        id: "onderzoeksvraag-bedrijf",
        question: "Hoe betrek ik mijn bedrijfspromotor bij de probleemstelling en het onderzoek?",
        tags: ["eindwerk", "bedrijfspromotor", "onderzoeksvraag"],
        answer: `
              <p>Overleg zeker met je <strong>bedrijfspromotor</strong> over welk onderzoek nuttig is voor het bedrijf.</p>
              <p>Zo zorg je ervoor dat:</p>
              <ul>
                <li>Je onderzoek relevant is voor de praktijk.</li>
                <li>Je beter kan afstemmen welke vragen je precies gaat beantwoorden.</li>
              </ul>
              <p>Als inspiratie rond soorten onderzoeksvragen kan je bijvoorbeeld kijken naar sites zoals Scribbr.</p>
            `
      },
      {
        id: "eindwerk-resources",
        question: "Waar vind ik goede bronnen over probleemstelling, onderzoeksvragen en bronvermelding?",
        tags: ["eindwerk", "Scribbr", "probleemstelling", "bronnen", "resources"],
        answer: `
              <h4>Scribbr (online)</h4>
              <p><a href="https://www.scribbr.nl/starten-met-je-scriptie/probleemstelling/" target="_blank" rel="noopener">Probleemstelling formuleren</a> – uitleg en voorbeelden voor een goede probleemstelling.</p>
              <p><a href="https://www.scribbr.nl/starten-met-je-scriptie/onderzoeksvragen/" target="_blank" rel="noopener">Onderzoeksvragen</a> – hoofdvraag en deelvragen.</p>
              <p><a href="https://www.scribbr.nl/starten-met-je-scriptie/doelstelling/" target="_blank" rel="noopener">Doelstelling formuleren</a> – wat wil je met je onderzoek bereiken.</p>
              <p><a href="https://www.scribbr.nl/starten-met-je-scriptie/type-onderzoeksvragen/" target="_blank" rel="noopener">Type onderzoeksvragen</a> – soorten vragen (beschrijvend, verklarend, enz.).</p>
              <p><a href="https://www.scribbr.nl/bronvermelding/" target="_blank" rel="noopener">Bronvermelding</a> – algemeen over bronnen en referenties.</p>
              <h4>Map Resources</h4>
              <p>In de map <strong>Resources</strong> (bij deze FAQ) staan extra documenten. Directe links:</p>
              <ul>
                <li><a href="Resources/01 - Onderzoekend handelen - Projectweek.pptx" target="_blank" rel="noopener">Onderzoekend handelen – Projectweek</a> (PowerPoint)</li>
                <li><a href="Resources/02 - Proceswijzer onderzoek.pdf" target="_blank" rel="noopener">Proceswijzer onderzoek</a> (PDF)</li>
                <li><a href="Resources/03 - 6W-Methode.pdf" target="_blank" rel="noopener">6W-Methode</a> (PDF)</li>
                <li><a href="Resources/04 - CRAAP_Checklist.docx" target="_blank" rel="noopener">CRAAP-checklist</a> (Word) – bronnen beoordelen</li>
                <li><a href="Resources/05 - Tips PXL - Bronnen raadplegen 2020.pdf" target="_blank" rel="noopener">Tips PXL – Bronnen raadplegen</a> (PDF)</li>
              </ul>
            `
      },
      {
        id: "eindwerk-gesprekken",
        question: "Hoe vaak heb ik gesprekken over mijn eindwerk en wat is het doel daarvan?",
        tags: ["eindwerk", "gesprekken", "tussentijdse feedback"],
        answer: `
              <p>We plannen <strong>ongeveer om de 2 weken</strong> een gesprek over je onderzoek.</p>
              <ul>
                <li>Je legt uit wat je gedaan hebt en welke stappen nog volgen.</li>
                <li>Het is een <strong>interactief gesprek</strong> waarin jij zélf notities neemt.</li>
                <li>Doel: je onderzoeksproces bewaken en inhoudelijk bijsturen waar nodig.</li>
                <li>Met alle AI gebruik voor het schrijven van teksten heb ik geen zin om gegenereerde tekst na te lezen. Deze gesprekken dienen er dan ook voor dat ik weet waar je mee bezig bent.</li>
              </ul>
            `
      },
      {
        id: "eindwerk-nalezen",
        question: "Hoe vaak wordt mijn eindwerk nagelezen door de hogeschoolpromotor?",
        tags: ["eindwerk", "nalezen", "feedback"],
        answer: `
              <p>Ik lees je eindwerk <strong>maximaal één tot twee keer in detail</strong> na vóór de definitieve versie.</p>
              <ul>
                <li>Gebruik de tussentijdse feedbackmomenten dus optimaal.</li>
                <li>Stel je inhoudelijke vragen op tijd.</li>
                <li>Reken er niet op dat ik meerdere volledige versies ga nalezen op het laatste moment.</li>
              </ul>
            `
      },
      {
        id: "ai-gebruik",
        question: "Mag ik ChatGPT of andere generatieve AI gebruiken voor mijn eindwerk?",
        tags: ["AI", "ChatGPT", "LLM", "eindwerk"],
        answer: `
              <p>Ja, je mag generatieve AI (zoals ChatGPT) gebruiken, maar <strong>alleen als hulpmiddel</strong>, niet als copy‑paste‑generator.</p>
              <h4>Belangrijke aandachtspunten</h4>
              <ul>
                <li>LLM's geven niet altijd <strong>correcte informatie</strong>; wees dus kritisch.</li>
                <li>Zij zijn niet goed in het <strong>synthetiseren van informatie</strong>, terwijl dat net cruciaal is in een eindwerk.</li>
                <li>Bronnen zijn essentieel: AI geeft niet altijd betrouwbare of correcte referenties.</li>
                <li>Ik besteed geen tijd aan het nalezen van <strong>duidelijk gegenereerde tekst zonder eigen inbreng</strong>.</li>
              </ul>
              <p>Of anders gezegd: <span class="highlight-text">gebruik AI slim, maar denk en schrijf vooral zelf</span>.</p>
            `
      },
      {
        id: "eindwerk-markeren",
        question: "Hoe moet ik nieuwe versies en wijzigingen in mijn eindwerk aanleveren?",
        tags: ["eindwerk", "markeren", "versies"],
        answer: `
              <ul>
                <li><strong>Markeer nieuwe of aangepaste delen in het eindwerk in het geel.</strong> Zo zie ik snel wat ik moet reviewen.</li>
                <li>Gebruik <strong>versienummering</strong> bij elke upload (bv. v0.3, v0.4) en noteer de <strong>datum</strong>.</li>
              </ul>
              <p>Vage tekst "om de tekst te vullen" (text for the sake of text) wordt negatief beoordeeld.</p>
            `
      }
    ]
  },
  {
    id: "projectomschrijving",
    name: "Projectomschrijving",
    tagline: "Korte beschrijving van je project",
    questions: [
      {
        id: "projectomschrijving-wat",
        question: "Wat is de projectomschrijving en wat moet daarin staan?",
        tags: ["projectomschrijving", "bachelorproef"],
        answer: `
              <p>De projectomschrijving is een <strong>ingekorte versie</strong> van je bachelorproef en eindwerk, waarin je de <strong>essentie</strong> bondig beschrijft.</p>
              <p>Je kunt het vergelijken met de <strong>abstract van een paper</strong>, maar dan zonder de resultaten; die voeg je op het einde toe.</p>
              <p>Je gebruikt hiervoor het sjabloon en de richtlijnen die in de <strong>stagekalender</strong> en op Blackboard staan.</p>
              <p>Ter inspiratie kan je ook de <a href="https://pxl-digital.pxl.be/web/content/22811?unique=dc4fb90e5c244f5fb3d958ff2124cd6d03586314&amp;download=true" target="_blank" rel="noopener">projectenbundel van vorig jaar</a> bekijken, met uitgewerkte voorbeelden van projecten.</p>
            `
      }
    ]
  },
  {
    id: "taalversie",
    name: "Taalversie",
    tagline: "Taal, punten & strenge criteria",
    questions: [
      {
        id: "taalversie-wat",
        question: "Wat is de taalversie van mijn eindwerk en hoe wordt die beoordeeld?",
        tags: ["taalversie", "taal", "punten"],
        answer: `
              <p>De taalversie is een versie van je eindwerk waarop je specifiek <strong>punten krijgt voor taalgebruik</strong>.</p>
              <ul>
                <li>Lees de richtlijnen hiervoor <strong>heel nauwkeurig</strong> na (o.a. aantal woorden, opmaak, …).</li>
                <li>Laat je tekst nalezen door iemand (vriend, partner, familie) om typische fouten (bv. <span class="highlight-text">dt‑fouten</span>) eruit te halen.</li>
              </ul>
            `
      },
      {
        id: "taalversie-streng",
        question: "Hoe streng zijn de taallectoren en waarom is de taalversie zo belangrijk?",
        tags: ["taalversie", "taallectoren", "punten"],
        answer: `
              <p>De taallectoren zijn <strong>erg transparant</strong> over hun verwachtingen, maar ook <strong>heel streng</strong> in de toepassing van de regels.</p>
              <ul>
                <li>Slechte punten voor de taalversie wegen zwaar door in je totaalscore.</li>
                <li>In sommige gevallen start je zo in een <span class="highlight-text">"inhaalrace"</span>, wat je best vermijdt.</li>
              </ul>
            `
      },
      {
        id: "taalversie-deadline",
        question: "Wat als ik de deadline voor de taalversie mis?",
        tags: ["taalversie", "deadline"],
        answer: `
              <p>Als je de <strong>deadline voor de taalversie</strong> mist, riskeer je een <strong>0 als score</strong> voor dat onderdeel.</p>
              <p>Dat is heel moeilijk nog recht te trekken, dus: <span class="highlight-text">zet deze deadline extra duidelijk in je agenda</span>.</p>
            `
      }
    ]
  },
  {
    id: "deadlines",
    name: "Deadlines & planning",
    tagline: "Stagekalender en je eigen agenda",
    questions: [
      {
        id: "deadlines-belangrijk",
        question: "Hoe belangrijk is het om alle deadlines te respecteren?",
        tags: ["deadlines", "planning", "verantwoordelijkheid"],
        answer: `
              <p>Deadlines zijn <strong>heel belangrijk</strong>, niet alleen voor de taalversie maar voor alle onderdelen.</p>
              <ul>
                <li>Hou de <strong>stagekalender</strong> continu in het oog.</li>
                <li>Zet alle deadlines duidelijk in je <strong>eigen agenda</strong> (digitaal of papier).</li>
                <li>Kijk ook enkele weken vooruit zodat je alles realistisch kan inplannen.</li>
              </ul>
              <p>Bekijk de <a href="stagekalender.png" target="_blank" rel="noopener">stagekalender</a> (afbeelding).</p>
              <p><strong>Je bent zelf verantwoordelijk</strong> voor het nakomen van de deadlines.</p>
            `
      }
    ]
  },
  {
    id: "stagebezoeken",
    name: "Stagebezoeken",
    tagline: "Officiële momenten bij het bedrijf",
    questions: [
      {
        id: "hoeveel-stagebezoeken",
        question: "Hoeveel officiële stagebezoeken zijn er en wanneer vinden die plaats?",
        tags: ["stagebezoeken", "bezoeken"],
        answer: `
              <p>Er zijn <strong>twee officiële stagebezoeken</strong> tijdens de stage:</p>
              <ul>
                <li>Bezoek 1: rond <strong>week 2–4</strong>.</li>
                <li>Bezoek 2: op het einde, rond <strong>week 11–12</strong>.</li>
              </ul>
              <p>Tijdens deze gesprekken zitten we samen met jou en de bedrijfspromotor om te bespreken hoe de stage verloopt. Ik bekijk per geval of dit <strong>online of fysiek</strong> gebeurt.</p>
              <p><strong>Belangrijk:</strong> jij neemt zelf <strong>initiatief</strong> om deze stagebezoeken in te plannen (in overleg met je bedrijfspromotor en met mij). Wacht dus niet passief af tot ik iets voorstel, maar prik zelf tijdstippen die voor iedereen haalbaar zijn.</p>
            `
      }
    ]
  },
  {
    id: "communicatie",
    name: "Communicatie & afspraken",
    tagline: "Teams, mail & vragenuur",
    questions: [
      {
        id: "teams-kanaal",
        question: "Hoe gebeurt de groepscommunicatie rond de stage?",
        tags: ["Teams", "communicatie", "groep"],
        answer: `
              <p>Voor alle <strong>groepscommunicatie</strong> maak ik een <strong>Teams‑kanaal</strong>.</p>
              <p>Dat is praktischer dan e‑mail voor korte vragen en updates.</p>
            `
      },
      {
        id: "contact-opnemen",
        question: "Hoe kan ik mijn hogeschoolpromotor bereiken?",
        tags: ["Teams", "mail", "contact"],
        answer: `
              <p>Je kan mij bereiken via:</p>
              <ul>
                <li><strong>Teams</strong> (voorkeur voor snelle vragen);</li>
                <li><strong>E‑mail</strong> indien nodig.</li>
              </ul>
            `
      },
      {
        id: "vragenuurtje",
        question: "Is er een vast vragenuurtje tijdens de week?",
        tags: ["Teams", "vragenuur", "meeting"],
        answer: `
              <p>Elke <strong>vrijdag tussen 11–12u</strong> hou ik een standaard open <strong>vragenuurtje via Teams call</strong>.</p>
              <ul>
                <li>Wil je graag even syncen, plan dan op dat moment een korte meeting (20–30 minuten).</li>
                <li>Stuur hiervoor een <strong>calendar‑uitnodiging</strong> in Outlook/Teams.</li>
              </ul>
            `
      }
    ]
  },
  {
    id: "tijdsbesteding",
    name: "Tijdsbesteding promotor",
    tagline: "Hoeveel tijd is er voor begeleiding?",
    questions: [
      {
        id: "uren-per-student",
        question: "Hoeveel tijd heeft de hogeschoolpromotor voor mij als stagiair?",
        tags: ["tijd", "uren", "begeleiding"],
        answer: `
              <p>In de onderwijsopdracht krijg ik ongeveer <strong>1,7% per stagestudent</strong>, wat neerkomt op zo'n <strong>25 uur per student</strong> voor de hele stageperiode.</p>
              <p>Die 25 uur dekken <strong>alles</strong>: jurypresentaties, portfolios en eindwerken nalezen, overleg met jou, enz. Dit betekent dat ik niet oneindig veel tijd heb.
              Gebruik de beschikbare tijd dus <strong>doelgericht</strong>: stel je vragen op de juiste momenten en bereid overleg goed voor.</p>
            `
      }
    ]
  },
  {
    id: "tips",
    name: "Tips & veelgemaakte fouten",
    tagline: "Durven vragen & planning volgen",
    questions: [
      {
        id: "durf-te-vragen",
        question: "Wat is de grootste fout die studenten tijdens hun stage maken?",
        tags: ["tips", "vragen", "fouten"],
        answer: `
              <p>Een veelgemaakte fout is dat studenten <strong>geen vragen durven stellen</strong>, zowel aan mij als aan hun bedrijfspromotor of technische begeleider.</p>
              <p>Wees niet bang om toe te geven dat je iets niet weet: spreek de juiste personen aan zodat je <strong>kan blijven vooruitgaan</strong>.</p>
              <p>Uit ervaring komt dit punt <strong>telkens opnieuw terug</strong> bij stages: gewoon doen dus.</p>
            `
      },
      {
        id: "planning-bekijken",
        question: "Hoe voorkom ik verrassingen tijdens de stageperiode?",
        tags: ["planning", "tips", "deadlines"],
        answer: `
              <p><strong>Bekijk de planning regelmatig.</strong> De stageplanning staat op Blackboard.</p>
              <ul>
                <li>Neem de planning op voorhand grondig door.</li>
                <li>Check regelmatig wat er de komende weken verwacht wordt.</li>
                <li>Zo kan je <strong>tijdig alles in orde brengen</strong> en kom je niet in de problemen met overlappingen of vergeten deadlines.</li>
              </ul>
            `
      }
    ]
  },
  {
    id: "engels",
    name: "Eindwerk in het Engels",
    tagline: "Voorwaarden & toestemming",
    questions: [
      {
        id: "eindwerk-engels",
        question: "Mag ik mijn eindwerk in het Engels schrijven en wat moet ik daarvoor regelen?",
        tags: ["Engels", "eindwerk", "toelating"],
        answer: `
              <p>Ja, je kan je eindwerk in het Engels schrijven, maar daarvoor moet je een aantal zaken in orde brengen:</p>
              <ul>
                <li><strong>Overleg</strong> met je hogeschoolpromotor (ik) en je bedrijfspromotor; beiden moeten akkoord zijn.</li>
                <li>Vraag vervolgens <strong>toestemming aan het opleidingshoofd (Joeri Gerrits)</strong> met een kort mailtje waarin je:</li>
                <ul>
                  <li>vermeld waar je je stage loopt (en eventueel het onderwerp),</li>
                  <li>je hogeschoolpromotor vermeldt,</li>
                  <li>toestemming vraagt om je eindwerk in het Engels te schrijven.</li>
                </ul>
              </ul>
              <p>Het mailtje zelf mag gewoon in het Nederlands.</p>
            `
      }
    ]
  }
];
