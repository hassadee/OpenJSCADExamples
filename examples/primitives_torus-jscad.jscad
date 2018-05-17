// title      : 3D Primatives Torus
// author     : Hassadee Pimsuwan
// license    : MIT License
// description: 3D primatives torus example
// file       : primative_torus.jscad

function primatives_torus() {
	return union(
	    translate([0, -20, 0],
	        torus({
	            ri : 1,
	            fni : 16,
	            roti : 0,
	            ro : 4,
	            fno : 32
	        })
	    ),
        translate([0, -10, 0],
            torus({
                ri : 2,
	            fni : 48,
	            roti : 0,
	            ro : 2.5,
	            fno : 60
            })
        ),
        translate([0, 0, 0],
            torus({
                ri : 1,
	            fni : 4,
	            roti : 45,
	            ro : 2,
	            fno : 32
            })
        ),
        translate([0, 10, 0],
            torus({
                ri : 2,
	            fni : 4,
	            roti : 45,
	            ro : 3,
	            fno : 8
            })
        ),
        translate([0, 20, 0],
            torus({
                ri : 1,
	            fni : 3,
	            roti : 0,
	            ro : 3,
	            fno : 16
            })
        )
	);
}

function main() {
  return primatives_torus();
}