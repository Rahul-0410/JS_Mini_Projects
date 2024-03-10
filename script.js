


// console.log(amt)
// console.log(per)

let btn=document.getElementById("cal");

btn.addEventListener('click',()=>{
    let amt=parseFloat(document.getElementById("num").value);
    let per=parseFloat(document.getElementById("num1").value);

    let tip = (amt * per / 100).toFixed(2);
    let total = (amt + parseFloat(tip)).toFixed(2);

    document.getElementById("total").textContent = total;
})