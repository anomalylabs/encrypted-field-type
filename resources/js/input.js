(function (window, document) {

    let fields = Array.from(
        document.querySelectorAll('input[data-provides="anomaly.field_type.encrypted"]')
    );

    fields.forEach(function (field) {

        field.parentElement.querySelector('[data-toggle="text"]').addEventListener('click', function (event) {

            event.target.childNodes[1].classList.toggle('fa-toggle-on');
            event.target.childNodes[1].classList.toggle('fa-toggle-off');

            if (field.getAttribute('type') == 'password') {
                field.setAttribute('type', 'text');
            } else {
                field.setAttribute('type', 'password');
            }

            field.focus();

            return false;
        });
    });
})(window, document);
