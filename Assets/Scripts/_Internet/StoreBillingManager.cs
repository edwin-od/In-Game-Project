using UnityEngine;
using System.Collections;
using Soomla;
using Soomla.Store;
using System;
using System.Collections.Generic;

public class StoreBillingManager : MonoBehaviour
{

	void Start ()
	{
		SoomlaStore.Initialize(new StoreManagerAssets());

		StoreEvents.OnMarketPurchase += (PurchasableVirtualItem pvi, string str, Dictionary<string, string> dic) => { };
		
		StoreEvents.OnItemPurchased += (PurchasableVirtualItem pvi, string payload) => 
		{
			switch (pvi.ID)
			{
			case StoreManagerAssets.ONE_LIVE_ID:
				
				PlayerPrefs.SetInt("Buy1", 2);
				
				break;
			case StoreManagerAssets.TWO_LIVES_ID:
				
				PlayerPrefs.SetInt("Buy2", 2);
				
				break;
			case StoreManagerAssets.THREE_LIVES_ID:
				
				PlayerPrefs.SetInt("Buy3", 2);
				
				break;
			case StoreManagerAssets.FIVE_DEATH_LIVES_ID:

				PlayerPrefs.SetInt("BuyDeath1", 2);

				break;
			case StoreManagerAssets.TEN_DEATH_LIVES_ID:

				PlayerPrefs.SetInt("BuyDeath2", 2);

				break;
			case StoreManagerAssets.TWENTY_DEATH_LIVES_ID:

				PlayerPrefs.SetInt("BuyDeath3", 2);

				break;
			case StoreManagerAssets.REMOVE_ADS_ID:

				//Here comes the code!!!!
				PlayerPrefs.SetInt ("RemoveAds", 2);
				PlayerPrefs.Save();
				PlayerPrefs.SetInt ("RemovBut", 1);
				PlayerPrefs.Save();

				break;
			}
		};

	}
	
}
