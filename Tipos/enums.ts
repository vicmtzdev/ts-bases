//Función anomina autoinvocada

(() => {

    enum AudioLevel {
        min = 1,
        medium = 5,
        max = 10,
    }

    let currentAudio: AudioLevel = AudioLevel.medium;

    console.log(currentAudio);
    console.log(AudioLevel);

})()