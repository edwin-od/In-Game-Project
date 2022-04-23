using UnityEngine;
using System.Collections;

public class Transitianor : MonoBehaviour {

	public GameObject boxNew;
	public GameObject areYouSure;

	void Start ()
	{
		boxNew.SetActive (true);
		areYouSure.SetActive(false);
		gameObject.GetComponent<Back>().enabled = true;
		gameObject.GetComponent<CancelStart>().enabled = false;
	}
	
	void Update ()
	{
		if(!areYouSure.activeSelf)
		{
			gameObject.GetComponent<CancelStart>().enabled = false;
			boxNew.SetActive (true);
		}
		if(areYouSure.activeSelf)
		{
			gameObject.GetComponent<CancelStart>().enabled = true;
			gameObject.GetComponent<Back>().enabled = false;
			boxNew.SetActive (false);
		}
	}
	public void Trans ()
	{
		gameObject.GetComponent<CancelStart>().enabled = false;
		gameObject.GetComponent<Back>().enabled = true;
	}
}