$(document).ready(() => {
    $('#menu').click(() => {
        $('#sidebar').toggleClass('active')
        $('#menu').toggleClass('active')
    })
    $('#exit-menu').click(() => {
        $('#sidebar').toggleClass('active')
        $('#menu').toggleClass('active')
    })
})
