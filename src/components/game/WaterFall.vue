<template>
    <div>
        <div class="water_fall_container"></div>
        <div class="add_more_button text-center">
            <span @click="">没有更多内容了...</span>
        </div>
    </div>
</template>

<script>
	import generate from './waterFall';
	export default {
		name: 'app',
		components: {},
		data() {
			return {
				fixed: false
			}
		},
		methods: {},
		mounted: function () {
			const gameArr = [
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503731010567&di=355584be17235e597dc02f0dd1e25d7a&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fdown%2FUploadPic%2F2016-6%2F20166289555238621.jpg',
					link: '/games/test_derailed/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503731420627&di=55c71746b6226fc31364544ad634a174&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fmiddle%2F4dd31e07g9ed6e6d15693%26690',
					link: '/games/game_paper_plane/'
				},

				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503732660672&di=d85b6f03c7262d33311ea3aa62b81ae3&imgtype=0&src=http%3A%2F%2Fwww.gameres.com%2Fdata%2Fattachment%2Fforum%2F201607%2F19%2F1719540mx58ojgzr266gd9.jpg',
					link: '/games/game_jump_dog/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503733677369&di=5b727135f323871b19f7bfa3d58a95a4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c131579068570000012e7e4808df.jpg',
					link: '/games/test_childhood/'
				},

				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503731010567&di=355584be17235e597dc02f0dd1e25d7a&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fdown%2FUploadPic%2F2016-6%2F20166289555238621.jpg',
					link: '/games/test_derailed/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503722945921&di=cc4cfb46bb9b08f3f20a481b7de8ac16&imgtype=0&src=http%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0031%2F2017-03-03%2FCEITI5KQ4UUJ0031.jpg',
					link: '/games/test_derailed/'
				},

				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503731010567&di=355584be17235e597dc02f0dd1e25d7a&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fdown%2FUploadPic%2F2016-6%2F20166289555238621.jpg',
					link: '/games/test_derailed/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503722945921&di=cc4cfb46bb9b08f3f20a481b7de8ac16&imgtype=0&src=http%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0031%2F2017-03-03%2FCEITI5KQ4UUJ0031.jpg',
					link: '/games/test_derailed/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503731010567&di=355584be17235e597dc02f0dd1e25d7a&imgtype=0&src=http%3A%2F%2Fimg.smzy.com%2Fdown%2FUploadPic%2F2016-6%2F20166289555238621.jpg',
					link: '/games/test_derailed/'
				},
				{
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503722945921&di=cc4cfb46bb9b08f3f20a481b7de8ac16&imgtype=0&src=http%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0031%2F2017-03-03%2FCEITI5KQ4UUJ0031.jpg',
					link: '/games/test_derailed/'
				}
			];
			generate(gameArr);
		}
	}
</script>

<style lang="less">
    .water_fall_container {
        margin: 50px auto 40px auto;
        transition: all .3s;
        position: relative;
        .water_fall_container_box {
            width: 200px;
            background-color: #3d1e37;
            background-size: cover;
            background-position: center center;
            box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.22);
            transition: all .3s;
            &:hover {
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
            }
        }
        .water_fall_container_box_link {
            display: block;
            height: 100%;
        }
        .water_fall_container_link {
            background-color: #fed919;
            display: block;
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            color: #223343;
            transition: all .3s;
            padding: 8px 0;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }

    .add_more_button {
        margin: 30px 0;
        position: relative;
        &:before {
            width: 22%;
            top: 19px;
            display: block;
            position: absolute;
            content: "";
            border-top: 1px solid #ededed;
            left: 0;
        }
        &:after {
            display: block;
            position: absolute;
            width: 22%;
            top: 19px;
            content: "";
            border-top: 1px solid #ededed;
            right: 0;
        }
        span {
            display: inline-block;;
            padding: 10px;
            width: 49%;
            background-color: #f7f7f7;
            cursor: pointer;
            color: #999;
            transition: all .3s;
            &:hover {
                background-color: #dedede;
            }
        }
    }
</style>