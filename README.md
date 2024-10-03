# SexIT'23s webb

SexIT'23s webbsida är den bästa på LiU, det har vi gjort studier som visar.
För att uppnå den statusen krävs lite arbete från webbmästaren. Därför
behöver du följande för att fortsätta:

- NodeJS version 16 eller högre
- Ett konto på Vercel.com (om du ska deploya till Vercel)
- Vercel CLI-t (om du ska deploya till Vercel)

## Installation

Projektet använder pakethanteraren NPM, som är standard för alla moderna webbprojekt.
NPM är en del av NodeJS.

För att installera paketen som krävs för webbsidan skriver du

```bash
npm ci
```

## Starta webbsidan

SexIT'23-webben använder ett byggverktyg som heter eleventy, det behöver du inte kunna så
mycket om men det är bra att veta att det är det som ligger bakom hur webbsidan utvecklats.

Det finns flera sätt att starta sidan. Alla sidor är ju i slutändan bara en massa html, css
och javascript filer så rimligt är att skapa dem och sedan öppna dem i din webbläsare.

```bash
npm run build
```

Filerna hamnar då i \_site mappen.

### Ett snabbare alternativ

Smarta som vi är har vi sett till att du slipper göra ovan, det finns istället en script som fixar
det automatiskt.

```bash
npm run start
```

### För utvecklare

När du själv utvecklar sidan är det praktiskt om den uppdaterar automatiskt medan du skriver koden.
Då slipper du själv sitta och reloada din webbläsare som en idiot. Därför finns ett ännu smartare
script som fixar allt sånt också.

```bash
npm run dev
```

Det är dock dödsstraff på att använda detta kommandot för att faktiskt köra webbsidan, då det skippar
en hel del prestanda-grejer. Använd endast för utveckling.

## Deployment

Vår webb använder Vercel för deployment, det rekommenderar vi att du gör också.

För att deploya till Vercel loggar du in på https://vercel.com och skapar ett nytt projekt.
Efter det behöver du Vercel CLI-t, eftersom vi redan har NPM kan vi installera Vercel med det.

```bash
npm i -g vercel
```

Har du inte tillåtelse att installera ett globalt paket kan du använda `npx` istället. Då
skriver du helt enkelt `npx vercel` istället för bara `vercel`.

### 1. Länka ditt projekt

Skriv

```bash
vercel link
```

och följ instruktionerna för att länka ditt projekt. När du är klar kommer det finnas en `.vercel`
mapp, den behöver du till nästa steg.

### 2. Jävlas med GitLab

Eftersom LiU sitter på en fancy schmancy custom version av GitLab finns ingen enkel lösning för
att länka GitLab-projektet till Vercel. Det är jobbigt.

Istället använder vi en funktion som kallas Pipelines. Det är mindre jobbigt, men krävs att man
sitter rakt i stolen.

I ditt GitLab projekt ska du nu gå till "Settings" och sedan "CI/CD". På denna sidan hittar du en
sektion som heter "Variables". Klicka på den för att öppna listan med miljövariabler.

I den här listan ska du nu lägga till tre nya variabler. De ser ut som följande:

#### VERCEL_ORG_ID

Variabeln VERCEL_ORG_ID innehåller projektets `orgId`, det hittar du i filen `.vercel/project.json`.

#### VERCEL_PROJECT_ID

Variabeln VERCEL_PROJECT_ID innehåller projektets `projectId`, det hittar du i filen `.vercel/project.json`.

#### VERCEL_TOKEN

Variabeln VERCEL_TOKEN innehåller ditt Vercel användar-id, vilket är ett helvete att få tag i.

Logga in på https://vercel.com, klicka på profilbilden längst upp till höger och gå till "Settings".

I sidomenyn, klicka på "Tokens".

Skapa en ny Token genom att skriva in ett namn (namnet spelar ingen roll) och välj scope-et "Full Account".
Kan du inte välja Full Account har du en SAML-användare och då vet jag ärligt inte vad du väljer. Antagligen något
som liknar "Manage Project" eller åt det hållet. Sätt expiration till typ Juni nästa år så du inte av misstag
råkar läcka hela ditt konto till nästa SexIT (eller lämna tomt om du gillar att leva farligt).

**KOPIERA DIN TOKEN NU**. Du får ingen andrachans. Tappar du din token måste du skapa en ny.

Klistra in din token som värdet för variabeln VERCEL_TOKEN i GitLab.

### 3. Hoppas det funkar

Om du gjort allt rätt och sitter rakt i stolen borde webbsidan nu publiceras på Vercel varje gång du pushar en
ny commit till GitLab-repot.

För att testa om det fungerar, skapa en ny commit, pusha den, gå sedan till "Build" och sedan "Pipelines" i GitLab-projektet.
Där borde du se en lista där den senaste builden ska visa "Pending" eller "Passed". Visar den "Failed" måste du klicka in i den
för att läsa vad som gick fel. Det kan vara kryptiskt, ha det kul.
