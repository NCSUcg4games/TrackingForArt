#pragma strict

static var player01Score : int = 0;
static var player02Score : int = 0;

var space : KeyCode;
var ball : Transform;
var brick : Transform;


var i : int = 0;


static function Score (wallName : String) {
	if (wallName == "rightWall"){
		player01Score += 1;
	} else if (wallName == "leftWall"){
		player02Score += 1;
	}
	Debug.Log("Player01 Score : " + player01Score);
	Debug.Log("Player02 Score : " + player02Score);
	
}


function Update(){

		var randomNum = Random.Range(-8, 8);
		var ranOffset = Random.Range(-0.5, 0.5);
		
		Instantiate(ball, Vector3(randomNum+ranOffset, 10, 0), Quaternion.identity);
			i = 0; 

	
	if (Input.GetMouseButtonDown(0)){
		
		var newbrickPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		Debug.Log(newbrickPos);
		
		
		Instantiate(brick, newbrickPos, Quaternion.identity);
	}
}