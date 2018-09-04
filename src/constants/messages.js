/**
 * Defines Messages.
 */

var constants = {};
var speech = "";
var display = "";
var cardTitle = "";

speech = "There are no vehicles on your you connect account. Visit driveuconnect.com to learn more.";
display = "There are no vehicles on your Uconnect account. Visit driveuconnect.com to learn more.";
constants.NO_VEHICLES = buildMessage(speech, speech, display);

speech = "This service is not supported for your vehicle model.";
display = "This service is not supported for your vehicle model.";
constants.SERVICE_NOT_SUPPORTED_VEHICLE = buildMessage(speech, speech, display);

speech = "Connected services are not active on your vehicle. Please call you connect Access Care at 877-855-8400 for further assistance.";
display = "Connected services are not active on your vehicle. Please call Uconnect Access Care at 877-855-8400 for further assistance.";
constants.SERVICE_NOT_ENABLED = buildMessage(speech, speech, display);

speech = "That feature is not available on your vehicle, please try another command. If you are unsure, you may ask you connect for help to get a list of available commands.";
display = "That feature is not available on your vehicle, please try another command. If you are unsure, you may ask Uconnect for help to get a list of available commands.";
constants.VEHICLE_NOT_CAPABLE = buildMessage(speech, speech, display);

speech = "That feature is not available on your {vehicle}, please try another command. If you are unsure, you may ask you connect for help to get a list of available commands.";
display = "That feature is not available on your {vehicle}, please try another command. If you are unsure, you may ask Uconnect for help to get a list of available commands.";
constants.VEHICLE_CAPABILITY_NOT_SUPPORTED = buildMessage(speech, speech, display);

speech = "There is more than one vehicle in your account that matches this description. Please try again using the nickname for your vehicle. If you do not have a nickname, you can create one through the Uconnect mobile app or your account on Mopar.com.";
constants.MULTIPLE_VEHICLES = buildMessage(speech, speech, speech);

speech = "Around which vehicle do you want to search for {option}?";
constants.VEHICLE_CHOOSER = buildMessage(speech, speech, speech);

speech = "You can either say select one, or select option one, or choose one, or tap on a vehicle.";
constants.VEHICLE_CHOOSER_SUGGESTION = buildMessage(speech, speech, speech);

speech ="Select a vehicle to proceed.";
constants.VEHICLE_SELECT_PROCEED = buildMessage(speech, speech, speech);

speech = "I'm sorry that operation is not available at the moment, please try again in a few minutes.";
constants.SOMETHING_WENT_WRONG = buildMessage(speech, speech, speech);


/* RO */
cardTitle = "Remote Operation";

speech = "What is your Security PIN to {operation}?";
constants.ASK_PIN = buildMessage(speech, speech, speech, cardTitle);

speech = "Your {operation} command has been initiated.";
constants.RO_INITIATION_SUCCESS = buildMessage(speech, speech, speech, cardTitle);

speech = "Your {operation} command for {vehicle} has been initiated.";
constants.RO_INITIATION_SUCCESS_DISPLAY = buildMessage(speech, speech, speech, cardTitle);

speech = "Your request to intiate {operation} command could not be completed. Please try again.";
constants.RO_INITIATION_FAILED = buildMessage(speech, speech, speech, cardTitle);

speech = "Unable to execute the remote operation as it is not allowed for the vehicle.";
constants.RO_NOT_ALLOWED = buildMessage(speech, speech, speech, cardTitle);

speech = "You have exceeded the retry count, please re-link your you connect account. I have added a home card to your Alexa App.";
display = "You have exceeded the retry count, please re-link your Uconnect account. I have added a home card to your Alexa App.";
constants.INCORRECT_PIN_ATTEMPTS_EXCEEDED = buildMessage(speech, speech, display, cardTitle);

speech = "You have exceeded the retry count, please re-link your Uconnect account on the Uconnect action page in your Google Assistant App.";
display = "You have exceeded the retry count, please re-link your Uconnect account on the Uconnect action page in your Google Assistant App.";
constants.INCORRECT_PIN_ATTEMPTS_EXCEEDED_GOOGLE = buildMessage(speech, speech, display, cardTitle);

