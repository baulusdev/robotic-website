let full = false;
let full1 = false;
let full2 = false;
let full3 = false;

function addrobotzyklop() {
    if(full1 == false) {
        document.getElementById('robotzyklop').innerHTML = '<img class="foto" src="assets/images/_DSC8109.jpg" alt="" widht="1280" height="850"><p>h</p>';
        document.getElementById('robotzyklop1').innerHTML = '';
        full1 = true;
    }
    else {
            document.getElementById('robotzyklop').innerHTML = '';
            document.getElementById('robotzyklop1').innerHTML = '<p>The "Zyklop" Robot is our old robot</p><p class="tinted">(click to read more)</p>';
            full1 = false;
    
    }
}

function addrobotbento() {

    if(full2 == false) {
    document.getElementById('robotbento').innerHTML = '<p>yeah guys</p>';
    document.getElementById('robotbento1').innerHTML = '';
    full2 = true;
    }
    else {
        document.getElementById('robotbento').innerHTML = '';
        document.getElementById('robotbento1').innerHTML = '<p>The "Bento Box" Robot will be our future robot</p><p class="tinted">(click to read more)</p>';
        full2 = false;

    }
}

function addteam() {
   
    if(full == false) {
    document.getElementById('team').innerHTML = '<img class="foto" src="assets/images/DSC_0148.JPG" alt="" width="1280" height="850"><p>Our team consists of a total of six members. Together the team is well-rounded and is able to efficiently work together as one.By participating in the international competition, we also want to strengthen our teamwork and receive more experience.<p>';
    document.getElementById('team1').innerHTML = '';
    full = true;
    }
    else{
        document.getElementById('team').innerHTML = ''
        document.getElementById('team1').innerHTML = '<p>Our team consists of a total of six members. Together the team is well-rounded and is able to efficiently work together as one. By participating in the international competition, we also want to strengthen our teamwork and receive more experience.</p><p class="tinted">(click to read more)</p>';
        full = false;
    }
}

function addgalery() {
    if(full3 == false) {
        document.getElementById('galery').innerHTML = '<video src="https://files.pipeman.org/robot/Roboter-Film-2.mp4" controls width="550" height="300"></video>';
        document.getElementById('galery1').innerHTML = '';
        full3 = true;
        }
        else{
            document.getElementById('galery').innerHTML = ''
            document.getElementById('galery1').innerHTML = '<p>You can watch some of our content here!</p><p class="tinted">(click to read more)</p>';
            full3 = false;
        }
}