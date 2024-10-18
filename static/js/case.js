$(document).ready(function(){
    $("#openCase").click(function(){
  
  
      if ($(this).hasClass('disabled')) {
          return false;
      } else {
           startRoll();
      }
  
    });
  });
  
  
  function startRoll(){
        var audio = document.getElementById("audio");
        audio.play();
        imgcase = document.getElementById("caseMenu")
        imgcase.onclick =null
        imgcase.classList.remove("case")

        document.getElementById('caseopener').style.display = "block"
        unboxed = simulateloot()
        $("#openCase").html("Rolling...").addClass("disabled");
  
        var lineArrays = ['2985px', '2995px', '3005px', '3015px', '3025px', '3035px', '3045px', '3055px', '3065px', '3075px', '3085px', '3095px', '3100px'];
  
        var landLine = lineArrays[Math.floor(Math.random() * lineArrays.length)];
        console.log(landLine);
  
    $(".itemBoxAn").animate(
      {right: landLine},
            {
              duration: 7500,
              easing: 'easeOutQuint'
            }
            
      );
      setTimeout(
        function() {
          document.getElementById("unboxedItem").style.borderColor = "green"
          document.getElementById("unboxedItem").style.borderTop = "5px"
          document.getElementById("unboxedItem").style.borderWidth = "5px"

        }, 6100);
      setTimeout(
        function() {
          document.getElementById("openCase").classList.remove("disabled")
          $("#openCase").html("Open Cases!")
          document.getElementById("caseopener").style.display = "none"
          document.getElementById("box1").style.right = "0px"
          document.getElementById("box2").style.right = "0px"
          document.getElementById("box3").style.right = "0px"
          document.getElementById("box4").style.right = "0px"
          document.getElementById("box5").style.right = "0px"
          document.getElementById("box6").style.right = "0px"
          document.getElementById("box7").style.right = "0px"
          document.getElementById("box8").style.right = "0px"
          document.getElementById("box9").style.right = "0px"
          document.getElementById("box10").style.right = "0px"
          document.getElementById("box11").style.right = "0px"
          document.getElementById("box12").style.right = "0px"
          document.getElementById("box13").style.right = "0px"
          document.getElementById("box14").style.right = "0px"
          document.getElementById("box15").style.right = "0px"
          document.getElementById("box16").style.right = "0px"
          document.getElementById("box17").style.right = "0px"
          document.getElementById("box18").style.right = "0px"
          document.getElementById("box19").style.right = "0px"
          document.getElementById("box20").style.right = "0px"
          document.getElementById("box21").style.right = "0px"
          document.getElementById("box22").style.right = "0px"
          document.getElementById("box23").style.right = "0px"
          document.getElementById("box24").style.right = "0px"
          document.getElementById("box25").style.right = "0px"
          document.getElementById("box26").style.right = "0px"
          document.getElementById("box27").style.right = "0px"
          document.getElementById("box28").style.right = "0px"
          document.getElementById("box29").style.right = "0px"
          document.getElementById("box30").style.right = "0px"
          document.getElementById("box31").style.right = "0px"
          document.getElementById("boxItem").style.right = "0px"
          document.getElementById("openCase").innerHTML = "Open Case!"
          document.getElementById("CaseDescription").style.display = "block"
          document.getElementById("CaseDescription").innerText = "You unboxed a " + unboxed[1].split(".png")[0].replace(" - "," | ")
          if(unboxed[2] == "pink"){
            document.getElementById("CaseDescription").style.color = "#d045dd"
          }
          else if(unboxed[2] == "yellow"){
            document.getElementById("CaseDescription").style.color ="#FEBE10" 
          }
          else{
            document.getElementById("CaseDescription").style.color = unboxed[2]
          }
       
          //History Update
          img = document.createElement('img')
          img.src = unboxed[0]+unboxed[1]   
          img.style.width = "100px"
          img.classList.add(unboxed[2])  
          img.value = unboxed[2]

          Box1 = document.getElementById("unboxHistoryItem1")
          Box2 = document.getElementById("unboxHistoryItem2")
          Box3 = document.getElementById("unboxHistoryItem3")
          Box4 = document.getElementById("unboxHistoryItem4")
          Box5 = document.getElementById("unboxHistoryItem5")
          if(Box5.hasChildNodes() == false){
            img.id = "ImageItem5"
            rarity_order['5'] = unboxed[2]
            document.getElementById("unboxHistoryItem5").appendChild(img)
          }
          else if(Box4.hasChildNodes() == false){
            img.id = "ImageItem4"
            rarity_order['4'] = unboxed[2]
            document.getElementById("unboxHistoryItem4").appendChild(img)
          }
          else if(Box3.hasChildNodes() == false){
             img.id = "ImageItem3"
             rarity_order['3'] = unboxed[2]
            document.getElementById("unboxHistoryItem3").appendChild(img)
          }
          else if(Box2.hasChildNodes() == false){
               img.id = "ImageItem2"
               rarity_order['2'] = unboxed[2]
            document.getElementById("unboxHistoryItem2").appendChild(img)
          }
          else if(Box1.hasChildNodes() == false){
            img.id = "ImageItem1"
            rarity_order['1'] = unboxed[2]
            document.getElementById("unboxHistoryItem1").appendChild(img)
          }
          else{
            document.getElementById("ImageItem5").src = document.getElementById("ImageItem4").src
            document.getElementById("ImageItem5").classList.remove(rarity_order['5'])  
            document.getElementById("ImageItem5").classList.add(rarity_order['4'])  
            rarity_order['5'] = rarity_order['4']

            document.getElementById("ImageItem4").src = document.getElementById("ImageItem3").src
            document.getElementById("ImageItem4").classList.remove(rarity_order['4'])  
            document.getElementById("ImageItem4").classList.add(rarity_order['3'])  
            rarity_order['4'] = rarity_order['3']
            
            document.getElementById("ImageItem3").src = document.getElementById("ImageItem2").src
            document.getElementById("ImageItem3").classList.remove(rarity_order['3'])  
            document.getElementById("ImageItem3").classList.add(rarity_order['2'])  
            rarity_order['3'] = rarity_order['2']

            document.getElementById("ImageItem2").src = document.getElementById("ImageItem1").src
            document.getElementById("ImageItem2").classList.remove(rarity_order['2'])  
            document.getElementById("ImageItem2").classList.add(rarity_order['1'])  
            rarity_order['2'] = rarity_order['1']

            document.getElementById("ImageItem1").src = unboxed[0]+unboxed[1]  
            document.getElementById("ImageItem1").classList.remove(rarity_order['1'])  
            rarity_order['1'] = unboxed[2]
            document.getElementById("ImageItem1").classList.add(rarity_order['1'])  
       
          }
        imgcase = document.getElementById("caseMenu")
        imgcase.classList.add("case")
        imgcase.onclick = (function(x) {
          return function() {
            caseChangeMenu();
          };
      })();
          
        }, 8000);
  }
