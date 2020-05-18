$(document).ready(function () {

    $('.review-btn').click(function () {
        Swal.fire({
            showCancelButton: true,
            title: 'Оставить отзыв',
            html: '<input id="swal-input1" class="swal2-input" placeholder = "Ваше имя.." name = "name">' +
            '<input id="swal-input1" class="swal2-input" placeholder = "Ваша компания.." name = "company">',
            input: "textarea",
            inputPlaceholder: "Оставтье ваш отызыв",
            confirmButtonColor: "#61c50f",
            cancelButtonColor: "gray",
            confirmButtonText: 'Отправить',
            cancelButtonText: 'Отменить'
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    text: 'Ваш отзыв успешно отправлен. После проверки администратором, он будет размещен на сайте!',
                    icon: 'success',
                    confirmButtonColor: "#61c50f"
                })
            }
        })
    })


    if ($(window).width() < 768) {
        $(".nav-btn").click(function () {
            $('.nav-content').slideToggle()
        });
    }


    $('.order-btn').click(function () {
        if ($(window).width() > 992) {
            Swal.fire({
                icon: 'success',
                title: 'Спасибо, заявка отправлена.',
                text: 'В ближайшее время мы свяжемся с Вами для уточнения деталей.',
                confirmButtonColor: "#61c50f",
                timer: 2000,
                width: '300px'
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Спасибо, заявка отправлена.',
                text: 'В ближайшее время мы свяжемся с Вами для уточнения деталей.',
                confirmButtonColor: "#61c50f",
                timer: 2000,
            })
        }

        setTimeout(() => {
            $('.close').trigger('click')
        }, 2000);



        function liteCarousel(obj, block, item) {
            var parent = $(obj).parents(),
                items  = parent.find(block + ' ' + item),
                first  = parent.find(block + ' ' + item + ':eq(0)');
                options = {
                    speed: 500,
                };
            
            if(first.is(':animated')) {
                return;
            }
            
            parent.find(block + ' ' + item).stop(true, true);
    
            if ($(obj).hasClass('carousel-arrow__prev')) {
            
                elem = parent.find(block + ' ' + item + ':eq(0)');
                
                elem.find('i').animate({
                    top: items.eq(1).find('i').css('top')
                }, options.speed);
                    
                items.eq(1).find('i').animate({
                    top: items.eq(0).find('i').css('top')
                }, options.speed);
            
                elem.animate({
                    marginRight: 0 - elem.width()
                }, options.speed, function() {
                    elem.css('margin-right', 0).appendTo(elem.parent());
                });
                curr = items.eq(1)[0].dataset;
            } else {
    
                elem = items.last();
                
                elem.find('i').animate({
                    top: items.eq(0).find('i').css('top')
                }, options.speed);
                    
                items.eq(0).find('i').animate({
                    top: items.eq(1).find('i').css('top')
                }, options.speed);
            
                elem.prependTo(elem.parent()).css('margin-right','-'+elem.width()+'px').animate({marginRight:0}, options.speed);
                
                curr = elem[0].dataset;
            }
            
            review = $(obj).parents('.carousel');
            $.each(curr, function( key, value ) {
                review.find('.carousel-content__' + key).text(value);
            });
            
            items.each(function(i,elem) {
                $(elem).attr('data-id',i+1);
            });
            
        }
    
        $(document).on('click', '.carousel-arrow__prev, .carousel-arrow__next', function(e) {
            liteCarousel(this,'.carousel-box','.carousel-box__item');
        });

    })
})
