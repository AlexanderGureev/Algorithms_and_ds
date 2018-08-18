function uniq(mass) {
	return mass.reduce((acc, value) => {
		return acc.includes(value) ? [...acc] : [...acc, value];
	}, []);
}

uniq([2, 2, 1, 3, 3]);