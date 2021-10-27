var tab = $(".inputGet");
var tab2 = $(".checkboxTax");
tauxNormal = 23;
$("#tauxText").text("Taux % : " + tauxNormal);
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("input", function () {
        calculPay($(tab[i]).attr('id'));
    })
}

for (let i = 0; i < tab2.length; i++) {
    tab2[i].addEventListener("click", function () {
        erase();
        getTax();
    })
}
function ckChange(checkbox){
    var checkboxName = document.getElementsByName(checkbox.name);
    var checked = document.getElementById(checkbox.id);

    if (checked.checked) {
      for(var i=0; i < checkboxName.length; i++){

          if(!checkboxName[i].checked){
              checkboxName[i].disabled = true;
          }else{
              checkboxName[i].disabled = false;
          }
      } 
    }
    else {
      for(var i=0; i < checkboxName.length; i++){
        checkboxName[i].disabled = false;
      } 
    }    
}

document.getElementById("smicButton").addEventListener("click", function()
{
    $("#aB").val(17496);
    $("#aN").val(13476);
    $("#mB").val(1458);
    $("#mN").val(1123);
    $("#jB").val(67.23);
    $("#jN").val(51.82);
    $("#hB").val(9.61);
    $("#hN").val(7.4);
    
})

function calculPay(id) {
    var tauxNormal = getTax();
    switch (id) {
        case "aB":
            var aB = $("#aB").val();
            var aN = aB - (aB * tauxNormal);
            $("#aN").val(aN);
            var mB = aB / 12;
            $("#mB").val(mB);
            var mN = aN / 12;
            $("#mN").val(mN);
            var jB = mB / 21.67;
            $("#jB").val(jB);
            var jN = mN / 21.67;
            $("#jN").val(jN);
            var hB = jB / 7;
            $("#hB").val(hB);
            var hN = jN / 7;
            $("#hN").val(hN);
            break;
        case "mB":
            var mB = $("#mB").val();
            var aB = mB * 12;
            $("#aB").val(aB);
            var aN = aB - (aB * tauxNormal);
            $("#aN").val(aN);
            var mB = aB / 12;
            $("#mB").val(mB);
            var mN = aN / 12;
            $("#mN").val(mN);
            var jB = mB / 21.67;
            $("#jB").val(jB);
            var jN = mN / 21.67;
            $("#jN").val(jN);
            var hB = jB / 7;
            $("#hB").val(hB);
            var hN = jN / 7;
            $("#hN").val(hN);
            break;
        case "jB":
            var jB = $("#jB").val();
            var aB = jB * 21.67 * 12;
            $("#aB").val(aB);
            var jN = jB - (jB * tauxNormal)
            var aN = aB - (aB * tauxNormal);
            $("#aN").val(aN);
            var mB = aB / 12;
            $("#mB").val(mB);
            var mN = aN / 12;
            $("#mN").val(mN);
            var jB = mB / 21.67;
            $("#jN").val(jN);
            var hB = jB / 7;
            $("#hB").val(hB);
            var hN = jN / 7;
            $("#hN").val(hN);
            break;
        case "hB":
            var hB = $("#hB").val();
            var aB = hB * 21.67 * 12 * 7;
            $("#aB").val(aB);
            var aN = aB - (aB * tauxNormal);
            $("#aN").val(aN);
            var mB = aB / 12;
            $("#mB").val(mB);
            var mN = aN / 12;
            $("#mN").val(mN);
            var jB = mB / 21.67;
            $("#jB").val(jB);
            var jN = mN / 21.67;
            $("#jN").val(jN);
            var hN = jN / 7;
            $("#hN").val(hN);
            break;
        case "aN":
            var aN = $("#aN").val();
            var aB = (aN / (1 - tauxNormal));
            $("#aB").val(aB);
            var mB = aB / 12;
            $("#mB").val(mB);
            var mN = aN / 12;
            $("#mN").val(mN);
            var jB = mB / 21.67;
            $("#jB").val(jB);
            var jN = mN / 21.67;
            $("#jN").val(jN);
            var hB = jB / 7;
            $("#hB").val(hB);
            var hN = jN / 7;
            $("#hN").val(hN);
            break;
        case "mN":
            var mN = $("#mN").val();
            var mB = (mN / (1 - tauxNormal));
            var aB = mB * 12;
            $("#aB").val(aB);
            var aN = aB - (aB * tauxNormal);
            $("#aN").val(aN);
            $("#mB").val(mB);
            var jB = mB / 21.67;
            $("#jB").val(jB);
            var jN = mN / 21.67;
            $("#jN").val(jN);
            var hB = jB / 7;
            $("#hB").val(hB);
            var hN = jN / 7;
            $("#hN").val(hN);
            break;

        case "jN":
            var jN = $("#jN").val();
            var jB = (jN / (1 - tauxNormal));
            $("#jB").val(jB);
            var aB = jB * 21.67 * 12;
            $("#aB").val(aB);
            var jN = jB - (jB * tauxNormal)
            var aN = aB - (aB * tauxNormal);
            $("#aN").val(aN);
            var mB = aB / 12;
            $("#mB").val(mB);
            var mN = aN / 12;
            $("#mN").val(mN);
            var hB = jB / 7;
            $("#hB").val(hB);
            var hN = jN / 7;
            $("#hN").val(hN);
            break;
        case "hN":
            var hN = $("#hN").val();
            var hB = (hN / (1 - tauxNormal));
            var aB = hB * 21.67 * 12 * 7;
            var aN = aB - (aB * tauxNormal);
            $("#aB").val(aB);
            $("#hB").val(hB);
            $("#aN").val(aN);
            var mB = aB / 12;
            $("#mB").val(mB);
            var mN = aN / 12;
            $("#mN").val(mN);
            var jB = mB / 21.67;
            $("#jB").val(jB);
            var jN = mN / 21.67;
            $("#jN").val(jN);
            break;
        default:
            break;
    }
    $(".endText").text("Vous gagnez un salaire net mensuel de " + mN + "€ (ce qui repésente un salaire brut mensuel de " + mB +")");
    $(".endText2").text("Si le taux de charges est dans la moyenne soit - " + tauxNormal * 100 + "% la différence entre le brut et le net sera de " + +(Math.round(mB - mN)) + "€ chaque mois.");
}

function erase()
{
    $("#aB").val(null);
    $("#aN").val(null);
    $("#mB").val(null);
    $("#mN").val(null);
    $("#jB").val(null);
    $("#jN").val(null);
    $("#hB").val(null);
    $("#hN").val(null);
    $(".endText").text("Cliquez sur n'importe quel nombre pour calculer votre salaire.");
    $(".endText2").text(null);

}

function getTax() {
    var tab = $(".checkboxTax");
    for (let i = 0; i < tab.length; i++) {
        if ($(tab[i]).is(':checked')) {
            switch ($(tab[i]).attr('id')) {
                case "cadre":
                    $("#tauxText").text("Taux % : " + 25.5);
                    return 0.255;
                case "fonctionnaire":
                    $("#tauxText").text("Taux % : " + 15);
                    return 0.15;
                case "portage":
                    $("#tauxText").text("Taux % : " + 50);
                    return 0.5;
                case "indé":
                    $("#tauxText").text("Taux % : " + 45);
                    return 0.45;
                case "auto":
                    $("#tauxText").text("Taux % : " + 25);
                    return 0.25;
                default:
                    return;
            }
        }
    }
    $("#tauxText").text("Taux % : " + 23);

    return 0.23;
}