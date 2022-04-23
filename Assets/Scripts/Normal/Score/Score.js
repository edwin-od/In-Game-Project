#pragma strict

var score1 : GameObject;
var score2 : GameObject;
var score3 : GameObject;
var score123Spawn : Transform;

var gameEnded : boolean;

//private var actualPP : int;
//private var pP : int;
private var score : int;
private var lifePlus : int;
var scoreGO : GameObject;
var finalScoreGO : GameObject;
var highScoreGO : GameObject;

var ambientSound : AudioSource;
var scoreSound : AudioSource;

function Start ()
{
	gameEnded = false;
	if(PlayerPrefs.GetInt("musicEvent")==1)
	{
		ambientSound.Play();
	}
	GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = false;
	//pP = 0;
	score = 0;
	lifePlus = 0;
}

function Update ()
{
	if(lifePlus >= 100)
	{
		lifePlus -= 100;
		GameObject.FindWithTag("MainCamera").SendMessage("MoreLifes");
	}
	
	if(GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled == true)
	{
		gameEnded = true;
	}
	//if(pP >= 10)
	//{
	//	actualPP ++;
	//	PlayerPrefs.SetInt("pPoints", PlayerPrefs.GetInt("pPoints") + actualPP);
	//	pP = 0;
	//}
	highScoreGO.GetComponent.<TextMesh>().text = "Best Score : " + PlayerPrefs.GetInt("highScore");
	if(gameEnded == false)
	{
		scoreGO.GetComponent.<TextMesh>().text = "" + score;
	}
	if(score > PlayerPrefs.GetInt("highScore"))
	{
		PlayerPrefs.SetInt("highScore", score);
	}
	//if(GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled == true)
	//{
	//	actualPP = 0;
	//}
	
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
	//pP ++;
	//pP ++;
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
	//pP ++;
	//pP ++;
	//pP ++;
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