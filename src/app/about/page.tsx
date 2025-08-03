'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [iconState, setIconState] = useState('ʘ̅͜ʘ̅');

  const handleIconClick = () => {
    setIconState('◕ᴗ<');
  };

  return (
    <div style={{
      minHeight: '100vh', 
      background: '#fff', 
      color: '#222',
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        fontFamily: 'var(--font-title)', 
        fontSize: '24px',
        textAlign: 'center',
        lineHeight: '1.5'
      }}>
        I made it for your happy Farcaster life
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

{/* 최근 아이콘 - 기본 상태 */}
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

         {/* About 아이콘 - 현재 페이지이므로 활성화된 상태 유지 */}
        <button 
    onClick={handleIconClick}
    style={{ 
      background: 'none', 
      border: 'none', 
      fontSize: 28, 
      color: '#FF6B6B', // 활성화 색상
      cursor: 'pointer'
    }}
  >
    {iconState}
  </button>
      </nav>
    </div>
  );
}
