const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
  let counter = 0
  
  for(const key in usersObj){
    if(usersObj [key].online){
      counter++
    }
  }
    // Only change code above this line
    return counter
  }
  
  console.log(countOnline(users));