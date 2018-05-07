// title      : 3D Primatives Cube
// author     : Hassadee Pimsuwan
// license    : MIT License
// description: 3D primatives cube example
// file       : primative_cube.jscad

function primatives_cube() {
	return union(
	    translate([0, 0, 0],
	        cube({size: 1})
	    ),
        translate([0, 5, 0],
            cube({size: [1,2,3]})
        ),
        translate([5, 5, 0],
            cube({size: 1, center: true})
        ),
        translate([10, 10, 0],
            cube({size: 1, center: [false,false,false]})
        ),
        translate([0, 10, 0],
            cube({size: [1,2,3], round: true})
        )
	);
}

function main() {
  return primatives_cube();
}