//your JS code here. If required.
const btn = document.getElementById('submit');
     btn.addEventListener("click" , eventDetails);

function eventDetails(events) {
	event.preventDefault();

	const user = document.getElementById('username');
	const pass = document.getElementById('password');
	const  rememberMe = document.getElementById('checkbox').checked;

 if (rememberMe == true) {
 	localStorage.setItem('username',user.value);
	 localStorage.setItem('password',pass.value)
 } else{
	 localStorage.removeItem('username');
	 
	 localStorage.removeItem('password');
 }


	alert(`Logged in as ${user.value}`);
}
	// alert(`Logged in as ${username}`)
