#pragma strict

var score1 : GameObject;
var score2 : GameObject;
var score3 : GameObject;
var score123Spawn : Transform;

var gameEnded : boolean;

private var score : int;
private var lifePlus : int;
var scoreGO : GameObject;
var finalScoreGO : GameObject;
var highScoreGO : GameObject;

var ambientSound : AudioSource;
var scoreSound : AudioSource;

function Start ()
{
	PlayerPrefs.SetInt("BoltAchiv", 0);
	gameEnded = false;
	if(PlayerPrefs.GetInt("musicEvent")==1)
	{
		ambientSound.Play();
	}
	GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = false;
	score = 0;
	lifePlus = 0;
}

function Update ()
{
	PlayerPrefs.SetInt("BoltAchiv", score);
	if(lifePlus >= 100)
	{
		lifePlus -= 100;
		GameObject.FindWithTag("MainCamera").SendMessage("MoreLifes");
	}
	
	if(GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled == true)
	{
		gameEnded = true;
	}
	highScoreGO.GetComponent.<TextMesh>().text = "Best Score : " + PlayerPrefs.GetInt("highScore_Bolt");
	if(gameEnded == false)
	{
		scoreGO.GetComponent.<TextMesh>().text = "" + score;
	}
	if(score > PlayerPrefs.GetInt("highScore_Bolt"))
	{
		PlayerPrefs.SetInt("highScore_Bolt", score);
	}
	
}

function EasyScore ()
{
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		scoreSound.Play();
	}
	lifePlus ++;
	score ++;
	Instantiate(score1, score123Spawn.position, score123Spawn.rotation);
}
function MediumScore ()
{
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		scoreSound.Play();
	}
	lifePlus ++;
	lifePlus ++;
	score ++;
	score ++;
	Instantiate(score2, score123Spawn.position, score123Spawn.rotation);
}
function HardScore ()
{
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		scoreSound.Play();
	}
	lifePlus ++;
	lifePlus ++;
	lifePlus ++;
	score ++;
	score ++;
	score ++;
	Instantiate(score3, score123Spawn.position, score123Spawn.rotation);
}

function OverScore ()
{
	finalScoreGO.GetComponent.<TextMesh>().text = "Score : " + score;
}