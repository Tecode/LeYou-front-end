import {
	SET_LIST_ARTICLE_DATA,
	SET_ARTICLE_DATA,
	GET_LIST_ARTICLE_DATA,
	GET_ARTICLE_DATA,
	GET_SEARCH_DATA
} from '../actionTypes';
import {getArticelListApi, getArticelApi, searchArticelListApi} from '../../api';
import moment from 'moment';

const Article = {
	state: {
		dataList: '',
		total: 0,
		articelData: {},
	},
	mutations: {
		[SET_LIST_ARTICLE_DATA](state, {dataList, total}){
			state.dataList = dataList;
			state.total = total;
		},
		[SET_ARTICLE_DATA](state, {articelData}){
			state.articelData = articelData;
		}
	},
	actions: {
		[GET_LIST_ARTICLE_DATA]({state, commit, rootState}, {index, size}){
			commit('SET_LIST_ARTICLE_DATA', {dataList: [], total: 0});
			getArticelListApi({index, size})
			.then((response) => {
				let newArr = [];
				response.data.data.forEach((item) => {
					item['month'] = moment.unix(item.time).format('MMM');
					item['day'] = moment.unix(item.time).format('DD');
					item['type'] = item['type'].split('，');
					newArr = [...newArr, item]
				});
				commit('SET_LIST_ARTICLE_DATA', {dataList: newArr, total: response.data.total});
			})
			.catch((err) => {
				commit('SHOW_MESSAGE', {
					text: err.response.data.msg,
					button: false,
					isError: true,
					isShow: true
				})
			})
		},
		[GET_ARTICLE_DATA]({state, commit, rootState}, id) {
			getArticelApi(id).then((res) => {
				commit('SET_ARTICLE_DATA', {articelData: res.data.data});
			}).catch((err) => {
				console.log(err);
			})
		},
		// 获取搜索结果
		[GET_SEARCH_DATA]({state, commit, rootState}, {keyWords, index, size}){
			commit('SET_LIST_ARTICLE_DATA', {dataList: [], total: 0});
			searchArticelListApi({keyWords, index, size})
			.then((response) => {
				let newArr = [];
				response.data.data.forEach((item) => {
					item['month'] = moment.unix(item.time).format('MMM');
					item['day'] = moment.unix(item.time).format('DD');
					item['type'] = item['type'].split('，');
					newArr = [...newArr, item]
				});
				commit('SET_LIST_ARTICLE_DATA', {dataList: newArr, total: response.data.total});
			})
			.catch((err) => {
				commit('SHOW_MESSAGE', {
					text: err.response.data.msg,
					button: false,
					isError: true,
					isShow: true
				})
			})
		}
	}
};

export default Article;