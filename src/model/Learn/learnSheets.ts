export type LearnSheet = {
  id: string,
  label: string,
  content: string,
};

export const learnSheets: Array<LearnSheet> = [
  {
    id: "definition",
    label: "Définition",
    content: `### Le tempérament… selon Jean-Jacques Rousseau
  > « Opération par laquelle, au moyen dʼune légère altération dans les Intervalles, faisant évanouir la différence de deux sons voisins, on les confond en un, qui, sans choquer lʼoreille, forme les Intervalles respectifs de lʼun & de lʼautre. Par cette opération lʼon simplifie lʼEchelle, en diminuant le nombre des Sons nécessaires. Sans le Tempérament, au lieu de douze Sons seulement que contient lʼOctave, il en faudroit plus de soixante pour moduler dans tous les Tons ».  
  > - J. J. Rousseau, Extrait de « Tempérament », _Dictionnaire de la musique_, 1764.
  
  ### Qu’est-ce qu’un tempérament? Une réponse plus actuelle...

  >Le tempérament musical est l’ensemble des choix esthétiques faits au cours de l'accord d’un instrument de musique. 

  La définition de Jean-Jacques Rousseau résume ce qu’on peut considérer comme un triple compromis que constitue un tempérament musical. Il s’agit de trouver une solution qui combine de la façon la plus satisfaisante, selon le contexte (le répertoire, les instruments concernés, etc.) : un paramètre physique et matériel (la “jouabilité” sur les instruments, sur un clavier, un manche avec des frettes, etc.), un paramètre musical (pouvoir moduler le plus librement et le plus loin possible), et un paramètre esthétique (conserver ou pas le plus possible d’intervalles purs “sans choquer l’oreille”).
  
  ### Le tempérament : pour quels instruments?
  
  L’accord et le tempérament concernent les instruments à sons “fixes”, c’est-à-dire ceux dont les notes sont accordées avant que l’instrumentiste joue. Il s’agit entre autres des claviers tels que le clavecin, l’orgue ou le piano.

  Il ne faut pas confondre accord et justesse : on accorde un instrument avant d’en jouer, tandis que la justesse apparaît au moment du jeu.

  ### Le tempérament est-il historique ?

  Avant le XIXe siècle, les choix esthétiques d’accord correspondaient à des usages, des modes ou des habitudes en fonction des époques, des régions et d’autres facteurs influençant la musique elle-même. Il n’y avait donc pas de “choix” proprement dit mais des bonnes et des mauvaises manières d’accorder selon le lieu, le moment et les circonstances matérielles.

  ### L’accord : une pratique contemporaine 

  A l’heure où les musiciens se penchent sur des répertoires anciens, il leur faut retrouver pour chacun de ces répertoires la manière d’accorder correspondant aux usages en vogue au moment de leur composition, condition nécessaire pour se rapprocher le plus possible de  leur réalité sonore.

  La notion de tempérament musical permet à un accordeur contemporain de rendre objectifs les critères qui faisait un bon accord pour un certain répertoire, et de donner un nom à cette manière d’accorder. Les tempéraments ont donc souvent des noms de compositeurs voire d’auteurs, des dates et des régions d’usages. Ces informations sont souvent moins absolues et véridiques que simplement utiles pour associer une technique d’accord à un répertoire. 

  ### Comment *décrire* un tempérament?

  L’accordeur n’a jamais une liberté totale pour chaque note d’un instrument. Des contraintes réduisent les choix qu’il peut faire et permettent de résumer un tempérament en un petit nombre d’informations : 
  
  >*un petit nombre de valeurs numériques qui décrivent certains intervalles.*

  Ces valeurs représentent le **degré de fausseté** ou **tempérament** des intervalles. Un intervalle est dit **tempéré** s’il est accordé avec un certain degré de fausseté, s’il présente donc un écart par rapport à l’intervalle **pur** (cf. “les mathématiques”).

  >Le degré de fausseté d’un intervalle peut être lui-même exprimé comme un intervalle : 
  
  celui qui sépare l’une des notes de l’intervalle tempéré de sa valeur pure. 

### Quelles valeurs numériques?  

On utilise aujourd’hui des valeurs numériques, avec lesquelles il est facile de faire des recherches ou de programmer.

Le clavier des instruments à sons fixes contient douze notes par octave. Toute l’information décrivant un tempérament peut donc être contenue dans douze valeurs. 

  

  > Pour manipuler ces valeurs, il est nécessaire de comprendre les mathématiques du tempérament musical.
  
  Les notes d'un clavier à 12 touches par octave comme le piano, le clavecin ou l'orgue sont reliées par un cycle de 12 quintes ou de 12 demi-tons. 

Les tempéraments historiques ou plus récents pour clavier peuvent être donc définis comme 12 valeurs affectant les quintes : le **cycle des quintes**

ou comme 12 valeurs affectant les demi-tons : la **table de déviation** en unité “cent”.
  
  Les principes sur lesquels ont été élaborés ces tempéraments ont évolué dans le temps ; un tempérament est non seulement une information précieuse sur l'évolution de la pensée théorique, mais surtout un témoignage sonore irréfutable et sans équivalent.
  
  Pour plus d’information sur les unités voir “glossaire”

  ### Le tempérament égal

  Le tempérament égal est une  norme européenne en vogue depuis le début du XIXe siècle. Il s’est imposé progressivement en dehors de la musique savante et de ses frontières d’origine. Aujourd’hui il est la norme dans la facture instrumentale et dans les musiques savantes autant que populaires. Toujours lié à cet héritage occidental récent, il coexiste avec d’autres normes dans des espaces culturels différents. 
  
  Dans le tempérament égal, les douze quintes sont diminuées d’un douzième de comma pythagoricien. Les notes enharmoniques ont la même fréquence. L’intervalle séparant deux notes est constant. 

  ### Les systèmes mésotoniques 

  Contrairement au tempérament de l’école pythagoricienne, qui se base sur la pureté des quintes, les systèmes mésotoniques se fondent sur une recherche de pureté des tierces. 
  
  Dans les systèmes mésotoniques, chaque quinte est tempérée de la même  fraction de comma syntonique. 

  La dernière ferme le cycle, elle est souvent démesurément agrandie et sa sonorité, de fait, très rude : pour cela elle est appelée “quinte du loup” . Dans le cycle des quintes, elle marque le passage des dièses aux bémols. Ainsi la quinte du loup est placée le plus couramment entre sol# et mib. Bien que cet intervalle soit une quinte pour l’accordeur, il est une sixte diminuée pour le compositeur ou l’interprète et sa fausseté est parfois employée comme effet musical. 

  Les systèmes suivants emploient des fractions différentes de comma syntonique (ici n). 

  - $ n \\small = \\dfrac{1}{4} \\quad $ Système de P. Aaron (1523)

  - $ n \\small = \\dfrac{1}{10} \\quad $ Système de Lanfranco (1533)

  - $ n \\small = \\dfrac{2}{7} \\quad $ Système de G. Zarlino (1558))
  - $ n \\small = \\dfrac{1}{3} \\quad $ Système de F. Salinas (1577)
  - $ n \\small = \\dfrac{2}{9} \\quad $ Système de L. Rossi (1666)
  - $ n \\small = \\dfrac{1}{5} \\quad $ Système de J. Sauveur (1710)
  - $ n \\small = \\dfrac{1}{6} \\quad $ Système de G. Silbermann (1748)
  - $ n \\small = \\dfrac{5}{18} \\quad $ Système de R. Smith (1749)
  - $ n \\small = \\dfrac{3}{10} \\quad $ Système de J.B. Romieu (1758)

  ### Approfondissement

  Le système présenté ici est fondé sur le cycle des quintes de $ \\small  mi \\flat-sol\\sharp$.

  La quinte du loup est plus grande que la quinte naturelle si $n \\small > \\dfrac{1}{10}$ et plus petite si $n \\small \\leq \\dfrac{1}{10}$.
  
  La tierce majeure est plus grande que la tierce naturelle si $ n \\small < \\dfrac{1}{4} $ et plus petite si $ n \\small > \\dfrac{1}{4}$.
  Pour le cas $ n \\small = \\dfrac{1}{4} $ , les huit tierces majeures sont pures.


  Un cas particulier du système mésotonique est le tempérament égal.  


  `,
  },
  {
    id: "mathematics",
    label: "Mathématiques",
    content: `### longueurs de cordes - fréquences
  Depuis les auteurs grecs jusqu'au XIXe siècle, un intervalle est défini par un rapport de longueurs de cordes : par analogie, le rapport des sons est celui des longueurs des cordes qui les forment (ainsi le rapport mathématique est 1:2 pour l’octave, 2:3 pour la quinte, 3:4 pour la quarte, 4:5 pour la tierce majeure, 5:6 pour la tierce mineure, etc.). De nos jours, on emploie le rapport des fréquences des deux notes qui forment l'intervalle. On le nomme rapport acoustique, qui est l'inverse du rapport des longueurs. Les rapports acoustiques des intervalles simples à l'état pur sont ainsi les suivants :

  $ \\text{octave : 2} $

  $ \\text{quinte : 3/2 } $

  $ \\text{quarte : 4/3 } $ 

  $ \\text{tierce majeure : 5/4 } $

  $ \\text{tierce mineure 6/5} $
    
  Ces intervalles, auxquels ont peut ajouter les intervalles complémentaires des tierces dans l'octave, à savoir la sixte mineure ($8/5$) et la sixte majeure ($5/3$) émettent un battement perceptible si on les écarte de leur valeur pure (correspondant à l’exactitude du rapport acoustique). 

  > Le rapport acoustique est indépendant de la fréquence de la note sur laquelle on construit l’intervalle. 

  Pour obtenir la quinte d’une note quelconque, il faudra toujours multiplier la fréquence de  cette note par $3/2$.

  ### Manipuler les intervalles à l’aide des mathématiques
  
  De la même manière qu’on enchaîne les intervalles sur un clavier en élevant successivement une note d’un intervalle puis d’un autre, on peut calculer le rapport acoustique qui en résulte :
  
  >le rapport acoustique de la somme de deux intervalles est le produit des rapports acoustiques des deux intervalles.
  
  Ce principe s'illustre par la complémentarité des deux tierces dans la quinte :
  
  $\\text{tierce majeure + tierce mineure = quinte} $
  
  $\\Rightarrow  5/4 \\times  6/5 = 3/2 $
  
  ou par la complémentarité de la quinte et de la quarte dans l'octave :
  
  $\\text{quinte + quarte = octave} $
  
  $\\Rightarrow  3/2 \\times  4/3 = 2 $
  
  > Soustraire un intervalle à un deuxième revient à diviser le rapport acoustique de ce dernier par celui du premier, soit par exemple :
  
  $\\text{quarte – tierce majeure = demi-ton} $
  
  $\\Rightarrow  4/3 \\div 5/4 = 16/15 $

  ### Construire une gamme à l’aide des mathématiques

  Pour construire les douze notes de la gamme, on commence par une fréquence de départ quelconque $f_{1}$. On élève cette note de douze quintes successivement $$f_{1} \\underbrace{\\times \\frac{3}{2} \\times \\frac{3}{2} ...}_{12 \\times } = f_{1} \\times \\left( \\frac{3}{2}\\right)^{12}$$

  On obtient la douzième fréquence $f_{12}$. Si on est parti de Do, on a obtenu toutes les fréquences jusqu’à… si# bien sûr! En effet, puisqu’on est monté en quintes pures, la dernière note n’est pas exactement à l’unisson de la première. Pour les comparer, on abaisse la douzième note de 7 octaves : $$f^\\prime_{12}=\\frac{f_{12}}{2^{7}}$$ Puis on calcul l’intervalle entre ces deux notes presque à l’unisson, et on obtient le petit intervalle appelé comma pythagoricien : 

  $$ \\Large C_{p}=\\frac{f^\\prime_{12}}{f_{1}} = \\frac{3^{12}}{2^{19}} $$

  ### Diviser un intervalle? 

  Le rapport acoustique correspondant à la division d’un intervalle en n intervalles égaux se calcule en prenant sa racine n-ième : C’est l’opération qui consiste par exemple à répartir le comma pythagoricien sur les douze quintes, qu’on abaisse toutes d’un petit intervalle dont la valeur est $\sqrt[12]{C_{p}}$. De même dans le tempérament mésotonique usuel, la tierce majeure est constituée de deux tons égaux dont le rapport acoustique est $\\sqrt{\\frac{5}{4}}$.
  
  ### Pureté et tempérament

  La somme d'intervalles purs (qui, à l'audition, sont dénués de battement) entraîne la production de petits intervalles appelés **commas** qui affectent la pureté voire la jouabilité d'autres intervalles. 
  
  >Tempérer un intervalle, c'est l'éloigner de son état de pureté afin d'amoindrir voire annuler l'effet de ces commas.
  
  Par extension, un tempérament est une façon d'organiser ces déviations de la pureté dans une échelle donnée.

  ### Les commas

  TemperApp utilise les commas syntonique et pythagoricien :

  > Le comma pythagoricien  ($ \\small C_{p}$) est l’intervalle entre une note élevée de douze quintes pures et la même note élevée de 7 octaves.

  $$ C_{p} = \\dfrac{(\\dfrac{3}{2})^{12}}{2^{7}} = \\dfrac{3^{12}}{2^{19}}  $$

  >Le comma syntonique ($\\small C_{s}$) ou comma zarlinien est l’intervalle entre une note élevée de quatre quintes pures et la même note élevée d’une tierce majeure pure et d’une octave.
  
  $$ C_{s} = \\dfrac{(\\dfrac{3}{2})^{4}}{2 \\times \\dfrac{5}{4}} = \\dfrac{81}{80} $$

  Les deux nombres (fractions) représentant les intervalles $\\small C_{s}$ et $\\small C_{p}$ n’ont pas de relation arithmétique entre eux. Mais lorsqu’on les divise on remarque la quasi égalité suivante :

  $$ \\dfrac{C_{p}}{12} \\approx \\dfrac{C_{s}}{11} $$

  ### Représentation mathématique des intervalles usuels : les quintes

  Les mathématiques représentent par des équations simples le geste de l’accordeur. Pour décrire une quinte tempérée, le mathématicien (comme l’accordeur) part d’une quinte pure, et écrit la fréquence en Hz de la note Sol par rapport à la fréquence de Do 
  
  $$ \\textrm{Sol} = \\frac{3}{2} \\times \\textrm{Do}$$ 

  La fréquence du sol est donc plus haute que ce que cherche l’accordeur. Il faut *l’abaisser* d’une fraction de comma. Supposons que l’accordeur souhaite une quinte au tempérament égal : il faut l’abaisser d’un douzième de comma pythagoricien. Comme tous les intervalles, le comma pythagoricien peut se diviser en prenant sa **racine** : 
  
  $$\\sqrt[12]{C_{p}}$$

  Une autre écriture de cette racine permet plus de clarté : 
  
  $$\\sqrt[12]{C_{p}}=C_{p}^{{}^{\\frac{1}{12}}}$$

  L’équation qui donne la fréquence du Sol par rapport au Do est donc 

  >$$\\textrm{Sol} = \\frac{3}{2} \\times \\textrm{Do} \\times {C_{p}}^{-\\frac{1}{12}}$$

  Le signe “-” indique que le sol est **abaissé** de la fraction de comma. Sur le cycle des quintes, cette équation sera abrégée en $-1/12$

  ### Représentation mathématique des intervalles usuels : les tierces

  On associe habituellement les tierces au comma **syntonique** c’est-à-dire à la différence entre la tierce majeure obtenue par quatre quintes pures (dite pythagoricienne) et la tierce pure. 

$$Cs = \\frac{1}{4} \\left( \\frac{3}{2} \\right)^{4} \\div \\frac{5}{4} = \\frac{81}{80}$$

Le mathématicien représente donc les tierces tempérées à l’aide d’un exposant de comma syntonique plutôt que de comma pythagoricien, bien que les deux soient possibles. Or il se trouve que le onzième de comma syntonique un intervalle très proche du douzième de comma pythagoricien : 

$$ \\frac{C_{p}}{12} \\approx \\frac{C_{s}}{11} $$ 

On représente donc mathématiquement les tierces à l’aide de cette unité.
  
  Procédons comme avec les quintes. Pour représenter une tierce majeure “Vallotti” on commence par représenter sa valeur pure : 
  
  $$\\textrm{Mi}=\\textrm{Do} \\times \\frac{5}{4}$$ 
  
  Puis on prend 3 onzièmes de comma syntonique 
  
  $$C_{s}^{\\frac{3}{11}}$$
  
  Et on *monte* notre Mi pur de cet intervalle : 
  
  >$$\\textrm{Mi} = \\textrm{Do} \\times \\frac{5}{4} \\times C_{s}^{\\frac{3}{11}}$$
  
  Sur le visuel TemperApp, on écrira simplement 3/11. Le tempérament égal pour une tierce vaut 7/11.

  `,
  },
  {
    id: "physics",
    label: "Physique",
    content: `### Vibration des cordes et des tubes
    
  Une corde pincée, frappée ou frottée vibre à certaines fréquences qui dépendent de sa tension, de sa masse par unité de longueur, de son diamètre et d’autres paramètres physiques. Les règles de calcul des vibrations s’appliquent de la même manière pour les tuyaux sonores.
    
  ### Modes de vibration

  Lors de la vibration, plusieurs fréquences se superposent : une corde vibre sur toute sa longueur, mais chacune de ses subdivisions en 2, 3 et jusqu’à une infinité de parties vibrent aussi, à des fréquences plus élevées et à des amplitudes plus faibles. 
  
  >On nomme ces vibrations les **partiels** ou **harmoniques**. 
  
  ### L'unisson

  Lorsque deux cordes vibrent à la même fréquence, leurs vibrations se cumulent, il s’agit d’un unisson.
  
  Si l’on les désaccorde très légèrement, leurs vibrations se cumulent puis s’annulent alternativement. Cet unisson faux crée ce que l’on perçoit comme un battement. La fréquence de ce battement est la différence entre les deux fréquences de l’unisson faux. 
  
  ### Pureté d’un intervalle = unisson de partiels 

  Cet unisson peut se produire entre les fréquences fondamentales de deux cordes, mais aussi entre ses fréquences partielles (ou harmoniques).
  
  Entre une corde vibrant à $ \\small 200 \\textrm{ Hz} $ et une corde vibrant une quinte plus haut à $ \\small 300 \\textrm{ Hz} $ il existe un unisson : le troisième partiel de la première corde vibre à $ \\small 600 \\textrm{ Hz} $ , à l’unisson du deuxième partiel de la deuxième corde.
  
  >Un **battement** est un unisson faux entre deux sons harmoniques très proches. 

  ### Les battements

  Si l’on désaccorde la seconde corde à $ \\small 301 \\textrm{  Hz} $, on crée un unisson faux entre ces deux sons partiels : le premier vibre à $ \\small 600 \\textrm{ Hz} $  et le second à $ \\small 602 \\textrm{ Hz} $ . On percevra un battement à la fréquence de $ \\small 2 \\textrm{ Hz} $  (soit 2 battements par seconde).
  
  Le battement utile à l’accordeur est celui qui se produit sur **l’harmonique commun le plus grave**. Cet harmonique se situe au PPCM des deux fréquences pures. 
  
  > Pour connaître la note sur laquelle l’intervalle bat : comparer les séries harmoniques des deux sons et identifier le 1er harmonique commun.
  
  Exemple : Do-Sol. 
  
  SH de $\\small do_{3} : do_{3} do_{4} sol_{4} do_{5} \\textrm{Mi}_{5}$
  
  SH de $\\small Sol_{3} : so}_{3} sol_{4} ré_{5} sol_{5} si_{5}$
  
  Le premier harmonique commun est $$\\small sol_{4}$$
  
  >La vitesse d’un battement dépend de la fréquence des notes sur laquelle est construit l’intervalle.  
  
  Car c’est la différence entre les deux valeurs. L’intervalle entre les deux, qui est un rapport (une division) lui, ne change pas.


  ### Le rapport entre les battements

  >Deux intervalles tempérés d’une même fraction de comma battent dans le rapport de l’intervalle qui les sépare.

  Si la tierce  $ \\small  do_{2}-mi_{2}$ bat à $ \\small 2 \\textrm{ Hz} $  et qu’on tempère la tierce $ \\small  sol_{2}-si_{2}$ de la même quantité de comma, le battement de $ \\small  sol-si$ sera littéralement une quinte au dessus du battement de  $ \\small  do-mi$ soit $ 3/2 \\times 2 = 3 \\textrm{ Hz}  $. La quinte est ici l’intervalle qui sépare les deux intervalles tempérés.

  D’une manière plus générale encore : 

  >deux intervalles battent dans le rapport de l’intervalle qui les sépare, que multiplie le rapport entre les fractions de comma dont ils sont tempérés. 

  Ainsi : $\\small do-sol$ (1/12) et $\\small sol-ré$(1/6) battent dans le rapport 
  
  $$ \\Large \\frac{3}{2} \\times \\frac{\\frac{1}{6}}{\\frac{1}{12}} \\normalsize = 3 $$

  $\\small sol-ré$ bat 3 fois plus vite que $\\small do-sol$.

###Cas particulier de la tierce $\\small Fa_{3}-La_{3}$ au La 440Hz.

Sa vitesse de battement par seconde  est directement calculable à partir de la quantité de comma répartie dans ses quatre quintes. 

On effectue l’opération suivante : 

On appelle $\\Sigma$  la somme des valeurs des quintes intérieures **en 1/12ème de Comma** (Ex. pour Vallotti : 8)

11-$\\Sigma$ **Hz** est la vitesse de battement de la tierce (Ex. pour Vallotti : 11-8 = 3. La tierce Fa-La de Vallotti est donc tempérée à 3/11 de Cs et bat à 3/sec à 440Hz. La valeur à 415 est donc juste en deçà. 
  


    `,
  },
  {
    id: "advices",
    label: "Conseils Pratiques",
    content: `### Accorder un clavecin, les gestes élémentaires
    
  Accorder un clavecin c’est savoir avant tout :

  - tenir une clé d’accord, sans crispation et sans mouvement brusque

  - accorder un intervalle pur : unisson, octave, quinte, quarte, tierce

 - tempérer une tierce à un battement ou une fraction de comma particuliers. 
  
  - répartir ce tempérament dans les quatre quintes formant cette tierce, en utilisant le rapport des battement

Puis, avec l’expérience :

tempérer une quinte à un battement ou une fraction particuliers
tempérer deux quintes dans deux tempéraments différents en utilisant le “cas général” du rapport des battements.
    
  ### Une procédure d’accord, qu’est-ce que c’est?
  
  C’est une succession de notes couvrant au minimum une octave appelée **partition** et permettant d’accorder un tempérament. Il existe une infinité de procédures possibles pour construire un tempérament. A commencer par la première note : théoriquement, rien n’interdit de commencer sa partition par un fa ou un ut#. Pourtant, les procédures efficaces sont peu nombreuses.  

  ### Les procédures TemperApp  

TemperApp propose des procédures d’accord répondant à certains critères :

  Les procédures TemperApp sont construites sur des enchaînements de gestes élémentaires. 

La plupart des procédures commencent du La, car les créateurs de TemperApp ont souhaité qu’un débutant puisse accorder sans prendre le risque d’avoir un La “hors diapason”, ce qui pourrait gêner sur un instrument de conservatoire par exemple. 
La tierce $ \\small Fa - La$ est en général un bon début, car on peut retenir sa vitesse de battement facilement. 
On accorde souvent en premier les quintes à l’intérieur de $ \\small Fa - La$ (dont la distribution est en général simple) 
On va au plus vite à des intervalles purs (en général à gauche de Fa) et on utilise des preuves tierces-quintes.
 

  Des “pop-ups” accompagnent l’utilisateur et lui expliquent les procédures. Ils contiennent toutes les informations nécessaires pour reproduire la procédure en autonomie.

Ces procédures n’ont aucune prétention à la perfection, elles sont de simples suggestions répondant aussi à des contraintes informatiques. Les auteurs de TemperApp ont d’ailleurs découvert la variété de leurs pratiques d’accordeur au cours de l’implémentation des procédures

    `,
  },
  {
    id: "glossaire",
    label: "Glossaire TemperApp",
    content: `### Les unités de TemperApp : les commas
    
  TemperApp propose une description très précise des tempéraments, c’est pourquoi les nombres sont écrits avec des unités adaptées.

  ### **Cp** : le comma pythagoricien

  Le comma pythagoricien est une unité de mesure du tempérament, couramment associé aux quintes. 

Sur un cycle des quintes TemperApp,**F : 1/6** signifie **la quinte $\\small Fa-Do$** (quinte de l’accord de Fa Majeur) **est tempérée au 1/6ème de comma pythagoricien**.
 
  En écriture mathématique et en Hz : 
  
  $$\\Large \\textrm{Do} = \\textrm{Fa} \\times \\frac{3}{2} \\times C_{p}^{-\\frac{1}{6}}$$
  
   - Une valeur 0 signifie une quinte pure

   - Une valeur de 1/12 signifie une quinte au tempérament égal. 

   - Une valeur positive par exemple + 1/12 signifie une quinte plus élargie

  ### **Cs** : le comma syntonique
  
  Le Comma syntonique est une unité de mesure du tempérament, couramment associé aux tierces.  

Sur un cycle des tierces TemperApp, **F : 7/11** signifie **la tierce $\\small Fa-La$** (tierce de l’accord de Fa Majeur) **est tempérée à 7/11èmes de comma pythagoricien**. 

  En écriture mathématique et en Hz : 
  
  $$ \\Large \\textrm{La} = \\textrm{Fa} \\times \\frac{5}{4} \\times C_{s}^{\\frac{7}{11}}$$

  > NB : le 1/11ème de Comma syntonique est le même intervalle que le 1/12ème de Comma pythagoricien. 

  - Une valeur 0 signifie une tierce pure

  - 7/11 est une tierce du tempérament égale

  > NB : 7/11 Cs= 7/12 Cp : dans le tempérament égal, la tierce est 7 fois plus tempérée que la quinte !
  
  - 11/11 = 1 est une tierce pythagoricienne. Dans une octave,  trois tierces majeures superposées se partagent 21/11 de comma syntonique.

NB : A la différence du comma pythagoricien dont on ne distribue que de toutes petites parties sur les quintes (1/6 , 1/12 etc.) on affecte les tierces de valeurs beaucoup plus grandes. C’est pourquoi on utilise l’unité 1/11ème Cs, qui permet de faire varier le dénominateur en nombres entiers.

  ### **Cs/Cp** : deux unités possibles pour les quintes

  Les tempéraments sont en général conçus par rapport aux tierces ou aux quintes (voir “Définitions”). Si le tempérament est conçu en Comma syntonique, alors ses valeurs exprimées en unité “Comma pythagoricien” seront moins élégantes. Par exemple, 1/6ème de Comma Pythagoricien vaut 1/(5,5)ème de Comma syntonique. L’utilisateur a donc la possibilité de choisir l’unité des quintes.

Néanmoins, changer l’unité des tierces n’est pas utile, car elles sont toujours exprimées en 1/11ème de Comma syntonique qui est équivalent au 1/12ème de comma pythagoricien. Pour ne pas alourdir l’application, nous avons fait le choix de maintenir cette unité.    

  ### Les unités de TemperApp : les battements

  Le Hertz **Hz** est une unité de fréquence d’un phénomène cyclique. Il signifie “ cycles par seconde”. 440Hz signifie 440 vibrations par seconde. 

  **Bps** : Même unité que le Hz. Utile pour décrire les battements rapides, et pour les accordeurs qui comptent les battements par seconde

  **Bpm** : Nombre de cycles par minute. **1 Hz=1 Bps = 60 Bpm**. Le Bpm est utile pour des battements plutôts lents, et si on a l’habitude du métronome. 

Dans TemperApp, les battements rapides en Bpm sont décrits ainsi : 

>400 Bpm = **4 x 100 Bpm**. 

Ainsi, l’accordeur peut utiliser un métronome ou retenir la vitesse en Bpm et compter 4 battements.


    `,
  },
];