speech = "The pin you have provided is invalid. You have {attemptCount} attempt(s) left. What is your pin?";
constants.INCORRECT_PIN = buildMessage(speech, speech, speech, cardTitle);

speech = "Pin validation failed. Please try again.";
constants.PIN_VALIDATION_FAILED = buildMessage(speech, speech, speech, cardTitle);


/* Invalid Command */

speech = "I could not understand your command. You may ask you connect for help to get a list of available commands. What would you like to do?";
display = "I could not understand your command. You may ask Uconnect for help to get a list of available commands. What would you like to do?";
constants.INVALID_REQUEST = buildMessage(speech, speech, display, "Invalid Command");

speech = "I could not understand your command. Could you repeat that?";
display = "I could not understand your command. Could you repeat that?";
constants.REQUEST_TO_REPEAT = buildMessage(speech, speech, display, "Invalid Command");


/* Login  */
speech = "For security reasons, your you connect skill has been unlinked. Please link your you connect account. I have added a home card to your Alexa App.";
display = "For security reasons, your Uconnect skill has been unlinked. Please link your Uconnect account. I have added a home card to your Alexa App.";
constants.LOGIN_AGAIN = buildMessage(speech, speech, display, "Login");

speech = "For security reasons your Uconnect action has been unlinked, please relink your Uconnect account on the Uconnect action page in your Google Assistant App.";
display = "For security reasons your Uconnect action has been unlinked, please relink your Uconnect account on the Uconnect action page in your Google Assistant App.";
constants.LOGIN_AGAIN_GOOGLE = buildMessage(speech, speech, display, "Login");


/* Vehicle Status */
cardTitle = "Vehicle Status";

speech = "{operation} is {value}{unit}.";
constants.VEHICLE_STATUS = buildMessage(speech, speech, speech, cardTitle);

speech = 'To lock door of your car you can say "lock my car".';
constants.LOCK_SUGGESTION = buildMessage(speech, speech, speech, cardTitle);

speech = 'To unlock door of your car you can say "unlock my car".';
constants.UNLOCK_SUGGESTION = buildMessage(speech, speech, speech, cardTitle);

speech = 'To turn on your car you can say "turn on my car".';
constants.ENGINE_ON_SUGGESTION = buildMessage(speech, speech, speech, cardTitle);

speech = 'To turn off your car you can say "turn off my car".';
constants.ENGINE_OFF_SUGGESTION = buildMessage(speech, speech, speech, cardTitle);

speech = 'It is recommended to fill up gas in your car.';
constants.FUEL_LEVEL_SUGGESTION = buildMessage(speech, speech, speech, cardTitle);

speech = 'It is recommended to refill oil in your car.';
constants.OIL_LEVEL_SUGGESTION = buildMessage(speech, speech, speech, cardTitle);

speech = "Tire pressure status for all tires are normal"
constants.TIRE_PRESSURE_NORMAL = buildMessage(speech, speech, speech, cardTitle);

speech = "Front left tire is {tirestatus}"
constants.TIRE_PRESSURE_F_L = buildMessage(speech, speech, speech, cardTitle);

speech = "Front Right tire is {tirestatus}"
constants.TIRE_PRESSURE_F_R = buildMessage(speech, speech, speech, cardTitle);

speech = "Rear left tire is {tirestatus}"
constants.TIRE_PRESSURE_R_L = buildMessage(speech, speech, speech, cardTitle);

speech = "Rear right tire is {tirestatus}"
constants.TIRE_PRESSURE_R_R = buildMessage(speech, speech, speech, cardTitle);

speech = "Requested data not found"
constants.ERROR_UNABLE_TO_FETCH_VEHICLE = buildMessage(speech, speech, speech, cardTitle);


/* SDV  */

cardTitle = "Point Of Interest";
speech = "Nearby point of interest not found.";
constants.NO_POIS_NEARBY = buildMessage(speech, speech, speech, cardTitle);

speech = "Unable to find the destination. Please try with another favorite or address.";
constants.NO_POIS_TEXT_SEARCH = buildMessage(speech, speech, speech, cardTitle);

speech = "Could not send destination.";
constants.SDV_FAILED = buildMessage(speech, speech, speech, cardTitle);

speech = "Thank You.";
constants.SDV_OP_DECLINED = buildMessage(speech, speech, speech, cardTitle);

