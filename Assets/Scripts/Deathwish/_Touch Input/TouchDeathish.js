#pragma strict

var lifeMinus : AudioSource;
var deathObj : GameObject;
var timerObj : GameObject;
var timerObjRed : GameObject;
var finalScoreGO : GameObject;
var buyMoreObj : GameObject;
//var countdownObj : GameObject;
var timeObj : GameObject;
var livesObj : GameObject;
var livesHeartObj : GameObject;
var circleObj : GameObject;
//private var countdown : int;
private var lifes : int;
var lifeTest : int;
 var scoreF : float;
 var score : int;
var countdownF : float;
var secondsF : float;
var minutesF : float;
var hoursF : float;
var daysF : float;
var seconds : int;
var minutes : int;
var hours : int;
var days : int;

private var buyMoreOn : boolean;
private var gameEnded : boolean;

var easy : boolean;
var medium : boolean;
var hard : boolean;

var targetCheckEasy : boolean;
var targetCheckMedium : boolean;
var targetCheckHard : boolean;

var circleEasy : boolean;
var circleMedium : boolean;
var circleHard : boolean;

function Start ()
{
	deathObj.SetActive(true);
	gameEnded = false;
	buyMoreOn = false;
	countdownF = 10;
	//scoreF = PlayerPrefs.GetInt("DEATHWISHtotalSCORE");
	scoreF = PlayerPrefs.GetFloat("DeathwishScore") + PlayerPrefs.GetFloat("DeathwishScoreM") * 60 + PlayerPrefs.GetFloat("DeathwishScoreH") * 3600 + PlayerPrefs.GetFloat("DeathwishScoreD") * 86400;
	secondsF = PlayerPrefs.GetFloat("DeathwishScore");
	minutesF = PlayerPrefs.GetFloat("DeathwishScoreM");
	hoursF = PlayerPrefs.GetFloat("DeathwishScoreH");
	daysF = PlayerPrefs.GetFloat("DeathwishScoreD");
	lifes = PlayerPrefs.GetInt("DeathwishLives");
	buyMoreObj.SetActive(false);
}

