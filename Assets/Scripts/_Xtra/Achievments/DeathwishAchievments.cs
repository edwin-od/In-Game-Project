using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi;
using UnityEngine.SocialPlatforms;

public class DeathwishAchievments : MonoBehaviour {

	private string hardcoreAchivment1 = "CgkIp-2sksMIEAIQBw";
	private string hardcoreAchivment2 = "CgkIp-2sksMIEAIQCA";
	private string hardcoreAchivment3 = "CgkIp-2sksMIEAIQCQ";
	private string hardcoreAchivment4 = "CgkIp-2sksMIEAIQCg";
	private string hardcoreAchivment5 = "CgkIp-2sksMIEAIQCw";

	void Start () {
		
	}
	
	void Update ()
	{
		if(PlayerPrefs.GetInt ("DEATHWISHtotalSCORE") >= 900)
		{
			Social.ReportProgress(hardcoreAchivment1, 100.0f, (bool success) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("DEATHWISHtotalSCORE") >= 1800)
		{
			Social.ReportProgress(hardcoreAchivment2, 100.0f, (bool succes) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("DEATHWISHtotalSCORE") >= 3600)
		{
			Social.ReportProgress(hardcoreAchivment3, 100.0f, (bool succe) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("DEATHWISHtotalSCORE") >= 18000)
		{
			Social.ReportProgress(hardcoreAchivment4, 100.0f, (bool succ) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("DEATHWISHtotalSCORE") >= 36000)
		{
			Social.ReportProgress(hardcoreAchivment5, 100.0f, (bool suc) => {
				//Unlocked
			});
		}
	}
}
