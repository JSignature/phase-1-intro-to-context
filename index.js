// Your code here
const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => {
  const testEmployee = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  }

  return testEmployee
}

// let twoRows = [
//   ['moe', 'sizlak', 'barkeep', 2],
//   ['bartholomew', 'simpson', 'scamp', 3],
// ]

const createEmployeeRecords = twoRows => {
  let employeeRecords = twoRows.map(e => createEmployeeRecord(e))
  return employeeRecords
}

let bpRecord = createEmployeeRecord(['Byron', 'Poodle', 'Mascot', 3])

const createTimeInEvent = (empRecord, dateStamp) => {
  let timeInEvent = dateStamp.split(' ')
  timeInEvent[1] = parseInt(timeInEvent[1])

  const newEvent = empRecord

  const timeUpdate = {
    type: 'TimeIn',
    hour: timeInEvent[1],
    date: timeInEvent[0],
  }

  newEvent.timeInEvents.push(timeUpdate)

  return newEvent
}

createTimeInEvent(bpRecord, '2014-02-28 1400')

const createTimeOutEvent = (empRecord, dateStamp) => {
  let timeOutEvent = dateStamp.split(' ')
  timeOutEvent[1] = parseInt(timeOutEvent[1])

  const newEvent = empRecord

  const timeUpdate = {
    type: 'TimeOut',
    hour: timeOutEvent[1],
    date: timeOutEvent[0],
  }

  newEvent.timeOutEvents.push(timeUpdate)

  return newEvent
}

// cRecord = createEmployeeRecord(['Julius', 'Caesar', 'General', 1000])
// createTimeInEvent(cRecord, '0044-03-15 0900')
// createTimeOutEvent(cRecord, '0044-03-15 1100')

const hoursWorkedOnDate = (empRecord, date) => {
  const timeInEvent = empRecord.timeInEvents

  const inDateMatch = timeInEvent.filter(element => element.date === date)

  const startTime = inDateMatch[0].hour
  // console.log(startTime)

  const timeOutEvent = empRecord.timeOutEvents
  const outDateMatch = timeOutEvent.filter(element => element.date === date)
  const endTime = outDateMatch[0].hour
  // console.log(endTime)

  const hoursWorked = (endTime - startTime) / 100
  return hoursWorked
  // console.log(hoursWorked)
}

// hoursWorkedOnDate(cRecord, '0044-03-15')

// cRecord = createEmployeeRecord(['Julius', 'Caesar', 'General', 27])
// createTimeInEvent(cRecord, '0044-03-15 0900')
// createTimeOutEvent(cRecord, '0044-03-15 1100')

const wagesEarnedOnDate = (empRecord, date) => {
  const hoursWorked = hoursWorkedOnDate(empRecord, date)
  console.log(hoursWorked)
  const payRate = empRecord.payPerHour
  console.log(payRate)
  const wages = hoursWorked * payRate
  console.log(wages)
  return wages
}
// wagesEarnedOnDate(cRecord, '0044-03-15')
