let button = document.getElementById("submit");
let holder = document.getElementById("grid");
let tileSize = 25;
let borderSize = 2;

button.addEventListener("click", ()=>{
    
    addTileSelector('buildable', 'test.png');
    clearGrid();
    buildGrid(getGridDimensions());

    
});
    clickGridTiles();

function clearGrid(){
    for(let i = holder.children.length-1; i > 0; i--){
        holder.removeChild(holder.children[i]);
    }
}
function getGridDimensions(){
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    
    let dimensions = {"w":width,"h":height};
    return dimensions; 
}   
function addTileSelector(name, image){

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
        tile.style.top = Math.floor(i / dimensions.w) * (tileSize + borderSize)+ "px"; 
        
        
        holder.appendChild(tile);
    }
}
function clickGridTiles(){
    holder.addEventListener("click", (e) =>{

        if(e.target.getAttribute('id')!="grid"){
            e.target.style.backgroundImage = "url('test2.png')";
        }     
        
    });
}



