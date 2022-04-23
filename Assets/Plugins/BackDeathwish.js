#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyUp(KeyCode.Escape)) { 
		/*PlayerPrefs.SetFloat("DeathwishScore", 0);
		PlayerPrefs.SetFloat("DeathwishScoreM", 0);
		PlayerPrefs.SetFloat("DeathwishScoreH", 0);
		PlayerPrefs.SetFloat("DeathwishScoreD", 0);
		PlayerPrefs.SetInt("DeathwishLives", 10);*/
		Application.LoadLevel("Main_Deathwish_Scene");
		Application.LoadLevel("Main_Menu_Scene"); 
	}
}