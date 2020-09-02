
$(document).ready(function(){
    $('#form').submit(function(){
        var th = $(this);
        $.ajax({
            type:"POST",
            url:"mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function(){
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});

$(document).ready(function(){
    $('#f-get__item2').submit(function(){
        var th = $(this);
        $.ajax({
            type:"POST",
            url:"mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function(){
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});