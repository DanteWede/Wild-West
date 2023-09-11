var choices = "";




function background_change(){
    
    if(choices=="1"){
        
            document.getElementById("BackBody").style.backgroundImage="url(img/Ending_TB.jpg)";
            
            document.getElementById("text").innerHTML = "";
        
            document.getElementById("button_text").innerHTML = "Take the valley.";
            document.getElementById("button_text2").innerHTML = "Take the River.";
        
    }
    else{
        document.getElementById("BackBody").style.backgroundImage="url(img/Bank_outside.webp)";
    
    document.getElementById("text").innerHTML = "You clicked the button, I am new paragraph. waihubdauibdua daiuhwndioanidnh awdiuabwidbnaoi doaiuhwdiaobhwdu aowdboauibwduioanwdiubaidba idbaoibwduiabudbauiob dauio";

    document.getElementById("button_text").innerHTML = "Take the valley.";
    document.getElementById("button_text2").innerHTML = "Take the River.";

    choices="1";
    }
}



function background_change2(){
    document.getElementById("BackBody").style.backgroundImage="url(img/Ending_Neutral.jpg)";

    document.getElementById("text").innerHTML = "You clicked the button, I am new paragraph. waihubdauibdua daiuhwndioanidnh awdiuabwidbnaoi doaiuhwdiaobhwdu aowdboauibwduioanwdiubaidba idbaoibwduiabudbauiob dauio";
    
    document.getElementById("button_text").innerHTML = "Take the valley.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    
    choices="0";
    
}


































