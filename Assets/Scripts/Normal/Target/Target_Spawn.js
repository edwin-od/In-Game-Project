#pragma strict

var targetObjects : GameObject[];
var targetSpawnPoint : Transform;
var spawnedBool : boolean;

function Start ()
{
	spawnedBool = false;
}

function Update ()
{
	if (spawnedBool == false)
	{
		var targetObjectsIndex : int = Random.Range (0, targetObjects.Length);
		Instantiate (targetObjects[targetObjectsIndex], targetSpawnPoint.position, targetSpawnPoint.rotation);
		spawnedBool = true;
	}
	else
	{
		return;
	}
	
	if(0 <= targetObjectsIndex && targetObjectsIndex <= 7)
	{
		GameObject.FindWithTag("Circle").SendMessage("TargetEasyChecker");
	}
	if(8 <= targetObjectsIndex && targetObjectsIndex <= 14)
	{
		GameObject.FindWithTag("Circle").SendMessage("TargetMediumChecker");
	}
	if(15 <= targetObjectsIndex && targetObjectsIndex <= 25)
	{
		GameObject.FindWithTag("Circle").SendMessage("TargetHardChecker");
	}
}

public function SpawnTarget ()
{
	spawnedBool = false;
}