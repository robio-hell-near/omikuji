const box = document.getElementById("box");
const box2 = document.getElementById("box2");
const kuji = function() {box2.classList.add("boxnopen")};
const n = ["キライ！", "友達！", "抱いて♡"];
let t;

box.addEventListener("click", function() {
    if(box.className === "boxs") {
      box.classList.add("check"); 
    　let i = Math.floor(Math.random() * 3);
      box2.textContent = n[i];
      t = setTimeout(kuji, 3000); 
} else {
    box.classList.remove("check");
    box2.classList.remove("boxnopen");
    clearTimeout(t);
}
});