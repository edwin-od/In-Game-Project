#pragma strict

var shakeSpeedAnim : float = 2.0;

var myTimer : float = 15.0;
private var handlerLength : float = 6;

private var handler : float[];
private var shakeSpeed : float = 50.0;
var curHandler : String;

var targetEasy : GameObject;
var targetMedium : GameObject;
var targetHard : GameObject;
var buyMore : GameObject;

private var gameEnded : boolean;
private var blurStart : boolean;
private var shakeStart : boolean;
private var timerRunning : boolean;
private var startCoChange : boolean;
private var camCoChange : boolean;

private var randomColor : Color;
private var camRandomColor : Color;
var startCamColor : Color;

function Start ()
{
	gameObject.GetComponent(TwirlEffect).enabled = false;
	gameObject.GetComponent(VortexEffect).enabled = false;
	gameObject.GetComponent(NoiseEffect).enabled = false;
	timerRunning = true;
	gameEnded = false;
	blurStart = false;
	shakeStart = false;
	startCoChange = false;
	camCoChange = false;
	handler = new float[handlerLength];
}

function Update ()
{
	if(camCoChange == true)
	{
		camRandomColor = new Color(Random.value, Random.value, Random.value);
		camera.backgroundColor = camRandomColor;
	}
	if(camCoChange == false)
	{
		camera.backgroundColor = startCamColor;
	}
	
	if(startCoChange == true)
	{
		randomColor = new Color(Random.value, Random.value, Random.value);
		targetEasy.renderer.sharedMaterial.color = randomColor;
		targetMedium.renderer.sharedMaterial.color = randomColor;
		targetHard.renderer.sharedMaterial.color = randomColor;
	}
	if(startCoChange == false)
	{
		targetEasy.renderer.sharedMaterial.color = Color.red;
		targetMedium.renderer.sharedMaterial.color = Color.red;
		targetHard.renderer.sharedMaterial.color = Color.red;
	}

	if(!buyMore.activeSelf)
	{
		timerRunning = true;
		gameEnded = false;
	}
	if(buyMore.activeSelf)
	{	
		gameEnded = true;
		gameObject.animation.Stop("Camera_Shake");
		gameObject.transform.position = Vector3(0, 1.659874, 0);
		gameObject.GetComponent(VortexEffect).enabled = false;
		gameObject.GetComponent(TwirlEffect).enabled = false;
		gameObject.GetComponent(NoiseEffect).enabled = false;
		startCoChange = false;
		camCoChange = false;
		
		curHandler = "...";
		timerRunning = false;
		myTimer = 5.0;
	}
	if(myTimer > 0)
	{
		if(timerRunning == true)
		{
			myTimer -= Time.deltaTime;
		}
	}
	if(myTimer <= 0)
	{
		if(timerRunning == true)
		{
			myTimer = 15.0;
			Transitianor();
		}
	}
	
	if(curHandler == "CameraShake")
	{
		gameObject.animation.Play("Camera_Shake");
		animation["Camera_Shake"].speed = shakeSpeedAnim;
		
		gameObject.GetComponent(VortexEffect).enabled = false;
		gameObject.GetComponent(TwirlEffect).enabled = false;
		gameObject.GetComponent(NoiseEffect).enabled = false;
		startCoChange = false;
		camCoChange = false;
	}
	if(curHandler == "CameraVortex")
	{
		gameObject.GetComponent(VortexEffect).enabled = true;
		
		gameObject.transform.position = Vector3(0, 1.659874, 0);
		gameObject.animation.Stop("Camera_Shake");
		gameObject.GetComponent(TwirlEffect).enabled = false;
		gameObject.GetComponent(NoiseEffect).enabled = false;
		startCoChange = false;
		camCoChange = false;
	}
	if(curHandler == "CameraTwirl")
	{
		gameObject.GetComponent(TwirlEffect).enabled = true;
	
		gameObject.transform.position = Vector3(0, 1.659874, 0);
		gameObject.animation.Stop("Camera_Shake");
		gameObject.GetComponent(VortexEffect).enabled = false;
		gameObject.GetComponent(NoiseEffect).enabled = false;
		startCoChange = false;
		camCoChange = false;
	}
	if(curHandler == "CameraNoise")
	{
		gameObject.GetComponent(NoiseEffect).enabled = true;
		
		gameObject.transform.position = Vector3(0, 1.659874, 0);
		gameObject.animation.Stop("Camera_Shake");
		gameObject.GetComponent(VortexEffect).enabled = false;
		gameObject.GetComponent(TwirlEffect).enabled = false;
		startCoChange = false;
		camCoChange = false;
	}
	if(curHandler == "TargetRandomCo")
	{
		startCoChange = true;
		
		gameObject.transform.position = Vector3(0, 1.659874, 0);
		gameObject.animation.Stop("Camera_Shake");
		gameObject.GetComponent(VortexEffect).enabled = false;
		gameObject.GetComponent(TwirlEffect).enabled = false;
		gameObject.GetComponent(NoiseEffect).enabled = false;
		camCoChange = false;
	}
	if(curHandler == "CameraBgd")
	{
		camCoChange = true;
		
		gameObject.transform.position = Vector3(0, 1.659874, 0);
		gameObject.animation.Stop("Camera_Shake");
		gameObject.GetComponent(VortexEffect).enabled = false;
		gameObject.GetComponent(TwirlEffect).enabled = false;
		gameObject.GetComponent(NoiseEffect).enabled = false;
		startCoChange = false;
	}
}

function Transitianor ()
{
	var handlerIndex : int = Random.Range (0, handler.Length);
	
	if(handlerIndex == 0)
	{
		curHandler = "CameraShake";
	}
	if(handlerIndex == 1)
	{
		curHandler = "CameraVortex";
	}
	if(handlerIndex == 2)
	{
		curHandler = "CameraTwirl";
	}
	if(handlerIndex == 3)
	{
		curHandler = "CameraNoise";
	}
	if(handlerIndex == 4)
	{
		curHandler = "TargetRandomCo";
	}
	if(handlerIndex == 5)
	{
		curHandler = "CameraBgd";
	}
}

public function StopEveryThing ()
{
	gameObject.animation.Stop("Camera_Shake");
	gameObject.transform.position = Vector3(0, 1.659874, 0);
	gameObject.GetComponent(VortexEffect).enabled = false;
	gameObject.GetComponent(TwirlEffect).enabled = false;
	gameObject.GetComponent(NoiseEffect).enabled = false;
	startCoChange = false;
	camCoChange = false;
	
	curHandler = "...";
	timerRunning = false;
	myTimer = 1.0;
}
public function StartEveryThing ()
{
	timerRunning = true;
}