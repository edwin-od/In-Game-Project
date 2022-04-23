﻿#pragma strict

var start : GameObject;
var circle : GameObject;
var pause : GameObject;
var sounds : GameObject;
var musics : GameObject;
var quit : GameObject;

var music : AudioSource;

function Start ()
{
	PlayerPrefs.SetInt ("Start_Rush", 1);
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
		gameObject.GetComponent(Touch_Rush).enabled = false;
		start.SetActive(true);
		pause.SetActive(true);
		sounds.SetActive(true);
		musics.SetActive(true);
		quit.SetActive(true);
		if(PlayerPrefs.GetInt("musicEvent")==1)
		{
			music.mute = true;
		}
		PlayerPrefs.SetInt ("Start_Rush", 2);
	}
	if(PlayerPrefs.GetInt("Start_Rush")==1)
	{
		gameObject.GetComponent(Touch_Rush).enabled = true;
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