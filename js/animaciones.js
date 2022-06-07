$(document).ready(function () {
    $(".pintura, .pinturaImg, .pintura1, .pinturaImg1,.pintura2, .pinturaImg2").hide();
});

$(function() {
    document.getElementById("primero").addEventListener("mouseleave", () => {
        $(".pintura, .pinturaImg").slideUp();
    });

    document.getElementById("primero").addEventListener("click", () => {
        $(".pintura, .pinturaImg").slideDown();
    });

    document.getElementById("primero").addEventListener("mouseenter", () => {
        $("#primero").css({'cursor':'pointer'})
    });
});

$(function() {
    document.getElementById("segundo").addEventListener("mouseleave", () => {
        $(".pintura1, .pinturaImg1").slideUp();
    });

    document.getElementById("segundo").addEventListener("click", () => {
        $(".pintura1, .pinturaImg1").slideDown();
    });

    document.getElementById("segundo").addEventListener("mouseenter", () => {
        $("#segundo").css({'cursor':'pointer'})
    });
});

$(function () {
    document.getElementById("tercero").addEventListener("mouseleave", () => {
        $(".pintura2, .pinturaImg2").slideUp();
    });

    document.getElementById("tercero").addEventListener("click", () => {
        $(".pintura2, .pinturaImg2").slideDown();
    });

    document.getElementById("tercero").addEventListener("mouseenter", () => {
        $("#tercero").css({'cursor':'pointer'})
    });
});