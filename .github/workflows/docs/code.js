var choices = "";




function background_change(){
    
    if(choices==""){
        
            document.getElementById("BackBody").style.backgroundImage="url(img/Bank_outside.webp)";
            
            document.getElementById("text").innerHTML = "";
        
            document.getElementById("button_text").innerHTML = "Take the valley.";
            document.getElementById("button_text2").innerHTML = "Take the River.";
            choices = choices + "0";
    }
    /* 1 */
    else if(choices=="0"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "";
    
        document.getElementById("button_text").innerHTML = "Ligma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "0";
}
else if(choices=="1"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "";

    document.getElementById("button_text").innerHTML = "Sugma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
/* 2 */
else if(choices=="00"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="01"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="10"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="11"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}

    else{
    /*     document.getElementById("BackBody").style.backgroundImage="url(img/Bank_outside.webp)";
    
    document.getElementById("text").innerHTML = "You clicked the button, I am new paragraph. waihubdauibdua daiuhwndioanidnh awdiuabwidbnaoi doaiuhwdiaobhwdu aowdboauibwduioanwdiubaidba idbaoibwduiabudbauiob dauio";

    document.getElementById("button_text").innerHTML = "Take the valley.";
    document.getElementById("button_text2").innerHTML = "Take the River.";

    choices="1"; */
    }
}



function background_change2(){
    if(choices==""){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_outside.webp)";
        
        document.getElementById("text").innerHTML = "";
    
        document.getElementById("button_text").innerHTML = "Take the valley.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "1";
}
/* else if(choices=="1"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "";

    document.getElementById("button_text").innerHTML = "Sugma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "1";
} */
else{
    /* document.getElementById("BackBody").style.backgroundImage="url(img/Ending_Neutral.jpg)";

document.getElementById("text").innerHTML = "You clicked the button, I am new paragraph. waihubdauibdua daiuhwndioanidnh awdiuabwidbnaoi doaiuhwdiaobhwdu aowdboauibwduioanwdiubaidba idbaoibwduiabudbauiob dauio";

document.getElementById("button_text").innerHTML = "Take the valley.";
document.getElementById("button_text2").innerHTML = "Take the River.";

choices="0";*/
} 
}


































