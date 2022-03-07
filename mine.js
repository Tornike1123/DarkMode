$('#dark').change(function (e) {
    if($(this).prop('checked')){
   
        localStorage.setItem("mode", "dark"); //set შენახვა
        $('body').css('background-color', 'black');
        $('.mdd').html("<span>WHITE MODE</span>")
        $('.mdd').css('color', 'white')
    }else{
       localStorage.setItem("mode", "light"); //set შენახვა
       $('body').css('background-color', 'white');
       $('.mdd').html("<span>DARK MODE</span>")
       $('.mdd').css('color', 'black')
    }
   });
   

let mode = localStorage.getItem('mode');

if (mode == 'dark') {
  $('body').css('background-color', 'black');
  $('.mdd').html("<span>WHITE MODE</span>")
  $('.mdd').css('color', 'white')
}else{
    $('body').css('background-color', 'white');
    $('.mdd').html("<span>DARK MODE</span>")
       $('.mdd').css('color', 'black')
}

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////




