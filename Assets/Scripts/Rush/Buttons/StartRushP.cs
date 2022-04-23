using UnityEngine;
using System.Collections;

public class StartRushP : MonoBehaviour {
	
	// Use this for initialization
	void Start () {
		
	}
	
	void OnTouchDown ()
	{
		
	}
	void OnTouchUp ()
	{
		PlayerPrefs.SetInt ("Start_Rush", 1);
	}
	void OnTouchStay ()
	{
		
	}
	void OnTouchExit ()
	{
		
	}
}
