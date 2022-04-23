using UnityEngine;
using System.Collections;

public class StartDeathwishP : MonoBehaviour {

	public GameObject timerObj;
	public GameObject deathObj;

	// Use this for initialization
	void Start () {
	
	}
	
	void OnTouchDown ()
	{

	}
	void OnTouchUp ()
	{
		PlayerPrefs.SetInt ("Start_Deathwish", 1);
		timerObj.animation["Timer_Animation"].speed = 1.0f;
		deathObj.SetActive(true);
	}
	void OnTouchStay ()
	{

	}
	void OnTouchExit ()
	{

	}
}
