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


  var correct = 0
  var wrong = 0
  var success_rate = 0
  var estimated_rank = "Wood"

  function makeImagesBoxes(gun,colour,type,skin){
    currentPractiseskin = skin
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
    p.style.width = "100%"
    p.style.height = "auto"
    var d = document.createElement("div");
    d.style.width = "200px"
    d.style.height = "auto"
    d.id = skin 

    d.style.float = "left"
    
    document.getElementById(nextAvailableSplot(gun,colour,type,skin)).appendChild(d);
    document.getElementById(d.id).appendChild(img);
    document.getElementById(d.id).appendChild(p);
  }

  function nextAvailableSplot(gun,colour,type,skin){
    available_slot = "" 

    if(column1 == ""){
      column1= [gun,colour,type,skin]
      available_slot = "column1" 
      document.getElementById("column1").style.backgroundColor = changeColours(colour)
    }
    else  if(column2 == ""){
      column2= [gun,colour,type,skin]
      available_slot = "column2" 
      document.getElementById("column2").style.backgroundColor = changeColours(colour)
    }

    else  if(column3 == ""){
      column3= [gun,colour,type,skin]
      available_slot = "column3"  
      document.getElementById("column3").style.backgroundColor = changeColours(colour)
    }

    else  if(column4 == ""){
      column4= [gun,colour,type,skin]
      available_slot = "column4" 
      document.getElementById("column4").style.backgroundColor = changeColours(colour)
    }

    else  if(column5 == ""){
      column5= [gun,colour,type,skin]
      available_slot = "column5" 
      document.getElementById("column5").style.backgroundColor = changeColours(colour)
    }  

    else  if(column6 == ""){
      column6= [gun,colour,type,skin]
      available_slot = "column6" 
      document.getElementById("column6").style.backgroundColor = changeColours(colour)
    }

    else  if(column7 == ""){
      column7= [gun,colour,type,skin]
      available_slot = "column7" 
      document.getElementById("column7").style.backgroundColor = changeColours(colour)
    }

    else  if(column8 == ""){
      column8= [gun,colour,type,skin]
      available_slot = "column8" 
      document.getElementById("column8").style.backgroundColor = changeColours(colour)
    }

    else  if(column9 == ""){
      column9= [gun,colour,type,skin]
      available_slot = "column9" 
      document.getElementById("column9").style.backgroundColor = changeColours(colour)
    }

    else  if(column10 == ""){
      column10= [gun,colour,type,skin]
      available_slot = "column10" 
    
    }

    else {
      available_slot = "stop"
      switchPositions(gun,colour,type,skin);
      alert("test")
      
    }
  
    return(available_slot)

  }

    function changeColours(temp){
      if(temp == "light_blue"){
        temp ="#87d3f1"
      }
      else if(temp == "purple"){
        temp = '#282781'
      }
      else if(temp == "pink"){
        temp = '#c514bf'
      }
      else if(temp == "blue"){
        temp = '#c514bf'
      }
      return temp
    }
    function switchPositions(gun,colour,type,skin){
      temp = column2
      document.getElementById(column1[3]).remove();
      document.getElementById(column2[3]).remove();
      column1 =""
      column2 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
      document.getElementById("column1").style.backgroundColor = changeColours(temp[1])
      
      temp = column3
      document.getElementById(column3[3]).remove();
      column3 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column2").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]

      temp = column4
      document.getElementById(column4[3]).remove();
      column4 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column3").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]

      temp = column5
      document.getElementById(column5[3]).remove();
      column5 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column4").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]

      temp = column6
      document.getElementById(column6[3]).remove();
      column6 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column5").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]

      temp = column7
      document.getElementById(column7[3]).remove();
      column7 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column6").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]

      temp = column8
      document.getElementById(column8[3]).remove();
      column8 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column7").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]

      temp = column9
      document.getElementById(column9[3]).remove();
      column9 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column8").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]

      temp = column10
      document.getElementById(column10[3]).remove();
      column10 =""
      makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
      document.getElementById("column9").style.backgroundColor = changeColours(temp[1])
      document.getElementById(temp[3]+"_text").textContent = temp[3]
    

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

    function updateGuns(gun,colour,type){
      document.getElementById('practiseSkins').innerHTML ="";
      skinlist = JSON.parse(document.getElementById(gun).textContent);
      skins = skinlist[colour]
      for (i in skins){
        makeImages(gun,colour,type,skins[i]) 
      }
    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    var currentPractiseskin = ""


    function practiseGame(){
      generated = 0
      document.getElementById("practise_game").style.display = "none"
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
          makeImagesBoxes(randomGun,randomColour,randomType,randomSkin)
   
         
        }
      }

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

  }
  else{
    wrong += 1
    document.getElementById(currentPractiseskin+"_text").textContent = currentPractiseskin

  }
  success_rate = correct/wrong
  document.getElementById("Correct_value").innerText = correct
  document.getElementById("Wrong_value").innerText = wrong
  if(wrong ==0){
    document.getElementById("success_rate_value").innerText = String((correct/1)*100)+"%"
  }
  document.getElementById("success_rate_value").innerText = String((correct/wrong)*100)+"%"
  document.getElementById("rank_value").innerText = "wood"
  practiseGame()
}