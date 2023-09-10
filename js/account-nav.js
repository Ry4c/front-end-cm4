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
$(window).on('load',function (){
    if(!localStorage.getItem('accData')){$('#add-str').hide();
    } else if(JSON.parse(localStorage.getItem('accData')).roles[0].id === 1) $('#add-str').show()
})

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
    if (!localStorage.getItem('genres')){
        $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            url: "http://localhost:8080/search/genres",
            success: function (data) {
                localStorage.setItem("genres",JSON.stringify(data));
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
    showGenres();
});

function showGenres(){
    let genresList = JSON.parse(localStorage.getItem("genres"));
    let str='';
    for (const genres of genresList) {
        str += `<li><a href="./categories.html/?genre=${genres.name}">${genres.name}</a></li>`
    }
    $('#genresList').html(str)
}

$('#search-input').on('keypress',function(e) {
    if(e.which === 13) {
        localStorage.setItem("search",$('#search-input').val());
        window.location="./index.html"
    }
})

$('#addStory').click(function (){
    let title = $("#title-add").val();
    let img = $("#img-add").val();
    let description = $("#description-add").val();
    let status = $("#status-add").val();
    let vote = $("#votes-add").val();
    let rating = $("#rating-add").val();
    let story = {title,img,description,status,vote,rating}
    $.ajax({
        type: "Post",
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            "Authorization":"Bearer " + JSON.parse(localStorage.getItem('accData')).token
        },
        url: "http://localhost:8080/stories/create",
        data: JSON.stringify(story),
        success: function (data) {
            alert("Succeed")
        },
        error: function (err) {
            console.log(err)
        }
    });
})