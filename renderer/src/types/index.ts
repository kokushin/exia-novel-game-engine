export type Scenario = {
  id: string;
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
  speakerId?: number;
  isShow: boolean;
};

export type ScenarioCutIn = {
  imageFile: string;
  isFullScreen?: boolean;
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
  cutIn?: ScenarioCutIn;
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

export type Navigation = {
  isAutoPlay: boolean;
};
