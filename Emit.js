#pragma strict

var pointTo : GameObject;
var lig : Transform;

function emit(){
	Instantiate(pointTo,lig.position,lig.rotation);
}