interface TimeProps {
  currentTime: string;
  dueTime: string;
}

function TimeCalculator({ currentTime, dueTime }: TimeProps) {
  // CURRENT
  console.log(currentTime.toString().split("T")[0]); // 2022-11-25
  var curDate = currentTime.toString().split("T")[0].split("-");
  var curYear = Number(curDate[0]); // 2022
  var curMonth = Number(curDate[1]); // 11
  var curDay = Number(curDate[2]); // 25
  console.log(curYear);
  console.log(curMonth);
  console.log(curDay);

  console.log(currentTime.substring(0, currentTime.indexOf(".")).split("T")[1]); // 18:14:59.05354
  var curTime = currentTime
    .substring(0, currentTime.indexOf("."))
    .split("T")[1]
    .split(":");
  var curHour = Number(curTime[0]); // 18
  var curMin = Number(curTime[1]); // 14
  var curSec = Number(curTime[2]); // 59
  console.log(curHour);
  console.log(curMin);
  console.log(curSec);

  // DUE
  console.log(dueTime.toString().split("T")[0]); // 2022-11-25
  var dueDate = dueTime.toString().split("T")[0].split("-");
  var dueYear = Number(dueDate[0]); // 2022
  var dueMonth = Number(dueDate[1]); // 11
  var dueDay = Number(dueDate[2]); // 25
  console.log(dueYear);
  console.log(dueMonth);
  console.log(dueDay);

  console.log(dueTime.toString().split("T")[1]); // 18:14:59.05354
  var duTime = dueTime.toString().split("T")[1].split(":");
  var dueHour = Number(duTime[0]); // 18
  var dueMin = Number(duTime[1]); // 14
  var dueSec = Number(duTime[2]); // 59
  console.log(dueHour);
  console.log(dueMin);
  console.log(dueSec);

  var date1 = new Date(currentTime); // 현재
  var date2 = new Date(dueTime); // 파라미터

  var elapsedMSec = (date2.getTime() - date1.getTime()) / 1000;
  var elapsedMin = elapsedMSec / 1000 / 60;

  console.log("6: " + elapsedMSec);
  console.log("7: " + elapsedMin);
  return <>남은시간 {elapsedMSec}초</>;
}

export default TimeCalculator;
