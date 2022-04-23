using UnityEngine;
using System.Collections;
using Soomla;
using Soomla.Store;
using System;
using System.Collections.Generic;

public class RemovAdsButton : MonoBehaviour {

	public AudioSource cameraASDown;
	public AudioSource cameraASUp;
	
	private AudioClip buttonDown;
	private AudioClip buttonUp;

	public Texture Off;
	public Texture On;

	public bool started;

	public GameObject removedAds;

	void Start ()
	{
		//PlayerPrefs.SetInt ("RemoveAds", 1998);
		//PlayerPrefs.SetInt ("RemovBut", 1998);
		buttonDown = (AudioClip)Resources.Load("Buttons_Down");
		cameraASDown.clip = buttonDown;
		
		buttonUp = (AudioClip)Resources.Load("Buttons_Up");
		cameraASUp.clip = buttonUp;
		started = false;
	}

	void Update ()
	{
		if(PlayerPrefs.GetInt("RemovBut") == 1)
		{
			Instantiate (removedAds, gameObject.transform.position, gameObject.transform.rotation);
			Destroy(gameObject);
		}
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

			StoreInventory.BuyItem(StoreManagerAssets.REMOVE_ADS_ITEM.ItemId);

			//PlayerPrefs.SetInt ("RemoveAds", 2);
			//PlayerPrefs.Save();
			//PlayerPrefs.SetInt ("RemovBut", 1);
			//PlayerPrefs.Save();

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
