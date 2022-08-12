let rating = 0;
function selectRating(e){
    rating = e.target.textContent;  
    document.getElementById("show-rating").innerHTML = rating;
}
function submit(){
    if(rating==0){
        alert("Please select a rating first :)");
        return;
    }

    document.getElementById("thank-you").style.display = "flex";
    document.getElementById("feedback").style.display = "none";
}
document.getElementById("ratings").addEventListener("click", selectRating);
document.getElementById("submit-btn").addEventListener("click", submit);


