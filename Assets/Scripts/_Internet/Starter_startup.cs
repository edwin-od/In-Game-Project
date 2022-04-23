using UnityEngine;
using System.Collections;

public class Starter_startup : MonoBehaviour {

	// Use this for initialization
	void Start () {
		PlayerPrefs.SetInt ("AdmobChecker", 2);
		//PlayerPrefs.DeleteAll();
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
