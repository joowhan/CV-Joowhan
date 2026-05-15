export const profile = {
  name: '김주환',
  nameEn: 'Joowhan Kim',
  title: 'AI & Cloud Engineer',
  email: 'joy980721@gmail.com',
  phone: '010-8820-9216',
  github: 'https://github.com/joowhan',
  notion: 'https://joowhan.notion.site/Portpolio-19507db177d08020828be24fc99fb3c8',
  company: '하나금융TI · 클라우드센터 재직중',
  photo: '/images/profile.jpg',
}

export const career = [
  {
    company: '하나금융TI',
    logo: '/images/hana.png',
    dept: '클라우드센터 · 클라우드매니지드셀',
    period: '2024.11 ~ 현재',
    intro: '하나금융그룹 10개 관계사 오픈소스 관리 시스템 인프라 운영 총괄 및 오픈소스 거버넌스 체계 내재화 담당. IT 거버넌스 프로세스 준수 모니터링, 관계사 협업 기반 예외처리 운영, 사용자 교육까지 End-to-End 거버넌스 업무 수행.',
    kpis: [
      { num: '100%', label: '운영 수행률' },
      { num: '0건',  label: '운영 장애' },
      { num: '50건', label: '운영 개선' },
      { num: '10개사', label: '거버넌스 지원' },
    ],
    blocks: [
      {
        title: 'IT 거버넌스 체계 운영',
        items: [
          '10개 관계사 오픈소스 검증 프로세스 <b>상시 모니터링</b> 및 준수 여부 점검',
          '라이선스 위반·CVE 보안 취약점 식별 후 <b>맞춤형 기술 가이드</b> 제공',
          '정보보호부·IT기획부 협업 기반 <b>예외처리 프로세스 운영</b> (법적·보안 리스크 최소화)',
          '10개 관계사 담당자 대상 <b>오픈소스 라이선스·취약점 교육</b> 기획 및 수행',
          '하나은행 FIRST RMS 구축 지원 — SW 반입~배포 全 라이프사이클(ALM) 점검',
        ],
      },
      {
        title: '클라우드 인프라 운영',
        items: [
          '21대 VM 대상 <b>연 4회 정기 IPL</b> 완료율 100%, 전·후 점검으로 장애 0건 유지',
          '파일시스템 구조 분석 후 <b>Symbolic Link · K8s 리소스 쿼터 설정</b>으로 디스크 이슈 선제 대응',
          '추가 증설 없이 운영 안정성 확보 — 비용 절감 및 가용성 동시 달성',
          'DB EOS 대응, Docker 이미지 패치, 파일시스템 구축, 계정 암복호화 등 개선 50건',
          '바이너리 분석 솔루션 DB·에이전트 업데이트 및 OSS 매뉴얼·교육자료 제작·배포',
        ],
      },
    ],
  },
]

export const skills = [
  {
    title: 'Cloud & Infra',
    tags: ['AWS (SAA·DOP·MLA)', 'Kubernetes', 'Docker', 'Linux', 'Prometheus', 'Grafana', 'CI/CD'],
  },
  {
    title: 'AI & Data',
    tags: ['LangChain', 'TensorFlow', 'Scikit-Learn'],
  },
  {
    title: 'Web / App / DB',
    tags: ['Spring Boot', 'Spring Batch', 'Oracle / PL-SQL', 'MySQL', 'Flutter'],
  },
  {
    title: 'Language',
    tags: ['Python', 'Java', 'SQL', 'C / C++'],
  },
]

