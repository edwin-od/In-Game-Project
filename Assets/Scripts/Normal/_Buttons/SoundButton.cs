using UnityEngine;
using System.Collections;

public class SoundButton : MonoBehaviour {

	public GameObject soundOn;
	public GameObject soundOff;

	public Texture Off;
	public Texture On;

	public bool started;
	public int test;

	void Start ()
	{
		if(PlayerPrefs.GetInt("soundEvent")!=1 && PlayerPrefs.GetInt("soundEvent")!=2)
		{
			PlayerPrefs.SetInt("soundEvent", 1);
			soundOn.SetActive(true);
			soundOff.SetActive(false);
		}

		started = false;
	}
	void Update ()
	{
		test = PlayerPrefs.GetInt("soundEvent");
		if(PlayerPrefs.GetInt("soundEvent")==1)
		{
			soundOn.SetActive(true);
			soundOff.SetActive(false);
		}
		if(PlayerPrefs.GetInt("soundEvent")!=1)
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
			if(PlayerPrefs.GetInt("soundEvent")==1)
			{
				PlayerPrefs.SetInt("soundEvent", 2);
				//PlayerPrefs.Save();
			}
			else if(PlayerPrefs.GetInt("soundEvent")!=1)
			{
				PlayerPrefs.SetInt("soundEvent", 1);
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
