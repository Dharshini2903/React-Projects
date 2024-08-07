function alertMsg(){
    alert("Message from Javascript Alert!");
    console.log("Message to developer");
}

function App(){
    return(
        <div className="App">
            <button onClick={alertMsg}>Click</button><br></br>   
        </div>
    )
}
export default App;