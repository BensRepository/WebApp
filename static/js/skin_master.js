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

    document.getElementById('test').appendChild(d);

    document.getElementById(skin + "d").appendChild(img);
    document.getElementById(skin + "d").appendChild(p);
    
  }
    function updateGuns(gun,colour,type){
      document.getElementById('test').innerHTML ="";
      skinlist = JSON.parse(document.getElementById(gun).textContent);
      skins = skinlist[colour]
      for (i in skins){
        makeImages(gun,colour,type,skins[i])
      }
    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    
    function practiseGame(){
      generated = 0

      while(generated == 0){
        colours = Object.keys(JSON.parse(document.getElementById("p90").textContent))
        random_index = getRandomInt(colours.length)
        randomColour = colours[random_index]
  
        types = Object.values(JSON.parse(document.getElementById("types").textContent))
        random_index2 = getRandomInt(types.length)
        randomType = types[random_index2]
      
        guns = Object.values(JSON.parse(document.getElementById(randomType).textContent));
        
        random_index3 = getRandomInt(guns.length)
        randomGun = guns[random_index3]
    
       
        randomGunColours = JSON.parse(document.getElementById(randomGun).textContent);
        randomGunSelectedColour = randomGunColours[randomColour]
        random_index4 = getRandomInt(randomGunSelectedColour.length)
        randomSkin = randomGunSelectedColour[random_index4]
        if(randomSkin !== undefined ){
          generated = 1
          makeImages(randomGun,randomColour,randomType,randomSkin)
         
        }
      }

    }


