function getListStory() {
    $.ajax({
        type  : "GET",
        "headers": {
            "Accept" : "application/Json"
        },
        "url": "http://localhost:8080/stories",
        success  : function (response) {
            console.log(response);
            showList(response);
        },
        error : function (err) {
            console.log(err);
        }
    })
}



if(localStorage.getItem('search') != null) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',

        },
        url: "http://localhost:8080/search/title?n="+ localStorage.getItem('search'),
        success: function (data) {
            console.log(data);
            /*if(data.length)*/
            showList(data);
            localStorage.removeItem("search");
            /* else $('#trending').html(`<h5>Not found</h5></br><a href="./index.html">Back to home page</a>`);*/
        },
        error: function (err) {
            console.log(err)
        }
    });
}else {
    getListStory();
}




function showList(arr){

    let str= "";
    for (const e of arr) {
        str += `   <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" style="background-image: url(${e.img});">

                                    <div class="ep">${e.rating}<i class="fa fa-star"></i></div>

                                    <div class="comment"><i class="fa fa-comments"></i></div>
                                </div>
                                <div class="product__item__text">

                                    <h5><a href="#">${e.title}</a></h5>
                                </div>
                            </div>
                        </div>`

    }
    $('#trending').html(str);
}
