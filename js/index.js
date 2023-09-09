if(localStorage.getItem('search'))
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            "Authorization":"Bearer " + JSON.parse(localStorage.getItem('accData')).token
        },
        url: "http://localhost:8080/search/title?n="+localStorage.getItem('search'),
        success: function (data) {
            if(data.length) showList(data)
            else $('#trending').html(`<h5>Not found</h5></br><a href="./index.html">Back to home page</a>`);
        },
        error: function (err) {
            console.log(err)
        }
    });