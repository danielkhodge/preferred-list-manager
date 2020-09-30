function successMessage(msg) {
	new Noty(
		{
			text: msg,
			theme: 'mint',
			timeout: 3000,
		    type: 'success'
    }).show();
}

function errorMessage(msg) {
	new Noty(
		{
			text: msg,
			theme: 'mint',
			timeout: 3000,
		    type: 'error'
    }).show();
}

function infoMessage(msg) {
	new Noty(
		{
			text: msg,
			theme: 'mint',
			timeout: 3000,
		    type: 'info'
    }).show();
}

function warningMessage(msg) {
	new Noty(
		{
			text: msg,
			theme: 'mint',
			timeout: 3000,
		    type: 'warning'
    }).show();
}

function alertMessage(msg) {
	new Noty(
		{
			text: msg,
			theme: 'mint',
			timeout: 3000,
		    type: 'alert'
    }).show();
}

function infoProgressMessage(msg, _timeout) {
	new Noty(
		{
			text: msg,
			progressBar: true,
			theme: 'mint',
			timeout: _timeout,
		    type: 'info'
    }).show();
}