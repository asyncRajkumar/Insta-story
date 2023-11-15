let box = document.querySelector('#box');
let topu = document.querySelector('#top');
let whole = document.querySelector('#whole');
let line = document.querySelector('#line');
let cont = document.querySelector('.container');
let full = document.querySelector('#full');
let back = document.querySelector('.back');
let back1 = document.querySelector('.back1');


let arr = [
    {
        dp: "https://images.unsplash.com/photo-1517496267011-39d56c54984d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60", story: "https://images.unsplash.com/photo-1692179889497-64184bf21e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbmRzY2FwZSUyMG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60", story: "https://images.unsplash.com/photo-1692180142575-c31fcd106b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1692343271726-4f810067c966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", story: "https://images.unsplash.com/photo-1691602422010-7693b03ec6ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1689781598150-0a7dec0391d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60", story: "https://images.unsplash.com/photo-1689790670702-b1f0d83e5e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1689007535046-66a62f4a61f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60", story: "https://images.unsplash.com/photo-1684847625002-e61a864ce2e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    }
]
let done = "";
arr.forEach(function (e, index) {
    done += ` <div class="story">
  <img id="${index}" src="${e.dp}" alt="">
</div>`
});
topu.innerHTML = done;

topu.addEventListener('click', function (det) {
    if (arr[det.target.id] == undefined) {
        box.style.display = "block"
    }
    else {
        whole.style.display = "block";
        line.style.display = "block";
        box.style.overflow = "hidden"
        whole.style.backgroundImage = `url(${arr[det.target.id].story})`
        setTimeout(function () {
            whole.style.display = "none";
            line.style.display = "none";
            box.style.overflow = "auto"
        }, 5000)
    }
});

let arr1 = [
    { img1: "https://images.unsplash.com/photo-1692191798521-f146083a283d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", p: "Exploring new horizons, capturing moments that define us. Life's a journey, and I'm making every step count. 🌟✨ #WanderlustAdventures #ChasingDreams" },
    { img1: "https://plus.unsplash.com/premium_photo-1692340973564-12db94835fba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60", p: "Every dish tells a story, every flavor an adventure. I'm on a culinary expedition, savoring tastes from around the world. Join me in this delicious journey! 🍔🌮 #FoodieExploration" },
    { img1: "https://images.unsplash.com/photo-1692265963326-1a9a7eafec5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60", p: "The gym is my sanctuary, where sweat and determination pave the way to strength. Each session, a step closer to my best self. Here's to progress and the pursuit of power! 💪🏋️‍♀️ #FitnessJourney" },
    { img1: "https://images.unsplash.com/photo-1692303359598-415bf4fb85e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", p: "In a world of words, I find my refuge. Books open doors to countless worlds, and with each page, I embark on a new odyssey. Let's get lost in literature together. 📚🌍 #BookishAdventures" },
    { img1: "https://plus.unsplash.com/premium_photo-1690350731538-57344931ac02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60", p: "An artist's soul spills onto the canvas, where colors and strokes whisper emotions words can't capture. Through art, I share my world. Join me in this kaleidoscope of expression. 🎨🌈 #ArtisticJourney" },
    { img1: "https://images.unsplash.com/photo-1689621207648-83c2d88ad745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60", p: "Nature's symphony soothes my spirit. I'm drawn to the woods, the rivers, the mountains — finding solace in the embrace of the wild. Together, let's celebrate the wonders of our Earth. 🌳🍃 #NatureSerenity" },
    { img1: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60", p: "Rewinding time to moments that shaped us. Nostalgia's embrace is warm, and the memories are timeless treasures. Join me in reliving the laughter, the love, and the journey. 📷🕰️ #ThrowbackVibes" },
    { img1: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60", p: "From raw materials to crafted wonders, my hands bring dreams to life. DIY isn't just a hobby; it's a form of self-expression and creation. Join me in the art of making. ✂️🛠️ #HandmadeMagic" },
    { img1: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60", p: "Every sunrise is a reminder of our potential to shine. With every dawn, we have a chance to rewrite our story. Here's to embracing new beginnings and seizing the day! 🌅🌟 #NewDayNewGoals" },
]

let ok = "";
let hu = 10;
arr1.forEach(function (e, index) {
    ok += ` <div class="img">
     <img id="${index}" src="${e.img1}" alt="">
     </div>
    <div class="icon">
    <i id="${hu}" class="ri-heart-3-fill love" onclick="love()"></i>
        <i class="ri-chat-4-line"></i>
        <i class="ri-share-forward-line"></i>
    </div>
    <p>${e.p}</p>
   </div>`
    hu++;
});
cont.innerHTML = ok;


function love() {
    cont.querySelector('.love').style.color = "red";
    cont.querySelector('.love').style.webkitTextStroke = "2px red";
}
let check = 0;
cont.addEventListener('click', function (e) {
   if (e.target.id>= 10 && check == 0 ) {
    cont.querySelector('.love').style.color = "red";
    cont.querySelector('.love').style.webkitTextStroke = "2px red";
        check = 1;
    }
    else if (e.target.id >= 10 && check == 1) {
        check = 0;
        cont.querySelector('.love').style.color = "white";
    cont.querySelector('.love').style.webkitTextStroke = "2px black";
    }
    else {
        cont.style.display = "block"
    }
});
cont.addEventListener('click', function (det) {
    if (arr1[det.target.id] == undefined) {
        box.style.display = "block"
    }
    else {
        full.style.display = "block";
        full.style.backgroundImage = `url(${arr1[det.target.id].img1})`
    }
});
back.addEventListener('click', function () {
    full.style.display = "none";
});
back1.addEventListener('click', function () {
    whole.style.display = "none";
    line.style.display = "none";
    box.style.overflow = "auto"
});
full.addEventListener('dblclick', function (det) {
        full.querySelector(".heart").style.display="block"
        check=1;
       gsap.to("#full .heart",{
       fontSize:38,
        duration:.4
       });
        love();
        setTimeout(function(){
            full.querySelector(".heart").style.display="none"
        },500)
});
// cont.querySelector(".img i").a