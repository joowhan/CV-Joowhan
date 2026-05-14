# 김주환 Portfolio — Next.js

## 로컬 실행

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 내용 수정

모든 포트폴리오 데이터는 한 파일에서 관리합니다:

```
src/data/portfolio.ts
```

이미지/폰트는 `public/` 폴더에 있습니다:

```
public/
  images/   profile.jpg, github.png, aws.png, hana.png, linux.png
  fonts/    Hana2-*.otf
```

## Vercel 배포 (무료, 링크 공유 가능)

1. [vercel.com](https://vercel.com) 가입 (GitHub 계정으로 로그인)
2. GitHub에 이 프로젝트 push
3. Vercel에서 "Import Project" → 레포 선택
4. Deploy 클릭 → 자동으로 `https://joowhan-portfolio.vercel.app` 형태 URL 생성

## 폴더 구조

```
src/
  app/
    layout.tsx      # 메타데이터, 폰트 설정
    page.tsx        # 메인 페이지 (컴포넌트 조립)
    globals.css     # 전역 CSS 변수 + 폰트 설정
  components/
    Nav.tsx / .module.css
    Hero.tsx / .module.css
    Career.tsx / .module.css
    Sections.tsx / .module.css   # Skills, Projects, Certs, Education, Awards
    Footer.tsx
  data/
    portfolio.ts    # ← 여기서 모든 내용 수정
public/
  fonts/
  images/
```
