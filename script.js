/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){
	if(video.paused){
		video.play();
	}
	else{
		video.pause();
	}
}
function updateButton(){
	if(video.paused){
		toggle.textContent='►';
	}
	else{
		toggle.textContent='❚ ❚';
	}
}
function skip()
{
	video.currentTime+=number(this.dataset.skip);
}
function handleRangeUpdate() {
	const percent=(video.currentTime/video.duration)*100;
	progressBar.style.flexbasis='${percent}%'
}
function scrub(e){
	const scrubTime=(e.offsetX/progress.clientWidth)*video.duration;
	video.currentTime=scrubTime;
}
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let isMouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => isMouseDown && scrub(e));
progress.addEventListener('mousedown', () => isMouseDown = true);
progress.addEventListener('mouseup', () => isMouseDown = false);









