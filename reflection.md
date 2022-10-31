### Meaningful Names
Jag har följt Jag har försökt balansera mellan boken och de olika konventionerna för namngivning i både React och Express.


### Functions
Det här kapitlet har varit en ögonöppnare som, enligt mig själv, har gjort min kod mer ren. Jag har försökt följa rådet om att ha **One Level of Abstraction per Function** och tycker själv att jag har utvecklats under kursens gång och att slutresultatet har blivit ganska bra. Det är inte perfekt, men kvaliteten på min kod är betydligt bättre än innan jag läste den här kursen. 

När jag har gått efter rådet om att ha en abstraktionsnivå per funktion så tycker jag att råden om att funktionerna ska vara så små som möjligt (**Small!**) och att de ska göra en sak (**Do One Thing**) per automatik har uppfyllts. Det har resulterat i att mina metoder alla är under 10 rader (när man räknar bort mellanrum och radbrytningar som är gjorda för läsbarhetens skull).

Två exempel, från klientkoden i L2, på metoder av hög abstraktionsnivå:

![Function of high abstraction level](./release/images/code/function-1.png)

![Function of high abstraction level](./release/images/code/function-2.png)

### Comments
När det gäller kommentarer har jag försökt utmana mig själv. I tidigare kurser har vi varit tvungna att skriva kommentarer till varje metod och det är svårt att bryta sig ur det tankesättet. Men nu har jag försökt att fullt ut gå efter **Explain Yourself in Code** och bokens devis om att minimera kommentarer.

I L1 använder jag mig av JSDoc-kommentarer för metoderna i det publika interfacet då att kommentera publika API är ansett som en bra kommentar enligt kapitelavsnittet **Good Comments**.

![Comment for a method in the public interface](./release/images/code/public-method-comment.png)

Annars använder jag JSDoc främst för att tala om typer på parametrar och returvärden, och istället för att skriva en tilläggskommentar som beskriver koden har jag fokuserat på att ge beskrivande namn.

![JSDoc comment with only param desribed](./release/images/code/jsdoc-light.png)

I L2 på klientsidan har jag tagit steget längre och har på de flesta ställen utelämnat kommentarer helt där jag inte tycker att det verkligen behövs. Som nämnt så tar det emot av ren vana men efter att ha läst boken och i tillägg läst om best practices för att kommentera React komponenter (där många faktiskt refererar till Clean Code och skriver att kommentarer förstör det naturliga flödet när man skriver komponenter i React) så har jag valt att endast kommentera där jag verkligen tycker att det behövs. Jag har bland annat använt mig av **Explanation of Intent**-kommentarer om en nödlösning som användes på flera ställen i min kod (en lösning som jag läste inte var så bra praxis att använda sig av) när inget annat fungerade.

![Explanation of Intent](./release/images/code/intent-comment.png)

I tillägg har jag också valt att ha informativa kommentarer på vissa ställen där jag ger information/exempel som inte kan uttryckas i ett metodnamn.

![Informative comment](./release/images/code/informative-comment.png)

På serversidan har jag valt att ha fulla JSDoc-kommentarer och även radkommentarer i konfigurationer. Radkommentarerna kanske skulle kunna klassas som redundanta enligt Clean Code, men i och med att jag själv har svårt att komma ihåg vad konfigurationerna innebär så valde jag att ha kvar det. 

Exempel på en radkommentar i server.js:

![Comment in server configuration](./release/images/code/config-comment.png)

Exempel på en radkommentar i controller.js:

![Comment in controller in REST API](./release/images/code/rest-api-comment.png)

### Formatting

Jag har försökt gå efter *The Newspaper Metaphor* när jag skrivit min kod. Att det viktigaste och mest övergripande kommer först och det detaljerade sist, och att man ska kunna läsa uppifrån och ner i ett naturligt flöde.

Se exempel från klientkoden i L2 nedan. I exemplet ser man hur det viktigaste och mest abstrakta ligger längst upp, och det mest detaljerade längre ner (metoden som inte är med finns längre upp i koden då den används av en annan metod).

![Code example of the Newspaper Metaphor](./release/images/code/newspaper-metaphor.png)

