var choices = "";




function background_change(){
    
    if(choices==""){
        
            document.getElementById("BackBody").style.backgroundImage="url(img/Bank_outside.webp)";
            
            document.getElementById("text").innerHTML = "<strong>A</strong>s the flames danced in the dark of the night, the gang's collective decision was clear. The intoxicating allure of a daring bank heist was too much for you to resist, and you spoke up, \"Let's hit the bank. It's time we make a statement that'll echo through these lands. The riches there will set us up for a long time to come.\" <br><br> Dutch's eyes gleamed with approval, his charismatic smile widening. Micah, always ready for chaos, chuckled with anticipation. Arthur exchanged a concerned look with Hosea but nodded in resignation. <br><br> With the decision made, the gang set their sights on the bank. The campfire's warmth now fueled by determination, they began to meticulously plan every detail, from the timing to the getaway route. The atmosphere buzzed with excitement and tension, and you could feel the weight of your choice settling in. <br><br>...<br><br> The moon hung low in the night sky, casting a pale glow over the Van Der Linde gang as they stood at the crossroads, their options laid out before them. The choice between the treacherous river route and the safer, but longer, valley route would determine the success or failure of their daring bank heist <br><br> Dutch, with his eyes shining with ambition, voiced his opinion first. Taking into account the speed that the river route offers he thinks that it would be the more beneficial choice. Micah, always one to embrace risk, nodded eagerly. <br><br> On the other side, Arthur, the voice of reason and experience. He shared his concerns stating that the river is risky because of its unpredictable nature, so he votes for the valley route. Hosea, the gang's strategist and mediator, added his wisdom to the discussion saying that the safety might cost extra time but that it will be worth it. <br><br> All eyes turned to you once again, as the deciding vote rested on your shoulders. The tension in the air was palpable, and the fate of the gang hung in the balance. What would you choose?";
        
            document.getElementById("button_text").innerHTML = "Take the valley.";
            document.getElementById("button_text2").innerHTML = "Take the River.";
            choices = choices + "0";
    }
    /* 1 */
    else if(choices=="0"){
        
        document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
        
        document.getElementById("text").innerHTML = "With a deep breath, you made your decision. \"We'll take the valley route,\" you declared firmly. \"It's a safer bet, and we can't afford to risk everything we've worked for on a dangerous river crossing.\" <br><br> Dutch and Micah exchanged disappointed glances, but they knew the decision was made. The gang set out on the longer but safer path, their resolve unwavering as they moved forward.";
    
        document.getElementById("button_text").innerHTML = "Ligma.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
        choices = choices + "0";
}
else if(choices=="1"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "\"We're taking the river route,\" you declared firmly. \"Speed is our advantage, and we can handle whatever challenges come our way.\" <br><br> Dutch's eyes gleamed with excitement, his charismatic grin spreading. Micah nodded enthusiastically, his impulsive nature thrilled by the prospect. Arthur exchanged a concerned look with Hosea but nodded in resignation, emphasizing that they needed to be prepared for anything.";

    document.getElementById("button_text").innerHTML = "Sugma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
/* 2 */
else if(choices=="00"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ginger.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="01"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Bank_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Ligma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
}
else if(choices=="10"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Fuck You.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "0";
    }
else if(choices=="11"){
    
document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";

document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

document.getElementById("button_text").innerHTML = "Sugma.";
document.getElementById("button_text2").innerHTML = "Take the River.";
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
        
        document.getElementById("text").innerHTML = "<strong>W</strong>ith a deep breath and a sense of resolve, you made your decision. \"We're going for the train,\" you declared firmly. \"It's a calculated risk, and we have the experience to pull it off. We can always hit the bank later, but for now, the train is the way to go.\" <br><br> Arthur and Hosea exchanged knowing nods, while Dutch and Micah begrudgingly accepted your choice. The gang set to work immediately, planning the train robbery down to the last detail. The atmosphere around the campfire shifted, filled with a newfound determination and a shared sense of purpose. <br><br>...<br><br> The moon hung low in the night sky, casting a pale glow over the Van Der Linde gang as they stood at the crossroads, their options laid out before them. The choice between the treacherous river route and the safer, but longer, valley route would determine the success or failure of their train robbery <br><br> Dutch, with his eyes shining with ambition, voiced his opinion first. Taking into account the speed that the river route offers he thinks that it would be the more beneficial choice. Micah, always one to embrace risk, nodded eagerly. <br><br> On the other side, Arthur, the voice of reason and experience. He shared his concerns stating that the river is risky because of its unpredictable nature, so he votes for the valley route. Hosea, the gang's strategist and mediator, added his wisdom to the discussion saying that the safety might cost extra time but that it will be worth it. <br><br> All eyes turned to you once again, as the deciding vote rested on your shoulders. The tension in the air was palpable, and the fate of the gang hung in the balance. What would you choose?";
    
        document.getElementById("button_text").innerHTML = "Take the valley.";
        document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "1";
}
else if(choices=="0"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Sugma.";
    document.getElementById("button_text2").innerHTML = "Take tdhe River.";
    choices = choices + "1";
}
 else if(choices=="1"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Sugma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "1";
} 
else if(choices=="00"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Sugma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "1";
}

else if(choices=="01"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Sugma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "1";
}
else if(choices=="10"){
        
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";

    document.getElementById("button_text").innerHTML = "Sugma.";
    document.getElementById("button_text2").innerHTML = "Take the River.";
    choices = choices + "1";
}
else if(choices=="11"){
    
    document.getElementById("BackBody").style.backgroundImage="url(img/Train_robbing.jpg)";
    
    document.getElementById("text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sequi autem! Aspernatur dicta laudantium cumque a, odit laborum ea officia unde quis molestiae culpa ducimus! Ex saepe doloribus possimus facilis.";
    
    document.getElementById("button_text").innerHTML = "Sugma.";
    document.getElementById("button_text2").innerHTML = "Take the Riasdver.";
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