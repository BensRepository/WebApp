/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function calculatetotal(){
                        
    casename = document.getElementById("desc").innerHTML.split(' ').join('_').replace("_Case","");
    var case_cost = JSON.parse(document.getElementById('caseMedianPrices').textContent)[casename];
    document.getElementById("price").innerHTML = formatter.format(document.getElementById("ValueField").value * case_cost) ;

    var caseprice = document.getElementById("ValueField").value * case_cost;

    document.getElementById("keyprice").innerHTML = formatter.format(document.getElementById("ValueField").value * 1.99);
    keyprice = document.getElementById("ValueField").value * 1.99
    
    document.getElementById("total").innerHTML =formatter.format(caseprice +keyprice)  ;
    
    var value = JSON.parse(document.getElementById('hashids').textContent);
    
    var link = 'https://steamcommunity.com/market/listings/730/'+value[casename];
    document.getElementById("buy").innerHTML ='<form action='+link+'><input type="submit" value="Buy Case" /></form>';
    document.getElementById("simulate").innerHTML ='<button onclick="simulateloot()"> Simulate</button>';
}

function simulateloot(){
                        
    blue_odds = 0.7992;
    purple_odds = 0.1598;
    pink_odds = 0.032;
    red_odds = 0.0064;
    yellow_odds =  0.0026

    unboxed_blue =0;
    unboxed_purple =0;
    unboxed_pink =0;
    unboxed_red =0;
    unboxed_yellow =0;

    for (let i = 0; i < document.getElementById("ValueField").value; i++) {
        num = Math.random();

        if (num >= 0 && num <= yellow_odds) {
            unboxed_yellow +=1
        }
        else if (num >= (yellow_odds) && num <= yellow_odds+red_odds) {
            unboxed_red +=1
        }
        else if  (num >= (yellow_odds+red_odds) && num <= yellow_odds+red_odds+pink_odds) {
            unboxed_pink +=1
        }
        else if (num >= yellow_odds+red_odds+pink_odds&& num <= yellow_odds+red_odds+pink_odds+purple_odds) {
            unboxed_purple +=1
        }
        else if (num > yellow_odds+red_odds+pink_odds+purple_odds) {
            unboxed_blue +=1
        }
        
    }

    document.getElementById("blues").innerHTML = String(unboxed_blue) + " Mil-spec";
    document.getElementById("purples").innerHTML = String(unboxed_purple)+ " Restricted";
    document.getElementById("pinks").innerHTML = String(unboxed_pink)+ " Classified";
    document.getElementById("reds").innerHTML = String(unboxed_red)+ " Covert";
    document.getElementById("yellows").innerHTML = String(unboxed_yellow)+ " Special item";
    document.getElementById("simulatorTitle").innerHTML = "Potential Loot";
    
    document.getElementById("blues").style.background = "aqua";
    document.getElementById("purples").style.background = "blueviolet";
    document.getElementById("pinks").style.background = "fuchsia";
    document.getElementById("reds").style.background = "red";
    document.getElementById("yellows").style.background = "yellow";
   
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
});

