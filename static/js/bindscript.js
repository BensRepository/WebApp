var previousKey = "F1"
function keyboardKeyClick(key){
    
    document.getElementById(key).style.backgroundColor = "green"
    document.getElementById(previousKey).style.backgroundColor = "gray"
    previousKey = key
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
function clearBinds(){
    Primary = ""
    Secondary = ""
    Grenade1 = "" 
    Grenade2 = ""
    Grenade3 = ""
    Grenade4 = ""
    Equipment1 = ""
    Equipment2 = ""
    Equipment3 = ""
    document.getElementById("consoleCode").innerText =""
    document.getElementById("CT-Price").innerHTML =""
    document.getElementById("T-Price").innerHTML =""
    TPrice = 0
    CTPrice = 0
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

var Primary = ""
var Secondary = ""
var Grenade1 = "" 
var Grenade2 = ""
var Grenade3 = ""
var Grenade4 = ""
var Equipment1 = ""
var Equipment2 = ""
var Equipment3 = ""
var TPrice =0
var CTPrice =0
function configureBuyBind(gun){

    weapons = {"ak47":"Primary","aug":"Primary","awp":"Primary","famas":"Primary","g3sg1":"Primary","galilar":"Primary","m4a1":"Primary","m4a4":"Primary","scar20":"Primary","sg556":"Primary","ssg08":"Primary",
    "m249":"Primary","mag-7":"Primary","negev":"Primary","nova":"Primary","sawed-off":"Primary","xm1014":"Primary",
    "bizon":"Primary","mac10":"Primary","mp5":"Primary","mp7":"Primary","mp9":"Primary","p90":"Primary","ump45":"Primary",
    "cz75-auto":"Secondary","deagle":"Secondary","elite":"Secondary","fiveseven":"Secondary","p250":"Secondary","p2000":"Secondary","revolver":"Secondary","tec9":"Secondary",
    "decoy":"Grenades","flashbang":"Grenades","flashbang2":"Grenades","hegrenade":"Grenades","incgrenade":"Grenades","molitov":"Grenades","smokegrenade":"Grenades",
    "defuser":"Equipment","taser":"Equipment","vest":"Equipment","vesthelm":"Equipment"}
    
    costs = {"ak47":2700,"aug":3300,"awp":4750,"famas":2050,"g3sg1":5000,"galilar":1800,"m4a1":2900,"m4a4":3100,"scar20":5000,"sg556":3000,"ssg08":1700,
    "m249":5200,"mag-7":1300,"negev":1700,"nova":1050,"sawed-off":1100,"xm1014":2000,
    "bizon":1400,"mac10":1050,"mp5":1500,"mp7":1700,"mp9":1250,"p90":2350,"ump45":1200,
    "cz75-auto":500,"deagle":700,"elite":300,"fiveseven":500,"p250":300,"revolver":600,"tec9":500,
    "decoy":50,"flashbang":200,"flashbang2":200,"hegrenade":300,"incgrenade":600,"molitov":400,"smokegrenade":300, // MAKE PRICES TAKE AWAY AFTER NEW CLICK
    "defuser":400,"taser":200,"vest":650,"vesthelm":1000}
    //alert(document.getElementById("consoleCode").innerHTML.split("'")[3])

    //document.getElementsByClassName("gunBackground").backgroundColor ="transparent"

    //document.getElementById(gun+".png").style.borderColor = "green"

    document.getElementById("thirdSection").style.display = "Block"
    var key = document.getElementById("selectedKey").innerHTML.slice(14,)

    //if(document.getElementById("consoleCode").value ==""){
        //newBind = "bind " +key.slice(14,)+" 'buy " + gun+";'"
    //}
    //else{
        //newBind = "buy " +gun +";'"
    //}

    

    if(weapons[gun] == "Primary"){
       
        if(gun == "ak47" || gun == "m4a1" || gun == "m4a4"){
            Primary = "buy " + "ak47" + ";" +"buy " + "m4a1" + ";"
            if(gun =="ak47"){
                TPrice += costs[gun]
                CTPrice += costs["m4a1"]
            }
            else if(gun =="m4a1"){
                CTPrice += costs[gun]
                TPrice += costs["ak47"]
            }
            else if(gun =="m4a4"){
                CTPrice += costs[gun]
                TPrice += costs["ak47"]
            }
        }
        else if(gun == "famas" || gun == "galilar"){
            Primary = "buy " + "galilar" + ";" +"buy " + "famas" + ";"
            if(gun =="galilar"){
                TPrice += costs[gun]
                CTPrice += costs["famas"]
            }
            else if(gun =="famas"){
                CTPrice += costs[gun]
                TPrice += costs["galilar"]
            }
        }
        else if(gun == "scar20" || gun == "g3sg1"){
            Primary = "buy " + "scar20" + ";" +"buy " + "g3sg1" + ";"
            if(gun =="scar20"){
                TPrice += costs[gun]
                CTPrice += costs["g3sg1"]
            }
            else if(gun =="g3sg1"){
                CTPrice += costs[gun]
                TPrice += costs["scar20"]
            }
        }
        else if(gun == "aug" || gun == "sg556"){
            Primary = "buy " + "aug" + ";" +"buy " + "sg556" + ";"
            if(gun =="sg556"){
                TPrice += costs[gun]
                CTPrice += costs["aug"]
            }
            else if(gun =="aug"){
                CTPrice += costs[gun]
                TPrice += costs["sg556"]
            }
        }
        else if(gun == "sawedoff" || gun == "mag7"){
            Primary = "buy " + "sawedoff" + ";" +"buy " + "mag7" + ";"
            if(gun =="sawedoff"){
                TPrice += costs[gun]
                CTPrice += costs["mag7"]
            }
            else if(gun =="mag7"){
                CTPrice += costs[gun]
                TPrice += costs["sawedoff"]
            }
        }
        else if(gun == "mac10" || gun == "mp9"){
            Primary = "buy " + "mac10" + ";" +"buy " + "mp9" + ";"
            if(gun =="mac10"){
                TPrice += costs[gun]
                CTPrice += costs["mp9"]
            }
            else if(gun =="mp9"){
                CTPrice += costs[gun]
                TPrice += costs["mac10"]
            }
        }
        else if(gun == "mp5" || gun == "mp7"){
            Primary = "buy " + "mp5" + ";" +"buy " + "mp7" + ";"
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }

        else{
            Primary = "buy " + gun + ";"
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }
    }
    else if(weapons[gun] == "Secondary"){
        if(gun == "autec9" || gun == "fiveseven"){
            Secondary = "buy " + "tec9" + ";" +"buy " + "fiveseven" + ";"
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }
        if(gun == "deagle" || gun == "revolver"){
            Secondary = "buy " + "deagle" + ";" +"buy " + "revolver" + ";"
            if(gun =="revolver"){
                TPrice += costs["revolver"]
                CTPrice += costs["revolver"]
            }
            else if(gun =="deagle9"){
                CTPrice += costs["deagle"]
                TPrice += costs["deagle"]
            }
        }
        else{
            Secondary = "buy " + gun + ";"
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }
        
    }
    else if(weapons[gun] == "Grenades"){
        if(gun == "flashbang2"){
            gun = "flashbang"
        }
        if(Grenade1 == ""){
            Grenade1 = "buy " + gun + ";" //cant have molitov and incen - both teams
            CTPrice += costs[gun] // cant have 2 flashes
            TPrice += costs[gun]
        }
        else if(Grenade2 == ""){
            Grenade2 = "buy " + gun + ";"
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }
        else if(Grenade3 == ""){
            Grenade3 = "buy " + gun + ";"
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }
        else if(Grenade4 == ""){
            Grenade4 = "buy " + gun + ";"
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }
        else{
            alert("Grenades Full")
        }
    }
    else if(weapons[gun] == "Equipment"){
        if(Equipment1 == ""){
            Equipment1 = "buy " + gun + ";" // one amour
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }
        else if(Equipment2 == ""){
            Equipment2 = "buy " + gun + ";"
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }
        else if(Equipment3 == ""){
            Equipment3 = "buy " + gun + ";"
            CTPrice += costs[gun]
            TPrice += costs[gun]
        }
        else{
            alert("Equipment full")
        }
    }
    else{
        alert("fuck")
    }
    document.getElementById("T-Price").innerHTML = "Terroist Price: $"+TPrice
    document.getElementById("CT-Price").innerHTML = "Counter-Terroist Price : $"+CTPrice
    var newBind = 'Bind ' + " "+key+ " '" + Primary + Secondary + Grenade1 + Grenade2 + Grenade3 + Grenade4 + Equipment1 + Equipment2 + Equipment3 +"'"

    document.getElementById("consoleCode").innerText =  newBind
    
     
    
}

