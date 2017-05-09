var file = {}
 file.dataTypes =  function (argument){
  
	// number check
	if (typeof(argument) === 'number') {
		if (argument < 100) {
			return 'less than 100';
		}
		else if (argument > 100) {
			return 'greater than 100';
		}
		else {
			return 'equal to 100';
		}
	}

	// string check
	else if (typeof(argument) === 'string') {
		return argument.length;
	}

	//function check
	else if (typeof(argument) === function() {}) {
		return argument(true);
	}

	// array check
	else if (typeof(argument) === 'object') {
		if (argument.length >= 3) {
			return argument[2];
		}
		return undefined;
	}

	// boolean check
	else if (typeof(argument) === 'boolean') {
		return argument;
	}
	else if ((input === null) ||(input === undefined)) {
    return "no value";
}
}
module.exports = file;