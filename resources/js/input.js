$(function () {

    // Initialize the encrypted inputs.
    $('input[data-provides="anomaly.field_type.encrypted"]').each(function () {

        var wrapper = $(this);

        wrapper.find('[data-toggle="text"]').click(function (e) {

            e.preventDefault();

            if (wrapper.find('input').attr('type') == 'password') {
                wrapper.find('input').attr('type', 'text').focus();
            } else {
                wrapper.find('input').attr('type', 'password').focus();
            }

            return false;
        });
    });
});
