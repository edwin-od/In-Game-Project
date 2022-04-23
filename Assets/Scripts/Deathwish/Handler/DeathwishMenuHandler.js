#pragma strict

var resumeOn : GameObject;
var resumeOff : GameObject;

var test : float;
var testM : float;
var testH : float;
var testD : float;
var testL : int;

function Start ()
{
	//resumeOn.SetActive(false);
	//resumeOff.SetActive(true);
}

function Update ()
{
	test = PlayerPrefs.GetFloat("DeathwishScore");
	testM = PlayerPrefs.GetFloat("DeathwishScoreM");
	testH = PlayerPrefs.GetFloat("DeathwishScoreH");
	testD = PlayerPrefs.GetFloat("DeathwishScoreD");
	testL = PlayerPrefs.GetInt("DeathwishLives");

	if(PlayerPrefs.GetFloat("DeathwishScore") == 0 
	&& PlayerPrefs.GetFloat("DeathwishScoreM") == 0 
	&& PlayerPrefs.GetFloat("DeathwishScoreH") == 0
	&& PlayerPrefs.GetFloat("DeathwishScoreD") == 0
	&& PlayerPrefs.GetInt("DeathwishLives") == 10)
	{
		resumeOn.SetActive(false);
		resumeOff.SetActive(true);
	}
	if(PlayerPrefs.GetFloat("DeathwishScore") != 0
	||PlayerPrefs.GetFloat("DeathwishScoreM") != 0
	||PlayerPrefs.GetFloat("DeathwishScoreH") != 0
	||PlayerPrefs.GetFloat("DeathwishScoreD") != 0)
	{
		resumeOn.SetActive(true);
		resumeOff.SetActive(false);
	}
}