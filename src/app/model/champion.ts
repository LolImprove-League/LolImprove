import {Info} from "./info";
import {Stats} from "./stats";
import {Image} from "./image";
import {Skin} from "./skin";
import {Passive} from "./passive";
import {Recommended} from "./recommended";
import {ChampionSpell} from "./champion-spell";

export class Champion {

  info: Info;
  enemytips: string [];
  stats: Stats;
  name: string;
  title: string;
  image: Image;
  tags: string [];
  partype: string;
  skins: Skin[];
  passive: Passive;
  recommended: Recommended[];
  allytips: string [];
  key: string;
  lore: string;
  id: number;
  blurb: string;
  spells: ChampionSpell[];

}
