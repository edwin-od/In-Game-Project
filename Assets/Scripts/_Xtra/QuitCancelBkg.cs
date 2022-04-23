using UnityEngine;
using System.Collections;

public class QuitCancelBkg : MonoBehaviour {
	
	public bool started;
	public GameObject areYouSure;

	void Start ()
	{
		started = false;
	}
	
	void OnTouchDown ()
	{
		started = true;
	}
	void OnTouchUp ()
	{
		if(started == true)
		{
			areYouSure.SetActive(false);
			GameObject.FindWithTag("MainCamera").SendMessage("Trans");
			started = false;
		}
	}
	void OnTouchStay ()
	{
		if(started == true)
		{

		}
	}
	void OnTouchExit ()
	{
		if(started == true)
		{
			started = false;
		}
	}
}