function Update ()
{
	if(PlayerPrefs.GetInt("BuyDeath1")==2)
	{
		Add1Life();
		circleObj.SetActive(true);
		circleObj.animation.Play("Scale_Animation");
		timeObj.SetActive(true);
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		GameObject.Find("BuyMoreLives").SetActive(false);
	}
	if(PlayerPrefs.GetInt("BuyDeath2")==2)
	{
		Add2Life();
		circleObj.SetActive(true);
		circleObj.animation.Play("Scale_Animation");
		timeObj.SetActive(true);
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		GameObject.Find("BuyMoreLives").SetActive(false);
	}
	if(PlayerPrefs.GetInt("BuyDeath3")==2)
	{
		Add3Life();
		circleObj.SetActive(true);
		timeObj.SetActive(true);
		circleObj.animation.Play("Scale_Animation");
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		GameObject.Find("BuyMoreLives").SetActive(false);
	}
	
	if(buyMoreObj.activeSelf)
	{
		gameObject.GetComponent(PauseDeathwish).enabled = false;
		gameObject.GetComponent(BackDeathwish).enabled = false;
		gameObject.GetComponent(BackThanksd).enabled = true;
		timerObj.animation.Stop("Timer_Animation");
		buyMoreOn = true;
		deathObj.SetActive(false);
		timerObj.SetActive(false);
		timerObjRed.SetActive(false);
	}
	if(!buyMoreObj.activeSelf)
	{
		if(gameObject.GetComponent(GameOver).enabled == true)
		{
			Destroy(gameObject.GetComponent(PauseDeathwish));
			gameObject.GetComponent(BackDeathwish).enabled = true;
			Destroy(gameObject.GetComponent(BackThanksd));
			gameEnded = true;
			Destroy(buyMoreObj);
			Destroy(livesHeartObj);
			Destroy(timerObj);
			Destroy(timerObjRed);
			Destroy(deathObj);
			finalScoreGO.GetComponent.<TextMesh>().text = "Score : " + score;
			Destroy(this);
		}
		if(gameObject.GetComponent(GameOver).enabled == false)
		{
			gameObject.GetComponent(PauseDeathwish).enabled = true;
			gameObject.GetComponent(BackDeathwish).enabled = false;
			gameObject.GetComponent(BackThanksd).enabled = false;
			timerObj.animation.Play("Timer_Animation");
			timerObj.SetActive(true);
			timerObjRed.SetActive(true);
		}
	}
	
	lifeTest = lifes;
	livesObj.GetComponent.<TextMesh>().text = "" + lifes;
	PlayerPrefs.SetFloat("DeathwishScore", secondsF);
	PlayerPrefs.SetFloat("DeathwishScoreM", minutesF);
	PlayerPrefs.SetFloat("DeathwishScoreH", hoursF);
	PlayerPrefs.SetFloat("DeathwishScoreD", daysF);
	PlayerPrefs.SetInt("DeathwishLives", lifes);
	if(countdownF <= 10)
	{
		if(buyMoreOn == false)
		{
			countdownF -= Time.deltaTime;
		}
	}
	days = daysF;
	minutes = minutesF;
	hours = hoursF;
	if(buyMoreOn == false)
	{
		secondsF += Time.deltaTime;
	}
	scoreF += Time.deltaTime;
	score = scoreF;
	if(score > PlayerPrefs.GetInt("DEATHWISHtotalSCORE"))
	{
		PlayerPrefs.SetInt("DEATHWISHtotalSCORE", score);
	}
	seconds = secondsF;
	//countdown = countdownF;
	
	//timerObj.animation.Play("Timer_Animation");
	
	//countdownObj.GetComponent.<TextMesh>().text = "" + countdown;
	if(secondsF<=10&&minutesF<=10&&hoursF<=10&&daysF<=10)
	{timeObj.GetComponent.<TextMesh>().text="0"+days+":0"+hours+":0"+minutes+":0"+seconds;}
	if(secondsF>=10&&minutesF<=10&&hoursF<=10&&daysF<=10)
	{timeObj.GetComponent.<TextMesh>().text="0"+days+":0"+hours+":0"+minutes+":"+seconds;}
	if(secondsF<=10&&minutesF>=10&&hoursF<=10&&daysF<=10)
	{timeObj.GetComponent.<TextMesh>().text="0"+days+":0"+hours+":"+minutes+":0"+seconds;}
	if(secondsF<=10&&minutesF<=10&&hoursF>=10&&daysF<=10)
	{timeObj.GetComponent.<TextMesh>().text="0"+days+":"+hours+":0"+minutes+":0"+seconds;}
	if(secondsF>=10&&minutesF>=10&&hoursF<=10&&daysF<=10)
	{timeObj.GetComponent.<TextMesh>().text="0"+days+":0"+hours+":"+minutes+":"+seconds;}
	if(secondsF<=10&&minutesF>=10&&hoursF>=10&&daysF<=10)
	{timeObj.GetComponent.<TextMesh>().text="0"+days+":"+hours+":"+minutes+":0"+seconds;}
	if(secondsF>=10&&minutesF<=10&&hoursF>=10&&daysF<=10)
	{timeObj.GetComponent.<TextMesh>().text="0"+days+":"+hours+":0"+minutes+":"+seconds;}
	if(secondsF >= 60) { secondsF-=60; minutesF+=1; }
	if(minutesF >= 60) { minutesF-=60; hoursF+=1; }
	if(daysF >= 24) { hours-=24; daysF+=1; }
	if(countdownF <= 0)
	{
		if(PlayerPrefs.GetInt("soundEvent")==1)
		{
			lifeMinus.Play();
		}
		lifes -= 1;
		timerObj.animation.Stop("Timer_Animation");
		timerObj.animation.Play("Timer_Animation");
		DestroyGameObject();
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		countdownF = 10;
	}
	if(lifes <= 0)
	{
		timerObj.animation.Stop("Timer_Animation");
		timerObj.animation.Play("Timer_Animation");
		countdownF = 10;
		timeObj.SetActive(false);
		buyMoreObj.SetActive(true);
		DestroyGameObject();
		GameObject.FindWithTag("Circle").SetActive(false);
		GameObject.FindWithTag("Score").SetActive(false);
		GetComponent(TouchDeathish).enabled = false;
	}
	
	if(easy == true && circleEasy == true)
	{
		timerObj.animation.Stop("Timer_Animation");
		timerObj.animation.Play("Timer_Animation");
		countdownF = 10;
		GameObject.FindWithTag("MainCamera").SendMessage("EasyScore");
		DestroyGameObject();
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		easy = false;
	}
	if(medium == true && circleMedium == true)
	{
		timerObj.animation.Stop("Timer_Animation");
		timerObj.animation.Play("Timer_Animation");
		countdownF = 10;
		GameObject.FindWithTag("MainCamera").SendMessage("MediumScore");
		DestroyGameObject();
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		medium = false;
	}
	if(hard == true && circleHard == true)
	{
		timerObj.animation.Stop("Timer_Animation");
		timerObj.animation.Play("Timer_Animation");
		countdownF = 10;
		GameObject.FindWithTag("MainCamera").SendMessage("HardScore");
		DestroyGameObject();
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		hard = false;
	}
	
	if (Input.GetMouseButtonUp(0) && gameEnded == false)
	{
		if(targetCheckEasy == true)
		{
			
			easy = true;
			if(circleEasy != true)
			{
				if(lifes <= 0)
				{
					timeObj.SetActive(false);
					buyMoreObj.SetActive(true);
					DestroyGameObject();
					GameObject.FindWithTag("Circle").SetActive(false);
					GameObject.FindWithTag("Score").SetActive(false);
					GetComponent(TouchDeathish).enabled = false;
					targetCheckEasy = false;
					easy = false;
				}
				if(lifes > 0)
				{
					if(PlayerPrefs.GetInt("soundEvent")==1)
					{
						lifeMinus.Play();
					}
					timerObj.animation.Stop("Timer_Animation");
					timerObj.animation.Play("Timer_Animation");
					countdownF = 10;
					lifes -=1;
					DestroyGameObject();
					GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
					GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
					GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
					easy = false;
				}
			}
		}
		if(targetCheckMedium == true)
		{
			
			medium = true;
			if(circleMedium != true)
			{
				if(lifes <= 0)
				{
					timeObj.SetActive(false);
					buyMoreObj.SetActive(true);
					DestroyGameObject();
					GameObject.FindWithTag("Circle").SetActive(false);
					GameObject.FindWithTag("Score").SetActive(false);
					GetComponent(TouchDeathish).enabled = false;
					targetCheckMedium = false;
					medium = false;
				}
				if(lifes > 0)
				{
					if(PlayerPrefs.GetInt("soundEvent")==1)
					{
						lifeMinus.Play();
					}
					timerObj.animation.Stop("Timer_Animation");
					timerObj.animation.Play("Timer_Animation");
					countdownF = 10;
					lifes -=1;
					DestroyGameObject();
					GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
					GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
					GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
					medium = false;
				}
			}
		}
		if(targetCheckHard == true)
		{
			
			hard = true;
			if(circleHard != true)
			{
				if(lifes <= 0)
				{
					timeObj.SetActive(false);
					buyMoreObj.SetActive(true);
					DestroyGameObject();
					GameObject.FindWithTag("Circle").SetActive(false);
					GameObject.FindWithTag("Score").SetActive(false);
					GetComponent(TouchDeathish).enabled = false;
					targetCheckHard = false;
					hard = false;
				}
				if(lifes > 0)
				{
					if(PlayerPrefs.GetInt("soundEvent")==1)
					{
						lifeMinus.Play();
					}
					timerObj.animation.Stop("Timer_Animation");
					timerObj.animation.Play("Timer_Animation");
					countdownF = 10;
					lifes -=1;
					DestroyGameObject();
					GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
					GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
					GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
					hard = false;
				}
			}
		}
	}
	for (var i = 0; i < Input.touchCount; ++i) {
		if (Input.GetTouch(i).phase == TouchPhase.Ended && gameEnded == false)
		{
			if(targetCheckEasy == true)
			{
				
				easy = true;
				if(circleEasy != true)
				{
					if(lifes <= 0)
					{
						timeObj.SetActive(false);
						buyMoreObj.SetActive(true);
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SetActive(false);
						GameObject.FindWithTag("Score").SetActive(false);
						GetComponent(TouchDeathish).enabled = false;
						targetCheckEasy = false;
						easy = false;
					}
					if(lifes > 0)
					{
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							lifeMinus.Play();
						}
						timerObj.animation.Stop("Timer_Animation");
						timerObj.animation.Play("Timer_Animation");
						countdownF = 10;
						lifes -=1;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
						GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
						GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
						easy = false;
					}
				}
			}
			if(targetCheckMedium == true)
			{
				
				medium = true;
				if(circleMedium != true)
				{
					if(lifes <= 0)
					{
						timeObj.SetActive(false);
						buyMoreObj.SetActive(true);
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SetActive(false);
						GameObject.FindWithTag("Score").SetActive(false);
						GetComponent(TouchDeathish).enabled = false;
						targetCheckMedium = false;
						medium = false;
					}
					if(lifes > 0)
					{
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							lifeMinus.Play();
						}
						timerObj.animation.Stop("Timer_Animation");
						timerObj.animation.Play("Timer_Animation");
						countdownF = 10;
						lifes -=1;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
						GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
						GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
						medium = false;
					}
				}
			}
			if(targetCheckHard == true)
			{
				
				hard = true;
				if(circleHard != true)
				{
					if(lifes <= 0)
					{
						timeObj.SetActive(false);
						buyMoreObj.SetActive(true);
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SetActive(false);
						GameObject.FindWithTag("Score").SetActive(false);
						GetComponent(TouchDeathish).enabled = false;
						targetCheckHard = false;
						hard = false;
					}
					if(lifes > 0)
					{
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							lifeMinus.Play();
						}
						timerObj.animation.Stop("Timer_Animation");
						timerObj.animation.Play("Timer_Animation");
						countdownF = 10;
						lifes -=1;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
						GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
						GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
						hard = false;
					}
				}
			}
		}
	}
}

