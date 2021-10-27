var billetMatchPrix = 25;
var billetTrainPrix = 50;
var billetMuseePrix = 15;
var billetAvionPrix = 180;
var tab = $(".quantityInput");
var tab2 = $(".totalResult");
var tab3 = $(".priceInput");
$("#priceMatch").val(billetMatchPrix);
$("#priceTrain").val(billetTrainPrix);
$("#priceMusee").val(billetMuseePrix);
$("#priceAvion").val(billetAvionPrix);

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("input", function(){
        ($(tab2[i]).val($(tab[i]).val() * $(tab3[i]).val()));
        calculFinalTotalResult();
    })    
}

function calculFinalTotalResult()
{
    var total = 0;
    for (let i = 0; i < tab2.length; i++) {
        total += +($(tab2[i]).val());
    }
    $("#finalTotalResult").val(total);
}