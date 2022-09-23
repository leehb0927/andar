$(function(){
    //header .top-banner 슬라이드
    var swiper = new Swiper(".header .swiper", {
        effect: "fade",//슬라이드 넘어갈 때 fade in/ fade out 효과를 넣어줌
        loop: true,//슬라이드 무한 반복
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },//슬라이드 자동재생
    });









    //스크롤 하면 gnb 모양 변경됨
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('.gnb').addClass('active');

            $('.gnb-bottom').css('display','block');
        }else{
            $('.gnb').removeClass('active');

            $('.gnb-bottom').css('display','none');
        }
    });

    $(window).trigger('scroll')
    //스크롤이 된 상태에서 새로고침을 해도 조건비교 가능









    //바뀐 gnb 의 .menu-open 버튼을 누르면 하위메뉴가 나옴
    $('.gnb-bottom .btn-menu-all').click(function(e){
        e.preventDefault()
        //맨처음 버튼을 클릭했을 때 _하위 메뉴가 열렸을 떄
        $(this).addClass('active');
        //버튼을 클릭했을 때 .active를 넣어줌 _화살표 방향이 180도 돌아감
        $(this).siblings('ul').css('display','none');
        //버튼을 클릭했을 때 .menu-list ul을 없애주고
        $('.gnb-bottom .text').css('display','inline-block');
        //전체메뉴로 이름을 바꿔줌 _ ul리스트들이 사라지고 전체메뉴로 바뀜





        if($('.menu-list-all').css('display') == 'block'){
            //버튼을 누르면 나오는 하위 메뉴에 대한 효과


            //버튼 두 번 클릭 _ 하위 메뉴가 닫혔을 때
            $('.menu-list-all').slideUp();
            //하위메뉴 slideUp

            $('.gnb-bottom .btn-menu-all').removeClass('active');
            //버튼 모양 .active 빼줌 _화살표 방향 원상복귀

            $('.gnb-bottom .text').css('display','none');
            //전체메뉴로 바꿔줬던 이름 사라짐
            $(this).siblings('ul').css('display','flex');
            // ul 리스트들이 다시 나옴
        }else{
            //한 번 클릭 했을 때 _하위 메뉴가 열림
            $('.menu-list-all').slideDown()
            //하위메뉴 slideDown
        }
    });









    //.category 버튼을 클릭하면 side-menu가 나옴
    $('.gnb .btn-menu').click(function(e){
        e.preventDefault();

        $('header .side-menu').addClass('active');

        $('body').addClass('overflow-h');
        //메뉴가 나오면 body의 스크롤은 사라짐
    });
    //.side-menu-close 버튼을 클릭하면 side-menu가 들어감
    $('.side-menu-close').click(function(e){
        e.preventDefault();

        $('header .side-menu').removeClass('active');

        $('body').removeClass('overflow-h')
    });









    //.side-menu .category 메뉴들의 하위메뉴
    $('.cate-list .cate-item .cate-name').click(function(e){
        e.preventDefault();

        if($(this).siblings('.category-sub').css('display') == 'block'){
            $(this).siblings('.category-sub').slideUp();
            //클릭한 .category-list ul li a 하위 메뉴인 .category-sub올라감

            $(this).removeClass('active');
        }else {
            $(this).siblings('.category-sub').slideDown();
            //클릭한 .category-list ul li a 하위 메뉴인 .category-sub내려옴

            $(this).addClass('active');
        }
    });










    //.visual-slide 메인 비주얼 슬라이드
    var swiper = new Swiper(".sc-visual .swiper", {
        effect: "fade",//슬라이드 넘어갈 때 fade in/ fade out 효과를 넣어줌
        loop: true,//슬라이드 무한 반복
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },//슬라이드 자동재생
    });










    //.group-flex2*********레깅스, 브라탑, 세트 공통 슬라이드
    var swiper = new Swiper(".sc-category .swiper", {
        slidesPerView: 2.2,
        spaceBetween: 10,
    });
})