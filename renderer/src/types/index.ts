export type Scenario = {
  id: number;
  bgmFile?: string;
  backgroundFile?: string;
  currentLineIndex: number;
  characters?: ScenarioCharacter[];
  lines: ScenarioLine[];
};

export type ScenarioCharacter = {
  index: number;
  name: string;
  imageFile: string;
  animation?: string;
  isShow: boolean;
};

export type ScenarioLine = {
  index: number;
  character?: {
    index: number;
    name?: string;
    imageFile?: string;
    animation?: string;
    isShow?: boolean;
  };
  imageFile?: string;
  backgroundFile?: string;
  type: number; // TODO: 定数化する 0=ナレーション, 1=セリフ, 2=選択肢
  text: string;
  choices?: ScenarioChoice[];
};

export type ScenarioChoice = {
  jumpTo: string | null;
  text: string;
};
