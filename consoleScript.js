function resetConsole(value){
	document.getElementById("textfield").value = "";
	document.getElementById("consoleOutput").value += ("[1527 ~] " +value+"\n");
}

function clearCommand(){
	document.getElementById("consoleOutput").value = "";
}

function helloCommand(){
	document.getElementById("consoleOutput").value += ("[1527 ~] hello world");
	document.getElementById("consoleOutput").value += "\n";
}

function helpCommand(){
	document.getElementById("consoleOutput").value += ("[1527 ~] Please see your training manual for reference.");
	document.getElementById("consoleOutput").value += "\n";
}

function openPipelineCommand(){
	document.getElementById("consoleOutput").value += ("[1527 ~] Initializing virtual desktop");
	animateLoading();
	setTimeout( function() { document.getElementById("consoleOutput").value += ("\n"); }, 3200 );
	setTimeout( function() { document.getElementById("consoleOutput").value += ("\n"); }, 4001 );
	setTimeout( function() { document.getElementById("consoleOutput").value += ("[1527 ~] Load complete. Launching transfer to remote desktop"); }, 4000 );
	setTimeout( function() { window.location.href = "./nathan.html"}, 4500 );
}

function overrideCommand(){
	document.getElementById("consoleOutput").value += ("[1527 ~] Pipe override accepted.");
	document.getElementById("consoleOutput").value += "\n";
	setTimeout( function() { document.getElementById("consoleOutput").value += ("[1527 ~] Securing Connection."); }, 1000 );
	animateLoading();
	setTimeout( function() { document.getElementById("consoleOutput").value += ("\n"); }, 3200 );
	setTimeout( function() { document.getElementById("consoleOutput").value += ("\n"); }, 4001 );
	setTimeout( function() { document.getElementById("consoleOutput").value += ("[1527 ~] Load complete."); }, 4000 );
	setTimeout( function() { window.location.href = "./ally.html"}, 4500 );
}

function permissionStatusCommand(){
	document.getElementById("consoleOutput").value += ("[1527 ~] Permission Status: "+PERMISSION_STATUS);
	document.getElementById("consoleOutput").value += "\n";
}

function invalidCommand(value){
	document.getElementById("consoleOutput").value += ("[1527 ~] ERROR: Invalid Command '"+value+"'");
	document.getElementById("consoleOutput").value += "\n";
}

function confirmOpen(value){
	document.getElementById("consoleOutput").value += ("[1527 ~] You have requested to open the SecureNetwork pipeline. Are you ready? Y/N \n");
}
function handleConfirmResponse(value){

}

function decryptEmail(){
	if(completedWork == false){
		document.getElementById("consoleOutput").value += ("[1527 ~] Error: Invalid Permissions\n");
	}
	else {
		document.getElementById("consoleOutput").value += ("[1527 ~] Attempting to decrypt");
		animateLoading();
		setTimeout( function() { document.getElementById("consoleOutput").value += "\nDecryption Successful\n" }, 3600 );
		decodedEmail = true;
	}
}

function beginExtract(value){
	document.getElementById("consoleOutput").value += ("[1527 ~] " +"LOADING...\n");
}

function animateLoading(){
	setTimeout( function() { document.getElementById("consoleOutput").value += ("."); }, 1600 );
	setTimeout( function() { document.getElementById("consoleOutput").value += ("."); }, 2400 );
	setTimeout( function() { document.getElementById("consoleOutput").value += ("."); }, 3200 );
}



function handleDefaultInput(value){

		
}