#pragma strict

var musics : GameObject;
var sounds : GameObject;
var gameOverGO : GameObject;
var finalScoreShow : GameObject;
var tapToRestart : GameObject;
var highScoreGO : GameObject;
var backButt : GameObject;
var ambientMusic : AudioSource;
var gameOverSound : AudioSource;
var zeroer : GameObject;

function Start ()
{
	musics.SetActive(true);
	sounds.SetActive(true);
	
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		gameOverSound.Play();
	}
	if(PlayerPrefs.GetInt("musicEvent")==1)
	{
		ambientMusic.Stop();
	}
	GameObject.FindWithTag("MainCamera").SendMessage("ChangeScoreOver");
	Destroy(GameObject.FindWithTag("Score"));
	highScoreGO.SetActive(true);
	gameOverGO.SetActive(true);
	tapToRestart.SetActive(true);
	finalScoreShow.SetActive(true);
	backButt.SetActive(true);
	GameObject.FindWithTag("MainCamera").SendMessage("OverScore");
	GameObject.FindWithTag("TTT").SetActive(false);
	Destroy(GameObject.FindWithTag("Circle"));
	Destroy(GameObject.FindWithTag("Lives"));
	GameObject.Find("BuyMoreLives").SetActive(false);
	zeroer.SetActive(true);
	if(PlayerPrefs.GetInt("RemoveAds") != 2)
	{
		PlayerPrefs.SetInt("AdmobCheckerI", PlayerPrefs.GetInt ("AdmobCheckerI") + 1);
		PlayerPrefs.SetInt ("AdmobChecker", 1);
		PlayerPrefs.SetInt ("AdBuddizChecker", PlayerPrefs.GetInt("AdBuddizChecker") + 1);
	}
}