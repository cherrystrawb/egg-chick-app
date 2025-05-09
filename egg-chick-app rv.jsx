import react, { useState} from "react";
import "./App.css";
function App(){
    const[hatched, setHatched]= useState(false);
    const handleClick= () => {
        setHatched(true);
        return (
            <div className="container">
                {!hatched ? (
                    <img src="egg.png".../>
                ):(
                    <img src="chick.png".../>
                )}
                <img
                src="egg.png"
                alt="Egg"
                className="egg"
                onClick={handleClick}
                />
                <img
                src="chick.png"
                alt="Chick"
                className="chick"
                />
                <p>{!hatched ? "Click the egg: Its a chick!"}</p>
                export default App;  
                }
        )
    }
}