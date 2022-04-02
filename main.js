document.getElementById('open').addEventListener("click", function(){
    document.querySelector('.close').style.display = 'flex';
    // document.getElementById('open').style.display = 'none';
})

document.getElementById('close-icon').addEventListener("click", function(){
    document.querySelector('.close').style.display = 'none';
})