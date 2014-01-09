MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        if($(this).text() == "Like" || $(this).text() == "讚") {
            $(this).text("妖受讚")
            var s = $(this).attr("title")
            $(this).attr("title", s.substr(0, s.length - 1) + "妖受讚")
        }
        else if($(this).text() == "Unlike" || $(this).text() == "收回讚") {
            $(this).text("收回妖受讚")
            var s = $(this).attr("title")
            $(this).attr("title", s.substr(0, s.length - 1) + "妖受讚")
        }
    });

    jQuery("span").each(function() {
        if($(this).text() == "Like" || $(this).text() == "都說讚。") {
            $(this).text("都說妖受讚。")
        }
    });
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
