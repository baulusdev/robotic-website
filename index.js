function addpdf() {
    document.getElementById('pdf').innerHTML = '<iframe src="assets/robotik_application.pdf" frameborder="0" width="800" height="600"></iframe>';
}

function addrobot() {
    if(document.getElementById('robot').innerHTML == '') {
    document.getElementById('robot').innerHTML = '<p>nice robot omg so geil</p>';
    }
    else {
        document.getElementById('robot').innerHTML = '';
    }
}

function addteam() {
    if(document.getElementById('team').innerHTML == '') {
        document.getElementById('team').innerHTML = '<p>nice team omg so geil</p>';
        }
        else {
            document.getElementById('team').innerHTML = '';
        }
}