speech = "Thank You.";
constants.SDV_FAV_DECLINED = buildMessage(speech, speech, speech, cardTitle);

speech = "Favorites name already exists. Please provide another favorite name.";
constants.SDV_FAV_NAME_ALREADY_EXISTS = buildMessage(speech, speech, speech, cardTitle);

speech = "You have exceeded the maximum retry limit. Thank you!";
constants.SDV_FAV_NAME_ATTEMPTS_EXCEEDED = buildMessage(speech, speech, speech, cardTitle);

speech = "Unable to find your vehicle location at this time. Please try again later.";
constants.SDV_VEHICLE_LOCATION_NOT_FOUND = buildMessage(speech, speech, speech, cardTitle);

speech = "Your destination is approximately {distance} Miles away. Do you want to send {address} to your {vehicle}?";
constants.SDV_TEXT_SEARCH_POI_FOUND = buildMessage(speech, speech, speech, cardTitle);

speech = "Do you want to send {address} to your {vehicle}?";
constants.SDV_TEXT_SEARCH_POI_FOUND_NO_DISTANCE = buildMessage(speech, speech, speech, cardTitle);

speech = "Closest {searchTerm} is {businessName} at {address} approximately {distance} Miles away. Do you want to send destination to {vehicle}?";
constants.SDV_NEARBY_POI_FOUND = buildMessage(speech, speech, speech, cardTitle);

speech = "Here are a few Points of interest found near your vehicle. Please select a destination.";
constants.SDV_TEXT_SEARCH_POIS_FOUND = buildMessage(speech, speech, speech, cardTitle);

speech = "Here are a few Points of interest found near your vehicle. Please select a destination.";
constants.SDV_NEARBY_POIS_FOUND = buildMessage(speech, speech, speech, cardTitle);

speech = "Your destination address is sent to {vehicle}.";
constants.SDV_SUCCESS = buildMessage(speech, speech, speech, cardTitle);

speech = "Your destination address is sent to {vehicle}. Do you want to add the address to your Favorites?";
constants.SDV_ADD_FAV_REQUEST = buildMessage(speech, speech, speech, cardTitle);

speech = "Please provide the name for your destination to add it to your favorites. Please say something like 'Favorite name is Home', for adding it to your favorite";
constants.SDV_ASK_FAV_NAME = buildMessage(speech, speech, speech, cardTitle);

speech = "Unable to recognize the favorite name. Please provide the favorite name.";
constants.SDV_ASK_FAV_NAME_REQUEST = buildMessage(speech, speech, speech, cardTitle);

speech = "You need to send the destination first before adding to Favorites.";
constants.SDV_WARN_ADD_FAV = buildMessage(speech, speech, speech, cardTitle);

speech = "Your address is added to your favorite list.";
constants.SDV_FAV_ADDED = buildMessage(speech, speech, speech, cardTitle);

speech = "Your favorites are {favoriteList}";
constants.SDV_FAV_LIST = buildMessage(speech, speech, speech, cardTitle);

speech = "You have not set any favorites";
constants.SDV_NO_FAV_LIST = buildMessage(speech, speech, speech, cardTitle);


/* UTTERANCES */

speech = "You can say ";
constants.UTTERANCE_SUGGESTION = buildMessage(speech, speech, speech);

speech = "What is the {operation} of my {vehicle}";
constants.UTTERANCE_SUGGESTION_VEHICLE_STATUS = buildMessage(speech, speech, speech);

speech = "{operation} my {vehicle}";
constants.UTTERANCE_SUGGESTION_REMOTE_OPERATION = buildMessage(speech, speech, speech);

speech = "Activate {operation} for my {vehicle}";
constants.UTTERANCE_SUGGESTION_HORNS_AND_LIGHTS = buildMessage(speech, speech, speech);

speech = "Send {searchTerm} to my {vehicle}";
constants.UTTERANCE_SUGGESTION_SDV_SEND_FAV = buildMessage(speech, speech, speech);

speech = "Locate destination for {vehicle}";
constants.UTTERANCE_SUGGESTION_SDV_LOCATE_DEST = buildMessage(speech, speech, speech);

