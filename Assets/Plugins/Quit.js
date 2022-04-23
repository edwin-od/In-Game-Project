#pragma strict

var areYouSure : GameObject;

function Start ()
{
	gameObject.GetComponent(CancelQuit).enabled = false;
	areYouSure.SetActive(false);
}

function Update () {
	//gameObject.GetComponent(CancelQuit).enabled = false;
	if (Input.GetKeyUp(KeyCode.Escape)) { //Application.Quit();
		gameObject.GetComponent(CancelQuit).enabled = true;
		areYouSure.SetActive(true); 
	}
}