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


    $(".nav-btn").click(function () {
        $('.nav-content').slideToggle()
    });


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

    })

    $('.contact-btn').click(function(){
        Swal.fire({
            html: '<p>Адресс: город Бишкек, ул. Горького, 142</p>'+
            '<p>Email: safe.kg@mail.ru</p>'+
            '<p>тел: +996(312) 90-88-07</p>'+
            '<p>факс: +996(312) 90-11-20</p>'+
            '<p>моб: +996(707) 12-00-40</p>'+
            '<p>моб: +996(555) 92-78-80</p>',
            confirmButtonColor: "#61c50f"
        })
    })
})