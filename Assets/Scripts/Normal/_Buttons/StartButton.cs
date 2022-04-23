using UnityEngine;
using System.Collections;


public class StartButton : MonoBehaviour {


	private GameObject gameCamera;

	public AudioSource cameraASDown;
	public AudioSource cameraASUp;
	
	private AudioClip buttonDown;
	private AudioClip buttonUp;

	public Texture Off;
	public Texture On;

	public bool started;

	public void Awake ()
	{

	}

	public void Start ()
	{
		PlayerPrefs.SetInt ("AdmobChecker", 1);

		GameObject.FindWithTag("MainCamera").GetComponent<Quit>().enabled = true;
		GameObject.FindWithTag("MainCamera").GetComponent<BackStart>().enabled = false;

		gameCamera = GameObject.FindWithTag("MainCamera");

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
			GameObject.FindWithTag("MainCamera").GetComponent<Quit>().enabled = false;
			GameObject.FindWithTag("MainCamera").GetComponent<BackStart>().enabled = true;
			gameCamera.animation.Play ("Camera_Motion_On");
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

