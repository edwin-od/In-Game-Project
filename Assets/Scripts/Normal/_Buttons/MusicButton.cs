using UnityEngine;
using System.Collections;

public class MusicButton : MonoBehaviour {

	public GameObject soundOn;
	public GameObject soundOff;

	public Texture Off;
	public Texture On;

	public bool started;
	public int test;

	void Start ()
	{
		if(PlayerPrefs.GetInt("musicEvent")!=1 && PlayerPrefs.GetInt("musicEvent")!=2)
		{
			PlayerPrefs.SetInt("musicEvent", 1);
			soundOn.SetActive(true);
			soundOff.SetActive(false);
		}


		started = false;
	}

	void Update ()
	{
		test = PlayerPrefs.GetInt("musicEvent");
		if(PlayerPrefs.GetInt("musicEvent")==1)
		{
			soundOn.SetActive(true);
			soundOff.SetActive(false);
		}
		if(PlayerPrefs.GetInt("musicEvent")!=1)
		{
			soundOn.SetActive(false);
			soundOff.SetActive(true);
		}
	}

	void OnTouchDown ()
	{
		gameObject.renderer.material.mainTexture = On;
		started = true;
	}
	void OnTouchUp ()
	{
		if(started == true)
		{
			gameObject.renderer.material.mainTexture = Off;
			if(PlayerPrefs.GetInt("musicEvent")==1)
			{
				PlayerPrefs.SetInt("musicEvent", 2);
				//PlayerPrefs.Save();
			}
			else if(PlayerPrefs.GetInt("musicEvent")!=1)
			{
				PlayerPrefs.SetInt("musicEvent", 1);
				//PlayerPrefs.Save();
			}
			started = false;
		}
	}
	void OnTouchStay ()
	{
		if(started == true)
		{
			gameObject.renderer.material.mainTexture = On;
		}
	}
	void OnTouchExit ()
	{
		if(started == true)
		{
			gameObject.renderer.material.mainTexture = Off;
			started = false;
		}
	}
}
