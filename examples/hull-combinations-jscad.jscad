// title      : Hull
// author     : Hassadee Pimsuwan
// license    : MIT License
// description: hull() with linear_extrude, union, and difference functions
// file       : hull-linear_extrude-union-difference.jscad

function unionHull() {
    var o = Array.prototype.slice.call(arguments);
    return union(
        union(
            linear_extrude({height: 10},hull(o)).translate([0,0,0])
        ),
        cylinder({r: 5, h: 20, center: true}).translate([0, 0, 5])
    );
}

function differenceHull() {
    var o = Array.prototype.slice.call(arguments);
    return difference(
        union(
            linear_extrude({height: 10},hull(o)).translate([0,0,0])
        ),
        cylinder({r: 5, h: 20, center: true}).translate([0, 0, 5])
    );
}

function main() {
   return [
       unionHull(
            circle({r: 5, center: true}).translate([0, 20, 0]), 
            circle({r: 10, center: true})
        ).translate([0, 0, 0]),
        
        differenceHull(
            square({size: [5, 5], center: true}).translate([0, 20, 0]), 
            circle({r: 10, center: true})
        ).translate([30, 0, 0])
   ];
}