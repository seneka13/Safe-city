!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t){$(document).ready((function(){$(".scroll").on("click",(function(e){$("html,body").stop().animate({scrollTop:$("#about_us").offset().top},1e3),e.preventDefault()})),$(".send-review-btn").click((function(){$(".reviewForm").each((function(e,t){t.value?Swal.fire({text:"Ваш отзыв успешно отправлен. После проверки администратором, он будет размещен на сайте!",icon:"success",confirmButtonColor:"#01A7C2",timer:2e3}):Swal.fire({icon:"error",title:"Напишите отзыв",confirmButtonColor:"#01A7C2",timer:2e3,width:"300px"}),setTimeout(()=>{$(".close").trigger("click")},2e3)}))})),$(".nav-btn").click((function(){$(".nav-content").slideToggle()})),$(".order-btn").click((function(){$("#exampleFormControlInput1").each((function(e,t){t.value?($(window).width()>992?Swal.fire({icon:"success",title:"Спасибо, заявка отправлена.",text:"В ближайшее время мы свяжемся с Вами для уточнения деталей.",confirmButtonColor:"#01A7C2",timer:2e3,width:"300px"}):Swal.fire({icon:"success",title:"Спасибо, заявка отправлена.",text:"В ближайшее время мы свяжемся с Вами для уточнения деталей.",confirmButtonColor:"#01A7C2",timer:2e3}),setTimeout(()=>{$(".close").trigger("click")},2e3)):Swal.fire({icon:"error",title:"Заполните форму",confirmButtonColor:"#01A7C2",timer:2e3,width:"300px"})}))})),$(".contact-btn").click((function(){Swal.fire({html:"<p>Адресс: город Бишкек, ул. Горького, 142</p><p>Email: safe.kg@mail.ru</p><p>Skype: anna.mdn</p><p>тел: +996(312) 90-88-07</p><p>факс: +996(312) 90-11-20</p><p>моб: +996(707) 12-00-40</p><p>моб: +996(555) 92-78-80</p>",confirmButtonColor:"#01a7c2red"})}))}))}]);