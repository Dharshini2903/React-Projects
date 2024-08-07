function primitive(){
    let age=18;
    let name="Kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age,name);
    alert("Check the console output");

}

function App(){
    return(
        <div className="App">
            <button onClick={primitive}>PAH</button><br></br>
        </div>
    )
}
export default App;