# 강민성 — 개인 이력서 포트폴리오

**[https://nonasking.github.io/my-resume](https://nonasking.github.io/my-resume)**

Next.js 16 (App Router) + Tailwind CSS v4로 제작한 정적 개인 이력서 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 16 (App Router, `output: 'export'`)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deploy**: GitHub Pages (`gh-pages`)

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx       # 메타데이터, 폰트
│   ├── page.tsx         # 섹션 조립
│   └── globals.css
├── components/
│   ├── Nav.tsx          # 스티키 네비게이션
│   ├── Header.tsx       # 히어로 헤더
│   ├── Introduction.tsx
│   ├── Skills.tsx
│   ├── WorkExperience.tsx
│   ├── Projects.tsx
│   └── Education.tsx
└── data/
    └── resume.ts        # 이력서 데이터 (수정 시 여기만 편집)
```

## 로컬 개발

```bash
npm install
npm run dev
```

개발 서버: [http://localhost:3000/my-resume](http://localhost:3000/my-resume)

> `basePath: '/my-resume'` 설정으로 인해 루트(`/`)가 아닌 `/my-resume` 경로로 접근합니다.

## 배포

```bash
npm run deploy
```

`next build` → `gh-pages` 브랜치 푸시까지 자동으로 처리됩니다.

첫 배포 후 GitHub 레포 **Settings → Pages** 에서 Branch를 `gh-pages`로 설정해야 합니다.

## 이력서 내용 수정

`data/resume.ts` 파일만 수정하면 됩니다. 컴포넌트를 건드릴 필요가 없습니다.
