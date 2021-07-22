fetch('https://www.breakingbadapi.com/api/characters/5')
	.then((response) => response.json())
	// .then((json) => console.log(json))
	.then((json) => console.log(json[0].img));

