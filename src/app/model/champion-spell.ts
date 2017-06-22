import {LevelTip} from "./level-tip";
import {SpellVars} from "./spell-vars";
import {Image} from "./image";

export class ChampionSpell {

  cooldownBurn: string;
  resource: string;
  leveltip: LevelTip;
  vars: SpellVars[];
  costType: string;
  image: Image;
  sanitizedDescription: string;
  effect: any;
  tooltip: string;
  maxrank: number;
  costBurn: string;
  rageBurn: string;
  range: any;
  cooldown: number[];
  cost: number[];
  key: string;
  effectBurn: string [];
  altImages: Image[];
  name: string;
}
