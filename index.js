// code your solution here


// defines saturdayFun function
function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`);

}

// defines mondayWork function
function mondayWork(venue="go to the office") {
    return (`This Monday, I will ${venue}.`);

}

// defines wrapAdjective function
function wrapAdjective(input) {
    
   
    
    
    let init = input[0];
    if (init === "|") {
        function doActionB(input) {
            
            input = "the adjective begins with '||' is highlighted now. ";
            return input;
    
        }
        return doActionB;
    } 
   
     
    else if (init === "*") {
        function doActionA(input) {
            
            input = "You are *a hard worker*!";
            return input;
    
        }
        return doActionA;
    }  
    
   


}

// saturdayFun();
// mondayWork("I will work from home");