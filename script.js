//your JS code here. If required.
const btn = document.getElementById('submit');
     btn.addEventListener("click" , eventDetails);

function eventDetails(events) {
	event.preventDefault();

	const user = document.getElementById('username');
	const pass = document.getElementById('password');
	const  rememberMe = document.getElementById('checkbox').checked;
    const existingUserDiv = document.getElementById('existingUserDiv');
    const existingUserButton = document.getElementById('existing');

 if (rememberMe == true) {
 	localStorage.setItem('username',user.value);
	 localStorage.setItem('password',pass.value)
 } else{
	 localStorage.removeItem('username');
	 
	 localStorage.removeItem('password');
 }


	alert(`Logged in as ${user.value}`);
}
	window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername !== null && savedPassword !== null) {
        const existingButton = document.createElement('button');
        existingButton.id = 'existing';
        existingButton.innerText = 'Login as existing user';
        existingButton.addEventListener('click', function() {
            alert(`Logged in as ${savedUsername}`);
        });

        document.getElementById('form-group').appendChild(existingButton);
    }
};
 // existingUserButton.addEventListener('click', () => {
 //        const username = localStorage.getItem('username');
 //        alert(`Logged in as ${username}`);
 //    });
// alert(`Logged in as ${username}`)