function DestroyGameObject ()
{
	targetCheckEasy = false;
	targetCheckMedium = false;
	targetCheckHard = false;
	Destroy (GameObject.FindWithTag("Target_easy"));
	Destroy (GameObject.FindWithTag("Target_medium"));
	Destroy (GameObject.FindWithTag("Target_hard"));
}

public function CircleHard ()
{
	circleHard = true;
}

public function CircleMedium ()
{
	circleMedium = true;
}


public function CircleEasy ()
{
	circleEasy = true;
}





public function CircleEasyOff ()
{
	circleEasy = false;
}

public function CircleMediumOff ()
{
	circleMedium = false;
}

public function CircleHardOff ()
{
	circleHard = false;
}

public function MoreLifes(){ }

public function TargetCheckEasy ()
{
	targetCheckEasy = true;
}

public function TargetCheckMedium ()
{
	targetCheckMedium = true;
}
public function TargetCheckHard ()
{
	targetCheckHard = true;
}
function Add1Life ()
{
	lifes += 5;
	PlayerPrefs.SetInt("BuyDeath1", 1);
	buyMoreOn = false;
}
function Add2Life ()
{
	lifes += 10;
	PlayerPrefs.SetInt("BuyDeath2", 1);
	buyMoreOn = false;
}
function Add3Life ()
{
	lifes += 20;
	PlayerPrefs.SetInt("BuyDeath3", 1);
	buyMoreOn = false;
}
public function ChangeScoreOver ()
{
	//lifes = -12303;
}