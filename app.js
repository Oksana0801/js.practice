class God {
	static create() {
		return [
			new	Man('Adam'),
			new Woman('Eva')
		];
	}
}

class Human {
	constructor(name) {
		this.name = name;
	}
}

class Man extends Human {
	constructor(name) {
		super(name);
	}
}

class Woman extends Human {
	constructor(name) {
		super(name);
	}
}

humans = God.create()

console.log(humans);
