function setup () {
    createCanvas(640, 480);
}

function draw () {
    noStroke();
    fill(0,255,0);
    rect(320,240,20,20);

    fill(255,0,0);
    circle(500,100,20);
    
    stroke(0,0,255);
    strokeWeight (3);
    line(0,40,640,40);
}

function day1AM() {
    //console.log("Hello World");
    var fullName ="Bryan Dietzler";
    var age = 46;
    var weight = 240;
    var heightInInches = 67
    var address ="1457 360th St. SW";
    var middleName;
    //console.log(middleName);
    //console.log(typeof(weight));
    console.log(age)
    age=46;
    console.log(age)
    age = age + 1
    console.log(age)

    console.log(fullName + " is " + age + " years old. ")
    var feet = Math.floor(heightInInches / 12);
    var inches = heightInInches % 12;
    console.log(feet)
    console.log(fullName+ " is " + feet + " foot " + inches+ " inches tall");

        print("Hello World");
        f2c(212);
}
day1AM();

function print(input) {
    console.log(input); 
    
}
//conversts farenheit to celsius
//Input: Temperature in Farenheit
function f2c(t) {
    print((t-32) * 5 /9);

}