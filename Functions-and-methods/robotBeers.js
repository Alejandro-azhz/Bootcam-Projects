function getBeers(money) {
    const cost = 1.5;
    const bottlesNumber = Math.floor(money / cost);
	// Instructions of my function
	console.log("Go three steps forward");
	console.log("Move to the left");
	console.log("Move to the right");
	console.log("Go three steps back");
	console.log(`Take ${bottlesNumber} beers`);

    return bottlesNumber * cost;
}

const bottlesCost = getBeers(5);
console.log(bottlesCost);


// console.log(getBeers(5));

// const bottlesCost = getBeers(10);