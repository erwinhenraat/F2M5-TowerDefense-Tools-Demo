let button = document.getElementById("submit");
let gridHolder = document.getElementById("grid");
let selectorHolder = document.getElementById("selectorHolder");
let tileSize = 25;
let borderSize = 2;

let activeSelector = 'default';


button.addEventListener("click", ()=>{
    
   
    clearGrid();
    buildGrid(getGridDimensions());

    
});
addTileSelector('spawnpoint');  
addTileSelector('path');      
addTileSelector('waypoint');
addTileSelector('buildable');
addTileSelector('default');
addTileSelector('deselect');

if(selectorHolder.children.length > 0){
    selectorHolder.addEventListener('click',(e)=>{
        
        if(e.target.id != "selectorHolder"){
            activeSelector = e.target.id;
            
            //clear borders    
            for(let i=0;i<selectorHolder.children.length;i++){
                selectorHolder.children[i].style.borderWidth = "0px";
            }
            e.target.style.borderWidth = "2px";

        }
    });
} 

clickGridTiles();


function addTileSelector(name){
    let size = 20;
    let margin = 10;
    let tileSelector = document.createElement("div");

    tileSelector.id = name;
    
    tileSelector.className = "selector";
    tileSelector.style.width = size + "px";
    tileSelector.style.height = size + "px";
    
//activate when using images    
    let image = "url('" +name+ ".png')";
   // tileSelector.style.backgroundImage = image;
   
    tileSelector.style.left = selectorHolder.children.length * (size + margin) + margin +"px";
    selectorHolder.appendChild(tileSelector);
    
   
    

    
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
        
        
        gridHolder.appendChild(tile);
    }
}
function clearGrid(){
    for(let i = gridHolder.children.length-1; i >= 0; i--){
        gridHolder.removeChild(gridHolder.children[i]);
    }
}
function getGridDimensions(){
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    
    let dimensions = {"w":width,"h":height};
    return dimensions; 
}   



let colorDict = {spawnpoint:"red",path:"yellow", waypoint:"blue", buildable:"green", default:"grey"};

function clickGridTiles(){
    gridHolder.addEventListener("click", (e) =>{

        if(e.target.getAttribute('id')!="grid"){
            //e.target.style.backgroundImage = "url('test2.png')";
            console.log(activeSelector);

            e.target.style.backgroundColor = colorDict[activeSelector];




        }     
        
    });
}



