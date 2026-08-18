const commons=(name,w=900)=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=${w}`;

const emperors=[
["Augustus","27 BC–14 AD","Julio-Claudian","Augustus of Prima Porta.jpg","First emperor","Established the Principate and transformed the institutions of the Roman state after the civil wars."],
["Tiberius","14–37","Julio-Claudian","Tiberius Louvre Ma 1248.jpg","Second emperor","Experienced commander and administrator who consolidated Augustus' settlement."],
["Caligula","37–41","Julio-Claudian","Caligula Bust.jpg","Third emperor","A brief and turbulent reign ended with his assassination by members of the Praetorian Guard."],
["Claudius","41–54","Julio-Claudian","Claudius Louvre Ma 1231.jpg","Fourth emperor","Expanded the bureaucracy and launched the successful invasion of Britain."],
["Nero","54–68","Julio-Claudian","Nero Glyptothek Munich 321.jpg","Last Julio-Claudian","His fall in 68 brought the empire into a succession crisis."],
["Galba","68–69","Year of the Four Emperors","Galba Musei Capitolini.jpg","Civil-war emperor","The first of the four claimants who ruled in the extraordinary year 69."],
["Otho","69","Year of the Four Emperors","Otho Glyptothek Munich 337.jpg","Civil-war emperor","Defeated by Vitellius and chose suicide after defeat at Bedriacum."],
["Vitellius","69","Year of the Four Emperors","Vitellius Glyptothek Munich 337.jpg","Civil-war emperor","Defeated by Vespasian's armies during the struggle of 69."],
["Vespasian","69–79","Flavian","Vespasianus Musei Capitolini.jpg","Flavian founder","Restored state finances and began the construction of the Colosseum."],
["Titus","79–81","Flavian","Titus Musei Capitolini.jpg","Flavian emperor","Completed the Colosseum and ruled during the aftermath of the eruption of Vesuvius."],
["Domitian","81–96","Flavian","Domitian Musei Capitolini.jpg","Last Flavian","Strengthened imperial administration and frontier defenses."],
["Nerva","96–98","Nerva–Antonine","Nerva Musei Capitolini.jpg","Adoptive emperor","Adopted Trajan, beginning the sequence of adoptive succession."],
["Trajan","98–117","Nerva–Antonine","Trajan Glyptothek Munich.jpg","Conqueror","Dacia was annexed and the empire reached its greatest territorial extent."],
["Hadrian","117–138","Nerva–Antonine","Hadrian Musei Capitolini.jpg","Consolidator","Travelled extensively and emphasized defensible frontiers and provincial integration."],
["Antoninus Pius","138–161","Nerva–Antonine","Antoninus Pius Musei Capitolini.jpg","Peaceful reign","Presided over a comparatively stable period and continued imperial administration."],
["Marcus Aurelius","161–180","Nerva–Antonine","Marcus Aurelius Glyptothek Munich 337.jpg","Philosopher-emperor","Ruled through major frontier wars while writing the Meditations."],
["Lucius Verus","161–169","Nerva–Antonine","Lucius Verus Louvre Ma 441.jpg","Co-emperor","Co-emperor with Marcus Aurelius and nominal leader during the eastern war."],
["Commodus","180–192","Nerva–Antonine","Commodus Musei Capitolini.jpg","Last Antonine","His reign ended the Antonine dynasty and preceded the political crisis of 193."],
["Pertinax","193","Year of the Five Emperors","Pertinax Musei Capitolini.jpg","Short-lived emperor","Attempted reform before being killed by Praetorian Guards after roughly three months."],
["Didius Julianus","193","Year of the Five Emperors","Didius Julianus Musei Capitolini.jpg","Short-lived emperor","Became emperor after the notorious auction of the imperial office by the Praetorian Guard."],
["Septimius Severus","193–211","Severan","Septimius Severus Musei Capitolini.jpg","Severan founder","Won the civil wars of 193 and founded the Severan dynasty."],
["Caracalla","198–217","Severan","Caracalla Musei Capitolini.jpg","Severan emperor","The Constitutio Antoniniana of 212 extended citizenship to most free inhabitants of the empire."],
["Geta","209–211","Severan","Geta Musei Capitolini.jpg","Co-emperor","Co-ruled with Caracalla before being killed during the dynastic struggle."],
["Elagabalus","218–222","Severan","Elagabalus Musei Capitolini.jpg","Severan emperor","A young ruler whose reign was closely associated with the Syrian cult of Elagabal."],
["Severus Alexander","222–235","Severan","Severus Alexander Musei Capitolini.jpg","Last Severan","His assassination marked the end of the Severan dynasty."],
["Maximinus Thrax","235–238","Crisis of the Third Century","Maximinus Thrax Musei Capitolini.jpg","Soldier-emperor","His accession began a period of rapid military emperorship and political instability."],
["Gordian III","238–244","Crisis of the Third Century","Gordian III Musei Capitolini.jpg","Young emperor","Ruled during the struggle with Persia and died on campaign."],
["Philip the Arab","244–249","Crisis of the Third Century","Philip the Arab Musei Capitolini.jpg","Millennial emperor","Celebrated Rome's traditional millennium in 248."],
["Decius","249–251","Crisis of the Third Century","Decius Musei Capitolini.jpg","Frontier emperor","Killed fighting the Goths at Abrittus."],
["Aurelian","270–275","Crisis of the Third Century","Aurelian Musei Capitolini.jpg","Restorer","Reunified the empire after the Palmyrene and Gallic breakaways."],
["Diocletian","284–305","Tetrarchy","Diocletian Musei Capitolini.jpg","Reformer","Created the Tetrarchy and transformed imperial administration, taxation and the army."],
["Constantine I","306–337","Constantinian","Constantine Musei Capitolini.jpg","Constantine the Great","Defeated his rivals, favored Christianity and established Constantinople as a new imperial capital."],
["Julian","361–363","Constantinian","Julian Apostate Louvre Ma 436.jpg","Last pagan emperor","Attempted to restore traditional Roman religious practices during a brief reign."],
["Theodosius I","379–395","Theodosian","Theodosius I Louvre Ma 1200.jpg","Last sole emperor","Last ruler to govern both halves of the empire before the permanent separation of imperial courts."],
["Honorius","393–423","Theodosian","Honorius Musei Capitolini.jpg","Western emperor","Western emperor during the sack of Rome by the Visigoths in 410."],
["Valentinian III","425–455","Theodosian","Valentinian III Musei Capitolini.jpg","Late western emperor","Ruled during increasing fragmentation and the rise of powerful military commanders."],
["Anthemius","467–472","Late Western Empire","Anthemius coin.jpg","Late western emperor","One of the final emperors of the western court."],
["Romulus Augustulus","475–476","Late Western Empire","Romulus Augustulus coin.jpg","Traditional last western emperor","Deposed by Odoacer in 476, the conventional date for the end of the Western Roman Empire."]
];

const dynasties=[
["I","Julio-Claudian","27 BC–68 AD","Augustus, Tiberius, Caligula, Claudius and Nero."],
["II","Flavian","69–96","Vespasian, Titus and Domitian."],
["III","Nerva–Antonine","96–192","Nerva, Trajan, Hadrian, Antoninus Pius, Marcus Aurelius and Commodus."],
["IV","Severan","193–235","Septimius Severus and the Severan emperors."],
["V","Crisis of the Third Century","235–284","Rapid succession, civil wars and regional breakaways."],
["VI","Tetrarchy","284–324","Diocletian's four-man imperial system."],
["VII","Constantinian","306–363","Constantine, his dynasty and Julian."],
["VIII","Theodosian","379–455","Theodosius I and the later western emperors."],
["IX","Late Western Empire","455–476","The final sequence of western imperial rulers."]
];

const coins=[
["Aureus of Augustus","Gold · Imperial portrait","Augustus aureus.jpg"],
["Denarius of Trajan","Silver · Imperial messaging","Denarius of Trajan - reverse.jpg"],
["Sestertius of Hadrian","Bronze · Provincial imagery","Hadrian sestertius.jpg"],
["Antoninianus of Aurelian","Billon · Late imperial reform","Aurelian Antoninianus.jpg"],
["Solidus of Constantine","Gold · Late Empire","Constantine solidus.jpg"],
["Coin portrait of Nero","Silver · Julio-Claudian portraiture","Nero denarius.jpg"]
];

const art=[
["Augustus of Prima Porta","Imperial sculpture","Augustus of Prima Porta.jpg"],
["Colosseum","Flavian architecture","Colosseum in Rome, Italy - April 2007.jpg"],
["Pantheon","Imperial architecture","Pantheon Rome 2020.jpg"],
["Roman mosaic","Domestic art · Mythology","Roman mosaic Neptune House of Neptune and Amphitrite Herculaneum.jpg"],
["Pompeian fresco","Wall painting · Domestic culture","Pompeii - Casa dei Vettii - Priest and Priestess of Dionysus.jpg"],
["Roman Forum","Political and religious centre","Roman Forum Rome Italy 2020.jpg"]
];

const wars=[
["264–146 BC","Punic Wars","Rome and Carthage fought three wars for control of the western Mediterranean; Rome's final victory destroyed Carthage as a major power."],
["58–50 BC","Gallic Wars","Caesar's campaigns brought much of Gaul under Roman control and transformed his military and political position."],
["43–87 AD","Conquest of Britain","Claudius launched the invasion; later campaigns expanded Roman control before a frontier was established in northern Britain."],
["66–73 AD","First Jewish–Roman War","A major revolt against Roman rule ended with the destruction of the Second Temple in Jerusalem in 70."],
["101–102 / 105–106 AD","Dacian Wars","Trajan defeated Decebalus and annexed Dacia, producing one of the empire's richest new provinces."],
["162–166 AD","Roman–Parthian War","Lucius Verus' eastern command restored Roman influence in Armenia and Mesopotamia."],
["235–284 AD","Crisis of the Third Century","A succession of civil wars, invasions and breakaway states destabilized the empire before Aurelian and Diocletian restored imperial unity."],
["312 AD","Milvian Bridge","Constantine defeated Maxentius outside Rome, becoming master of the western empire."],
["363 AD","Persian Campaign of Julian","Julian's major eastern campaign ended with his death during the retreat from Persian territory."]
];

const events=[
["27 BC","Augustus","Octavian receives the name Augustus and becomes the first emperor in the traditional chronology."],
["14 AD","Tiberius","Augustus dies; Tiberius succeeds him."],
["43 AD","Britain","Claudius' invasion begins the Roman conquest of Britain."],
["64 AD","Great Fire","A major fire devastates Rome under Nero."],
["68–69","Civil war","Nero dies; the empire passes through the Year of the Four Emperors."],
["79 AD","Vesuvius","Vesuvius erupts, burying Pompeii and Herculaneum."],
["80 AD","Colosseum","Titus dedicates the Flavian Amphitheatre."],
["117 AD","Trajan","The empire reaches its greatest territorial extent."],
["212 AD","Citizenship","Caracalla's Constitutio Antoniniana extends citizenship to most free inhabitants."],
["235 AD","Crisis","The assassination of Severus Alexander begins the traditional Crisis of the Third Century."],
["284 AD","Diocletian","Diocletian becomes emperor and begins a sweeping reorganization."],
["313 AD","Milan","Constantine and Licinius agree on a policy of religious toleration commonly associated with the Edict of Milan."],
["330 AD","Constantinople","Constantine dedicates the new imperial capital at Constantinople."],
["378 AD","Adrianople","The Roman army suffers a major defeat against the Goths."],
["395 AD","Division","Theodosius I dies; eastern and western imperial courts continue separately."],
["410 AD","Rome","Visigoths under Alaric sack Rome."],
["455 AD","Vandal sack","Vandals sack Rome under Geiseric."],
["476 AD","Romulus Augustulus","Odoacer removes the young western emperor, conventionally marking the end of the Western Roman Empire."]
];

const grid=document.querySelector("#emperorGrid");
const search=document.querySelector("#search");
const filter=document.querySelector("#dynastyFilter");
const modal=document.querySelector("#modal");
const modalBody=document.querySelector("#modalBody");

[...new Set(emperors.map(e=>e[2]))].forEach(d=>{const o=document.createElement("option");o.value=d;o.textContent=d;filter.appendChild(o)});

function renderEmperors(){
 const q=search.value.toLowerCase().trim(), d=filter.value;
 const list=emperors.filter(e=>(!q||e.join(" ").toLowerCase().includes(q))&&(!d||e[2]===d));
 grid.innerHTML=list.map((e,i)=>`<article class="emperor-card" data-name="${e[0]}"><img src="${commons(e[3])}" alt="${e[0]}" loading="lazy"><div class="emperor-info"><small>${e[1]} · ${e[2]}</small><h3>${e[0]}</h3><p>${e[4]}</p></div></article>`).join("")||"<p>No emperor matches that search.</p>";
 grid.querySelectorAll(".emperor-card").forEach(c=>c.onclick=()=>openEmperor(c.dataset.name));
}
function openEmperor(name){
 const e=emperors.find(x=>x[0]===name);
 modalBody.innerHTML=`<div class="profile"><img src="${commons(e[3],1000)}" alt="${e[0]}"><div><div class="tag">${e[2]} · ${e[1]}</div><h2>${e[0]}</h2><p>${e[5]}</p><dl><dt>Reign</dt><dd>${e[1]}</dd><dt>Dynasty</dt><dd>${e[2]}</dd><dt>Known for</dt><dd>${e[4]}</dd><dt>Visual source</dt><dd>Wikimedia Commons image endpoint; verify individual file attribution before redistribution.</dd></dl></div></div>`;
 modal.classList.add("show");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function renderDynasties(){document.querySelector("#dynastyGrid").innerHTML=dynasties.map(d=>`<article class="dynasty"><div class="roman">${d[0]} · ${d[2]}</div><h3>${d[1]}</h3><p>${d[3]}</p></article>`).join("")}
function media(data,light=false){return data.map(x=>`<article class="media-card ${light?"light":""}"><img src="${commons(x[2])}" alt="${x[0]}" loading="lazy"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("")}
function renderWars(){document.querySelector("#warList").innerHTML=wars.map(w=>`<article class="war"><div class="date">${w[0]}</div><h3>${w[1]}</h3><p>${w[2]}</p></article>`).join("")}
function renderTimeline(){document.querySelector("#timelineList").innerHTML=events.map(e=>`<div class="event"><time>${e[0]}</time><article><h3>${e[1]}</h3><p>${e[2]}</p></article></div>`).join("")}

