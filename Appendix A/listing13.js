function carAge(obj) {
	var name = obj.make + " " + obj.model;
	var age = 2013 - obj.year;
	if (age == 0) {
		return "�� " + name + " �� �� ���Դϴ�!";
	}
	else if (age == 1) {
		return "�� " + name + " �� �۳⿡ ����Ǿ����ϴ�.";
	}
	else {
		return "�� " + name + " �� " + age + " �� ���� ����Ǿ����ϴ�.";
	}
};