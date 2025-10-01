const story = {
  start: {
    speaker: "나레이션",
    text: "(똑똑똑) 문을 열까?",
    background: "https://picsum.photos/seed/room/1200/800",
    choices: [
      { text: "문을 열지 않는다", next: "end1" },
      { text: "문을 연다", next: "open1" }
    ]
  },
  end1: { speaker: "나레이션", text: "당신은 문을 열지 않았다. — END", end: true },

  open1: { speaker: "세븐틴", text: "안녕 지윤아! 오늘 우리 데이트 하는 날이라 마중 나왔어 (손을 내밀며)", background: "https://picsum.photos/seed/street/1200/800", choices: [{ text: "계속", next: "open2" }] },
  open2: { speaker: "세븐틴", text: "오늘은 나랑 데이트 해줄거지?", choices: [{ text: "민규의 손을 잡는다", next: "mingu_hand" }, { text: "호시의 손을 잡는다", next: "hoshi_end" }] },

  hoshi_end: { speaker: "나레이션", text: "(수진이의 분노로 지구가 멸망했습니다) — END", end: true },

  mingu_hand: { speaker: "민규", text: "너네는 아직 나한테 안돼", choices: [{ text: "준비 안했는데 재촉!", next: "mingu_bad1" }, { text: "잠시만, 옷만 입으면 끝!", next: "mingu_wait1" }] },

  mingu_bad1: { speaker: "민규", text: "왜 그렇게 말해 ㅠㅠ", choices: [{ text: "계속", next: "mingu_bad2" }] },
  mingu_bad2: { speaker: "원우", text: "민규야 우리 그냥 집에 가서 쉬자", choices: [{ text: "계속", next: "mingu_bad3" }] },
  mingu_bad3: { speaker: "민규", text: "됐어 나 집 가서 원우형이랑 놀거야 흥\n(당신의 매정한 말에 상처를 받은 민규는 당신과 결혼할 마음을 접었습니다.) — END", end: true },

  mingu_wait1: { speaker: "민규", text: "응 지윤아ㅎㅎ 기다릴게ㅎㅎ", choices: [{ text: "계속", next: "mingu_wait2" }] },
  mingu_wait2: { speaker: "나레이션", text: "(이런 미친 김민규 왤케 귀여워??)", choices: [{ text: "계속", next: "mingu_wait3" }] },
  mingu_wait3: { speaker: "나레이션", text: "(벽으로 민규를 끌어당긴다)", choices: [{ text: "계속", next: "mingu_wait4" }] },
  mingu_wait4: { speaker: "민규", text: "지윤아! 이게 뭐하는거야", choices: [{ text: "손으로 벽을 쾅 내리친다", next: "wall_break" }, { text: "실수를 인정하고 다시 자리에 앉힌다", next: "soft1" }] },

  wall_break: { speaker: "나레이션", text: "집 벽을 부수는 여자는 나와 맞지 않는 것 같아 나 집에 갈래!!\n(당신의 괴력에 경악을 금치 못합니다) — END", end: true },

  soft1: { speaker: "지윤", text: "헉 뭐야.. 미안 많이 놀랐어? 너가 너무 귀여워서 그만..", choices: [{ text: "계속", next: "soft2" }] },
  soft2: { speaker: "나레이션", text: "(설레는 말에 민규의 호감도가 20 올랐습니다)", choices: [{ text: "계속", next: "soft3" }] },
  soft3: { speaker: "나레이션", text: "(그때 똑똑- 노크 소리가 다시 한번 들려왔다)", choices: [{ text: "계속", next: "soft4" }] },
  soft4: { speaker: "수진", text: "주지윤! 준비 다함? 데리러옴~", choices: [{ text: "계속", next: "soft5" }] },
  soft5: { speaker: "지윤", text: "아 맞다.. 나 오늘 쟤랑 놀기로 했었지..", choices: [{ text: "민규랑 놀기", next: "sujin_angry" }, { text: "수진이랑 놀기", next: "sujin_love" }] },

  sujin_angry: { speaker: "수진", text: "미친 민규가 너랑 논다고? 호시는 어딨음?", choices: [{ text: "계속", next: "next_city" }] },
  sujin_love: { speaker: "수진", text: "헐.. 미친 민규를 버리고 나를 선택해 준거야..?\n지윤아 나랑 사귀자♥\n(지윤과 수진이 결혼했습니다) — END", end: true },

  next_city: { speaker: "민규", text: "그럼 우리 이제 시내가자!!\n(갑자기 준휘♡송현이 등장했습니다)\n민규: 민규지윤! 너네의 그 사이좋은 모습이 너무 꼴보기 싫어!\n준휘: 당장 떨어지지 않으면 우리가 헤어지겠어!", choices: [{ text: "우정", next: "friend_end" }, { text: "사랑", next: "love_break1" }] },

  friend_end: { speaker: "민규", text: "ㅎㅎ 고마워 지윤아 나 갈게~ — END", end: true },

  love_break1: { speaker: "나레이션", text: "준휘와 송현이 헤어졌다.", choices: [{ text: "계속", next: "love_break2" }] },
  love_break2: { speaker: "민규", text: "어쩔수없지 뭐ㅎㅎ 우리 밥먹으러 갈까?", choices: [{ text: "계속", next: "love_break3" }] },
  love_break3: { speaker: "민규", text: "우리 뭐 먹을까?", choices: [{ text: "마라탕", next: "mala_end" }, { text: "민규정식", next: "mingu_menu1" }] },
  mala_end: { speaker: "나레이션", text: "(마라탕을 좋아하는 수진이와 다희만 기뻐합니다) — END", end: true },

  mingu_menu1: { speaker: "민규", text: "헉 나도 그거 먹고 싶었어!", choices: [{ text: "뒤통수를 친다", next: "backhit" }, { text: "동조한다", next: "agree1" }] },
  backhit: { speaker: "나레이션", text: "민규가 상처받은 눈으로 뛰쳐나갔다 — END", end: true },

  agree1: { speaker: "민규", text: "그치 호시는 햄스터지", choices: [{ text: "계속", next: "agree2" }] },
  agree2: { speaker: "나레이션", text: "(수진이가 배신감 어린 표정으로 쳐다보지만 민규와 공감대를 형성했습니다)\n밥이 나왔다", choices: [{ text: "계속", next: "agree3" }] },
  agree3: { speaker: "민규", text: "지윤아 나 사실 내일 군대가..", choices: [{ text: "기다린다", next: "wait_military" }, { text: "기다리지 않는다", next: "no_wait" }] },

  wait_military: { speaker: "지윤", text: "정말?ㅎㅎ 그럼 면회 와줄거지?\n오늘은 드디어 민규의 면회날이다", choices: [{ text: "거꾸로 신는다", next: "wrong_shoes" }, { text: "똑바로 신는다", next: "right_shoes1" }] },
  no_wait: { speaker: "민규", text: "원우형이 면회 와준댔어 그럼 안녕 — END", end: true },

  wrong_shoes: { speaker: "지윤", text: "거꾸로 신으면 개간지나죠?", choices: [{ text: "계속", next: "wrong_shoes2" }] },
  wrong_shoes2: { speaker: "민규", text: "민규야 나왔어~", choices:[ { text: "계속", next: "wrong_shoes3" } ] },
  wrong_shoes3: { speaker: "민규", text: "지윤아.. 너 바람피워? 실망이야 — END", end: true },

  right_shoes1: { speaker: "지윤", text: "하.. 똑바로 신으면 간지가 안나는데..", choices: [{ text: "계속", next: "right_shoes2" }] },
  right_shoes2: { speaker: "지윤", text: "민규야 나 오늘 너한테 할말이 있어..", choices: [{ text: "계속", next: "right_shoes3" }] },
  right_shoes3: { speaker: "지윤", text: "웅 뭔데?", choices: [{ text: "계속", next: "right_shoes4" }] },
  right_shoes4: { speaker: "민규", text: "민규야 사실 나..", choices: [{ text: "김민규(배우)", next: "actor" }, { text: "김민규(세븐틴)", next: "idol" }] },

  actor: { speaker: "배우 김민규", text: "그래!! 우리 사귀자! — END", end: true },
  idol: { speaker: "민규", text: "나..? 그래! 우리 사귀자!\n주지윤♡김민규의 사랑이 이루어졌다\n(few months later... 결혼 준비 중)", choices: [{ text: "라푼젤", next: "rapunzel" }, { text: "변발", next: "bye_end" }] },

  rapunzel: { speaker: "민규", text: "지윤아ㅜㅜ 내 삶을 인정해 주는구나ㅜㅜ\n우리 결혼해서 행복하게 살자ㅜ\n(지윤♡민규는 결혼에 성공해서 행복하게 살았습니다) — END", end: true },
  bye_end: { speaker: "민규", text: "내 삶을 무시하는구나 우리 헤어지자 — END", end: true }
};

