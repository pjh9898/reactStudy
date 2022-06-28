$(window).ready(() => {
    autoHeight();
});

function autoHeight(){
    let mainTable = document.querySelector('.main-table');
    const mainTableArea = document.querySelector('.main-table-area');
    if(mainTable && mainTable.classList.contains('left-table')){
        mainTable = document.querySelector('#rightTable');
    }
    if(mainTableArea){
        const tableHeight = parseInt(window.getComputedStyle(mainTable).height);
        mainTableArea.style.height = tableHeight + 'px';
    }
}

function autoHeightModal(){
    const mainTable = document.querySelector('#main-table-modal');
    const mainTableArea = document.querySelector('.main-table-area-modal');

    const tableHeight = parseInt(window.getComputedStyle(mainTable).height);
    mainTableArea.style.height = tableHeight + 'px';
}

/************** 사이드 내비게이션 관련 이벤트 **************/
function openUser() {
    $('.nav-user .submenu').slideToggle();
    $('.nav-content .submenu').slideUp();
    $('.nav-board .submenu').slideUp();

    $('.nav-user .nav-arrow').toggleClass('rotate');
    $('.nav-content .nav-arrow').removeClass('rotate');
    $('.nav-board .nav-arrow').removeClass('rotate');
}

function openContent() {
    $('.nav-user .submenu').slideUp();
    $('.nav-content .submenu').slideToggle();
    $('.nav-board .submenu').slideUp();

    $('.nav-user .nav-arrow').removeClass('rotate');
    $('.nav-content .nav-arrow').toggleClass('rotate');
    $('.nav-board .nav-arrow').removeClass('rotate');
}

function openBoard() {
    $('.nav-user .submenu').slideUp();
    $('.nav-content .submenu').slideUp();
    $('.nav-board .submenu').slideToggle();

    $('.nav-user .nav-arrow').removeClass('rotate');
    $('.nav-content .nav-arrow').removeClass('rotate');
    $('.nav-board .nav-arrow').toggleClass('rotate');
}

/************** 네비게이션 토글 공통 **************/
function toggleNav(event) {
    event.target.classList.toggle('rotate');
    $('.main-nav').toggleClass('nav-collapsed');
    $('div[class~="wrapper"]').toggleClass('collapsed');

    $('.img-ppyy').toggleClass('fadeout');
    $('.nav-text').toggleClass('fadeout');
    $('.nav-icon').toggleClass('fadeout');
    $('.nav-icon-hidden').toggleClass('fadein');
    $('.nav-arrow').toggleClass('fadeout');

    $('.nav-user .submenu').slideUp();
    $('.nav-content .submenu').slideUp();
    $('.nav-board .submenu').slideUp();

    $('.nav-user .nav-arrow').removeClass('rotate');
    $('.nav-content .nav-arrow').removeClass('rotate');
    $('.nav-board .nav-arrow').removeClass('rotate');

    if ($('.main-nav').hasClass('nav-collapsed')) {
        $('.nav-potal').on('click', () => {location.href = '/potal/all'});
        $('.nav-sns').on('click', () => {location.href = '/sns/all'});
        $('.nav-community').on('click', () => {location.href = '/community/all'});
        $('.nav-report').on('click', () => {location.href = '/report/monthly'});
        $('.nav-manage').on('click', () => {location.href = '/manage/keyword'});
    } else {
        $('.nav-potal').off('click');
        $('.nav-sns').off('click');
        $('.nav-community').off('click');
        $('.nav-report').off('click');
        $('.nav-manage').off('click');
    }
}

$('.toggle-icon').click(event => toggleNav(event));