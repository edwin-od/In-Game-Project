using UnityEngine;
using System.Collections;

public class StartBoltP : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	void OnTouchDown ()
	{

	}
	void OnTouchUp ()
	{
		PlayerPrefs.SetInt ("Start_Bolt", 1);
	}
	void OnTouchStay ()
	{

	}
	void OnTouchExit ()
	{

	}
}
