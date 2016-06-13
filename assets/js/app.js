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

});
