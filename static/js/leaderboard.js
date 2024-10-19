


getSeconds()
var curday;
var secTime;
var ticker;
 
function getSeconds() {
 var nowDate = new Date();
 var dy = 0 ; //Sunday through Saturday, 0 to 6
 var countertime = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),24,0,0); //20 out of 24 hours = 8pm
 
 var curtime = nowDate.getTime(); //current time
 var atime = countertime.getTime(); //countdown time
 var diff = parseInt((atime - curtime)/1000);
 if (diff > 0) { curday = dy - nowDate.getDay() }
 else { curday = dy - nowDate.getDay() -1 } //after countdown time
 if (curday < 0) { curday += 7; } //already after countdown time, switch to next week
 if (diff <= 0) { diff += (86400 * 7) }
 startTimer (diff);
}
 
function startTimer(secs) {
 secTime = parseInt(secs);
 ticker = setInterval("tick()",1000);
 tick(); //initial count display
}
 
function tick() {
 var secs = secTime;
 if (secs>0) {
  secTime--;
 }
 else {
  clearInterval(ticker);
  getSeconds(); //start over
 }
 
 var days = Math.floor(secs/86400);
 secs %= 86400;
 var hours= Math.floor(secs/3600);
 secs %= 3600;
 var mins = Math.floor(secs/60);
 secs %= 60;

 

 //update the time display
 document.getElementById("days").innerHTML = curday;
 document.getElementById("hours").innerHTML = ((hours < 10 ) ? "" : "" ) + hours;
 document.getElementById("minutes").innerHTML = ( (mins < 10) ? "" : "" ) + mins;
 document.getElementById("seconds").innerHTML = ( (secs < 10) ? "" : "" ) + secs;


if (curday == 1) {
    document.getElementById("days_text").innerHTML = "Day"
} 


}
function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

