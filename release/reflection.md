### Meaningful Names
Jag har följt 

### Functions
Det här kapitlet har varit en ögonöppnare som, enligt mig själv, har gjort min kod mer ren. Jag har försökt följa rådet om att ha *One Level of Abstraction per Function* och tycker själv att jag har utvecklats under kursens gång och att slutresultatet har blivit ganska bra. När jag har gått efter rådet om att ha en abstraktionsnivå per funktion så tycker jag att råden om att funktionerna ska vara så små som möjligt (*Small!*) och att de ska göra en sak (*Do One Thing*) per automatik har uppfyllts. Det har resulterat i att mina metoder alla är under 10 rader (när man räknar bort mellanrum och radbrytningar som är gjorda för läsbarhetens skull). LÄGG IN EXEMPEL!

### Comments
När det gäller kommentarer har jag försökt utmana mig själv. I tidigare kurser har vi varit tvungna att skriva kommentarer till varje metod och det är svårt att bryta sig ur det tankesättet. Men nu har jag försökt att fullt ut gå efter *Explain Yourself in Code* och bokens devis om att minimera kommentarer.

I L1 använder jag mig av JSDoc-kommentarer främst för att tala om typer på parametrar och returvärden och istället för att skriva en tilläggskommentar som beskriver koden har jag fokuserat på att ge beskrivande namn. 

I L2 på klientsidan har jag tagit det steget längre och har på många ställen utelämnat kommentarer helt där jag inte tycker att det behövs. Som nämnt så tar det emot av ren vana men efter att ha läst boken och i tillägg läst om best practices för att kommentera React komponenter (där många faktiskt refererar till Clean Code och skriver att kommentarer förstör det naturliga flödet när man skriver komponenter i React) så har jag valt att endast kommentera där jag verkligen tycker att det behövs. Jag har bland annat använt mig av *Explanation of Intent*-kommentarer om en nödlösning som användes på flera ställen när inget annat fungerade.

På serversidan har jag valt att ha fulla JSDoc-kommentarer och även radkommentarer i konfigurationer då jag själv tycker att det kräver mer som inte namngivning eller koden förklarar.

Jag har försökt balansera mellan boken och de olika konventionerna för namngivning i både React och Express.

### Formatting
Här har jag försökt tänka på the Newspaper Metaphor när jag skrivit min kod. Att det viktigaste och mest övergripande kommer först och det detaljerade sist, och att man ska kunna läsa uppifrån och ner i ett naturligt flöde. Det har jag följt väl främst i L1. I L2 har jag fått kompromissa med vad som förväntas när man ska skriver React-komponenter. I klassbaserade komponenter som jag skriver är det förväntat att den publika render-metoden ligger längst ner. Jag har därför istället försökt tänka mycket på *Vertical Distance* och att metoder som är nära relaterade ska ligga nära varandra vertikalt sett och det har resulterat i att det har blivit en omvänd Newspaper Metaphor. Jag har också följt råden om Vertical Openness/Density och tycker att koden blir betydligt mer lätt att överskåda med de reglerna.

### Objects And Data Structures
Jag har strävat efter att ha objekt med privata variabler och metoder som anropas. I komponenterna har jag dock en state-variabel som är publik. När den sätts privat uppdateras inte komponenterna. Jag följer *The Law of Demeter* och anropar endast metoder på de sätt som som tillåts enligt den.  

### Error Handling
Jag har gått från att jobba med booleans i min validering och har istället, efter att ha läst boken och sett föreläsningarna, börjat kasta exceptions istället. Genom att göra på det sättet upplever jag att det är lättare att separera koden så att varje metod bara gör en sak. Jag upplever också att det blir färre metoder med nästlade loopar och if-satser. Här är ett exempel på validering som görs i L1:

### Boundaries
På klienten i L2 använder jag mig av ett paket för att formattera datum. Jag importerade först paketet direkt i komponenterna där de användes, men efter att ha läst kapitelavsnittet *Using Third-Party Code* valde jag att skapa en DateFormatter-klass som importerar paketet och istället ha en publik metod som formatterar datum på det sätt jag önskar göra i applikationen. Det minskar kodupprepning för det första, men ökar också kontroll ifall ändringar i paketet orsaker ändringar i beteende. Detta kan enkelt kontrolleras med automatiska enhetstester (som jag tyvärr inte hann lägga till i L2).

### Unit Tests
Jag har använt mig av enhetstester i L1 och tycker själv att de är läsbara. Jag tycker också att jag uppfyller rådet om *Single Concept per Test* då jag testar en enda sak per test och inte testar flera olika saker samtidigt. Efter att ha läst igenom *F.I.R.S.T* tycker jag också att mina enhetstester uppfyller de flesta punkterna ganska bra. Testen är enligt vad jag uppfattar som snabba, de är inte beroende av varandra och behöver inte utföras i en specifik ordning, och de är självvaliderande. 

### Classes


### Systems

