#pragma strict

var highScore : GameObject;

function Start ()
{
	highScore.GetComponent.<TextMesh>().text = "Hardcore Score : " + PlayerPrefs.GetInt("hardcoreHighScore");
}

function Update ()
{
	
}