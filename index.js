function createLoginTracker(userInfo){
  let attemptCount = 0 
  return (passwordAttempt) => {
    attemptCount++;
    if(attemptCount > 3){
      return "Account locked due to too many attempts";
    }
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return ' Login attempt ${attemptCount}: Login failed';
    }
  }
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};