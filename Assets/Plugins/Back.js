#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyUp(KeyCode.Escape)) { Application.LoadLevel("Main_Menu_Scene"); }
}