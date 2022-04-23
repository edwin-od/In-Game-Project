#pragma strict

function Update ()
{
	PlayerPrefs.SetFloat("DeathwishScore", 0);
	PlayerPrefs.SetFloat("DeathwishScoreM", 0);
	PlayerPrefs.SetFloat("DeathwishScoreH", 0);
	PlayerPrefs.SetFloat("DeathwishScoreD", 0);
	PlayerPrefs.SetInt("DeathwishLives", 10);
}