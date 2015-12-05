var animationLength = 100;
var animationStringLength = 100;

var metadataLoaded = 0;
var metadataAnimationLength = 200;

var metadata_array = [metadata1, metadata2];

var metadata1 = ["---------------------------------------------\n",
				 "---------------------------------------------\n",
				 "           CNP: 144.250.183.162\n\n",
				 "                  SMS\n",
				 "{\n\n",
				 "sent_at: 08-Dec-2014 11:33:42\n\n",
				 "carrier: lamix\n\n",
				 "location: USA\n\n",
				 "raw_text: 'hey mom, running late. don't get worried if I'm not home by midnight. love you'\n\n",
				 "}\n",
				 "---------------------------------------------\n",
				 "---------------------------------------------\n"];


var metadata2 = ["---------------------------------------------\n",
				 "---------------------------------------------\n",
				 "           CNP: 39.211.207.100\n\n",
				 "                  EMAIL\n",
				 "{\n\n",
				 "subject: 'I Love Our Government And So Should You'\n\n",
				 "sent_at: 24-Sep-2012\n\n",
				 "org_ip: 98.222.240.251\n\n",
				 "rec_ip: 44.262.207.72\n\n",
				 "user_address: jamiewinn@safecall\n\n",
				 "carrier_address: @safecall\n\n",
				 "raw_text: 'I love our government. They keep us safe night and day. I would never commit treason against the state! Will you join me in my love for our government? Glory to the ministry!'\n\n",
				 "}\n",
				 "---------------------------------------------\n",
				 "---------------------------------------------\n"];

var metadata3 = ["---------------------------------------------\n",
				 "---------------------------------------------\n",
				 "           CNP: 171.193.56.103\n\n",
				 "                  PHONE CALL\n",
				 "{\n\n",
				 "location: EUR\n\n",
				 "created_at: 14-Oct-2004 00:10:24\n\n",
				 "ended_at: 14-Oct-2004 00:11:37\n\n",
				 "channel: 6\n\n",
				 "number: 3-826-2607, 7-256-0594\n\n",
				 "carrier: safecall sonviait\n\n",
				 "raw_text: 'meet me at the town hall tonight. I've got the packet we can upload to the server. ", 
				 "That'll show those government fucks who to mess with. be careful man. ", 
				 "i saw a documentary on some new government program. ", 
				 "i heard they're snatching people left and right. shit's crazy. ", 
				 "bullshit. you think somebody got time to listen to us? just get to the town hall by 9pm. got it boss.'\n\n",
				 "}\n",
				 "---------------------------------------------\n",
				 "---------------------------------------------\n"];

var metadata4 = ["---------------------------------------------\n",
				 "---------------------------------------------\n",
				 "           CNP: 64.839.127.465\n\n",
				 "                 SMS\n",
				 "{\n\n",
				 "subject: '<No Subject>'\n\n",
				 "sent_at: 12-Mar-2013\n\n",
				 "org_ip: 98.222.240.251\n\n",
				 "rec_ip: 98.222.240.251\n\n",
				 "user_address: \n\n",
				 "carrier_address:\n\n",
				 "raw_text: 'Sam I'm \n\n",
				 "}\n",
				 "---------------------------------------------\n",
				 "---------------------------------------------\n"];

var metadata5 = ["---------------------------------------------\n",
				 "---------------------------------------------\n",
				 "           CNP: 83.276.457.539\n\n",
				 "               FILE TRANSFER\n",
				 "{\n\n",
				 "orig_ip: ''\n\n",
				 "rec_ip: \n\n",
				 "created_at: \n\n",
				 "format: \n\n",
				 "size: \n\n",
				 "raw_text: '110101101011010101010101101011011'\n\n",
				 "}\n",
				 "---------------------------------------------\n",
				 "---------------------------------------------\n"];


function handleGameInput(value){
	var textarea = document.getElementById("consoleOutput");
	switch(value){
		case 'bust':
			textarea.value += "\nBUSTED\n";
			textarea.scrollTop = textarea.scrollHeight;
			if(metadataLoaded == 3) {
				setTimeout( function() { clearCommand(); }, 6000);
				setTimeout( function() { textarea.value += "\nRequired Daily Extractions Complete. Exiting pipeline"; textarea.scrollTop = textarea.scrollHeight; }, 1500);
				animateLoading();
				setTimeout( function() { clearCommand()}, 9000);
				setTimeout( function() { textarea.value += "[1527 ~] Welcome, [EMPLOYEE-1527]!\n"}, 10000);
				setTimeout( function() { open_item("email_boss_2")}, 11000);
				pipelineOpen = false;
				completedWork = true;
				PERMISSION_STATUS = "SYSTEM_ADMIN_2";
				break;
			}
			setTimeout( function() { textarea.value += "\nLoading new pipeline data"; textarea.scrollTop = textarea.scrollHeight; }, 1500);
			animateLoading();
			setTimeout( function() { animatePipelineLoading(); }, 4500);
			break;
		case 'permit':
			textarea.value += "\nPERMITTED\n";
			textarea.scrollTop = textarea.scrollHeight;
			if(metadataLoaded == 3) {
				setTimeout( function() { clearCommand(); }, 6000);
				setTimeout( function() { textarea.value += "\nRequired Daily Extractions Complete. Exiting pipeline"; textarea.scrollTop = textarea.scrollHeight; }, 1500);
				animateLoading();
				setTimeout( function() { clearCommand()}, 9000);
				setTimeout( function() { textarea.value += "[1527 ~] Welcome, [EMPLOYEE-1527]!\n"}, 10000);
				setTimeout( function() { open_item("email_boss_2")}, 11000);
				pipelineOpen = false;
				completedWork = true;
				PERMISSION_STATUS = "SYSTEM_ADMIN_2";
				break;
			}
			setTimeout( function() { textarea.value += "\nLoading new pipeline data"; textarea.scrollTop = textarea.scrollHeight; }, 1500);
			animateLoading();
			setTimeout( function() { animatePipelineLoading(); }, 4500);
			break;
			break;
	}
}

function getRandomString(stringLength){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < stringLength; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function loadMetadata(metadata_position){
	var metadata = metadata_array[metadata_position];

	switch(metadata_position){
		case 0:
			metadata = metadata1;
			break;
		case 1:
			metadata = metadata2;
			break;
		case 2:
			metadata = metadata3;
			break;
		case 3:
			metadata = metadata4;
			break;
		case 4:
			metadata = metadata5;
			break;

	}
	var loadDelay = 1400;
	var textarea = document.getElementById("consoleOutput");
	for(var i = 0; i < metadata.length; ++i){
		textarea.value += metadata[i];
		//textarea.scrollTop = textarea.scrollHeight;	
	}
	metadataLoaded++;
}


function animatePipelineLoading(){
	var loadDelay = 2000;
	var textarea = document.getElementById("consoleOutput");
	clearCommand();
	setTimeout( function() { textarea.value += ("Retrieving packet " + getRandomString(animationStringLength)); }, 800 );
	setTimeout( function() { textarea.value += ("\nExtracting packet "); }, 1400 );
	for (var i = 0; i < animationLength; ++i){
		setTimeout( function() { 
			textarea.value += (getRandomString(animationStringLength*Math.random())+"\n");
			textarea.scrollTop = textarea.scrollHeight;}, loadDelay );
		loadDelay = loadDelay + (40*Math.random());
	}
	setTimeout( function() { clearCommand(); }, loadDelay+500);
	setTimeout( function() { loadMetadata(metadataLoaded); }, loadDelay+1000);
}

function animateArrested(){
	
}


                                                             
                                                             