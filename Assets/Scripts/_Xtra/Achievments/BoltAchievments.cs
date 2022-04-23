using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi;
using UnityEngine.SocialPlatforms;

public class BoltAchievments : MonoBehaviour {

	private string hardcoreAchivment1 = "CgkIp-2sksMIEAIQEw";
	private string hardcoreAchivment2 = "CgkIp-2sksMIEAIQFA";
	
	void Start () {
		
	}
	
	void Update ()
	{
		if(PlayerPrefs.GetInt ("RushAchiv") >= 200)
		{
			Social.ReportProgress(hardcoreAchivment1, 100.0f, (bool success) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("RushAchiv") >= 400)
		{
			Social.ReportProgress(hardcoreAchivment2, 100.0f, (bool succes) => {
				//Unlocked
			});
		}
	}
}
