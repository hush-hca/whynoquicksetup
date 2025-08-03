'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Recent() {
  const [recentEmoticons, setRecentEmoticons] = 
  useState<string[]>([]);

  useEffect(() => {
    // 로컬 스토리지에서 최근 사용한 이모티콘 불러오기 - localStorage에서 최근 이모티콘 읽기
    const recent = localStorage.getItem('recentEmoticons');
    if (recent) {
      setRecentEmoticons(JSON.parse(recent));
    }
  }, []);

  const copyToClipboard = (emoticon: string) => {
    navigator.clipboard.writeText(emoticon);
    alert('Copied to clipboard!');
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ fontFamily: 'var(--font-title)', fontSize: '32px', textAlign: 'center', margin: '16px 0' }}>
        recently used emoticons
      </h1>
      
      {recentEmoticons.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
          {recentEmoticons.map((emoticon, index) => (
            <button
              key={index}
              onClick={() => copyToClipboard(emoticon)}
              style={{
                fontFamily: 'var(--font-emoticon)',
                fontSize: '21px',
                border: '2px solid #666',
                borderRadius: '12px',
                background: '#fff',
                color: '#262626',
                padding: '8px 14px',
                cursor: 'pointer'
              }}
            >
              {emoticon}
            </button>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '18px', color: '#666' }}>
          me haven&apos;t used any emoticons yet
        </p>
      )}

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
        height: '56px'
      }}>
        
        {/* 홈 아이콘 - 기본 상태 */}
          <Link href="/">
    <button style={{ 
      background: 'none', 
      border: 'none', 
      padding: '8px',
      cursor: 'pointer'
    }}>
      <img 
        src="/icons/home1.svg" 
        alt="Home" 
        style={{ width: '24px', height: '24px' }}
      />
    </button>
  </Link>

         {/* 최근 아이콘 - 현재 페이지이므로 선택된 상태 */}
  <button style={{ 
    background: 'none', 
    border: 'none', 
    padding: '8px',
    cursor: 'pointer'
  }}>
    <img 
      src="/icons/recent2.svg" 
      alt="Recent Selected" 
      style={{ width: '24px', height: '24px' }}
    />
  </button>

  {/* About 아이콘 */}
        <Link href="/about">
    <button style={{ 
      background: 'none', 
      border: 'none', 
      fontSize: 28, 
      color: '#333',
      cursor: 'pointer'
    }}>
      ʘ̅͜ʘ̅
    </button>
  </Link>
      </nav>
    </div>
  );
}
