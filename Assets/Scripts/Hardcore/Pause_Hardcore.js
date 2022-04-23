#pragma strict

var start : GameObject;
var circle : GameObject;
var pause : GameObject;
var sounds : GameObject;
var musics : GameObject;
var quit : GameObject;

var music : AudioSource;

function Start ()
{
	PlayerPrefs.SetInt ("Start_Hard", 1);
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
		gameObject.GetComponent(TouchHardcore).enabled = false;
		gameObject.SendMessage("StopEveryThing");
		gameObject.GetComponent(Event_Handler_Hardcore).enabled = false;
		start.SetActive(true);
		pause.SetActive(true);
		sounds.SetActive(true);
		musics.SetActive(true);
		quit.SetActive(true);
		if(PlayerPrefs.GetInt("musicEvent")==1)
		{
			music.mute = true;
		}
		PlayerPrefs.SetInt ("Start_Hard", 2);
	}
	if(PlayerPrefs.GetInt("Start_Hard")==1)
	{
		gameObject.GetComponent(TouchHardcore).enabled = true;
		gameObject.GetComponent(Event_Handler_Hardcore).enabled = true;
		gameObject.SendMessage("StartEveryThing");
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