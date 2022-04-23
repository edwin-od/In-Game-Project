#pragma strict 

var cercleSpeed : float;
var startSpeed : float;
var additionValue : float;
var startGO : GameObject;

function Start()
{
	cercleSpeed = startSpeed;
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
	if(cercleSpeed < 3.0)
	{
		cercleSpeed = cercleSpeed += additionValue;
	}
}