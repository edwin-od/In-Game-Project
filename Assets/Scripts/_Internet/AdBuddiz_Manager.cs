using UnityEngine;
using System.Collections;

public class AdBuddiz_Manager : MonoBehaviour {
	
	void Start ()
	{
		PlayerPrefs.SetInt ("AdBuddizChecker", 0);
		if(PlayerPrefs.GetInt("RemoveAds") != 2)
		{
			AdBuddizBinding.SetAndroidPublisherKey("482b2421-f65e-4e6e-9762-2d8f45415c7e");
			//AdBuddizBinding.SetTestModeActive();
			AdBuddizBinding.CacheAds();
		}
	}
	void Update ()
	{
		if(PlayerPrefs.GetInt ("AdBuddizChecker") == 4)
		{
			if(PlayerPrefs.GetInt("RemoveAds") != 2)
			{
				AdBuddizBinding.ShowAd();
				PlayerPrefs.SetInt ("AdBuddizChecker", 0);
			}
		}
	}
}
