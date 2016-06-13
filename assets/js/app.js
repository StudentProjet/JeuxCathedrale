$(function(){
    $().timelinr({
        arrowKeys: 'true'
    })
});

$(document).ready(function() {

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
                $("#btn-next").css('display', 'block');
            }else{
                $('#reponse_1').html("Faux ! essaie encore ");
            }
        }else{
            $('#reponse_1').html("Repondez à la question");
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
            if(reponse === "pierres de picquigny"){
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

});
