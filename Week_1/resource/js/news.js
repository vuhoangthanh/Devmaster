var paginationHandler = function () {
    var $paginationContainer = $(".pagination-container"),
        $pagination = $paginationContainer.find('.pagination ul');

    // Đặt màu ban đầu cho trang 1
    $pagination.find("li[data-page='1'] a").css("background-color", "orange");
    $pagination.find("li[data-page='1']").css("color", "white");

    // Xử lý sự kiện click
    $pagination.find("li a").on('click.pageChange', function (e) {
        e.preventDefault();

        var parentLiPage = $(this).parent('li').data("page"),
            currentPage = parseInt($(".pagination-container div[data-page]:visible").data('page')),
            numPages = $paginationContainer.find("div[data-page]").length,
            nextPage = currentPage;

        // Xác định trang tiếp theo hoặc trước đó
        if (parentLiPage === '+') {
            nextPage = Math.min(currentPage + 1, numPages); // Trang tiếp theo
        } else if (parentLiPage === '-') {
            nextPage = Math.max(currentPage - 1, 1); // Trang trước nhưng không nhỏ hơn 1
        } else {
            nextPage = parseInt(parentLiPage); // Trang cụ thể
        }

        // Kiểm tra nếu trang hợp lệ
        if (nextPage >= 1 && nextPage <= numPages) {
            // Ẩn trang hiện tại và hiển thị trang tiếp theo
            $paginationContainer.find("div[data-page]:visible").hide();
            $paginationContainer.find("div[data-page=" + nextPage + "]").show();

            // Đặt lại màu cho tất cả các trang
            $pagination.find("li a").css("background-color", "");
            $pagination.find("li a").css("color", "black");

            // Thay đổi màu cho trang tiếp theo
            $pagination.find("li[data-page='" + nextPage + "'] a").css("background-color", "orange");
            $pagination.find("li[data-page='" + nextPage + "'] a").css("color", "white");
        }
    });
};

$(document).ready(paginationHandler);
