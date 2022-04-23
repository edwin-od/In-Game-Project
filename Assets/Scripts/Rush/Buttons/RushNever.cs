using UnityEngine;
using System.Collections;

public class RushNever : MonoBehaviour {

	public GameObject OnB;

	public Texture Off;
	public Texture On;

	public bool started;

	void Start ()
	{
		PlayerPrefs.SetInt("ShowAgainRush",1);
		gameObject.renderer.material.mainTexture = Off;
		started = false;
	}

	void Update ()
	{
		if(PlayerPrefs.GetInt("ShowAgainRush") == 2)
		{
			OnB.SetActive(true);
		}
		if(PlayerPrefs.GetInt("ShowAgainRush") != 2)
		{
			OnB.SetActive(false);
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
			if(!OnB.activeSelf)
			{
				PlayerPrefs.SetInt("ShowAgainRush",2);
				PlayerPrefs.Save();
			}
			else if(OnB.activeSelf)
			{
				PlayerPrefs.SetInt("ShowAgainRush",1);
				PlayerPrefs.Save();
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
