var paginationHandler = function () {
    // store pagination container so we only select it once
    var $paginationContainer = $(".pagination-container"),
        $pagination = $paginationContainer.find('.pagination ul');

    $pagination.find("li[data-page='1'] a").css("background-color", "orange");
    $pagination.find("li[data-page='1'] ").css("color", "white");
    // click event
    $pagination.find("li a").on('click.pageChange', function (e) {
        e.preventDefault();
        // get parent li's data-page attribute and current page
        var parentLiPage = $(this).parent('li').data("page"),
            currentPage = parseInt($(".pagination-container div[data-page]:visible").data('page')),
            numPages = $paginationContainer.find("div[data-page]").length;



        // delete, add background-color
        $pagination.find("li a").css("background-color", "");
        $pagination.find("li a").css("color", "black");
        $(this).css("background-color", "orange");
        $(this).css("color", "white");

        // make sure they aren't clicking the current page
        if (parseInt(parentLiPage) !== parseInt(currentPage)) {
            // hide the current page
            $paginationContainer.find("div[data-page]:visible").hide();
            if (parentLiPage === '+') {
                // next page
                $paginationContainer.find("div[data-page=" + (currentPage + 1 > numPages ? numPages : currentPage + 1) + "]").show();
            } else if (parentLiPage === '-') {
                // previous page
                $paginationContainer.find("div[data-page=" + (currentPage - 1 < 1 ? 1 : currentPage - 1) + "]").show();
            } else {
                // specific page
                $paginationContainer.find("div[data-page=" + parseInt(parentLiPage) + "]").show();
            }
        }
    });
};
$(document).ready(paginationHandler);