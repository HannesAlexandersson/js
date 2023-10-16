let currentZoom = 100;
const letters = ["A","B","C","D","E", "F","G","H"];
const demo = document.querySelector("#chessboard");
for(let i = 0; i < 8; i++){
   const row = document.createElement("div");
   demo.appendChild(row);
   row.classList.add("row");
   for(let j = 0; j < 8; j++){
    const column = document.createElement("div");
    row.appendChild(column);    
    column.classList.add("column");
    column.classList.add((i + j) % 2 === 0 ? "even" : "odd");  
    column.addEventListener('click', () => {
        column.classList.toggle("selected")
        }  
    )   
    if (j === 0){
        const span = document.createElement("span"); 
        column.appendChild(span);  
        span.classList.add("number");          
        span.textContent = 8 - i;
       
    }
    else if(i === 7){
        const span = document.createElement("span"); 
        column.appendChild(span);  
        span.classList.add("letter");
        span.textContent = letters[j];        
    }
    if (i === 7 && j === 0){
        const span = document.createElement("span"); 
        column.appendChild(span);  
        span.classList.add("letter");
        span.textContent = letters[j];
        //span.classList.add("number");
        //span.textContent =  8 - i;
        //span.classList.add("letter");
        //span.append(letters[j]);
    }
    
}
}


window.addEventListener('keypress', function (event) {
    console.log(event.key);    
    
     if(event.key == "+"){
        
        const zoom = document.querySelector("#chessboard");        
        //const currentZoom = zoom.style.transform ="scale(1.5)"
        zoom.style.zoom = currentZoom+"%"; 
        console.log(currentZoom);
    }
    else if (event.key == "-"){
        
        const zoom = document.querySelector("#chessboard");
        //const currentZoom = zoom.style.transform ="scale(0.5)"
        zoom.style.zoom = currentZoom+"%";    
    }
}) 
