function play_button(){
  window.location.replace("http://127.0.0.1:8000/SkinMaster/Play/")
  }
  function leaderboard_button(){
    window.location.replace("http://127.0.0.1:8000/SkinMaster/Leaderboard/");
  }
  function about_button(){
    window.location.replace("http://127.0.0.1:8000/SkinMaster/About/");
  }
  function report_bug_screen_button(){
    window.location.replace("http://127.0.0.1:8000/SkinMaster/ReportBug/");
  }

  function practise_button(){
    window.location.replace("http://127.0.0.1:8000/SkinMaster/Play/Practise/");
  }
  function ranked_button(){
    window.location.replace("http://127.0.0.1:8000/SkinMaster/Play/Ranked/");
  }
  function survival_button(){
    window.location.replace("http://127.0.0.1:8000/SkinMaster/Play/Survival/");
  }

  function makeImages(gun,colour,type,skin){
  
    var img = document.createElement("IMG");
    url = "/static/skins/"+type+"/"+gun+"/"+colour+"/"+ skin+".png"
    img.src = url;
    img.id = skin
    img.style.width = "100%";
    img.style.height = "auto"; 
    var p = document.createElement("p");
    p.innerHTML = skin
    p.style.color ="white"
    p.style.width = "100%"
    p.style.height = "auto"
    var d = document.createElement("div");
    d.style.width = "200px"
    d.style.height = "auto"
    d.id = skin + "d"

    d.style.float = "left"

    document.getElementById('practiseSkins').appendChild(d);

    document.getElementById(skin + "d").appendChild(img);
    document.getElementById(skin + "d").appendChild(p);
    
  }
  var column1 = ""
  var column2 = ""
  var column3 = ""
  var column4 = ""
  var column5 = ""
  var column6 = ""
  var column7 = ""
  var column8 = ""
  var column9 = ""
  var column10 = ""

  var last_column = "column1"
  var correct = 0
  var wrong = 0
  var success_rate = 0
  var estimated_rank = "Wood"

  function makeImagesBoxes(gun,colour,type,skin){

    var img = document.createElement("IMG");
    url = "/static/skins/"+type+"/"+gun+"/"+colour+"/"+ skin+".png"
    img.src = url;
    img.id = "?"
    img.style.width = "100%";
    img.style.height = "auto"; 
    var p = document.createElement("p");
    p.innerHTML = "?"
    p.id = skin+"_text"
    p.style.color ="white"
    p.style.backgroundColor ="black"
    p.style.width = "100%"
    p.style.height = "auto"
    var d = document.createElement("div");
    d.style.width = "200px"
    d.style.height = "auto"
    d.id = skin 

    d.style.float = "left"
    //last_column = nextAvailableSplot(gun,colour,type,skin)
    document.getElementById(nextAvailableSplot(gun,colour,type,skin)).appendChild(d);
    currentPractiseskin = skin
    // var previousColumn = {"column2":"column1","column3":"column2","column4":"column2","column5":"column4",
    // "column6":"column5","column7":"column6","column8":"column7","column9":"column8","column10":"column9"}
    // if (nextAvailableSplot(gun,colour,type,skin) == "column1") {
      
    // } else {
    //   document.getElementById(previousColumn[nextAvailableSplot(gun,colour,type,skin).style.backgroundColor = changeColours(colour)])
    // }
    document.getElementById(d.id).appendChild(img);
    document.getElementById(d.id).appendChild(p);

  }

  function nextAvailableSplot(gun,colour,type,skin){
    available_slot = "" 

    if(column1 == ""){
      column1= [gun,colour,type,skin]
      available_slot = "column1" 
      last_column = "column1"
      document.getElementById("column1").style.backgroundColor = "goldenrod";
    }
    else  if(column2 == ""){
      column2= [gun,colour,type,skin]
      available_slot = "column2" 
      document.getElementById("column1").style.backgroundColor = changeColours(column1[1])
      last_column = "column2"
      document.getElementById("column2").style.backgroundColor = "goldenrod";
    }

    else  if(column3 == ""){
      column3= [gun,colour,type,skin]
      available_slot = "column3"  
      document.getElementById("column2").style.backgroundColor = changeColours(column2[1])
      last_column = "column3"
      document.getElementById("column3").style.backgroundColor = "goldenrod";
    }

    else  if(column4 == ""){
      column4= [gun,colour,type,skin]
      available_slot = "column4" 
      document.getElementById("column3").style.backgroundColor = changeColours(column3[1])
      last_column = "column4"
      document.getElementById("column4").style.backgroundColor = "goldenrod";
    }

    else  if(column5 == ""){
      column5= [gun,colour,type,skin]
      available_slot = "column5" 
      document.getElementById("column4").style.backgroundColor = changeColours(column4[1])
      last_column = "column5"
      document.getElementById("column5").style.backgroundColor = "goldenrod";
    }  

    else  if(column6 == ""){
      column6= [gun,colour,type,skin]
      available_slot = "column6" 
      document.getElementById("column5").style.backgroundColor = changeColours(column5[1])
      last_column = "column6"
      document.getElementById("column6").style.backgroundColor = "goldenrod";
    }

    else  if(column7 == ""){
      column7= [gun,colour,type,skin]
      available_slot = "column7" 
      document.getElementById("column6").style.backgroundColor = changeColours(column6[1])
      last_column = "column7"
      document.getElementById("column7").style.backgroundColor = "goldenrod";
    }

    else  if(column8 == ""){
      column8= [gun,colour,type,skin]
      available_slot = "column8" 
      document.getElementById("column7").style.backgroundColor = changeColours(column7[1])
      last_column = "column8"
      document.getElementById("column8").style.backgroundColor = "goldenrod";
    }

    else  if(column9 == ""){
      column9= [gun,colour,type,skin]
      available_slot = "column9" 
      document.getElementById("column8").style.backgroundColor = changeColours(column8[1])
      last_column = "column9"
      document.getElementById("column9").style.backgroundColor = "goldenrod";
    }

    else  if(column10 == ""){
      column10= [gun,colour,type,skin]
      available_slot = "column10" 
      document.getElementById("column9").style.backgroundColor = changeColours(column9[1])

      document.getElementById("column10").style.backgroundColor = "goldenrod";

    }

    else {
      available_slot = "stop"
      switchPositions(gun,colour,type,skin);
      alert("test")
      document.getElementById("column10").style.backgroundColor = "goldenrod";

    }
  
    return(available_slot)

  }

    function changeColours(temp){
      if(temp == "light_blue"){
        temp ="#1a606e"
      }
      else if(temp == "purple"){
        temp = '#241a3b'
      }
      else if(temp == "pink"){
        temp = '#5c1153'
      }
      else if(temp == "blue"){
        temp = '#0b1666'
      }
      else if(temp == "red"){
        temp = '#421317'
      }
      return temp
    }
    function switchPositions(gun,colour,type,skin){
      temp = column2
      document.getElementById(column1[3]).remove();
      bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
      document.getElementById(column2[3]).remove();
      column1 =""
      column2 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById("column1").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour

      temp = column3
      bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
      document.getElementById(column3[3]).remove();
      column3 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column2").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour

      temp = column4
      bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
      document.getElementById(column4[3]).remove();
      column4 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column3").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour

      temp = column5
      bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
      document.getElementById(column5[3]).remove();
      column5 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column4").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour

      temp = column6
      bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
      document.getElementById(column6[3]).remove();
      column6 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column5").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour

      temp = column7
      bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
      document.getElementById(column7[3]).remove();
      column7 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column6").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour

      temp = column8
      bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
      document.getElementById(column8[3]).remove();
      column8 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column7").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour

      temp = column9
      bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
      document.getElementById(column9[3]).remove();
      column9 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column8").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour

      temp = column10
      bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
      document.getElementById(column10[3]).remove();
      column10 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column9").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
    

      try{
        document.getElementById(column10[3]).remove();
      }
      catch{

        makeImagesBoxes(gun,colour,type,skin)
        column10temp = document.getElementById("column9")
        column10temp.getElementById(skin).remove();
        document.getElementById("column10").style.backgroundColor = changeColours(colour)
      }
     
      alert(skin)


    }

    
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    var currentPractiseskin = ""

    function practiseGame(){   
      document.getElementById("practise_game").style.display = "none"
      randomType = ""
      randomGun =""
      randomColour=""
      randomSkin = ""

      //Combined guns for category full url split for return varables
      all_guns_urls = ['./static/skins/machineguns/m249/grey\\Contrast Spray.png',
        './static/skins/machineguns/m249/grey\\Impact Drill.png', './static/skins/machineguns/m249/grey\\Jungle DDPAT.png',
        './static/skins/machineguns/m249/grey\\Jungle.png', './static/skins/machineguns/m249/grey\\Predator.png', 
        './static/skins/machineguns/m249/grey\\Submerged.png', './static/skins/machineguns/m249/light_blue\\Blizzard Marbleized.png',
        './static/skins/machineguns/m249/light_blue\\Gator Mesh.png', './static/skins/machineguns/m249/light_blue\\Midnight Palm.png',
        './static/skins/machineguns/m249/light_blue\\Shipping Forecast.png', './static/skins/machineguns/m249/blue\\Deep Relief.png', './static/skins/machineguns/m249/blue\\Humidor.png', 
        './static/skins/machineguns/m249/blue\\Magma.png', './static/skins/machineguns/m249/blue\\O.S.I.P.R..png', './static/skins/machineguns/m249/blue\\Spectre.png', 
        './static/skins/machineguns/m249/blue\\System Lock.png', './static/skins/machineguns/m249/blue\\Warbird.png', './static/skins/machineguns/m249/purple\\Aztec.png',
        './static/skins/machineguns/m249/purple\\Downtown.png', './static/skins/machineguns/m249/purple\\Emerald Poison Dart.png', './static/skins/machineguns/m249/purple\\Nebula Crusader.png',
        './static/skins/machineguns/negev/grey\\Army Sheen.png', './static/skins/machineguns/negev/grey\\Boroque Sand.png', './static/skins/machineguns/negev/light_blue\\Bulkhead.png',
        './static/skins/machineguns/negev/light_blue\\CaliCamo.png', './static/skins/machineguns/negev/light_blue\\Nuclear Waste.png', './static/skins/machineguns/negev/light_blue\\Palm.png',
        './static/skins/machineguns/negev/blue\\Anodized Navy.png', './static/skins/machineguns/negev/blue\\Bratatat.png', './static/skins/machineguns/negev/blue\\Dazzle.png',
        './static/skins/machineguns/negev/blue\\Desert-Strike.png', './static/skins/machineguns/negev/blue\\Drop Me.png', './static/skins/machineguns/negev/blue\\Infrastructure.png', 
        "./static/skins/machineguns/negev/blue\\Man-o'-war.png", './static/skins/machineguns/negev/blue\\Phoenix Stencil.png', './static/skins/machineguns/negev/blue\\Prototype.png', 
        './static/skins/machineguns/negev/blue\\Terrain.png', './static/skins/machineguns/negev/blue\\Ultralight.png', './static/skins/machineguns/negev/purple\\dev_texture.png', 
        './static/skins/machineguns/negev/purple\\Lionfish.png', './static/skins/machineguns/negev/purple\\Loudmouth.png', './static/skins/machineguns/negev/purple\\Power Loader.png',
        './static/skins/machineguns/negev/pink\\Mjolnir.png','./static/skins/shotguns/mag7/grey\\Irradiated Alert.png', './static/skins/shotguns/mag7/grey\\Navy Sheen.png', 
        './static/skins/shotguns/mag7/grey\\Rust Coat.png', './static/skins/shotguns/mag7/grey\\Sand Dune.png', './static/skins/shotguns/mag7/grey\\Seabird.png', './static/skins/shotguns/mag7/grey\\Storm.png',
        './static/skins/shotguns/mag7/light_blue\\Carbon Fiber.png', './static/skins/shotguns/mag7/light_blue\\Chainmail.png', './static/skins/shotguns/mag7/light_blue\\Metallic DDPAT.png', 
        './static/skins/shotguns/mag7/light_blue\\Silver.png', './static/skins/shotguns/mag7/blue\\Cobalt Core.png', './static/skins/shotguns/mag7/blue\\Copper Coated.png',
        './static/skins/shotguns/mag7/blue\\Counter Terrace.png', './static/skins/shotguns/mag7/blue\\Firestarter.png', './static/skins/shotguns/mag7/blue\\Foresight.png', 
        './static/skins/shotguns/mag7/blue\\Hard Water.png', './static/skins/shotguns/mag7/blue\\Hazard.png', './static/skins/shotguns/mag7/blue\\Heaven Guard.png', './static/skins/shotguns/mag7/blue\\Insomnia.png', 
        './static/skins/shotguns/mag7/blue\\Memento.png', './static/skins/shotguns/mag7/blue\\Popdog.png', './static/skins/shotguns/mag7/blue\\Sonar.png', './static/skins/shotguns/mag7/purple\\BI83 Spectrum.png',
        './static/skins/shotguns/mag7/purple\\Bulldozer.png', './static/skins/shotguns/mag7/purple\\Core Breach.png', './static/skins/shotguns/mag7/purple\\Heat.png',
        './static/skins/shotguns/mag7/purple\\Monster Call.png', './static/skins/shotguns/mag7/purple\\Petroglyph.png', './static/skins/shotguns/mag7/purple\\Praetorian.png',
        './static/skins/shotguns/mag7/purple\\Prism Terrace.png', './static/skins/shotguns/mag7/purple\\SWAG-7.png', './static/skins/shotguns/mag7/pink\\Cinquedea.png',
        './static/skins/shotguns/mag7/pink\\Justice.png', './static/skins/shotguns/nova/grey\\Army Sheen.png', './static/skins/shotguns/nova/grey\\Forest Leaves.png', 
        './static/skins/shotguns/nova/grey\\Mandrel.png', './static/skins/shotguns/nova/grey\\Moon in Libra.png', './static/skins/shotguns/nova/grey\\Polar Mesh.png',
        './static/skins/shotguns/nova/grey\\Predator.png', './static/skins/shotguns/nova/grey\\Sand Dune.png', './static/skins/shotguns/nova/grey\\Walnut.png', 
        './static/skins/shotguns/nova/light_blue\\Caged Steel.png', './static/skins/shotguns/nova/light_blue\\Candy Apple.png', './static/skins/shotguns/nova/light_blue\\Green Apple.png',
        './static/skins/shotguns/nova/light_blue\\Rust Coat.png', './static/skins/shotguns/nova/blue\\Blaze Orange.png', './static/skins/shotguns/nova/blue\\Exo.png',
        './static/skins/shotguns/nova/blue\\Ghost Camo.png', './static/skins/shotguns/nova/blue\\Interlock.png', './static/skins/shotguns/nova/blue\\Modern Hunter.png', 
        './static/skins/shotguns/nova/blue\\Plume.png', './static/skins/shotguns/nova/blue\\Quick Sand.png', './static/skins/shotguns/nova/blue\\Ranger.png', 
        './static/skins/shotguns/nova/blue\\Tempest.png', './static/skins/shotguns/nova/blue\\Windblown.png', './static/skins/shotguns/nova/blue\\Wood Fired.png', 
        './static/skins/shotguns/nova/purple\\Baroque Orange.png', './static/skins/shotguns/nova/purple\\Clear Polymer.png', './static/skins/shotguns/nova/purple\\Gila.png', 
        './static/skins/shotguns/nova/purple\\Graphite.png', './static/skins/shotguns/nova/purple\\Koi.png', './static/skins/shotguns/nova/purple\\Red Quartz.png', 
        './static/skins/shotguns/nova/purple\\Rising Skull.png', "./static/skins/shotguns/nova/purple\\Sobek's Bite.png", './static/skins/shotguns/nova/purple\\Toy Soldier.png', 
        './static/skins/shotguns/nova/purple\\Wild Six.png', './static/skins/shotguns/nova/pink\\Antique.png', './static/skins/shotguns/nova/pink\\Bloomstick.png', 
        './static/skins/shotguns/nova/pink\\Hyper Beast.png', './static/skins/shotguns/sawedoff/grey\\Bamboo Shadow.png', './static/skins/shotguns/sawedoff/grey\\Clay Ambush.png', 
        './static/skins/shotguns/sawedoff/grey\\Forest DDPAT.png', './static/skins/shotguns/sawedoff/grey\\Irradiated Alert.png', './static/skins/shotguns/sawedoff/grey\\Jungle Thicket.png',
        './static/skins/shotguns/sawedoff/grey\\Parched.png', './static/skins/shotguns/sawedoff/grey\\Sage Spray.png', './static/skins/shotguns/sawedoff/light_blue\\Mosaico.png',
        './static/skins/shotguns/sawedoff/light_blue\\Rust Coat.png', './static/skins/shotguns/sawedoff/light_blue\\Snake Camo.png', './static/skins/shotguns/sawedoff/blue\\Amber Fade.png', 
        './static/skins/shotguns/sawedoff/blue\\Black Sand.png', './static/skins/shotguns/sawedoff/blue\\Brake Light.png', './static/skins/shotguns/sawedoff/blue\\Copper.png',
        './static/skins/shotguns/sawedoff/blue\\First Class.png', './static/skins/shotguns/sawedoff/blue\\Fubar.png', './static/skins/shotguns/sawedoff/blue\\Full Stop.png',
        './static/skins/shotguns/sawedoff/blue\\Morris.png', './static/skins/shotguns/sawedoff/blue\\Origami.png', './static/skins/shotguns/sawedoff/blue\\Spirit Board.png',
        './static/skins/shotguns/sawedoff/blue\\Yorick.png', './static/skins/shotguns/sawedoff/blue\\Zander.png', './static/skins/shotguns/sawedoff/purple\\Apocalypto.png', 
        './static/skins/shotguns/sawedoff/purple\\Highwayman.png', './static/skins/shotguns/sawedoff/purple\\Limelight.png', './static/skins/shotguns/sawedoff/purple\\Orange DDPAT.png',
        './static/skins/shotguns/sawedoff/purple\\Serenity.png', './static/skins/shotguns/sawedoff/pink\\Devourer.png', './static/skins/shotguns/sawedoff/pink\\Kiss♥Love.png', 
        './static/skins/shotguns/sawedoff/pink\\Wasteland Princess.png', './static/skins/shotguns/sawedoff/red\\The Kraken.png', './static/skins/shotguns/xm1014/grey\\Blue Spruce.png', 
        './static/skins/shotguns/xm1014/grey\\Blue Tire.png', './static/skins/shotguns/xm1014/grey\\Charter.png', './static/skins/shotguns/xm1014/grey\\Grassland.png',
        './static/skins/shotguns/xm1014/grey\\Hieroglyph.png', './static/skins/shotguns/xm1014/grey\\Jungle.png', './static/skins/shotguns/xm1014/grey\\Urban Perforated.png', 
        './static/skins/shotguns/xm1014/light_blue\\Banana Leaf.png', './static/skins/shotguns/xm1014/light_blue\\Blue Steel.png', './static/skins/shotguns/xm1014/light_blue\\CaliCamo.png',
        './static/skins/shotguns/xm1014/light_blue\\Fallout Warning.png', './static/skins/shotguns/xm1014/blue\\Blaze Orange.png', './static/skins/shotguns/xm1014/blue\\Bone Machine.png',
        './static/skins/shotguns/xm1014/blue\\Frost Borre.png', './static/skins/shotguns/xm1014/blue\\Oxide Blaze.png', './static/skins/shotguns/xm1014/blue\\Quicksilver.png', 
        './static/skins/shotguns/xm1014/blue\\Red Leather.png', './static/skins/shotguns/xm1014/blue\\Red Python.png', './static/skins/shotguns/xm1014/blue\\Scumbria.png', 
        './static/skins/shotguns/xm1014/blue\\Slipstream.png', './static/skins/shotguns/xm1014/blue\\VariCamo Blue.png', './static/skins/shotguns/xm1014/blue\\Watchdog.png',
        './static/skins/shotguns/xm1014/pink\\Ancient Lore.png', './static/skins/shotguns/xm1014/pink\\Black Tie.png', './static/skins/shotguns/xm1014/pink\\Elegant Vines.png',
        './static/skins/shotguns/xm1014/pink\\Entombed.png', './static/skins/shotguns/xm1014/pink\\Heaven Guard.png', './static/skins/shotguns/xm1014/pink\\Incinegator.png',
        './static/skins/shotguns/xm1014/pink\\Seasons.png', './static/skins/shotguns/xm1014/pink\\Teclu Burner.png', './static/skins/shotguns/xm1014/pink\\Tranquility.png',
        './static/skins/shotguns/xm1014/pink\\XOXO.png', './static/skins/shotguns/xm1014/pink\\Ziggy.png', './static/skins/shotguns/xm1014/pink\\Zombie Offensive.png',
        './static/skins/pistols/cz75auto/grey\\Army Sheen.png', './static/skins/pistols/cz75auto/grey\\Framework.png', './static/skins/pistols/cz75auto/grey\\Green Plaid.png',
        './static/skins/pistols/cz75auto/grey\\Indigo.png', './static/skins/pistols/cz75auto/grey\\Jungle Dashed.png', './static/skins/pistols/cz75auto/light_blue\\Midnight Palm.png',
        './static/skins/pistols/cz75auto/light_blue\\Silver.png', './static/skins/pistols/cz75auto/blue\\Circaetus.png', './static/skins/pistols/cz75auto/blue\\Crimson Web.png',
        './static/skins/pistols/cz75auto/blue\\Distressed.png', './static/skins/pistols/cz75auto/blue\\Emerald Quartz.png', './static/skins/pistols/cz75auto/blue\\Emerald.png', 
        './static/skins/pistols/cz75auto/blue\\Hexane.png', './static/skins/pistols/cz75auto/blue\\Imprint.png', './static/skins/pistols/cz75auto/blue\\Nitro.png', 
        './static/skins/pistols/cz75auto/blue\\Poison Dart.png', './static/skins/pistols/cz75auto/blue\\Polymer.png', './static/skins/pistols/cz75auto/blue\\Tuxedo.png', 
        './static/skins/pistols/cz75auto/blue\\Twist.png', './static/skins/pistols/cz75auto/blue\\Vendetta.png', './static/skins/pistols/cz75auto/purple\\Chalice.png', 
        './static/skins/pistols/cz75auto/purple\\Eco.png', './static/skins/pistols/cz75auto/purple\\Pole Position.png', './static/skins/pistols/cz75auto/purple\\Red Astor.png', 
        './static/skins/pistols/cz75auto/purple\\Syndicate.png', './static/skins/pistols/cz75auto/purple\\Tacticat.png', './static/skins/pistols/cz75auto/purple\\Tigris.png', 
        './static/skins/pistols/cz75auto/purple\\Tread Plate.png', './static/skins/pistols/cz75auto/pink\\The Fuschia Is Now.png', './static/skins/pistols/cz75auto/pink\\Xiangliu.png',
        './static/skins/pistols/cz75auto/pink\\Yellow Jacket.png', './static/skins/pistols/cz75auto/red\\Victoria.png', './static/skins/pistols/deserteagle/light_blue\\Midnight Storm.png',
        './static/skins/pistols/deserteagle/light_blue\\Mudder.png', './static/skins/pistols/deserteagle/light_blue\\Night.png', './static/skins/pistols/deserteagle/light_blue\\The Bronze.png', 
        './static/skins/pistols/deserteagle/light_blue\\Urban Rubble.png', './static/skins/pistols/deserteagle/blue\\Blue Ply.png', './static/skins/pistols/deserteagle/blue\\Bronze Deco.png',
        './static/skins/pistols/deserteagle/blue\\Corinthian.png', './static/skins/pistols/deserteagle/blue\\Meteorite.png', './static/skins/pistols/deserteagle/blue\\Night Heist.png',
        './static/skins/pistols/deserteagle/blue\\Oxide Blaze.png', './static/skins/pistols/deserteagle/blue\\Sputnik.png', './static/skins/pistols/deserteagle/blue\\Urban DDPAT.png',
        './static/skins/pistols/deserteagle/purple\\Blaze.png', './static/skins/pistols/deserteagle/purple\\Crimson Web.png', './static/skins/pistols/deserteagle/purple\\Directive.png',
        './static/skins/pistols/deserteagle/purple\\Emerald Jormungandr.png', './static/skins/pistols/deserteagle/purple\\Hand Cannon.png', './static/skins/pistols/deserteagle/purple\\Heirloom.png',
        './static/skins/pistols/deserteagle/purple\\Light Rail.png', './static/skins/pistols/deserteagle/purple\\Naga.png', './static/skins/pistols/deserteagle/purple\\Pilot.png', 
        './static/skins/pistols/deserteagle/purple\\Sunset Storm.png', './static/skins/pistols/deserteagle/purple\\Trigger Discipline.png', './static/skins/pistols/deserteagle/pink\\Cobalt Disruption.png',
        './static/skins/pistols/deserteagle/pink\\Conspiracy.png', './static/skins/pistols/deserteagle/pink\\Fennec Fox.png', './static/skins/pistols/deserteagle/pink\\Hypnotic.png',
        './static/skins/pistols/deserteagle/pink\\Kumicho Dragon.png', './static/skins/pistols/deserteagle/pink\\Mecha Industries.png', './static/skins/pistols/deserteagle/red\\Code Red.png', 
        './static/skins/pistols/deserteagle/red\\Golden Koi.png', './static/skins/pistols/deserteagle/red\\Ocean Drive.png', './static/skins/pistols/deserteagle/red\\Printstream.png',
        './static/skins/pistols/dualberettas/grey\\Briar.png', './static/skins/pistols/dualberettas/grey\\Colony.png', './static/skins/pistols/dualberettas/grey\\Contractor.png', 
        './static/skins/pistols/dualberettas/grey\\Heist.png', './static/skins/pistols/dualberettas/grey\\Moon in Libra.png', './static/skins/pistols/dualberettas/grey\\Oil Change.png',
        './static/skins/pistols/dualberettas/light_blue\\Drift Wood.png', './static/skins/pistols/dualberettas/light_blue\\Pyre.png', './static/skins/pistols/dualberettas/light_blue\\Stained.png',
        './static/skins/pistols/dualberettas/light_blue\\Switch Board.png', './static/skins/pistols/dualberettas/blue\\Anodized Navy.png', './static/skins/pistols/dualberettas/blue\\Balance.png',
        './static/skins/pistols/dualberettas/blue\\Black Limba.png', './static/skins/pistols/dualberettas/blue\\Cartel.png', './static/skins/pistols/dualberettas/blue\\Dualing Dragons.png',
        './static/skins/pistols/dualberettas/blue\\Elite 1.6.png', './static/skins/pistols/dualberettas/blue\\Emerald.png', './static/skins/pistols/dualberettas/blue\\Panther.png',
        './static/skins/pistols/dualberettas/blue\\Retribution.png', './static/skins/pistols/dualberettas/blue\\Shred.png', './static/skins/pistols/dualberettas/blue\\Tread.png', 
        './static/skins/pistols/dualberettas/blue\\Ventilators.png', './static/skins/pistols/dualberettas/purple\\Cobalt Quartz.png', './static/skins/pistols/dualberettas/purple\\Demolition.png',
        './static/skins/pistols/dualberettas/purple\\Dezastre.png', './static/skins/pistols/dualberettas/purple\\Duelist.png', './static/skins/pistols/dualberettas/purple\\Flora Carnivora.png',
        './static/skins/pistols/dualberettas/purple\\Hemoglobin.png', './static/skins/pistols/dualberettas/purple\\Marina.png', './static/skins/pistols/dualberettas/purple\\Royal Consorts.png',
        './static/skins/pistols/dualberettas/purple\\Urban Shock.png', './static/skins/pistols/dualberettas/pink\\Cobra Strike.png', './static/skins/pistols/dualberettas/pink\\Melondrama.png',
        './static/skins/pistols/dualberettas/pink\\Twin Turbo.png', './static/skins/pistols/fiveseven/grey\\Anodized Gunmetal.png', './static/skins/pistols/fiveseven/grey\\Contractor.png',
        './static/skins/pistols/fiveseven/grey\\Coolant.png', './static/skins/pistols/fiveseven/grey\\Forest Night.png', './static/skins/pistols/fiveseven/grey\\Jungle.png', 
        './static/skins/pistols/fiveseven/light_blue\\Candy Apple.png', './static/skins/pistols/fiveseven/light_blue\\Hot Shot.png', './static/skins/pistols/fiveseven/light_blue\\Orange Pee.png', 
        './static/skins/pistols/fiveseven/light_blue\\Withered Vine.png', './static/skins/pistols/fiveseven/blue\\Capillary.png', './static/skins/pistols/fiveseven/blue\\Crimson Blossom.png',
        './static/skins/pistols/fiveseven/blue\\Flame Test.png', './static/skins/pistols/fiveseven/blue\\Kami.png', './static/skins/pistols/fiveseven/blue\\Nightshade.png', 
        './static/skins/pistols/fiveseven/blue\\Nitro.png', './static/skins/pistols/fiveseven/blue\\Scrawl.png', './static/skins/pistols/fiveseven/blue\\Scumbria.png', 
        './static/skins/pistols/fiveseven/blue\\Silver Quartz.png', './static/skins/pistols/fiveseven/blue\\Urban Hazard.png', './static/skins/pistols/fiveseven/blue\\Violent Daimyo.png', 
        './static/skins/pistols/fiveseven/purple\\Berries And Cherries.png', './static/skins/pistols/fiveseven/purple\\Boost Protocol.png', './static/skins/pistols/fiveseven/purple\\Buddy.png',
        './static/skins/pistols/fiveseven/purple\\Case Hardened.png', './static/skins/pistols/fiveseven/purple\\Copper Galaxy.png', './static/skins/pistols/fiveseven/purple\\Neon Kimono.png',
        './static/skins/pistols/fiveseven/purple\\Retrobution.png', './static/skins/pistols/fiveseven/purple\\Triumvirate.png', './static/skins/pistols/fiveseven/pink\\Fairy Tale.png', 
        './static/skins/pistols/fiveseven/pink\\Fall Hazard.png', './static/skins/pistols/fiveseven/pink\\Fowl Play.png', './static/skins/pistols/fiveseven/pink\\Monkey Business.png',
        './static/skins/pistols/fiveseven/red\\Angry Mob.png', './static/skins/pistols/fiveseven/red\\Hyper Beast.png', './static/skins/pistols/glock18/light_blue\\Death Rattle.png',
        './static/skins/pistols/glock18/light_blue\\Groundwater.png', './static/skins/pistols/glock18/light_blue\\High Beam.png', './static/skins/pistols/glock18/light_blue\\Night.png',
        './static/skins/pistols/glock18/light_blue\\Red Tire.png', './static/skins/pistols/glock18/light_blue\\Sand Dune.png', './static/skins/pistols/glock18/blue\\Blue Fissure.png', 
        './static/skins/pistols/glock18/blue\\Bunsen Burner.png', './static/skins/pistols/glock18/blue\\Candy Apple.png', './static/skins/pistols/glock18/blue\\Catacombs.png', 
        './static/skins/pistols/glock18/blue\\Clear Polymer.png', './static/skins/pistols/glock18/blue\\Ironwork.png', './static/skins/pistols/glock18/blue\\Off World.png', 
        './static/skins/pistols/glock18/blue\\Oxide Blaze.png', './static/skins/pistols/glock18/blue\\Reactor.png', './static/skins/pistols/glock18/blue\\Sacrifice.png', 
        './static/skins/pistols/glock18/blue\\Warhawk.png', './static/skins/pistols/glock18/blue\\Winterized.png', './static/skins/pistols/glock18/blue\\Wraiths.png',
        './static/skins/pistols/glock18/purple\\Brass.png', './static/skins/pistols/glock18/purple\\Dragon Tattoo.png', './static/skins/pistols/glock18/purple\\Fade.png', 
        './static/skins/pistols/glock18/purple\\Franklin.png', './static/skins/pistols/glock18/purple\\Grinder.png', './static/skins/pistols/glock18/purple\\Moonrise.png', 
        './static/skins/pistols/glock18/purple\\Nuclear Garden.png', './static/skins/pistols/glock18/purple\\Pink DDPAT.png', "./static/skins/pistols/glock18/purple\\Ramese's Reach.png", 
        './static/skins/pistols/glock18/purple\\Royal Legion.png', './static/skins/pistols/glock18/purple\\Steel Disruption.png', './static/skins/pistols/glock18/purple\\Synth Leaf.png',
        './static/skins/pistols/glock18/purple\\Umbral Rabbit.png', './static/skins/pistols/glock18/purple\\Weasel.png', './static/skins/pistols/glock18/pink\\Snack Attack.png',
        './static/skins/pistols/glock18/pink\\Twilight Galaxy.png', './static/skins/pistols/glock18/pink\\Vogue.png', './static/skins/pistols/glock18/pink\\Water Elemental.png',
        './static/skins/pistols/glock18/red\\Bullet Queen.png', './static/skins/pistols/glock18/red\\Gamma Doppler.png', './static/skins/pistols/glock18/red\\Neo-Noir.png', 
        './static/skins/pistols/glock18/red\\Wasteland Rebel.png', './static/skins/pistols/p2000/light_blue\\Coach Class.png', './static/skins/pistols/p2000/light_blue\\Granite Marbleized.png',
        './static/skins/pistols/p2000/light_blue\\Grassland Leaves.png', './static/skins/pistols/p2000/light_blue\\Grassland.png', './static/skins/pistols/p2000/light_blue\\Panther Camo.png',
        './static/skins/pistols/p2000/light_blue\\Pathfinder.png', './static/skins/pistols/p2000/blue\\Chainmail.png', './static/skins/pistols/p2000/blue\\Dispatch.png', 
        './static/skins/pistols/p2000/blue\\Gnarled.png', './static/skins/pistols/p2000/blue\\Imperial.png', './static/skins/pistols/p2000/blue\\Ivory.png',
        './static/skins/pistols/p2000/blue\\Lifted Spirits.png', './static/skins/pistols/p2000/blue\\Oceanic.png', './static/skins/pistols/p2000/blue\\Pulse.png', 
        './static/skins/pistols/p2000/blue\\Red FragCam.png', './static/skins/pistols/p2000/blue\\Silver.png', './static/skins/pistols/p2000/blue\\Turf.png',
        './static/skins/pistols/p2000/blue\\Urban Hazard.png', './static/skins/pistols/p2000/purple\\Acid Etched.png', './static/skins/pistols/p2000/purple\\Amber Fade.png', 
        './static/skins/pistols/p2000/purple\\Handgun.png', './static/skins/pistols/p2000/purple\\Obsidian.png', './static/skins/pistols/p2000/purple\\Scorpion.png',
        './static/skins/pistols/p2000/purple\\Space Race.png', './static/skins/pistols/p2000/purple\\Woodsman.png', './static/skins/pistols/p2000/pink\\Corticera.png', 
        './static/skins/pistols/p2000/pink\\Imperial Dragon.png', './static/skins/pistols/p2000/pink\\Ocean Foam.png', './static/skins/pistols/p2000/pink\\Wicked Sick.png',
        './static/skins/pistols/p2000/red\\Fire Elemental.png', './static/skins/pistols/p250/grey\\Bone Mask.png', './static/skins/pistols/p250/grey\\Boreal Forest.png',
        './static/skins/pistols/p250/grey\\Drought.png', './static/skins/pistols/p250/grey\\Facility Draft.png', './static/skins/pistols/p250/grey\\Forest Night.png', 
        './static/skins/pistols/p250/grey\\Mint Kimono.png', './static/skins/pistols/p250/grey\\Sand Dune.png', './static/skins/pistols/p250/light_blue\\Contamination.png',
        './static/skins/pistols/p250/light_blue\\Crimson Kimono.png', './static/skins/pistols/p250/light_blue\\Dark Filigree.png', './static/skins/pistols/p250/light_blue\\Facets.png',
        './static/skins/pistols/p250/light_blue\\Gunsmoke.png', './static/skins/pistols/p250/light_blue\\Metallic DDPAT.png', './static/skins/pistols/p250/blue\\Bengal Tiger.png',
        './static/skins/pistols/p250/blue\\Black & Tan.png', './static/skins/pistols/p250/blue\\Cassette.png', './static/skins/pistols/p250/blue\\Contaminant.png', './static/skins/pistols/p250/blue\\Exchanger.png',
        './static/skins/pistols/p250/blue\\Hive.png', './static/skins/pistols/p250/blue\\Iron Clad.png', './static/skins/pistols/p250/blue\\Modern Hunter.png', './static/skins/pistols/p250/blue\\Re.built.png', 
        './static/skins/pistols/p250/blue\\Ripple.png', './static/skins/pistols/p250/blue\\Steel Disruption.png', './static/skins/pistols/p250/blue\\Valence.png', './static/skins/pistols/p250/blue\\Verdigris.png', 
        './static/skins/pistols/p250/blue\\Whiteout.png', './static/skins/pistols/p250/purple\\Cyber Shell.png', './static/skins/pistols/p250/purple\\Digital Architect.png', 
        './static/skins/pistols/p250/purple\\Inferno.png', './static/skins/pistols/p250/purple\\Nevermore.png', './static/skins/pistols/p250/purple\\Nuclear Threat.png', 
        './static/skins/pistols/p250/purple\\Red Rock.png', './static/skins/pistols/p250/purple\\Splash.png', './static/skins/pistols/p250/purple\\Supernova.png',
        './static/skins/pistols/p250/purple\\Vino Primo.png', './static/skins/pistols/p250/purple\\Wingshot.png', './static/skins/pistols/p250/purple\\X-Ray.png', 
        "./static/skins/pistols/p250/pink\\Apep's Curse.png", './static/skins/pistols/p250/pink\\Asiimov.png', './static/skins/pistols/p250/pink\\Cartel.png', 
        './static/skins/pistols/p250/pink\\Franklin.png', './static/skins/pistols/p250/pink\\Mehndi.png', './static/skins/pistols/p250/pink\\Muertos.png', 
        './static/skins/pistols/p250/pink\\Undertow.png', './static/skins/pistols/p250/pink\\Visions.png', './static/skins/pistols/p250/red\\See Ya Later.png',
        './static/skins/pistols/r8revolver/grey\\Bone Mask.png', './static/skins/pistols/r8revolver/grey\\Canal Spray.png', './static/skins/pistols/r8revolver/grey\\Desert Brush.png', 
        './static/skins/pistols/r8revolver/grey\\Inlay.png', './static/skins/pistols/r8revolver/grey\\Night.png', './static/skins/pistols/r8revolver/light_blue\\Nitro.png',
        './static/skins/pistols/r8revolver/light_blue\\Phoenix Marker.png', './static/skins/pistols/r8revolver/blue\\Blaze.png', './static/skins/pistols/r8revolver/blue\\Bone Forged.png',
        './static/skins/pistols/r8revolver/blue\\Crimson Web.png', './static/skins/pistols/r8revolver/blue\\Grip.png', './static/skins/pistols/r8revolver/blue\\Junk Yard.png', 
        './static/skins/pistols/r8revolver/blue\\Memento.png', './static/skins/pistols/r8revolver/blue\\Survivalist.png', './static/skins/pistols/r8revolver/purple\\Banana Cannon.png',
        './static/skins/pistols/r8revolver/purple\\Crazy 8.png', './static/skins/pistols/r8revolver/purple\\Reboot.png', './static/skins/pistols/r8revolver/pink\\Amber Fade.png',
        './static/skins/pistols/r8revolver/pink\\Llama Cannon.png', './static/skins/pistols/r8revolver/pink\\Skull Crusher.png', './static/skins/pistols/r8revolver/red\\Fade.png',
        './static/skins/pistols/tec9/grey\\Army Mesh.png', './static/skins/pistols/tec9/grey\\Bamboo Forest.png', './static/skins/pistols/tec9/grey\\Groundwater.png', 
        './static/skins/pistols/tec9/grey\\Phoenix Chalk.png', './static/skins/pistols/tec9/grey\\Tornado.png', './static/skins/pistols/tec9/grey\\Urban DDPAT.png',
        './static/skins/pistols/tec9/light_blue\\Hades.png', './static/skins/pistols/tec9/light_blue\\Orange Murano.png', './static/skins/pistols/tec9/light_blue\\Rust Leaf.png', 
        './static/skins/pistols/tec9/light_blue\\VariCamo.png', './static/skins/pistols/tec9/blue\\Blast From the Past.png', './static/skins/pistols/tec9/blue\\Blue Titanium.png',
        './static/skins/pistols/tec9/blue\\Brass.png', './static/skins/pistols/tec9/blue\\Cracked Opal.png', './static/skins/pistols/tec9/blue\\Cut Out.png',
        './static/skins/pistols/tec9/blue\\Flash Out.png', './static/skins/pistols/tec9/blue\\Fubar.png', './static/skins/pistols/tec9/blue\\Ice Cap.png', 
        './static/skins/pistols/tec9/blue\\Isaac.png', './static/skins/pistols/tec9/blue\\Jambiya.png', "./static/skins/pistols/tec9/blue\\Mummy's Rot.png", 
        './static/skins/pistols/tec9/blue\\Ossified.png', './static/skins/pistols/tec9/blue\\Rebel.png', './static/skins/pistols/tec9/blue\\Safety Net.png', 
        './static/skins/pistols/tec9/blue\\Sandstorm.png', './static/skins/pistols/tec9/blue\\Snek-9.png', './static/skins/pistols/tec9/blue\\Terrace.png', 
        './static/skins/pistols/tec9/blue\\Toxic.png', './static/skins/pistols/tec9/purple\\Avalanche.png', './static/skins/pistols/tec9/purple\\Bamboozle.png',
        './static/skins/pistols/tec9/purple\\Brother.png', './static/skins/pistols/tec9/purple\\Nuclear Threat.png', './static/skins/pistols/tec9/purple\\Re-Entry.png', 
        './static/skins/pistols/tec9/purple\\Red Quartz.png', './static/skins/pistols/tec9/purple\\Titanium Bit.png', './static/skins/pistols/tec9/pink\\Decimator.png', 
        './static/skins/pistols/tec9/pink\\Fuel Injector.png', './static/skins/pistols/tec9/pink\\Remote Control.png', './static/skins/pistols/usps/light_blue\\Desert Tactical.png',
        './static/skins/pistols/usps/light_blue\\Forest Leaves.png', './static/skins/pistols/usps/light_blue\\Para Green.png', './static/skins/pistols/usps/light_blue\\Pathfinder.png',
        './static/skins/pistols/usps/light_blue\\Royal Blue.png', './static/skins/pistols/usps/blue\\Black Lotus.png', './static/skins/pistols/usps/blue\\Blood Tiger.png',
        './static/skins/pistols/usps/blue\\Blueprint.png', './static/skins/pistols/usps/blue\\Business Class.png', './static/skins/pistols/usps/blue\\Check Engine.png', 
        './static/skins/pistols/usps/blue\\Lead Conduit.png', './static/skins/pistols/usps/blue\\Night Ops.png', './static/skins/pistols/usps/blue\\Purple DDPAT.png', 
        './static/skins/pistols/usps/blue\\Stainless.png', './static/skins/pistols/usps/blue\\Torque.png', './static/skins/pistols/usps/purple\\Ancient Visions.png', 
        './static/skins/pistols/usps/purple\\Cyrex.png', './static/skins/pistols/usps/purple\\Dark Water.png', './static/skins/pistols/usps/purple\\Flashback.png', 
        './static/skins/pistols/usps/purple\\Guardian.png', './static/skins/pistols/usps/purple\\Orange Anolis.png', './static/skins/pistols/usps/purple\\Overgrowth.png',
        './static/skins/pistols/usps/purple\\Road Rash.png', './static/skins/pistols/usps/purple\\Ticket to Hell.png', './static/skins/pistols/usps/pink\\Caiman.png', 
        './static/skins/pistols/usps/pink\\Cortex.png', './static/skins/pistols/usps/pink\\Monster Mashup.png', './static/skins/pistols/usps/pink\\Orion.png',
        './static/skins/pistols/usps/pink\\Serum.png', './static/skins/pistols/usps/pink\\Target Acquired.png', './static/skins/pistols/usps/pink\\Whiteout.png', 
        './static/skins/pistols/usps/red\\Kill Confirmed.png', './static/skins/pistols/usps/red\\Neo-Noir.png', './static/skins/pistols/usps/red\\Printstream.png',
        './static/skins/pistols/usps/red\\The Traitor.png','./static/skins/smgs/mac10/grey\\Indigo.png', './static/skins/smgs/mac10/grey\\Sienna Damask.png',
        './static/skins/smgs/mac10/grey\\Strats.png', './static/skins/smgs/mac10/grey\\Surfwood.png', './static/skins/smgs/mac10/grey\\Tornado.png', 
        './static/skins/smgs/mac10/grey\\Urban DDPAT.png', './static/skins/smgs/mac10/light_blue\\Calf Skin.png', './static/skins/smgs/mac10/light_blue\\Candy Apple.png',
        './static/skins/smgs/mac10/light_blue\\Commuter.png', './static/skins/smgs/mac10/light_blue\\Echoing Sands.png', './static/skins/smgs/mac10/light_blue\\Palm.png', 
        './static/skins/smgs/mac10/light_blue\\Silver.png', './static/skins/smgs/mac10/blue\\Aloha.png', './static/skins/smgs/mac10/blue\\Amber Fade.png', 
        './static/skins/smgs/mac10/blue\\Carnivore.png', './static/skins/smgs/mac10/blue\\Classic Crate.png', './static/skins/smgs/mac10/blue\\Copper Borre.png', 
        './static/skins/smgs/mac10/blue\\Ensnared.png', './static/skins/smgs/mac10/blue\\Fade.png', './static/skins/smgs/mac10/blue\\Lapis Gator.png',
        './static/skins/smgs/mac10/blue\\Monkeyflage.png', './static/skins/smgs/mac10/blue\\Nuclear Garden.png', './static/skins/smgs/mac10/blue\\Oceanic.png', 
        './static/skins/smgs/mac10/blue\\Rangeen.png', './static/skins/smgs/mac10/blue\\Ultraviolet.png', './static/skins/smgs/mac10/blue\\Whitefish.png',
        './static/skins/smgs/mac10/purple\\Allure.png', './static/skins/smgs/mac10/purple\\Button Masher.png', './static/skins/smgs/mac10/purple\\Case Hardened.png',
        './static/skins/smgs/mac10/purple\\Curse.png', './static/skins/smgs/mac10/purple\\Gold Brick.png', './static/skins/smgs/mac10/purple\\Graven.png', 
        './static/skins/smgs/mac10/purple\\Heat.png', './static/skins/smgs/mac10/purple\\Last Dive.png', './static/skins/smgs/mac10/purple\\Malachite.png', 
        './static/skins/smgs/mac10/purple\\Pipe Down.png', './static/skins/smgs/mac10/purple\\Red Filigree.png', './static/skins/smgs/mac10/purple\\Sakkaku.png',
        './static/skins/smgs/mac10/purple\\Tatter.png', './static/skins/smgs/mac10/pink\\Disco Tech.png', './static/skins/smgs/mac10/pink\\Hot Snakes.png', 
        './static/skins/smgs/mac10/pink\\Propaganda.png', './static/skins/smgs/mac10/pink\\Toybox.png', './static/skins/smgs/mac10/red\\Neon Rider.png',
        './static/skins/smgs/mac10/red\\Stalker.png', './static/skins/smgs/mp5sd/grey\\Bamboo Garden.png', './static/skins/smgs/mp5sd/grey\\Dirt Drop.png',
        './static/skins/smgs/mp5sd/light_blue\\Nitro.png', './static/skins/smgs/mp5sd/blue\\Acid Wash.png', './static/skins/smgs/mp5sd/blue\\Co-Processor.png', 
        './static/skins/smgs/mp5sd/blue\\Condition Zero.png', './static/skins/smgs/mp5sd/blue\\Desert Strike.png', './static/skins/smgs/mp5sd/blue\\Liquidation.png',
        './static/skins/smgs/mp5sd/blue\\Necro Jr..png', './static/skins/smgs/mp5sd/purple\\Agent.png', './static/skins/smgs/mp5sd/purple\\Autumn Twilly.png', 
        './static/skins/smgs/mp5sd/purple\\Gauss.png', './static/skins/smgs/mp5sd/purple\\Kitbash.png', './static/skins/smgs/mp5sd/purple\\Lab Rats.png', 
        './static/skins/smgs/mp5sd/pink\\Oxide Oasis.png', './static/skins/smgs/mp5sd/pink\\Phosphor.png', './static/skins/smgs/mp7/grey\\Army Recon.png',
        './static/skins/smgs/mp7/grey\\Asterion.png', './static/skins/smgs/mp7/grey\\Forest DDPAT.png', './static/skins/smgs/mp7/grey\\Groundwater.png', 
        './static/skins/smgs/mp7/grey\\Olive Plaid.png', './static/skins/smgs/mp7/grey\\Prey.png', './static/skins/smgs/mp7/grey\\Scorched.png', 
        './static/skins/smgs/mp7/grey\\Sunbaked.png', './static/skins/smgs/mp7/light_blue\\Gunsmoke.png', './static/skins/smgs/mp7/light_blue\\Motherboard.png', 
        './static/skins/smgs/mp7/light_blue\\Orange Peel.png', './static/skins/smgs/mp7/light_blue\\Tall Grass.png', './static/skins/smgs/mp7/light_blue\\Vault Heist.png',
        './static/skins/smgs/mp7/blue\\Akoben.png', './static/skins/smgs/mp7/blue\\Anodized Navy.png', './static/skins/smgs/mp7/blue\\Armor Core.png',
        './static/skins/smgs/mp7/blue\\Cirrus.png', './static/skins/smgs/mp7/blue\\Full Stop.png', './static/skins/smgs/mp7/blue\\Guerrilla.png', './static/skins/smgs/mp7/blue\\Mischief.png', 
        './static/skins/smgs/mp7/blue\\Skulls.png', './static/skins/smgs/mp7/blue\\Teal Blossom.png', './static/skins/smgs/mp7/blue\\Urban Hazard.png', './static/skins/smgs/mp7/blue\\Whiteout.png',
        './static/skins/smgs/mp7/purple\\Fade.png', './static/skins/smgs/mp7/purple\\Impire.png', './static/skins/smgs/mp7/purple\\Neon Ply.png', './static/skins/smgs/mp7/purple\\Ocean Foam.png', 
        './static/skins/smgs/mp7/purple\\Powercore.png', './static/skins/smgs/mp7/purple\\Special Delivery.png', './static/skins/smgs/mp7/pink\\Abyssal Apparition.png',
        './static/skins/smgs/mp7/pink\\Nemesis.png', './static/skins/smgs/mp7/red\\Bloodsport.png', './static/skins/smgs/mp9/grey\\Army Sheen.png', './static/skins/smgs/mp9/grey\\Dry Season.png',
        './static/skins/smgs/mp9/grey\\Green Plaid.png', './static/skins/smgs/mp9/grey\\Sand Dashed.png', './static/skins/smgs/mp9/grey\\Slide.png', './static/skins/smgs/mp9/grey\\Storm.png', 
        './static/skins/smgs/mp9/light_blue\\Old Roots.png', './static/skins/smgs/mp9/light_blue\\Orange Peel.png', './static/skins/smgs/mp9/blue\\Bioleak.png',
        './static/skins/smgs/mp9/blue\\Black Sand.png', './static/skins/smgs/mp9/blue\\Capillary.png', './static/skins/smgs/mp9/blue\\Dark Age.png', './static/skins/smgs/mp9/blue\\Dart.png',
        './static/skins/smgs/mp9/blue\\Deadly Poison.png', './static/skins/smgs/mp9/blue\\Featherweight.png', './static/skins/smgs/mp9/blue\\Hot Rod.png', 
        './static/skins/smgs/mp9/blue\\Modest Threat.png', './static/skins/smgs/mp9/blue\\Music Box.png', "./static/skins/smgs/mp9/blue\\Pandora's Box.png", './static/skins/smgs/mp9/blue\\Sand Scale.png',
        './static/skins/smgs/mp9/blue\\Setting Sun.png', './static/skins/smgs/mp9/purple\\Bulldozer.png', './static/skins/smgs/mp9/purple\\Goo.png', './static/skins/smgs/mp9/purple\\Hypnotic.png',
        './static/skins/smgs/mp9/purple\\Mount Fuji.png', './static/skins/smgs/mp9/purple\\Rose Iron.png', './static/skins/smgs/mp9/purple\\Ruby Poison Dart.png', 
        './static/skins/smgs/mp9/purple\\Stained Glass.png', './static/skins/smgs/mp9/pink\\Airlock.png', './static/skins/smgs/mp9/pink\\Food Chain.png', './static/skins/smgs/mp9/pink\\Hydra.png',
        './static/skins/smgs/mp9/pink\\Wild Lily.png', './static/skins/smgs/mp9/red\\Starlight Protector.png', './static/skins/smgs/p90/grey\\Ancient Earth.png',
        './static/skins/smgs/p90/grey\\Desert DDPAT.png', './static/skins/smgs/p90/grey\\Sand Spray.png', './static/skins/smgs/p90/grey\\Scorched.png', './static/skins/smgs/p90/grey\\Storm.png',
        './static/skins/smgs/p90/light_blue\\Ash Wood.png', './static/skins/smgs/p90/light_blue\\Fallout Warning.png', './static/skins/smgs/p90/light_blue\\Leather.png', 
        './static/skins/smgs/p90/light_blue\\Sunset Lily.png', './static/skins/smgs/p90/light_blue\\Verdant Growth.png', './static/skins/smgs/p90/blue\\Baroque Red.png', 
        './static/skins/smgs/p90/blue\\Cocoa Rampage.png', './static/skins/smgs/p90/blue\\Desert Warfare.png', './static/skins/smgs/p90/blue\\Elite Build.png',
        './static/skins/smgs/p90/blue\\Facility Negative.png', './static/skins/smgs/p90/blue\\Freight.png', './static/skins/smgs/p90/blue\\Glacier Mesh.png', 
        './static/skins/smgs/p90/blue\\Grim.png', './static/skins/smgs/p90/blue\\Module.png', './static/skins/smgs/p90/blue\\Off World.png', './static/skins/smgs/p90/blue\\Schematic.png', 
        './static/skins/smgs/p90/blue\\Teardown.png', './static/skins/smgs/p90/blue\\Tiger Pit.png', './static/skins/smgs/p90/blue\\Traction.png',
        './static/skins/smgs/p90/purple\\Astral Jörmungandr.png', './static/skins/smgs/p90/purple\\Blind Spot.png', './static/skins/smgs/p90/purple\\Chopper.png',
        './static/skins/smgs/p90/purple\\Death Grip.png', './static/skins/smgs/p90/purple\\Neoqueen.png', './static/skins/smgs/p90/purple\\ScaraB Rush.png',
        './static/skins/smgs/p90/purple\\Vent Rush.png', './static/skins/smgs/p90/purple\\Virus.png', './static/skins/smgs/p90/pink\\Cold Blooded.png', 
        './static/skins/smgs/p90/pink\\Emerald Dragon.png', './static/skins/smgs/p90/pink\\Nostalgia.png', './static/skins/smgs/p90/pink\\Run and Hide.png', 
        './static/skins/smgs/p90/pink\\Shallow Grave.png', './static/skins/smgs/p90/pink\\Shapewood.png', './static/skins/smgs/p90/pink\\Trigon.png',
        './static/skins/smgs/p90/red\\Asiimov.png', './static/skins/smgs/p90/red\\Death by Kitty.png', './static/skins/smgs/ppbizon/grey\\Anolis.png', 
        './static/skins/smgs/ppbizon/grey\\Bamboo Print.png', './static/skins/smgs/ppbizon/grey\\Death Rattle.png', './static/skins/smgs/ppbizon/grey\\Facility Sketch.png',
        './static/skins/smgs/ppbizon/grey\\Forest Leaves.png', './static/skins/smgs/ppbizon/grey\\Irradiated Alert.png', './static/skins/smgs/ppbizon/grey\\Sand Dashed.png', 
        './static/skins/smgs/ppbizon/grey\\Seabird.png', './static/skins/smgs/ppbizon/grey\\Urban Dashed.png', './static/skins/smgs/ppbizon/light_blue\\Breaker Box.png', 
        './static/skins/smgs/ppbizon/light_blue\\Candy Apple.png', './static/skins/smgs/ppbizon/light_blue\\Carbon Fiber.png', './static/skins/smgs/ppbizon/light_blue\\Chemical Green.png', 
        './static/skins/smgs/ppbizon/light_blue\\Night Ops.png', './static/skins/smgs/ppbizon/blue\\Brass.png', './static/skins/smgs/ppbizon/blue\\Cobalt Halftone.png',
        './static/skins/smgs/ppbizon/blue\\Harvester.png', './static/skins/smgs/ppbizon/blue\\Jungle Slipstream.png', './static/skins/smgs/ppbizon/blue\\Lumen.png',
        './static/skins/smgs/ppbizon/blue\\Modern Hunter.png', './static/skins/smgs/ppbizon/blue\\Night Riot.png', './static/skins/smgs/ppbizon/blue\\Photic Zone.png',
        './static/skins/smgs/ppbizon/blue\\Runic.png', './static/skins/smgs/ppbizon/blue\\Rust Coat.png', './static/skins/smgs/ppbizon/blue\\Water Sigil.png',
        './static/skins/smgs/ppbizon/purple\\Antique.png', './static/skins/smgs/ppbizon/purple\\Blue Streak.png', './static/skins/smgs/ppbizon/purple\\Embargo.png', 
        './static/skins/smgs/ppbizon/purple\\Fuel Rod.png', './static/skins/smgs/ppbizon/purple\\Osiris.png', './static/skins/smgs/ppbizon/purple\\Space Cat.png', 
        './static/skins/smgs/ppbizon/pink\\High Roller.png', './static/skins/smgs/ppbizon/red\\Judgement of Anubis.png', './static/skins/smgs/ump45/grey\\Caramel.png',
        './static/skins/smgs/ump45/grey\\Facility Dark.png', './static/skins/smgs/ump45/grey\\Indigo.png', './static/skins/smgs/ump45/grey\\Mudder.png',
        './static/skins/smgs/ump45/grey\\Scorched.png', './static/skins/smgs/ump45/grey\\Urban DDPAT.png', './static/skins/smgs/ump45/light_blue\\Carbon Fiber.png',
        './static/skins/smgs/ump45/light_blue\\Fallout Warning.png', './static/skins/smgs/ump45/light_blue\\Gunsmoke.png', './static/skins/smgs/ump45/light_blue\\Houndstooth.png',
        './static/skins/smgs/ump45/light_blue\\Mechanism.png', './static/skins/smgs/ump45/blue\\Blaze.png', './static/skins/smgs/ump45/blue\\Bone Pile.png', 
        './static/skins/smgs/ump45/blue\\Briefing.png', './static/skins/smgs/ump45/blue\\Corporal.png', './static/skins/smgs/ump45/blue\\Day Lily.png', 
        './static/skins/smgs/ump45/blue\\Delusion.png', './static/skins/smgs/ump45/blue\\Full Stop.png', './static/skins/smgs/ump45/blue\\Labyrinth.png',
        './static/skins/smgs/ump45/blue\\Metal Flowers.png', "./static/skins/smgs/ump45/blue\\Minotaur's Labyrinth.png", './static/skins/smgs/ump45/blue\\Oscillator.png', 
        './static/skins/smgs/ump45/blue\\Riot.png', './static/skins/smgs/ump45/blue\\Roadblock.png', './static/skins/smgs/ump45/purple\\Arctic Wolf.png',
        './static/skins/smgs/ump45/purple\\Crime Scene.png', './static/skins/smgs/ump45/purple\\Exposure.png', './static/skins/smgs/ump45/purple\\Gold Bismuth.png', 
        './static/skins/smgs/ump45/purple\\Grand Prix.png', './static/skins/smgs/ump45/purple\\Moonrise.png', './static/skins/smgs/ump45/purple\\Plastique.png',
        './static/skins/smgs/ump45/purple\\Scaffold.png', './static/skins/smgs/ump45/pink\\Fade.png', './static/skins/smgs/ump45/pink\\Momentum.png',
        './static/skins/smgs/ump45/pink\\Primal Saber.png', './static/skins/smgs/ump45/pink\\Wild Child.png','./static/skins/rifles/ak47/light_blue\\Baroque Purple.png', 
        './static/skins/rifles/ak47/light_blue\\Jungle Spray.png', './static/skins/rifles/ak47/light_blue\\Predator.png', './static/skins/rifles/ak47/light_blue\\Safari Mesh.png',
        './static/skins/rifles/ak47/blue\\Black Laminate.png', './static/skins/rifles/ak47/blue\\Elite Build.png', './static/skins/rifles/ak47/blue\\Green Laminate.png',
        './static/skins/rifles/ak47/blue\\Steel Delta.png', './static/skins/rifles/ak47/blue\\Uncharted.png', './static/skins/rifles/ak47/purple\\Blue Laminate.png', 
        './static/skins/rifles/ak47/purple\\Emerald Pinstripe.png', './static/skins/rifles/ak47/purple\\First Class.png', './static/skins/rifles/ak47/purple\\Orbit Mk01.png', 
        './static/skins/rifles/ak47/purple\\Rat Rod.png', './static/skins/rifles/ak47/purple\\Safety Net.png', './static/skins/rifles/ak47/purple\\Slate.png',
        './static/skins/rifles/ak47/pink\\Cartel.png', './static/skins/rifles/ak47/pink\\Case Hardened.png', './static/skins/rifles/ak47/pink\\Frontside Misty.png',
        './static/skins/rifles/ak47/pink\\Hydroponic.png', './static/skins/rifles/ak47/pink\\Ice Coaled.png', './static/skins/rifles/ak47/pink\\Jet Set.png', 
        './static/skins/rifles/ak47/pink\\Panthera onca.png', './static/skins/rifles/ak47/pink\\Phantom Disruptor.png', './static/skins/rifles/ak47/pink\\Point Disarray.png',
        './static/skins/rifles/ak47/pink\\Red Laminate.png', './static/skins/rifles/ak47/pink\\Redline.png', './static/skins/rifles/ak47/red\\Aquamarine Revenge.png',
        './static/skins/rifles/ak47/red\\Asiimov.png', './static/skins/rifles/ak47/red\\Bloodsport.png', './static/skins/rifles/ak47/red\\Fire Serpent.png', 
        './static/skins/rifles/ak47/red\\Fuel Injector.png', './static/skins/rifles/ak47/red\\Gold Arabesque.png', './static/skins/rifles/ak47/red\\Head Shot.png', 
        './static/skins/rifles/ak47/red\\Jaguar.png', './static/skins/rifles/ak47/red\\Leet Museo.png', './static/skins/rifles/ak47/red\\Legion of Anubis.png', 
        './static/skins/rifles/ak47/red\\Neon Revolution.png', './static/skins/rifles/ak47/red\\Neon Rider.png', './static/skins/rifles/ak47/red\\Nightwish.png', 
        './static/skins/rifles/ak47/red\\The Empress.png', './static/skins/rifles/ak47/red\\Vulcan.png', './static/skins/rifles/ak47/red\\Wasteland Rebel.png',
        './static/skins/rifles/ak47/red\\Wild Lotus.png', './static/skins/rifles/ak47/red\\X-Ray.png', './static/skins/rifles/aug/grey\\Colony.png', 
        './static/skins/rifles/aug/grey\\Contractor.png', './static/skins/rifles/aug/grey\\Daedalus.png', './static/skins/rifles/aug/grey\\Navy Murano.png',
        './static/skins/rifles/aug/grey\\Snake Pit.png', './static/skins/rifles/aug/grey\\Storm.png', './static/skins/rifles/aug/grey\\Surveillance.png',
        './static/skins/rifles/aug/grey\\Sweeper.png', './static/skins/rifles/aug/light_blue\\Condemned.png', './static/skins/rifles/aug/light_blue\\Radiation Hazard.png',
        './static/skins/rifles/aug/light_blue\\Spalted Wood.png', './static/skins/rifles/aug/blue\\Amber Fade.png', './static/skins/rifles/aug/blue\\Amber Slipstream.png',
        './static/skins/rifles/aug/blue\\Anodized Navy.png', './static/skins/rifles/aug/blue\\Carved Jade.png', './static/skins/rifles/aug/blue\\Copperhead.png', 
        './static/skins/rifles/aug/blue\\Hot Rod.png', './static/skins/rifles/aug/blue\\Plague.png', './static/skins/rifles/aug/blue\\Ricochet.png', 
        './static/skins/rifles/aug/blue\\Tom Cat.png', './static/skins/rifles/aug/blue\\Triqua.png', './static/skins/rifles/aug/blue\\Wings.png', 
        './static/skins/rifles/aug/purple\\Arctic Wolf.png', './static/skins/rifles/aug/purple\\Aristocrat.png', './static/skins/rifles/aug/purple\\Flame Jörmungandr.png',
        './static/skins/rifles/aug/purple\\Midnight Lily.png', './static/skins/rifles/aug/purple\\Random Access.png', './static/skins/rifles/aug/purple\\Sand Storm.png',
        './static/skins/rifles/aug/purple\\Torque.png', './static/skins/rifles/aug/pink\\Bengal Tiger.png', './static/skins/rifles/aug/pink\\Death by Puppy.png',
        './static/skins/rifles/aug/pink\\Fleet Flock.png', './static/skins/rifles/aug/pink\\Momentum.png', './static/skins/rifles/aug/pink\\Stymphalian.png',
        './static/skins/rifles/aug/pink\\Syd Mead.png', './static/skins/rifles/aug/red\\Akihabara Accept.png', './static/skins/rifles/aug/red\\Chameleon.png',
        './static/skins/rifles/awp/light_blue\\Safari Mesh.png', './static/skins/rifles/awp/light_blue\\Sun in Leo.png', 
        './static/skins/rifles/awp/blue\\Acheron.png', './static/skins/rifles/awp/blue\\Black Nile.png', './static/skins/rifles/awp/blue\\Capillary.png',
        './static/skins/rifles/awp/blue\\Snake Camo.png', './static/skins/rifles/awp/purple\\Atheris.png', './static/skins/rifles/awp/purple\\Exoskeleton.png',
        './static/skins/rifles/awp/purple\\PAW.png', './static/skins/rifles/awp/purple\\Phobos.png', './static/skins/rifles/awp/purple\\Pink DDPAT.png',
        './static/skins/rifles/awp/purple\\Pit Viper.png', './static/skins/rifles/awp/purple\\POP AWP.png', './static/skins/rifles/awp/purple\\Worm God.png', 
        './static/skins/rifles/awp/pink\\BOOM.png', './static/skins/rifles/awp/pink\\Corticera.png', './static/skins/rifles/awp/pink\\Duality.png',
        './static/skins/rifles/awp/pink\\Electric Hive.png', './static/skins/rifles/awp/pink\\Elite Build.png', './static/skins/rifles/awp/pink\\Fever Dream.png',
        './static/skins/rifles/awp/pink\\Graphite.png', './static/skins/rifles/awp/pink\\Mortis.png', './static/skins/rifles/awp/pink\\Redline.png', 
        './static/skins/rifles/awp/pink\\Silk Tiger.png', './static/skins/rifles/awp/red\\Asiimov.png', './static/skins/rifles/awp/red\\Chromatic Aberration.png',
        './static/skins/rifles/awp/red\\Containment Breach.png', './static/skins/rifles/awp/red\\Desert Hydra.png', './static/skins/rifles/awp/red\\Dragon Lore.png',
        './static/skins/rifles/awp/red\\Fade.png', './static/skins/rifles/awp/red\\Gungnir.png', './static/skins/rifles/awp/red\\Hyper Beast.png', 
        './static/skins/rifles/awp/red\\Lightning Strike.png', "./static/skins/rifles/awp/red\\Man-o'-war.png", './static/skins/rifles/awp/red\\Medusa.png', 
        './static/skins/rifles/awp/red\\Neo-Noir.png', './static/skins/rifles/awp/red\\Oni Taiji.png', './static/skins/rifles/awp/red\\The Prince.png',
        './static/skins/rifles/awp/red\\Wildfire.png', './static/skins/rifles/famas/grey\\Colony.png', './static/skins/rifles/famas/grey\\Contrast Spray.png', 
        './static/skins/rifles/famas/grey\\Faulty Wiring.png', './static/skins/rifles/famas/grey\\Night Borre.png', './static/skins/rifles/famas/light_blue\\CaliCamo.png',
        './static/skins/rifles/famas/light_blue\\Cyanospatter.png', './static/skins/rifles/famas/blue\\Crypsis.png', './static/skins/rifles/famas/blue\\Dark Water.png', 
        './static/skins/rifles/famas/blue\\Decommissioned.png', './static/skins/rifles/famas/blue\\Doomkitty.png', './static/skins/rifles/famas/blue\\Hexane.png',
        './static/skins/rifles/famas/blue\\Macabre.png', './static/skins/rifles/famas/blue\\Meow 36.png', './static/skins/rifles/famas/blue\\Sundown.png', 
        './static/skins/rifles/famas/blue\\Survivor Z.png', './static/skins/rifles/famas/blue\\Teardown.png', './static/skins/rifles/famas/purple\\Neural Net.png', 
        './static/skins/rifles/famas/purple\\Prime Conspiracy.png', './static/skins/rifles/famas/purple\\Pulse.png', './static/skins/rifles/famas/purple\\Sergeant.png', 
        './static/skins/rifles/famas/purple\\Spitfire.png', './static/skins/rifles/famas/purple\\Styx.png', './static/skins/rifles/famas/purple\\Valence.png',
        './static/skins/rifles/famas/purple\\ZX Spectron.png', './static/skins/rifles/famas/pink\\Afterimage.png', './static/skins/rifles/famas/pink\\Djinn.png',
        './static/skins/rifles/famas/pink\\Eye of Athena.png', './static/skins/rifles/famas/pink\\Mecha Industries.png', './static/skins/rifles/famas/pink\\Meltdown.png',
        './static/skins/rifles/famas/pink\\Rapid Eye Movement.png', './static/skins/rifles/famas/pink\\Waters of Nephthys.png', './static/skins/rifles/famas/red\\Commemoration.png',
        './static/skins/rifles/famas/red\\Roll Cage.png', './static/skins/rifles/g3sg1/grey\\Contractor.png', './static/skins/rifles/g3sg1/grey\\Desert Storm.png', 
        './static/skins/rifles/g3sg1/grey\\Jungle Dashed.png', './static/skins/rifles/g3sg1/grey\\Orange Kimono.png', './static/skins/rifles/g3sg1/grey\\Polar Camo.png',
        './static/skins/rifles/g3sg1/grey\\Safari Mesh.png', './static/skins/rifles/g3sg1/light_blue\\Ancient Ritual.png', './static/skins/rifles/g3sg1/light_blue\\Arctic Camo.png',
        './static/skins/rifles/g3sg1/light_blue\\Green Apple.png', './static/skins/rifles/g3sg1/light_blue\\VariCamo.png', './static/skins/rifles/g3sg1/blue\\Azure Zebra.png',
        './static/skins/rifles/g3sg1/blue\\Black Sand.png', './static/skins/rifles/g3sg1/blue\\Demeter.png', './static/skins/rifles/g3sg1/blue\\Digital Mesh.png',
        './static/skins/rifles/g3sg1/blue\\Hunter.png', './static/skins/rifles/g3sg1/blue\\Keeping Tabs.png', './static/skins/rifles/g3sg1/blue\\Murky.png',
        './static/skins/rifles/g3sg1/blue\\New Roots.png', './static/skins/rifles/g3sg1/blue\\Orange Crash.png', './static/skins/rifles/g3sg1/blue\\Ventilator.png',
        './static/skins/rifles/g3sg1/blue\\Violet Murano.png', './static/skins/rifles/g3sg1/purple\\Chronos.png', './static/skins/rifles/g3sg1/purple\\Dream Glade.png', 
        './static/skins/rifles/g3sg1/purple\\High Seas.png', './static/skins/rifles/g3sg1/purple\\Scavenger.png', './static/skins/rifles/g3sg1/purple\\Stinger.png', 
        './static/skins/rifles/g3sg1/pink\\Flux.png', './static/skins/rifles/g3sg1/pink\\The Executioner.png', './static/skins/rifles/galilAR/grey\\Hunting Blind.png',
        './static/skins/rifles/galilAR/grey\\Sage Spray.png', './static/skins/rifles/galilAR/grey\\Tornado.png', './static/skins/rifles/galilAR/light_blue\\Cold Fusion.png',
        './static/skins/rifles/galilAR/light_blue\\Urban Rubble.png', './static/skins/rifles/galilAR/light_blue\\VariCamo.png',
        './static/skins/rifles/galilAR/light_blue\\Winter Forest.png', './static/skins/rifles/galilAR/blue\\Akoben.png', './static/skins/rifles/galilAR/blue\\Amber Fade.png',
        './static/skins/rifles/galilAR/blue\\Aqua Terrace.png', './static/skins/rifles/galilAR/blue\\Black Sand.png', './static/skins/rifles/galilAR/blue\\Blue Titanium.png', 
        './static/skins/rifles/galilAR/blue\\Destroyer.png', './static/skins/rifles/galilAR/blue\\Dusk Ruins.png', './static/skins/rifles/galilAR/blue\\Kami.png',
        './static/skins/rifles/galilAR/blue\\Rocket Pop.png', './static/skins/rifles/galilAR/blue\\Sandstorm.png', './static/skins/rifles/galilAR/blue\\Shattered.png',
        './static/skins/rifles/galilAR/blue\\Tuxedo.png', './static/skins/rifles/galilAR/blue\\Vandal.png', './static/skins/rifles/galilAR/purple\\CAUTION!.png',
        './static/skins/rifles/galilAR/purple\\Cerberus.png', './static/skins/rifles/galilAR/purple\\Connexion.png', './static/skins/rifles/galilAR/purple\\Crimson Tsunami.png',
        './static/skins/rifles/galilAR/purple\\Firefight.png', './static/skins/rifles/galilAR/purple\\Orange DDPAT.png', 
        './static/skins/rifles/galilAR/purple\\Phoenix Blacklight.png', './static/skins/rifles/galilAR/purple\\Signal.png', 
        './static/skins/rifles/galilAR/purple\\Stone Cold.png', './static/skins/rifles/galilAR/pink\\Chromatic Aberration.png', 
        './static/skins/rifles/galilAR/pink\\Eco.png', './static/skins/rifles/galilAR/pink\\Sugar Rush.png', './static/skins/rifles/galilAR/red\\Chatterbox.png', 
        './static/skins/rifles/m4a1s/light_blue\\Boreal Forest.png', './static/skins/rifles/m4a1s/light_blue\\Moss Quartz.png', 
        './static/skins/rifles/m4a1s/light_blue\\Mud-Spec.png', './static/skins/rifles/m4a1s/blue\\Blood Tiger.png', './static/skins/rifles/m4a1s/blue\\Briefing.png',
        './static/skins/rifles/m4a1s/blue\\Fizzy POP.png', './static/skins/rifles/m4a1s/blue\\VariCamo.png', './static/skins/rifles/m4a1s/purple\\Basilisk.png',
        './static/skins/rifles/m4a1s/purple\\Bright Water.png', './static/skins/rifles/m4a1s/purple\\Dark Water.png', './static/skins/rifles/m4a1s/purple\\Emphorosaur-S.png',
        './static/skins/rifles/m4a1s/purple\\Flashback.png', './static/skins/rifles/m4a1s/purple\\Icarus Fell.png', './static/skins/rifles/m4a1s/purple\\Night Terror.png',
        './static/skins/rifles/m4a1s/purple\\Nitro.png', './static/skins/rifles/m4a1s/pink\\Atomic Alloy.png', './static/skins/rifles/m4a1s/pink\\Blue Phosphor.png', 
        './static/skins/rifles/m4a1s/pink\\Control Panel.png', './static/skins/rifles/m4a1s/pink\\Decimator.png', './static/skins/rifles/m4a1s/pink\\Guardian.png',
        './static/skins/rifles/m4a1s/pink\\Hot Rod.png', './static/skins/rifles/m4a1s/pink\\Knight.png', './static/skins/rifles/m4a1s/pink\\Leaded Glass.png',
        './static/skins/rifles/m4a1s/pink\\Master Piece.png', './static/skins/rifles/m4a1s/pink\\Nightmare.png', "./static/skins/rifles/m4a1s/red\\Chantico's Fire - Copy.png",
        "./static/skins/rifles/m4a1s/red\\Chantico's Fire.png", './static/skins/rifles/m4a1s/red\\Cyrex.png', './static/skins/rifles/m4a1s/red\\Golden Coil.png', 
        './static/skins/rifles/m4a1s/red\\Hyper Beast.png', './static/skins/rifles/m4a1s/red\\Imminent Danger.png', './static/skins/rifles/m4a1s/red\\Mecha Industries.png',
        './static/skins/rifles/m4a1s/red\\Player Two.png', './static/skins/rifles/m4a1s/red\\Printstream.png', './static/skins/rifles/m4a1s/red\\Welcome to the Jungle.png',
        './static/skins/rifles/m4a4/light_blue\\Dark Blossom.png', './static/skins/rifles/m4a4/light_blue\\Desert Storm.png', './static/skins/rifles/m4a4/light_blue\\Jungle Tiger.png',
        './static/skins/rifles/m4a4/light_blue\\Mainframe.png', './static/skins/rifles/m4a4/light_blue\\Tornado.png', './static/skins/rifles/m4a4/light_blue\\Urban DDPAT.png', 
        './static/skins/rifles/m4a4/blue\\Converter.png', './static/skins/rifles/m4a4/blue\\Faded Zebra.png', './static/skins/rifles/m4a4/blue\\Global Offensive.png', 
        './static/skins/rifles/m4a4/blue\\Magnesium.png', './static/skins/rifles/m4a4/blue\\Poly Mag.png', './static/skins/rifles/m4a4/blue\\Radiation Hazard.png', 
        './static/skins/rifles/m4a4/purple\\Daybreak.png', './static/skins/rifles/m4a4/purple\\Evil Daimyo.png', './static/skins/rifles/m4a4/purple\\Griffin.png',
        './static/skins/rifles/m4a4/purple\\Modern Hunter.png', './static/skins/rifles/m4a4/purple\\Red DDPAT.png', './static/skins/rifles/m4a4/purple\\Spider Lily.png',
        './static/skins/rifles/m4a4/purple\\Zirka.png', './static/skins/rifles/m4a4/pink\\Cyber Security.png', './static/skins/rifles/m4a4/pink\\Desolate Space.png',
        './static/skins/rifles/m4a4/pink\\Hellfire.png', './static/skins/rifles/m4a4/pink\\Poseidon.png', './static/skins/rifles/m4a4/pink\\Tooth Fairy.png',
        './static/skins/rifles/m4a4/pink\\龍王 (Dragon King).png', './static/skins/rifles/m4a4/red\\Asiimov.png', './static/skins/rifles/m4a4/red\\Bullet Rain.png', 
        './static/skins/rifles/m4a4/red\\Buzz Kill.png', './static/skins/rifles/m4a4/red\\Desert-Strike.png', './static/skins/rifles/m4a4/red\\Eye of Horus.png',
        './static/skins/rifles/m4a4/red\\In Living Color.png', './static/skins/rifles/m4a4/red\\Neo-Noir.png', './static/skins/rifles/m4a4/red\\Royal Paladin.png',
        './static/skins/rifles/m4a4/red\\Temukau.png', './static/skins/rifles/m4a4/red\\The Battlestar.png', './static/skins/rifles/m4a4/red\\The Coalition.png', 
        './static/skins/rifles/m4a4/red\\The Emperor.png', './static/skins/rifles/m4a4/red\\X-Ray.png', './static/skins/rifles/scar20/grey\\Army Sheen.png', 
        './static/skins/rifles/scar20/grey\\Contractor.png', './static/skins/rifles/scar20/grey\\Sand Mesh.png', './static/skins/rifles/scar20/grey\\Stone Mosaico.png',
        './static/skins/rifles/scar20/grey\\Storm.png', './static/skins/rifles/scar20/light_blue\\Carbon Fiber.png', './static/skins/rifles/scar20/light_blue\\Palm.png',
        './static/skins/rifles/scar20/blue\\Assault.png', './static/skins/rifles/scar20/blue\\Blueprint.png', './static/skins/rifles/scar20/blue\\Brass.png', 
        './static/skins/rifles/scar20/blue\\Crimson Web.png', './static/skins/rifles/scar20/blue\\Fragments.png', './static/skins/rifles/scar20/blue\\Green Marine.png',
        './static/skins/rifles/scar20/blue\\Grotto.png', './static/skins/rifles/scar20/blue\\Jungle Slipstream.png', './static/skins/rifles/scar20/blue\\Magna Carta.png', 
        './static/skins/rifles/scar20/blue\\Outbreak.png', './static/skins/rifles/scar20/blue\\Poultrygeist.png', './static/skins/rifles/scar20/blue\\Torn.png', 
        './static/skins/rifles/scar20/purple\\Emerald.png', './static/skins/rifles/scar20/purple\\Enforcer.png', './static/skins/rifles/scar20/purple\\Powercore.png',
        './static/skins/rifles/scar20/pink\\Bloodsport.png', './static/skins/rifles/scar20/pink\\Cardiac.png', './static/skins/rifles/scar20/pink\\Cyrex.png', 
        './static/skins/rifles/scar20/pink\\Splash Jam.png', './static/skins/rifles/sg553/grey\\Army Sheen.png', './static/skins/rifles/sg553/grey\\Barricade.png', 
        './static/skins/rifles/sg553/grey\\Bleached.png', './static/skins/rifles/sg553/grey\\Lush Ruins.png', './static/skins/rifles/sg553/grey\\Tornado.png', 
        './static/skins/rifles/sg553/grey\\Waves Perforated.png', './static/skins/rifles/sg553/light_blue\\Candy Apple.png', './static/skins/rifles/sg553/light_blue\\Fallout Warning.png',
        './static/skins/rifles/sg553/light_blue\\Gator Mesh.png', './static/skins/rifles/sg553/light_blue\\Traveler.png', './static/skins/rifles/sg553/blue\\Aerial.png',
        './static/skins/rifles/sg553/blue\\Aloha.png', './static/skins/rifles/sg553/blue\\Anodized Navy.png', './static/skins/rifles/sg553/blue\\Atlas.png',
        './static/skins/rifles/sg553/blue\\Cyberforce.png', './static/skins/rifles/sg553/blue\\Damascus Steel.png', './static/skins/rifles/sg553/blue\\Danger Close.png',
        './static/skins/rifles/sg553/blue\\Desert Blossom.png', './static/skins/rifles/sg553/blue\\Heavy Metal.png', "./static/skins/rifles/sg553/blue\\Ol' Rusty.png", 
        './static/skins/rifles/sg553/blue\\Ultraviolet.png', './static/skins/rifles/sg553/blue\\Wave Spray.png', './static/skins/rifles/sg553/purple\\Bulldozer.png', 
        './static/skins/rifles/sg553/purple\\Darkwing.png', './static/skins/rifles/sg553/purple\\Dragon Tech.png', './static/skins/rifles/sg553/purple\\Hypnotic.png',
        './static/skins/rifles/sg553/purple\\Phantom.png', './static/skins/rifles/sg553/purple\\Pulse.png', './static/skins/rifles/sg553/purple\\Tiger Moth.png', 
        './static/skins/rifles/sg553/purple\\Triarch.png', './static/skins/rifles/sg553/pink\\Colony IV.png', './static/skins/rifles/sg553/pink\\Cyrex.png',
        './static/skins/rifles/sg553/pink\\Hazard Pay.png', './static/skins/rifles/sg553/pink\\Integrale.png', './static/skins/rifles/ssg08/grey\\Blue Spruce.png', 
        './static/skins/rifles/ssg08/grey\\Jungle Dashed.png', './static/skins/rifles/ssg08/grey\\Lichen Dashed.png', './static/skins/rifles/ssg08/grey\\Prey.png',
        './static/skins/rifles/ssg08/grey\\Red Stone.png', './static/skins/rifles/ssg08/grey\\Sand Dune.png', './static/skins/rifles/ssg08/light_blue\\Azure Glyph.png',
        './static/skins/rifles/ssg08/light_blue\\Carbon Fiber.png', './static/skins/rifles/ssg08/light_blue\\Mayan Dreams.png', './static/skins/rifles/ssg08/light_blue\\Tropical Storm.png', 
        './static/skins/rifles/ssg08/blue\\Abyss.png', './static/skins/rifles/ssg08/blue\\Acid Fade.png', './static/skins/rifles/ssg08/blue\\Dark Water.png',
        './static/skins/rifles/ssg08/blue\\Detour.png', './static/skins/rifles/ssg08/blue\\Hand Brake.png', './static/skins/rifles/ssg08/blue\\Mainframe 001.png',
        './static/skins/rifles/ssg08/blue\\Necropos.png', './static/skins/rifles/ssg08/blue\\Orange Filigree.png', './static/skins/rifles/ssg08/blue\\Slashed.png', 
        './static/skins/rifles/ssg08/blue\\Spring Twilly.png', './static/skins/rifles/ssg08/blue\\Threat Detected.png', "./static/skins/rifles/ssg08/purple\\Death's Head.png", 
        './static/skins/rifles/ssg08/purple\\Fever Dream.png', './static/skins/rifles/ssg08/purple\\Ghost Crusader.png', './static/skins/rifles/ssg08/purple\\Parallax.png', 
        './static/skins/rifles/ssg08/purple\\Sea Calico.png', './static/skins/rifles/ssg08/pink\\Big Iron.png', './static/skins/rifles/ssg08/pink\\Bloodshot.png',
        './static/skins/rifles/ssg08/pink\\Death Strike.png', './static/skins/rifles/ssg08/pink\\Turbo Peek.png', './static/skins/rifles/ssg08/red\\Blood in the Water.png',
        './static/skins/rifles/ssg08/red\\Dragonfire.png']

      randomSkinUrl = all_guns_urls[getRandomInt(all_guns_urls.length)]
      randomSkinUrlTest = randomSkinUrl.split("\\")[1].substring(0,randomSkinUrl.split("\\")[1].length-4)
      while(randomSkinUrlTest == column1[3]  || randomSkinUrlTest == column2[3]  || randomSkinUrlTest == column4[3] 
         || randomSkinUrlTest == column5[3]  || randomSkinUrlTest == column6[3]  || randomSkinUrlTest == column7[3]  
        || randomSkinUrlTest == column8[3]  || randomSkinUrlTest == column9[3]  || randomSkinUrlTest == column10[3] ){
        randomSkinUrl = all_guns_urls[getRandomInt(all_guns_urls.length)]
        randomSkinUrlTest = randomSkinUrl.split("\\")[1].substring(0,randomSkinUrl.split("\\")[1].length-4)
      }


      randomSkin = randomSkinUrl.split("\\")[1].substring(0,randomSkinUrl.split("\\")[1].length-4);
      randomColour = randomSkinUrl.split("\\")[0].split("/")[5];
      randomGun = randomSkinUrl.split("\\")[0].split("/")[4];
      randomType = randomSkinUrl.split("\\")[0].split("/")[3];
      makeImagesBoxes(randomGun,randomColour,randomType,randomSkin)
          
     
  }
  
  
  
    function autocomplete(inp, arr) {
      /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
      var currentFocus;
      /*execute a function when someone writes in the text field:*/
      inp.addEventListener("input", function(e) {
          var a, b, i, val = this.value;
          /*close any already open lists of autocompleted values*/
          closeAllLists();
          if (!val) { return false;}
          currentFocus = -1;
          /*create a DIV element that will contain the items (values):*/
          a = document.createElement("DIV");
          a.setAttribute("id", this.id + "autocomplete-list");
          a.setAttribute("class", "autocomplete-items");
          /*append the DIV element as a child of the autocomplete container:*/
          this.parentNode.appendChild(a);
          /*for each item in the array...*/
          for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
              /*create a DIV element for each matching element:*/
              b = document.createElement("DIV");
              /*make the matching letters bold:*/
              b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
              b.innerHTML += arr[i].substr(val.length);
              /*insert a input field that will hold the current array item's value:*/
              b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              /*execute a function when someone clicks on the item value (DIV element):*/
                  b.addEventListener("click", function(e) {
                  /*insert the value for the autocomplete text field:*/
                  inp.value = this.getElementsByTagName("input")[0].value;
                  /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
                  closeAllLists();
              });
              a.appendChild(b);
            }
          }
      });
      /*execute a function presses a key on the keyboard:*/
      inp.addEventListener("keydown", function(e) {
          var x = document.getElementById(this.id + "autocomplete-list");
          if (x) x = x.getElementsByTagName("div");
          if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
          } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
          } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
              /*and simulate a click on the "active" item:*/
              if (x) x[currentFocus].click();
            }
          }
      });
      function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
      }
      function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }
      function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
    }
    autocomplete(document.getElementById("myInput"), countries);


function test2(){


  var nameValue = document.getElementById("myInput").value;

  if(nameValue === currentPractiseskin){

    correct += 1
    

    estimated_rank = "Wood"
    document.getElementById(currentPractiseskin+"_text").textContent = currentPractiseskin
    document.getElementById(currentPractiseskin+"_text").style.backgroundColor = "green"
    document.getElementById(last_column).style.borderColor = "green"
  }
  else{
    wrong += 1
    document.getElementById(currentPractiseskin+"_text").textContent = currentPractiseskin
    document.getElementById(currentPractiseskin+"_text").style.backgroundColor = "red"
    document.getElementById(last_column).style.borderColor = "red"
  }
  success_rate = correct/wrong
  document.getElementById("Correct_value").innerText = correct
  document.getElementById("Wrong_value").innerText = wrong
  if(wrong ==0){
    document.getElementById("success_rate_value").innerText = String((correct/1)*100)+"%"
  }
  else{
    document.getElementById("success_rate_value").innerText = String((Math.round((correct/(wrong+correct)) * 100) / 100)*100)+"%"
  }
 
  document.getElementById("rank_value").innerText = "wood"
  practiseGame()
}