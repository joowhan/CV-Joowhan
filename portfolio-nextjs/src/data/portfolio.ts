export const profile = {
  name: '김주환',
  nameEn: 'Joowhan Kim',
  title: 'Cloud & AI Engineer',
  summary: '운영 현장의 문제를 찾아, 인프라 자동화와 AI 서비스로 해결합니다.',
  description: '금융그룹 오픈소스 거버넌스와 Linux 인프라를 운영하며, 신규 취약점의 영향 범위를 추적하는 SBOM 플랫폼을 제안하고 클라우드 인프라와 AI 파이프라인을 구축하고 있습니다.',
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
    intro: '그룹 오픈소스 관리시스템과 공동 패키지 저장소를 운영하고, 관계사 공통 점검 프로세스와 사용자 교육을 정립했습니다. 폐쇄망 인프라의 문제를 원인까지 추적하고, 반복되는 취약점 영향 조회의 한계를 SBOM 플랫폼 제안으로 연결했습니다.',
    kpis: [
      { num: '약 50%', label: '문의 감소 · 일별 집계 기준' },
      { num: '4종', label: '패키지 저장소 운영' },
      { num: '21대', label: '정기 IPL 대상 VM' },
      { num: '100%', label: '연 4회 IPL 완료율' },
    ],
    blocks: [
      {
        title: '관계사 공통 프로세스와 사용자 교육',
        items: [
          '관계사 정보보호 담당자 인터뷰와 절차 흐름도 비교로 <b>공통 오픈소스 점검 프로세스 수립</b>',
          '반입부터 배포까지 단계별 역할을 정리하고, <b>자체점검을 지속적인 활동으로 재정의</b>',
          '라이선스·SBOM·공급망 보안 교육과 매뉴얼 제작으로 <b>문의 건수 절반 가까이 감소</b> — 일별 문의 집계 기준',
          '정보보호부·IT기획부와 예외처리 프로세스 운영, 관계사별 라이선스·취약점 조치 가이드 제공',
        ],
      },
      {
        title: '공동 저장소 운영과 원인 추적',
        items: [
          '<b>yum·PyPI·Maven·npm 저장소</b> 운영, 검증 결과 모니터링 및 사용자 연결 설정 지원',
          '빌드 의존성 반입 실패 시 <b>정상 응답(HTTP 200)에 섞인 HTML</b>을 확인하고 상위 저장소 캐시까지 추적',
          '잘못 캐시된 응답이 빌드 도구의 대체 포맷 탐색을 막는 원인을 규명하고 <b>캐시 제거·의존성 갱신 안내</b>',
          '신규 CVE와 패키지 목록·점검 이력을 대조하는 <b>영향 대상 역추적 스크립트 제작·공유</b>',
        ],
      },
      {
        title: 'Linux 인프라와 운영 안정성',
        items: [
          'VM 21대 대상 <b>연 4회 정기 IPL 완료율 100%</b>, 작업 전후 서비스 점검 수행',
          '증설이 어려운 상황에서 파일시스템 재구성과 <b>심볼릭 링크·K8s 리소스 쿼터</b>로 가용 용량 확보',
          '<b>SSL 인증서 관리</b> 및 k3s TLS 인증서 만료 대응 — CA·리프 인증서 갱신 주기를 구분하고 일정 관리',
          '은행 RMS 구축 지원 — VM 발급, 스토리지 설계, Docker 배포 환경 및 방화벽 정책 구성',
        ],
      },
      {
        title: '데이터베이스와 서비스 보안',
        items: [
          'PostgreSQL의 <b>풀 테이블 스캔으로 느려진 쿼리에 인덱스 적용</b>으로 조회 속도 개선',
          'DB EOS 대응과 분석 시스템 DB·에이전트 업데이트 수행',
          '내부 서비스의 <b>Host 헤더 우회 취약점</b>에 Nginx 계층적 ACL·default_server 하드닝 적용',
        ],
      },
    ],
  },
]

export const skills = [
  {
    title: 'Cloud & Infrastructure',
    tags: ['AWS', 'Terraform', 'Linux', 'Docker', 'Kubernetes / k3s', 'Nginx'],
  },
  {
    title: 'Delivery & Observability',
    tags: ['Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Loki', 'IAM'],
  },
  {
    title: 'AI & Data',
    tags: ['AWS Bedrock', 'LangChain', 'PostgreSQL', 'pgvector', 'Chroma', 'TensorFlow'],
  },
  {
    title: 'Backend & Application',
    tags: ['Python', 'Java', 'SQL', 'Spring Boot', 'Spring Batch', 'Oracle PL/SQL', 'Flutter'],
  },
]

