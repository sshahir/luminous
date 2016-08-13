#pragma strict

var theDirection : Transform;
var pointTo : GameObject;
var rotateSkin : GUISkin;
var emitSkin : GUISkin;
var rotateInfo : boolean;
var emitInfo : boolean;
static var sinkcount : int;

function Start () {
	theDirection = GameObject.FindGameObjectWithTag("direction").transform;
	pointTo = GameObject.FindGameObjectWithTag("spawn");
	rotateInfo = false;emitInfo = false;
	sinkcount = 0;
}

function Update () {
	if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved){
		var touchDeltaPosition : Vector2 = Input.GetTouch(0).deltaPosition;
		theDirection.Rotate(0,0,touchDeltaPosition.y);
	}
}

