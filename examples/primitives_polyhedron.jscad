// title      : 3D Primitives Polyhedron
// author     : Hassadee Pimsuwan
// license    : MIT License
// description: 3D primitives polyhedron example
// file       : primitive_polyhedron.jscad

function primitives_polyhedron() {
	return union(
	    translate([0, 0, 0],
	        polyhedron({
                points: [
                    [10,10,0],[10,-10,0],[-10,-10,0],[-10,10,0], [0,0,10]
                ],
                triangles: [
                    [0,1,4],[1,2,4],[2,3,4],[3,0,4],
                    [1,0,3],[2,1,3]
                ]
            })
	    )
	);
}

function main() {
  return primitives_polyhedron();
}