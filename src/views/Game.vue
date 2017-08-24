<template>
    <water-fall></water-fall>
</template>

<script>
	import WaterFall from '../components/game/WaterFall.vue';

	export default {
		name: 'app',
		components: {
			WaterFall,
		},
		data () {
			return {
				loading: true,
			}
		},
		methods: {}
	}
</script>

<style scoped lang="less">

</style>
