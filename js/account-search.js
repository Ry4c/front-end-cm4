$(window).on('load', function (){
    if(localStorage.getItem('accData')) $('#userName').html(JSON.parse(localStorage.getItem('accData')).name)
    else $('#userName').html(Login);
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
                'Content-Type':'application/json'
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