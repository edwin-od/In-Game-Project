#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyUp(KeyCode.Escape)) { gameObject.animation.Play("Camera_Motion_Off"); 
	GameObject.FindWithTag("MainCamera").GetComponent(Quit).enabled = true;
	GameObject.FindWithTag("MainCamera").GetComponent(BackStart).enabled = false;
	}
}