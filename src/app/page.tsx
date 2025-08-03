'use client';
import { useRef } from 'react';
import Link from 'next/link';


const categories = [
  { key: 'happy', label: '٩(๑❛ᴗ❛๑)۶ happy', color: '#FFE066' },
  { key: 'angry', label: '(Ò言Ó ) angry', color: '#FF6B6B' },
  { key: 'great', label: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ great', color: '#4ECDC4' },
  { key: 'hmmm', label: '(¬‿¬) hmmm', color: '#45B7D1' },
  { key: 'whatthe', label: '(°o°) what the', color: '#96CEB4' },
  { key: 'joy', label: 'ヽ(´▽`)/ joy', color: '#FECA57' },
  { key: 'meow', label: '(=^･ω･^=) meow', color: '#FF9FF3' },
  { key: 'please', label: '(´･ω･`) please', color: '#54A0FF' }
  // 추가 카테고리 필요시 여기에 추가 
];

// 카테고리별 이모티콘 데이터 준비
const emoticons = {
  happy: [
    '٩(◕‿◕)۶', '(*^▽^*)', '⊂( ･∀･) 彡', '(◡ ‿ ◡)', 'ヽ(´▽`)/', 
    '＼(^o^)／', 'ヾ(＾-＾)ノ', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '♪(´▽｀)', 
    '╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ', '(≧∇≦)/', '(ﾉ´ヮ`)ﾉ*: ･ﾟ',
    '(´∀｀)♡', 'ヽ(°〇°)ﾉ', '(｡◕‿◕｡)'
  ],
  angry: [
    '(╯°□°）╯', 'ಠ_ಠ', '(｀Д´)', '(-_-メ)', '٩(╬ʘ益ʘ╬)۶', 
    '(╬ Ò﹏Ó)', '＼(｀0´)／', 'ヽ(`⌒´メ)ノ', '(ノಠ益ಠ)ノ彡┻━┻',
    '(¬_¬)', '(◣_◢)', '(ಠ益ಠ)', '(｡ŏ﹏ŏ)', '(◉_◉)'
  ],
  great: [
    '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '✧*｡٩(ˊᗜˋ*)و✧*｡', '٩(๑❛ᴗ❛๑)۶', 
    '(☆▽☆)', '\\(★ω★)/', '(ﾉ≧∀≦)ﾉ', '٩(◊❛◡❛❊)۶',
    '(ﾉ◕ヮ◕)ﾉ', '☆(ゝω・)vキャピ', '(*≧ω≦*)', '(≧◡≦)',
    '\\(^▽^)/', '(◕‿◕)♡', '(ﾉ´∀`)ﾉ', '╰(▔∀▔)╯'
  ],
  hmmm: [
    '(¬‿¬)', '( ͡° ͜ʖ ͡°)', '(¬_¬)', '(-‸ლ)', '(¬ ¬)',
    '(ಠ_ಠ)', '(-_-)', '(¬‿¬)', '( ͡ᵔ ͜ʖ ͡ᵔ )', '(＞﹏＜)',
    '( ･ิω･ิ)', '(¬ω¬)', '(¬д¬)', '(¬､¬)', '(眼福)',
    '(¬_¬")', '(ᵔᴥᵔ)', '(─‿‿─)'
  ],
  whatthe: [
    '(°o°)', '(◎_◎;)', '(⊙_⊙)', '(@_@)', '(°_°)',
    '(O_O)', '(｡◕‿◕｡)', '(ﾟДﾟ)', '(゜-゜)', '(¬o¬)',
    '(⊙.☉)', '(◐.̃◐)', '(・_・;)', '(￣□￣)', '(°◡°)',
    '( ˘▾˘)', '(｡ŏ_ŏ)', '(⊙﹏⊙)'
  ],
  joy: [
    'ヽ(´▽`)/', '＼(^▽^)／', '٩(◕‿◕)۶', '(ᵔᴥᵔ)', 'ヾ(≧▽≦*)o',
    '(ﾉ◕分◕)ﾉ*:･ﾟ✧', 'ヽ(°〇°)ﾉ', '＼(≧∇≦)／', '(≧∇≦)b',
    '♪～(´ε｀ )', '♪(´▽｀)', '(ﾉ≧∀≦)ﾉ', '\\(^o^)/',
    '(⌒▽⌒)☆', '(｡◕‿◕｡)', 'o(≧▽≦)o', '(´∀｀)♡'
  ],
  meow: [
    '(=^･ω･^=)', '(=^‥^=)', '(^._.^)ﾉ', '(=｀ω´=)', '(^人^)',
    '(=^･ｪ･^=)', '(=ＴェＴ=)', '(^◡^)', '∩(=^･ω･^=)∩',
    '(=^-ω-^=)', '(^・o・^)ﾉ"', '(=ↀωↀ=)', '(^._.^)',
    '(=´∇｀=)', '(=⌒‿‿⌒=)', '(ΦωΦ)', '(=^･･^=)',
    '( =ω=)', '(=｀ェ´=)'
  ],
  please: [
    '(´･ω･`)', '(´；ω；`)', '(-人-)', '(；´Д｀)', '(ﾟ´Д｀ﾟ)ﾟ',
    '(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)', '(T_T)', '(´；ω；`)ｳｩｩ', '（；￣ェ￣）',
    '(´Д⊂)', '(╥﹏╥)', '(*´；ω；｀*)', '(´｡• ω •｡`)',
    '(´-﹏-`；)', '(。•́︿•̀。)', '(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)',
    '(っ˘̩╭╮˘̩)っ', '(´ . .̫ . `)'
  ]
};

export default function HomePage() {
  // 각 섹션 스크롤용 ref
  const sectionRefs = {
    happy: useRef(null),
    angry: useRef(null),
    great: useRef(null),
    hmmm: useRef(null),
    whatthe: useRef(null),
    joy: useRef(null),
    meow: useRef(null),
    please: useRef(null)
    // ...
  };

  // 해당 섹션으로 스크롤하는 함수
const scrollToSection = (key: string) => {
  (sectionRefs as any)[key]?.current?.scrollIntoView({ behavior: 'smooth' });
};




  // 복사 기능
  const copyToClipboard = (emoticon: string) => {
  navigator.clipboard.writeText(emoticon);
  alert('copied to clipboard!');

  // 최근 사용 이모티콘 불러오기
  let recentList: string[] = [];
  const recent = localStorage.getItem('recentEmoticons');
  if (recent) {
    recentList = JSON.parse(recent);
  }

  // 중복 제거 (이미 있으면 삭제)
  recentList = recentList.filter(item => item !== emoticon);

  // 이모티콘을 가장 앞에 추가
  recentList.unshift(emoticon);

  // 최근 20개로 제한 (원하면 조정 가능)
  if (recentList.length > 20) {
    recentList = recentList.slice(0, 20);
  }

  // 저장하기
  localStorage.setItem('recentEmoticons', JSON.stringify(recentList));
};

  

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'var(--font-subtitle)' }}>
      {/* 타이틀 */}
      <div style={{ fontFamily: 'var(--font-title)', fontSize: 32, textAlign: 'center', margin: '16px 0' }}>memoticon</div>

      {/* 상단 카테고리 버튼 */}
      <div style={{ display: 'flex', overflowX: 'auto', gap: 8, margin: '12px 0' }}>
        {categories.map(c => (
          <button
            key={c.key}
            onClick={() => scrollToSection(c.key)}
            style={{
              display: 'flex', 
              alignItems: 'center', 
              border: `2px solid ${c.color}`, 
              color: c.color,
              background: '#fff', 
              borderRadius: 16, 
              padding: '0px 12px', 
              height: 36,
              minHeight: 36,
              maxHeight: 36,
              fontSize: 16, 
              marginBottom: 4,
              whiteSpace: 'nowrap',   // 한 줄로 고정
              lineHeight: 1,          // 폰트 세로 중앙정렬
            }}>

            <span style={{
    marginRight: 8, fontFamily: 'var(--font-emoticon)', fontSize: 18, lineHeight: 1
  }}>
    {c.label.split(' ')[0]}
  </span>
  <span style={{
    fontFamily: 'var(--font-subtitle)'
  }}>
    {c.label.split(' ').slice(1).join(' ')}
  </span>
</button>
        ))}
      </div>

      {/* 카테고리별 이모티콘 */}
      <div style={{ paddingBottom: 80 /* 네비 바 공간 확보 */ }}>
        {categories.map(c => (
          <div key={c.key} ref={(sectionRefs as any)[c.key]}>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: 24, margin: '30px 0 14px 8px', color: c.color }}>
              {c.label}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {(emoticons as any)[c.key]?.map((em: string, idx: number) => (

                <button
                  key={idx}
                  onClick={() => copyToClipboard(em)}
                  style={{
                    fontFamily: 'var(--font-emoticon)', fontSize: 21,
                    border: `2px solid ${c.color}`, borderRadius: 12, background: '#fff',
                    color: '#262626', padding: '8px 14px', cursor: 'pointer'
                  }}>
                  {em}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 하단 네비게이션 바 */}
      <nav style={{
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        width: '100%',
        background: '#fff', 
        borderTop: '1px solid #eee',
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        height: 56
      }}>
        {/* 메인/홈 아이콘 */}
        <button style={{ 
          background: 'none', 
          border: 'none', 
          padding : '8px', 
          cursor: 'pointer'
  }}>
    <img 
      src="/icons/home2.svg" 
      alt="Home Selected" 
      style={{ width: '24px', height: '24px' }}
    />
  </button>

        {/* 최근(시계) 아이콘 */}
        <Link href="/recent">
    <button style={{ 
      background: 'none', 
      border: 'none', 
      padding: '8px',
      cursor: 'pointer'
    }}>
      <img 
        src="/icons/recent1.svg" 
        alt="Recent" 
        style={{ width: '24px', height: '24px' }}
      />
    </button>
  </Link>

        
        {/* About */}
        <a href="/about">
          <button style={{ background: 'none', border: 'none', fontSize: 28, color: '#333' }}>
            ʘ̅͜ʘ̅
          </button>
        </a>
      </nav>
    </div>
  );
}
