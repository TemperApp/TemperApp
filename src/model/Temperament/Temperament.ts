import NotesMap from "../Note/NotesMap";
import EqualTemperament from "./Equal";

export type Temperament = {
  idTemperament: number,
  name: string,
  nameFR: string,
  deviation: NotesMap<number>,
  cpExp5th: NotesMap<string>,
  csExp3rd: NotesMap<string>,
  procedure: string,
  period : string,
  theorist : string,
  geographicalArea: string,
  nature: string,
  structuralParticularity: string,
  sources: Array<DataSources>,
  soundReferences: Array<DataSound>,
  commentary: string,
};

export type DataSources = {
  author: string, 
  book: string, 
  title:string, 
  other: string, 
  date: string, 
  page: string, 
  url:string,
};

export type DataSound = {
  img?: string,
  title:string, 
  url:string,
};

export const defaultTemperaments: Array<Temperament> = [
  EqualTemperament,
  {
    idTemperament: 2,
    name: "Vallotti",
    nameFR: "Vallotti",
    deviation: {
      C:        5.865,
      C_sharp:  0.000,
      D:        1.955,
      E_flat:   3.910,
      E:       -1.955,
      F:        7.820,
      F_sharp: -1.955,
      G:        3.910,
      G_sharp:  1.955,
      A:        0.000,
      B_flat:   5.865,
      B:       -3.910,
    },
    cpExp5th: {
      F_sharp: "0",
      C_sharp: "0",
      G_sharp: "0",
      E_flat:  "0",
      B_flat:  "0",
      F:       "-1/6",
      C:       "-1/6",
      G:       "-1/6",
      D:       "-1/6",
      A:       "-1/6",
      E:       "-1/6",
      B:       "0",
    },
    csExp3rd: {
      F_sharp: "+11/11",
      C_sharp: "+11/11",
      G_sharp: "+9/11",
      E_flat:  "+7/11",
      B_flat:  "+5/11",
      F:       "+3/11",
      C:       "+3/11",
      G:       "+3/11",
      D:       "+5/11",
      A:       "+7/11",
      E:       "+9/11",
      B:       "+11/11",
    },
    procedure: "A4;A4-A3;A3-F3;{on accorde les quintes pures à gauche de F}F3-Bb3;Bb3-Eb4;Eb4-G#3;G#3-C#4;C#4:A3;C#4-F#3;F#3-B3;B3-E4;E4:A3;A3-D4;D4-G3;G3-C4;C4:F3;F#3-F#4;G3-G4;G#3-G#4;",
    theorist : "Francesco Vallotti (1697-1780)",
    period : "XVIIIe siècle",
    geographicalArea: "Italie du Nord",
    nature: "1/6 de comma pythagoricien",
    structuralParticularity: "Six quintes tempérées au 1/6 de comma pythagoricien relient les notes naturelles, les six autres sont pures.",
    sources: [
      {author: "", book: "Wikipedia - Temperament de Vallotti (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Temp%C3%A9rament_de_Vallotti"},
      {author: "", book: "Wikipedia - Francesco Vallotti (FR) ", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Francesco_Antonio_Vallotti"},
      {author: "", book: "Wikipedia - Francesco Vallotti (EN) ", title: "", other: "", date: "", page: "", url: "https://en.wikipedia.org/wiki/Francesco_Antonio_Vallotti"},
      {author: "Francesco Antonio Vallotti", book: "Trattato della musica moderna", title:"", other: "inédit du temps de Vallotti. Zanini", date: "1950", page: "", url:""},
      {author: "Barbieri, Patrizio,", book: "Acustica accordatura e temperamento nell'illuminismo veneto.", title:"", other: " Insituto di Paleografia Musicale, Torre d'Orfeo, Roma", date: "1987", page: "", url:""},
    ],
    soundReferences: [
      {title: "Francesco Antonio Vallotti (1697-1780) Lamentazioni del Profeta", url: "https://www.youtube.com/watch?v=TDCpdNOJC5s"},
      {title: "Francesco A. Vallotti: Lezione II per il Venerdì Santo for alto, violoncello obbligato & b.c.", url: "https://www.youtube.com/watch?v=hw1O5t_Rrhg"}],
    commentary: "Nous proposons la lecture la plus partagée bien que certainement simplifiée de l'accord de Vallotti qui répartit lui-même le comma syntonique, selon la théorie italienne du XVIIIe siècle. L'accroissement des tierces majeures est parfaitement équilibré vers les dièses et vers les bémols.",
  },{
    idTemperament: 3,
    name: "Meantone 1/4 G#Eb",
    nameFR: "Mésotonique",
    deviation: {
      C:        10.263,
      C_sharp: -13.686,
      D:         3.420,
      E_flat:   20.528,
      E:        -3.422,
      F:        13.685,
      F_sharp: -10.265,
      G:         6.842,
      G_sharp: -17.108,
      A:         0.000,
      B_flat:   17.106,
      B:        -6.843,
    },
    cpExp5th: {
      F_sharp: "-1/4.36",
      C_sharp: "-1/4.36",
      G_sharp: "+1/0.66",
      E_flat:  "-1/4.36",
      B_flat:  "-1/4.36",
      F:       "-1/4.36",
      C:       "-1/4.36",
      G:       "-1/4.36",
      D:       "-1/4.36",
      A:       "-1/4.36",
      E:       "-1/4.36",
      B:       "-1/4.36",
    },
    csExp3rd: {
      F_sharp: "21/11",
      C_sharp: "21/11",
      G_sharp: "21/11",
      E_flat:  "0",
      B_flat:  "0",
      F:       "0",
      C:       "0",
      G:       "0",
      D:       "0",
      A:       "0",
      E:       "0",
      B:       "21/11",
    },
    procedure : "A4;A4-A3;A3-F3;F3-F4;A3-C#4;C#4:F4;{on divise la tierce F-A en quatre quintes tempérées à -1/4 de Comma syntonique comma}F3-C4;C4-G3;G3-G4;G3-D4;A3:D4;{on construit les tierces pures sur les notes accordées}C4-E4;E4:A3;E4-G#4;G#4-G#3;G#3:C4;G3-B3;B3:E4;B3-Eb4;Eb4:G4;D4-F#4;F#4-F#3;F#3-Bb3;Bb3:D4;",
    theorist : "Pietro Aaron (1485-1545)",
    period : "décrit au début du XVIe siècle, on présume une utilisation dès le XVe siècle. Son application est avérée sur l'orgue pendant la première moitié du XVIIIe siècle.",
    geographicalArea: "plusieurs sources importantes en dehors de l'Italie (Praetorius, Mersenne) laissent à penser que cet accord est très tôt utilisé dans toute l'Europe.",
    nature: "Comma syntonique",
    structuralParticularity: "11 quintes sont diminuées d'un quart de comma syntonique. La douzième, l'intervalle résiduel entre sol# et mib, excède la valeur pure. Le système mésotonique classique produit huit tierces majeures pures. Chaque octave comporte 2 tierces pures et un intervalle résiduel (une quarte diminuée), excédant d’un comma enharmonique (2 ÷ (5/4)^3 = 41,05¢).",
    sources: [
      {author: "", book: "Wikipedia - Temperament Mésotonique (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Temp%C3%A9rament_m%C3%A9sotonique"},
      {author: "", book: "Wikipedia - Pietro Aaron (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Pietro_Aaron"},
      {author: "Pietro Aaron", book: "Toscanello de la musica", title:"", other: ", Venise", date: "1523", page: "", url:"https://imslp.org/wiki/Thoscanello_de_la_musica_(Aron,_Pietro)"},
      {author: "Lindley, Mark.", book: "Proceedings of the Royal Musical Association 102", title:"Fifteenth-Century Evidence for Meantone Temperament", other: "Torre d'Orfeo, Roma", date: "1976", page: ", p. 37-51", url:""},
    ],
    soundReferences: [
      {title: "MA Cavazzoni : Ricercar III L Tamminga San Petronio Bologna", url: "https://www.youtube.com/watch?v=KHlne0rAnTg"},
      {title: "L’accord mésotonique réalisé sur l’instrument", url: "http://blog-clavicorde-lie.ch/laccord-mesotonique-realise-sur-linstrument/"},
      {title: "Pietro Aron 1/4 Syntonic Meantone Temperament", url: "https://www.youtube.com/watch?v=jcAIh1V2Zz8"},
      {title: "Pietro Aron (1480- dopo il 1545) - Io non posso più durare a 4", url: "https://www.youtube.com/watch?v=e83oOCnH_3w"},
    ],
    commentary: "",
  },
  {
    idTemperament: 4,
    name: "Rameau 1726 en Sib",
    nameFR: "Rameau 1726 en Sib",
    deviation: {
      C:       10.265,
      C_sharp:  0.578,
      D:        3.422,
      E_flat:  13.375,
      E:       -3.422,
      F:       13.686,
      F_sharp: -8.487,
      G:        6.843,
      G_sharp:  7.865,
      A:        0.000,
      B_flat:  17.108,
      B:       -6.843,
    },
    cpExp5th: {
      F_sharp: "+1/3.3",
      C_sharp: "+1/4.4",
      G_sharp: "+1/6.6",
      E_flat:  "+1/13.19",
      B_flat:  "-1/4.36",
      F:       "-1/4.36",
      C:       "-1/4.36",
      G:       "-1/4.36",
      D:       "-1/4.36",
      A:       "-1/4.36",
      E:       "-1/4.36",
      B:       "-1/6.52",
    },
    csExp3rd: {
      F_sharp: "20/11",
      C_sharp: "14/11",
      G_sharp: "8/11",
      E_flat:  "4/11",
      B_flat:  "0",
      F:       "0",
      C:       "0",
      G:       "0",
      D:       "1/11",
      A:       "7/11",
      E:       "13/11",
      B:       "17/11",
    },
    procedure: "A4;A4-A3;A3-F3;{On divise la tierce F3-A3 en quatre quintes à -¼Cs }F3-C4;C4-G3;G3-D4;D4:A3;{On construit les tierces pures du tempérament}D4-Bb3;C4-E4;G3-B3;{On élargit progressivement les quintes à gauche du Sib}Bb3-Eb4;Eb4-G#3;G#3-C#4;{Même si elle est atténuée, F#-C# reste notre “loup”, ici tempérée à env. +1/3Cs, nous allons donc finir cette procédure en revenant à Si et en accordant B-F# à -1/6Cs. La quinte du loup sera donc bien le résultat de l’accord. Attention! B-F# est affaiblie et non élargie}B3-F#3;F3-F4;F#3-F#4;G3-G4;G#3-G#4;",
    theorist : "Jean-Philippe Rameau (1683-1764)",
    period : "XVIIIe siècle",
    geographicalArea: "France",
    nature: "Comma syntonique",
    structuralParticularity: "Sept quintes sont abaissées d’un quart de comma syntonique. Les autres sont augmentées de quantités variables selon des petits compléments.",
    sources: [
      {author: "", book: "Wikipedia - Jean-Philippe Rameau (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Jean-Philippe_Rameau"},
      {author: "Jean-Philippe Rameau,", book: "Nouveau système de musique théorique", title:"", other: "", date: "1726", page: "", url:"https://gallica.bnf.fr/ark:/12148/btv1b8623246q.image"}
    ],
    soundReferences: [{title: "", url:""}],
    commentary: `Le tempérament de Rameau II, ou tempérament en sib, est identique au précédent mais sa construction se fait à partir du la et non du do. Les quintes de sib à si sont diminuées d’un quart de comma syntonique. La quinte si - fa# est diminuée d’un quart de comma et augmentée d’une valeur δ. Les quatre quintes restantes se répartissent l’excédent.\bRameau cite brièvement une alternative à sa première description : « Pour que les Intervalles conservent toute la justesse possible dans les Modulations les plus usitées, il faut commencer la Partition par Si B-mol, & ne rendre pour lors les Quintes un peu plus justes, que depuis Si à Fa# ». Plusieurs commentateurs ont considéré qu'il s'agissait d'une transposition de sa première formule.

De nombreuses interprétations sont possible du texte de Jean-Philippe Rameau, les créateurs de TemperApp se sont mis d’accord sur cette version avec le projet d’en inclure d’autres ultérieurement`,
  },
  {
    idTemperament: 5,
    name: "Rameau 1726 en Do",
    nameFR: "Rameau 1726 en Do",
    deviation: {
      C:        10.265,
      C_sharp: -13.686,
      D:         3.422,
      E_flat:   -6.265,
      E:        -3.422,
      F:         6.532,
      F_sharp: -10.265,
      G:         6.843,
      G_sharp: -15.330,
      A:         0.000,
      B_flat:    1.022,
      B:        -6.843,
    },
    cpExp5th: {
      F_sharp: "-1/4.36",
      C_sharp: "-1/6.52",
      G_sharp: "+1/3.3",
      E_flat:  "+1/4.4",
      B_flat:  "+1/6.6",
      F:       "+1/13.19",
      C:       "-1/4.36",
      G:       "-1/4.36",
      D:       "-1/4.36",
      A:       "-1/4.36",
      E:       "-1/4.36",
      B:       "-1/4.36",
    },
    csExp3rd: {
      F_sharp: "13/11",
      C_sharp: "17/11",
      G_sharp: "20/11",
      E_flat:  "14/11",
      B_flat:  "8/11",
      F:       "4/11",
      C:       "0",
      G:       "0",
      D:       "0",
      A:       "0",
      E:       "1/11",
      B:       "7/11",
    },
    procedure: "A4;A4-A3;A3-C#;{Nous allons diviser la tierce La3-Do#4 en quatre quintes égales à -1/4Cs, vous pouvez accorder à l’oreille et contrôler avec la suite de la procédure};A3-E4;E4-B3;B3-F#3;F#3-C#4;F#3-F#4;{Nous allons construire des tierces pures inférieures en parcourant le cycle vers les bémols};F#4-D4;B3-G3;E4-C4;{A partir du Do et vers les bémols, les quintes sont progressivement élargies, les quartes rétrécies. Nous commençons par construire Fa3 et vérifier que la quinte Fa-Do à environ +1/12Cs}A3-F3;F3:C4;F3-Bb3;Bb3-Eb4;{Même si elle est atténuée, Sol#-Mib reste notre “loup”, ici tempérée à env. +1/3Cs, nous allons donc finir cette procédure en revenant à Do# et en accordant Do#-Sol# à -1/6Cs. La quinte du loup sera donc bien le résultat de l’accord. Attention! C#-G# est affaiblie et non élargie}C#4-G#3;G#3:Eb4;F3-F4;G3-G4;G#3-G#4;",
    theorist : "Jean-Philippe Rameau (1683-1764)",
    period : "XVIIIe siècle",
    geographicalArea: "France",
    nature: "Comma syntonique",
    structuralParticularity: "Sept quintes sont abaissées d’un quart de comma syntonique. Les autres sont augmentées de quantités variables selon des petits compléments.",
    sources: [
      {author: "", book: "Wikipedia - Jean-Philippe Rameau (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Jean-Philippe_Rameau"},
      {author: "Jean-Philippe Rameau,", book: "Nouveau système de musique théorique", title:"", other: "", date: "1726", page: "", url:"https://gallica.bnf.fr/ark:/12148/btv1b8623246q.image"}
    ],
      soundReferences: [{title: "", url:""}],
    commentary: "Jean-Philippe Rameau a longuement étudié les problèmes théoriques de la musique. Il a proposé deux tempéraments, l’un “pour avantager les tonalités avec bémols”, dans lesquels les sept quintes sont diminuées d’un quart de comma (Nouveau système de musique théorique, Paris, 1726). Les cinq quintes restantes se répartissent l’excédent. \b Comme la plupart des descriptions des tempéraments français (ou tempérament ordinaire), celle de Rameau est imprécise et sujette à interprétation.\b Le problème d’interprétation qui se pose est de savoir sur quelles quintes s’effectue cette répartition. On se demande aussi si la répartition linéaire doit s’effectuer sur quatre ou cinq quintes. Dans le premier tempérament, les notes vont de quinte en quinte de do à mi dièse. C’est pourquoi, on l’appelle aussi tempérament en do. La partition est citée par plusieurs auteurs. ",
  },
  {
    idTemperament: 6,
    name: "Bach/Kellner",
    nameFR: "Bach/Kellner",
    deviation: {
      C:        8.211,
      C_sharp: -1.564,
      D:        2.737,
      E_flat:   2.346,
      E:       -2.737,
      F:        6.256,
      F_sharp: -3.519,
      G:        5.474,
      G_sharp:  0.391,
      A:        0.000,
      B_flat:   4.301,
      B:       -0.782,
    },
    cpExp5th: {
      F_sharp: "0",
      C_sharp: "0",
      G_sharp: "0",
      E_flat:  "0",
      B_flat:  "0",
      F:       "0",
      C:       "-1/5",
      G:       "-1/5",
      D:       "-1/5",
      A:       "-1/5",
      E:       "0",
      B:       "-1/5",
    },
    csExp3rd: {
      F_sharp: "11/11",
      C_sharp: "11/11",
      G_sharp: "11/11",
      E_flat:  "9/11",
      B_flat:  "6/11",
      F:       "4/11",
      C:       "1/11",
      G:       "4/11",
      D:       "4/11",
      A:       "6/11",
      E:       "9/11",
      B:       "9/11",
    },
    procedure: "A4;A4-A3;A3-F3;F3-C4;{Les quatre quintes composant C-E sont tempérées à -⅕ Cp, on propose d’accorder Do4-Mi4 et de vérifier d’emblée le battement la3-mi4, puis d’accorder les trois quintes restantes do-sol-ré-la}C4-E4;E4:A3;C4-G3;G3-D4;D4:A3;{Les quintes sont pures à gauche de Fa}F3-Bb3;Bb3-Eb4;Eb4-G#3;G#3-C#4;C#4-F#3;{Pour finir, la quinte pure mi-si résulte en une quinte si-fa# tempérée à -⅕Cp }E4-B3;B3:F#3;F3-F4;F#3-F#4;G3-G4;G#3-G#4;",
    theorist : "Herbert Anton Kellner (1936-2003) - Jean-Sébastien Bach (1685-1750)",
    period : "XVIIIe-XIXe siècles",
    geographicalArea: "Allemagne",
    nature: "Comma pythagoricien",
    structuralParticularity: "Cinq quintes sont abaissées d’un 1/5  de comma pythagoricien, les 7 autres sont pures.",
    sources: [
      {author: "", book: "Harpischords (EN)", title: "", other: "", date: "", page: "", url: "https://www.hpschd.nu/index.html?nav/nav-4.html&t/welcome.html&https://www.hpschd.nu/tech/tmp/kellner.html"},
      {author: "", book: "Wikipedia - Jean-Sébastien Bach (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Jean-S%C3%A9bastien_Bach"},
      {author: "Herbert Anton Kellner,", book: "The Tuning of my Harpsichord Verlag Das Musikinstrument,", title:"", other: "Frankfurt am Main", date: "1980", page: "", url:""}
    ],
    soundReferences: [
      {title: "Kellner", url: "https://www.youtube.com/watch?v=rHvI4Fh-lNY"},
      {title: "Concert de la passion - Les Idées heureuses", url: "https://www.youtube.com/watch?v=dNibEXPBA_w"},
    ],
    commentary: "Nous ne savons pas quel tempérament utilisait Jean-Sébastien Bach et quel était donc son clavier “bien tempéré”. Des musicologues théoriciens du XXe siècle ont formulé plusieurs propositions : Herbert Kelletat (1960), Herbert Kellner (1980), Bradley Lehman (2005). Herbert Kellner (1980), partant de données symboliques et numériques tirées des œuvres de J. S. Bach, propose un tempérament assez proche de Werckmeister. Une de ses particularités est que la quinte do-sol bat à la même vitesse que la tierce do-mi.",
  },
  {
    idTemperament: 7,
    name: "Werckmeister I(III)",
    nameFR: "Werckmeister I(III)",
    deviation: {
      C:       11.730,
      C_sharp:  1.955,
      D:        3.910,
      E_flat:   5.865,
      E:        1.955,
      F:        9.775,
      F_sharp:  0.000,
      G:        7.820,
      G_sharp:  3.910,
      A:        0.000,
      B_flat:   7.820,
      B:        3.910,
    },
    cpExp5th: {
      F_sharp: "0",
      C_sharp: "0",
      G_sharp: "0",
      E_flat:  "0",
      B_flat:  "0",
      F:       "0",
      C:       "-1/4",
      G:       "-1/4",
      D:       "-1/4",
      A:       "0",
      E:       "0",
      B:       "-1/4",
    },
    csExp3rd: {
      F_sharp: "11/11",
      C_sharp: "11/11",
      G_sharp: "11/11",
      E_flat:  "8/11",
      B_flat:  "5/11",
      F:       "2/11",
      C:       "2/11",
      G:       "5/11",
      D:       "5/11",
      A:       "8/11",
      E:       "8/11",
      B:       "8/11",
    },
    procedure: "A4;A4-A3;{On tempère la tierce Fa-La à 3/11 Cs soit 3 battements par secondes}A3-F3;{On répartit le tempérament de Fa-La de manière égale dans les quatre quintes intérieurs}F3-C4;C4-G3;G3-D4;{La quatrième quinte sert de “preuve”}D4:A3;{on accorde les quintes pures à gauche de Fa}F3-Bb3;Bb3-Eb4;Eb4-G#3;G#3-C#4;{La tierce La-Do# sert de preuve, elle bat comme dans le tempérament égal }C#4:A3;{On accorde les deux dernières quintes pures}C#4-F#3;F#3-B3;{On accorde le Mi de manière à ce que La-Mi  soit tempérée autant que Mi-Si. Leurs battements sont dans le rapport 3/2}B3-E4;E4:A3;{On recopie les notes entre Fa4 et Sol#4}F3-F4;F#3-F#4;G3-G4;G#3-G#4",
    theorist : "Andreas Werckmeister (1645-1706)",
    period : "XVIIe siècle",
    geographicalArea: "Allemagne",
    nature: "Comma pythagoricien",
    structuralParticularity: "Quatre quintes sont diminuées d’un quart de comma pythagoricien. Les huit autres quintes sont pures.",
    sources: [
      {author: "", book: "Wikipedia - Temperament Werckmeister (EN)", title: "", other: "", date: "", page: "", url: "https://en.wikipedia.org/wiki/Werckmeister_temperament"},
      {author: "", book: "Wikipedia - Andreas Werckmeister (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Andreas_Werckmeister"},
      {author: "", book: "Wikipedia - Andreas Werckmeister (EN)", title: "", other: "", date: "", page: "", url: "https://en.wikipedia.org/wiki/Andreas_Werckmeister"},
      {author: "Andreas Werckmeister,", book: "Musikalische Temperatur", title:"", other: "", date: "1691", page: "", url:"https://imslp.org/wiki/Musicalische_Temperatur_(Werckmeister%2C_Andreas)"},
      {author: "Andreas Werckmeister,", book: "Orgel Probe", title:"", other: "", date: "", page: "1681", url:"https://imslp.org/wiki/Orgel-Probe_(Werckmeister,_Andreas) "}
    ],
    soundReferences: [{title: "", url:""}],
    commentary: "Très tôt appelé le tempérament de Werckmeister, c'est l'archétype du tempérament d'esthétique allemande. Il est encore cité par Türk en 1809 comme un bon tempérament inégal. C'est le premier tempérament inégal circulant qui ait été décrit : les plus grandes tierces majeures sont pythagoriciennes, à la limite prescrite par Werckmeister pour que toutes les tonalités puissent être jouées.",
  },
  {
    idTemperament: 8,
    name: "Werckmeister III(V)",
    nameFR: "Werckmeister III(V)",
    deviation: {
      C:        0.000,
      C_sharp: -3.910,
      D:        3.910,
      E_flat:   0.000,
      E:       -3.910,
      F:        3.910,
      F_sharp:  0.000,
      G:        1.955,
      G_sharp: -7.820,
      A:        0.000,
      B_flat:   1.955,
      B:       -1.955,
    },
    cpExp5th: {
      F_sharp: "-1/4",
      C_sharp: "-1/4",
      G_sharp: "+1/4",
      E_flat:  "0",
      B_flat:  "0",
      F:       "-1/4",
      C:       "0",
      G:       "0",
      D:       "-1/4",
      A:       "-1/4",
      E:       "0",
      B:       "0",
    },
    csExp3rd: {
      F_sharp: "8/11",
      C_sharp: "11/11",
      G_sharp: "11/11",
      E_flat:  "8/11",
      B_flat:  "8/11",
      F:       "5/11",
      C:       "5/11",
      G:       "5/11",
      D:       "5/11",
      A:       "5/11",
      E:       "5/11",
      B:       "8/11",
    },
    procedure: "A4;A4-A3;A3-F3;F3-Bb3;Bb3-Eb4;Eb4-Eb3;Eb3-G3;F3-C4;C4:G3;G3-D4;D4:A3;A3-E4;E4:C3;E4-E3;E3-B3;G3:B3;B3-F#3;F#3-C#4;C#4:A3;C#4-G#3;G#3:Eb4;F3-F4;F#3-F#4;G3-G4;G#3-G#4;",
    theorist : "Andreas Werckmeister (1645-1706)",
    period : "XVIIe siècle",
    geographicalArea: "Allemagne",
    nature: "Comma pythagoricien",
    structuralParticularity: "Andreas Werckmeister (1645-1706) a publié son Musikalische Temperatur en 1691. Le troisième tempérament de Werckmeister est décrit comme le cinquième dans Orgel Probe, que Werckmeister a publié en 1681. Dans ce système, cinq quintes sont diminuées d’un quart de comma pythagoricien, une quinte est augmentée d’un quart de comma pythagoricien. Six quintes sont pures. Le système n’a aucune tierce pure.",
    sources: [
      {author: "", book: "Wikipedia - Temperament Werckmeister (EN)", title: "", other: "", date: "", page: "", url: "https://en.wikipedia.org/wiki/Werckmeister_temperament"},
      {author: "", book: "Wikipedia - Andreas Werckmeister (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Andreas_Werckmeister"},
      {author: "", book: "Wikipedia - Andreas Werckmeister (EN)", title: "", other: "", date: "", page: "", url: "https://en.wikipedia.org/wiki/Andreas_Werckmeister"},
      {author: "Andreas Werckmeister,", book: "Musikalische Temperatur", title:"", other: "", date: "1691", page: "", url:"https://imslp.org/wiki/Musicalische_Temperatur_(Werckmeister%2C_Andreas)"},
      {author: "Andreas Werckmeister,", book: "Orgel Probe", title:"", other: "", date: "", page: "1681", url:"https://imslp.org/wiki/Orgel-Probe_(Werckmeister,_Andreas) "}
    ],
    soundReferences: [
      {title: "Werckmeister III", url: "https://www.youtube.com/watch?v=kAlnr5nmHC8"},
      {title: "J S Bach BWV 565 (I) Temperament: Werckmeister III", url: "https://www.youtube.com/watch?v=CeaGCYsy6iU"},
    ],
    commentary: "Ce tempérament circulant présente sur les tonalités avec peu d'altérations des tierces majeures plus grandes qu'en Werckmeister I (III).",
  },
  {
    idTemperament: 9,
    name: "Pythagorean G#Eb",
    nameFR: "Pythagoricien G#Eb",
    deviation: {
      C:        -5.865,
      C_sharp:   7.820,
      D:        -1.955,
      E_flat:  -11.730,
      E:         1.955,
      F:        -7.820,
      F_sharp:   5.865,
      G:        -3.910,
      G_sharp:   9.775,
      A:         0.000,
      B_flat:   -9.775,
      B:         3.910,
    },
    cpExp5th: {
      F_sharp: "0",
      C_sharp: "0",
      G_sharp: "-1/1",
      E_flat:  "0",
      B_flat:  "0",
      F:       "0",
      C:       "0",
      G:       "0",
      D:       "0",
      A:       "0",
      E:       "0",
      B:       "0",
    },
    csExp3rd: {
      F_sharp: "-1/11",
      C_sharp: "-1/11",
      G_sharp: "-1/11",
      E_flat:  "11/11",
      B_flat:  "11/11",
      F:       "11/11",
      C:       "11/11",
      G:       "11/11",
      D:       "11/11",
      A:       "11/11",
      E:       "11/11",
      B:       "-1/11",
    },
    procedure: "",
    theorist : "Attribué à Pythagore (env. 580-av. 495 av JC) - Henri Arnault de Zwolle (vers 1400-1466)",
    period : "Moyen Age",
    geographicalArea: "Europe",
    nature: "Comma pythagoricien",
    structuralParticularity: "Dans l’accord pythagoricien, toutes les quintes sont pures sauf une, appelée la quinte du loup. Selon le choix de l’accord, ici sol#-mi bémol, la quinte “sol# -mi b” est diminuée d’un comma pythagoricien.",
    sources: [
      {author: "", book: "Wikipedia - Accord Pythagoricien (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Accord_pythagoricien"},
      {author: "", book: "Wikipedia - Pythagore (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Pythagore"},
      {author: "", book: "Wikipedia - Henri Arnault de Zwolle (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Henri_Arnault_de_Zwolle"},
      {author: "Henri Arnault de Zwolle,", book: "Descriptio instrumenti cujusdam astronomici,", title:"", other: "", date: "entre 1436 et 1461", page: "", url:"https://gallica.bnf.fr/ark:/12148/btv1b90725989/f134.item.r=7295"},
      {author: "Donald H. Boalch,", book: "Makers of the harpsichord and clavichord 1440-1840, ", title:"", other: "Oxford, Oxford University Press,", date: "1974", page: "", url: ""},
    ],
    soundReferences: [
      {title: "Kleines harmonisches Labyrinth in fünf Stimmungen (Temperaturen)", url: "https://www.youtube.com/watch?v=mgEL3N55fwI"},],
    commentary: "C'est l'échelle de référence pour l'intonation jusqu'à la Renaissance. Son adaptation au clavier nécessite de décider de la place de la quinte du loup. Conventionnellement, elle est mise entre sol# et mib.\bPour privilégier les modulations dans les tonalités voisines en conservant des quintes pures, il suffit de choisir un accord des quintes de sorte que la quinte du loup ne soit jamais jouée. Si les modulations parcourent tout le spectre des tonalités, il faudrait envisager deux accords de clavecin ou un système adaptatif.",
     },
  {
    idTemperament: 10,
    name: "Kirnberger III (1779)",
    nameFR: "Kirnberger III (1779)",
    deviation: {
      C:       10.264,
      C_sharp:  0.489,
      D:        3.421,
      E_flat:   4.399,
      E:       -3.422,
      F:        8.309,
      F_sharp:  0.488,
      G:        6.842,
      G_sharp:  2.444,
      A:        0.000,
      B_flat:   6.354,
      B:       -1.467,
    },
    cpExp5th: {
      F_sharp: "-1/12",
      C_sharp: "0",
      G_sharp: "0",
      E_flat:  "0",
      B_flat:  "0",
      F:       "0",
      C:       "-1/4.36",
      G:       "-1/4.36",
      D:       "-1/4.36",
      A:       "-1/4.36",
      E:       "0",
      B:       "0",
    },
    csExp3rd: {
      F_sharp: "10/11",
      C_sharp: "11/11",
      G_sharp: "11/11",
      E_flat:  "8/11",
      B_flat:  "5/11",
      F:       "3/11",
      C:       "0",
      G:       "3/11",
      D:       "5/11",
      A:       "7/11",
      E:       "10/11",
      B:       "10/11",
    },
    procedure: "A4;A4-A3;{Pour Kirnberger III, le plus simple est d’accorder pure la tierce F3-A3 que l’on divise en quatre quintes égales à -¼Cs puis C4-E4 pure et enfin de réaccorder F3 comme quinte pure sous C4. L’application ne permettant pas de revenir sur une note déjà accordée, on propose d’accorder F3 directement à sa valeur de tierce à tempérée à 4/11 Cs sous A3. L'utilisateur peut utiliser cette procédure comme preuve}A3-F3;F3-C4;C4-E4;E4:A3;{division de C4-E4 en quatre quintes égales à -¼Cs }C4-G3;G3-D4;D4:A3;{4 quintes pures à gauche de F puis 2 à droite de E résultent en F#-C# au tempérament égal à -1/12Cp}F3-Bb3;Bb3-Eb4;Eb4-G#3;G#3-C#4;E4-B3;B3-F#3;F#3:C#4;F3-F4;F#3-F#4;G3-G4;G#3-G#4;",
    theorist : "Johann Philipp Kirnberger (1721-1783)",
    period : "XVIIIe siècle",
    geographicalArea: "Allemagne",
    nature: "Comma syntonique",
    structuralParticularity: "Dans le tempérament de Kirnberger III, quatre quintes sont diminuées d’un quart de comma syntonique, une quinte est diminuée du schisma restant (de sorte que les diminutions correspondent au comma pythagoricien). Les sept autres quintes sont pures.",
    sources: [
      {author: "", book: "Wikipedia - Temperament Kirnberger (EN)", title: "", other: "", date: "", page: "", url: "https://en.wikipedia.org/wiki/Kirnberger_temperament"},
      {author: "", book: "Wikipedia - Johann Philipp Kirnberger (FR)", title: "", other: "", date: "", page: "", url: "https://fr.wikipedia.org/wiki/Johann_Philipp_Kirnberger"},
      {author: "J.Ph. Kirnberger,", book: "Die Kunst des reinen Satzes", title:"", other: "", date: "1771, 1779", page: "", url:"https://imslp.org/wiki/Die_Kunst_des_reinen_Satzes_in_der_Musik_(Kirnberger%2C_Johann_Philipp)"}
    ],
    soundReferences: [{title: "", url:""}],
    commentary: "Kirnberger a proposé trois tempéraments différents dans lesquels il répartit le comma syntonique sur une, deux ou quatre quintes. La particularité de ses solutions est qu’elles répartissent indépendamment le schisma sur une quinte.\b Plus précisément, après avoir décrit deux formules : la première qui laisse le comma syntonique non réparti sur la quinte ré-la, et la seconde qui le partage sur ré-la et la-mi, Kirnberger propose en 1779, dans une lettre à J. N. Forkel, un troisième tempérament dans lequel la répartition se fait sur les quatre quintes entre do et mi.",
  },
  {
    idTemperament: 11,
    name: "Bertier 'elliptical'",
    nameFR: "Bertier 'elliptique'",
    deviation: {
      C:        5.341,
      C_sharp:  0.000,
      D:        1.955,
      E_flat:   3.910,
      E:       -1.431,
      F:        5.865,
      F_sharp: -1.431,
      G:        3.910,
      G_sharp:  1.955,
      A:        0.000,
      B_flat:   5.341,
      B:       -1.955,
    },
    cpExp5th: {
      F_sharp: "-1/44.77",
      C_sharp: "0",
      G_sharp: "0",
      E_flat:  "-1/44.77",
      B_flat:  "-1/16.39",
      F:       "-1/9.46",
      C:       "-1/6.93",
      G:       "-1/6",
      D:       "-1/6",
      A:       "-1/6.93",
      E:       "-1/9.46",
      B:       "-1/16.39",
    },
    csExp3rd: {
      F_sharp: "10/11",
      C_sharp: "10/11",
      G_sharp: "9/11",
      E_flat:  "7/11",
      B_flat:  "5/11",
      F:       "4/11",
      C:       "4/11",
      G:       "4/11",
      D:       "5/11",
      A:       "7/11",
      E:       "9/11",
      B:       "10/11",
    },
    procedure: "A4;A4-A3;A3-F3;F3-C4;C4-G3;G3-D4;D4:A3;{On alterne simplement l’accord d’une quinte et la preuve de sa tierce inférieure}A3-E4;E4:C4;E4-B3;B3:G3;{On construit maintenant F# et Bb. Les Tierces Bb-D et D-F# étant tempérées de la même manière, leurs battements seront dans le rapport 4/5}B3-F#4;F#4:D4;F3-Bb3;Bb3:D4;Bb3-Eb4;Eb4-G#3;G#3-C#4;{La Tierce A-C# est au tempérament égal à +7/11 Cs}C#4:A3;C#4:F4;F4-F3;G3-G4;G#3-G#4;",
    theorist : "Jérôme BERTIER (1986-)",
    period : "XVIII",
    geographicalArea: "Allemagne",
    nature: "Comma pythagoricien",
    structuralParticularity: "Le tempérament Elliptique est un “bien-tempéré” théorique dans lequel les tierces majeures sont progressivement plus tempérées de Do Majeur à Fa#Majeur, et symétriquement. Une tonalité à 3# aura la même qualité de tierce qu’une tonalité à 3 bémols. Ce tempérament met en valeur le rapport entre les couleurs tonales utilisé notamment par J.S Bach dans le Clavier Bien Tempéré. C’est une version “lissée” du premier tempérament de Thomas Young.",
    sources: [
      {author: "", book: "Academia - Tempérament Elliptique (FR)", title: "", other: "", date: "", page: "", url: "https://www.academia.edu/10807733/The_Elliptical_Temperament"},
      {author: "Lindley, Mark", book: "A quest for Bach’s ideal style of organ temperament", title:"", other: " in M. Lustig, ed., Stimmungen im 17. und 18.Jahrhundert, Michaelstein, ", date: "1997", page: "", url:"https://www.academia.edu/1134176/A_quest_for_Bach_s_ideal_style_of_organ_temperament"}
    ],
    soundReferences: [{title: "", url:""}],
    commentary: "",
  },
  {
    idTemperament: 12,
    name: "Neidhardt III",
    nameFR: "Neidhardt III",
    deviation: {
      C:        5.865,
      C_sharp:  1.955,
      D:        1.955,
      E_flat:   3.910,
      E:        0.000,
      F:        3.910,
      F_sharp:  1.955,
      G:        3.910,
      G_sharp:  1.955,
      A:        0.000,
      B_flat:   3.910,
      B:        1.955,
    },
    cpExp5th: {
      F_sharp: "-1/12",
      C_sharp: "-1/12",
      G_sharp: "0",
      E_flat:  "-1/12",
      B_flat:  "-1/12",
      F:       "0",
      C:       "-1/6",
      G:       "-1/6",
      D:       "-1/6",
      A:       "-1/12",
      E:       "0",
      B:       "-1/12",
    },
    csExp3rd: {
      F_sharp: "8/11",
      C_sharp: "8/11",
      G_sharp: "9/11",
      E_flat:  "7/11",
      B_flat:  "6/11",
      F:       "5/11",
      C:       "4/11",
      G:       "6/11",
      D:       "7/11",
      A:       "8/11",
      E:       "8/11",
      B:       "8/11",
    },
    procedure: "A4;{pour accorder Neidhardt III, on peut partir d’une tierce Fa-La “Vallotti” et revenir sur le Fa après avoir distribué les quintes. TemperApp ne permettant pas encore de revenir sur une note déjà accordée, nous commencerons par Fa-La directement tempérée à 5/11Cs}A4-A3;A3-F3;{Fa-Do pure, puis on accorde la tierce Do-Mi qui nous permettra de contrôler notre Fa initial}F3-C4;C4-E4;E4:A4;{3 quintes au 1/6ème Cp}C4-G3;G3-D4;D4:A4;{la quarte Mi-La bat 4:3 contre la quinte Ré-La}E4:A4;{On accorde Mi-Sol#, Mi-Si pure puis 3 quintes égales  }E4-E3;E3-G#3;E4-B3;B3-F#4;F#4-C#4;C#4:G#3;{on redescend depuis Fa en contrôlant tierces}F3-Bb3;Bb3:D4;Bb3-Eb4;G3-G4;Eb4:G4;Eb4:G#3;",
    theorist : "Johann Georg Neidhardt (1685-1739)",
    period : "XVIIIe siècle",
    geographicalArea: "Allemagne",
    nature: "Comma pythagoricien",
    structuralParticularity: "Neidhardt décrit quatre tempéraments : “A mon avis, le premier tempérament est principalement pour un village, le deuxième pour une petite bourgade, le troisième pour une grande ville et le quatrième pour la Cour” [J. G. Neidhart, Sectio canonis harmonia, p 20].Le premier tempérament de Neidhart “Für ein Dorf ” (pour un village) possède quatre quintes pures et quatre quintes tempérées. Le troisième tempérament de Neidhardt “Für ein grosse Stadt” (pour une grande ville) à trois quintes pures , six quintes tempérées au sixième ou au douzième de comma pythagoricien.",
    sources: [
      {author: "", book: "Wikipedia - Johann Georg Neidhardt (DE)", title: "", other: "", date: "", page: "", url: " https://de.wikipedia.org/wiki/Johann_Georg_Neidhardt"},
      {author: "Johann Georg Neidhardt,", book: "Sectio canonis harmonia", title:"", other: "", date: "1724", page: "", url:"https://imslp.org/wiki/Sectio_canonis_harmonici_(Neidhardt,_Johann_Georg)"}
    ],
    soundReferences: [{title: "F. Couperin: Ordre 6ème de clavecin in B flat major; Magdalena Baczewska, harpsichord", url:"https://www.youtube.com/watch?v=TkIBx28KIho "}],
    commentary: "Neidhardt a composé entre 1706 et 1734 quatre traités et décrit plus de 20 tempéraments différents. Dans sa Sectio canonis harmonia (1724) Neidhardt décrit quatre tempéraments : “A mon avis, le premier tempérament est principalement pour un village, le deuxième pour une petite bourgade, le troisième pour une grande ville et le quatrième pour la Cour”. La formule souhaitée pour la cour est le tempérament égal, et les trois précédentes s'en rapprochent progressivement. Ces formules complexes et aux sonorités subtiles produisent un écart assez faible entre les tierces majeures les plus consonantes et les plus grandes.",
  },

{
    idTemperament: 13,
    name: "Bach/Jobin",
    nameFR: "Bach/Jobin",
    deviation: {
      C:        10.263,
      C_sharp:  -2.933,
      D:        3.420,
      E_flat:   2.117,
      E:        -3.422,
      F:        8.308,
      F_sharp:  -4.888,
      G:        6.842,
      G_sharp:  -0.978,
      A:        0.000,
      B_flat:   5.213,
      B:        -6.843,
    },
    cpExp5th: {
      F_sharp: "0",
      C_sharp: "0",
      G_sharp: "+1/20.6",
      E_flat:  "+1/20.6",
      B_flat:  "+1/20.6",
      F:       "0",
      C:       "-1/4.36",
      G:       "-1/4.36",
      D:       "-1/4.36",
      A:       "-1/4.36",
      E:       "-1/4.36",
      B:       "0",
    },
    csExp3rd: {
      F_sharp: "12/11",
      C_sharp: "13/11",
      G_sharp: "13/11",
      E_flat:  "9/11",
      B_flat:  "6/11",
      F:       "3/11",
      C:       "0",
      G:       "0",
      D:       "3/11",
      A:       "5/11",
      E:       "8/11",
      B:       "12/11",
    },
    procedure: "C4;{On commence par la tierce pure Do-Mi, qu’on partage en 4 quintes égales}C4-E4;C4-G3;G3-D4;D4-A3;A3:E4;{On rajoute la quinte Mi-Si de même valeur que les précédentes en contrôlant Sol-Si réputée pure}E4-B3;B3:G3;{On accorde trois quintes pures entre Si et Sol#}B3-F#3;F#3-C#4;C#4-G#3;{la tierce Mi-Sol# doit être *tolérable*, pour la contrôler on copie le Mi4 vers le Mi3}E4-E3;E3:G#3;{On établit Do-Fa pure}C4-F3;{On place une quinte *à peine plus grande* sur Fa-Sib puis on répartit l'excédent sur les deux autres quintes. On contrôle les tierces.}F3-Bb3;Bb3:D4;Bb3-Eb4;G3-G4;Eb4:G4;Eb4:G#3;{On recopie les octaves, et le tour est joué! }F3-F4;F#3-F#4;G#3-G#4;A3-A4;",
    theorist : "Emile Jobin, Quentin Blumenroeder",
    period : "XVIIIe siècle",
    geographicalArea: "Allemagne",
    nature: "Comma syntonique",
    structuralParticularity: "Solution proposée par Emile Jobin au problème de l’interprétation du motif arboré par le frontispice de l’édition de 1722 du clavier bien tempéré",
    sources: [
      {author: "", book: "Emile Jobin : article paru dans la revue du Conservatoire de Paris", title: "", other: "", date: "", page: "", url: " https://larevue.conservatoiredeparis.fr/index.php?id=1859"},
      {author: "Johann Georg Neidhardt,", book: "Sectio canonis harmonia", title:"", other: "", date: "1724", page: "", url:"https://imslp.org/wiki/Sectio_canonis_harmonici_(Neidhardt,_Johann_Georg)"}
    ],
    soundReferences: [{title: "", url:""}],
    commentary: "",
  },

];
