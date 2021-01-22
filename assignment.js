



//Answer number 01------------- KilometerToMeter(meter)

function KilometerToMeter(kilometer) {

    if (kilometer < 0) {
        return console.log("distance cannot be negative");
    }

    var meter = kilometer / 1000;
    return meter;
}

// call the  function
var countMeter = KilometerToMeter(440);
console.log(countMeter);



// Answer number 02--------------- budgetCalculator(watch,mobile,laptop)
function budgetCalculator(watch, mobile, laptop) {
    var watch = 50;
    var mobile = 100;
    var laptop = 500;

    if (watch < 0 || mobile < 0 || laptop < 0){
        console.log("don't given negative value");
    }

    var totalbudget = watch*5  +  mobile*4  +  laptop*2;
    console.log(`The Total Budget Is : (${watch}, ${mobile}, ${laptop})  = ${totalbudget}`);
    return totalbudget;     
}
// call the fuction
  budgetCalculator();
 


// Answer number 03----------- hotelCost(return total ammount)

function hotelCost(hotelVara) {
    
    var spicalConsidar = 0;
    if (hotelVara <= 10) {
         spicalConsidar = hotelVara * 100;
    }
    else if (hotelVara <= 20) {
        var fristDay = 10 * 100;
        var counting = hotelVara - 10;
        secondDay = counting * 80;
        spicalConsidar = fristDay + secondDay;
    }
    else {
        var fristDay = 10 * 100;
        var secondDay = 10 * 80;
        var counting = hotelVara - 20;
        var thirdDay = counting * 50;
        spicalConsidar= fristDay + secondDay + thirdDay;
    }
    return  spicalConsidar;
}
// call the fuction
    var totalCount = hotelCost(34);
    console.log(totalCount);


// Answer number 04--------------- megaFriend (find out large name).

function megaFriend(names) {
     if (names.length == 0) {
        console.log("Arry not empty");
        return 0;
    }

    var largeLength = names[0].length;
    var value = 0;


    for (i = 0; i < names.length; i++) {
        if (names[i].length > largeLength) {
            largeLength = names[i].length;
            value = i;
        }
    }

    console.log(`The largest name is: '${names[value]}'`);
    return names[value];
}

var names = [ 'Shimu','Rafizza', 'Mozazffor', 'Sajjad', 'lima'];   

//call the function
megaFriend(names);



