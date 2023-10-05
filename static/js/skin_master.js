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

  function test(){
    skinname = JSON.parse(document.getElementById('p90').textContent);
    alert(skinname['grey'])
  }

