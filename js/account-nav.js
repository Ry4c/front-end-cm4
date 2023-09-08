$(window).on('load', function (){
    console.log(JSON.parse(localStorage.getItem('accData')));
        if(localStorage.getItem('accData')){
            $('#userName').html(JSON.parse(localStorage.getItem('accData')).name);
            $('#acc-btn').attr("title",'Logout').click(function (){
                localStorage.removeItem('accData');
                window.location="./index.html"
            })
        } else {
            $('#userName').html("Login");
            $('#acc-btn').attr("title",'Login').click(function (){
                window.location="./login.html";
            });

        }
    },
);
$(window).on('load',function (){
    let genresList = JSON.parse(localStorage.getItem("genres"));
    let str='';
    for (const genres of genresList) {
        str += `<li><a href="./categories/${genres}">${genres}</a></li>`
    }
    $('#genresList').html(str)
});

$('#acc-btn').click(function (){
    if(localStorage.getItem('accData')){
        localStorage.removeItem('accData');
        window.location ='./anime-details.html';
    }else {
        window.location ='./login.html';
        $('#acc-btn').attr('title','Login')
    }
})
$('#search-input').on('keypress',function(e) {
    if(e.which === 13) {
        $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
                "Authorization":"Bearer " + JSON.parse(localStorage.getItem('accData')).token
            },
            url: "http://localhost:8080/students"+$('#search-input').val(),
            success: function (data) {
                //     show search result
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
})
