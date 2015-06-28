function carAge(obj) {
	var name = obj.make + " " + obj.model;
	var age = 2013 - obj.year;
	return "이 " + name + " 는 " + age + " 년 전에 생산되었습니다.";
};