const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden'
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards'
        }
    );

    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards'
        }
    );

    loadingText.animate(
        {
            opacity: 1,
            offset: .8 //80%
        },
        {
            opacity: 0,
            offset: 1 //100%
        },
        {
            duration: 2000, //애니메이션 지속 시간
            easing: 'ease', //애니메이션 속도 곡선
            fill: 'forwards' //애니메이션 끝난 후 상태 유지
        }
    );
});
