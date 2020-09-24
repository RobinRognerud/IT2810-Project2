# Project 2

Prosjekt 2 i Webutvikling - Gruppe 51

## Teknologi

### React, JSX og Typescript

Dette prosjektet er i laget i React med bruk av JSX for å få markering og logikk i samme fil. Dette gjør det enklere for React og vise feilmeldinger og kode som kan by på problemer. I tilegg blir det enklere å visualisere hvordan koden henger sammen, for eksempel hvordan events blir håndtert eller hvordan state endrer seg over tid. Prosjektet er implementert med Typescript for å få bedre kontroll på typer og for å validere at koden funkerer på ønsket måte.

Vi har brukt Node og npm for å bygge prosjektet og create-react-app for å sette opp prosjektet.

### SVG

Svg-animasjonene er ikke våre og hentet fra:
Singin ball: https://codepen.io/z-mamba-san/pen/MWyrNbe
Abstract triangles: https://codepen.io/mrmarley2/pen/VwaEKXw
Tree: https://codepen.io/natvoc/details/MWywgeK?fbclid=IwAR2MKLjJecSjjLKpZYsWlTmFJFrttZFfxASKaIstZgyZwPcl7CbDHfKWJ0U

### AJAX

### HTML WEB STORAGE

Vi har valgt å bruke Localstorage som en favoritt knapp, når brukeren har huket av på ønsket radiobuttons kan valgene lagres ved å trykke på "Lagre din ønsket utstilling til neste gang". Da vil localstorage ta vare på verdiene og disse kan så hentes frem igjen ved å trykke på favoritt knappen. Ved localstorage forsvinner ikke verdiene etter at siden er lukket eller at det åpnes en tilsvarende side i et nytt vindu.
Vi lagrer de valgte radiobuttons verdiene i sessionStorage hver gang en bruker trykker på en ny radiobutton, dette er for at siden skal ha samme tilstand om den oppdateres. Altså radiobutton nullstiller seg ikke til default med mindre man lukker siden og åpner den på nytt.

## Testing

Jest er et test rammeverk som fungere bra med Javascript og Typescript. Create-react-app setter Jest automatisk opp som testrammeverk, så vi kan skrive tester med en gang uten noen ekstra konfigurasjoner. Vi har forholdt oss til Jest sin enkle filosofi og brukt snapshottester. En snapshottest lagerer et skjermbilde av hvordan komponenten ser ut og skulle det skje en endring så sier den ifra. Dette gjør det enkelt å oppdage endringer og konrollere om de er hensiktsmessige, før man tar et nytt snapshot med den oppdaterte koden. Slik vil man ha bedre kontroll på utviklingen av kode.

## Responsive Web Design
