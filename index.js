$(() => {
    var changeColor=0;
    /* $(".toggle").on("click", () => {
        if(changeColor == 0)
        {
            $('body').addClass('dark');
            changeColor = 1;
        }
        else
        {
            
            $('body').removeClass('dark');
            changeColor = 0;
        }
    })  */

    $(".toggle").change( function()  {
        if($(this).prop("checked") == true)
        {
            $('body').addClass('dark');
            $('.theme-text').addClass('text-dark');
            $('.theme-text-secondary').addClass('text-secondary-dark');
            $('.card-theme').addClass('card-dark');
        }else{
            $('body').removeClass('dark');
            $('.theme-text').removeClass('text-dark');
            $('.theme-text-secondary').removeClass('text-secondary-dark');
            $('.card-theme').removeClass('card-dark');
        }
    });
    
});