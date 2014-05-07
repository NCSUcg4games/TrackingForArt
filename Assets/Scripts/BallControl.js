#pragma strict

function Start () {
//	var randomNum = Random.Range(0, 1);
//	
//	
//	if (randomNum <= 0.5) {
//		rigidbody2D.AddForce(new Vector2(80,10));
//	} else {
//		rigidbody2D.AddForce(new Vector2(-80,-10));
//	}
}

function OnCollisionEnter2D (colInfo : Collision2D) {
//	if (colInfo.collider.tag == "Player"){
//		var velY = rigidbody2D.velocity.y;
//		rigidbody2D.velocity.y = velY/2 + colInfo.collider.rigidbody2D.velocity.y/3;
//		
//	}
}


function Update(){

	if (this.gameObject.transform.position.y < -10){
		Destroy(this.gameObject, 0f);
	}
}