//feet to mile
function feetToMile(feet){
    if(feet >= 0){
        var mile = feet/5280;
        return mile;
    }else{
        console.log("Feet can not be negetive!");
    }
   
}

var convertFeetToMile = feetToMile(5280); //input feet 
console.log(convertFeetToMile, " Mile");


//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

var result = woodCalculator(1,1,1); //input chair, table and bed numbers
console.log(result);


//brickCalculator
function brickCalculator(floor){
    if (floor <= 10){
        var totalheight = floor * 15; //1st to 10th floor = 15feet; 
        var brickNeed = totalheight * 1000; //1 feet = 1000 brick;
        return brickNeed;
    }
    if(floor<=20){
        var secondFloor = floor - 10;
        var totalheight = secondFloor * 12; //11th to 20th floor = 12feet;
        var brickNeed = (totalheight * 1000) + 150000; 
        return brickNeed;
    }
    else(floor>21)
    {
        var upperFloor = floor - 20;
        var totalheight = upperFloor * 10;//21th to upper floor = 10feet;
        var brickNeed = (totalheight * 1000) + 270000; 
        return brickNeed;
    }

}
var result = brickCalculator(40);
console.log(result);


//tinyFrined
function tinyFriend(friendName) {
    var currentName = Infinity; //positive infinity number
    var smallestName = "";
    if (friendName.length > 0) {
        for (var i = 0; i < friendName.length; i++) {
            if (friendName[i].length < currentName) {
                smallestName = friendName[i];
                currentName = friendName[i].length;
            }
        }
    }
    return smallestName;
}

var result = tinyFriend(['Shaon', 'Joy','Kabir', 'Kisloue','kashem']);
console.log(result);










