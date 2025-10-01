// === 스토리 정의 ===
const story = {
  start: {
    speaker:"나레이션",
    text:"(똑똑똑) 문을 열까?",
    background:"https://picsum.photos/seed/room/1200/800",
    choices:[
      {text:"문을 열지 않는다", next:"end1"},
      {text:"문을 연다", next:"open"}
    ]
  },
  end1: { speaker:"나레이션", text:"당신은 문을 열지 않았다. — END", end:true },

  open: {
    speaker:"세븐틴",
    text:"안녕 지윤아! 오늘 우리 데이트 하는 날이라 마중 나왔어 (손을 내밀며) 오늘은 나랑 데이트 해줄거지?",
    background:"https://picsum.photos/seed/street/1200/800",
    char:"https://i.ibb.co/fQDyCZK/sample-char.png",
    choices:[
      {text:"민규의 손을 잡는다", next:"mingu_hand"},
      {text:"호시의 손을 잡는다", next:"hoshi_end"}
    ]
  },
  hoshi_end:{speaker:"나레이션",text:"(수진이의 분노로 지구가 멸망했습니다) — END",end:true},

  mingu_hand:{
    speaker:"민규",
    text:"너네는 아직 나한테 안돼, 지윤아 얼른나와",
    char:"https://i.ibb.co/fQDyCZK/sample-char.png",
    choices:[
      {text:"아 진짜 준비도 다 안했는데 왜 이렇게 재촉해!!!!!", next:"mingu_bad"},
      {text:"잠시만 민규야ㅎㅎ 나 이제 옷만 입으면 끝나ㅎㅎ", next:"mingu_wait"}
    ]
  },
  mingu_bad:{
    speaker:"민규",
    text:"왜 그렇게 말해 ㅠㅠ\n원우: 민규야 우리 그냥 집에 가서 쉬자\n민규: 됐어 나 집 가서 원우형이랑 놀거야!",
    end:true
  },
  mingu_wait:{
    speaker:"민규",
    text:"응 지윤아ㅎㅎ 기다릴게ㅎㅎ\n(벽으로 민규를 끌어당긴다)\n민규: 지윤아! 이게 뭐하는거야",
    choices:[
      {text:"손으로 벽을 쾅 내리친다", next:"wall_break"},
      {text:"실수를 인정하고 다시 고이 자리에 앉힌다", next:"soft"}
    ]
  },
  wall_break:{speaker:"민규",text:"집 벽을 부수는 여자는 나와 맞지 않는 것 같아 나 집에 갈래!! — END",end:true},
  soft:{
    speaker:"지윤",
    text:"미안 많이 놀랐어? 너가 너무 귀여워서 그만..\n(민규의 호감도 +20)\n(그때 똑똑- 노크 소리가 다시 한번 들려왔다)\n수진: 주지윤! 준비 다함? 데리러옴~\n지윤: 아 맞다.. 나 오늘 쟤랑 놀기로 했었지..",
    choices:[
      {text:"야 미안 나 오늘 민규랑 놀기로 함", next:"sujin_angry"},
      {text:"아 맞다! 민규야 미안.. 나 오늘 사랑하는 수진이랑 놀아야 돼", next:"sujin_love"}
    ]
  },
  sujin_angry:{speaker:"수진",text:"미친 민규가 너랑 논다고? 호시는 어딨음? (호시를 찾아 떠났다) — END",end:true},
  sujin_love:{speaker:"수진",text:"헐.. 미친 민규를 버리고 나를 선택해 준거야..? 지윤아 나랑 사귀자♥\n(지윤과 수진이 결혼했습니다) — END",end:true},

  // 민규 루트 이어짐
  next_city:{
    speaker:"민규",
    text:"그럼 우리 이제 시내가자!!\n(갑자기 준휘♡송현이 등장했습니다)\n준휘송현: 민규지윤! 너네의 그 사이좋은 모습이 너무 꼴보기 싫어! 당장 떨어지지 않으면 우리가 헤어지겠어!",
    choices:[
      {text:"우정", next:"friend_end"},
      {text:"사랑", next:"love_break"}
    ]
  },
  friend_end:{speaker:"민규",text:"ㅎㅎ 고마워 지윤아 나 갈게~ — END",end:true},
  love_break:{
    speaker:"나레이션",
    text:"준휘와 송현이 헤어졌다.\n민규: 어쩔수없지 뭐ㅎㅎ 우리 밥먹으러 갈까?\n민규: 우리 뭐 먹을까?",
    choices:[
      {text:"마라탕", next:"mala_end"},
      {text:"민규정식", next:"mingu_menu"}
    ]
  },
  mala_end:{speaker:"나레이션",text:"(마라탕을 좋아하는 수진이와 다희만 기뻐합니다) — END",end:true},
  mingu_menu:{
    speaker:"민규",
    text:"헉 나도 그거 먹고 싶었어!\n(그때 한 쪽에서 큰 소리가 들려왔다)\n...: 워쓰창슈!!\n수진: 워쓰라오후!! 진정해!!\n호시: 워쓰창슈!!\n민규: 에이 호시 형은 햄스터지~",
    choices:[
      {text:"뒤통수를 친다", next:"backhit"},
      {text:"동조한다", next:"agree"}
    ]
  },
  backhit:{speaker:"나레이션",text:"민규가 상처받은 눈으로 뛰쳐나갔다 — END",end:true},
  agree:{
    speaker:"민규",
    text:"그치 호시는 햄스터지\n(수진이가 배신감 어린 표정으로 쳐다보지만 민규와 공감대를 형성했습니다)\n(밥이 나왔다)\n민규: 지윤아 나 사실 내일 군대가..",
    choices:[
      {text:"기다린다", next:"wait_military"},
      {text:"기다리지 않는다", next:"no_wait"}
    ]
  },
  wait_military:{
    speaker:"민규",
    text:"정말?ㅎㅎ 그럼 면회 와줄거지?\n(3 months later... 오늘은 민규의 면회날이다)\n지윤: 민규를 위해 고무신을 신고 가야겠어!",
    choices:[
      {text:"거꾸로 신는다", next:"wrong_shoes"},
      {text:"똑바로 신는다", next:"right_shoes"}
    ]
  },
  no_wait:{speaker:"민규",text:"원우형이 면회 와준댔어 그럼 안녕 — END",end:true},
  wrong_shoes:{speaker:"민규",text:"지윤아.. 너 바람피워? 실망이야 — END",end:true},
  right_shoes:{
    speaker:"민규",
    text:"ㅎㅎ 지윤아 고무신 귀엽다 와줘서 고마워~\n민규야 나 오늘 너한테 할말이 있어..\n웅 뭔데?\n민규야 사실 나..",
    choices:[
      {text:"김민규(배우)", next:"actor"},
      {text:"김민규(세븐틴)", next:"idol"}
    ]
  },
  actor:{speaker:"배우 김민규",text:"그래!! 우리 사귀자! — END",end:true},
  idol:{
    speaker:"민규",
    text:"나..? 그래! 우리 사귀자!\n(주지윤♡김민규의 사랑이 이루어졌다)\n(few months later... 결혼 준비 중)\n민규: 지윤아 나 머리 많이 길렀지!\n지윤: 머리 안 자르면 파혼이야!",
    choices:[
      {text:"라푼젤", next:"rapunzel"},
      {text:"변발", next:"bye_end"}
    ]
  },
  rapunzel:{speaker:"민규",text:"지윤아ㅜㅜ 내 삶을 인정해 주는구나ㅜㅜ\n우리 결혼해서 행복하게 살자ㅜ\n(지윤♡민규는 결혼에 성공해서 행복하게 살았습니다) — END",end:true},
  bye_end:{speaker:"민규",text:"내 삶을 무시하는구나 우리 헤어지자 — END",end:true}
};

