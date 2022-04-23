#pragma strict

var highScore : GameObject;

function Start ()
{
	highScore.GetComponent.<TextMesh>().text = "Rush Score : " + PlayerPrefs.GetInt("highScore_Rush");
}

function Update ()
{
	
}