#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyUp(KeyCode.Escape))
	{
		GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = true;
	}
}