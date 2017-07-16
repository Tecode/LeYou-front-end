import axios from 'axios';

// 拦截请求
axios.interceptors.response.use(function (response) {
	// console.log(response.data, '---------------');
	// Do something with response data
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});

export const loginRequestApi = (param) => {
	return axios.post('/application/api/login', param);
};
export const registerRequestApi = (param) => {
	return axios.post('/application/api/register', param);
};
//获取文章列表
export const getArticelListApi = ({index, size}) => {
	return axios.get('/application/api/getArticel', {params:{index :index, size: size}});
};
// 获取文章api
export const getArticelApi = (id, param) => {
	return axios.get(`/application/api/getArticel/${id}`, param);
};
export const getUserInfoApi = (param) => {
	return axios.get('/application/api/userInfo');
};
