let startStopButton = document.getElementById('startstop');
let resetButton = document.getElementById('reset');
let lapseButton = document.getElementById('lapse');
let lapseTime = document.getElementById('lapsetime');


    let day = 00;
    let hour = 00;
    let minute = 00;
    let second = 00;
    let count = 00;

        let d = 0;
        let h = 0;
        let m = 0;
        let s = 0;
        let c = 0;
        let i=1;


        startStopButton.addEventListener('click', function(){
            if (startStopButton.innerHTML == 'Pause'){
                timer = false;
                startStopButton.innerHTML = 'Start';
                startStopButton.title = "Click here to Start";

            }
            
            else {
            
                timer = true;
                stopWatch();
                startStopButton.innerHTML = 'Pause';
                startStopButton.title = "Click here to Pause";
                }

            

        });


        resetButton.addEventListener('click', function () {
            timer = false;
            day = 0;
            hour = 0;
            minute = 0;
            second = 0;
            count = 0;
            d=0;
            h=0;
            m=0;
            s=0;
            c=0;
            startStopButton.innerHTML = 'Start';
            lapseTime.innerHTML = "";
            document.getElementById('top').innerHTML = "";

            document.getElementById('day').innerHTML = "00";
            document.getElementById('hour').innerHTML = "00";
            document.getElementById('minute').innerHTML = "00";
            document.getElementById('second').innerHTML = "00";
            document.getElementById('count').innerHTML = "00";

            document.getElementById('c1').style.color = "blueviolet";
            document.getElementById('c2').style.color = "blueviolet";
            document.getElementById('c3').style.color = "blueviolet";
            document.getElementById('c4').style.color = "blueviolet";
            i=1;
           
       });
       
        function stopWatch() {
            if (timer){
                count++;
                c++;
                if (c==100){
                    c=0;
                    s++;
                }

                if (s==60){
                    m++;
                    s=0;
                    c=0;
                }

                if (m==60){
                    h++;
                    m=0;
                    s=0;
                    c=0;
                }

                if (h==60){
                    d++;
                    h=0;
                    m=0;
                    s=0;
                    c=0;
                }

                if (count==50){
                    document.getElementById('c1').style.color = "red";
                    document.getElementById('c2').style.color = "red";
                    document.getElementById('c3').style.color = "red";
                    document.getElementById('c4').style.color = "red";
                }

                if (count == 100) {
                    second++;
                    count = 0;
                    document.getElementById('c1').style.color = "blueviolet";
                    document.getElementById('c2').style.color = "blueviolet";
                    document.getElementById('c3').style.color = "blueviolet";
                    document.getElementById('c4').style.color = "blueviolet";
                }

                if (second == 60) {
                    minute++;
                    second = 0;
                    count = 0;
                }

                if (minute == 60) {
                    hour++;
                    minute = 0;
                    second = 0;
                    count = 0;
                }

                if (hour == 24) {
                    day++;
                    hour = 0;
                    minute = 0;
                    second = 0;
                    count = 0;
                }

                let dayString = day;
                let hourString = hour;
                let minuteString = minute;
                let secondString = second;
                let countString = count;
                if (day < 10) {
                    dayString = "0" + dayString;
                }
                if (hour < 10) {
                    hourString = "0" + hourString;
                }
                if (minute < 10) {
                    minuteString = "0" + minuteString;
                }
                if (second < 10) {
                    secondString = "0" + secondString;
                }

                if (count < 10) {
                    countString = "0" + countString;
                }
                document.getElementById('day').innerHTML = dayString;
                document.getElementById('hour').innerHTML = hourString;
                document.getElementById('minute').innerHTML = minuteString;
                document.getElementById('second').innerHTML = secondString;
                document.getElementById('count').innerHTML = countString;
                setTimeout(stopWatch,10);
            
            }
        }


                

        lapseButton.addEventListener('click', function(){

                let dayString = day;
                let hourString = hour;
                let minuteString = minute;
                let secondString = second;
                let countString = count;
                if (day < 10) {
                    dayString = "0" + dayString;
                }
                if (hour < 10) {
                    hourString = "0" + hourString;
                }
                if (minute < 10) {
                    minuteString = "0" + minuteString;
                }
                if (second < 10) {
                    secondString = "0" + secondString;
                }

                if (count < 10) {
                    countString = "0" + countString;
                }

                let dString = d;
                let hString = h;
                let mString = m;
                let sString = s;
                let cString = c;
                if (d < 10) {
                    dString = "0" + dString;
                }
                if (h < 10) {
                    hString = "0" + hString;
                }
                if (m < 10) {
                    mString = "0" + mString;
                }
                if (s < 10) {
                    sString = "0" + sString;
                }

                if (c < 10) {
                    cString = "0" + cString;
                }

                if (i<10){
                    i = '0'+ i;
                }

            document.getElementById('top').innerHTML = "<pre>Lap                              Lap Time                                  Total                 </pre>";
            document.getElementById('top').innerHTML += '<pre>no.                           dd : hh :mm: ss :                    dd : hh :mm: ss :   '
            lapseTime.innerHTML += `<pre>   ${i}.                           ${dString} : ${hString} : ${mString} : ${sString} : ${cString}               ${dayString} : ${hourString} : ${minuteString} : ${secondString} : ${countString}</pre>`;
            d=0;
            c=0;
            h=0;
            m=0;
            s=0;
            
            i++;


        });

        alert("Welcome to the StopWatch website");
