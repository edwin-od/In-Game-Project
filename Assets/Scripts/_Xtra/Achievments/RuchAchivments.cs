using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi;
using UnityEngine.SocialPlatforms;

public class RuchAchivments : MonoBehaviour {
	
	private string hardcoreAchivment1 = "CgkIp-2sksMIEAIQEA";
	private string hardcoreAchivment2 = "CgkIp-2sksMIEAIQEQ";
	
	void Start () {
		
	}
	
	void Update ()
	{
		if(PlayerPrefs.GetInt ("RushAchiv") >= 50)
		{
			Social.ReportProgress(hardcoreAchivment1, 100.0f, (bool success) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("RushAchiv") >= 150)
		{
			Social.ReportProgress(hardcoreAchivment2, 100.0f, (bool succes) => {
				//Unlocked
			});
		}
	}
}
