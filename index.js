let full = false;
let full1 = false;
let full2 = false;
let full3 = false;

function addrobotzyklop() {
    if(full1 == false) {
        document.getElementById('robotzyklop').innerHTML = '<img class="foto" src="assets/images/DSC8109.jpg" alt="" widht="700" height="450"><p class="description">This is our old Robot: Zyklop. This was our first real experience with ROS and industrial standard robots.</p>';
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
    document.getElementById('robotbento').innerHTML = '<p class="description">The Bento Robot is our newest addition to our Robot Family. It will be used in Bordeaux.</p><img class="foto" src="assets/images/bentobot.png" alt="bento_bot_chassis" width="700" height="450">';
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
    document.getElementById('team').innerHTML = '<img class="foto" src="assets/images/DSC_0148.JPG" alt="" width="700" height="450"><p class="description">Our team consists of a total of six members. Together the team is well-rounded and is able to efficiently work together as one.By participating in the international competition, we also want to strengthen our teamwork and receive more experience.</p>';
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