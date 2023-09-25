import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./landing.css";
var index = 0
export var np


var count = 1

function Landing() {

    const navigate = useNavigate();

    const navigateTohome = () => {

        setTimeout(() => {
            navigate('/home');
        }, 100);
        setTimeout(() => { window.location.reload(false) }, 110)
    };


    const submitp = (e) => { e.preventDefault(); nopclose(); setOpenPlayer1(true); }
    const submit1 = (e) => { e.preventDefault(); setOpenPlayer1(false); submitplayers(); }

    const [isOpenPlayer, setOpenPlayer] = useState(false);
    const [isOpenPlayer1, setOpenPlayer1] = useState(false);

    function nopclose() {

        document.getElementById("openplayers").style.display = "none";
    }
    function set() {

        document.getElementById("play").style.display = "none";
    }

    function submitplayers() {

        np = document.getElementById("players")
        const namep = document.getElementById("name1")
        const genderp = document.getElementById("gender1")
        const agep = document.getElementById("age1")


        var isValidForm1 = document.forms['form1'].checkValidity();
        console.log(isValidForm1)
        if (isValidForm1) {

            for (index; index < np.value; index++) {

                if (window.sessionStorage.key(index) === null) {

                    window.sessionStorage.setItem(index, JSON.stringify({ np: namep.value, gp: genderp.value, ap: agep.value, tp: np.value }));
                    break;
                }

            };

        }
        else {

            console.log("false")
            return false;
        }

        if (index == (np.value - 1)) {
            navigateTohome()
        }

        var i = 0, oJson = {}, sKey;
        for (i; sKey = window.sessionStorage.key(i); i++) {
            oJson[sKey] = window.sessionStorage.getItem(sKey);
            console.log(oJson[sKey])

        }
        console.log(oJson);
        setTimeout(() => {
            setOpenPlayer1(true)
        }, 100);

        count += 1

    }

    return (
        <>
            <div className='min-h-screen' id='land'>

                <div className='w-full flex gap-2 items-center justify-end text-white text-lg p-4'>
                    <p className='animate-pulse'>Score more than 20 points first and won the game </p>
                    <p>&#9432;</p>
                </div>

                <div className='flex items-center justify-center min-h-screen'>

                    <div>
                        <button id="play" onClick={() => { set(); setOpenPlayer(true); }} className=' block text-white bg-black rounded-lg w-32 h-20'>PLAY NOW!!!</button>
                    </div>

                    {isOpenPlayer && (
                        <div id="openplayers" className='flex flex-col text-xl text-black font-bold border-4 p-2 border-white rounded-lg items-center justify-center bg-white'>
                            <h1 className=''> NUMBER OF PLAYERS ALLOWED </h1>
                            <br></br>
                            <form className='ml-16' id="form2" onSubmit={submitp}>
                                <label>
                                    <input id="players" className='border-2 border-gray-300 rounded-lg border-solid w-8/12 mt-2 indent-2 text-center' style={{ "height": "4vh" }} type="number" autoComplete="off" min="2" value={2} required />
                                </label>
                                <br></br>
                                <br></br><br></br>
                                <button className='bg-black text-white rounded-lg w-2/5 h-12 ml-8' type="button"><input className='cursor-pointer' type="submit" value="Submit" /></button>
                                <br></br><br></br>
                            </form>
                        </div>)}


                    {isOpenPlayer1 && (
                        <div id="player1" className='text-xl text-black font-bold border-4 border-white rounded-lg items-center justify-center bg-white'>
                            <h1 className='ml-16 mt-4'> PLAYER {count} DETAILS </h1>
                            <form className='ml-16' id="form1" onSubmit={submit1}>
                                <label>
                                    <br></br>
                                    Name
                                    <br></br>
                                    <input id="name1" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="text" placeholder='Your Name' autoComplete="off" pattern=".{3,11}" required />
                                </label>
                                <br></br>
                                <label>
                                    <br></br>
                                    Gender
                                    <br></br>
                                    <input id="gender1" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="gender" placeholder='Enter gender' autoComplete="off" pattern=".{4,6}" required />
                                </label>
                                <br></br>
                                <label>
                                    <br></br>
                                    Age
                                    <br></br>
                                    <input id="age1" className='border-2 border-gray-300 border-solid w-8/12 mt-2 indent-2' style={{ "height": "4vh" }} type="number" placeholder='Enter age' autoComplete="off" max="99" min="8" required />
                                </label>
                                <br></br><br></br>
                                <button className='bg-black text-white rounded-lg w-2/5 h-12 ml-8' type="button"><input className='cursor-pointer' type="submit" value="Submit" /></button>
                                <br></br><br></br>
                            </form>
                        </div>)}

                </div>
            </div>

        </>


    )
}

export default Landing
