#pragma strict

var targetEasyChecker : boolean;
var targetMediumChecker : boolean;
var targetHardChecker : boolean;

function Start ()
{
	PlayerPrefs.SetInt ("AdmobChecker", 2);
}

function Update ()
{
	//Easy
	if(targetEasyChecker == true && gameObject.transform.localScale.x > 0.023 && gameObject.transform.localScale.x < 0.0852)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("CircleEasy");
	}
	else
	{
		GameObject.FindWithTag("MainCamera").SendMessage("CircleEasyOff");
	}
	//Medium
	if(targetMediumChecker == true && gameObject.transform.localScale.x > 0.0392 && gameObject.transform.localScale.x < 0.0852)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("CircleMedium");
	}
	else
	{
		GameObject.FindWithTag("MainCamera").SendMessage("CircleMediumOff");
	}
	//Hard & HardFP
	if(targetHardChecker == true && gameObject.transform.localScale.x > 0.052 && gameObject.transform.localScale.x < 0.0852)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("CircleHard");
	}
	else
	{
		GameObject.FindWithTag("MainCamera").SendMessage("CircleHardOff");
	}
	
	
	if(targetEasyChecker == true)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("TargetCheckEasy");
	}
	if(targetMediumChecker == true)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("TargetCheckMedium");
	}
	if(targetHardChecker == true)
	{
		GameObject.FindWithTag("MainCamera").SendMessage("TargetCheckHard");
	}
}




public function TargetEasyChecker ()
{
	targetEasyChecker = true;
}
public function TargetMediumChecker ()
{
	targetMediumChecker = true;
}
public function TargetHardChecker ()
{
	targetHardChecker = true;
}

public function TargetCheckersOff ()
{
	targetEasyChecker = false;
	targetMediumChecker = false;
	targetHardChecker = false;
}