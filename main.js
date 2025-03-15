/*==== MENU SHOW ===*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*==== ACTIVE AND REMOVE MENU ====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'))

    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*==== SCROLL REVEAL ANIMATION ====*/
// const sr = scrollReveal({
//     origin:'top';
//     distance:'80px';
//     reset: true
// })

/* SCROLL HOME*/
// sr.reveal('.home__title',{})
// sr.reveal('.button',{delay:200})
// sr.reveal('.home__img',{delay:400})
// sr.reveal('.home__social-icon',{interval:200})


/*SCROLL ABOUT*/
// sr.reveal('.home__title',{})
// sr.reveal('.button',{delay:200})


/* SCROLL SKILLS*/



/*SCROLL WORK*/



/* SCROLL CONTALL*/


/*==== CHATBOT ===*/
let data = {
    // Introduction
    chatinit: {
        title: ["So, tell me, what subject would you like to talk about?"],
        options: [
            "Who is Gerard?",
            "What can Gerard do?",
            "Why should we hire Gerard?",
            "Hobbies"
        ]
    },

    // Option 1 : Who is Gerard? (Bio or summary or profile)
    who: {
        title: [
            "Thank you for your question. Meet Gerard!",
            "<img src='./Image/1676199389603.jpeg' style='width:120px; border-radius:15px'>",
            "He is a geologist and a developer.",
            "What would you like to know about him specifically?"
        ],
        options: [
            "Challenges and obstacles",
            "Family influences",
            "Education",
            "Exciting projects"
        ]
    },

    // Option 1.1 : Challenges
    challenges: {
        title: [
            "Gerard faced several challenges in life, including growing up in a financially struggling family and losing his father at a young age.",
            "Despite these hardships, he excelled academically and supported his family through small businesses and entrepreneurship."
        ],
        options: ["Thank you! I'm glad to know that.","Who is Gerard? (Back to previous Bio options)"]
    },
    
    // Option 1.2 : Family influences
    family: {
        title: [
            "Gerard was raised by a single mother alongside seven siblings.",
            "He grew up in a challenging environment with limited access to necessities like clean water, healthcare, and education.",
            "Despite this, he remained determined to succeed academically and help his family."
        ],
        options: ["Thank you.","Who is Gerard? (Back to previous Bio options)"]
    },

    // Option 2 : Why should we hire Gerard? (Skills)
    what: {
        title: ["Here are Gerard's main skills:"],
        options: ["Mining", "Web development", "Fashion design"]
    },
    
    // Option 2.1 : Mining skills
    mining: {
        title: ["Gerard is a geologist, specializing in assessing the location, quality, and quantity of mineral deposits."],
        options: ["Thank you!","What can Gerard do? (Back to previous!)"]
    },

    // Option 2.2 : Web Development
    web: {
        title: [
            "Gerard is a skilled full-stack web developer.",
            "He has expertise in frontend technologies like HTML, CSS, and JavaScript, as well as backend frameworks such as Node.js and Django.",
            "He is passionate about building responsive and user-friendly web applications."
        ],
        options: ["Thank you!","What can Gerard do? (Back to previous!)"]
    },
    
    // Option 2.3 : Fashion Design
    fashion: {
        title: [
            "Gerard is an experienced fashion designer.",
            "He specializes in embroidery, tailoring, and creating unique fashion pieces inspired by different cultures.",
            "He also runs a business focused on sustainable and ethical fashion."
        ],
        options: ["Thank you!","What can Gerard do? (Back to previous!)"]
    },

    // Option 3 : Soft Skills 
    why: {
        title: ["Gerard possesses essential soft skills that make him an excellent candidate."],
        options: ["Communication", "Leadership", "Organization", "Service", "Problem_solving", "Collaboration", "Networking", "Creativity", "Adaptability", "Time_Management"]
    },

    // Option 3.8 : Creativity
    creativity: {
        title: ["Gerard is highly creative, bringing innovative ideas to projects and problem-solving."],
        options: ["That's impressive!","Why should we hire Gerard? (Back to previous!)"]
    },
    
    // Option 3.9 : Adaptability
    adaptability: {
        title: ["Gerard adapts quickly to new situations and environments, making him an asset in dynamic work settings."],
        options: ["Wow! That's a great skill!","Why should we hire Gerard? (Back to previous!)"]
    },
    
    // Option 3.10 : Time Management
    time_management: {
        title: ["Gerard is excellent at prioritizing tasks, meeting deadlines, and ensuring productivity."],
        options: ["Very important skill!","Why should we hire Gerard? (Back to previous!)"]
    },
    
    // Option 4 : Hobbies
    hobbies: {
        title: ["Gerard enjoys various activities, including:"],
        options: ["Friendship", "Reading", "Sports", "Cooking"]
    },
    
    // Option Thank you!
    thank: {
        title: ["You're welcome!", "If you have any other questions, feel free to ask."],
        options: ["chatinit (change topic)"]
    }
};
function showChat() {
    document.body.classList.toggle("show-chat");
    document.body.querySelector(".notification").style.opacity = "0";
    document.body.querySelector(".notif").style.opacity = "0";
    greating()
}
function closeChat() {
    document.body.classList.remove("show-chat");
}

