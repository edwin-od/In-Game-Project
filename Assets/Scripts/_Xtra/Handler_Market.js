#pragma strict

var Buy5lifes : GameObject;
var Buy5lifesOff : GameObject;
var Buy10lifes : GameObject;
var Buy10lifesOff : GameObject;
var Buy20lifes : GameObject;
var Buy20lifesOff : GameObject;

function Start ()
{
	Buy5lifes.SetActive(false);
	Buy5lifesOff.SetActive(true);
	
	Buy10lifes.SetActive(false);
	Buy10lifesOff.SetActive(true);
	
	Buy20lifes.SetActive(false);
	Buy20lifesOff.SetActive(true);
}

function Update ()
{
	if(PlayerPrefs.GetInt("BuyDeath1") == 2)
	{
		Buy5lifes.SetActive(false);
		Buy5lifesOff.SetActive(true);
	}
	if(PlayerPrefs.GetInt("BuyDeath2") == 2)
	{
		Buy10lifes.SetActive(false);
		Buy10lifesOff.SetActive(true);
	}
	if(PlayerPrefs.GetInt("BuyDeath3") == 2)
	{
		Buy20lifes.SetActive(false);
		Buy20lifesOff.SetActive(true);
	}
	if(PlayerPrefs.GetFloat("DeathwishScore") == 0 
	&& PlayerPrefs.GetFloat("DeathwishScoreM") == 0 
	&& PlayerPrefs.GetFloat("DeathwishScoreH") == 0
	&& PlayerPrefs.GetFloat("DeathwishScoreD") == 0
	&& PlayerPrefs.GetInt("DeathwishLives") == 10)
	{
		Buy5lifes.SetActive(false);
		Buy5lifesOff.SetActive(true);
		
		Buy10lifes.SetActive(false);
		Buy10lifesOff.SetActive(true);
		
		Buy20lifes.SetActive(false);
		Buy20lifesOff.SetActive(true);
	}
	if(PlayerPrefs.GetFloat("DeathwishScore") != 0
	||PlayerPrefs.GetFloat("DeathwishScoreM") != 0
	||PlayerPrefs.GetFloat("DeathwishScoreH") != 0
	||PlayerPrefs.GetFloat("DeathwishScoreD") != 0)
	{
		if(PlayerPrefs.GetInt("BuyDeath1") == 1)
		{
			Buy5lifes.SetActive(true);
			Buy5lifesOff.SetActive(false);
		}
		if(PlayerPrefs.GetInt("BuyDeath2") == 1)
		{
			Buy10lifes.SetActive(true);
			Buy10lifesOff.SetActive(false);
		}
		if(PlayerPrefs.GetInt("BuyDeath3") == 1)
		{
			Buy20lifes.SetActive(true);
			Buy20lifesOff.SetActive(false);
		}
		if(PlayerPrefs.GetInt("BuyDeath1") == 2)
		{
			Buy5lifes.SetActive(false);
			Buy5lifesOff.SetActive(true);
		}
		if(PlayerPrefs.GetInt("BuyDeath2") == 2)
		{
			Buy10lifes.SetActive(false);
			Buy10lifesOff.SetActive(true);
		}
		if(PlayerPrefs.GetInt("BuyDeath3") == 2)
		{
			Buy20lifes.SetActive(false);
			Buy20lifesOff.SetActive(true);
		}
	}
}