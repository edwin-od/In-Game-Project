#pragma strict

var areYouSure : GameObject;

function Start ()
{
	gameObject.GetComponent(Quit).enabled = false;
}

function Update ()
{
	if (Input.GetKeyUp(KeyCode.Escape)) {
		gameObject.GetComponent(Quit).enabled = true;
		areYouSure.SetActive(false);
	}
}