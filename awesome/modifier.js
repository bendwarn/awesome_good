MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function(mutations, observer) {
    jQuery(".UFILikeLink").each(function() {
        var tex = $(this).text()
        if(tex == "讚") {
            $(this).text("妖受讚")
            var t = $(this).attr("title")
            $(this).attr("title", t.substr(0, t.length - 1) + "妖受讚")
        }
        else if(tex == "收回讚") {
            $(this).text("收回妖受讚")
            var t = $(this).attr("title")
            $(this).attr("title", t.substr(0, t.length - 1) + "妖受讚")
        }
    });

    var complex_case = function() {
        var tex = $(this).text()
        if(tex.substr(tex.length - 2, 2) == '讚。') {
            $(this).text(tex.substr(0, tex.length - 2) + '妖受讚')
        }
    }

    jQuery("span > span").each(complex_case);

    jQuery("div.tickerFeedMessage.fwn").each(complex_case);
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
