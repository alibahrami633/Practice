var inc = document.querySelector("#increment");
var dec = document.querySelector("#decrement");
var count  = document.querySelector("#count");
 
inc.addEventListener("click", function() {
    //console.log(parseInt(count.textContent)++);
    count.innerText = parseInt(count.textContent) + 1;    
});

dec.addEventListener("click", function() {
    //console.log(parseInt(count.textContent)++);
    if (parseInt(count.textContent) > 0) 
        count.innerText = parseInt(count.textContent) - 1;
});