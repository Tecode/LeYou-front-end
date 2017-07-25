import {
	INPUT_LIVING_MESSEGE,
	LIVING_MESSEGE_POST,
	CLEAN_DATA,
} from '../actionTypes';
import { Message } from 'element-ui';
import { leavingMessageApi } from '../../api';

const LivingMessege = {
	state: {
		messege: '',
	},
	mutations: {
		[INPUT_LIVING_MESSEGE](state, event){
			state.messege = event.target.value;
		},
		[CLEAN_DATA](state, {moudle, data}){
			state[moudle] = data;
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
				leavingMessageApi({name: rootState.NavHeader.userInfo.user_name, message: state.message}).then((response) => {
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
	}
};

export default LivingMessege;