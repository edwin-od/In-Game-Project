#pragma strict

private var gameEnded : boolean;
var ambientSound : AudioSource;
var scoreSound : AudioSource;
var highScoreGO : GameObject;

function Start ()
{
	PlayerPrefs.SetInt ("AdmobChecker", 2);
	gameEnded = false;
	if(PlayerPrefs.GetInt("musicEvent")==1)
	{
		ambientSound.Play();
	}
	GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = false;
}

function Update ()
{
	highScoreGO.GetComponent.<TextMesh>().text = "Best Score : " + PlayerPrefs.GetInt("DEATHWISHtotalSCORE");
}
function EasyScore ()
{
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		scoreSound.Play();
	}
}
function MediumScore ()
{
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		scoreSound.Play();
	}
}
function HardScore ()
{
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		scoreSound.Play();
	}
}
function OverScore () { }