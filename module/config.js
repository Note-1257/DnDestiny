import {ClassFeatures} from "./classFeatures.js"

// Namespace Configuration Values
export const DNDESTINY = {};

// ASCII Artwork
DNDESTINY.ASCII = `_______________________________
______      ______ _____ _____
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__
| | | / _ \\/\\ | | |   \\ \\  __|
| |/ / (_>  < |/ //\\__/ / |___
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
DNDESTINY.abilities = {
  "str": "DNDESTINY.AbilityStr",
  "dex": "DNDESTINY.AbilityDex",
  "con": "DNDESTINY.AbilityCon",
  "int": "DNDESTINY.AbilityInt",
  "wis": "DNDESTINY.AbilityWis",
  "cha": "DNDESTINY.AbilityCha"
};

DNDESTINY.abilityAbbreviations = {
  "str": "DNDESTINY.AbilityStrAbbr",
  "dex": "DNDESTINY.AbilityDexAbbr",
  "con": "DNDESTINY.AbilityConAbbr",
  "int": "DNDESTINY.AbilityIntAbbr",
  "wis": "DNDESTINY.AbilityWisAbbr",
  "cha": "DNDESTINY.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
DNDESTINY.alignments = {
  'lg': "DNDESTINY.AlignmentLG",
  'ng': "DNDESTINY.AlignmentNG",
  'cg': "DNDESTINY.AlignmentCG",
  'ln': "DNDESTINY.AlignmentLN",
  'tn': "DNDESTINY.AlignmentTN",
  'cn': "DNDESTINY.AlignmentCN",
  'le': "DNDESTINY.AlignmentLE",
  'ne': "DNDESTINY.AlignmentNE",
  'ce': "DNDESTINY.AlignmentCE"
};


DNDESTINY.weaponProficiencies = {
  "sim": "DNDESTINY.WeaponSimpleProficiency",
  "mar": "DNDESTINY.WeaponMartialProficiency"
};

DNDESTINY.toolProficiencies = {
  "art": "DNDESTINY.ToolArtisans",
  "disg": "DNDESTINY.ToolDisguiseKit",
  "forg": "DNDESTINY.ToolForgeryKit",
  "game": "DNDESTINY.ToolGamingSet",
  "herb": "DNDESTINY.ToolHerbalismKit",
  "music": "DNDESTINY.ToolMusicalInstrument",
  "navg": "DNDESTINY.ToolNavigators",
  "pois": "DNDESTINY.ToolPoisonersKit",
  "thief": "DNDESTINY.ToolThieves",
  "vehicle": "DNDESTINY.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
DNDESTINY.timePeriods = {
  "inst": "DNDESTINY.TimeInst",
  "turn": "DNDESTINY.TimeTurn",
  "round": "DNDESTINY.TimeRound",
  "minute": "DNDESTINY.TimeMinute",
  "hour": "DNDESTINY.TimeHour",
  "day": "DNDESTINY.TimeDay",
  "month": "DNDESTINY.TimeMonth",
  "year": "DNDESTINY.TimeYear",
  "perm": "DNDESTINY.TimePerm",
  "spec": "DNDESTINY.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
DNDESTINY.abilityActivationTypes = {
  "none": "DNDESTINY.None",
  "action": "DNDESTINY.Action",
  "bonus": "DNDESTINY.BonusAction",
  "reaction": "DNDESTINY.Reaction",
  "minute": DNDESTINY.timePeriods.minute,
  "hour": DNDESTINY.timePeriods.hour,
  "day": DNDESTINY.timePeriods.day,
  "special": DNDESTINY.timePeriods.spec,
  "legendary": "DNDESTINY.LegAct",
  "lair": "DNDESTINY.LairAct",
  "crew": "DNDESTINY.VehicleCrewAction"
};

/* -------------------------------------------- */


DNDESTINY.abilityConsumptionTypes = {
  "ammo": "DNDESTINY.ConsumeAmmunition",
  "attribute": "DNDESTINY.ConsumeAttribute",
  "material": "DNDESTINY.ConsumeMaterial",
  "charges": "DNDESTINY.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
DNDESTINY.actorSizes = {
  "tiny": "DNDESTINY.SizeTiny",
  "sm": "DNDESTINY.SizeSmall",
  "med": "DNDESTINY.SizeMedium",
  "lg": "DNDESTINY.SizeLarge",
  "huge": "DNDESTINY.SizeHuge",
  "grg": "DNDESTINY.SizeGargantuan"
};

DNDESTINY.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
DNDESTINY.itemActionTypes = {
  "mwak": "DNDESTINY.ActionMWAK",
  "rwak": "DNDESTINY.ActionRWAK",
  "msak": "DNDESTINY.ActionMSAK",
  "rsak": "DNDESTINY.ActionRSAK",
  "save": "DNDESTINY.ActionSave",
  "heal": "DNDESTINY.ActionHeal",
  "abil": "DNDESTINY.ActionAbil",
  "util": "DNDESTINY.ActionUtil",
  "other": "DNDESTINY.ActionOther"
};

/* -------------------------------------------- */

DNDESTINY.itemCapacityTypes = {
  "items": "DNDESTINY.ItemContainerCapacityItems",
  "weight": "DNDESTINY.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
DNDESTINY.limitedUsePeriods = {
  "sr": "DNDESTINY.ShortRest",
  "lr": "DNDESTINY.LongRest",
  "day": "DNDESTINY.Day",
  "charges": "DNDESTINY.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
DNDESTINY.equipmentTypes = {
  "light": "DNDESTINY.EquipmentLight",
  "medium": "DNDESTINY.EquipmentMedium",
  "heavy": "DNDESTINY.EquipmentHeavy",
  "bonus": "DNDESTINY.EquipmentBonus",
  "natural": "DNDESTINY.EquipmentNatural",
  "shield": "DNDESTINY.EquipmentShield",
  "clothing": "DNDESTINY.EquipmentClothing",
  "trinket": "DNDESTINY.EquipmentTrinket",
  "vehicle": "DNDESTINY.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
DNDESTINY.armorProficiencies = {
  "lgt": DNDESTINY.equipmentTypes.light,
  "med": DNDESTINY.equipmentTypes.medium,
  "hvy": DNDESTINY.equipmentTypes.heavy,
  "shl": "DNDESTINY.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
DNDESTINY.consumableTypes = {
  "ammo": "DNDESTINY.ConsumableAmmunition",
  "potion": "DNDESTINY.ConsumablePotion",
  "poison": "DNDESTINY.ConsumablePoison",
  "food": "DNDESTINY.ConsumableFood",
  "scroll": "DNDESTINY.ConsumableScroll",
  "wand": "DNDESTINY.ConsumableWand",
  "rod": "DNDESTINY.ConsumableRod",
  "trinket": "DNDESTINY.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
DNDESTINY.currencies = {
  "glm": "DNDESTINY.CurrencyGlm"
};


/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
DNDESTINY.currencyConversion = {
};

/* -------------------------------------------- */


// Damage Types
DNDESTINY.damageTypes = {
  "acid": "DNDESTINY.DamageAcid",
  "bludgeoning": "DNDESTINY.DamageBludgeoning",
  "cold": "DNDESTINY.DamageCold",
  "fire": "DNDESTINY.DamageFire",
  "force": "DNDESTINY.DamageForce",
  "lightning": "DNDESTINY.DamageLightning",
  "necrotic": "DNDESTINY.DamageNecrotic",
  "piercing": "DNDESTINY.DamagePiercing",
  "poison": "DNDESTINY.DamagePoison",
  "psychic": "DNDESTINY.DamagePsychic",
  "radiant": "DNDESTINY.DamageRadiant",
  "slashing": "DNDESTINY.DamageSlashing",
  "thunder": "DNDESTINY.DamageThunder"
};

// Damage Resistance Types
DNDESTINY.damageResistanceTypes = mergeObject(duplicate(DNDESTINY.damageTypes), {
  "physical": "DNDESTINY.DamagePhysical"
});


/* -------------------------------------------- */


/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
DNDESTINY.movementUnits = {
  "ft": "DNDESTINY.DistFt",
  "mi": "DNDESTINY.DistMi"
}

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from DNDESTINY.movementUnits
 * @type {Object<string,string>}
 */
DNDESTINY.distanceUnits = {
  "none": "DNDESTINY.None",
  "self": "DNDESTINY.DistSelf",
  "touch": "DNDESTINY.DistTouch",
  "spec": "DNDESTINY.Special",
  "any": "DNDESTINY.DistAny"
};
for ( let [k, v] of Object.entries(DNDESTINY.movementUnits) ) {
  DNDESTINY.distanceUnits[k] = v;
}

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
DNDESTINY.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15,
  vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
DNDESTINY.targetTypes = {
  "none": "DNDESTINY.None",
  "self": "DNDESTINY.TargetSelf",
  "creature": "DNDESTINY.TargetCreature",
  "ally": "DNDESTINY.TargetAlly",
  "enemy": "DNDESTINY.TargetEnemy",
  "object": "DNDESTINY.TargetObject",
  "space": "DNDESTINY.TargetSpace",
  "radius": "DNDESTINY.TargetRadius",
  "sphere": "DNDESTINY.TargetSphere",
  "cylinder": "DNDESTINY.TargetCylinder",
  "cone": "DNDESTINY.TargetCone",
  "square": "DNDESTINY.TargetSquare",
  "cube": "DNDESTINY.TargetCube",
  "line": "DNDESTINY.TargetLine",
  "wall": "DNDESTINY.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are DNDESTINY target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
DNDESTINY.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
DNDESTINY.healingTypes = {
  "healing": "DNDESTINY.Healing",
  "temphp": "DNDESTINY.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
DNDESTINY.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
DNDESTINY.senses = {
  "bs": "DNDESTINY.SenseBS",
  "dv": "DNDESTINY.SenseDV",
  "ts": "DNDESTINY.SenseTS",
  "tr": "DNDESTINY.SenseTR"
};


/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
DNDESTINY.skills = {
  "acr": "DNDESTINY.SkillAcr",
  "ani": "DNDESTINY.SkillAni",
  "arc": "DNDESTINY.SkillArc",
  "ath": "DNDESTINY.SkillAth",
  "dec": "DNDESTINY.SkillDec",
  "his": "DNDESTINY.SkillHis",
  "ins": "DNDESTINY.SkillIns",
  "itm": "DNDESTINY.SkillItm",
  "inv": "DNDESTINY.SkillInv",
  "med": "DNDESTINY.SkillMed",
  "nat": "DNDESTINY.SkillNat",
  "prc": "DNDESTINY.SkillPrc",
  "prf": "DNDESTINY.SkillPrf",
  "per": "DNDESTINY.SkillPer",
  "rel": "DNDESTINY.SkillRel",
  "slt": "DNDESTINY.SkillSlt",
  "ste": "DNDESTINY.SkillSte",
  "sur": "DNDESTINY.SkillSur",
  "tec": "DNDESTINY.SkillTec"
};


/* -------------------------------------------- */

DNDESTINY.spellPreparationModes = {
  "prepared": "DNDESTINY.SpellPrepPrepared",
  "pact": "DNDESTINY.PactMagic",
  "always": "DNDESTINY.SpellPrepAlways",
  "atwill": "DNDESTINY.SpellPrepAtWill",
  "innate": "DNDESTINY.SpellPrepInnate"
};

DNDESTINY.spellUpcastModes = ["always", "pact", "prepared"];

DNDESTINY.spellProgression = {
  "none": "DNDESTINY.SpellNone",
  "full": "DNDESTINY.SpellProgFull",
  "half": "DNDESTINY.SpellProgHalf",
  "third": "DNDESTINY.SpellProgThird",
  "pact": "DNDESTINY.SpellProgPact",
  "artificer": "DNDESTINY.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
DNDESTINY.spellScalingModes = {
  "none": "DNDESTINY.SpellNone",
  "cantrip": "DNDESTINY.SpellCantrip",
  "level": "DNDESTINY.SpellLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
DNDESTINY.weaponTypes = {
  "simpleM": "DNDESTINY.WeaponSimpleM",
  "simpleR": "DNDESTINY.WeaponSimpleR",
  "martialM": "DNDESTINY.WeaponMartialM",
  "martialR": "DNDESTINY.WeaponMartialR",
  "natural": "DNDESTINY.WeaponNatural",
  "improv": "DNDESTINY.WeaponImprov",
  "siege": "DNDESTINY.WeaponSiege"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
DNDESTINY.weaponProperties = {
  "amm": "DNDESTINY.WeaponPropertiesAmm",
  "hvy": "DNDESTINY.WeaponPropertiesHvy",
  "fin": "DNDESTINY.WeaponPropertiesFin",
  "fir": "DNDESTINY.WeaponPropertiesFir",
  "foc": "DNDESTINY.WeaponPropertiesFoc",
  "lgt": "DNDESTINY.WeaponPropertiesLgt",
  "lod": "DNDESTINY.WeaponPropertiesLod",
  "rch": "DNDESTINY.WeaponPropertiesRch",
  "rel": "DNDESTINY.WeaponPropertiesRel",
  "ret": "DNDESTINY.WeaponPropertiesRet",
  "spc": "DNDESTINY.WeaponPropertiesSpc",
  "thr": "DNDESTINY.WeaponPropertiesThr",
  "two": "DNDESTINY.WeaponPropertiesTwo",
  "ver": "DNDESTINY.WeaponPropertiesVer"
};

// Spell Schools
/*DNDESTINY.spellSchools = {
  "abj": "DNDESTINY.SchoolAbj",
  "con": "DNDESTINY.SchoolCon",
  "div": "DNDESTINY.SchoolDiv",
  "enc": "DNDESTINY.SchoolEnc",
  "evo": "DNDESTINY.SchoolEvo",
  "ill": "DNDESTINY.SchoolIll",
  "nec": "DNDESTINY.SchoolNec",
  "trs": "DNDESTINY.SchoolTrs"
};*/

// Spell Levels
DNDESTINY.spellLevels = {
  0: "DNDESTINY.SpellLevel0",
  1: "DNDESTINY.SpellLevel1",
  2: "DNDESTINY.SpellLevel2",
  3: "DNDESTINY.SpellLevel3",
  4: "DNDESTINY.SpellLevel4",
  5: "DNDESTINY.SpellLevel5"
};

// Spell Scroll Compendium UUIDs
DNDESTINY.spellScrollIds = {
  0: 'Compendium.dndestiny.items.rQ6sO7HDWzqMhSI3',
  1: 'Compendium.dndestiny.items.9GSfMg0VOA2b4uFN',
  2: 'Compendium.dndestiny.items.XdDp6CKh9qEvPTuS',
  3: 'Compendium.dndestiny.items.hqVKZie7x9w3Kqds',
  4: 'Compendium.dndestiny.items.DM7hzgL836ZyUFB1',
  5: 'Compendium.dndestiny.items.wa1VF8TXHmkrrR35',
  6: 'Compendium.dndestiny.items.tI3rWx4bxefNCexS',
  7: 'Compendium.dndestiny.items.mtyw4NS1s7j2EJaD',
  8: 'Compendium.dndestiny.items.aOrinPg7yuDZEuWr',
  9: 'Compendium.dndestiny.items.O4YbkJkLlnsgUszZ'
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
DNDESTINY.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
DNDESTINY.polymorphSettings = {
  keepPhysical: 'DNDESTINY.PolymorphKeepPhysical',
  keepMental: 'DNDESTINY.PolymorphKeepMental',
  keepSaves: 'DNDESTINY.PolymorphKeepSaves',
  keepSkills: 'DNDESTINY.PolymorphKeepSkills',
  mergeSaves: 'DNDESTINY.PolymorphMergeSaves',
  mergeSkills: 'DNDESTINY.PolymorphMergeSkills',
  keepClass: 'DNDESTINY.PolymorphKeepClass',
  keepFeats: 'DNDESTINY.PolymorphKeepFeats',
  keepSpells: 'DNDESTINY.PolymorphKeepSpells',
  keepItems: 'DNDESTINY.PolymorphKeepItems',
  keepBio: 'DNDESTINY.PolymorphKeepBio',
  keepVision: 'DNDESTINY.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
DNDESTINY.proficiencyLevels = {
  0: "DNDESTINY.NotProficient",
  1: "DNDESTINY.Proficient",
  0.5: "DNDESTINY.HalfProficient",
  2: "DNDESTINY.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
DNDESTINY.cover = {
  0: 'DNDESTINY.None',
  .5: 'DNDESTINY.CoverHalf',
  .75: 'DNDESTINY.CoverThreeQuarters',
  1: 'DNDESTINY.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
DNDESTINY.conditionTypes = {
  "blinded": "DNDESTINY.ConBlinded",
  "charmed": "DNDESTINY.ConCharmed",
  "deafened": "DNDESTINY.ConDeafened",
  "diseased": "DNDESTINY.ConDiseased",
  "exhaustion": "DNDESTINY.ConExhaustion",
  "frightened": "DNDESTINY.ConFrightened",
  "grappled": "DNDESTINY.ConGrappled",
  "incapacitated": "DNDESTINY.ConIncapacitated",
  "invisible": "DNDESTINY.ConInvisible",
  "paralyzed": "DNDESTINY.ConParalyzed",
  "petrified": "DNDESTINY.ConPetrified",
  "poisoned": "DNDESTINY.ConPoisoned",
  "prone": "DNDESTINY.ConProne",
  "restrained": "DNDESTINY.ConRestrained",
  "stunned": "DNDESTINY.ConStunned",
  "unconscious": "DNDESTINY.ConUnconscious"
};

// Languages
DNDESTINY.languages = {
  "common": "DNDESTINY.LanguagesCommon",
  "aarakocra": "DNDESTINY.LanguagesAarakocra",
  "abyssal": "DNDESTINY.LanguagesAbyssal",
  "aquan": "DNDESTINY.LanguagesAquan",
  "auran": "DNDESTINY.LanguagesAuran",
  "celestial": "DNDESTINY.LanguagesCelestial",
  "deep": "DNDESTINY.LanguagesDeepSpeech",
  "draconic": "DNDESTINY.LanguagesDraconic",
  "druidic": "DNDESTINY.LanguagesDruidic",
  "dwarvish": "DNDESTINY.LanguagesDwarvish",
  "elvish": "DNDESTINY.LanguagesElvish",
  "giant": "DNDESTINY.LanguagesGiant",
  "gith": "DNDESTINY.LanguagesGith",
  "gnomish": "DNDESTINY.LanguagesGnomish",
  "goblin": "DNDESTINY.LanguagesGoblin",
  "gnoll": "DNDESTINY.LanguagesGnoll",
  "halfling": "DNDESTINY.LanguagesHalfling",
  "ignan": "DNDESTINY.LanguagesIgnan",
  "infernal": "DNDESTINY.LanguagesInfernal",
  "orc": "DNDESTINY.LanguagesOrc",
  "primordial": "DNDESTINY.LanguagesPrimordial",
  "sylvan": "DNDESTINY.LanguagesSylvan",
  "terran": "DNDESTINY.LanguagesTerran",
  "cant": "DNDESTINY.LanguagesThievesCant",
  "undercommon": "DNDESTINY.LanguagesUndercommon"
};

// Character Level XP Requirements
DNDESTINY.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
DNDESTINY.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Character Features Per Class And Level
DNDESTINY.classFeatures = ClassFeatures;

// Configure Optional Character Flags
DNDESTINY.characterFlags = {
  "diamondSoul": {
    name: "DNDESTINY.FlagsDiamondSoul",
    hint: "DNDESTINY.FlagsDiamondSoulHint",
    section: "Feats",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "DNDESTINY.FlagsElvenAccuracy",
    hint: "DNDESTINY.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "DNDESTINY.FlagsHalflingLucky",
    hint: "DNDESTINY.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "DNDESTINY.FlagsInitiativeAdv",
    hint: "DNDESTINY.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "DNDESTINY.FlagsAlert",
    hint: "DNDESTINY.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "DNDESTINY.FlagsJOAT",
    hint: "DNDESTINY.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "DNDESTINY.FlagsObservant",
    hint: "DNDESTINY.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },
  "powerfulBuild": {
    name: "DNDESTINY.FlagsPowerfulBuild",
    hint: "DNDESTINY.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "reliableTalent": {
    name: "DNDESTINY.FlagsReliableTalent",
    hint: "DNDESTINY.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "DNDESTINY.FlagsRemarkableAthlete",
    hint: "DNDESTINY.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "DNDESTINY.FlagsWeaponCritThreshold",
    hint: "DNDESTINY.FlagsWeaponCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  },
  "spellCriticalThreshold": {
    name: "DNDESTINY.FlagsSpellCritThreshold",
    hint: "DNDESTINY.FlagsSpellCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  },
  "meleeCriticalDamageDice": {
    name: "DNDESTINY.FlagsMeleeCriticalDice",
    hint: "DNDESTINY.FlagsMeleeCriticalDiceHint",
    section: "Feats",
    type: Number,
    placeholder: 0
  },
};

// Configure allowed status flags
DNDESTINY.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(DNDESTINY.characterFlags));
