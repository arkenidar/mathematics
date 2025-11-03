// https://replit.com/@dariocangialosi/pi

/*
var radius = 10000, sector_area = 0
for(var x=0; x<=radius; x++) for(var y=0; y<=radius; y++)
if(Math.sqrt( x**2 + y**2 ) <= radius) sector_area++
// Area of a circle = π × radius²
var circle_area = 4*(sector_area-radius)
console.log("approximated π alias pi number:", circle_area/radius**2)
*/

area_calc_1(10000) // slower, so less precision
area_calc_2(1000000000) // faster, so more precision
console.log("3.141592653589 is the best calculated so far")

function area_calc_1(radius) {
    console.log("area_calc_1 (slower)")
    var sector_area = 0
    for (var x = 1; x <= radius; x++) for (var y = 0; y <= radius; y++)
        if (Math.sqrt(x ** 2 + y ** 2) <= radius) sector_area++
    console.log("sector_area:", sector_area)
    pi_calc(sector_area, radius)
}

function area_calc_2(radius) {
    console.log("area_calc_2 (faster)")
    var sector_area = 0
    for (var x = 0; x <= radius; x++) {
        // x**2 + y**2 = radius**2
        var y = Math.sqrt(radius ** 2 - x ** 2)
        sector_area += y
    }
    console.log("sector_area:", sector_area)
    sector_area -= radius / 2
    pi_calc(sector_area, radius)
}

function pi_calc(sector_area, radius) {
    // Area of a circle = π × radius²
    var circle_area = 4 * sector_area
    console.log("approximated π alias pi number:", circle_area / radius ** 2)
}
