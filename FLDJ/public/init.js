window.onload = function() {
	controller.axios = axios.create({ baseURL: "http://localhost:3001/api" });
	controller.view = view;
	
}