export const projects = [
  {
    period: '2025.01 ~ 2025.06',
    title: '하나은행 FIRST RMS 구축 지원',
    subtitle: '오픈소스 레퍼지토리 관리 시스템 인프라 구축 · 운영',
    tags: ['Linux', 'Docker', 'VM', '방화벽', '파일시스템', '서비스 운영'],
    achievements: [
      'RMS 서버 <b>VM 발급 및 파일시스템 구축</b> — 스토리지 구조 설계 및 마운트 설정',
      '<b>Docker 환경 구성</b> — 컨테이너 기반 서비스 배포 환경 세팅',
      '<b>방화벽(Firewall) 정책 설정</b> — 포트 접근 제어 및 보안 규칙 적용',
      '오픈소스 레퍼지토리 서비스 <b>안정적 운영</b> 및 장애 대응',
      'SW 반입~배포 全 라이프사이클(ALM) 오픈소스 점검 프로세스 지원',
    ],
    links: [{ label: '상세보기', href: 'https://joowhan.notion.site/Portpolio-19507db177d08020828be24fc99fb3c8', icon: '📄' }],
  },
  {
    period: '2024.06 ~ 2024.10',
    title: '하나금융TI 채용연계\n금융상품 선물하기 서비스',
    subtitle: '적금·소수점 주식·외화를 친구에게 선물하는 핀테크 서비스',
    tags: ['Spring Boot', 'Spring Batch', 'Oracle', 'LangChain', 'Llama3', 'AWS'],
    achievements: [
      'Llama3 + RAG 기반 서비스 자체 Q&A 자동화',
      'Spring Batch로 소수점 주식 예약 주문·배분 프로세스 개발',
      'AWS SQS-EventBridge-Lambda 배치 + Multi-AZ DR 전략',
      'Github Actions CI/CD, Promtail·Loki 모니터링 구축',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/joowhan', icon: 'github' },
      { label: '상세보기', href: 'https://joowhan.notion.site/Portpolio-19507db177d08020828be24fc99fb3c8', icon: '📄' },
    ],
  },
  {
    period: '2023.05 ~ 2023.06',
    badge: '🏆 고용노동부 장관상 · 대상',
    title: 'KDT 해커톤 대상\n생성형 AI 그림일기 앱',
    subtitle: '위치 기반 생성형 AI 그림일기 서비스 — 팀장 · 개발 리드',
    tags: ['Flutter', 'Firebase', 'GPT API', 'Place API'],
    achievements: [
      '해커톤 우승, 기획 서비스 100% 구현',
      'GPT Prompt Engineering으로 고객 맞춤 일기 생성',
      'TAM-SAM-SOM 기반 비즈니스 가치 도출',
      '100건 사용자 리뷰 분석 → 차별화 포인트 도출',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/joowhan', icon: 'github' },
      { label: '상세보기', href: 'https://joowhan.notion.site/Portpolio-19507db177d08020828be24fc99fb3c8', icon: '📄' },
    ],
  },
  {
    period: '2021.06 ~ 2022.06',
    badge: '📄 JOK(Journal of KIISE) 게재',
    title: 'NLP 연구\n한국어 특수성 반영 한영 번역',
    subtitle: '자모 단위 구성과 높임말을 반영한 한영 신경 기계 번역',
    tags: ['Python', 'PyTorch', 'NumPy', 'Transformer'],
    achievements: [
      '높임말↔반말 변환 전처리 모듈 직접 개발',
      '300만 건 데이터 통일 후 Transformer 학습',
      'BLEU 0.3점 향상, 오번역 문제 해결',
      '국내 학술지 JOK 게재, 캡스톤 우수상',
    ],
    links: [{ label: '논문 보기', href: 'https://joowhan.notion.site/Portpolio-19507db177d08020828be24fc99fb3c8', icon: '📄' }],
  },
  {
    period: '2023.01 ~ 2023.07',
    title: 'KT aivle school\nData · AI · Cloud 트랙',
    subtitle: 'AI 개발자 트랙 3기 수료 (840H) — ML·CV·NLP·Cloud',
    tags: ['TensorFlow', 'mlflow', 'Docker', 'EC2'],
    achievements: [
      '수어 대화형 AI: mlflow 실험·모델 버전 관리 및 배포',
      '1:1 문의 유형 분류 챗봇 (pre-trained 모델)',
      '차량 파손 여부 CNN 이미지 분류 모델 개발',
      'AI 기반 루틴 관리 서비스 Frontend 개발 참여',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/joowhan/aivle_projects', icon: 'github' }],
  },
  {
    period: '2020.12 ~ 2021.12',
    title: '학회 "시선"\n장애인 운동 앱 OPAL 개발',
    subtitle: '소외된 이웃을 위한 IT 솔루션 학회 · Flutter 앱 개발 및 스터디 운영',
    tags: ['Flutter', 'Firebase', 'Git / GitHub'],
    achievements: [
      '하체 장애인·노인 대상 실내 운동 앱 "OPAL" 개발',
      '신입 학회원 Flutter & GitHub 스터디 기획·운영',
      '학회 내 스터디 문화 정착 및 미니 프로젝트 진행',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/joowhan', icon: 'github' }],
  },
]

export const certs = [
  { icon: 'aws', name: 'AWS Certified DevOps Engineer - Professional', issuer: 'Amazon Web Services', date: '2026.03.02' },
  { icon: 'aws', name: 'AWS Certified Machine Learning Engineer - Associate', issuer: 'Amazon Web Services', date: '2026.01.03' },
  { icon: '🧠', name: 'AICE Associate', issuer: 'kt, 한국경제신문', date: '2025.12.20' },
  { icon: 'aws', name: 'AWS Certified Solutions Architect - Associate', issuer: 'Amazon Web Services', date: '2025.06.07' },
  { icon: 'linux', name: '리눅스마스터 2급', issuer: '한국정보통신진흥협회', date: '2025.03.28' },
  { icon: '💻', name: '정보처리기사', issuer: '한국산업인력공단', date: '2024.09.10' },
  { icon: '📊', name: 'ADsP', issuer: '한국데이터산업진흥원', date: '2024.03.22' },
  { icon: '🗣️', name: 'OPIc IM2', issuer: 'ACTFL', date: '2025.08.18' },
  { icon: '🗄️', name: 'SQLD', issuer: '한국데이터산업진흥원', date: '2022.09.30' },
  { icon: '🧪', name: 'ISTQB', issuer: 'International Testing Board', date: '2022.08.24' },
]

export const education = [
  { period: '2024.03 ~ 2024.12', name: '하나금융TI 채용연계 (1200H) · 광명융합기술교육원', detail: 'JSP, Spring, Oracle, Linux 기반 금융 서비스 개발' },
  { period: '2023.02 ~ 2023.07', name: 'KT Aivle School — AI 개발자 트랙 수료 (840H)', detail: '머신러닝·자연어처리·컴퓨터비전, TensorFlow/Keras 모델 개발, Cloud·웹 서비스 교육 및 프로젝트' },
  { period: '2017.03 ~ 2022.03', name: '한동대학교 학사 졸업 — AI·컴퓨터공학심화 전공', detail: '졸업 논문 JOK(Journal of KIISE) 게재 | 캡스톤 우수상 수상' },
]

export const awards = [
  { name: '🥇 KDT 해커톤 대상 — 고용노동부 장관상', detail: '2023 제4회 첨단산업 디지털 핵심 실무인재 양성훈련 해커톤 · 생성형 AI를 활용한 그림일기 서비스', org: '고용노동부 · 2023.06' },
  { name: '🥈 마이크로소프트 클라우드 AI 모델 경진대회 장려상', detail: '금융상품 선물하기 서비스', org: 'MS 글로벌 파트너 · 2024.10' },
  { name: '🥉 2022 SW Festival 스마트 어플리케이션 공모전 장려상', detail: '교내 식당 음식 메뉴 평가 서비스', org: '한동대학교 · 2022.10' },
  { name: '🏅 제31회 한동대학교 캡스톤 디자인 우수상', detail: '한국어 자모 단위 구성과 높임말을 반영한 한영 신경 기계 번역 · JOK(Journal of KIISE) 게재', org: '한동대학교 · 2022.06' },
]
