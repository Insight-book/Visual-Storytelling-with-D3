function carAge(obj) {
	var name = obj.make + " " + obj.model;
	var age = 2013 - obj.year;
	if (age == 0) {
		return "이 " + name + " 는 새 차입니다!";
	}
	else if (age == 1) {
		return "이 " + name + " 는 작년에 생산되었습니다.";
	}
	else {
		return "이 " + name + " 는 " + age + " 년 전에 생산되었습니다.";
	}
};