document.addEventListener('DOMContentLoaded', () => {
	const audioButtons = [...document.querySelectorAll('button[data-key]')];
	const audioFiles = [...document.querySelectorAll('audio[data-key]')];

	// play the audio from the start
	const playAudio = audioFile => {
		audioFile.currentTime = 0;
		audioFile.play();
	};

	// Get audio file tag given the correspondent key code
	const getAudioFile = keyCode => audioFiles.find(file => file.dataset['key'] == keyCode);

	// Get drum button tag given the correspondent key code
	const getButton = keyCode => audioButtons.find(button => button.dataset['key'] == keyCode);

	// Add transitioning class to button
	const addTransition = button => button.classList.add('playing');

	// Remove transitioning class from button
	const removeTransition = function(e) {
		if(e.propertyName === 'transform') {
			this.classList.remove('playing');
		}
	};

	audioButtons.forEach(button => {
		button.addEventListener('click', e => {
			let audioFile = getAudioFile(button.dataset['key']);

			if(audioFile) {
				playAudio(audioFile);
				addTransition(button)
			}
		});

		document.addEventListener('keydown', e => {
			const keyCode = e.keyCode;
			let audioFile = getAudioFile(keyCode);

			if(audioFile) {
				playAudio(audioFile);
				addTransition(getButton(keyCode))
			}
		});

		button.addEventListener('transitionend', removeTransition);
	});
})