let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let color = ["red", "yellow", "purple", "green"];
let p = document.querySelector("p");

function flash(btncls) {
  btncls.classList.add("flash");
  setTimeout(() => {
    btncls.classList.remove("flash");
  }, 300);
}

function levele() {
  userSeq = [];
  level++;
  p.innerText = ` Level : ${level}`;
  let ridx = Math.floor(Math.random() * 3);
  let rc = color[ridx];
  gameSeq.push(rc);
  console.log(`gs`,gameSeq)
 
  let randbtnclass = document.querySelector(`.${rc}`);
  flash(randbtnclass);
}

document.addEventListener("keypress", (e) => {
  if (started == false) {
   if((e.target.nodeName="BODY" && e.key=="s"))
    {started = true;
    levele();
  }
}
});

function chck(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levele, 1000);
    }
  } else {

   
    gameover();
  }
} 
function btnpress() {

  let btn = this;
  flash(btn);
  //    btn.getAttribute("id");
  userSeq.push(btn.getAttribute("id"));
  console.log(`us`,userSeq)    

  //   console.dir(userSeq);
  chck(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function gameover() {
  let body = document.querySelector("body");
  body.classList.add("purered");
  setTimeout(() => {
    body.classList.remove("purered");
    }, 400);

  started=false;
  gameSeq=[];
  userSeq=[];
  p.innerText=`Gameover!  your score was ${level}
  Press KEY[s] To Play`
  level=0;
 }

  