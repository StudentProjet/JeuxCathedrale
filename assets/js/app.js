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
                var selector = "a[href=#1220]";
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
        if (reponse != "") {
            if (reponse.toUpperCase() === "ROBERT DE LUZARCHES" && essaieEnigme2 != 0) {
                var selector = "a[href=#1230]";
                $(selector).html("1230");
                $(selector).data("click", "true");
                $('a[href=#enigme2]').hide();
                $('#enigme2').modal("hide");
            } else {
                if (essaieEnigme2 != 0) {
                    essaieEnigme2--;
                    $('#essaie').html(essaieEnigme2);
                    $('#reponse_2').html("Faux ! essaie encore ");
                } else {
                    $('#reponse_2').html("Perdu");
                }
            }
        } else {
            $('#reponse_2').html("Repondez à la question");
        }
    });

    // Enigme 3
    $("#btn-enigme3").bind('click', function () {
        var reponse = $('input[name=optionsRadios2]:checked').val();
        if(reponse != undefined){
            if(reponse === "42m"){
                var selector = "a[href=#1240]";
                $(selector).html('1240');
                $(selector).data("click", "true");
                $('a[href=#enigme3]').hide();
                $('#enigme3').modal("hide");
                $("#btn-next").css('display', 'block');
            }else{
                $('#reponse_3').html("Faux ! essaie encore ");
            }
        }else{
            $('#reponse_3').html("Repondez à la question");
        }
    });
	
	// Enigme 4
    $("#btn-enigme4").bind('click', function () {
        var reponse = $('input[name=textE4]').val();
        if(reponse != ""){
            if(reponse.toUpperCase() === "PIERRES DE PICQUIGNY"){
                var selector = "a[href=#1250]";
                $(selector).html('1250');
                $(selector).data("click", "true");
                $('a[href=#enigme4]').hide();
                $('#enigme4').modal("hide");
                $("#btn-next").css('display', 'block');
            }else{
                $('#reponse_4').html("Faux ! essaie encore ");
            }
        }else{
            $('#reponse_4').html("Repondez à la question");
        }
    });
	
	// Enigme 6
    $("#btn-enigme6").bind('click', function () {
        var reponse = $('input[name=textE6]').val();
        if(reponse != ""){
            if(reponse === "CHOEUR"){
                var selector = "a[href=#1265]";
                $(selector).html('1265');
                $(selector).data("click", "true");
                $('a[href=#enigme6]').hide();
                $('#enigme6').modal("hide");
                $("#btn-next").css('display', 'block');
            }else{
                $('#reponse_6').html("Faux ! essaie encore ");
            }
        }else{
            $('#reponse_6').html("Repondez à la question");
        }
    });

});
