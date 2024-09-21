class PlayerData {
    constructor(player_data) {
        var player_data_split = player_data.split('\\')
        var player_data_sorted = player_data_split.filter(function (index) {
            return index !== 'n-1,-1';
        });
        this.Overall =  {"rank":cleanSkillData(player_data_split[0])[0]
            .substring(1,cleanSkillData(player_data_split[0])[0].length),
                        'level':cleanSkillData(player_data_split[0])[1],
                        'xp':cleanSkillData(player_data_split[0])[2]}

        this.Attack =  {"rank":cleanSkillData(player_data_split[1])[0],
                        'level':cleanSkillData(player_data_split[1])[1],
                        'xp':cleanSkillData(player_data_split[1])[2]}  

        this.Defence =  {"rank":cleanSkillData(player_data_split[2])[0],
                        'level':cleanSkillData(player_data_split[2])[1],
                        'xp':cleanSkillData(player_data_split[2])[2]}

        this.Strength =  {"rank":cleanSkillData(player_data_split[3])[0],
                        'level':cleanSkillData(player_data_split[3])[1],
                        'xp':cleanSkillData(player_data_split[3])[2]}  

        this.Hitpoints =  {"rank":cleanSkillData(player_data_split[4])[0],
                        'level':cleanSkillData(player_data_split[4])[1],
                        'xp':cleanSkillData(player_data_split[4])[2]}

        this.Ranged =  {"rank":cleanSkillData(player_data_split[5])[0],
                        'level':cleanSkillData(player_data_split[5])[1],
                        'xp':cleanSkillData(player_data_split[5])[2]}  

        this.Prayer =  {"rank":cleanSkillData(player_data_split[6])[0],
                        'level':cleanSkillData(player_data_split[6])[1],
                        'xp':cleanSkillData(player_data_split[6])[2]}

        this.Magic =  {"rank":cleanSkillData(player_data_split[7])[0],
                        'level':cleanSkillData(player_data_split[7])[1],
                        'xp':cleanSkillData(player_data_split[7])[2]} 

        this.Cooking =  {"rank":cleanSkillData(player_data_split[8])[0],
                        'level':cleanSkillData(player_data_split[8])[1],
                        'xp':cleanSkillData(player_data_split[8])[2]}

        this.WoodCutting =  {"rank":cleanSkillData(player_data_split[9])[0],
                        'level':cleanSkillData(player_data_split[9])[1],
                         'xp':cleanSkillData(player_data_split[9])[2]}  

        this.Fletching =  {"rank":cleanSkillData(player_data_split[10])[0],
                        'level':cleanSkillData(player_data_split[10])[1],
                        'xp':cleanSkillData(player_data_split[10])[2]}

        this.Fishing =  {"rank":cleanSkillData(player_data_split[11])[0],
                        'level':cleanSkillData(player_data_split[11])[1],
                        'xp':cleanSkillData(player_data_split[11])[2]}   

        this.Firemaking =  {"rank":cleanSkillData(player_data_split[12])[0],
                        'level':cleanSkillData(player_data_split[12])[1],
                        'xp':cleanSkillData(player_data_split[12])[2]}   

        this.Crafting =  {"rank":cleanSkillData(player_data_split[13])[0],
                        'level':cleanSkillData(player_data_split[13])[1],
                        'xp':cleanSkillData(player_data_split[13])[2]}

        this.Smithing =  {"rank":cleanSkillData(player_data_split[14])[0],
                        'level':cleanSkillData(player_data_split[14])[1],
                        'xp':cleanSkillData(player_data_split[14])[2]}  

        this.Mining =  {"rank":cleanSkillData(player_data_split[15])[0],
                        'level':cleanSkillData(player_data_split[15])[1],
                        'xp':cleanSkillData(player_data_split[15])[2]}

        this.Herblore =  {"rank":cleanSkillData(player_data_split[16])[0],
                        'level':cleanSkillData(player_data_split[16])[1],
                        'xp':cleanSkillData(player_data_split[16])[2]}  

        this.Agility =  {"rank":cleanSkillData(player_data_split[17])[0],
                        'level':cleanSkillData(player_data_split[17])[1],
                        'xp':cleanSkillData(player_data_split[17])[2]}

        this.Thieving =  {"rank":cleanSkillData(player_data_split[18])[0],
                        'level':cleanSkillData(player_data_split[18])[1],
                        'xp':cleanSkillData(player_data_split[18])[2]}   

        this.Slayer =  {"rank":cleanSkillData(player_data_split[19])[0],
                        'level':cleanSkillData(player_data_split[19])[1],
                        'xp':cleanSkillData(player_data_split[19])[2]}

        this.Farming =  {"rank":cleanSkillData(player_data_split[20])[0],
                        'level':cleanSkillData(player_data_split[20])[1],
                        'xp':cleanSkillData(player_data_split[20])[2]}       

        this.Runecrafting =  {"rank":cleanSkillData(player_data_split[21])[0],
                        'level':cleanSkillData(player_data_split[21])[1],
                        'xp':cleanSkillData(player_data_split[21])[2]}

        this.Hunter =  {"rank":cleanSkillData(player_data_split[22])[0],
                        'level':cleanSkillData(player_data_split[22])[1],
                            'xp':cleanSkillData(player_data_split[22])[2]}  

        this.Construction =  {"rank":cleanSkillData(player_data_split[23])[0],
                        'level':cleanSkillData(player_data_split[23])[1],
                        'xp':cleanSkillData(player_data_split[23])[2]}
                
        


        this.ClueScrollAll =  {"rank":cleanMinigameData(player_data_sorted[24])[0],
                                'score':cleanMinigameData(player_data_sorted[24])[1]}
            
        this.ClueScrollBeginner =  {"rank":cleanMinigameData(player_data_sorted[25])[0],
                                 'score':cleanMinigameData(player_data_sorted[25])[1]}
                
        this.ClueScrollEasy =  {"rank":cleanMinigameData(player_data_sorted[26])[0],
                                 'score':cleanMinigameData(player_data_sorted[26])[1]}
            
        this.ClueScrollMedium =  {"rank":cleanMinigameData(player_data_sorted[27])[0],
                                'score':cleanMinigameData(player_data_sorted[27])[1]}
        
        this.ClueScrollHard =  {"rank":cleanMinigameData(player_data_sorted[28])[0],
                                 'score':cleanMinigameData(player_data_sorted[28])[1]}
        
        this.ClueScrollElite =  {"rank":cleanMinigameData(player_data_sorted[29])[0],
                                 'score':cleanMinigameData(player_data_sorted[29])[1]}
        
        this.ClueScrollMaster =  {"rank":cleanMinigameData(player_data_sorted[30])[0],
                  'score':cleanMinigameData(player_data_sorted[30])[1]}
        }

  }


  function test(){
    data = JSON.parse(document.getElementById('player_data').textContent);
    const PlayerInformation = new PlayerData(data);


    
    alert(PlayerInformation.ClueScrollMaster.rank)
  }

  function cleanSkillData(data){
    data_split = data.split(',')
    rank = data_split[0]
    level = data_split[1]
    xp = data_split[2]
    return [rank.substring(1,rank.length),level,xp]
  }

  function cleanMinigameData(data){

    minigame = data.split(',')
    rank = minigame[0]
    score = minigame[1]

    return [rank.substring(1,rank.length),score]
  }

  function generateTableSkills() {
    // clean data
    data = JSON.parse(document.getElementById('player_data').textContent);
    var player_data_split = data.split('\\')
    var player_data_sorted = player_data_split.filter(function (index) {
        return index !== 'n-1,-1';
    });


    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const title = document.createElement("tr");

    const imageText = document.createElement("th");
    const skill = document.createElement("th");
    const rank = document.createElement("th");
    const level = document.createElement("th");
    const xp = document.createElement("th");

    const imageTextcellText = document.createTextNode("");
    const skillcellText = document.createTextNode("Skill");
    const rankcellText = document.createTextNode("Rank");
    const levelcellText = document.createTextNode("Level");
    const xpcellText = document.createTextNode("XP");

    imageText.appendChild(imageTextcellText);
    title.appendChild(imageText);
    skill.appendChild(skillcellText);
    title.appendChild(skill);
    rank.appendChild(rankcellText);
    title.appendChild(rank);
    level.appendChild(levelcellText);
    title.appendChild(level);
    xp.appendChild(xpcellText);
    title.appendChild(xp);
    tbl.appendChild(title);
    // creating all cells
    for (let i = 0; i < 24; i++) {
        SkillNames = ["Overall", "Attack", "Defence", "Strength", "HitPoints",
            "Ranged", "Prayer", "Magic", "Cooking", "Woodcutting", "Fletching", "Fishing", "Firemaking",
             "Crafting", "Smithing", "Mining", "Herblore", "Agility", "Thieving", "Slayer", "Farming", "Runecrafting", "Hunter", "Construction"]
      // creates a table row
      row = document.createElement("tr");
      var img = document.createElement("IMG");
        url = "/static/images/rstoolsimg/skills/"+SkillNames[i]+".webp"
        img.src = url;
        img.style.position = "relative";
        img.style.width = "50%";
        img.style.marginLeft= "auto";
        img.style.marginRight = "auto";
        img.style.display = "block";
        row.appendChild(img);

      const cell = document.createElement("td");
     

      const cellText = document.createTextNode(SkillNames[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      for (let j = 0; j < 3; j++) {

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(cleanSkillData(player_data_sorted[i])[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.getElementById("table_location").appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }  


  function generateTableMingames() {
    // clean data
    data = JSON.parse(document.getElementById('player_data').textContent);
    var player_data_split = data.split('\\')
    var player_data_sorted = player_data_split.filter(function (index) {
        return index !== 'n-1,-1';
    });


    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const title = document.createElement("tr");

    const imageText = document.createElement("th");
    const minigame = document.createElement("th");
    const rank = document.createElement("th");
    const score = document.createElement("th");

    const imageTextcellText = document.createTextNode("");
    const minigamecellText = document.createTextNode("Minigame");
    const rankcellText = document.createTextNode("Rank");
    const scorecellText = document.createTextNode("Score");


    imageText.appendChild(imageTextcellText);
    title.appendChild(imageText);

    rank.appendChild(rankcellText);
    title.appendChild(rank);

    rank.appendChild(minigamecellText);
    title.appendChild(rank);

    minigame.appendChild(scorecellText);
    score.appendChild(minigame);
    
    tbl.appendChild(title);
    // creating all cells
    for (let i = 0; i < 24; i++) {
        SkillNames = ["Clue Scrolls (all)", "Clue Scrolls (beginner)", "Clue Scrolls (easy)", "	Clue Scrolls (medium)", "Clue Scrolls (hard)",
            "Clue Scrolls (elite)", "Clue Scrolls (master)", "Rifts closed", "Abyssal Sire", "Alchemical Hydra", "Barrows Chests", "Bryophyta", "Callisto",
             "Cerberus", "Chambers of Xeric", "Chaos Elemental", "Chaos Fanatic", "Commander Zilyana", "Corporeal Beast", "Crazy Archaeologist", "Dagannoth Prime",
             "Dagannoth Rex", "Dagannoth Supreme", "Deranged Archaeologist", "General Graardor", "Giant Mole", "Grotesque Guardians", "Hespori", "Kalphite Queen",
              "King Black Dragon","Kraken","Kree'arra", "Mimic", "Nightmare", "Obor","Sarachnis", "Scorpia", "Skotizo", "Spindel","Tempoross","Thermonuclear Smoke Devil"
              ,"The Gauntlet","Theatre of Blood","TzKal-Zuk","TzTok-Jad","Venenatis","Vet'ion","Vorkath","Wintertodt","Zalcano","Zulrah"]
      // creates a table row
      row = document.createElement("tr");
      var img = document.createElement("IMG");
        url = "/static/images/rstoolsimg/skills/"+SkillNames[i]+".webp"
        img.src = url;
        img.style.position = "relative";
        img.style.width = "50%";
        img.style.marginLeft= "auto";
        img.style.marginRight = "auto";
        img.style.display = "block";
        row.appendChild(img);

      const cell = document.createElement("td");
     

      const cellText = document.createTextNode(SkillNames[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      for (let j = 0; j < 3; j++) {

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(cleanSkillData(player_data_sorted[i])[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.getElementById("table_location").appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }  


