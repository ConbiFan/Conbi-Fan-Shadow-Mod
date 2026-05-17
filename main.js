(function(){

if(window.ConbiFanShadowMod)return;
window.ConbiFanShadowMod=true;

const MOD_NAME="Conbi Fan Shadow Mod";
const SAVE_KEY="Conbi Fan Shadow Mod";

const DATA={
beyond:0,
grandma:0,
singularity:0
};

function load(){
try{
const raw=localStorage.getItem(SAVE_KEY);
if(raw)Object.assign(DATA,JSON.parse(raw));
}catch(e){}
}

function save(){
localStorage.setItem(SAVE_KEY,JSON.stringify(DATA));
}

function wait(cb){
const t=setInterval(()=>{
if(typeof Game!=="undefined"&&Game.ready&&Game.Achievements){
clearInterval(t);
cb();
}
},50);
}

const img=new Image();
img.crossOrigin="anonymous";
img.src="https://orteil.dashnet.org/cookieclicker/img/icons.png";

const sheet=document.createElement("canvas");
sheet.width=48*3;
sheet.height=48;
const sctx=sheet.getContext("2d");

// ★ここは“固定でグランマ”
const GRANDMA_X=1;
const GRANDMA_Y=6;

function icon(slot,type){

const c=document.createElement("canvas");
c.width=48;c.height=48;
const ctx=c.getContext("2d");

let x=0,y=0;

if(type==="golden"){x=11;y=7;}
if(type==="grandma"){x=GRANDMA_X;y=GRANDMA_Y;}
if(type==="cookie"){x=20;y=7;}

ctx.drawImage(
img,
x*48,y*48,48,48,
0,0,48,48
);

ctx.fillStyle="rgba(0,0,0,0.18)";
ctx.fillRect(0,0,48,48);

ctx.strokeStyle="rgba(0,0,0,0.85)";
ctx.lineWidth=2;
ctx.strokeRect(1,1,46,46);

if(type==="golden"){
ctx.fillStyle="rgba(255,215,0,0.12)";
ctx.fillRect(0,0,48,48);
ctx.shadowBlur=10;
ctx.shadowColor="gold";
}

if(type==="grandma"){
ctx.fillStyle="rgba(90,60,20,0.22)";
ctx.fillRect(0,0,48,48);
}

if(type==="cookie"){
ctx.fillStyle="rgba(170,0,255,0.10)";
ctx.fillRect(0,0,48,48);
ctx.shadowBlur=12;
ctx.shadowColor="purple";
}

sctx.drawImage(c,slot*48,0);

}

function buildIcons(){

icon(0,"golden");
icon(1,"grandma");
icon(2,"cookie");

}

function add(name,desc,slot,order){

const a=new Game.Achievement(name,desc,[slot,0,sheet.toDataURL()]);
a.pool="shadow";
a.order=order;
return a;

}

function init(){

add("Beyond insanity","Click 77777 golden cookies or more.",0,900000);
add("One with the grandmas","Own 1000 grandmas or more.",1,900001);
add("Cookie singularity","Reach 1 septendecillion cookies per second or more.",2,900002);

LocalizeUpgradesAndAchievs();
Game.rebuildUpgrades=true;
Game.recalculateGains=1;

}

function win(name,key){

const a=Game.Achievements[name];
if(!a)return;

if(!a.won){
Game.Win(name);
DATA[key]=1;
save();
}

}

function loop(){

if(Game.goldenClicks>=77777){
win("Beyond insanity","beyond");
}

let ok=true;

for(const i in Game.Objects){
if(i!=="Grandma"&&Game.Objects[i].amount>0)ok=false;
}

if(Game.Objects["Grandma"].amount>=1000&&ok){
win("One with the grandmas","grandma");
}

if(Game.cookiesPs>=1e54){
win("Cookie singularity","singularity");
}

}

wait(()=>{

load();
buildIcons();
init();

setInterval(loop,200);

Game.Notify(
MOD_NAME,
"Loaded",
[2,0,sheet.toDataURL()]
);

});

})();