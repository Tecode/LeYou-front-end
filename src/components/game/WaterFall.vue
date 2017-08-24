<template>
    <div class="water_fall_container"></div>
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
			generate();
			const scrollFn = () => {
				const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if (document.documentElement.scrollHeight === document.documentElement.clientHeight + scrollTop) {
					console.log(document.documentElement.clientHeight + scrollTop, document.documentElement.scrollHeight - 200, '----------');
					generate();
				}
			};
			window.addEventListener("scroll", scrollFn, false);
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
</style>