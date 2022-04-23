using UnityEngine;
using System.Collections;
using Soomla;
using Soomla.Store;
using System;
using System.Collections.Generic;

public class _OneDollarButton : MonoBehaviour {

	public AudioSource cameraASDown;
	public AudioSource cameraASUp;
	
	private AudioClip buttonDown;
	private AudioClip buttonUp;

	public Texture Off;
	public Texture On;

	public bool started;

	void Start ()
	{
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
		//PlayerPrefs.SetInt("Buy1", 2);
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
			//Application.LoadLevel("Main_Menu_Scene");
			//PlayerPrefs.SetInt("Buy1", 2);
			StoreInventory.BuyItem(StoreManagerAssets.ONE_LIVE_ITEM.ItemId);
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
			started = false;
			if(PlayerPrefs.GetInt("soundEvent")==1)
			{
				cameraASUp.Play();
			}
			gameObject.renderer.material.mainTexture = Off;
		}
	}
}
