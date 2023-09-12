var choices = "";




function background_change(){
    
    if(choices==""){
        
            document.getElementById("BackBody").style.backgroundImage="url(img/)";
            
            document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        
            document.getElementById("button_text").innerHTML = "Take the valley.";
            document.getElementById("button_text2").innerHTML = "Take the River.";
            choices = choices + "0";
    }
    /* 1 */
    else if(choices=="0"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Keep Going";
        document.getElementById("button_text2").innerHTML = "Set up Camp";
        choices = choices + "0";
}
else if(choices=="1"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Plot the heist";
    document.getElementById("button_text2").innerHTML = "Set up Camp";
    choices = choices + "0";
}
/* 2 */
else if(choices=="00"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Go from the front.";
    document.getElementById("button_text2").innerHTML = "Go from the back.";
    choices = choices + "0";
}
else if(choices=="01"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Go from the front.";
    document.getElementById("button_text2").innerHTML = "Go from the back.";
    choices = choices + "0";
}
else if(choices=="10"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Stop the Train with the horses";
    document.getElementById("button_text2").innerHTML = "Board the train with the horses.";
    choices = choices + "0";
    }
else if(choices=="11"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Stop the Train with the horses.";
document.getElementById("button_text2").innerHTML = "Jump from a cliff onto the train.";
choices = choices + "0";
}
/*3*/
else if(choices=="000"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="001"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="010"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="011"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="100"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="101"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="110"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="111"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
/*4*/
else if(choices=="0000"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="0001"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="0010"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="0011"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="0100"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="0101"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="0110"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="0111"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="1000"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="1001"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="1010"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="1011"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="1100"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="1101"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="1110"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="1111"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
/*5*/
else if(choices=="00000"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="00001"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="00010"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="00011"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="00100"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="00101"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="00110"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="00111"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="01000"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="01001"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="01010"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="01011"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="01100"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="01101"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="01110"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="01111"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="10000"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="10001"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="10010"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="10011"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="10100"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="10101"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="10110"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="10111"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="11000"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="11001"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="11010"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="11011"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}
else if(choices=="11100"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="11101"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="11110"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="11111"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
choices = choices + "0";
}




    
}



function background_change2(){
    if(choices==""){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_outside.webp)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Take the valley.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "1";
}
else if(choices=="0"){
       
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
   
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";


    document.getElementById("button_text").innerHTML = "Keep going";
    document.getElementById("button_text2").innerHTML = "Setup camp";
    choices = choices + "1";
}
 else if(choices=="1"){
       
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
   
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";


    document.getElementById("button_text").innerHTML = "Plot the heist";
    document.getElementById("button_text2").innerHTML = "Setup camp";
    choices = choices + "1";
}
else if(choices=="00"){
       
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
   
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";


    document.getElementById("button_text").innerHTML = "Go in from the front";
    document.getElementById("button_text2").innerHTML = "Go in from the back";
    choices = choices + "1";
}


else if(choices=="01"){
       
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
   
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";


    document.getElementById("button_text").innerHTML = "Go in from the front";
    document.getElementById("button_text2").innerHTML = "Go in from the back";
    choices = choices + "1";
}
else if(choices=="10"){
       
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
   
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";


    document.getElementById("button_text").innerHTML = "Stop the Train with the horses";
    document.getElementById("button_text2").innerHTML = "Board the train with the horses.";
    choices = choices + "1";
}
else if(choices=="11"){
   
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
   
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
   
    document.getElementById("button_text").innerHTML = "Stop the Train with the horses.";
    document.getElementById("button_text2").innerHTML = "Jump from a cliff onto the train.";
    choices = choices + "1";
    }

else if(choices=="000"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="001"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="010"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="011"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="100"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="101"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="110"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="111"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="0000"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="0001"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="0010"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="0011"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="0100"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="0101"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="0110"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="0111"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="1000"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="1001"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="1010"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="1011"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="1100"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="1101"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="1110"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if(choices=="1111"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    }
    else if (choices === "00000") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "00001") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "00010") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "00011") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "00100") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "00101") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "00110") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "00111") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "01000") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "01001") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "01010") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "01011") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "01100") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "01101") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "01110") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "01111") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "10000") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "10001") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "10010") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "10011") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "10100") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "10101") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "10110") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "10111") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "11000") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "11001") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "11010") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "11011") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "11100") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "11101") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "11110") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "1";
    } 
    else if (choices === "11111") {
        document.getElementById("BackBody").style.backgroundImage = "url(img/Train_robbing.jpg)";
        document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
        document.getElementById("button_text").innerHTML = "Sugma.";
        document.getElementById("button_text2").innerHTML = "Take the Rdsadsadiver.";
        choices = choices + "1";
    }

}