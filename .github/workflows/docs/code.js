
let desc = document.querySelector("#desc");
let alt1 = document.querySelector("#button_text");
let alt2 = document.querySelector("#button_text2");
let background = document.querySelector("#BackBody");


let currentRoom = 0;


let rooms = [
    {
        id: 0,
        background: "url(img/Camp.jpg)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Rob the bank", "Rob the train"],
        exitIds: [1,2]
    },
    /*1st*/
    {/* Bank */
        id: 1,
        background: "url(img/crossroads.jpg)",
        desc: `<strong>A</strong>s the flames danced in the dark of the night, the gang's collective decision was clear. The intoxicating allure of a daring bank heist was too much for you to resist, and you spoke up, "Let's hit the bank. It's time we make a statement that'll echo through these lands. The riches there will set us up for a long time to come."
        <br><br>
        Dutch's eyes gleamed with approval, his charismatic smile widening. Micah, always ready for chaos, chuckled with anticipation. Arthur exchanged a concerned look with Hosea but nodded in resignation.
        <br><br>
        With the decision made, the gang set their sights on the bank. The campfire's warmth now fueled by determination, they began to meticulously plan every detail, from the timing to the getaway route. The atmosphere buzzed with excitement and tension, and you could feel the weight of your choice settling in.
        <br><br><br>
        <strong>Crossroads</strong>
        <br><br>
        <strong>T</strong>he moon hung low in the night sky, casting a pale glow over the Van Der Linde gang as they stood at the crossroads, their options laid out before them. The choice between the treacherous river route and the safer, but longer, valley route would determine the success or failure of their (daring bank heist / train robbery).
        <br><br>
        Dutch, with his eyes shining with ambition, voiced his opinion first. Taking into account the speed that the river route offers he thinks that it would be the more beneficial choice. Micah, always one to embrace risk, nodded eagerly.
        <br><br>
        On the other side, Arthur, the voice of reason and experience. He shared his concerns stating that the river is risky because of its unpredictable nature, so he votes for the valley route. Hosea, the gang's strategist and mediator, added his wisdom to the discussion saying that the safety might cost extra time but that it will be worth it. 
        <br><br>
        All eyes turned to you once again, as the deciding vote rested on your shoulders. The tension in the air was palpable, and the fate of the gang hung in the balance. What would you choose?
        `,
        exitTexts: ["Take the valley", "Take the River"],
        exitIds: [3,4]
    },
    {
        id: 2,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Take the valley", "Take the River"],
        exitIds: [5,6]
    },
    /*2nd*/
    {/* Valley */
        id: 3,
        background: "url(img/Valley.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Plan the heist", "Loosen the nerves"],
        exitIds: [7,8]
    },
    {/* River */
        id: 4,
        background: "url(img/River.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Keep going", "Set up Camp"],
        exitIds: [7,8]
    },
    {
        id: 5,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Plan the heist", "Loosen the nerves"],
        exitIds: [9,10]
    },
    {
        id: 6,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Keep going", "Set up Camp"],
        exitIds: [9,10]
    },
    /*3rd*/
    {/* Bank Outside */
        id: 7,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Go from the front", "Go from the back"],
        exitIds: [11,12]
    },
    {/* Bank Outside */
        id: 8,
        background: "url(img/Bank_outside.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Go from the front", "Go from the back"],
        exitIds: [11,12]
    },
    {
        id: 9,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Stop the Train with the horses", "Board the train with the horses"],
        exitIds: [13,14]
    },
    {
        id: 10,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Stop the Train with the horses", "Jump from a cliff onto the train"],
        exitIds: [13,14]
    },
    /*4th*/
    {/* Front */
        id: 11,
        background: "url(img/Bank_Front.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Go around back to the vault", "Take care of the hostages"],
        exitIds: [15,16]
    },
    {/* Back */
        id: 12,
        background: "url(img/Bank_Back.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Go to the vault", "Take hostages"],
        exitIds: [17,18]
    },
    {
        id: 13,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Take care of the train condoctor", "Help searching the train"],
        exitIds: [19,20]
    },
    {
        id: 14,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Make your way to the front of the train", "Follow your gang into the train"],
        exitIds: [21,22]
    },
    /*5th*/
    /*Bank*/
    {/* Front, Vault */
        id: 15,
        background: "url(img/Bank_Vault.png)",
        desc: `<strong></strong>`,
        exitTexts: ["Try to crack the code", "Use explosives"],
        exitIds: [23,23]
    },
    {/* Front, Hostage */
        id: 16,
        background: "url(img/Bank_Hostages.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Comply with the police", "Ignore their demands"],
        exitIds: [25,26]
    },
    {/* Back, Vault */
        id: 17,
        background: "url(img/Bank_Vault.png)",
        desc: `<strong></strong>`,
        exitTexts: ["Try to crack the code", "Use explosives"],
        exitIds: [31,24] /* 31 escape with the money, good end */
    },
    {/* Back, Hostage */
        id: 18,
        background: "url(img/Take_Hostages.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Help the gang maintain the hostages", "Go to the vault"],
        exitIds: [27,15]
    },
    /*Train*/
    /*Train stopped--------------------------------------------------------*/
    {
        id: 19,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Kick the train condoctor off the train", "Hold the train condoctor hostage"],
        exitIds: [28,29]
    },
    {
        id: 20,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Focus on looking for valuables", "Hold the exits"],
        exitIds: [30,31]
    },
    /*Train still moving*/
    {
        id: 21,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Stop the train", "Keep the train going"],
        exitIds: [33,34]
    },
    {
        id: 22,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Focus on looking for valuables", "Help out holding the hostages"],
        exitIds: [35,36]
    },
    /*6th-----------------------------------------------------------------------------------------------------------------------------------*/
    {/* Front, Vault (explo/code) */
        id: 23,
        background: "url(img/Bank_robbing.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Get the gold", "Save your gang"],
        exitIds: [32,33]
    },
    {/* Back, Vault, Explo */
        id: 24, //bad ending route
        background: "url(img/Bank_Explo.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Escape on your own", "Save your gang"],
        exitIds: [34,35]
    },
    {/* Front, Hostage, Comply */
        id: 25,
        background: "url(img/Bank_Comply.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Escape with Hosea and Arthur", "Take the gold with Micha and Dutch"],
        exitIds: [36,37]
    },
    {/* Front, Hostage, Ignore */
        id: 26,
        background: "url(img/Bank_Ignore.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Fight for the money", "Escape with your gang"],
        exitIds: [38,39]
    },
    {/* Back, Hostage, Maintain */
        id: 27,
        background: "url(img/Bank_Maintain.webp)",
        desc: `<strong></strong>`,
        exitTexts: ["Use the hostages to get out", "Try to escape with the gold out back"],
        exitIds: [11,12]
    },
    {
        id: 28,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Tell the gang about the police", "Escape on your own"],
        exitIds: [13,14]
    },
    {
        id: 29,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["", "Keep the train going"],
        exitIds: [15,16]
    },
    {
        id: 30,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Focus on looking for valuables", "Help out holding the hostages"],
        exitIds: [17,18]
    },
    {
        /* Back, Vault, Code */
        id: 31, //Silent bank, perfect end
        background: "url(img/Bank_robbing.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Go on lookout", "Get the gold"],
        exitIds: [40,41]
    },
    


    /*7th*/
    {/* Front, Vault, Explo/Code, Gold */
        id: 32,
        background: "url(img/Death2.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Front, Vault, Explo/Code, Gang */
        id: 33,
        background: "url(img/Death2.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Back, Vault, Explo, Selfish */
        id: 34,
        background: "url(img/Death2.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Back, Vault, Explo, Gang */
        id: 35,
        background: "url(img/Death2.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
    {/* Front, Hostage, Comply, Fight */
        id: 36,
        background: "url(img/Death2.jpg)",
        desc: `<strong></strong>`,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },
     {/* Front, Hostage, Comply, Escape */
        id: 37,
        background: "url(img/placeholder.png)",
        desc: `<strong></strong>`,
        exitTexts: ["Play Again", "End"],
        exitIds: [0,0]
    },

    
    
];


showRoom();


function showRoom() {
    desc.innerHTML = rooms[currentRoom].desc;
    alt1.innerHTML = rooms[currentRoom].exitTexts[0];
    alt2.innerHTML = rooms[currentRoom].exitTexts[1];
    document.getElementById("BackBody").style.backgroundImage = rooms[currentRoom].background;
    stat.innerHTML = statusList[currentStatus];

    
}

function displayStats() {
    console.log(currentRoom, currentStatus);

}

function room1() {
    console.log("Left");
    currentRoom = rooms[currentRoom].exitIds[0];
    showRoom();
}

function room2() {
    console.log("Right")
    currentRoom = rooms[currentRoom].exitIds[1];
    showRoom();
}

















































