var rarity_order= {}
  function caseSelected(cases){
    var audio = document.getElementById("CaseSelectedaudio");
    document.getElementById("caseDiv").style.display = "flex"
    document.getElementById("unboxHistory").style.display = "block"
    audio.play();
    document.getElementById("selectedCase").innerHTML = ""
    document.getElementById("selectedCase").value =cases
   
    img = document.createElement('img')
    img.src = "./static/cases/" + cases+".png"
    img.style.width = "150px"
    img.id = "caseMenu"
    img.classList.add("case")
    img.onclick = (function(x) {
      return function() {
        caseChangeMenu();
      };
  })();
    document.getElementById("selectedCase").style.display = "block"
    document.getElementById("selectedCase").appendChild(img)
    document.getElementById("openCase").style.display="block"
    document.getElementById("selectCase").style.display="none"
    document.getElementById("selectedCaseText").style.display = "block"
    document.getElementById("selectedCaseText").innerText =cases.replaceAll("_"," ") + " Case"
    document.getElementById("caseRow").style.display = "none"
     document.getElementById("unboxHistory").style.display = "block"
    document.getElementById("openCase").classList.remove("disabled")
    document.getElementById("openCase").innerHTML = "Open Case!"
  

  }
  function caseChangeMenu(){
    document.getElementById("selectedCase").style.display = "none"
    document.getElementById("caseRow").style.display = "block"
    document.getElementById("selectedCaseText").style.display = "none"
     document.getElementById("unboxHistory").style.display = "none"
    document.getElementById('CaseDescription').innerText = "Simulate opening cases with accurate drop rates!"
    document.getElementById('CaseDescription').style.color = "black"
    document.getElementById("openCase").classList.add("disabled")
    document.getElementById("openCase").innerHTML = "Pick a Case"
    document.getElementById('CaseDescription').classList.add("reducePadding")
  }
  function selectCase(){
    //Change Layout to Case Opener
    document.getElementById('CaseTimer').style.display = "none"
    document.getElementById('CaseTitle').innerText = "CS2 Case Simulator!"
    document.getElementById('CaseDescription').innerText = "Simulate opening cases with accurate drop rates!"
      document.getElementById('CaseDescription').style.color = "black"
    document.getElementById("caseRow").innerHTML = ""
    document.getElementById("selectCase").innerHTML = "Pick a Case!"
    document.getElementById("selectCase").classList.add("disabled")
    data = JSON.parse(document.getElementById("cases").textContent);
    console.log(data[1])
    alert(data)
    for (var i = 0; i < data.length; i++) {
      img = document.createElement('img')
      img.style.width = "50px"  
      img.id = data[i]
      img.data =data[i]
      img.classList.add("case");
      x= "test"
      img.onclick = (function(x) {
      return function() {
        caseSelected(x);
      };
  })(data[i]);
      img.src = "./static/cases/" + data[i]+".png"
      
      document.getElementById("caseRow").appendChild(img)
      //Do something
  }
  
  }
  function getRaity(type){                 
    blue_odds = 0.7992;
    purple_odds = 0.1598;
    pink_odds = 0.032;
    red_odds = 0.0064;
    yellow_odds =  0.0026
    url =""
    selectedSkin = ""
    num = Math.random();
      if (num >= 0 && num <= yellow_odds) {
        if(type == "filler"){
          unboxed = "red"
        }
        if(type == "unboxed"){
          unboxed = "yellow"
        }
      }
      else if (num >= (yellow_odds) && num <= yellow_odds+red_odds) {
          unboxed = "red"
      }
      else if  (num >= (yellow_odds+red_odds) && num <= yellow_odds+red_odds+pink_odds) {
            unboxed = "pink"
      }
      else if (num >= yellow_odds+red_odds+pink_odds&& num <= yellow_odds+red_odds+pink_odds+purple_odds) {
            unboxed = "purple"
      }
      else if (num > yellow_odds+red_odds+pink_odds+purple_odds) {
            unboxed = "blue"
      }
      return unboxed
  }

  function simulateloot(){     
    unboxed = "Nothing"
    cases = JSON.parse(document.getElementById("cases").textContent);
    selectedCase = document.getElementById("selectedCase").value
   
    for (let i = 1; i < 31; i++) {
      rarity = getRaity("filler")
      div_id = "box"+String(i)

      data_selection_rarity =selectedCase + "_" +rarity
      data = JSON.parse(document.getElementById(data_selection_rarity).textContent);
      //document.getElementById(div_id).style.background = rarity

      document.getElementById(div_id).style.alignContent = "center"
      img = document.createElement('img')
      img.style.width = "150px"  
      img.style.paddingRight = "17px"  

      img.classList.add(rarity)
      
      randomIndex = Math.floor(Math.random() * ((data.length-1) - 0 + 1)) + 0

      img.src = "./static/case_opener/"+selectedCase+"/"+rarity+"/"+data[randomIndex]   

      document.getElementById(div_id).textContent = ''
      document.getElementById(div_id).appendChild(img)


    }
    rarity_selected = getRaity("unboxed")
    if (rarity_selected == "yellow") {
      data_selection_rarity =selectedCase + "_" +rarity_selected
      data = JSON.parse(document.getElementById(data_selection_rarity).textContent);
      document.getElementById("boxItem").style.alignContent = "center"
      img = document.createElement('img')
      img.style.width = "150px"  
      img.style.paddingRight = "17px"  
      img.classList.add(rarity_selected)
      img.id = "unboxedItem"
      randomIndex = Math.floor(Math.random() * ((data.length-1) - 0 + 1)) + 0
      selectedSkin = data[randomIndex]  
      url = "./static/case_opener/"+selectedCase+"/"+rarity_selected+"/"
      //img.src = url+selectedSkin 
      img.src = "./static/images/rarespecialitem.png"
      //console.log(selectedCase+" "+rarity_selected +" "+ data[randomIndex]);
      document.getElementById("boxItem").textContent = ''
      document.getElementById("boxItem").appendChild(img)

    } else {
      data_selection_rarity =selectedCase + "_" +rarity_selected
      data = JSON.parse(document.getElementById(data_selection_rarity).textContent);
  
      //document.getElementById("boxItem").style.background = rarity_selected  
      document.getElementById("boxItem").style.alignContent = "center"
      img = document.createElement('img')
      img.style.width = "150px"  
      img.style.paddingRight = "17px"  
      img.classList.add(rarity_selected)
      img.id = "unboxedItem"
      randomIndex = Math.floor(Math.random() * ((data.length-1) - 0 + 1)) + 0
      selectedSkin = data[randomIndex]  
      url = "./static/case_opener/"+selectedCase+"/"+rarity_selected+"/"
      img.src = url+selectedSkin 
      //alert(rarity_selected + randomIndex)
      console.log(selectedCase+" "+rarity_selected +" "+ data[randomIndex]);
      document.getElementById("boxItem").textContent = ''
      document.getElementById("boxItem").appendChild(img)
    }

    return [url,selectedSkin,rarity_selected]
    }

    function rstoolsRedirect(){
      window.location = "http://www.rstools.uk/"; 
    }