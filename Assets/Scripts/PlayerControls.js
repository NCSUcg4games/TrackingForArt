#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;

var player : GameObject;
var speed : float = 10;

function Start () {

}

function Update () {
	if (Input.GetKey(moveUp)){
		rigidbody2D.velocity.y = speed;
	} else if (Input.GetKey(moveDown)){
		rigidbody2D.velocity.y = -1 * speed;
	} else if (Input.GetKey(moveLeft)){
		rigidbody2D.velocity.x = -1 * speed;
	} else if (Input.GetKey(moveRight)){
		rigidbody2D.velocity.x = speed;
	
	} else {
		rigidbody2D.velocity.y = 0;
		rigidbody2D.velocity.x = 0;
	}
	
	
}