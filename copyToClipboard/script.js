$(document).ready(function(){
    $('#btn').click(function(){
        $('#inputuser').select()
        document.execCommand("copy");
    });
});