import { useEffect, useRef, useState } from "react";

interface TimeProps {
  currentTime: any;
  dueTime: any;
}

function TimeCalculator({ currentTime, dueTime }: TimeProps) {
  const [newCurrentTime, setNewCurrentTime] = useState<string>(
    currentTime?.toString().split(".")[0]
  );
  const [nowDate, setNowDate] = useState<Date>(new Date(newCurrentTime));
  const [targetDate, setTargetDate] = useState<Date>(new Date(dueTime));
  const [secGap, setSecGap] = useState<number>(
    (targetDate.getTime() - nowDate.getTime()) / 1000
  );
  const [min, setMin] = useState<number>(Math.floor((secGap % 3600) / 60));
  const [sec, setSec] = useState<number>(Math.floor(secGap % 60));
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    // Your custom logic here
    setSecGap(secGap - 1);
    setMin(Math.floor((secGap % 3600) / 60));
    setSec(Math.floor(secGap % 60));
  }, 1000);

  return (
    <>
      {secGap > 0 ? (
        <>
          남은시간 {min}분 {sec}초
        </>
      ) : (
        <>남은시간 0분 0초</>
      )}
    </>
  );
}

function useInterval(callback: any, delay: any) {
  const savedCallback = useRef<any>();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default TimeCalculator;
