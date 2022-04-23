using UnityEngine;
using System.Collections;

public class StartHardcoreP : MonoBehaviour {
	
	// Use this for initialization
	void Start () {
		
	}
	
	void OnTouchDown ()
	{
		
	}
	void OnTouchUp ()
	{
		PlayerPrefs.SetInt ("Start_Hard", 1);
	}
	void OnTouchStay ()
	{
		
	}
	void OnTouchExit ()
	{
		
	}
}
