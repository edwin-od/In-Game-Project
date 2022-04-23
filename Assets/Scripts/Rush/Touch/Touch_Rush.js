#pragma strict

var sounds : GameObject;
var musics : GameObject;
var scoreObj : GameObject;
var circleObj : GameObject;
var score123Spawn : Transform;
var scoreMinus : GameObject;

var timerObj : GameObject;

var gameEnded : boolean;

var easy : boolean;
var medium : boolean;
var hard : boolean;

var targetCheckEasy : boolean;
var targetCheckMedium : boolean;
var targetCheckHard : boolean;

var circleEasy : boolean;
var circleMedium : boolean;
var circleHard : boolean;

var timer : float = 60.0;
private var timerI : int;

private var lifes : int;

var timeMinus : AudioSource;

function Start ()
{
	
	
	gameObject.GetComponent(Back).enabled = false;
	gameObject.GetComponent(PauseRush).enabled = true;
	gameObject.GetComponent(GameOver).enabled = false;
	
	gameEnded = false;
	
	easy = false;
	medium = false;
	hard = false;
	
	circleEasy = false;
	circleMedium = false;
	circleHard = false;
	
	sounds.SetActive(false);
	musics.SetActive(false);
}

function Update ()
{
	if(timer <= 60)
	{
		timer -= Time.deltaTime;
	}
	//timerI = parseInt(timer);
	//timerI = Mathf.FloorToInt(timer);
	timerI = timer;
	timerObj.GetComponent.<TextMesh>().text = "" + timerI/*.ToString("0")*/;
	if(timer <= 10)
	{
		timerObj.GetComponent.<TextMesh>().color = Color.red;
	}
	if(timer >= 10)
	{
		timerObj.GetComponent.<TextMesh>().color = Color.black;
	}
	if(timer <= 0)
	{
		gameObject.GetComponent(GameOver).enabled = true;
		DestroyGameObject();
		Destroy(this);
	}
	
	if(gameObject.GetComponent(GameOver).enabled == true)
	{
		gameEnded = true;
		Destroy(GameObject.Find("Timer"));
		Destroy(scoreObj);
		gameObject.GetComponent(Back).enabled = true;
		gameObject.GetComponent(PauseRush).enabled = false;
	}
	
	if(easy == true && circleEasy == true)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("EasyScore");
		DestroyGameObject();
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		easy = false;
	}
	if(medium == true && circleMedium == true)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("MediumScore");
		DestroyGameObject();
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		medium = false;
	}
	if(hard == true && circleHard == true)
	{
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
				
				timer -= 5.0;
				if(PlayerPrefs.GetInt("soundEvent")==1)
				{
					timeMinus.Play();
				}
				
				Instantiate(scoreMinus, score123Spawn.position, score123Spawn.rotation);
				easy = false;
			}
		}
	}
	if (Input.GetMouseButtonUp(0) && gameEnded == false)
		{
			if(targetCheckMedium == true)
			{
				
				medium = true;
				if(circleMedium != true)
				{
					
					timer -= 5.0;
					if(PlayerPrefs.GetInt("soundEvent")==1)
					{
						timeMinus.Play();
					}
					
					Instantiate(scoreMinus, score123Spawn.position, score123Spawn.rotation);
					medium = false;
				}
				
			}
		}
		if (Input.GetMouseButtonUp(0) && gameEnded == false)
		{
			if(targetCheckHard == true)
			{
				
				hard = true;
				if(circleHard != true)
				{
					
					timer -= 5.0;
					if(PlayerPrefs.GetInt("soundEvent")==1)
					{
						timeMinus.Play();
					}
					
					Instantiate(scoreMinus, score123Spawn.position, score123Spawn.rotation);
					hard = false;
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
						
						timer -= 5.0;
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							timeMinus.Play();
						}
						
						Instantiate(scoreMinus, score123Spawn.position, score123Spawn.rotation);
						easy = false;
					}
				}
			}
			if (Input.GetTouch(i).phase == TouchPhase.Ended && gameEnded == false)
			{
				if(targetCheckMedium == true)
				{
					
					medium = true;
					if(circleMedium != true)
					{
						
						timer -= 5.0;
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							timeMinus.Play();
						}
						
						Instantiate(scoreMinus, score123Spawn.position, score123Spawn.rotation);
						medium = false;
					}
				}
			}
			if (Input.GetTouch(i).phase == TouchPhase.Ended && gameEnded == false)
			{
				if(targetCheckHard == true)
				{
					
					hard = true;
					if(circleHard != true)
					{
						timer -= 5.0;
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							timeMinus.Play();
						}
						Instantiate(scoreMinus, score123Spawn.position, score123Spawn.rotation);
						hard = false;
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
public function AddTime ()
{
	timer += 3;
}

public function ChangeScoreOver ()
{
	lifes = -12303;
}
