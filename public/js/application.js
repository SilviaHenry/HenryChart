$(document).ready(function(){
    $("#HC-table tr th button").click(function(e){
        var $button = $(this);
        var $dateFrom = $button.siblings('input[name="dateFrom"]');
        var $dateTo = $button.siblings('input[name="dateTo"]');
        console.log($dateFrom.val());
        console.log($dateTo.val());
        if ($dateFrom.val() == "" || $dateTo.val() == ""){
            alert ("Fill in");
            return;
        }
        var data = {dateFrom:$dateFrom.val(), dateTo:$dateTo.val()};
        $.post( "/", data, function( data ) {
            $("<p>" + data + "</p>").insertAfter($button);
        }, "text");
    });
});