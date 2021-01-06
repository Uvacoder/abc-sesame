const letters = {
	a: {
		letterColor: 'rgb(238, 138, 232)',
		backgroundColor: 'rgb(250, 205, 247)',
		sound: 'assets/audio/a.mp3',
	},
	b: {
		letterColor: 'rgb(214, 202, 88)',
		backgroundColor: 'rgb(250, 240, 205)',
		sound: 'assets/audio/b.mp3',
	},
	c: {
		letterColor: 'rgb(88, 114, 214)',
		backgroundColor: 'rgb(210, 229, 251)',
		sound: 'assets/audio/c.mp3',
	},
	d: {
		letterColor: 'rgb(242, 165, 78)',
		backgroundColor: 'rgb(251, 235, 210)',
		sound: 'assets/audio/d.mp3',
	},
	e: {
		letterColor: 'rgb(242, 78, 78)',
		backgroundColor: 'rgb(251, 210, 210)',
		sound: 'assets/audio/e.mp3',
	},
	f: {
		letterColor: 'rgb(25, 129, 69)',
		backgroundColor: 'rgb(210, 251, 210)',
		sound: 'assets/audio/f.mp3',
	},
	g: {
		letterColor: 'rgb(25, 27, 129)',
		backgroundColor: 'rgb(150, 156, 221)',
		sound: 'assets/audio/g.mp3',
	},
	h: {
		letterColor: 'rgb(110, 80, 25)',
		backgroundColor: 'rgb(221, 181, 150)',
		sound: 'assets/audio/h.mp3',
	},
	i: {
		letterColor: 'rgb(25, 110, 37)',
		backgroundColor: 'rgb(150, 221, 182)',
		sound: 'assets/audio/i.mp3',
	},
	j: {
		letterColor: 'rgb(70, 25, 110)',
		backgroundColor: 'rgb(215, 194, 249)',
		sound: 'assets/audio/j.mp3',
	},
	k: {
		letterColor: 'rgb(232, 195, 115)',
		backgroundColor: 'rgb(250, 231, 205)',
		sound: 'assets/audio/k.mp3',
	},
	l: {
		letterColor: 'rgb(226, 141, 220)',
		backgroundColor: 'rgb(250, 205, 245)',
		sound: 'assets/audio/l.mp3',
	},
	m: {
		letterColor: 'rgb(232, 115, 122)',
		backgroundColor: 'rgb(250, 205, 205)',
		sound: 'assets/audio/m.mp3',
	},
	n: {
		letterColor: 'rgb(232, 115, 184)',
		backgroundColor: 'rgb(250, 205, 231)',
		sound: 'assets/audio/n.mp3',
	},
	o: {
		letterColor: 'rgb(60, 163, 81)',
		backgroundColor: 'rgb(184, 254, 190)',
		sound: 'assets/audio/o.mp3',
	},
	p: {
		letterColor: 'rgb(203, 159, 78)',
		backgroundColor: 'rgb(254, 253, 184)',
		sound: 'assets/audio/p.mp3',
	},
	q: {
		letterColor: 'rgb(203, 78, 78)',
		backgroundColor: 'rgb(254, 184, 186)',
		sound: 'assets/audio/q.mp3',
	},
	r: {
		letterColor: 'rgb(57, 161, 120)',
		backgroundColor: 'rgb(184, 254, 231)',
		sound: 'assets/audio/r.mp3',
	},
	s: {
		letterColor: 'rgb(200, 145, 91)',
		backgroundColor: 'rgb(254, 238, 184)',
		sound: 'assets/audio/s.mp3',
	},
	t: {
		letterColor: 'rgb(196, 90, 107)',
		backgroundColor: 'rgb(250, 202, 213)',
		sound: 'assets/audio/t.mp3',
	},
	u: {
		letterColor: 'rgb(166, 121, 56)',
		backgroundColor: 'rgb(246, 214, 169)',
		sound: 'assets/audio/u.mp3',
	},
	v: {
		letterColor: 'rgb(242, 47, 47)',
		backgroundColor: 'rgb(249, 193, 193)',
		sound: 'assets/audio/v.mp3',
	},
	w: {
		letterColor: 'rgb(208, 123, 39)',
		backgroundColor: 'rgb(237, 209, 138)',
		sound: 'assets/audio/w.mp3',
	},
	x: {
		letterColor: 'rgb(208, 38, 207)',
		backgroundColor: 'rgb(246, 198, 240)',
		sound: 'assets/audio/x.mp3',
	},
	y: {
		letterColor: 'rgb(208, 86, 38)',
		backgroundColor: 'rgb(244, 211, 189)',
		sound: 'assets/audio/y.mp3',
	},
	z: {
		letterColor: 'rgb(208, 128, 38)',
		backgroundColor: 'rgb(246, 217, 162)',
		sound: 'assets/audio/z.mp3',
	},
};

(() => {
	let sound;
	let confetti;
	const app = document.getElementById('app');
	const background = app.querySelector('.background');
	const letter = app.querySelector('.letter');

	document.addEventListener('keydown', keyDownHandler);

	function keyDownHandler(event) {
		event.preventDefault();

		if (sound?.ended != undefined && !sound.ended) {
			return;
		}

		const { key } = event;
		if (key.length > 1) {
			return;
		}

		if (!key.match(/^[A-Za-z]+$/)?.length) {
			return;
		}

		confetti = null;
		sound = new Audio(letters[key.toLowerCase()].sound);
		sound.play();

		setTimeout(() => {
			background.style.backgroundColor =
				letters[key.toLowerCase()].backgroundColor;
			background.style.height = '100%';
			background.style.width = '100%';
			background.style.borderRadius = '0';

			letter.innerHTML = key.toUpperCase();
			letter.style.opacity = 1;
			letter.style.color = letters[key.toLowerCase()].letterColor;
		}, 500);

		if (key === 'z') {
			sound.addEventListener('ended', () => {
				confetti = new ConfettiGenerator({
					target: 'confetti',
				});
				confetti.render();
			})
		}
	}
})();
