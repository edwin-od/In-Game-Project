#pragma strict

var start : GameObject;
var circle : GameObject;
var pause : GameObject;
var sounds : GameObject;
var musics : GameObject;
var quit : GameObject;
var timerObj : GameObject;
var deathObj : GameObject;
var music : AudioSource;

function Start ()
{
	PlayerPrefs.SetInt ("Start_Deathwish", 1);
	start.SetActive(false);
	pause.SetActive(false);
	sounds.SetActive(false);
	musics.SetActive(false);
	quit.SetActive(false);
	if(PlayerPrefs.GetInt("musicEvent")==1)
	{
		music.mute = false;
	}
}

function Update ()
{
	if (Input.GetKeyUp(KeyCode.Escape))
	{ 
		deathObj.SetActive(false);
		timerObj.animation["Timer_Animation"].speed = 0;
		gameObject.GetComponent(TouchDeathish).enabled = false;
		start.SetActive(true);
		pause.SetActive(true);
		sounds.SetActive(true);
		musics.SetActive(true);
		quit.SetActive(true);
		if(PlayerPrefs.GetInt("musicEvent")==1)
		{
			music.mute = true;
		}
		PlayerPrefs.SetInt ("Start_Deathwish", 2);
	}
	if(PlayerPrefs.GetInt("Start_Deathwish")==1)
	{
		gameObject.GetComponent(TouchDeathish).enabled = true;
		start.SetActive(false);
		pause.SetActive(false);
		sounds.SetActive(false);
		musics.SetActive(false);
		quit.SetActive(false);
		if(PlayerPrefs.GetInt("musicEvent")==1)
		{
			music.mute = false;
		}
	}
}