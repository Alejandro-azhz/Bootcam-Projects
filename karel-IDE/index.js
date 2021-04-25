//Mecha-Beeper 2.0
 
function main(){
    putBeeper();
    leftCornerBeeper();
    rightCornerBeeper();
    leftCornerBeeper();
    rightCornerBeeper();
}

//Beeper Functions

 function leftCornerBeeper(){
   move();
   turnLeft();
   move();
   putBeeper();
}  
 
 function rightCornerBeeper(){
   move();
   turnRight();
   move();
   putBeeper();
}