import {
	INPUT_LIVING_MESSEGE,
	LIVING_MESSEGE_POST,
	CLEAN_DATA,
	REPLY_MESSEGE_INFO,
	REPLY_MESSEGE_POST,
	GET_MESSEGE_INFO_LIST
} from '../actionTypes';
import {Message} from 'element-ui';
import {
	leavingMessageApi,
	replyMessageApi,
	getLeavingMessageApi
} from '../../api';

const LivingMessege = {
	state: {
		messege: '',
		activeId: '',
		contentList: []
	},
	mutations: {
		[INPUT_LIVING_MESSEGE](state, event){
			state.messege = event.target.value;
		},
		[CLEAN_DATA](state, {moudle, data}){
			state[moudle] = data;
		},
		[REPLY_MESSEGE_INFO](state, id) {
			console.log(id);
			state.activeId = id;
		}
	},
	actions: {
		[LIVING_MESSEGE_POST]({state, commit, rootState}, value){
			console.log(rootState.NavHeader.userInfo.user_name);
			console.log(state.messege, state.messege === '');
			if (state.messege === '') {
				Message({
					showClose: false,
					message: '内容不能为空！',
					type: 'error'
				});
			} else if (state.messege.length > 200) {
				Message({
					showClose: false,
					message: '内容不能超过200个字符！',
					type: 'error'
				});
			} else {
				leavingMessageApi({
					name: rootState.NavHeader.userInfo.user_name,
					imgUrl: '',
					content: state.messege}).then((response) => {
					Message({
						showClose: false,
						message: '留言成功，谢谢！',
						type: 'success'
					});
					commit('TOGGLE_POPUP', {popupShow: false});
					commit('CLEAN_DATA', {moudle: 'messege', data: ''});
				}).catch((err) => {
					Message({
						showClose: false,
						message: err.response.data.messege,
						type: 'error'
					});
				})
			}
		},
		[REPLY_MESSEGE_POST]({state, commit, rootState}, {parentId, beAnswered}){
			if (state.messege === '') {
				Message({
					showClose: false,
					message: '内容不能为空！',
					type: 'error'
				});
			} else if (state.messege.length > 240) {
				Message({
					showClose: false,
					message: '内容不能超过240个字符！',
					type: 'error'
				});
			} else {
				replyMessageApi({
					name: rootState.NavHeader.userInfo.user_name,
					content: state.messege,
					parentId,
					beAnswered
				}).then((response) => {
					Message({
						showClose: false,
						message: '回复成功，谢谢！',
						type: 'success'
					});
					let newArr = [];
					state.contentList.forEach((item) => {
						if (item.id === parentId) {
							item.content.push(
							{
								id: response.data.id,
								name: response.data.name,
								imgUrl: '',
								messege: state.messege,
								dateTime: response.data.time,
							}
							);
						}
						newArr = [...newArr, item]
					});
					commit('CLEAN_DATA', {moudle: 'contentList', data: newArr});
					commit('CLEAN_DATA', {moudle: 'messege', data: ''});
					commit('CLEAN_DATA', {moudle: 'activeId', data: ''});
				}).catch((err) => {
					Message({
						message: err && err.response.data.msg,
						type: 'error'
					});
				})
			}
		},
		[GET_MESSEGE_INFO_LIST]({state, commit, rootState}, {index, size}) {
			console.log(index, size);
			getLeavingMessageApi({index, size})
			.then(({data}) => {
				commit('CLEAN_DATA', {moudle: 'contentList', data: data.data});
			})
			.catch((err) => {
				Message({
					showClose: false,
					message: err.response.data.msg,
					type: 'error'
				});
			})
		}
	}
};

export default LivingMessege;