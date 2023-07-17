function keyboardKeyClick(key){
    selectedBind = key
    document.getElementById("thirdSection").style.display ="none"
    document.getElementById("loadoutChoice").style.display ="none"
    document.getElementById("selectedKey").innerHTML="Selected Key: "+key;
    document.getElementById("secondTwoTitle").innerHTML="2. What type of bind do you need?";
    document.getElementById("binds").style.display = "Block"
}

function bindClick(bind){
    

    bindsCode = {"Mute": "bind toggle " + selectedBind+ " voice_enable",
                 "Remove Crosshair": "bind " + selectedBind+ " toggle crosshair 0 1",
                "Clear Decals":"bind "+selectedBind+" r_cleardecals",
                "Toggle Hands":"bind "+selectedBind+" toggle cl_righthand 0 1",
                "Jumpthrow":'alias "+jumpthrow" "+jump;-attack"; alias "-jumpthrow" "-jump"; bind '+selectedBind+' "+jumpthrow"',
                "Net_graph":'alias +netg "net_graph 1;+showscores";alias -netg "net_graph 0;-showscores";bind ' + selectedBind +' "+netg";',
                "Zoom Radar":'bind ' +selectedBind+ ' "incrementvar cl_radar_scale 0 1 0.25"',
                }

    if (bind == "Weapon Buys"){
        document.getElementById("loadoutChoice").style.display ="Block"
        document.getElementById("thirdSection").style.display ="none"
 
    }
    else{
        document.getElementById("loadoutChoice").style.display ="none"
        document.getElementById("thirdSection").style.display ="Block"
        document.getElementById("consoleCode").innerText = bindsCode[bind]
       

    }
    


}

function CopyFunction(){
    var copyText = document.getElementById("consoleCode");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

function displayLoadoutImage(type){
    var filenames = JSON.parse(document.getElementById('Filenames').textContent); 

    for (let i = 0; i < filenames[type].length; i++) {
        var img = document.createElement("IMG");
        url = filenames[type][i]
        img.src = url.slice(1,);
        img.id = filenames[type][i].split("\\")[1];
        img.style.width = "150px";
        img.style.height = "auto";
        img.setAttribute("class", "gunBackground");
        img.addEventListener("click", function(){configureBuyBind(filenames[type][i].split("\\")[1].split(".")[0])});
        document.getElementById(type).appendChild(img);
      }

}


function configureBuyBind(gun){

    weapons = {"ak47":"Primary","aug":"Primary","awp":"Primary","famas":"Primary","g3sg1":"Primary","galilar":"Primary","m4a1":"Primary","m4a4":"Primary","scar20":"Primary","sg556":"Primary","ssg08":"Primary",
    "m249":"Primary","mag-7":"Primary","negev":"Primary","nova":"Primary","sawed-off":"Primary","xm1014":"Primary",
    "bizon":"Primary","mac10":"Primary","mp5":"Primary","mp7":"Primary","mp9":"Primary","p90":"Primary","ump45":"Primary",
    "cz75-auto":"Secondary","deagle":"Secondary","elite":"Secondary","fiveseven":"Secondary","p250":"Secondary","p2000":"Secondary","revolver":"Secondary","tec9":"Secondary",
    "decoy":"Grenades","flashbang":"Grenades","flashbang2":"Grenades","hegrenade":"Grenades","incgrenade":"Grenades","molitov":"Grenades","smokegrenade":"Grenades",
    "defuser":"Equipment","taser":"Equipment","vest":"Equipment","vesthelm":"Equipment"}
    alert(weapons[gun])

    alert(document.getElementById("consoleCode").innerHTML.split("'")[3])
    //document.getElementsByClassName("gunBackground").backgroundColor ="transparent"

    //document.getElementById(gun+".png").style.borderColor = "green"

    document.getElementById("thirdSection").style.display = "Block"

    var key = document.getElementById("selectedKey").innerHTML
    newBind = "bind " +key.slice(14,)+" 'buy " + gun+";'"
   
    document.getElementById("consoleCode").innerText =  document.getElementById("consoleCode").innerHTML + newBind
    

    
}

