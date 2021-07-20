
export type LearnSheet = {
  id: string,
  content: string,
};

export const learnSheets: Array<LearnSheet> = [
  {
    id: "definition",
    content: `### Qu’est ce qu’un tempérament ?
  Opération par laquelle, au moyen dʼune légère altération dans les Intervalles, faisant évanouir la différence de deux Sons voisins, on les confond en un, qui, sans choquer lʼoreille, forme les Intervalles respectifs de lʼun & de lʼautre. Par cette opération lʼon simplifie lʼEchelle, en diminuant le nombre des Sons nécessaires. Sans le Tempérament, au lieu de douze Sons seulement que contient lʼOctave, il en faudroit plus de soixante pour moduler dans tous les Tons ». J. J. Rousseau, Extrait de « Tempérament », Dictionnaire de la musique, 1764.
  
  Le \`tempérament musical\` est l’ensemble des choix esthétiques faits au cours de l'accord d’un instrument de musique. La définition de Jean-Jacques Rousseau résume ce qu’on peut considérer comme un triple compromis que constitue un tempérament musical. Il s’agit de trouver une solution qui combine de la façon la plus satisfaisante, selon le contexte (le répertoire, les instruments concernés, etc.) : un paramètre physique et matériel (la “jouabilité” sur les instruments, sur un clavier, un manche avec des frettes, etc.), un paramètre musical (pouvoir moduler le plus librement et le plus loin possible), et un paramètre esthétique (conserver ou pas le plus possible d’intervalles purs “sans choquer l’oreille”).
    
  L’accord et le tempérament concernent les instruments à sons “fixes”, c’est-à-dire ceux dont les notes sont accordées avant que l’instrumentiste joue. Il s’agit entre autres des claviers tels que le clavecin, l’orgue ou le piano.
  
  Il ne faut pas confondre accord et justesse : on accorde un instrument avant d’en jouer, tandis que la justesse apparaît au moment du jeu.
  
  Avant le XIXe siècle, ces choix esthétiques correspondaient à des usages, des modes ou des habitudes en fonction des époques, des régions et d’autres facteurs influençant la musique elle-même. Il n’y avait donc pas de “choix” proprement dit mais des bonnes et des mauvaises manières d’accorder selon le lieu, le moment et les circonstances matérielles.
  
  A l’heure où les musiciens se penchent sur des répertoires anciens, il leur faut retrouver pour chacun de ces répertoires la manière d’accorder correspondant aux usages en vogue au moment de leur composition, condition nécessaire pour se rapprocher le plus possible de  leur réalité sonore.
  
  La notion de tempérament musical permet à un accordeur contemporain de rendre objectifs les critères qui faisait un bon accord pour un certain répertoire, et de donner un nom à cette manière d’accorder. Les tempéraments ont donc souvent des noms de compositeurs voire d’auteurs, des dates et des régions d’usages. Ces informations sont souvent moins absolues et véridiques que simplement utiles pour associer une technique d’accord à un répertoire. 
  
  L’accordeur n’a jamais une liberté totale pour chaque note d’un instrument. Des contraintes réduisent les choix qu’il peut faire et permettent de résumer un tempérament en un petit nombre d’informations : un petit nombre de valeurs numériques qui décrivent certains intervalles.
  
  Ces valeurs représentent le “degré de fausseté” ou “tempérament” des intervalles. Un intervalle est dit “tempéré” s’il est accordé avec un certain degré de fausseté, s’il présente donc un écart par rapport à l’intervalle “pur” (cf. “les mathématiques”).
  
  Le degré de fausseté d’un intervalle peut être lui-même exprimé comme un intervalle : celui qui sépare l’une des notes de l’intervalle tempéré de sa valeur pure. 
  
  Le clavier des instruments à sons fixes contient douze notes par octave. Toute l’information décrivant un tempérament sera donc contenue dans douze valeurs. 
  
  On utilise aujourd’hui des valeurs numériques, avec lesquelles il est facile de faire des recherches ou de programmer. 
  
  Pour manipuler ces valeurs, il est nécessaire de comprendre les mathématiques du tempérament musical.
  
  Les notes d'un clavier à 12 touches par octave comme le piano, le clavecin ou l'orgue sont reliées par un cycle de 12 quintes, et les tempéraments historiques ou plus récents pour clavier peuvent être définis comme une succession de 12 quintes de tailles différentes. Les principes sur lesquels ont été élaborés ces tempéraments ont évolué dans le temps ; un tempérament est non seulement une information précieuse sur l'évolution de la pensée théorique, mais surtout un témoignage sonore irréfutable et sans équivalent.
    `,
  },
  {
    id: "characteristics",
    content:`Depuis les auteurs grecs jusqu'au XIXe siècle, un intervalle est défini par un rapport de longueurs de cordes : par analogie, le rapport des sons est celui des longueurs des cordes qui les forment (ainsi le rapport mathématique est 1:2 pour l’octave, 2:3 pour la quinte, 3:4 pour la quarte, 4:5 pour la tierce majeure, 5:6 pour la tierce mineure, etc.). De nos jours, on emploie le rapport des fréquences des deux notes qui forment l'intervalle. On le nomme rapport acoustique, qui est l'inverse du rapport des longueurs. Les rapports acoustiques des intervalles simples à l'état pur sont ainsi les suivants :

  $ \\text{octave : 2 } $ 
  $ \\text{quinte : 3/2 }$ 
  $ \\text{quarte : 4/3 }$ 
  $ \\text{tierce majeure : 5/4 }$ 
  $ \\text{tierce mineure 6/5} $
    
  Ces intervalles, auxquels ont peut ajouter les intervalles complémentaires des tierces dans l'octave, à savoir la sixte mineure ($8/5$) et la sixte majeure ($5/3$) émettent un battement perceptible si on les écarte de leur valeur pure (correspondant à l’exactitude du rapport acoustique). Le rapport acoustique est indépendant de la fréquence de la note sur laquelle on construit l’intervalle. Pour obtenir la quinte d’une note quelconque, il faudra toujours multiplier la fréquence de  cette note par $3/2$.
    
  De la même manière qu’on ajoute les intervalles sur un clavier en élevant successivement une note d’un intervalle puis d’un autre, on peut calculer le rapport acoustique qui en résulte : le rapport acoustique de la somme de deux intervalles est le produit des rapports acoustiques des deux intervalles.
  
  Ce principe s'illustre par la complémentarité des deux tierces dans la quinte :
  
  $\\text{tierce majeure + tierce mineure = quinte}$
  $\\Rightarrow  5/4$
  $\\times  6/5 = 3/2 $
  
  ou par la complémentarité de la quinte et de la quarte dans l'octave :
  
  $\\text{quinte + quarte = octave}$ 
  $\\Rightarrow  3/2$
  $\\times  4/3 = 2 $
  
  Soustraire un intervalle à un deuxième revient à diviser le rapport acoustique de ce dernier par celui du premier, soit par exemple :
  
  $\\text{quarte – tierce majeure = demi-ton}$ 
  $\\Rightarrow  4/3 $
  $\\div 5/4 = 16/15 $

  Enfin le rapport acoustique correspondant à la division d’un intervalle en n intervalles égaux se calcule en prenant sa racine n-ième : C’est l’opération qui consiste à répartir le comma pythagoricien sur les douze quintes, qu’on abaisse toutes d’un petit intervalle dont la valeur est $\\sqrt[12]{C_{p}}$. De même dans le tempérament mésotonique usuel, la tierce majeure est constituée de deux tons égaux dont le rapport acoustique est $\\sqrt{\\frac{5}{4}}$.
  
  La somme d'intervalles purs (qui, à l'audition, sont dénués de battement) entraîne la production de petits intervalles appelés commas qui affectent la pureté voire la jouabilité d'autres intervalles. Tempérer un intervalle, c'est l'éloigner de son état de pureté afin d'amoindrir voire annuler l'effet de ces commas.
  
  Par extension, un tempérament est une façon d'organiser ces déviations de la pureté dans une échelle donnée.

  TemperApp utilise les commas syntonique et pythagoricien :

  Le comma pythagoricien  ($C_{p}$) est l’intervalle entre une note élevée de douze quintes pures et la même note élevée de 7 octaves.

  $$ \\LARGE C_{p} = \\dfrac{(\\dfrac{3}{2})^{12}}{2^{7}} = \\dfrac{3^{12}}{2^{19}}  $$

  Le comma syntonique ($C_{s}$) ou comma zarlinien est l’intervalle entre une note élevée de quatre quintes pures et la même note élevée d’une tierce majeure pure et d’une octave.
  
  $$ \\LARGE C_{s} = \\dfrac{(\\dfrac{3}{2})^{4}}{2 . \\dfrac{5}{4}} = \\dfrac{81}{80} $$

  Les deux nombres (fractions) représentant les intervalles $C_{s}$ et $C_{p}$ n’ont pas de relation arithmétique entre eux. Mais lorsqu’on les divise on remarque la quasi égalité suivante :

  $$ \\LARGE \\dfrac{C_{p}}{12} \\approx \\dfrac{C_{s}}{11} $$


  ![image](https://i.ibb.co/ZBRmQp9/DabRose.gif)
  `,
  },
  {
    id: "physics",
    content:``,
  },
  {
    id: "history",
    content:``,
  },

];
