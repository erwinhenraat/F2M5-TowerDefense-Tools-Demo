let button = document.getElementById("submit");
let savebtn = document.getElementById("save");
let gridHolder = document.getElementById("grid");
let selectorHolder = document.getElementById("selectorHolder");
let tileSize = 25;
let borderSize = 2;
let activeSelector = 'default';

savebtn.addEventListener("click", ()=>{
    saveGrid();
});

button.addEventListener("click", ()=>{
    clearGrid();
    buildGrid(getGridDimensions());    
});
addTileSelector('spawnpoint');  
addTileSelector('path');      
addTileSelector('waypoint');
addTileSelector('buildable');
addTileSelector('default');
clickGridTiles();
clickSelectors();

function saveGrid(){
    console.log("save grid data");
    let tileData = [];
    for(let i = 0; i < gridHolder.children.length; i++){      
        let color = gridHolder.children[i].style.backgroundColor;
        let type = getKeyByValue(colorDict, color);


        /*
        switch(color){
            case "red":
            type = "spawnpoint";
            break;
            case "yellow":
            type = "path";
            break;
            case "blue":
            type = "waypoint";
            break;
            case "green":
            type = "buildable";
            break;
            case "grey":
            type = "default";
            break;
        }
*/
        tileData.push(type);
        

    }
    console.log(tileData);


}

function clickSelectors(){
    if(selectorHolder.children.length > 0){
        selectorHolder.addEventListener('click',(e)=>{
            if(e.target.id != "selectorHolder"){
                activeSelector = e.target.classList[1];                    
                for(let i=0;i<selectorHolder.children.length;i++){
                    selectorHolder.children[i].style.borderWidth = "0px";
                }
                e.target.style.borderWidth = "2px";
            }
        });
    }
}
function addTileSelector(name){
    let size = 20;
    let margin = 10;
    let tileSelector = document.createElement("div");
    tileSelector.classList.add("selector");
    tileSelector.classList.add(name);
    tileSelector.style.width = size + "px";
    tileSelector.style.height = size + "px";
    tileSelector.style.left = selectorHolder.children.length * (size + margin) + margin +"px";
    selectorHolder.appendChild(tileSelector);   
}
function buildGrid(dimensions){        
    let tileCount = dimensions.w * dimensions.h;
    for(let i = 0 ; i < tileCount ; i++)
    {
        let tile = document.createElement("div");
        tile.classList.add("tile");       
        tile.style.width = tileSize+"px";
        tile.style.height = tileSize+"px";
        tile.style.borderWidth = borderSize+"px";        
        tile.style.left = (i % dimensions.w) * (tileSize + borderSize) + "px";
        tile.style.top = Math.floor(i / dimensions.w) * (tileSize + borderSize)+ "px";               
        tile.style.backgroundColor = "grey";
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
            e.target.style.backgroundColor = colorDict[activeSelector];
        }           
    });
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}



