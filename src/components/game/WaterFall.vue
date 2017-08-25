<template>
    <div>
        <div class="water_fall_container"></div>
        <div class="add_more_button text-center">
            <span @click="">加载更多内容...</span>
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
		methods: {
        },
		mounted: function () {
			generate();
		}
	}
</script>

<style lang="less">
    .water_fall_container {
        margin: 50px auto 40px auto;
        transition: all .3s;
        .box {
            width: 200px;
            background-color: #3d1e37;
        }
    }
    .add_more_button{
        margin: 30px 0;
        position: relative;
        &:before{
            width: 22%;
            top: 19px;
            display: block;
            position: absolute;
            content: "";
            border-top: 1px solid #ededed;
            left: 0;
        }
        &:after{
            display: block;
            position: absolute;
            width: 22%;
            top: 19px;
            content: "";
            border-top: 1px solid #ededed;
            right: 0;
        }
        span{
            display: inline-block;;
            padding: 10px;
            width: 49%;
            background-color: #f7f7f7;
            cursor: pointer;
            color: #999;
            transition: all .3s;
            &:hover{
                background-color: #dedede;
            }
        }
    }
</style>