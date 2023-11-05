$(document).ready(function () {
    $.get("https://icedodo.onionfist.com/info?mapId=boat_bounce", function(data) {
        console.log(data)
    }) ;
});