export const projects = [
  {
    featured: true,
    period: '2026.03 ~ 현재',
    badge: '진행 중 · 제안 채택',
    title: 'SBOM 플랫폼 “오스(OSS)의 마법사”',
    subtitle: '아이디어 발의 · 6인 CoP 인프라 리드 겸 부팀장',
    tags: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'PostgreSQL', 'AWS Bedrock', 'Prometheus / Grafana / Loki'],
    context: '기존 시스템은 점검 시점의 라이선스와 취약점을 식별했지만, 신규 CVE가 공개되면 이미 점검한 대상 중 무엇이 영향받는지 역방향으로 조회하기 어려웠습니다. 수작업 역추적을 돕는 스크립트를 먼저 공유하고, 이를 상시 조회 체계로 확장하는 플랫폼을 제안했습니다.',
    achievements: [
      '<b>OSV·NVD·GitHub Advisory 3개 원천, 취약점 24.5만 건 적재</b> — SBOM 등록 시 구성요소와 대조하는 구조 설계',
      '<b>Terraform 기반 AWS 환경과 Jenkins CI/CD 구축</b>, Docker 개발환경 표준화 및 MySQL → PostgreSQL 마이그레이션',
      '이미지 파일 전송 중 빌드 서버 OOM 발생 → <b>레지스트리 push/pull 배포로 전환</b>, 빌드·앱 IAM 역할 분리 및 CI 자격증명 관리 개선',
      '<b>Prometheus·Grafana·Loki 모니터링</b>과 AWS Budget 비용 모니터링 구성',
      '<b>AWS Bedrock 기반 취약점 요약·설명 카드 구현</b> 및 AI·취약점 엔진 컨테이너 CI/CD 구축',
      '<b>제안 채택 → 오픈소스 관리시스템 고도화 사업에 SBOM 관리 체계 포함 예정</b>',
    ],
    decisions: [
      { title: '데이터 권한을 먼저 제한', detail: '다관계사 RBAC를 전제로 SQL CTE에서 조회 범위를 제한해, 권한 밖 데이터가 AI 컨텍스트에 들어가지 않도록 설계했습니다.' },
      { title: '수치와 식별자는 원문으로 검증', detail: '수치는 검증된 쿼리가 생성하고, AI 응답의 버전·CVE·GHSA를 원문과 대조합니다. 근거 밖 값은 정형 안내로 대체하도록 설계했습니다.' },
      { title: '배치와 실시간 요청의 자원 분리', detail: '요약 배치와 챗봇의 세마포어·재시도 정책을 분리해 배치가 사용자 응답의 호출 한도를 점유하지 않도록 설계했습니다.' },
    ],
    status: '완료: 인프라·CI/CD·취약점 요약 카드 / 진행 중: pgvector HNSW + tsvector 기반 RAG 검색 / 예정: 요약 카드 고도화·검토 의견 보조 에이전트',
    links: [],
  },
  {
    period: '2025.01 ~ 2025.06',
    title: '은행 RMS 구축 지원',
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
    period: '2024.03 ~ 2024.10',
    title: '하나Gift\n금융상품 선물하기 서비스',
    subtitle: '개인 프로젝트 · 친구·위시리스트 기반 금융상품 선물 서비스',
    tags: ['Spring Boot', 'Spring Batch', 'Oracle', 'LangChain', 'Llama3', 'AWS'],
    achievements: [
      '<b>LangChain·Llama3-ko·Chroma 기반 RAG Q&A</b> — 서비스 문서를 검색해 상품·주문 문의 응답 자동화',
      '<b>Spring Batch 예약 주문</b> — 체결가 일괄 갱신 후 환율·수수료를 반영해 주문 수량 계산, Oracle에 처리 이력 기록',
      'Caffeine Cache로 DB 읽기 최소화, Selenium·Crontab 기반 환율 수집',
      'AWS SQS-EventBridge-Lambda 배치 + Multi-AZ DR 전략',
      'Github Actions CI/CD, Promtail·Loki 모니터링 구축',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/joowhan', icon: 'github' },
      { label: '상세보기', href: 'https://joowhan.notion.site/Portpolio-19507db177d08020828be24fc99fb3c8', icon: '📄' },
    ],
  },
  {
    period: '2023.04 ~ 2023.06',
    badge: '🏆 고용노동부 장관상 · 대상',
    title: 'KDT 해커톤 대상\n생성형 AI 그림일기 앱',
    subtitle: '위치 기반 생성형 AI 그림일기 서비스 — 팀장 · 개발 리드',
    tags: ['Flutter', 'Firebase', 'GPT API', 'Place API'],
    achievements: [
      '해커톤 우승, 기획 서비스 100% 구현',
      'GPT Prompt Engineering으로 고객 맞춤 일기 생성',
      'TAM-SAM-SOM 기반 비즈니스 가치 도출',
      '<b>설문 200명·사용자 리뷰 약 100건 분석</b>으로 간단한 일기 작성 니즈를 확인하고 개발 우선순위 결정',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/joowhan', icon: 'github' },
      { label: '상세보기', href: 'https://joowhan.notion.site/Portpolio-19507db177d08020828be24fc99fb3c8', icon: '📄' },
    ],
  },
  {
    period: '2023.02 ~ 2023.07',
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
    period: '2021.11 ~ 2021.12',
    title: '통일 빅데이터센터\n데이터베이스 구축',
    subtitle: '데이터 구조 개선과 조회 효율화',
    tags: ['Docker', 'MySQL', 'SQL'],
    achievements: [
      '정규화·역정규화·인덱싱을 적용해 <b>데이터 크기 80% 감축</b>',
      '데이터 접근 속도를 개선하고 Docker 기반 DB 환경 구성',
    ],
    links: [],
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
  { icon: '🗣️', name: 'OPIc IM2', issuer: 'ACTFL', date: '2025.08.18' },
  { icon: 'aws', name: 'AWS Certified Solutions Architect - Associate', issuer: 'Amazon Web Services', date: '2025.06.07' },
  { icon: 'linux', name: '리눅스마스터 2급', issuer: '한국정보통신진흥협회', date: '2025.03.28' },
  { icon: '💻', name: '정보처리기사', issuer: '한국산업인력공단', date: '2024.09.10' },
  { icon: '📊', name: 'ADsP', issuer: '한국데이터산업진흥원', date: '2024.03.22' },
  { icon: '🗄️', name: 'SQLD', issuer: '한국데이터산업진흥원', date: '2022.09.30' },
  { icon: '🧪', name: 'ISTQB CTFL', issuer: 'KSTQB', date: '2022.08.24' },
]

