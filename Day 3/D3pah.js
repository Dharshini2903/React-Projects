import React,{useState} from 'react';
function Goku(){
    const[isVisible,setIsVisible]=useState(false);
    const[clickCount,setClickCount]=useState(0);
    const handleClick=()=>{
        setClickCount(prevCount=>prevCount+1);
        if(clickCount+1===4){
            setIsVisible(prevIsVisible=>!prevIsVisible);
            setClickCount(0);
        }
    };
    return(
        <div>
            <h1>Goku Kaioken</h1>
            <h3>Click four times to transform</h3>
            <button onClick={handleClick}>
                {isVisible ? 'kaioken' : 'super sayan'}  MODE
            </button>
            {isVisible && (
                <div>
                    <h1 >Super Saiyan God Mode</h1>
                    <h3>Click four times to transform back</h3>
                </div>

            )}
        </div>
    );
}
export default Goku;