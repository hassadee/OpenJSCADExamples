// title      : 3D Primitives Cylinder
// author     : Hassadee Pimsuwan
// license    : MIT License
// description: 3D primitives cylinder example
// file       : primitives_cylinder.js

function primatives_cylinder() {
	return union(
		translate([0, -15, 0],
			cylinder({
				r: 1,
				h: 5
			})
		),
		translate([0, -10, 0],
			cylinder({
				r: 1,
				h: 5,
				center: true
			})
		),
		translate([0, -5, 0],
			cylinder({
				r: 1,
				h: 5,
				center: [true, true, false]
			})
		),
		translate([0, 0, 0],
			cylinder({
				r: 1,
				h: 5,
				round: true,
				center: true,
				fn: 18
			})
		),
		translate([0, 5, 0],
			cylinder({
				r1: 1,
				h2: 0,
				h: 5,
				round: true,
				fn: 6
			})
		),
		translate([0, 10, 0],
			cylinder({
				r1: 2,
				r2: 3,
				center: true,
				round: true,
				fn: 12
			})
		),
		translate([0, 15, 0],
			cylinder({
				start: [0, 0, 0],
				end: [0, 0, 5],
				center: true,
				round: true,
				fn: 50
				
			})
		)
	);
}

function main() {
  return primatives_cylinder();
}