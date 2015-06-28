function carAvgAge(obj) {
	var age,
		ageTotal = 0;
	for (var i = 0; i < obj.length; i++) {
		age = 2013 - obj[i].year;
		ageTotal = ageTotal + age;
	};
	return ageTotal / obj.length;
};