// defaultvärde för zoom
let ZOOM = 100;
//vi skaparzoom elementet och det  sätts till span elementet som håller texten för nuvarande zoomlvl
const zoomElement = document.querySelector('#zoom-level span');
//zoomelementet sätts till värdet av ZOOM variabeln som ju är defaultvärdet för zoom
zoomElement.textContent = ZOOM;
//vi skapar en button för att återställa zoomvärdet till defaultvärdet
const resetButton = document.querySelector('#reset-zoom-level');
//en array att hämta värdena för letters ifrån
const letters = ["A","B","C","D","E", "F","G","H"];
//skapa en variabel som sätts till chessboard ID's element dvs en div
const demo = document.querySelector("#chessboard");
//for loop för att skapa 8 divs som är varsin rad
for(let i = 0; i < 8; i++){
   const row = document.createElement("div");//varje div är en rad
   demo.appendChild(row);//appenda divvarna till demo som är själva grund divven
   row.classList.add("row");// ge de klassnamn 'rad'
   for(let j = 0; j < 8; j++){//innre loop för att skapa columnerna
    const column = document.createElement("div");//skapa kolumnerna
    row.appendChild(column);//appenda columnerna till raderna
    column.classList.add("column");// ge dem klassnamnet 'kolumn'
    column.classList.add((i + j) % 2 === 0 ? "even" : "odd");  //om resten av i+j/2 är 0 så ge dem oxå klassnamnet 'even' annars ge de klassnamnet 'odd'
    column.addEventListener('click', () => { //eventlistener för att 'lyssna' om user klickar på en kolumn
        column.classList.toggle("selected") // om user klickar på kolumn får den kolumen klassen 'selected', klickar de igen tas klassen 'selected' bort
        }  
    )   
    if (j === 0){ // om j är 0
        const span = document.createElement("span"); //skapas en variabel som får värdet av en nyskapad spanelement
        column.appendChild(span);  //spanelementet appendas till kolumnen
        span.classList.add("number");     //spanelementet får classnamnet 'number'     
        span.textContent = 8 - i; // textinnehållet i spanelementet är summan av ekvationen 8 - i
       
    }
    else if(i === 7){ // annars om i är 7
        const span = document.createElement("span"); //
        column.appendChild(span);                   //
        span.classList.add("letter");               // allt samma som ovan fast vi ger klassnamnet 'letter' istället
        span.textContent = letters[j];              //
    }
    if (i === 7 && j === 0){ // för att komma förbi problemet med att den nedersta vänstra rutan ska få BÅDE ett span med 'letter' OCH ett span med 'number'
        const span = document.createElement("span"); 
        column.appendChild(span);  
        span.classList.add("letter");
        span.textContent = letters[j];
        
    }
    
}
}

window.addEventListener('keypress', function (event) { //när en key trycks ner kollar vi vilken key
        
     if(event.key == "+" && ZOOM < 110){ // om det är '+' OCH zoomvärdet är under 110
        ZOOM += 1; // ökas Zoomvärdet med 1
    }
    else if (event.key == "-" && ZOOM > 50){// om det är '-' och zoomvärdet är över 50
        
       ZOOM -= 1; // minskas värdet med 1
    }
    updateZoomLevel(); // kör funktionen updateZoomLevel som sätter Zoomelementvariabeln vi skapade i början till det nya ZOOM värdet
}); 
resetButton.addEventListener('click', () => { //sätter eventlistner på resetbutton, Om den klickas ...
    ZOOM = 100; // sätts Zoomvärdet till 100
    updateZoomLevel(); // och funktionen körs som sätter Zoomelementvariabeln vi skapade i början till det nya ZOOM värdet
});
function updateZoomLevel(){ //sätter Zoomelementvariabeln vi skapade i början till det nya ZOOM värdet
    zoomElement.textContent = ZOOM; // zoomelementvariabelns textinnehåll sätts till värdet av Zoom
    demo.style.zoom = `${ZOOM}%`; //demo är mitt namn på ursprungsdiven alltså själva shackbrädet, så brädets css style 'zoom' sätts till värdet av variabeln ZOOM och konkateneras med ett % tecken för att css filen ska kunna läsa det
}