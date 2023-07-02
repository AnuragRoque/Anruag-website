(function(e) {
    "use strict";
    var s = e(".contact-form"),
        a = e(".messenger-box-contact__msg");

    function n(e) {
        a.fadeIn().removeClass("alert-danger").addClass("alert-success");
        a.text(e);
        setTimeout(function() {
            a.fadeOut();
        }, 3000);
        s.find('input:not([type="submit"]), textarea').val("");
    }

    function u(e) {
        a.fadeIn().removeClass("alert-success").addClass("alert-success");
        a.text(e.responseText);
        setTimeout(function() {
            a.fadeOut();
        }, 3000);
    }

    s.submit(function(a) {
        a.preventDefault();

        const l = document.getElementById("required-msg"),
            o = document.getElementById("full-name"),
            c = document.getElementById("email"),
            d = document.getElementById("subject");

        if (!o.value || !c.value || !d.value) {
            l.classList.add("show");
            o.classList.add("invalid");
            console.log("false");
            return false;
        }

        l.classList.remove("show");
        var formData = new FormData(this);
        e.ajax({
            type: "POST",
            url: "mailto:anuragsingh2445@gmail.com",
            data: formData,
            processData: false,
            contentType: false,
        })
        .done(n)
        .fail(u);
    });
})(jQuery);
