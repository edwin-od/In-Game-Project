using UnityEngine;
using System.Collections;

public class NewGameHan : MonoBehaviour {

	public AudioSource cameraASDown;
	public AudioSource cameraASUp;
	
	private AudioClip buttonDown;
	private AudioClip buttonUp;

	public Texture Off;
	public Texture On;

	public bool started;
	public GameObject areYouSure;

	void Start ()
	{
		GameObject.FindWithTag("MainCamera").GetComponent<CancelStart>().enabled = false;
		areYouSure.SetActive(false);
		buttonDown = (AudioClip)Resources.Load("Buttons_Down");
		cameraASDown.clip = buttonDown;
		
		buttonUp = (AudioClip)Resources.Load("Buttons_Up");
		cameraASUp.clip = buttonUp;
		started = false;
	}

	void OnTouchDown ()
	{
		if(PlayerPrefs.GetInt("soundEvent")==1)
		{
			cameraASDown.Play();
		}
		gameObject.renderer.material.mainTexture = On;
		started = true;
	}
	void OnTouchUp ()
	{
		if(started == true)
		{
			if(PlayerPrefs.GetInt("soundEvent")==1)
			{
				cameraASUp.Play();
			}
			gameObject.renderer.material.mainTexture = Off;
			if(PlayerPrefs.GetFloat("DeathwishScore") == 0 
			&& PlayerPrefs.GetFloat("DeathwishScoreM") == 0 
			&& PlayerPrefs.GetFloat("DeathwishScoreH") == 0
			&& PlayerPrefs.GetFloat("DeathwishScoreD") == 0
			&& PlayerPrefs.GetInt("DeathwishLives") == 10)
			{
				PlayerPrefs.SetInt("BuyDeath1", 1);
				PlayerPrefs.SetInt("BuyDeath2", 1);
				PlayerPrefs.SetInt("BuyDeath3", 1);
				PlayerPrefs.SetFloat("DeathwishScore", 0);
				PlayerPrefs.SetFloat("DeathwishScoreM", 0);
				PlayerPrefs.SetFloat("DeathwishScoreH", 0);
				PlayerPrefs.SetFloat("DeathwishScoreD", 0);
				PlayerPrefs.SetInt("DeathwishLives", 10);
				Application.LoadLevel("Main_Deathwish_Scene");
			}
			if(PlayerPrefs.GetFloat("DeathwishScore") != 0
			||PlayerPrefs.GetFloat("DeathwishScoreM") != 0
			||PlayerPrefs.GetFloat("DeathwishScoreH") != 0
			||PlayerPrefs.GetFloat("DeathwishScoreD") != 0)
			{
				GameObject.FindWithTag("MainCamera").GetComponent<CancelStart>().enabled = true;
				areYouSure.SetActive(true);
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
			if(PlayerPrefs.GetInt("soundEvent")==1)
			{
				cameraASUp.Play();
			}
			gameObject.renderer.material.mainTexture = Off;
			started = false;
		}
	}
}
