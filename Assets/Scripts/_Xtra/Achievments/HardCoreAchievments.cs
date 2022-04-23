using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi;
using UnityEngine.SocialPlatforms;

public class HardCoreAchievments : MonoBehaviour {

	private string hardcoreAchivment1 = "CgkIp-2sksMIEAIQAQ";
	private string hardcoreAchivment2 = "CgkIp-2sksMIEAIQAg";
	private string hardcoreAchivment3 = "CgkIp-2sksMIEAIQAw";
	private string hardcoreAchivment4 = "CgkIp-2sksMIEAIQBA";
	private string hardcoreAchivment5 = "CgkIp-2sksMIEAIQBQ";
	private string hardcoreAchivment6 = "CgkIp-2sksMIEAIQDw";

	void Start () {
	
	}
	
	void Update ()
	{
		if(PlayerPrefs.GetInt ("HardcoreAchiv") >= 50)
		{
			Social.ReportProgress(hardcoreAchivment1, 100.0f, (bool success) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("HardcoreAchiv") >= 100)
		{
			Social.ReportProgress(hardcoreAchivment2, 100.0f, (bool succes) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("HardcoreAchiv") >= 150)
		{
			Social.ReportProgress(hardcoreAchivment3, 100.0f, (bool succe) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("HardcoreAchiv") >= 200)
		{
			Social.ReportProgress(hardcoreAchivment4, 100.0f, (bool succ) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("HardcoreAchiv") >= 250)
		{
			Social.ReportProgress(hardcoreAchivment5, 100.0f, (bool suc) => {
				//Unlocked
			});
		}
		if(PlayerPrefs.GetInt ("HardcoreAchiv") >= 500)
		{
			Social.ReportProgress(hardcoreAchivment6, 100.0f, (bool su) => {
				//Unlocked
			});
		}
	}
}
