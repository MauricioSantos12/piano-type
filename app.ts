console.log('init TS')

const pianoKeys = document.querySelectorAll<HTMLInputElement>('.piano-keys .key');
const volumeSlider = document.querySelector<HTMLInputElement>('.volume-slider input');
const keysCheckbox = document.querySelector<HTMLInputElement>('.keys-checkbox input');

let audio = new Audio('tunes/a.wav');
let allKeys:any[] = []


const playTune = (key:string | any) => {
    audio.src = `tunes/${key}.wav`
    audio.play(); 


    const clickedKey = document.querySelector<HTMLInputElement>(`[data-key="${key}"]`)
    if(clickedKey != null){
        clickedKey.classList.add('active');
        setTimeout(() => {
            clickedKey.classList.remove('active')
        }, 150)
    }
}

pianoKeys.forEach(value => {
    allKeys.push(value.dataset.key)
    value.addEventListener('click', () => {
        playTune(value.dataset.key)
    })
});

const pressedKey = (e:any) => {
    if( allKeys.includes(e.key) ) playTune(e.key)
}

const handleVolume = (e:any) => {
    audio.volume = e.target.value // pass value volume
}

const showHideKeys = (e:any) => {
    pianoKeys.forEach(key => {
        key.classList.toggle('hide')
    })
}

keysCheckbox?.addEventListener('click', showHideKeys);
volumeSlider?.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedKey);
