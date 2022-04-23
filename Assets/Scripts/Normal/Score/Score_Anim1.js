#pragma strict

var score1 : GameObject;
var timer : float = 3;

function Start ()
{
	if(score1.activeSelf)
	{
		score1.renderer.material.color.a = 1;
	}
}

function Update ()
{
	if(score1.activeSelf)
	{
		TurnOff1 ();
		timer = timer - Time.deltaTime;
	
		if(timer >= 0)
		{
			score1.renderer.material.color.a -= 1.5 * Time.deltaTime;
		}
		if(timer <= 0)
		{
			timer = 0;
			score1.renderer.material.color.a = 0;
		}
	}
}

function TurnOff1 ()
{
	yield WaitForSeconds (0.5);
	Destroy(score1);
}