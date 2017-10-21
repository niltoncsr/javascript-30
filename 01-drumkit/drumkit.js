document.addEventListener('DOMContentLoaded', () => {
	const audioKeys = [...document.querySelectorAll('button[data-key]')];
	const audioFiles = [...document.querySelectorAll('audio[data-key]')];

	const playAudio = audioFile => audioFile.play();

	const getAudioFile = keyCode => audioFiles.find(file => file.dataset['key'] == keyCode);

	for(let k = 0; k < audioKeys.length; k++) {
		audioKeys[k].addEventListener('click', e => {
			let audioFile = getAudioFile(audioKeys[k].dataset['key']);

			if(audioFile) {
				playAudio(audioFile);
			}
		});

		document.addEventListener('keydown', e => {
			let audioFile = getAudioFile(e.keyCode);

			if(audioFile) {
				playAudio(audioFile);
			}
		})
	};
})