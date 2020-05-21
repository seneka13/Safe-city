// const inputForm = document.querySelectorAll('#exampleFormControlInput1');
//     inputForm.some(function(item){
//         console.log(item) 
//     })



$(document).ready(function () {
    
    $('.review-btn').click(function () {
        Swal.fire({
            showCancelButton: true,
            title: 'Оставить отзыв',
            html: '<input id="swal-input1" class="swal2-input" placeholder = "Ваше имя.." name = "name">' +
                '<input id="swal-input1" class="swal2-input" placeholder = "Ваша компания.." name = "company">',
            input: "textarea",
            inputPlaceholder: "Оставьте ваш отзыв",
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
        $('#exampleFormControlInput1').each(function(i, item) {
            if (!item.value) {
                Swal.fire({
                    icon: 'error',
                    title: 'Заполните форму',
                    confirmButtonColor: "#61c50f",
                    timer: 2000,
                    width: '300px'
                })
            } else {
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
            }
        })

    })



    $('.contact-btn').click(function(){
        Swal.fire({
            html: '<p>Адрес: город Бишкек, ул. Горького, 142</p>'+
            '<p>Email: safe.kg@mail.ru</p>'+
            '<p>Skype: anna.mdn</p>'+
            '<p>тел: +996(312) 90-88-07</p>'+
            '<p>факс: +996(312) 90-11-20</p>'+
            '<p>моб: +996(707) 12-00-40</p>'+
            '<p>моб: +996(555) 92-78-80</p>',
            confirmButtonColor: "#61c50f"
        })
    })
})