var bossSelected = "False"
var skillSelected = "False"
var OverallSelected = "False"
function expandLeaderboard(type){
      


    if (type == "boss") {
      if (bossSelected == "False") {
        weeklybossrankingsviewmore = []
        document.getElementById("leaderboardboss").innerHTML =""
        for (let i = 0; i < rsndatacurrent.length; i++){
          Weeklybosskillsstart = rsndatacurrent[i][0]
          Weeklybosskillscurrent = rsndatacurrent[i][1]
  
          weeklybossrankingsviewmore.push([rsndatacurrent[i][6],Weeklybosskillscurrent-Weeklybosskillsstart])
          weeklybossrankingsviewmore = weeklybossrankingsviewmore.sort(sortFunction);
        }
        for (let i = 3; i < weeklybossrankingsviewmore.length; i++){
       
          var para = document.createElement("p");
          var node = document.createTextNode("# "+(i+1)+" "+weeklybossrankingsviewmore[i][0] +" "+numberWithCommas(weeklybossrankingsviewmore[i][1])+ " - Kills" );
          para.appendChild(node);
          document.getElementById("leaderboardboss").appendChild(para)
        }
        bossSelected = "True"
        document.getElementById("viewBoss").innerHTML = "View less »"
      } else {
        document.getElementById("leaderboardboss").innerHTML =""
        bossSelected = "False"
        document.getElementById("viewBoss").innerHTML = "View all »"
      }
    }

    if (type == "skill") {
      if (skillSelected == "False") {
        weeklyskillrankingsviewmore = []
        document.getElementById("leaderboardskill").innerHTML =""
        for (let i = 0; i < rsndatacurrent.length; i++){
          Weeklyskillstart = rsndatacurrent[i][4]
          Weeklyskillscurrent = rsndatacurrent[i][5]
  
          weeklyskillrankingsviewmore.push([rsndatacurrent[i][6],Weeklyskillscurrent-Weeklyskillstart])
          weeklyskillrankingsviewmore = weeklyskillrankingsviewmore.sort(sortFunction);
        }
        for (let i = 3; i < weeklyskillrankingsviewmore.length; i++){
     
          var para = document.createElement("p");
          var node = document.createTextNode("# "+(i+1)+" "+weeklyskillrankingsviewmore[i][0] +" "+numberWithCommas(weeklyskillrankingsviewmore[i][1])+ " - XP" );
          para.appendChild(node);
          document.getElementById("leaderboardskill").appendChild(para)
        }
        skillSelected = "True"
            document.getElementById("viewSkill").innerHTML = "View less »"
      } else {
        document.getElementById("leaderboardskill").innerHTML =""
        skillSelected = "False"
        document.getElementById("viewSkill").innerHTML = "View all »"
      }
    }

    if (type == "totalxp") {
      if (OverallSelected == "False") {
        totalxprankingsviewmore = []
        document.getElementById("leaderboardoverall").innerHTML =""
  
        for (let i = 0; i < rsndatacurrent.length; i++){
          Weeklybosskillsstart = rsndatacurrent[i][2]
          Weeklybosskillscurrent = rsndatacurrent[i][3]
  
          totalxprankingsviewmore.push([rsndatacurrent[i][6],Weeklybosskillscurrent-Weeklybosskillsstart])
          totalxprankingsviewmore = totalxprankingsviewmore.sort(sortFunction);
        }
        for (let i = 3; i < totalxprankingsviewmore.length; i++){
         
          var para = document.createElement("p");
          var node = document.createTextNode("# "+(i+1)+" "+totalxprankingsviewmore[i][0] +" "+numberWithCommas(totalxprankingsviewmore[i][1])+ " - XP" );
          para.appendChild(node);
          document.getElementById("leaderboardoverall").appendChild(para)
        }
        OverallSelected = "True"
        document.getElementById("viewTotalXP").innerHTML = "View less »"
      } else {
        document.getElementById("leaderboardoverall").innerHTML =""
        OverallSelected = "False"
         document.getElementById("viewTotalXP").innerHTML = "View all »"
      }
    }
}
function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}
function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function populateLeaderboard(){
    data = JSON.parse(document.getElementById("leaderboard_data").textContent);
    skill = JSON.parse(document.getElementById("skill").textContent);
    boss = JSON.parse(document.getElementById("boss").textContent);
    
    skill_of_the_week = document.getElementById("skill_current")
    skill_of_the_week.innerHTML = ""
    img = document.createElement("img");
    img.src="/static/images/rstoolsimg/skills/"+skill+".webp"
     img.style.width = "35px"
    skill_of_the_week.appendChild(img)
    text = document.createTextNode(skill)
    skill_of_the_week.appendChild(text)

    boss_of_the_week = document.getElementById("boss_current")
    boss_of_the_week.innerHTML = ""
    img = document.createElement("img");
    img.src="/static/images/rstoolsimg/minigame/"+boss+".png"
    img.style.width = "35px"
    boss_of_the_week.appendChild(img)
    text = document.createTextNode(boss)
    boss_of_the_week.appendChild(text)
   
    skill_previous = JSON.parse(document.getElementById("previous_skill").textContent);
    boss_previous = JSON.parse(document.getElementById("previous_boss").textContent);

    skill_of_the_week_previous = document.getElementById("previous_skill_div")
    skill_of_the_week_previous.innerHTML = ""
    img = document.createElement("img");
    img.src="/static/images/rstoolsimg/skills/"+skill_previous+".webp"
    img.style.width = "35px"
    skill_of_the_week_previous.appendChild(img)
    text_previous = document.createTextNode(skill_previous)
    skill_of_the_week_previous.appendChild(text_previous)

    boss_of_the_week_previous = document.getElementById("previous_boss_div")
    boss_of_the_week_previous.innerHTML = ""
    img_previous = document.createElement("img");
    img_previous.src="/static/images/rstoolsimg/minigame/"+boss_previous+".png"
    img_previous.style.width = "35px"
    boss_of_the_week_previous.appendChild(img_previous)
    text_previous = document.createTextNode(boss_previous)
    boss_of_the_week_previous.appendChild(text_previous)

    rsndatacurrent = []
    rsndataprevious = []

      for (let i = 0; i < data.length; i++){
          Weeklybosskillsstart = data[i].weeklybosskillsstart
          Weeklybosskillscurrent = data[i].weeklybosskillscurrent
          Totalxpstart = data[i].totalxpstart
          Totalxpcurrent= data[i].totalxpcurrent
          Weeklyskillxpstart= data[i].weeklyskillxpstart
          Weeklyskillxpcurrent= data[i].weeklyskillxpcurrent
          rsn= data[i].rsn
          event= data[i].event
    
          if (event == "current") {
            rsndatacurrent.push([Weeklybosskillsstart,Weeklybosskillscurrent,Totalxpstart,Totalxpcurrent,Weeklyskillxpstart,Weeklyskillxpcurrent,rsn])
          } else if(event == "previous") {
            rsndataprevious.push([Weeklybosskillsstart,Weeklybosskillscurrent,Totalxpstart,Totalxpcurrent,Weeklyskillxpstart,Weeklyskillxpcurrent,rsn])
          }
          
          }
  
          weeklybossrankings = []
          totalxprankings = []
          weeklyskillrankings = []
   
          for (let i = 0; i < rsndatacurrent.length; i++){
            Weeklybosskillsstart = rsndatacurrent[i][0]
            Weeklybosskillscurrent = rsndatacurrent[i][1]

            weeklybossrankings.push([rsndatacurrent[i][6],Weeklybosskillscurrent-Weeklybosskillsstart])
           
            
            Totalxpstart = rsndatacurrent[i][2]
            Totalxpcurrent= rsndatacurrent[i][3]

            totalxprankings.push([rsndatacurrent[i][6],Totalxpcurrent-Totalxpstart])
      

            Weeklyskillxpstart= rsndatacurrent[i][4]
            Weeklyskillxpcurrent= rsndatacurrent[i][5]

            weeklyskillrankings.push([rsndatacurrent[i][6],Weeklyskillxpcurrent-Weeklyskillxpstart])
            
          }
       
        
          weeklybossrankingsprevious = []
          totalxprankingsprevious = []
          weeklyskillrankingsprevious = []
          
          for (let i = 0; i < rsndataprevious.length; i++){
            Weeklybosskillsstart = rsndataprevious[i][0]
            Weeklybosskillscurrent = rsndataprevious[i][1]

            weeklybossrankingsprevious.push([rsndataprevious[i][6],Weeklybosskillscurrent-Weeklybosskillsstart])
           
            
            Totalxpstart = rsndataprevious[i][2]
            Totalxpcurrent= rsndataprevious[i][3]

            totalxprankingsprevious.push([rsndataprevious[i][6],Totalxpcurrent-Totalxpstart])
      

            Weeklyskillxpstart= rsndataprevious[i][4]
            Weeklyskillxpcurrent= rsndataprevious[i][5]

            weeklyskillrankingsprevious.push([rsndataprevious[i][6],Weeklyskillxpcurrent-Weeklyskillxpstart])
            
          }
    
          weeklybossrankingsprevious = weeklybossrankingsprevious.sort(sortFunction);
          weeklyskillrankingsprevious = weeklyskillrankingsprevious.sort(sortFunction);
          totalxprankingsprevious = totalxprankingsprevious.sort(sortFunction);
     
     

          weeklybossrankings = weeklybossrankings.sort(sortFunction);
          weeklyskillrankings = weeklyskillrankings.sort(sortFunction);
          totalxprankings = totalxprankings.sort(sortFunction);
          

          document.getElementById("firstplaceskillprevious").innerText =  "#1 "+ weeklyskillrankingsprevious[0][0] + " - " + numberWithCommas(weeklyskillrankingsprevious[0][1]) + " XP"
          document.getElementById("secondplaceskillprevious").innerText =  "#2 "+ weeklyskillrankingsprevious[1][0] + " - " + numberWithCommas(weeklyskillrankingsprevious[1][1]) + " XP"
          document.getElementById("thirdplaceskillprevious").innerText =  "#3 "+ weeklyskillrankingsprevious[2][0] + " - " + numberWithCommas(weeklyskillrankingsprevious[2][1]) + " XP"
 
          document.getElementById("firstplacebossprevious").innerText =  "#1 "+ weeklybossrankingsprevious[0][0] + " - " + numberWithCommas(weeklybossrankingsprevious[0][1]) + " Kills"
          document.getElementById("secondplacebossprevious").innerText =  "#2 "+ weeklybossrankingsprevious[1][0] + " - " + numberWithCommas(weeklybossrankingsprevious[1][1]) + " Kills"
          document.getElementById("thirdplacebossprevious").innerText =  "#3 "+ weeklybossrankingsprevious[2][0] + " - " + numberWithCommas(weeklybossrankingsprevious[2][1]) + " Kills"

          document.getElementById("firstplaceoverallprevious").innerText =  "#1 "+ totalxprankingsprevious[0][0] + " - " + numberWithCommas(totalxprankingsprevious[0][1]) + " XP"
          document.getElementById("secondplaceoverallprevious").innerText =  "#2 "+ totalxprankingsprevious[1][0] + " - " + numberWithCommas(totalxprankingsprevious[1][1]) + " XP"
          document.getElementById("thirdplaceoverallprevious").innerText =  "#3 "+ totalxprankingsprevious[2][0] + " - " + numberWithCommas(totalxprankingsprevious[2][1]) + " XP"

          document.getElementById("firstplaceskill").innerText =  "#1 "+ weeklyskillrankings[0][0] + " - " + numberWithCommas(weeklyskillrankings[0][1]) + " XP"
          document.getElementById("secondplaceskill").innerText =  "#2 "+ weeklyskillrankings[1][0] + " - " + numberWithCommas(weeklyskillrankings[1][1]) + " XP"
          document.getElementById("thirdplaceskill").innerText =  "#3 "+ weeklyskillrankings[2][0] + " - " + numberWithCommas(weeklyskillrankings[2][1]) + " XP"
 
          document.getElementById("firstplaceboss").innerText =  "#1 "+ weeklybossrankings[0][0] + " - " + numberWithCommas(weeklybossrankings[0][1]) + " Kills"
          document.getElementById("secondplaceboss").innerText =  "#2 "+ weeklybossrankings[1][0] + " - " + numberWithCommas(weeklybossrankings[1][1]) + " Kills"
          document.getElementById("thirdplaceboss").innerText =  "#3 "+ weeklybossrankings[2][0] + " - " + numberWithCommas(weeklybossrankings[2][1]) + " Kills"

          document.getElementById("firstplaceoverall").innerText =  "#1 "+ totalxprankings[0][0] + " - " + numberWithCommas(totalxprankings[0][1]) + " XP"
          document.getElementById("secondplaceoverall").innerText =  "#2 "+ totalxprankings[1][0] + " - " + numberWithCommas(totalxprankings[1][1]) + " XP"
          document.getElementById("thirdplaceoverall").innerText =  "#3 "+ totalxprankings[2][0] + " - " + numberWithCommas(totalxprankings[2][1]) + " XP"


}