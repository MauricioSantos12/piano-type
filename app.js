console.log('init TS');
var pianoKeys = document.querySelectorAll('.piano-keys .key');
var volumeSlider = document.querySelector('.volume-slider input');
var keysCheckbox = document.querySelector('.keys-checkbox input');
var audio = new Audio('tunes/a.wav');
var allKeys = [];
var playTune = function (key) {
    audio.src = "tunes/".concat(key, ".wav");
    audio.play();
    var clickedKey = document.querySelector("[data-key=\"".concat(key, "\"]"));
    if (clickedKey != null) {
        clickedKey.classList.add('active');
        setTimeout(function () {
            clickedKey.classList.remove('active');
        }, 150);
    }
};
pianoKeys.forEach(function (value) {
    allKeys.push(value.dataset.key);
    value.addEventListener('click', function () {
        playTune(value.dataset.key);
    });
});
var pressedKey = function (e) {
    if (allKeys.includes(e.key))
        playTune(e.key);
};
var handleVolume = function (e) {
    audio.volume = e.target.value; // pass value volume
};
var showHideKeys = function (e) {
    pianoKeys.forEach(function (key) {
        key.classList.toggle('hide');
    });
};
keysCheckbox === null || keysCheckbox === void 0 ? void 0 : keysCheckbox.addEventListener('click', showHideKeys);
volumeSlider === null || volumeSlider === void 0 ? void 0 : volumeSlider.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedKey);
