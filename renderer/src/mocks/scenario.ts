import { Scenario } from "@/types";

export const mockScenario: Scenario = {
  id: 1, // シナリオID. 現在機能しません
  backgroundFile: "bg_01.png", // 背景画像のファイル名を指定
  currentLineIndex: 0, // 現在のセリフ位置. 現在機能しません
  characters: [
    // キャラクター情報を配列で格納する
    // 増やした分だけキャラクターが表示される
    {
      index: 0, // キャラクターの番号. 0が左端です
      name: "キャラA", // キャラクターの名前
      imageFile: "chara_01.png", // キャラクター画像のファイル名を指定
      isShow: true, // 初期表示フラグ. 現在機能しません
    },
    {
      index: 1,
      name: "キャラB",
      imageFile: "chara_02.png",
      isShow: true,
    },
  ],
  lines: [
    // セリフを配列で格納する
    // 増やした分だけセリフが表示される
    {
      index: 0, // セリフの番号. 0が最初です
      type: 0, // セリフタイプ. 0=システム 1=キャラクター 2=選択肢
      text: "説明テキスト", // セリフの内容. HTMLタグが使えます
    },
    {
      index: 1,
      character: {
        index: 0, // キャラクターをフォーカスする場合、対象キャラクターの番号を指定
      },
      type: 0,
      text: "キャラクター移動",
    },
    {
      index: 2,
      character: {
        index: 0,
        imageFile: "chara_01.png", // キャラクターの画像を変更する場合、画像のファイル名を指定
      },
      type: 1,
      text: "キャラクターのセリフ1",
    },
    {
      index: 3,
      character: {
        index: 1,
        imageFile: "chara_02.png",
      },
      type: 1,
      text: 'キャラクターのセリフ2<br>改行<br><span style="font-size:24px">テキストの大きさ変更</span>',
    },
    {
      index: 4,
      character: {
        index: 0,
        imageFile: "chara_01.png",
      },
      type: 1,
      text: "キャラクターのセリフ3",
    },
    {
      index: 5,
      type: 2,
      text: "次の選択肢から選んでください",
      choices: [
        { jumpTo: null, text: "このまま進む" },
        { jumpTo: "SCENARIO_02", text: "次のシナリオにジャンプする" },
      ],
    },
    {
      index: -1,
      type: 0,
      text: "デバッグ終了",
    },
  ],
};
