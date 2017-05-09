

var file ={};

file.findMinMax(arr) {
	var minimum = arr[0];
	var maximum = arr[0];
	var newArr = [];
	for (var count = 0; count <= arr.length-1; count++) {
		if (minimum > arr[count]) {
			minimum = arr[count];
		}
		if (maximum < arr[count]) {
			maximum = arr[count];
		}
	}
  if (minimum === maximum) {
	 	newArr.push(minimum);
	 }
	else {
	 	newArr.push(minimum);
	 newArr.push(maximum);
}
	return newArr;
	 }
	 