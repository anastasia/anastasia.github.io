let colors = ['pink', 'greenish', 'blue', 'yellowish', 'purplish']
let color;
$(document).ready(() => {
    $.each($('.recording'), (key, rec) => {
        color = colors[Math.floor(Math.random() * Math.floor(colors.length))]
        $(rec).addClass(color);
        $(rec).on('click', () => {
            let audio = $(rec).children()[0];
            if ($(rec).hasClass('active')) {
                audio.pause();
                $(rec).removeClass('active');
            } else {
                $(rec).addClass('active');
                $(audio)[0].volume = 0;
                audio.play();
                $(audio).animate({volume: 1}, 3000)
            }
        });
    })
})

