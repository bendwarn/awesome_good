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

    jQuery("span > span").each(function() {
        var tex = $(this).text()
        if(tex.substr(tex.length - 3, 3) == "說讚。") {
            $(this).text(tex.substr(0, tex.length - 2) + "妖受讚。")
        }
    });

    jQuery("div.tickerFeedMessage.fwn").each(function() {
        var tex = $(this).text()
        if(tex.substr(tex.length - 2, 2) == '讚。') {
            $(this).text(tex.substr(0, tex.length - 2) + '妖受讚！')
        }
    });
})

observer.observe(document, {
    subtree: true,
    attributes: true
})
