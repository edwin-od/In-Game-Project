using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using Soomla.Store;

namespace Soomla
{
	public class StoreManagerAssets : IStoreAssets
	{
		public int GetVersion()
		{
			return 4;
		}

		public VirtualCurrency[] GetCurrencies()
		{
			return new VirtualCurrency[] { };
		}

		public VirtualGood[] GetGoods()
		{
			return new VirtualGood[] {ONE_LIVE_ITEM, TWO_LIVES_ITEM, THREE_LIVES_ITEM, REMOVE_ADS_ITEM, FIVE_DEATH_LIVES_ITEM, TEN_DEATH_LIVES_ITEM, TWENTY_DEATH_LIVES_ITEM};
		}

		public VirtualCurrencyPack[] GetCurrencyPacks()
		{
			return new VirtualCurrencyPack[] { };
		}

		public VirtualCategory[] GetCategories()
		{
			return new VirtualCategory[] { };
		}

		public LifetimeVG[] GetNonConsumableItems()
		{
			return new LifetimeVG[] { };
		}

		public const string ONE_LIVE_ID = "1_live.cons";
		public const string TWO_LIVES_ID = "2_lives.cons";
		public const string THREE_LIVES_ID = "3_lives.cons";
		public const string FIVE_DEATH_LIVES_ID = "5_lives.cons";
		public const string TEN_DEATH_LIVES_ID = "10_lives.cons";
		public const string TWENTY_DEATH_LIVES_ID = "20_lives.cons";
		public const string REMOVE_ADS_ID = "1_remov_ads.noncons";

		public static VirtualGood ONE_LIVE_ITEM = new SingleUseVG(
			"Buy One Live",
			"Buy one live to continue your game.",
			"1_live.cons",
			new PurchaseWithMarket(new MarketItem(ONE_LIVE_ID, MarketItem.Consumable.CONSUMABLE, 1500))
		);
		public static VirtualGood TWO_LIVES_ITEM = new SingleUseVG(
			"Buy Two Lives",
			"Buy two lives to continue your game.",
			"2_lives.cons",
			new PurchaseWithMarket(new MarketItem(TWO_LIVES_ID, MarketItem.Consumable.CONSUMABLE, 2261))
		);
		public static VirtualGood THREE_LIVES_ITEM = new SingleUseVG(
			"Buy Three Lives",
			"Buy three lives to continue your game.",
			"3_lives.cons",
			new PurchaseWithMarket(new MarketItem(THREE_LIVES_ID, MarketItem.Consumable.CONSUMABLE, 3015))
		);
		public static VirtualGood FIVE_DEATH_LIVES_ITEM = new SingleUseVG(
			"Buy 5 lives in Deathwish",
			"Add 5 lives to your game in deathwish mode",
			"5_lives.cons",
			new PurchaseWithMarket(new MarketItem(FIVE_DEATH_LIVES_ID, MarketItem.Consumable.CONSUMABLE, 1500))
			);
		public static VirtualGood TEN_DEATH_LIVES_ITEM = new SingleUseVG(
			"Buy 10 lives in Deathwish",
			"Add 10 lives to your game in deathwish mode",
			"10_lives.cons",
			new PurchaseWithMarket(new MarketItem(TEN_DEATH_LIVES_ID, MarketItem.Consumable.CONSUMABLE, 3015))
			);
		public static VirtualGood TWENTY_DEATH_LIVES_ITEM = new SingleUseVG(
			"Buy 20 lives in Deathwish",
			"Add 20 lives to your game in deathwish mode",
			"20_lives.cons",
			new PurchaseWithMarket(new MarketItem(TWENTY_DEATH_LIVES_ID, MarketItem.Consumable.CONSUMABLE, 5276))
			);
		public static VirtualGood REMOVE_ADS_ITEM = new SingleUseVG(
			"Remove ads",
			"Remove all advertisement in this game.",
			"1_remov_ads.noncons",
			new PurchaseWithMarket(new MarketItem(REMOVE_ADS_ID, MarketItem.Consumable.CONSUMABLE, 1500))
			);

		public static ItemData GetItem(string ItemId)
		{
			Soomla.ItemData itemData = new Soomla.ItemData();
			PurchasableVirtualItem pvi = StoreInfo.GetPurchasableItemWithProductId(ItemId);

			if(pvi != null)
			{
				MarketItem mi = ((PurchaseWithMarket)pvi.PurchaseType).MarketItem;

				itemData.Id = ItemId;
				itemData.Title = mi.MarketTitle;
				itemData.Description = mi.MarketDescription;
				itemData.Price = mi.Price.ToString();
			}

			return itemData;
		}
	}

	public class ItemData
	{
		public ItemData()
		{
			Id = string.Empty;
			Title = string.Empty;
			Description = string.Empty;
			Price = string.Empty;
		}

		public string Id { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }
		public string Price { get; set; }
	}
}