#pragma strict 

var cercleSpeed : float;
var minSpeed : float;
var maxSpeed : float;
var startGO : GameObject;

function Start()
{
	cercleSpeed = Random.Range(minSpeed,maxSpeed);
	animation.Play("Scale_Animation");
	animation.wrapMode = WrapMode.Loop;
}
 
function Update()
{
	
	if(startGO.activeSelf)
	{
		animation["Scale_Animation"].speed = 0;
	}
	if(!startGO.activeSelf)
	{
		animation["Scale_Animation"].speed = cercleSpeed;
	}
}

public function ChangeSpeed ()
{
	cercleSpeed = new Random.Range(minSpeed,maxSpeed);
}