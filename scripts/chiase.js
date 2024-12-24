// JavaScript Document
function submitFeedback() {
    var feedback = document.getElementById('feedback').value;

	if (feedback === '') {
        alert('Nội dung góp ý không được bỏ trống');
    } else {
        var email = 'chonmonthi@gmail.com';
        var subject = 'Feedback from: ';
        var body = '\nNội dung góp ý: ' + feedback;
        window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }
}

function resetForm() {
    document.getElementById('myform').reset();
}