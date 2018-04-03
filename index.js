//clickBtn mouseCover
var btn1Total = 0,
	btn2Total = 0;
function clickBtn(){
	$('button').on('click',function(){
		var img = $(this).parent().find('img')
		var btn = $(this).attr('class');
		var flyImg = img.clone().css({'opacity':'0.6'});
		$('.wrapper').append(flyImg);
		flyImg.css({
			'height':img.height() + 'px',
			'width':img.width() + 'px',
			'position':'absolute',
			'top':img.offset().top + 'px',
			'left':img.offset().left + 'px',
			'border':'3px solid #fff',
			'z-index':999
		})
		flyImg.animate({
			'width':50 + 'px',
			'height':50 + 'px',
			'border-radius':100 + '100%'
		},function(){
			var t;
			if(btn == 'btn1'){
				btn1Total++;
				t = $('.btn1-add').offset().top;
			}else if(btn == 'btn2'){
				btn2Total++;
				t = $('.btn2-add').offset().top;
			}
			flyImg.animate({
				'top': t,
				'left':($(document).width() - $('.rightBox').width()) + 'px',
				'height': 0 + 'px',
				'width': 0 + 'px' 
			},1500,function(){
				flyImg.remove();
				$('.btn1-add').html(btn1Total);
				$('.btn2-add').html(btn2Total);
			})
		})

	})
}
clickBtn();
mouseCover();
function mouseCover(){
	$('.rightBox-ul li').on('mouseenter',function(){
		$(this).find('.leftBox').animate({
			'left': -90 + 'px'
		}).addClass('show');
		$(this).find('.fir-leftBox').addClass('show');
		$(this).find('.sev-leftBox').addClass('show');
	})
	$('.rightBox-ul li').on('mouseleave',function(){
		$(this).find('.leftBox').animate({
			'left': -120 + 'px'
		}).removeClass('show');
		$(this).find('.fir-leftBox').removeClass('show');
		$(this).find('.sev-leftBox').removeClass('show');
	})
}
