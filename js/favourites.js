$(window).ready(function() {
    // Kiểm tra xem đã đăng nhập hay chưa
    if(localStorage.getItem('accData')){
        // Đã đăng nhập, hiển thị dữ liệu yêu thích
        var accData = JSON.parse(localStorage.getItem('accData'));
        if (accData.favorite && accData.favorite.length > 0) {
            // Hiển thị danh sách yêu thích
            accData.favorite.forEach(function() {
                // Hiển thị dữ liệu yêu thích vào trang
                $('#favorites-list').append('<div>' + accData.favourite + '</div>');
            });
        } else {
            // Không có yêu thích nào
            $('#favorites-list').html("Chưa có chuyện yêu thích nào được thêm!");
        }
    } else {
        $('#favorites-list').html("Đăng nhập để xem Favourites");
        $('#login-button').click(function (){
            window.location = "./login.html";
        });
    }
});