//The message generetor and options
let cbot = document.getElementById("chat-box");
let len1 = data.chatinit.title.length;

//================================================================
let greatingArr = ["Hey!<span class='emoji'> &#128075;</span> how's it going ?", "I'm CHATBOT, your assistant to tell you every thing on Gerard.", "Before we start, let me knwon your name? 🙏"];
let len0 = greatingArr.length;
let userNameArr = []
function greating() {
    t = 0;
    cbot.innerHTML = '';
    for (let i = 0; i < len0; i++) {
        setTimeout(handleChatGreating, (i * 500));
    }
}

let t = 0;
function handleChatGreating() {
    console.log(t);
    let elm = document.createElement("p");
    elm.innerHTML = greatingArr[t];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    t++;
    handleScroll();
}

let sendBtn = document.querySelector(".bxs-send");
let textbox = document.querySelector("textarea");

sendBtn.addEventListener("click", function (e) {

    userNameArr.push(textbox.value);
    console.log(textbox.value);
    textbox.value = "";
    creatNameUser();
    handleScroll();
})

function creatNameUser() {

    let userName = userNameArr[0];

    let optNameuser = document.createElement("span");
    let inp = '<div>' + userName + '</div>';
    optNameuser.innerHTML = inp;
    let str = userName
    // Desplaying the option(name user) secteted
    let elm = document.createElement("p")
    elm.setAttribute("class", "test");
    let sp = '<p class="rep">' + str + '</p>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);
    document.querySelector(".typing").style.display = "block";
    handleScroll();
    // Creating a "Nice to meet you NomeUser";

    let leng = userNameArr.length;
    setTimeout(function () {
        handleResultsGreeting(userName)
        handleScroll()
    }, ((leng + 1) * 800));

    console.log(userName);
    // handleResultsGreeting(userName);
}


function handleResultsGreeting(userName) {
    console.log(userName)
    let elm = document.createElement("p");
    elm.innerHTML = 'Nice to me you ' + userName + " 🤗!" + " I hope you're doing well today...";
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);

    // let leng = userNameArr.length;
    setTimeout(function () {
        initChat(data.chatinit)
    }, ((len1 + 1) * 2000));
}

//==========================================================

function initChat() {
    j = 0;
    // cbot.innerHTML='';
    for (let i = 0; i < len1; i++) {
        setTimeout(handleChat, (i * 1000));
    }

    setTimeout(function () {
        showOptions(data.chatinit.options)
    }, ((len1 + 1) * 1000))
}

let j = 0;
function handleChat() {
    console.log(j);
    let elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    document.querySelector(".typing").style.display = "none";
    handleScroll();
}

