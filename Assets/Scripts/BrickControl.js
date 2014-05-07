#pragma strict

var initPosition : Vector3;

function Start () {
	initPosition = this.gameObject.transform.position;
	initPosition.z = 0;
}

function Update () {
	this.gameObject.transform. position = initPosition;
}