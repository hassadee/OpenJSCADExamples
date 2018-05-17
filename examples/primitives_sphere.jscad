// title      : 3D Primitives Sphere
// author     : Hassadee Pimsuwan
// license    : MIT License
// description: 3D primitives sphere example
// file       : primitives_sphere.jscad

function primatives_sphere() {
	return union(
	    translate([-20, 0, 0],
	        sphere(1)
	    ),
        translate([-10, 0, 0],
            sphere({r: 2, center: true})
        ),
        translate([0, 0, 0],
            sphere({r: 2, center: [false, false, true]})
        ),
        translate([10, 0, 0],
            sphere({r: 2, center: [false, true, false]})
        ),
        translate([20, 0, 0],
            sphere({r: 2, center: [true, false, false]})
        ),
        translate([-20, 20, 0],
            sphere({r: 3, fn: 50 })
        ),
        translate([-10, 20, 0],
            sphere({r: 3, fn: 6, type: 'geodesic'})
        ),
        translate([0, 20, 0],
            sphere({r: 3, fn: 30, type: 'geodesic'})
        ),
        translate([10, 20, 0],
            sphere({r: 3, fn: 60, type: 'geodesic'})
        ),
        translate([20, 20, 0],
            sphere({r: 3, fn: 126, type: 'geodesic'})
        )
	);
}

function main() {
  return primatives_sphere();
}