#pragma strict

var highScore : GameObject;

function Start ()
{
	highScore.GetComponent.<TextMesh>().text = "Bolt Score : " + PlayerPrefs.GetInt("highScore_Bolt");
}

function Update ()
{
	
}