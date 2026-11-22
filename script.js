const cells = document.querySelectorAll(".cell")
const span = document.querySelector("span")
const correct = [18,4,5,10,15]
const win = document.querySelector(".win")
let k = 1
let r = 0
cells.forEach((item, index)=>{
  item.addEventListener("click", ()=>{
    if(correct.includes(index)){
          console.log(1)
          item.style.border = "5px dashed green"
          item.textContent = k
          k++
          r++
      span.textContent = r
      if (r == 5) win.textContent = "Виграш";
    }
    else {
      r--
      span.textContent = r;
    }
  }, { once: true });
});