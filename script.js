//hello//
function getHoroscope(){
    document.getElementById("output").style.display="block";
    var day = document.getElementById("days").value;
    var month = document.getElementById("month").value;
    var person = document.getElementById("name").value;
    console.log(day);
    console.log(month);
    var date = month + day;
    var horoscope = "";
    var horoscopesdates = [0, "Capricorn", 119, "Aquarius", 218, "Pisces", 320, "Aries", 419, "Taurus", 520, "Gemini", 620, "Cancer", 722,
        "Leo", 822, "Virgo", 922, "Libra", 1022, "Scorpio", 1121, "Sagittarius", 1221, "Capricorn", 1231];
    var horoscopemessages=["Capricorn", "You will get what you want and then die happily", "Aquarius", "Your smile will illuminate the lives of those around you to the point that they will love you forever",
        "Pisces", "Although it may seem like everything is not going so well right now, life will take a turn for the better when you find your soulmate",
        "Aries", "What do you do when life gives you lemons? You make some shmacking sorbet! This how you tend live life and it will reward you with much joy and ice cream",
        "Taurus", "You will one become a waiter at a diner. The day a man asks you for no ketchup but all sauce on their burger, you must quit your job and become a scuba diver in the northeastern part of New Guinea",
        "Gemini", "You will become addicted to wearing polka dotted pants and end up deciding you prefer an amish lifestyle", "Cancer", "Although your parents may have been strict with you growing up, the essence of your life is based on the fact that you love to eat persimmons",
    "Leo", "The next time you go to the barber, they will refuse to serve on the basis of lack of cleansiness. This will cause you to go bald and take many bubble baths regularly", "Virgo",
        "When you were a kid, Santa Claus may have not given you what you desired, which is why you will become a fake santa and truly make kid's wishes come true", "Libra","The day you decide to buy organic will be the day your soul will finally be free",
        "Scorpio","The difference between you and a professional sports player is the money, not the talent", "Sagittarius", "Altough it may seem like what you do is for money, people do not appreciate the work you put in and the talent you have at such a young age"];

    n =  new Date();
    m = n.getMonth() + 1;
    d = n.getDate();
    if (d== day && m==month){
        document.body.style.backgroundImage = "url('http://images.all-free-download.com/images/graphiclarge/happy_birthday_elements_02_vector_156400.jpg')";
    }


    for (var i = 0; i < horoscopesdates.length; i += 2) {
        if (date > horoscopesdates[i] && date < horoscopesdates[i + 2]) {
            horoscope = horoscopesdates[i + 1];
        }
        var one= horoscopemessages.indexOf(horoscope);
        var two = horoscopemessages[one+1];
        document.getElementById("output").innerHTML = "Dear " + person + ", you are a " + horoscope + "!" + "<br/>" +two;
        document.getElementById("image").innerHTML = "<img src='img/" + horoscope + "_icon.png' width='250'/>";

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



