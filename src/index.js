
$(document).ready(function(){
    if($(window).width() < 768) {
        $( ".nav-btn" ).click(function(){
        $('.nav-content').slideToggle()
    });
    }
    

    $('.order-btn').click(function(){
        if($(window).width() > 992) {
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


