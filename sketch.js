var marks = [35,38,42,45,43,34,46,41,48,32];

var count = 0;
function setup() 
{
  createCanvas(400,400);

  
 
  for (var i=0; i <10;i++) {
   
    if (marks [i] >= 40  ){
    console.log(marks[i]);
    count= count+1;
    
    }
    
  }

  console.log("no of students passed " + count);



  
  
  
}



function draw() 
{
  background(30);
}

 

