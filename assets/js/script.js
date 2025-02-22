$(document).ready(() =>{

    $(window).scroll(() =>{
        if($(window).scrollTop() > 120){
            $('#navbar').addClass("navbar-light");
            $('#navbar').removeClass("navbar-dark");
            $("#navbar-img").attr('src','assets/images/VOROFY LOGO BLUE.png');
        }else{
            $('#navbar').removeClass("navbar-light");
            $('#navbar').addClass("navbar-dark");
            $("#navbar-img").attr('src','assets/images/VOROFY LOGO WHITE.png');
            $('#a').addClass('active');
            $('#b').removeClass("active");
        }
    });

    $('#navbar').addClass(" animate__animated animate__fadeInDown animate__fast");
    $('#home-content').addClass(" animate__animated animate__fadeIn animate__fast");
    
    $('#service-box3').mouseenter(() => {
        $('#service-box3').addClass("box-after");
        $('#img3').addClass("img-after");
       
        setTimeout(() => {
            
            $('#head3').addClass("d-none");
        },10);
        setTimeout(() => {
            
            $('#para3').removeClass("d-none");
        },10);

    }).mouseleave(() => {
        $('#service-box3').removeClass("box-after");
        $('#img3').removeClass("img-after");
        $('#para3').addClass("d-none");
        $('#head3').removeClass("d-none");
        
        

    });

    $('#service-box1').mouseenter(() => {
        $('#service-box1').addClass("box-after");
        $('#img1').addClass("img-after");
       
        setTimeout(() => {
            
            $('#head1').addClass("d-none");
        },10);
        setTimeout(() => {
            
            $('#para1').removeClass("d-none");
        },10);

    }).mouseleave(() => {
        $('#service-box1').removeClass("box-after");
        $('#img1').removeClass("img-after");
        $('#para1').addClass("d-none");
        $('#head1').removeClass("d-none");
        
        

    });

    $('#service-box2').mouseenter(() => {
        $('#service-box2').addClass("box-after");
        $('#img2').addClass("img-after");
       
        setTimeout(() => {
            
            $('#head2').addClass("d-none");
        },10);
        setTimeout(() => {
            
            $('#para2').removeClass("d-none");
        },10);

    }).mouseleave(() => {
        $('#service-box2').removeClass("box-after");
        $('#img2').removeClass("img-after");
        $('#para2').addClass("d-none");
        $('#head2').removeClass("d-none");
        
        

    });





    $('#about').waypoint(function(direction){
        $('#about-contents').addClass('animate__animated animate__fadeIn animate-fast  ');
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
            offset: '70%'
    });

    $('#services').waypoint(function(direction){
        $('#s1').addClass('animate__animated animate__fadeIn animate-fast ');
        $('#s2').addClass('animate__animated animate__fadeIn animate-fast ');
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

    $('#work').waypoint(function(direction){
        $('#work-contents').addClass('animate__animated animate__fadeInLeft animate-fast');
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

    $('#contact').waypoint(function(direction){
        $('#c1').addClass('animate__animated animate__fadeIn animate__fast');
        $('#c2').addClass('animate__animated animate__fadeIn animate__fast');
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

});