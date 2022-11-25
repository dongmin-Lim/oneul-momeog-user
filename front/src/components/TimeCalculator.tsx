import { useEffect, useState } from "react";

interface TimeProps {
  currentTime: string;
  dueTime: string;
}

function TimeCalculator({ currentTime, dueTime }: TimeProps) {
  var newCurrentTime = currentTime.toString().split(".")[0];

  var date1 = new Date(newCurrentTime); // 현재
  var date2 = new Date(dueTime); // 파라미터

  var SecGap = (date2.getTime() - date1.getTime()) / 1000;

  var min = Math.floor((SecGap % 3600) / 60);
  var sec = Math.floor(SecGap % 60);

  console.log(SecGap);
  return (
    <>
      {SecGap > 0 ? (
        <>
          남은시간 {min}분 {sec}초
        </>
      ) : (
        <>남은시간 0분 0초</>
      )}
    </>
  );
}

export default TimeCalculator;
