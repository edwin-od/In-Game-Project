#pragma strict

var musics : GameObject;
var sounds : GameObject;
var scoreObj : GameObject;
var circleObj : GameObject;
var buyMoreObj : GameObject;

var life1 : GameObject;
var life0 : GameObject;

var lifes : int;
var gameEnded : boolean;

var lifeMinus : AudioSource;

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
	
	sounds.SetActive(false);
	musics.SetActive(false);

	PlayerPrefs.SetInt("Buy2", 1);

	buyMoreObj.SetActive(false);

	life1.SetActive(true);
	life0.SetActive(false);

	lifes = 1;

	gameEnded = false;
	
	easy = false;
	medium = false;
	hard = false;
	
	circleEasy = false;
	circleMedium = false;
	circleHard = false;
}

function Update ()
{
	if(PlayerPrefs.GetInt("Buy2")==2)
	{
		Add1Life();
		circleObj.SetActive(true);
		circleObj.animation.Play("Scale_Animation");
		scoreObj.SetActive(true);
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		GameObject.Find("BuyMoreLives").SetActive(false);
	}
	
	if(buyMoreObj.activeSelf)
	{
		gameObject.GetComponent(Pause_Hardcore).enabled = false;
		gameObject.GetComponent(Back).enabled = false;
		gameObject.GetComponent(BackThanks).enabled = true;
	}
	if(!buyMoreObj.activeSelf)
	{
		if(gameObject.GetComponent(GameOver).enabled == true)
		{
			Destroy(gameObject.GetComponent(Pause_Hardcore));
			gameObject.GetComponent(Back).enabled = true;
			Destroy(gameObject.GetComponent(BackThanks));
			Destroy(gameObject.GetComponent(Event_Handler_Hardcore));
			Destroy(this);
			gameEnded = true;
		}
		if(gameObject.GetComponent(GameOver).enabled == false)
		{
			gameObject.GetComponent(Pause_Hardcore).enabled = true;
			gameObject.GetComponent(Back).enabled = false;
			gameObject.GetComponent(BackThanks).enabled = false;
		}
	}


	if(lifes == 1)
	{
		life1.SetActive(true);
		life0.SetActive(false);
	}
	if(lifes == 0)
	{
		life1.SetActive(false);
		life0.SetActive(true);
	}
	
	if(easy == true && circleEasy == true)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("EasyScore");
		DestroyGameObject();
		//Instantiate(circle, circleSpawn.position, circleSpawn.rotation);
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		easy = false;
	}
	if(medium == true && circleMedium == true)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("MediumScore");
		DestroyGameObject();
		//Instantiate(circle, circleSpawn.position, circleSpawn.rotation);
		GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
		GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
		GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
		medium = false;
	}
	if(hard == true && circleHard == true)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("HardScore");
		DestroyGameObject();
		//Instantiate(circle, circleSpawn.position, circleSpawn.rotation);
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
						BuyMore();
						//GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = true;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SetActive(false);
						GameObject.FindWithTag("Score").SetActive(false);
						targetCheckEasy = false;
						easy = false;
					}
					if(lifes > 0 && lifes <= 1)
					{
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							lifeMinus.Play();
						}
						lifes --;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
						GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
						GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
						easy = false;
					}
				}
				//if(PlayerPrefs.GetInt("soundEvent")==1)
				//{
				//	ballLunchSound.Play();
				//}
			}
		}
		if (Input.GetMouseButtonUp(0 && gameEnded == false))
		{
			if(targetCheckMedium == true)
			{
				
				medium = true;
				if(circleMedium != true)
				{
					if(lifes <= 0)
					{
						BuyMore();
						//GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = true;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SetActive(false);
						GameObject.FindWithTag("Score").SetActive(false);
						targetCheckMedium = false;
						medium = false;
					}
					if(lifes > 0 && lifes <= 1)
					{
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							lifeMinus.Play();
						}
						lifes --;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
						GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
						GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
						medium = false;
					}
				}
				//if(PlayerPrefs.GetInt("soundEvent")==1)
				//{
				//	ballLunchSound.Play();
				//}
			}
		}
		if (Input.GetMouseButtonUp(0) && gameEnded == false)
		{
			if(targetCheckHard == true)
			{
				
				hard = true;
				if(circleHard != true)
				{
					if(lifes <= 0)
					{
						BuyMore();
						//GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = true;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SetActive(false);
						GameObject.FindWithTag("Score").SetActive(false);
						targetCheckHard = false;
						hard = false;
					}
					if(lifes > 0 && lifes <= 1)
					{
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							lifeMinus.Play();
						}
						lifes --;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
						GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
						GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
						hard = false;
					}
				}
				//if(PlayerPrefs.GetInt("soundEvent")==1)
				//{
				//	ballLunchSound.Play();
				//}
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
						BuyMore();
						//GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = true;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SetActive(false);
						GameObject.FindWithTag("Score").SetActive(false);
						targetCheckEasy = false;
						easy = false;
					}
					if(lifes > 0 && lifes <= 1)
					{
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							lifeMinus.Play();
						}
						lifes --;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
						GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
						GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
						easy = false;
					}
				}
				//if(PlayerPrefs.GetInt("soundEvent")==1)
				//{
				//	ballLunchSound.Play();
				//}
			}
		}
		if (Input.GetTouch(i).phase == TouchPhase.Ended && gameEnded == false)
		{
			if(targetCheckMedium == true)
			{
				
				medium = true;
				if(circleMedium != true)
				{
					if(lifes <= 0)
					{
						BuyMore();
						//GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = true;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SetActive(false);
						GameObject.FindWithTag("Score").SetActive(false);
						targetCheckMedium = false;
						medium = false;
					}
					if(lifes > 0 && lifes <= 1)
					{
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							lifeMinus.Play();
						}
						lifes --;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
						GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
						GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
						medium = false;
					}
				}
				//if(PlayerPrefs.GetInt("soundEvent")==1)
				//{
				//	ballLunchSound.Play();
				//}
			}
		}
		if (Input.GetTouch(i).phase == TouchPhase.Ended && gameEnded == false)
		{
			if(targetCheckHard == true)
			{
				
				hard = true;
				if(circleHard != true)
				{
					if(lifes <= 0)
					{
						BuyMore();
						//GameObject.FindWithTag("MainCamera").GetComponent(GameOver).enabled = true;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SetActive(false);
						GameObject.FindWithTag("Score").SetActive(false);
						targetCheckHard = false;
						hard = false;
					}
					if(lifes > 0 && lifes <= 1)
					{
						if(PlayerPrefs.GetInt("soundEvent")==1)
						{
							lifeMinus.Play();
						}
						lifes --;
						DestroyGameObject();
						GameObject.FindWithTag("Circle").SendMessage("ChangeSpeed");
						GameObject.FindWithTag("Circle").SendMessage("SpawnTarget");
						GameObject.FindWithTag("Circle").SendMessage("TargetCheckersOff");
						hard = false;
					}
				}
				//if(PlayerPrefs.GetInt("soundEvent")==1)
				//{
				//	ballLunchSound.Play();
				//}
			}
		}
	
	}
}

function BuyMore ()
{
	buyMoreObj.SetActive(true);
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


public function MoreLifes ()
{
	if(lifes >= 0 && lifes < 2)
	{
		lifes ++;
	}
}

function Add1Life ()
{
	lifes = 1;
	PlayerPrefs.SetInt("Buy2", 1);
}

public function ChangeScoreOver ()
{
	lifes = -12303;
}