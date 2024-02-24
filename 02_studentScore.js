/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/
function calculateGrade(score1){
   switch(true){
      case (score1 == 100):
         return "The Grade is A++";
      case (score1 >= 95):
         return "The Grade is A+";
      case (score1 >= 85 ):
            return "The Grade is A";
         case (score1 >= 70 ):
            return "The Grade is B";
         case (score1 >= 60 ):
            return "The Grade is C";
         default:
            return "The Grade is F";

      }
   }
   let score1=94;
   console.log(calculateGrade(score1));
