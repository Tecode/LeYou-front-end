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
					coverImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503722945921&di=cc4cfb46bb9b08f3f20a481b7de8ac16&imgtype=0&src=http%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0031%2F2017-03-03%2FCEITI5KQ4UUJ0031.jpg',
					link: 'https://www.soscoon/game/1222'
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