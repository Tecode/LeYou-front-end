<template>
    <div class="discover_contens">
        <no-data-text v-if="dataList === ''"></no-data-text>
        <animation-one v-if="dataList !== '' && dataList.length === 0"></animation-one>
        <div>
            <single-item
                    v-if="dataList.length > 0"
                    v-for="item in dataList"
                    :key="item.aid"
                    :item="item"></single-item>
        </div>
        <div class="page-pagination text-center">
            <el-pagination
                    layout="prev, pager, next"
                    v-if="total > 10"
                    @current-change="changePage"
                    :page-size="10"
                    :current-page="index"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
	import NoDataText from '../common/NoDataText.vue';
	import AnimationOne from '../animation/AnimationOne.vue';
	import SingleItem from '../common/SingleItem.vue';
	import {mapMutations, mapState, mapActions} from 'vuex';
	export default {
		components: {
			NoDataText,
			AnimationOne,
			SingleItem
		},
		name: 'comment',
		props: ['id'],
		computed: {
			...mapState({
				dataList: state => state.Article.dataList,
				total: state => state.Article.total,
				index: state => state.Ui.index,
				size: state => state.Ui.size,
			}),
		},
		methods: {
			changePage: function (val) {
				this.setIndexSize({index: val, size: 10});
//				this.getArticleList({
//					index: this.index,
//					size: this.size,
//				});
			},
			...mapMutations({
				setIndexSize: 'SET_INDEX_SIZE',
			}),
			...mapActions({
				getArticleList: 'GET_LIST_ARTICLE_DATA',
			})
		},
		beforeDestroy: function () {
			this.setIndexSize({index: 1, size: 10});
		}
	}
</script>

<style lang="less">
    .discover_contens {

    }
</style>
