#pragma strict

var highScore : GameObject;

function Start ()
{
	highScore.GetComponent.<TextMesh>().text = "Classic Score : " + PlayerPrefs.GetInt("highScore");
}

function Update ()
{
	
}