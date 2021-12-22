function style1() {
        document.getElementById('superStyle').className = "style1";
        document.getElementById('hr').style.color = "#2e292c";
        document.getElementById('h2').style.color = "#880000";
    }

function style2() {
        document.getElementById('superStyle').className = "style2";
        document.getElementById('hr').style.color = "darkred";
        document.getElementById('h2').style.color = "maroon";
    }

function style3() {
        document.getElementById('superStyle').className = "style3";  
        document.getElementById('hr').style.color = "#248f8f";        
        document.getElementById('h2').style.color = "#248f8f";                    
    }

let inputInvitee1 = document.getElementById('invitee1');

inputInvitee1.onkeyup = function() {
        document.getElementById('invitee1Result').innerHTML = inputInvitee1.value;
    }

let inputInvitee2 = document.getElementById('invitee2');

    inputInvitee2.onkeyup = function() {
        document.getElementById('invitee2Result').innerHTML = inputInvitee2.value;
    }

let inputHer = document.getElementById('herName');

    inputHer.onkeyup = function() {
        document.getElementById('herNameResult').innerHTML = inputHer.value;
    let inputHer1 = inputHer.value.charAt(0);
        document.getElementById('herNameResult1').innerHTML = inputHer1;
    }

let inputHim = document.getElementById('hisName');

    inputHim.onkeyup = function() {
        document.getElementById('hisNameResult').innerHTML = inputHim.value;
    let inputHim1 = inputHim.value.charAt(0);
        document.getElementById('hisNameResult1').innerHTML = inputHim1;
    }

let inputSurname = document.getElementById('lastName');

    inputSurname.onkeyup = function() {
        document.getElementById('lastNameResult').innerHTML = inputSurname.value;
    }

    // var inputDate = document.getElementById('date');

    // inputDate.onkeyup = function() {
    //     document.getElementById('dateResult').innerHTML = inputDate.value;
    // }

function displayDate() {

    let date1 = document.getElementById("date").value;

    const d = new Date(date1);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);    
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);        
    let newDate = `${da} ${mo} ${ye}`;       
    document.getElementById('dateResult').innerHTML = newDate;
    }


let inputLocation = document.getElementById('location');
    
    inputLocation.onkeyup = function() {
        document.getElementById('locationResult').innerHTML = inputLocation.value;
    }

let inputLocation1 = document.getElementById('location1');

    inputLocation1.onkeyup = function() {
        document.getElementById('locationResult1').innerHTML = inputLocation1.value;
    }
