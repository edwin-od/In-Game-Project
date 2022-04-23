#pragma strict

var areYouSure : GameObject;

function Start ()
{
	gameObject.GetComponent(Back).enabled = false;
}

function Update ()
{
	if (Input.GetKeyUp(KeyCode.Escape)) {
		gameObject.GetComponent(Back).enabled = true;
		areYouSure.SetActive(false);
	}
}