$(function(){
    $().timelinr({
        arrowKeys: 'true'
    })
});

$(document).ready(function() {

    var essaieEnigme2 = 3;

    // Enigme 1
    $("#btn-enigme1").bind('click', function () {
        var reponse = $('input[name=optionsRadios1]:checked').val();
        if(reponse != undefined){
            if(reponse === "1220"){
                var selector = "a[href=#" + reponse + "]";
                $(selector).html(reponse);
                $(selector).data("click", "true");
                $('a[href=#enigme1]').hide();
                $('#enigme1').modal("hide");
            }else{
                $('#reponse_1').html("Faux ! essaie encore ");
            }
        }else{
            $('#reponse_1').html("Repondez à la question");
        }
    });


    // Enigme 2
    $("#btn-enigme2").bind('click', function () {
        var reponse = $('input[name=enigme2]').val();
        if(reponse != ""){
            if((reponse === "Robert de Luzarches" || reponse === "robert de luzarches") && essaieEnigme2 != 0){
                var selector = "a[href=#1230]";
                $(selector).html("1230");
                $(selector).data("click", "true");
                $('a[href=#enigme2]').hide();
                $('#enigme2').modal("hide");
            }else{
                if(essaieEnigme2 != 0) {
                    essaieEnigme2--;
                    $('#essaie').html(essaieEnigme2);
                    $('#reponse_2').html("Faux ! essaie encore ");
                }else{
                    $('#reponse_2').html("Perdu");
                }
            }
        }else{
            $('#reponse_2').html("Repondez à la question");
        }
    });

});
