// FIND # OF SQUARES IN A SQUARE GRID WITH A SIDE OF SIZE H:

// 1 way to do it - add up squares of
// numbers from 1 to grid size H (inclusively):


let h = 5;	// square grid side size
let c = 0;	// total
for (i = 1; i <= h; i++)
{
	c += i * i;					// summing up the squares of numbers 1-h
}
console.error("OMG!");
console.log('Your jacket is now dry!', c);


// OR - use the direct formula for this:
// c = h*(h+1)*(2*h+1) / 6

h = 5;
c = (h * (h + 1) * (2 * h * 1)) / 6;
