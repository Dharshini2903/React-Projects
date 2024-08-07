import React,{useState} from 'react';
function Main(){
    const[isVisible,setIsVisible]=useState(false);
    const toggleVisiblity=()=>{
        setIsVisible(!isVisible);
    };
    return(
        <div>
            <button onClick={toggleVisiblity}>
                {isVisible ? 'Hide' : 'Show'} Content
            </button>
            {isVisible && (
                <div>
                    <h1>Hi!How are you</h1>
                </div>    
            )}
        </div>
    );
}
export default Main;