var clicks = 1;

$(document).ready(function(){
  $("#rr").click(function(){
    $("#syrianus_text").attr("data", "./Texts/Syrianus/Raw%20(Vol.%20II%20Pgs.%201-40)/p"+clicks+".txt");
  });
    $("#rl").click(function(){
    $("#syrianus_text").attr("data", "./Texts/Syrianus/Raw%20(Vol.%20II%20Pgs.%201-40)/p"+clicks+".txt");
  });
});

function clickr() {
    clicks += 1;
    //document.getElementById("clicks").innerHTML = clicks;
};

function clickl() {
    clicks -= 1;
    if (clicks < 1) {
        clicks = 1
    }
    //document.getElementById("clicks").innerHTML = clicks;
};