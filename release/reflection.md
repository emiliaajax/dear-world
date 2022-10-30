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
Här har jag försökt tänka på the Newspaper Metaphor när jag skrivit min kod. Att det viktigaste och mest övergripande kommer först och det detaljerade sist, och att man ska kunna läsa uppifrån och ner i ett naturligt flöde. Det har jag följt väl främst i L1. I L2 har jag fått kompromissa med vad som förväntas när man ska skriver React-komponenter. I klassbaserade komponenter som jag skriver är det förväntat att den publika render-metoden ligger längst ner. Jag har därför istället försökt tänka mycket på *Vertical Distance* och att metoder som är nära relaterade ska ligga nära varandra verikalt sett och det har resulterat i att det har blivit en omvänd Newspaper Metaphor. Jag har också följt råden om Vertical Openness/Density och tycker att koden blir betydligt mer lätt att överskåda med de reglerna. 

### Objects And Data Structures

### Error Handling

### Boundaries

### Unit Tests

### Classes

### Systems

