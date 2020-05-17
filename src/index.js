$(document).ready(function () {

    $('.sweet').click(function () {
        Swal.fire({
            showCancelButton: true,
            title: 'Оставить отзыв',
            html: '<input id="swal-input1" class="swal2-input" placeholder = "Выше имя..">',
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

    })
})