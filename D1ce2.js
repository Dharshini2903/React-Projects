function CE2()
{
    let myObject={name:"Madras"};
    let newObject=myObject;
    myObject.name="Chennai";
    let myArray=["a","e","i","o"];
    let vArray=myArray;
    myArray.push("u");
    console.log(myObject);
    console.log(myArray);
    alert("Check the console output!");
}
function App(){
    return(
        <div className="App">
            <h1>"Let we see the output of JAVASCRIPT"</h1>
            <button onClick={CE2}>CE2</button>
        </div>
    )
}
export default App;