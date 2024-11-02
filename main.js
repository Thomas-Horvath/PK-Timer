//* HTML elemek

const time = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-startBtn');
const stopBtn = document.querySelector('.js-stopBtn');
const resetBtn = document.querySelector('.js-resetBtn');



//* változók
const initTime = 5 * 60;

let realTime = initTime;

let intervalId = null;


//* segédfüggvények

function formatTime(sec) {
    const minutes = Math.floor(sec / 60);  // perceket kapjuk meg  -> másodpeceket elosztjuk 60 al és kerekítjük lefelé.
    let seconds = sec % 60;  // másodpeceket elosztjuk 60 al és a maradék lesz a másodperc érték 

    if (seconds < 10) {
        seconds = `0${seconds}`  // ha a másodperc kisebb mint 10, akkor 0 előjegyezünk -> pl 2 ből lesz 02
    };
    return `${minutes}:${seconds}`
};



//* render
function renderTime() {
    time.innerHTML = formatTime(realTime);
}



//* eseményfigyelők

const handleStart = () => {
    function start() {
        realTime -= 1;  // csökkentjük a másodperc értékét egyel
        renderTime();
    };
    intervalId = setInterval(start, 1000); //* másodpecenként hajtja végre a függvény magját
};




const handleStop = () => {
    clearInterval(intervalId);

}
const handleReset = () => {
    console.log('klikkreset');
}



startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);

//* szükséges függvényhívás

renderTime();  // a kezdőértéket betöltjük