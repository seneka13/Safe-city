$(document).ready(function () {


    $('.scroll').on('click', function (e) {
        $('html,body').stop().animate({
            scrollTop: $('#about_us').offset().top
        }, 1000);
        e.preventDefault();
    });

    $('.send-review-btn').click(function () {
        $('.reviewForm').each(function (i, item) {
            if (!item.value) {
                Swal.fire({
                    icon: 'error',
                    title: 'Напишите отзыв',
                    confirmButtonColor: "#01A7C2",
                    timer: 2000,
                    width: '300px'
                })
            } else {
                Swal.fire({
                    text: 'Ваш отзыв успешно отправлен. После проверки администратором, он будет размещен на сайте!',
                    icon: 'success',
                    confirmButtonColor: "#01A7C2",
                    timer: 2000,
                })
            }
            setTimeout(() => {
                $('.close').trigger('click')
            }, 2000);
        })
    })


    $(".nav-btn").click(function () {
        $('.nav-content').slideToggle()
    });


    $('.order-btn').click(function () {
        $('#exampleFormControlInput1').each(function (i, item) {
            if (!item.value) {
                Swal.fire({
                    icon: 'error',
                    title: 'Заполните форму',
                    confirmButtonColor: "#01A7C2",
                    timer: 2000,
                    width: '300px'
                })
            } else {
                if ($(window).width() > 992) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Спасибо, заявка отправлена.',
                        text: 'В ближайшее время мы свяжемся с Вами для уточнения деталей.',
                        confirmButtonColor: "#01A7C2",
                        timer: 2000,
                        width: '300px'
                    })
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Спасибо, заявка отправлена.',
                        text: 'В ближайшее время мы свяжемся с Вами для уточнения деталей.',
                        confirmButtonColor: "#01A7C2",
                        timer: 2000,
                    })
                }
                setTimeout(() => {
                    $('.close').trigger('click')
                }, 2000);
            }
        })

    })



    $('.contact-btn').click(function () {
        Swal.fire({
            html: '<p>Адресс: город Бишкек, ул. Горького, 142</p>' +
                '<p>Email: safe.kg@mail.ru</p>' +
                '<p>Skype: anna.mdn</p>' +
                '<p>тел: +996(312) 90-88-07</p>' +
                '<p>факс: +996(312) 90-11-20</p>' +
                '<p>моб: +996(707) 12-00-40</p>' +
                '<p>моб: +996(555) 92-78-80</p>',
            confirmButtonColor: "#01a7c2red"
        })
    })
})