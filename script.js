function getHoroscope(){
    var day = document.getElementById("days").value;
    var month = document.getElementById("month").value;
    var person = document.getElementById("name").value;
    console.log(day);
    console.log(month);
    var date = month + day;
    var horoscope = "";
    var horoscopesdates = [0, "Capricorn", 119, "Aquarius", 218, "Pisces", 320, "Aries", 419, "Taurus", 520, "Gemini", 620, "Cancer", 722,
        "Leo", 822, "Virgo", 922, "Libra", 1022, "Scorpio", 1121, "Sagittarius", 1221, "Capricorn", 1231];
    for (var i = 0; i < horoscopesdates.length; i += 2) {
        if (date > horoscopesdates[i] && date < horoscopesdates[i + 2]) {
            horoscope = horoscopesdates[i + 1];
        }
        document.getElementById("output").innerHTML = "Dear " + person + ", you are a " + horoscope + "!";
        document.getElementById("image").innerHTML = "<img src='img/" + horoscope + "_icon.png'/>";

    }
}


function setup(){
    for(var i=1; i <= 31; i++){
        var a= addthezero(i);
        document.getElementById("days").innerHTML += "<option value=" + a + ">" + i + "</option>";
    }

}

function addthezero(number) {
    return (number < 10) ? '0' + number.toString() : number.toString();
}

function monthlength(){
    document.getElementById("days").innerHTML = "";
    var monthlengths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var length = monthlengths[(document.getElementById("month").value) - 1];
    for (var i = 1; i <= length; i++) {
        var b= addthezero(i);
        document.getElementById("days").innerHTML += "<option value="+ b +">"+ i +"</option>";
    }
}


// <script language= "javascript">
//     "text"
//     </script>



// Aries (March 21-April 19)
// Taurus (April 20-May 20)
//
// Gemini (May 21-June 20)
//
// Cancer (June 21-July 22)
//
// Leo (July 23-August 22)
// Virgo (August 23-September 22)
//
// Libra (September 23-October 22)
//
// Scorpio (October 23-November 21)
//
// Sagittarius (November 22-December 21)
// Capricorn (December 22-January 19)
//
// Aquarius (January 20 to February 18)
//
// Pisces (February 19 to March 20)