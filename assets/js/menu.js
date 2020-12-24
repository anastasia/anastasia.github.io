$(document).ready(() => {
    $('#menu').click(() => {
        console.log("clicked")
        $('#sidebar').toggleClass('active')
        $('#menu').toggleClass('active')
    })
    $('#exit-menu').click(() => {
        console.log("clicked exit")
        $('#sidebar').toggleClass('active')
        $('#menu').toggleClass('active')
    })
})
