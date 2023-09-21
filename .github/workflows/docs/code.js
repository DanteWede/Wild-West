
let desc = document.querySelector("#desc");
let alt1 = document.querySelector("#button_text");
let alt2 = document.querySelector("#button_text2");
let background = document.querySelector("#BackBody");


let currentRoom = 0;


let rooms = [
    {
        id: 0,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Rob the bank", "Rob the train"],
        exitIds: [1,2]
    },
    /*1st*/
    {
        id: 1,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
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
    {
        id: 3,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Plan the heist", "Loosen the nerves"],
        exitIds: [7,8]
    },
    {
        id: 4,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Keep going", "Set up Camp"],
        exitIds: [7,8]
    },
    {
        id: 5,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Plan the heist", "Loosen the nerves"],
        exitIds: [9,10]
    },
    {
        id: 6,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Keep going", "Set up Camp"],
        exitIds: [9,10]
    },
    /*3rd*/
    {
        id: 7,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Go from the front", "Go from the back"],
        exitIds: [11,12]
    },
    {
        id: 8,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
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
    {
        id: 11,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Go around back to the vault", "Take care of the hostages"],
        exitIds: [15,16]
    },
    {
        id: 12,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
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
    {
        id: 15,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Try to crack the code", "Use explosives"],
        exitIds: [23,23]
    },
    {
        id: 16,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Hold the hostages longer", "Let the hostages go"],
        exitIds: [25,26]
    },
    {
        id: 17,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Try to crack the code", "Use explosives"],
        exitIds: [32/* escape with the money, good end */,24]
    },
    {
        id: 18,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Help the gang maintain the hostages", "Go to the vault"],
        exitIds: [27,15]
    },
    /*Train*/
    /*Train stopped*/
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
        exitIds: [23,24]
    },
    {
        id: 22,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Focus on looking for valuables", "Help out holding the hostages"],
        exitIds: [25,26]
    },
    /*6th-----------------------------------------------------------------------------------------------------------------------------------*/
    {
        id: 23,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Get the gold", "Save your gang"],
        exitIds: [11,12]
    },
    {
        id: 24, //bad ending route
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Escape on your own", "Save your gang"],
        exitIds: [13,14]
    },
    {
        id: 25,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Fight for the money", "Escape with your gang"],
        exitIds: [15,16]
    },
    {
        id: 26,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Escape with Hosea and Arthur", "Take the gold with Micha and Dutch"],
        exitIds: [17,18]
    },
    {
        id: 27,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Use the hostages to get out", ""],
        exitIds: [11,12]
    },
    {
        id: 28,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Focus on looking for valuables", "Hold the exits"],
        exitIds: [13,14]
    },
    {
        id: 29,
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Stop the train", "Keep the train going"],
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
        id: 32, //Silent bank, perfect end
        background: "url(img/Bank_outside.webp)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Go on lookout", "Get the gold"],
        exitIds: [17,18]
    },


    /*7th*/
    
    

    
    
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

















































































