#pragma strict

var highScore : GameObject;

function Start ()
{
	highScore.GetComponent.<TextMesh>().text = "Deathwish Score : " + PlayerPrefs.GetInt("DEATHWISHtotalSCORE");
}

function Update ()
{
	
}