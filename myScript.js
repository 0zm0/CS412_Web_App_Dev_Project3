function newLinkedIn(){
    window.open("https://www.linkedin.com/in/emin-osmanbegovic-9350b4186/", "_blank")
}

function newFacebook(){
    window.open("https://www.facebook.com/emin.osmanbegovic1", "_blank")
}

function newInstagram(){
    window.open("https://www.instagram.com/nesposobni_otac/", "_blank")
}

function newGithub(){
    window.open("https://github.com/0zm0", "_blank")
}

function newProject(){
    window.open("https://github.com/0zm0/CS412_Web_App_Dev_Project_2", "_blank" )
}

function newKulin(){
    window.open("https://www.facebook.com/oskulinban/", "_blank")
}

function newJam(){
    window.open("https://jamiesonschool.org/","_blank")
}

function newHazim(){
    window.open("http://mssvisoko.edu.ba/","_blank")
}

function newIUS(){
    window.open("https://www.ius.edu.ba/","_blank")
}

function newScout(){
    window.open("https://www.facebook.com/oi.visoko","_blank")
}

function newVakfi(){
    window.open("https://okcularvakfi.org/","_blank")
}

function newLions(){
    window.open("https://www.redlions.org/","_blank")
}

function newAV(){
    window.open("https://www.linkedin.com/posts/emin-osmanbegovic-9350b4186_project-presentation-activity-6672149697408454656-e2om","_blank")
}

function newProjectOne(){
    window.open("https://0zm0.github.io/CS412-Web-App-Dev/","_blank")
}

function newProjectOneRep(){
    window.open("https://github.com/0zm0/CS412-Web-App-Dev","_blank")
}

var i = 0, a = 0, s = 0, m = 0, c =0;
var myName = 'Emin Osmanbegovic';
var age = 'Age: 21';
var sex = 'Sex: Male';
var mail = 'E-mail: eminosmanbegovic@gmail.com';
var city = 'City: Visoko';

var speed = 90, speed1 = 40;

function writeName(){
    if (i<myName.length){
        document.getElementById("writeMyName").innerHTML += myName.charAt(i);
        i++;
        setTimeout(writeName, speed);
    } else {
        if(a<age.length){
            document.getElementById("writeAge").innerHTML += age.charAt(a);
            a++;
            setTimeout(writeName, speed);
        } else{
            if(s < sex.length){
                document.getElementById("writeSex").innerHTML += sex.charAt(s);
                s++;
                setTimeout(writeName, speed);
            } else {
                if(m < mail.length){
                    document.getElementById("writeMail").innerHTML += mail.charAt(m);
                    m++;
                    setTimeout(writeName, speed1);
                } else{
                    if(c < city.length){
                        document.getElementById("writeCity").innerHTML += city.charAt(c);
                        c++;
                        setTimeout(writeName, speed);
                    }
                }
            }
        }
    }
    
    
}

function currentTime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var mid = "AM";
    mid = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    
    document.getElementById("clock").innerHTML = hour + " : " +min+" : "+sec+" "+mid;
    var t = setTimeout(currentTime, 1000)
}

function updateTime(i){
    if(i<10){
        return "0"+i;
    } else {
        return i;
    }
}
currentTime();




















































