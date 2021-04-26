function lifeInWeeks(age) {
    // Assume that you die at the age of 90 and 
    // there are 365 days, 52 weeks and 12 months in a year.
      //Write your code here.

     const lastAge = 90 
  
     //Days
     const days = 365;
     const daysToExist = (days * age) ;
     const lastDay = (lastAge * days);
     //Weeks
     const weeks = 52;
     const weeksToExist = (weeks * age );
     const lastWeek = (lastAge * weeks);
     //Months
     const months = 12;
     const monthsToExist = (months * age);
     const lastmonth = (lastAge * months);
  
    console.log( "you have ", lastDay - daysToExist, " days ", lastWeek - weeksToExist, " weeks", lastmonth - monthsToExist, "months", "to live");
   
  }

  lifeInWeeks(19);
