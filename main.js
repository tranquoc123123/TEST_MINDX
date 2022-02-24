/**
 * 1.a
 * 
 * */
 function allLongerString(inputArray){
 	var longerlength = 0;
 	for (var i = inputArray.length - 1; i >= 0; i--) {
 		if (inputArray[i].length > longerlength) 
 			longerlength = inputArray[i].length;
 	}
 	var rtn=[];
 	for (var i = inputArray.length - 1; i >= 0; i--) {
 		if (inputArray[i].length == longerlength) 
 		{
 			rtn.push(inputArray[i]);
 		}
 	}
 	return rtn;
 }
// var names =['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'] ;
// var rtn1 =[];
// rtn1 = allLongerString(names)
// alert(rtn1);


/**
 * 1.b
 * 
 * */
 function alternatingSums(inputArray){
 	var rtn =[];
 	rtn[0] = 0;
 	rtn[1] = 0;
	var i = 0;
 	for ( i; i <= inputArray.length - 1; i++) {
 		console.log(i % 2);
 		if (i % 2 == 0) 
 			rtn[0] += inputArray[i];  	
 		else 
 			rtn[1] += inputArray[i];
 	}
 	return rtn;
 }

// var weigth = [60, 40, 55, 75, 64] ;
// var rtn2 =[];
// rtn2 = alternatingSums(weigth);
// alert(rtn2);




