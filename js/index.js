'use strict'

document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);window


	async function formSend(e){
		e.preventDefault();

		let err = formValidate(form);
	}

	function formValidate(form){
		let err = 0;
		let formReq = document.querySelectorAll('._req');
	}
})