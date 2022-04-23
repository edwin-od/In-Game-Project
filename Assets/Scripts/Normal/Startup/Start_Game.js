#pragma strict

function Start ()
{
	WaitForTime();
	PlayerPrefs.SetInt("AdCounter", 0);
}

function Update ()
{
	
}

function WaitForTime ()
{
	yield WaitForSeconds (2);
	Application.LoadLevel("Main_Menu_Scene");
}