// === DOM 제어 ===
const speakerEl = document.getElementById("speaker");
const textEl = document.getElementById("text");
const choicesEl = document.getElementById("choices");
const bgEl = document.getElementById("bg");
const charEl = document.getElementById("char");

let typingInterval;

function typeText(text, callback){
  let index = 0;
  textEl.innerHTML = "";
  clearInterval(typingInterval);
  typingInterval = setInterval(()=>{
    if(index < text.length){
      textEl.innerHTML += text[index]==="\n" ? "<br>" : text[index];
      index++;
    } else {
      clearInterval(typingInterval);
      if(callback) callback();
    }
  }, 30);
}

function showNode(id){
  const node = story[id];
  if(!node) return;

  speakerEl.textContent = node.speaker || "";

  if(node.background) bgEl.style.backgroundImage = `url(${node.background})`;

  if(node.char){
    charEl.style.opacity=0;
    setTimeout(()=>{
      charEl.src=node.char;
      charEl.style.opacity=1;
    },100);
  } else { charEl.style.opacity=0; }

  choicesEl.innerHTML="";

  typeText(node.text, ()=>{
    if(node.end){
      const endDiv=document.createElement("div");
      endDiv.className="ending";
      endDiv.innerHTML="💖 THE END 💖 — 새로 시작하려면 버튼을 눌러주세요.";

      const restartBtn=document.createElement("button");
      restartBtn.textContent="처음으로 돌아가기";
      restartBtn.className="choice-btn";
      restartBtn.onclick=()=>showNode("start");

      choicesEl.appendChild(endDiv);
      choicesEl.appendChild(restartBtn);
      return;
    }

    if(node.choices){
      node.choices.forEach(c=>{
        const btn=document.createElement("button");
        btn.className="choice-btn";
        btn.textContent=c.text;
        btn.onclick=()=>showNode(c.next);
        choicesEl.appendChild(btn);
      });
    }
  });
}

showNode("start");
