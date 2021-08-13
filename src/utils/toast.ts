import { toast } from "react-toastify";

export const showToast = (type) => {
	if(type === 0){
		toast.error("Error", {
			position: "top-right",
			autoClose: 500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	}else{
		toast.success("Success", {
			position: "top-right",
			autoClose: 500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	}
	
}