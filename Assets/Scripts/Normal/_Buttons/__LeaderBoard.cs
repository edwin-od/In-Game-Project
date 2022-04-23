using UnityEngine;
using System.Collections;
using GooglePlayGames;
using GooglePlayGames.BasicApi;
using UnityEngine.SocialPlatforms;

public class __LeaderBoard : MonoBehaviour {
	
	private string leaderboard = "CgkIp-2sksMIEAIQBg";
	private string hardcoreLeaderboard = "CgkIp-2sksMIEAIQDA";
	private string rushLeaderboard = "CgkIp-2sksMIEAIQDg";
	private string boltLeaderboard = "CgkIp-2sksMIEAIQEg";
	private string deathwishLeaderboard = "CgkIp-2sksMIEAIQDQ";

	public AudioSource cameraASDown;
	public AudioSource cameraASUp;
	
	private AudioClip buttonDown;
	private AudioClip buttonUp;

	public Texture Off;
	public Texture On;

	public bool started;

	void Start ()
	{
		PlayGamesPlatform.Activate();

		Social.localUser.Authenticate((bool success) =>
		                              {
			if(success)
			{
				Debug.Log ("Logged IN");
			}
			else
			{
				Debug.Log ("Failed to Logg In");
			}
		});

		buttonDown = (AudioClip)Resources.Load("Buttons_Down");
		cameraASDown.clip = buttonDown;
		
		buttonUp = (AudioClip)Resources.Load("Buttons_Up");
		cameraASUp.clip = buttonUp;
		started = false;
	}

	void Awake ()
	{
		if (Social.localUser.authenticated)
		{
			Social.ReportScore(PlayerPrefs.GetInt ("highScore"), leaderboard, (bool s) =>
			{
				if (s)
				{
					
				}
				else
				{
					//Debug.Log("Login failed for some reason");
				}
			});
			Social.ReportScore(PlayerPrefs.GetInt ("hardcoreHighScore"), hardcoreLeaderboard, (bool su) =>
			                   {
				if (su)
				{
					
				}
				else
				{
					//Debug.Log("Login failed for some reason");
				}
			});
			Social.ReportScore(PlayerPrefs.GetInt ("highScore_Rush"), rushLeaderboard, (bool suc) =>
			                   {
				if (suc)
				{
					
				}
				else
				{
					//Debug.Log("Login failed for some reason");
				}
			});
			Social.ReportScore(PlayerPrefs.GetInt ("highScore_Bolt"), boltLeaderboard, (bool succ) =>
			                   {
				if (succ)
				{
					
				}
				else
				{
					//Debug.Log("Login failed for some reason");
				}
			});
			Social.ReportScore(PlayerPrefs.GetInt ("DEATHWISHtotalSCORE"), deathwishLeaderboard, (bool succe) =>
			                   {
				if (succe)
				{
					
				}
				else
				{
					//Debug.Log("Login failed for some reason");
				}
			});
		}
	}

	void OnTouchDown ()
	{
		if(PlayerPrefs.GetInt("soundEvent")==1)
		{
			cameraASDown.Play();
		}
		gameObject.renderer.material.mainTexture = On;
		started = true;
	}
	void OnTouchUp ()
	{
		if(started == true)
		{
			if(PlayerPrefs.GetInt("soundEvent")==1)
			{
				cameraASUp.Play();
			}
			gameObject.renderer.material.mainTexture = Off;
			//HERE CODE
			//((PlayGamesPlatform)Social.Active).ShowLeaderboardUI(leaderboard);
			Social.ShowLeaderboardUI();
			started = false;
		}
	}
	void OnTouchStay ()
	{
		if(started == true)
		{
			gameObject.renderer.material.mainTexture = On;
		}
	}
	void OnTouchExit ()
	{
		if(started == true)
		{
			if(PlayerPrefs.GetInt("soundEvent")==1)
			{
				cameraASUp.Play();
			}
			gameObject.renderer.material.mainTexture = Off;
			started = false;
		}
	}
}
