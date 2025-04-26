//Add Custom Weapon Type
Hooks.once("init", () => {
    CONFIG.DND5E.weaponProficiencies.farm = "Firearms";
    CONFIG.DND5E.weaponProficienciesMap.firearm = "farm";
    CONFIG.DND5E.weaponTypeMap.firearm = "ranged";
    CONFIG.DND5E.weaponTypes.firearm = "Firearm";
});
// Add Custom Weapons
Hooks.once("init", () => {
    CONFIG.DND5E.weaponIds.Blunderbuss = "Compendium.the-hollow-world-of-aekko.weapons.Item.yqRMvuLhBA331Tug";
    CONFIG.DND5E.weaponIds.Handgun = "Compendium.the-hollow-world-of-aekko.weapons.Item.fEXyEwYy2RWSFIUb";
    CONFIG.DND5E.weaponIds.Rifle = "Compendium.the-hollow-world-of-aekko.weapons.Item.TPP37wMD28oEx8YD";
    CONFIG.DND5E.weaponIds.Boomerang = "Compendium.the-hollow-world-of-aekko.weapons.Item.CchbuLO68Fv0q0HS";
    CONFIG.DND5E.weaponIds.Caestus = "Compendium.the-hollow-world-of-aekko.weapons.Item.w4F8k1FUWhx8kqQP";
    CONFIG.DND5E.weaponIds.DuelingCane = "Compendium.the-hollow-world-of-aekko.weapons.Item.994e9rvZB9aybH2h";
    CONFIG.DND5E.weaponIds.Gunlance = "Compendium.the-hollow-world-of-aekko.weapons.Item.vNsXB2MuuLwGQhSo";
    CONFIG.DND5E.weaponIds.JunkGun = "Compendium.the-hollow-world-of-aekko.weapons.Item.Hg1A7ajd5IGxL3M2";
    CONFIG.DND5E.weaponIds.PitchFork = "Compendium.the-hollow-world-of-aekko.weapons.Item.2kc280fs8qP5QHyy";
    CONFIG.DND5E.weaponIds.Scythe = "Compendium.the-hollow-world-of-aekko.weapons.Item.AjoVS1hqHmbuh30a";
  });

//Add Custom Tools
Hooks.once("init", () =>{
  CONFIG.DND5E.toolTypes.caft = "Crafting Tools";
  CONFIG.DND5E.tools.craftsman = {
    ability: "wis",
    id: "Compendium.the-hollow-world-of-aekko.weapons.Item.ZSsNwbmGF5OJBs7F"
  }
  CONFIG.DND5E.tools.metallurgy = {
    ability: "int",
    id: "Compendium.the-hollow-world-of-aekko.weapons.Item.SlUQelgkCsYTAc46"
  }
  CONFIG.DND5E.tools.potioner = {
    ability: "con",
    id: "Compendium.the-hollow-world-of-aekko.weapons.Item.xStk6FR9QV7RQws0"
  }
})
//Add Arcsthetic equipment type