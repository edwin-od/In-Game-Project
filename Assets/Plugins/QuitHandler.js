#pragma strict

var areYouSure : GameObject;

function Start ()
{
	areYouSure.SetActive(false);
	gameObject.GetComponent(Quit).enabled = true;
	gameObject.GetComponent(CancelQuit).enabled = false;
}

function Update ()
{
	if(!areYouSure.activeSelf)
	{
		gameObject.GetComponent(CancelQuit).enabled = false;
	}
	if(areYouSure.activeSelf)
	{
		gameObject.GetComponent(CancelQuit).enabled = true;
		gameObject.GetComponent(Quit).enabled = false;
	}
}

public function Trans ()
{
	gameObject.GetComponent(CancelQuit).enabled = false;
	gameObject.GetComponent(Quit).enabled = true;
}