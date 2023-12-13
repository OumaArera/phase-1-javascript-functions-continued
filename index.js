// // code your solution here
// function saturdayFun (activity = "roller-skate") {
//     return `This Saturday, I want to ${activity}!`;
// }
// saturdayFun("bathe my dog")

// const mondayWork = function (activity = "go to the office"){
//     return `This Monday, I will ${activity}.`;
// }
// mondayWork()

function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
  }
  saturdayFun()
  saturdayFun("bathe my dog")
  
  function mondayWork(activity="go to the office") {   
    return(`This Monday, I will ${activity}.`)
  }
  mondayWork()
  mondayWork("work from home")
  
  function wrapAdjective(flair="*") {
    return function(special="special") {
      return(`You are ${flair+special+flair}!`)
    }
  }
  wrapAdjective()
  wrapAdjective("%")("a dedicated programmer")