// === DOM 제어 ===
const speakerEl = document.getElementById("speaker");
const textEl = document.getElementById("text");
const choicesEl = document.getElementById("choices");
const bgEl = document.getElementById("bg");
const charEl = document.getElementById("char");

let currentTimeout;

function showNode(id) {
  const node = story[id];
  if (!node) return;

  // 이전 타이머 취소
  if (currentTimeout) clearTimeout(currentTimeout);

  speakerEl.textContent = node.speaker || "";
  textEl.innerHTML = "";

  if (node.background) bgEl.style.backgroundImage = `url(${node.background})`;
  if (node.char) {
    charEl.src = node.char;
    charEl.style.opacity = 1;
  } else {
    charEl.style.opacity = 0;
  }

  choicesEl.innerHTML = "";

  if (node.end) {
    const end = document.createElement("div");
    end.className = "ending";
    end.textContent = "💖 THE END 💖 — 새로고침하면 처음부터 시작합니다.";
    choicesEl.appendChild(end);
    return;
  }

  // 문장 단위로 나누기
  const sentences = node.text.split(/(?<=\n|[.!?])\s+/);
  let i = 0;

  function showNextSentence() {
    if (i < sentences.length) {
      const span = document.createElement("span");
      span.textContent = sentences[i] + " ";
      span.className = "shake"; // 흔들림 효과
      textEl.appendChild(span);
      i++;
      currentTimeout = setTimeout(showNextSentence, 800);
    } else if (node.choices) {
      node.choices.forEach(c => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = c.text;
        btn.onclick = () => showNode(c.next);
        choicesEl.appendChild(btn);
      });
    }
  }

  showNextSentence();
}

// 시작
showNode("start");
