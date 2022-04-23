using UnityEngine;
using System.Collections;

public class StartNormalP : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	void OnTouchDown ()
	{

	}
	void OnTouchUp ()
	{
		PlayerPrefs.SetInt ("Start_Normal", 1);
	}
	void OnTouchStay ()
	{

	}
	void OnTouchExit ()
	{

	}
}
