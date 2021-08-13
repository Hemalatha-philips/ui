export const  setCookie = (name,value,days) => {
	let expires = "";
	if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export const deleteCookie = (name) => {
	let expires = "";
	const date = new Date();
	date.setTime(date.getTime() - (2*24*60*60*1000));
	expires = "; expires=" + date.toUTCString();

	document.cookie = name + "="   + expires + "; path=/";
}


export const getCookie = (name) => {
	const nameEQ = name + "=";
	const ca = document.cookie.split(';');
	for(let i=0;i < ca.length;i++) {
			let c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

// setCookie("user_email","bobthegreat@gmail.com",30); //set "user_email" cookie, expires in 30 days
// const userEmail=getCookie("user_email");//"bobthegreat@gmail.com"