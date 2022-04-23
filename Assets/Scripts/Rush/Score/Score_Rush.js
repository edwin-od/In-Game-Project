#pragma strict

var score1 : GameObject;
var timePlus : GameObject;
var score123Spawn : Transform;

private var score : int;
private var scoreChecker : int;

var gameEnded : boolean;

var scoreGO : GameObject;
var finalScoreGO : GameObject;
var highScoreGO : GameObject;

var ambientSound : AudioSource;
var scoreSound : AudioSource;

function Start ()
{
	PlayerPrefs.SetInt("RushAchiv", 0);
	gameEnded = false;
	if(PlayerPrefs.GetInt("musicEvent")==1)
	{
		ambientSound.Play();
	}
	
	score = 0;
	scoreChecker = 0;
}

function Update ()
{
	PlayerPrefs.SetInt("RushAchiv", score);
	if(scoreChecker >= 10)
	{
		scoreChecker -= 10;
		Destroy(GameObject.FindWithTag("Anim"));
		Instantiate(timePlus, score123Spawn.position, score123Spawn.rotation);
		gameObject.SendMessage("AddTime");
	}
	highScoreGO.GetComponent.<TextMesh>().text = "Best Score : " + PlayerPrefs.GetInt("highScore_Rush");
	
	if(gameEnded == false)
	{
		scoreGO.GetComponent.<TextMesh>().text = "" + score;
	}
	if(score > PlayerPrefs.GetInt("highScore_Rush"))
	{
		PlayerPrefs.SetInt("highScore_Rush", score);
	}
}

function EasyScore ()
{
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		scoreSound.Play();
	}
	scoreChecker ++;
	score ++;
	Instantiate(score1, score123Spawn.position, score123Spawn.rotation);
}
function MediumScore ()
{
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		scoreSound.Play();
	}
	scoreChecker ++;
	score ++;
	Instantiate(score1, score123Spawn.position, score123Spawn.rotation);
}
function HardScore ()
{
	if(PlayerPrefs.GetInt("soundEvent")==1)
	{
		scoreSound.Play();
	}
	score ++;
	scoreChecker ++;
	Instantiate(score1, score123Spawn.position, score123Spawn.rotation);
}

function OverScore ()
{
	finalScoreGO.GetComponent.<TextMesh>().text = "Score : " + score;
	Destroy(this);
}