export const education = [
  { period: '2024.03 ~ 2024.10', name: '한국폴리텍대학 광명융합기술교육원 데이터분석과', detail: 'JSP, Spring, Oracle, Linux 기반 금융 서비스 개발' },
  { period: '2023.02 ~ 2023.07', name: 'KT Aivle School — AI 개발자 트랙 수료 (840H)', detail: '머신러닝·자연어처리·컴퓨터비전, TensorFlow/Keras 모델 개발, Cloud·웹 서비스 교육 및 프로젝트' },
  { period: '2017.03 ~ 2022.03', name: '한동대학교 학사 졸업 — AI·컴퓨터공학심화 전공', detail: '졸업 논문 JOK(Journal of KIISE) 게재 | 캡스톤 우수상 수상' },
]

export const awards = [
  { name: '🥈 마이크로소프트 클라우드 AI 모델 경진대회 장려상', detail: '클라우드·AI 모델 경진대회 수상', org: '2024.10.28' },
  { name: '🥇 KDT 해커톤 대상 — 고용노동부 장관상', detail: '2023 제4회 첨단산업 디지털 핵심 실무인재 양성훈련 해커톤 · 생성형 AI를 활용한 그림일기 서비스', org: '2023.06' },
  { name: '🥉 2022 SW Festival 스마트 어플리케이션 공모전 장려상', detail: '교내 식당 음식 메뉴 평가 서비스', org: '한동대학교 · 2022.10' },
  { name: '🏅 제31회 한동대학교 캡스톤 디자인 우수상', detail: '한국어 자모 단위 구성과 높임말을 반영한 한영 신경 기계 번역 · JOK(Journal of KIISE) 게재', org: '한동대학교 · 2022.06' },
]
