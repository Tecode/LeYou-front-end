import {SET_INDEX_SIZE} from '../actionTypes';

const Ui = {
	state: {
		index: 1,
		size: 10,
	},
	mutations: {
		[SET_INDEX_SIZE](state, {index, size}){
			state.index = index;
			state.size = size;
		}
	}
};

export default Ui;