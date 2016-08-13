﻿#pragma strict

var mainCam : Camera;
var topWall : BoxCollider2D;
var bottomWall : BoxCollider2D;
var leftWall : BoxCollider2D;
var rightWall : BoxCollider2D;

function Start () {
	
	//Move each wall to its edge location
	topWall.size = new Vector2 (mainCam.ScreenToWorldPoint( new Vector3(Screen.width * 2f,0f,0f)).x,1f);
	topWall.offset = new Vector2(0f,mainCam.ScreenToWorldPoint( new Vector3(0f,Screen.height,0f)).y+0.6f);

	bottomWall.size = new Vector2 (mainCam.ScreenToWorldPoint( new Vector3(Screen.width * 2f,0f,0f)).x,1f);
	bottomWall.offset = new Vector2(0f,mainCam.ScreenToWorldPoint( new Vector3(0f,0f,0f)).y-0.4f);

	leftWall.size = new Vector2 (1f,mainCam.ScreenToWorldPoint( new Vector3(0f,Screen.height * 2f,0f)).y);
	leftWall.offset = new Vector2(mainCam.ScreenToWorldPoint( new Vector3(0f,0f,0f)).x,0f);

	rightWall.size = new Vector2 (1f,mainCam.ScreenToWorldPoint( new Vector3(0f,Screen.height * 2f,0f)).y);
	rightWall.offset = new Vector2(mainCam.ScreenToWorldPoint( new Vector3(Screen.width,0f,0f)).x+1.1f,0f);
}