speech = ". What would you like to do?";
constants.SUGGESTION_QUESTION = buildMessage(speech, speech, speech);


/* HELP */

cardTitle = "Help";
speech = "Welcome to Help. The following are your options - say \"Help for remote operation\" or \"Help for vehicle status\" or \"Help for point of interest\"";
constants.HELP_WELCOME_TEXT = buildMessage(speech, speech, speech, cardTitle);

speech = 'To start your vehicle say "Start my car", To turn off your vehicle say  "Turn off my car", To lock your vehicle say "Lock my car", To unlock your vehicle say "Unlock my car", To activate horns and lights of your vehicle say "Activate the horns and lights on my car", To repeat say "Help for Remote Operation", What would you like to do?';
constants.HELP_REMOTE_OPERATION = buildMessage(speech, speech, speech, cardTitle);

speech = 'To get door status you can say "What is the door status of my car", To get engine status you can say "What is the engine status of my car", To get fuel level you can say "What is the fuel level of my car", To get remaining oil life you can say "What is the oil life of my car", To get tire pressure status you can say "What is the tire pressure of my car", To repeat say "Help for Vehicle Status", What would you like to do?';
constants.HELP_VEHICLE_STATUS = buildMessage(speech, speech, speech, cardTitle);

speech = 'To search for a point of interest, you may say something like "Find the closest coffee shop".  To send your address to vehicle, you may say something like "send 123 Main Street U.S.A. to my car".  To send your favorite destination to your vehicle, you may say something like "Send home to my car".  To repeat say "Help for Point of interest", What would you like to do?';
constants.HELP_POI = buildMessage(speech, speech, speech, cardTitle);

speech = 'To start your vehicle say "Start my car". What would you like to do?';
constants.HELP_REMOTE_START = buildMessage(speech, speech, speech, cardTitle);

speech = 'To stop your vehicle say "Turn off my car". What would you like to do?';
constants.HELP_REMOTE_STOP = buildMessage(speech, speech, speech, cardTitle);

speech = 'To lock your vehicle say "Lock my car". What would you like to do?';
constants.HELP_REMOTE_LOCK = buildMessage(speech, speech, speech, cardTitle);

speech = 'To unlock your vehicle say "Unlock my car". What would you like to do?';
constants.HELP_REMOTE_UNLOCK = buildMessage(speech, speech, speech, cardTitle);

speech = 'To activate horns and lights of your vehicle say "Activate the horns and lights on my car". What would you like to do?';
constants.HELP_HORNS_N_LIGHTS = buildMessage(speech, speech, speech, cardTitle);

speech = 'To get door status you can say "What is the door status of my car". What would you like to do?';
constants.HELP_DOOR_STATUS = buildMessage(speech, speech, speech, cardTitle);

speech = 'To get engine status you can say "What is the engine status of my car". What would you like to do?'; 
constants.HELP_ENGINE_STATUS = buildMessage(speech, speech, speech, cardTitle);

speech = 'To get fuel level you can say "What is the fuel level of my car". What would you like to do?';
constants.HELP_FUEL_LEVEL = buildMessage(speech, speech, speech, cardTitle);

speech = 'To get remaining oil life you can say "What is the oil life of my car". What would you like to do?';
constants.HELP_OIL_LIFE = buildMessage(speech, speech, speech, cardTitle);

speech = 'To get tire pressure status you can say "What is the tire pressure of my car". What would you like to do?';
constants.HELP_TIRE_PRESSURE = buildMessage(speech, speech, speech, cardTitle);

speech = 'What would you like to do?'
constants.USER_CHOICE = buildMessage(speech, speech, speech, cardTitle);

speech = "Goodbye";
constants.CANCEL = buildMessage(speech, speech, speech);

speech = 'Welcome to you connect. You can say help to get a list of commands.  What would you like to do?';
display = 'Welcome to Uconnect. You can say help to get a list of commands.  What would you like to do?';
constants.WELCOME = buildMessage(speech, speech, display, "Welcome");

function buildMessage(speech, repromptSpeech, display, cardTitle = "") {

    return {
        SPEECH: speech,
        REPROMPT_SPEECH: repromptSpeech,
        DISPLAY: display,
        TITLE: cardTitle
    };
}

module.exports = Object.freeze(constants);