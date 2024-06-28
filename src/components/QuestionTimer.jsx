import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeout, mode}) {

    const [remaniningTime, setRemainingTime] = useState(timeout);

    useEffect(()=> {
        const timer = setTimeout(onTimeout,timeout);
        return ()=> {
            clearTimeout(timer);
        }
    }, [onTimeout,timeout]);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };

    }, []);



    return <progress 
    id="question-time" 
    max={timeout} 
    value={remaniningTime}
    className={mode}
    />;

}