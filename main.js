 /*==== MENU SHOW ===*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu ('nav-toggle','nav-menu')

/*==== ACTIVE AND REMOVE MENU ====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
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
    // greating:{
    //     title:["Hey there <span class='emoji'> &#128075;</span> how's it going ?","I'm your assistant Chatbot pawered by Gerard.","To star, I'd like to know what's your ?name? 🙏"],
    //     options:[]
    // },

    //Introduction
    chatinit:{
        title: [" So tell me what subject would you like to talk about ?"],
        // title: ["Hey there <span class='emoji'> &#128075;</span> how's it going ?","I'm your assistant Chatbot pawered by Gerard to anwer.","To start, let me know your name 🤗🙏"],
        options: ["Who is Gerard ?", "Why should I hire Gerard ?","What Gerard can do ?","Activities Gerard is interested in."]
    },
    //======================================================
    //Let's talk about Who is Gerard ? Personnality, stadies
    who: {
        title: ["Thanks for your question. This is Gerard !","<img src='./Image/1676199389603.jpeg' style='width:120px; border-radius:15px'>","He is a geologist and developper.","So what would you like to know about him specifically?"],
        options: ['Challenges he went through.','Familly education.','Education or stadies influences.','Plans and project.'],
         url: {
            
        }
    },
    challenges: {
        title : [
            "Gerard faced several challenges and obstacles in his life, including coming from a poor family, experiencing the loss of their father at a young age, and being raised by a single mother along with seven siblings. ",
            "He is also lived in a financially constrained environment, which made access to basic necessities, such as clean water, healthcare, and education, difficult. Despite these challenges, Gerard excelled academically and worked to contribute to his family's income through small businesses and entreprenorship."],
        options : ["Thank you. I'm grade to know that."],
        url: {
            
        }
    },
    familly: {
        title : [
            "Gerard faced several challenges and obstacles in his life, including coming from a poor family, experiencing the loss of their father at a young age, and being raised by a single mother along with seven siblings. ",
            "They also lived in a financially constrained environment, which made access to basic necessities, such as clean water, healthcare, and education, difficult. ",
            "Despite these challenges, the author excelled academically and worked to contribute to their family's income through small businesses."],
        options : ["Thank you.","Chatinit or change subject."],
        url: {
            
        }
    },
    education: {
        title : [
            "The education played a significant role in the gerard's life and aspirations. Despite coming from a financially constrained environment, the author excelled academically and recognized the value of education as a means to break the cycle of poverty. ",
            "Education became a pathway for the author to escape the constraints of their circumstances and pursue their dreams. It also fueled their determination to create a better future for themselves and their family."
            ],
        options : ["Thank you for talling me the story of Gerard "],
        url: {
            more:"https://mail.google.com/mail/u/0/?tab=mm#inbox/FMfcgzGwHVVFqldGxhHsLXhsLXgSSjNx",
            link:["https://mail.google.com/mail/u/0/?tab=mm#inbox/FMfcgzGwHVVFqldGxhHsLXhsLXgSSjNx","https://mail.google.com/mail/u/0/?tab=mm#inbox/FMfcgzGwHVVFqldGxhHsLXhsLXgSSjNx","https://mail.google.com/mail/u/0/?tab=mm#inbox/FMfcgzGwHVVFqldGxhHsLXhsLXgSSjNx"],
        }
    },
    plans: {
        title : ["Gerard want to bring change in his community.","Gerard is visionnery thinker who works hard to reduice poverty and jobless.","Help children in need.","Run a orphelinat","Run a campany providing clothes, food, water and living spaces for the refugies."],
        options : ['Thanks'],
        url: {
            
        }
    },
    //=========================================================================
    //Now let's talk about same services Gerard can offer, Mining, Web and Fashion
    activities: {
        title: ["Gerard is interested in many different activities such us : "],
        options:["Friend (hunging out).","Reading books","NBA and NASA TV shows","Cooking"],
        url : {
            
        }
    },

    friends: {
        title: ["He likes spend time with is familly and friends."],
        options: ["Thank you !"],
        url: {
            
        }
    },
    reading: {
        title: ["He is pationed about watching and reading content about spaces exploration and entreprenorship."],
        options: ["Thank you !"],
        url: {
            
        }
    },
    nba: {
        title: ["Gerard is a big fun of NBA and cooking."],
        options: ["Thank you"],
        url: {
            
        }
    },

    //========================================================================
    //Let's talk about hardskills
    what: {
        title: ["These are the main skills that Gerard have..."],
        options: [
            "Mining","Web developpement","Fashion design"],
        url: {
            
        }
    },
     mining: {
        title: ["Gerard is a geologist for assessing the location, quality and quantity of mineral deposits..."],
        options: ["Thank you !"],
        url: {
            
        }
    },
     web: {
        title: ["Gerard is a frontend and backend web design.","He is skill learning but is can make some web site and web applications."],
        options: ["Thank you !"],
        url: {
            
        }
    },
     fashion: {
        title: ["This include sawing clothes and embroderies design..."],
        options: ["Thank you for the information!"],
        url: {
            
        }

    },

    //====================================================================================================
    //Let's talk about softskills
    why: {
        title: ["You should consider hiring Mr Gerard because he have demonstrated resilience, determination, selflessness, leadership, and a strong work ethic. He have also shown a passion for entrepreneurship, innovation, and social impact. ", "Additionally, Gerard has a track record of excelling academically, seeking personal growth and development, and actively seeking mentorship and guidance from successful entrepreneurs and leaders.","He commitment to making a difference and creating a more equitable and prosperous world for all makes them a valuable candidate for any organization."],
        options: ["Communication 90%","LeaderShip 60%","Organation 80 %","Service 78%","Problem sorving 85%","collaboration 80%"],
    },
    thank: {
        title: ["You're welcome...","If you have anny other question, feel free to cantact Gerard."],
        options: ["Chatinit or change subject."],
    },
    other: {
        title: ["Unfortunatly I'm can't assist you on that options. Cause I'm not a human.","I'm just a programme powered by Gerard to get you know him better🙏."],
        options: ["Okay no problem, I'll contact Gerard in person..."],
    },


    //====================================================================================================
    //User messages
    message:{
        title:["Thank you for your message...", "To more information about Gerard, please try to contact he by Whatsapp.","Just click the button beside..."],
        options: []
    },
    //====================================================================================================
    //lets send Emogi
    emoji:{
        title:["❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️🤗🤗🤗🙏"],
        options: ["Chatinit or change subject."]
    },
    learn:{
        title:["To learn more about Gerard please contact."],
        options:["Chatinit or change subject."],
    }

}



//Show and hide the chatbot. These to function are called on the html element, respectivelly the button with class chatbot-toggler and span with class closeBtn through the attribute oneclick
function showChat(){
    document.body.classList.toggle("show-chat");
    document.body.querySelector(".notification").style.opacity="0";
    document.body.querySelector(".notif").style.opacity="0";
    greating()
}
function closeChat(){
    document.body.classList.remove("show-chat");
}

//The message generetor and options
let cbot = document.getElementById("chat-box");
let len1 = data.chatinit.title.length;

//================================================================
let greatingArr = ["Hey!<span class='emoji'> &#128075;</span> how's it going ?","I'm CHATBOT, your assistant to tell you every thing on Gerard.","Before we start, let me knwon your name? 🙏"];
let len0 = greatingArr.length;
let userNameArr = []
function greating(){  
    t=0;
    cbot.innerHTML='';
    for(let i=0;i<len0;i++){
        setTimeout(handleChatGreating,(i*500));
    }
}

let t=0;
function handleChatGreating(){
    console.log(t);
    let elm = document.createElement("p");
    elm.innerHTML = greatingArr[t];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    t++;
    handleScroll();
}

let sendBtn = document.querySelector(".bxs-send");
let textbox = document.querySelector("textarea");

sendBtn.addEventListener("click", function(e){
    
    userNameArr.push(textbox.value);
    console.log(textbox.value);
    textbox.value = "";
    creatNameUser();
    handleScroll();
})

function creatNameUser(){
    
    let userName = userNameArr[0];
    
    let optNameuser = document.createElement("span");
    let inp = '<div>'+userName+'</div>';
    optNameuser.innerHTML=inp;
    let str = userName
    // Desplaying the option(name user) secteted
    let elm = document.createElement("p")
    elm.setAttribute("class","test");
    let sp = '<p class="rep">'+str+'</p>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);
    document.querySelector(".typing").style.display = "block";
    handleScroll();
    // Creating a "Nice to meet you NomeUser";

    let leng = userNameArr.length;
    setTimeout(function(){
        handleResultsGreeting(userName)
        handleScroll()
    },((leng+1)*800));

    console.log(userName);
    // handleResultsGreeting(userName);
}


function handleResultsGreeting(userName){
    console.log(userName)
    let elm = document.createElement("p");
    elm.innerHTML = 'Nice to me you '+userName+" 🤗!"+"I hope you're doing well today...";
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);

    // let leng = userNameArr.length;
    setTimeout(function(){
        initChat(data.chatinit)
    },((len1+1)*2000));
}

//==========================================================

function initChat(){  
    j=0;
    // cbot.innerHTML='';
    for(let i=0;i<len1;i++){
        setTimeout(handleChat,(i*1000));
    }

    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*1000))
}

let j=0;
function handleChat(){
    console.log(j);
    let elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    document.querySelector(".typing").style.display = "none";
    handleScroll();
}

function showOptions(options){
    for(let i=0;i<options.length;i++){
        let opt = document.createElement("span");
        let inp = '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click",handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this.innerHTML)
    let str = this.innerText;
    let textArr = str.split(" ");
    let findText = textArr[0];
    //Cleaning of options once one option is seleceted
    const a = document.querySelectorAll(".opt");
    a.forEach(el=>{
        el.remove();
    })
    // Desplaying the option secteted
    let elm = document.createElement("p")
    elm.setAttribute("class","test");
    let sp = '<p class="rep">'+str+'</p>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);
    //Result
    let tempObj = data[findText.toLowerCase()];
    // handleResults(tempObj.title,tempObj.options,tempObj.url);
    document.querySelector(".typing").style.display = "block";
    setTimeout(function(){
        handleResults(tempObj.title,tempObj.options,tempObj.url);
        handleScroll()
    },3000);
    // handleScroll();
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        let elm = document.createElement("p");
        elm.innerHTML = title[i];
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
    }
    if(function isObjectEmpty(url) {
    return Object.keys(url).length === 0;
    }){
        console.log("having more options");
        showOptions(options);

    }
    else{
        console.log("end result");  
        handleOptions(options,url);
    }


}

function handleOptions(options,url){

        for(let i=0;i<options.length;i++){
            let opt = document.createElement("span");
            let inp = '<a class="m-link" href="'+url.link[i]+'"> ' +options[i]+'</a>';
            opt.innerHTML=inp;
            opt.setAttribute("class","opt");
            cbot.appendChild(opt);
        }
        let opt = document.createElement("span");
        let inp = '<a class="m-link" href="'+url.more+'">'+'Seen more</a>';
            opt.innerHTML=inp;

        const isObjectEmpty = (url)=>{
            return JSON.stringify(url)=== "{}";
        }
        opt.setAttribute("class","opt link");
        cbot.setAttribute(opt);
        handleScroll();

        showOptions(data.chatinit.options)
        document.querySelector(".typing").style.display = "none";
}

function handleScroll(){
    let elem= document.getElementById('chat-box');
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

    emoji.addEventListener("click", function(e){
        data.emoji.options = emoji.innerHTML
        console.log(emoji.innerHTML)
        console.log(data);
        creatEmojiUser()
        handleOptUser()
})

function creatEmojiUser(){
    let userMsg = data.emoji.options[0]
    let optuser = document.createElement("span");
    let inp = '<div>'+data.emoji.options+'</div>';
    optuser.innerHTML=inp;
    handleScroll();


    let str = userMsg
    let textArr = str
    let findText = textArr[0];

    //Cleaning of options once one option is seleceted
    const a = document.querySelectorAll(".opt");
    a.forEach(el=>{
        el.remove();
        console.log(el);
    })
    // Desplaying the option secteted
    let elm = document.createElement("p")
    elm.setAttribute("class","test");
    let sp = '<p class="rep" style="font-size:50px; margin-top:20px;">'+'❤️'+'</p>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);
    //All the Result fuction
    let tempObj = data.emoji;

    setTimeout(function(){
        handleResultsEnd(tempObj.title,tempObj.options,tempObj.url);
        handleScroll()
    },2000);
    // handleResultsEnd(tempObj.title,tempObj.options,tempObj.url);
    // handleScroll();
}

function handleResultsEnd(title,options,url){
    for(let i=0;i<title.length;i++){
        let elm = document.createElement("p");
        elm.innerHTML = title[i];
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
    }
}