Jag har även tänkt mycket på *Vertical Distance* och att metoder som är nära relaterade ska ligga nära varandra vertikalt sett när jag gått igenom koden. Jag har också följt råden om *Vertical Openness/Density* och tycker att koden blir betydligt mer lätt att överskåda med de reglerna. Se exempel:

![Code example of vertical and horizontal openness/density](./release/images/code/verticalopenness.png)

I L1 har jag valt att ha de publika metoderna överst och därefter de privata metoderna. Varje klass, förutom klassen som tillhandahåller det publika interfacet, har bara en eller två publika metoder och distansen mellan tätt associerade metoder är därmed inte för stor. Huvudklassen har ett flertal publika metoder som jag har valt att lägga överst för att en utvecklare av biblioteket lätt ska kunna få en översikt över vilka funktioner som tillhandahålls för användaren. Därefter har jag efter bästa förmåga försökt lägga de privata metoderna så att distansen inte blir för stor vertikalt sett.

I L2 har jag fått kompromissa med vad som förväntas för klassbaserade React-komponenter och vad boken säger. I klasskomponenterna är det förväntat att den publika render-metoden ligger längst ner. Utöver det har jag gått efter **The Newspaper Metaphor**. Det här har gjort att den vertikala distansen mellan render-metoden och vissa metoder den anropar vid användarinteraktion har blivit ganska stor. Jag provade först att göra en omvänd Newspaper Metaphor (det vill säga att det läses nerifrån och upp) men det kändes inte naturligt. Istället valde jag att göra som boken rekommenderar med undantag för render-metoden som får ligga kvar allra längst ner i klasskomponenten. 

### Objects And Data Structures
Jag har strävat efter att ha objekt med privata variabler och metoder som anropas. I komponenterna har jag dock en state-variabel som är publik. När den sätts privat uppdateras inte komponenterna. Jag följer *The Law of Demeter* och anropar endast metoder på de sätt som som tillåts enligt den.  

### Error Handling
Jag har gått från att jobba med booleans i min validering och har istället, efter att ha läst boken och sett föreläsningarna, börjat kasta exceptions istället. Genom att göra på det sättet upplever jag att det är lättare att separera koden så att varje metod bara gör en sak. Jag upplever också att det blir färre metoder med nästlade loopar och if-satser. 

Här är ett exempel på validering som görs i L1:

![Validation with exceptions](./release/images/code/exception.png)

### Boundaries
På klienten i L2 använder jag mig av ett paket för att formattera datum. Jag importerade först paketet direkt i komponenterna där de användes, men efter att ha läst kapitelavsnittet *Using Third-Party Code* valde jag att skapa en DateFormatter-klass som importerar paketet och istället ha en publik metod som formatterar datum på det sätt jag önskar göra i applikationen. Det minskar kodupprepning för det första, men ökar också kontroll ifall ändringar i paketet orsaker ändringar i beteende eftersom detta enkelt kan kontrolleras med automatiska enhetstester (som jag tyvärr inte hann lägga till i L2).

![DateFormatter Class](./release/images/code/boundaries.png)

### Unit Tests
Jag har använt mig av enhetstester i L1 och tycker själv att de är läsbara. Jag tycker också att jag uppfyller rådet om *Single Concept per Test* då jag testar en enda sak per test och inte testar flera olika saker samtidigt. 

![Test example](./release/images/code/test.png)

Efter att ha läst igenom *F.I.R.S.T* tycker jag också att mina enhetstester uppfyller de flesta punkterna ganska bra. Testen är enligt vad jag uppfattar som snabba, de är inte beroende av varandra och behöver inte utföras i en specifik ordning, och de är självvaliderande. 

### Classes
Mina klasser och komponenter i L1 och L2 är små och jag anser själv att det de inte har för mycket ansvar utan följer The Single Responsibility Principle. Däremot är en av komponenterna i testappen i L1 väldigt stor med många variabler och eventhanterare vilket är en tydlig indikation på att den har för mycket ansvar. Jag har tidigare försökt att flytta ut kod till flera komponenter, men det har orsakat problem med hur jag ska hantera states (vilket ramverk som React underlättar mycket). Jag valde att lämna det då jag inte kunde hitta en lösning på problemet.

### Systems

