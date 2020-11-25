$(document).ready(() =>{

    $(window).scroll(() =>{
        if($(window).scrollTop() > 120){
            $('#navbar').addClass("navbar-light");
            $('#navbar').removeClass("navbar-dark");
            $("#navbar-img").attr('src','assets/images/VOROFY LOGO BLUE.png');
        }else{
            $('#navbar').removeClass("navbar-light");
            $('#navbar').addClass("navbar-dark");
            $("#navbar-img").attr('src','assets/images/VOROFY LOGO WHITE.png')
        }
    });
    $('#navbar').addClass(" animate__animated animate__fadeInDown animate__fast");
    $('#home-content').addClass(" animate__animated animate__fadeIn animate__fast");
    

    $('#about').waypoint(function(direction){
        $('#about').addClass('animate__animated animate__fadeIn animate__fast ');
        if(direction == 'down'){
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#a').addClass('active');
        }else{
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
        }
        },{
            offset: '70%'
    });

    $('#services').waypoint(function(direction){
        $('#services').addClass('animate__animated animate__fadeIn animate__fast ');
        if(direction == 'down'){
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#b').addClass('active');
        }else{
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#a').addClass('active');
        }
        },{
            offset: '60%'
    });

    $('#portfolio').waypoint(function(direction){
        $('#portfolio').addClass('animate__animated animate__fadeIn animate__fast');
        if(direction == 'down'){
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#d').addClass('active');
        }else{
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#c').addClass('active');
        }
        },{
            offset: '60%'
    });

    $('#contacts').waypoint(function(direction){
        $('#contacts').addClass('animate__animated animate__fadeIn animate__fast');
        if(direction == 'down'){
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#e').addClass('active');
        }else{
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#d').addClass('active');
        }
        },{
            offset: '60%'
    });

    $('#test').waypoint(function(direction){
        $('#testl').addClass('animate__animated animate__fadeInLeft animate__fast');
        $('#testr').addClass('animate__animated animate__fadeInRight animate__fast');
        if(direction == 'down'){
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#c').addClass('active');
        }else{
            $('#a').removeClass('active');
            $('#b').removeClass('active');
            $('#c').removeClass('active');
            $('#d').removeClass('active');
            $('#e').removeClass('active');
            $('#b').addClass('active');
        }
    
        },{
            offset: '60%'
    });

});