function showOptions(options) {
    for (let i = 0; i < options.length; i++) {
        let opt = document.createElement("span");
        let inp = '<div>' + options[i] + '</div>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {
    console.log(this.innerHTML)
    let str = this.innerText;
    let textArr = str.split(" ");
    let findText = textArr[0];
    //Cleaning of options once one option is seleceted
    const a = document.querySelectorAll(".opt");
    a.forEach(el => {
        el.remove();
    })
    // Desplaying the option secteted
    let elm = document.createElement("p")
    elm.setAttribute("class", "test");
    let sp = '<p class="rep">' + str + '</p>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);
    //Result
    let tempObj = data[findText.toLowerCase()];
    // handleResults(tempObj.title,tempObj.options,tempObj.url);
    document.querySelector(".typing").style.display = "block";
    setTimeout(function () {
        handleResults(tempObj.title, tempObj.options, tempObj.url);
        handleScroll()
    }, 3000);
    // handleScroll();
}


function handleResults(title, options, url) {
    for (let i = 0; i < title.length; i++) {
        let elm = document.createElement("p");
        elm.innerHTML = title[i];
        elm.setAttribute("class", "msg");
        cbot.appendChild(elm);
    }
    if (function isObjectEmpty(url) {
        return Object.keys(url).length === 0;
    }) {
        console.log("having more options");
        showOptions(options);

    }
    else {
        console.log("end result");
        handleOptions(options, url);
    }


}

function handleOptions(options, url) {

    for (let i = 0; i < options.length; i++) {
        let opt = document.createElement("span");
        let inp = '<a class="m-link" href="' + url.link[i] + '"> ' + options[i] + '</a>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        cbot.appendChild(opt);
    }
    let opt = document.createElement("span");
    let inp = '<a class="m-link" href="' + url.more + '">' + 'Seen more</a>';
    opt.innerHTML = inp;

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }
    opt.setAttribute("class", "opt link");
    cbot.setAttribute(opt);
    handleScroll();

    showOptions(data.chatinit.options)
    document.querySelector(".typing").style.display = "none";
}

function handleScroll() {
    let elem = document.getElementById('chat-box');
    elem.scrollTop = elem.scrollHeight;
}

//==========================================================
// Messages form users
// let sendBtn = document.querySelector(".bxs-send")
// let textbox = document.querySelector("textarea")


// sendBtn.addEventListener("click", function(e){
//     if(textbox.value == ""){
//         // handleResults(message, options, url)
//         alert("Please type in a message")
//     }
//     else{
//         data.message.options = [textbox.value];
//         console.log(textbox.value);
//         textbox.value = "";
//         creatMessageUser()
//         handleScroll()
//     }
// })


// function creatMessageUser(){
//     let userMsg = data.message.options[0];
//     let optuser = document.createElement("span");
//     let inp = '<div>'+data.message.options+'</div>';
//     optuser.innerHTML=inp;

//     let str = userMsg
//     let textArr = str.split(" "); //.join()
//     let findText = textArr[0];
//     //Cleaning of options once one option is seleceted
//     const a = document.querySelectorAll(".opt");
//     a.forEach(el=>{
//         el.remove();
//         console.log(el);
//     })
//     // Desplaying the option secteted
//     let elm = document.createElement("p")
//     elm.setAttribute("class","test");
//     let sp = '<p class="rep">'+str+'</p>';
//     elm.innerHTML = sp;
//     cbot.appendChild(elm);
//     //Result
//     let tempObj = data[findText.toLowerCase()];
//     handleResults(tempObj.title,tempObj.options,tempObj.url);
//     handleScroll();
// }

//===========================================================
//lets send Emogi
let emoji = document.querySelector(".love")
// let contentMoji = document.querySelector(".love")

emoji.addEventListener("click", function (e) {
    data.emoji.options = emoji.innerHTML
    console.log(emoji.innerHTML)
    console.log(data);
    creatEmojiUser()
    handleOptUser()
})

function creatEmojiUser() {
    let userMsg = data.emoji.options[0]
    let optuser = document.createElement("span");
    let inp = '<div>' + data.emoji.options + '</div>';
    optuser.innerHTML = inp;
    handleScroll();


    let str = userMsg
    let textArr = str
    let findText = textArr[0];

    //Cleaning of options once one option is seleceted
    const a = document.querySelectorAll(".opt");
    a.forEach(el => {
        el.remove();
        console.log(el);
    })
    // Desplaying the option secteted
    let elm = document.createElement("p")
    elm.setAttribute("class", "test");
    let sp = '<p class="rep" style="font-size:50px; margin-top:20px;">' + '❤️' + '</p>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);
    //All the Result fuction
    let tempObj = data.emoji;

    setTimeout(function () {
        handleResultsEnd(tempObj.title, tempObj.options, tempObj.url);
        handleScroll()
    }, 2000);
    // handleResultsEnd(tempObj.title,tempObj.options,tempObj.url);
    // handleScroll();
}

function handleResultsEnd(title, options, url) {
    for (let i = 0; i < title.length; i++) {
        let elm = document.createElement("p");
        elm.innerHTML = title[i];
        elm.setAttribute("class", "msg");
        cbot.appendChild(elm);
    }
}
