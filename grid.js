let button = document.getElementById("submit");
let holder = document.getElementById("grid");
let tileSize = 25;
let borderSize = 2;

button.addEventListener("click", ()=>{
    clearGrid();
    buildGrid(getDimensions());
    
});

function clearGrid(){
    for(let i = holder.children.length-1; i > 0; i--){
        holder.removeChild(holder.children[i]);
    }
}
function getDimensions(){
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    
    let dimensions = {"w":width,"h":height};
    return dimensions; 
}   
function buildGrid(dimensions){
    
    let tileCount = dimensions.w * dimensions.h;
    for(let i = 0 ; i < tileCount ; i++)
    {
        let tile = document.createElement("div");
        tile.className = "tile";
        tile.style.width = tileSize+"px";
        tile.style.height = tileSize+"px";
        tile.style.borderWidth = borderSize+"px";        
        tile.style.left = (i % dimensions.w) * (tileSize + borderSize) + "px";
        console.log(tile.style.left);
        tile.style.top = Math.floor(i / dimensions.w) * (tileSize + borderSize)+ "px"; 
        holder.appendChild(tile);
    }
}