export class Champion {
  rankedPlayEnabled: boolean; // Ranked play enabled flag.
  botEnabled: boolean; // Bot enabled flag (for custom games).
  botMnEnabled: boolean; // Bot Match Made enabled flag (for Co-op vs. AI games).
  active: boolean; // Indicates if the champion is active.
  freeToPlay: boolean; // Indicates if the champion is free to play. Free to play champions are rotated periodically.
  id: number; // Champion ID

}
