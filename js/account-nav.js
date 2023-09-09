$(window).on('load', function (){
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
    }
);
$('#acc-btn').click(function (){
    if(localStorage.getItem('accData')){
        localStorage.removeItem('accData');
        window.location ='./anime-details.html';
    }else {
        window.location ='./login.html';
        $('#acc-btn').attr('title','Login')
    }
})

$(window).on('load',function (){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        url: "http://localhost:8080/genres",
        success: function (data) {
            localStorage.setItem("genres",JSON.stringify(data));
        },
        error: function (err) {
            console.log(err)
        }
    });
});

$(window).on('load',function (){
    let genresList = JSON.parse(localStorage.getItem("genres"));
    let str='';
    for (const genres of genresList) {
        str += `<li><a href="./categories/${genres}">${genres}</a></li>`
    }
    $('#genresList').html(str)
});

$('#search-input').on('keypress',function(e) {
    if(e.which === 13) {
        localStorage.setItem("search",$('#search-input').val());
        window.location="./index.html"
    }
})
