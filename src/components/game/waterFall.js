import Bricks from 'bricks.js';

const gregenerateat = () => {
	const container = document.querySelector('.water_fall_container');
	// insert 100 divs with same width, but random height
	for (let i = 0; i < 20; i++) {
		const div = document.createElement('div');
		div.classList.add('box');
		div.style.width = '200px';
		div.style.height = Math.round(Math.random() * 400) + 'px';
		container.appendChild(div)
	}
	const instance = Bricks({
		container: '.water_fall_container',
		packed: 'data-packed',
		position:  true,
		sizes: [
			{ columns: 4, gutter: 20 },
			{ mq: '414px', columns: 1, gutter: 10 },
			{ mq: '640px', columns: 2, gutter: 15 },
			{ mq: '800px', columns: 2, gutter: 15 },
			{ mq: '1024px', columns: 4, gutter: 15 },
			{ mq: '1280px', columns: 4, gutter: 10 },
			{ mq: '1366px', columns: 5, gutter: 15 },
			{ mq: '1440px', columns: 5, gutter: 30 },
			{ mq: '1980px', columns: 5, gutter: 40 }
		]
	})
	.resize(true)
	.pack()
};
export default gregenerateat;