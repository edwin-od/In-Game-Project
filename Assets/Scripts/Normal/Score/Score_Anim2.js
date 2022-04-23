#pragma strict

var score2 : GameObject;
var timer : float = 3;

function Start ()
{
	if(score2.activeSelf)
	{
		score2.renderer.material.color.a = 1;
	}
}

function Update ()
{
	if(score2.activeSelf)
	{
		TurnOff2 ();
		timer = timer - Time.deltaTime;
	
		if(timer >= 0)
		{
			score2.renderer.material.color.a -= 1.5 * Time.deltaTime;
		}
		if(timer <= 0)
		{
			timer = 0;
			score2.renderer.material.color.a = 0;
		}
	}
}

function TurnOff2 ()
{
	yield WaitForSeconds (0.5);
	Destroy(score2);
}