const mapData={
"27 BC":{caption:"The Augustan settlement: the empire centred on the Mediterranean, with major western and eastern frontiers.",points:[[190,235],[290,175],[405,165],[520,180],[625,230],[710,275],[600,325],[470,320],[350,305],[250,330]]},
"117 AD":{caption:"Trajan's empire at its greatest extent: Britannia, Dacia and the eastern conquests are included.",points:[[110,180],[205,115],[355,105],[500,125],[650,175],[805,220],[725,300],[610,360],[430,350],[260,330],[150,285]]},
"284 AD":{caption:"The late third-century empire after the recovery of Aurelian and before Diocletian's Tetrarchy.",points:[[120,190],[225,120],[370,115],[520,140],[670,185],[800,235],[710,315],[590,350],[420,340],[260,320],[145,280]]},
"395 AD":{caption:"The empire of Theodosius I at the moment of permanent eastern and western imperial courts.",points:[[125,190],[220,120],[365,115],[520,145],[680,185],[820,230],[735,305],[600,355],[430,345],[265,325],[145,280]]},
"476 AD":{caption:"The western imperial court has disappeared; the eastern Roman Empire continues from Constantinople.",points:[[130,205],[220,135],[350,130],[500,150],[640,195],[770,230],[690,285],[570,330],[420,325],[280,310],[160,275]]}
};
function drawMap(key){
 const m=mapData[key], svg=document.querySelector("#map");
 const pts=m.points.map(p=>p.join(",")).join(" ");
 svg.innerHTML=`<rect class="sea" x="0" y="0" width="1000" height="500"></rect><polygon points="${pts}"></polygon>
 <circle class="city" cx="365" cy="235" r="6"/><text x="375" y="230">ROMA</text>
 <circle class="city" cx="690" cy="275" r="6"/><text x="700" y="270">CONSTANTINOPOLIS</text>
 <circle class="city" cx="515" cy="170" r="5"/><text x="525" y="165">DALMATIA</text>
 <text x="55" y="55" style="font-size:26px">IMPERIVM ROMANVM · ${key}</text>`;
 document.querySelector("#mapCaption").textContent=m.caption;
 document.querySelectorAll(".map-btn").forEach(b=>b.classList.toggle("active",b.dataset.year===key));
}
function renderMapControls(){
 const c=document.querySelector("#mapControls");
 Object.keys(mapData).forEach(k=>{const b=document.createElement("button");b.className="map-btn";b.dataset.year=k;b.textContent=k;b.onclick=()=>drawMap(k);c.appendChild(b)});
}

search.oninput=renderEmperors;filter.onchange=renderEmperors;
document.querySelector("#close").onclick=()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""};
modal.addEventListener("click",e=>{if(e.target.classList.contains("modal-bg"))document.querySelector("#close").click()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("show"))document.querySelector("#close").click()});
document.querySelector("#menu").onclick=()=>document.querySelector("#nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>document.querySelector("#nav").classList.remove("open"));
window.addEventListener("scroll",()=>{const h=document.documentElement;document.querySelector("#progress").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"});

renderEmperors();renderDynasties();
document.querySelector("#coinGrid").innerHTML=media(coins);
document.querySelector("#artGrid").innerHTML=media(art,true);
renderWars();renderTimeline();renderMapControls();drawMap("117 AD");
