// //your JS code here. If required.
// const btn = document.getElementById('submit');
//      btn.addEventListener("click" , eventDetails);

// function eventDetails(events) {
// 	event.preventDefault();

// 	const user = document.getElementById('username');
// 	const pass = document.getElementById('password');
// 	const  rememberMe = document.getElementById('checkbox').checked;
//     const existingUserDiv = document.getElementById('existingUserDiv');
//     const existingUserButton = document.getElementById('existing');

//  if (rememberMe ) {
//  	localStorage.setItem('username',user.value);
// 	 localStorage.setItem('password',pass.value)
//  } 
// 	onst existingButton = document.createElement('button');
//         existingButton.id = 'existing';
//         existingButton.innerText = 'Login as existing user';
//         existingButton.addEventListener('click', function() {
//             alert(`Logged in as ${user.value}`);
//         });

//         document.getElementById('form-group').appendChild(existingButton);
//     } else {
//         localStorage.removeItem('username');
//         localStorage.removeItem('password');
//     }
//  // else{
// 	//  localStorage.removeItem('username');
	 
// 	//  localStorage.removeItem('password');
//  // }


// 	alert(`Logged in as ${user.value}`);
// }
const btn = document.getElementById('submit');
btn.addEventListener("click", eventDetails);

function eventDetails(event) {
    event.preventDefault();

    const user = document.getElementById('username');
    const pass = document.getElementById('password');
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('username', user.value);
        localStorage.setItem('password', pass.value);

        const existingButton = document.createElement('button');
        existingButton.id = 'existing';
        existingButton.innerText = 'Login as existing user';
        existingButton.addEventListener('click', function() {
            alert(`Logged in as ${user.value}`);
        });

        document.getElementById('form-group').appendChild(existingButton);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${user.value}`);
}