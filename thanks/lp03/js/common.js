// Helper Library
(function(helper, $) {
    // This is now a utility function to "Get the Document Hash"
    helper.getDocumentHash = function (urlString) {
        var hashValue = "";

        if (urlString.indexOf('#') != -1) {
            hashValue = urlString.substring(parseInt(urlString.indexOf('#')) + 1);
        }
        return hashValue;
    };
})(this.helper = this.helper || {}, jQuery);


$(document).ready(function() {
	init_link();
});

function init_link () {
	$('.btn').click(function(e) {
		var hrefVal = $(this).attr('href');
		var id = helper.getDocumentHash(hrefVal);
		if(id && $('#' + id).length > 0) {
			e.preventDefault();
			e.stopPropagation();
		    $([document.documentElement, document.body]).animate({
		        scrollTop: $("#" + id).offset().top
		    }, 1000);
	    }
	});
}
