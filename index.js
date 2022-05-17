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

cRecord = createEmployeeRecord(['Julius', 'Caesar', 'General', 1000])
createTimeInEvent(cRecord, '0044-03-15 0900')
createTimeOutEvent(cRecord, '0044-03-15 1100')

const hoursWorkedOnDate = (empRecord, date) => {
  console.log(empRecord)
  //console.log(date)
  for (let element in empRecord) {
    let dateIn = empRecord.timeInEvents
    //console.log(dateIn)
    for (element of dateIn) {
      //console.log(element.date)
      //console.log(date)
      if (element.date === date && element.type === 'TimeIn') {
        console.log(element.hour)
      }
    }
  }
}

hoursWorkedOnDate(cRecord, '0044-03-15')
