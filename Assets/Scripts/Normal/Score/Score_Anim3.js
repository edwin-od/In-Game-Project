#pragma strict

var score3 : GameObject;
var timer : float = 3;

function Start ()
{
	if(score3.activeSelf)
	{
		score3.renderer.material.color.a = 1;
	}
}

function Update ()
{
	if(score3.activeSelf)
	{
		TurnOff3 ();
		timer = timer - Time.deltaTime;
	
		if(timer >= 0)
		{
			score3.renderer.material.color.a -= 1.5 * Time.deltaTime;
		}
		if(timer <= 0)
		{
			timer = 0;
			score3.renderer.material.color.a = 0;
		}
	}
}

function TurnOff3 ()
{
	yield WaitForSeconds (0.5);
	Destroy(score3);
}