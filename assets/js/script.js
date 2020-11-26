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
    // $('#service-box').mouseleave(() => {
    //     $('#service-box').removeClass("box-after");
    //     $('#img').removeClass("img-after");
    //     $('#head').removeClass("d-none");
    //     $('#para').addClass("d-none");

    // });





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