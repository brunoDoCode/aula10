var douglas = [35, 38, 40, 45];

function score_average()
{
var sum = douglas[0] + douglas[1] + douglas[2] + douglas[3];
var avg = sum/douglas.length;
console.log(avg);
}

function setup() 
{
  createCanvas(400,400);
  score_average();
}

function draw() 
{
background(51);

}

