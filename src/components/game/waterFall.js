import Bricks from 'bricks.js';

const gregenerateat = () => {
	const container = document.querySelector('.water_fall_container');
	const hightArr = [320, 340, 360];
	// insert 100 divs with same width, but random height
	for (let i = 0; i < 20; i++) {
		const div = document.createElement('div');
		div.setAttribute("class", "water_fall_container_box");
		div.style.backgroundImage = "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503722945921&di=cc4cfb46bb9b08f3f20a481b7de8ac16&imgtype=0&src=http%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0031%2F2017-03-03%2FCEITI5KQ4UUJ0031.jpg)";
		div.style.height = `${hightArr[Math.ceil(Math.random()*3) - 1]}px`;
		div.innerHTML= '<a href="#" target="_blank" class="water_fall_container_box_link">' +
		'<h3></h3>' +
		'<a href="#" target="_blank" class="water_fall_container_link text-center">开始游戏</a>' +
		'</a>';
		container.appendChild(div);
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