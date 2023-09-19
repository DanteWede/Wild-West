
let desc = document.querySelector("#desc");
let alt1 = document.querySelector("#button_text");
let alt2 = document.querySelector("#button_text2");


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
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Take the valley", "Take the River"],
        exitIds: [3,4]
    },
    {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Take the valley", "Take the River"],
        exitIds: [5,6]
    },
    /*2nd*/
    {
        id: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Keep going", "Set up Camp"],
        exitIds: [7,8]
    },
    {
        id: 4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Keep going", "Set up Camp"],
        exitIds: [7,8]
    },
    {
        id: 5,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Plot the heist", "Set up Camp"],
        exitIds: [9,10]
    },
    {
        id: 6,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Plot the heist", "Set up Camp"],
        exitIds: [9,10]
    },
    /*3rd*/
    {
        id: 7,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Go from the front", "Go from the back"],
        exitIds: [11,12]
    },
    {
        id: 8,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Go from the front", "Go from the back"],
        exitIds: [11,12]
    },
    {
        id: 9,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Stop the Train with the horses", "Board the train with the horses"],
        exitIds: [13,14]
    },
    {
        id: 10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Stop the Train with the horses", "Jump from a cliff onto the train"],
        exitIds: [13,14]
    },
    /*4th*/
    {
        id: 11,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Go around back to the vault", "Take care of the hostages"],
        exitIds: [11,12]
    },
    {
        id: 12,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Focus on the vault", "Help the gang with the hostages"],
        exitIds: [11,12]
    },
    {
        id: 13,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Take care of the train condoctor", "Help searching the train"],
        exitIds: [13,14]
    },
    {
        id: 14,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas eius laudantium nesciunt delectus commodi facere illum soluta dignissimos amet. Tempore eaque, ipsa quibusdam ab nisi vel pariatur doloribus magnam debitis minima voluptates alias fugiat autem odit cum, eum error.",
        exitTexts: ["Make your way to the front of the train", "Follow your gang into the train"],
        exitIds: [13,14]
    },
    
    

    
    
];


showRoom();


function showRoom() {
    desc.innerHTML = rooms[currentRoom].desc;
    alt1.innerHTML = rooms[currentRoom].exitTexts[0];
    alt2.innerHTML = rooms[currentRoom].exitTexts[1];
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

















































































