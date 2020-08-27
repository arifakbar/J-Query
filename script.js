// Hide on click
//$(document).ready(function(){
//     $('#hide').click(function(){
//         $('#hello').hide();
//     })
// })

//Remove Underline
// $(document).ready(function(){
//     $('#remove').click(function(){
//         $('#underline').css('textDecoration','none')
//     })
// })

//Multiple CSS property
// $(document).ready(function(){
//     $('#remove').click(function(){
//         $('#underline').css({
//             'textDecoration':'none',
//             'color':'red',
//             'backgroundColor':'yellow'
//         })
//     })
// })

// star('*') indicates all elements
// $(document).ready(function(){
//     $('#btn').click(function(){
//         $('*').css('color','blue')
//     })
// })

// this(this) represents current element
// $(document).ready(function(){
//     $('#btn').click(function(){
//         $(this).css('color','blue')
//     })
// })

//type attribute and slow hide
// $(document).ready(function(){
//     $('#btn').click(function(){
//         $("[type]").hide('slow')
//     })
// })

//Doubleclick
// $(document).ready(function(){
//     $('#btn').dblclick(function(){
//         $("[type]").hide('slow')
//     })
// })

//Show/hide
// $(document).ready(function(){
//     $('#btn').click(function(){
//         $("[type]").hide('slow')
//     })
//     $('#btn').dblclick(function(){
//         $("[type]").show('slow')
//     })
// })

//keyboard event - keypress,keyup and keydown
// $(document).ready(function(){
    // $('#txt').keypress(function(){
    //     $(this).css('backgroundColor','blue')
    // })
    // $('#txt').keydown(function(){
    //     $(this).css('backgroundColor','red')
    // })
//     $('#txt').keyup(function(){
//         $(this).css('backgroundColor','green')
//     })
// })

//mouse event - mouseenter,mouseleave,mousedown and mouseup
// $(document).ready(function(){
//     // $('#mouseEvents').mouseenter(function(){
//     //     $(this).css('color','red')
//     // })
//     // $('#mouseEvents').mouseleave(function(){
//     //     $(this).css('color','red')
//     // })
//     // $('#mouseEvents').mouseup(function(){
//     //     $(this).css('color','red')
//     // })
//     $('#mouseEvents').mousedown(function(){
//         $(this).css('color','red')
//     })
// })

//focus() and blur() with fadeOut()
// $(document).ready(function(){
//     $('span').css('display','none')
//     $('#text').focus(function(){
//         $('#focus').css('display','inline').fadeOut(2000)
//     })
//     $('#text').blur(function(){
//         $('#blur').css('display','inline').fadeOut(2000)
//     })
// })

//toggle
// $(document).ready(function(){
//     $('#toggleBtn').click(function(){
//         $('#toggleH').toggle('slow')
//     })
// })

//SlideToggle 
//single->slideUp() and slideDown()
// $(document).ready(function(){
//     $('#slideBtn').click(function(){
//         $('#slideDiv').slideToggle('slow')
//     })
// })

//fadeOut() or fadeIn()
//fadetoggle()
// $(document).ready(function(){
//     $('#slideBtn').click(function(){
//         // $('#slideDiv').fadeToggle('slow')
//         $('#slideDiv').fadeToggle(2000)
//     })
// })

//jQuery-datepicker()
// $(document).ready(function(){
//     $('#datepicker').datepicker({
//         dateFormat:'mm-dd-yy',
//         changeMonth:true,
//         changeYear:true,
//         maxDate:'3M',
//         minDate:'-3M'
//     })
// })

//animation -- set position relative
// $(document).ready(function(){
//     $('#animateBtn').click(function(){
//         $('#animateDiv').animate({
//             left:500
//         })
//         $('#animateDiv').animate({
//             top:500
//         })
//         $('#animateDiv').animate({
//             left:50,
//             top:200
//         })
//         $('#animateDiv').animate({
//             top:0,
//             left:0
//         })
//     })
// })

//Alert - sweetalerts
// $(document).ready(function(){
//     $('#alertBtn').click(function(){
//         swal({
//             title:'Sorry',
//             text:'Wrong Answer',
//             icon:'warning',
//             button:"Try Again!"
//         })
//     })
// })


//popUp --- setTimeoUt(function(){},time)
// $(document).ready(function(){
//     setTimeout(function(){
//         $('#popup').css('display','flex')
//     },2000)
// })

//value in input and heigth witdh
// $(document).ready(function(){
//     $('#measureBtn').click(function(){
//         let x = ''
//         let y = ''

//         x += 'Height is ' + $('#measure').height()  + 'px'
//         y += 'Width is ' + $('#measure').width() + 'px'

//         $('#height1').val(x)
//         $('#width1').val(y)
//     })
// })

//Form Vaidation
$(document),ready(function(){
    $('#submitBtn').click(function(){
        alert('nope')
    })
})