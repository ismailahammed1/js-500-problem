function calculateTax(income, expenses) {
  if (income < 0) {
    return "Invalid Input";
  } else if (expenses < 0) {
    return "Invalid Input";
  } else if (expenses > income) {
    return "Invalid Input";
  } else {
    let netIncome = income - expenses;
    let totalEarning = netIncome * 0.2;
    return totalEarning;
  }
}

function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  } else {
    const text = email.split("@");
    const userName = text[0];
    const domainName = text[1];
    return userName + " sent you an email from " + domainName;
  }
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") {
      return true;
    }
  }
  return false;
}


function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return "Invalid Input";
  }
  if (typeof obj.name !== "string") {
    return "Invalid Input";
  }
  if (typeof obj.testScore !== "number" || obj.testScore > 50) {
     return "Invalid Input";
  }

  if (typeof obj.schoolGrade !== "number" || obj.schoolGrade > 30) {
    return "Invalid Input";
  }

  if (typeof obj.isFFamily !== "boolean") {
    return "Invalid Input";
  }
  let totalScore=obj.testScore+obj.schoolGrade;
  if (obj.isFFamily) {
    totalScore+=20
  }
  return totalScore>=80;
}


function  waitingTime(waitingTimes  , serialNumber) {
  if (!Array.isArray(waitingTimes)||typeof serialNumber !=='number') {
    return 'Invalid Input '
  }
  let sum = 0
  for (let i = 0; i < waitingTimes.length; i++) {
     sum += waitingTimes[i];
  }
  let average = Math.round(sum/waitingTimes.length)
  let isratSerialNumber=serialNumber-1;
  let interviewedPeople=isratSerialNumber-waitingTimes.length;
  let waitingTime=interviewedPeople*average
  return waitingTime

}
console.log(waitingTime(7 , 10));
