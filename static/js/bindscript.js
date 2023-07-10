function keyboardKeyClick(key){
    selectedBind = key
    document.getElementById("thirdSection").style.display ="none"
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
        img.id = filenames[type][i].slice(24,filenames[type][i].length -4);
        img.style.width = "150px";
        img.style.height = "auto";
        img.addEventListener("click", function(){configureBuyBind(filenames[type][i]) });
        document.getElementById(type).appendChild(img);
      }

}


function configureBuyBind(test){
    alert(test)
}