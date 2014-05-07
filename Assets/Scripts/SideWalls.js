#pragma strict

function onTriggerEnter2D (hitInfo : Collider2D){
	Debug.Log("Im IN");
	if (hitInfo.name == "Ball"){
		var wallName = transform.name;
		
		GameManager.Score("leftWall");
		
	}
}
