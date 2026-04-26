export const profile = {
  name: '강민성',
  title: '데이터와 효율을 중시하는 백엔드 개발자',
  email: 'nonasking@gmail.com',
  phone: '010-3708-0649',
  github: 'https://github.com/nonasking',
}

export const introduction =
  '일 1,200만 건 트래픽 규모의 B2C 서비스를 운영하며, 결제/물류 등 높은 신뢰성이 요구되는 도메인에서 안정성 중심의 백엔드를 설계해왔습니다.\n\nPython 프레임워크 기반 API 설계와 비동기 처리, AWS 인프라 환경에서의 서비스 운영 경험을 바탕으로 문제를 구조적으로 분석하고 지속 가능한 시스템을 만드는 것을 지향합니다.'

export const skills = {
  backend: {
    main: ['Python', 'Django', 'FastAPI', 'Celery'],
    sub: ['Docker', 'Kubernetes', 'AWS', 'Node.js'],
  },
  database: {
    main: ['PostgreSQL', 'Amazon Redshift', 'Redis'],
    sub: ['MySQL'],
  },
  collaboration: ['Github', 'Bitbucket', 'Notion', 'Confluence', 'Slack'],
}

export interface WorkExperience {
  company: string
  team: string
  role: string
  period: string
  current: boolean
  description: string
}

export const workExperiences: WorkExperience[] = [
  {
    company: '단비교육',
    team: '학습서비스개발1팀',
    role: '백엔드 개발자',
    period: '2024.10 ~ 현재',
    current: true,
    description: '유초등 학습 서비스 "윙크" 서비스 개발 — 서비스 / 어드민 영역 백엔드 개발 업무를 담당하고 있습니다.',
  },
  {
    company: 'Astron Security (아스트론 시큐리티)',
    team: 'AI 기술팀',
    role: '백엔드 개발자',
    period: '2023.12 ~ 2024.04',
    current: false,
    description: '클라우드 보안 데이터 대시보드 웹 서비스 개발 — 웹 플랫폼 개발 및 서버 관리 업무를 수행했습니다.',
  },
  {
    company: 'F&F (에프앤에프)',
    team: '데이터기획팀',
    role: '웹 개발자',
    period: '2022.03 ~ 2023.07 / 1년 5개월',
    current: false,
    description:
      '사용자 데이터 대시보드 웹 서비스 개발 — 웹 플랫폼 개발 및 데이터 분석 업무를 진행했으며, 필요에 따라 PO(Project Owner) 업무를 수행했습니다.',
  },
]

export interface Project {
  name: string
  stack: string[]
  period: string
  summary: string
  bullets: string[]
  github?: string
  note?: string
}

export const projects: Project[] = [
  {
    name: 'Wink',
    stack: ['Django', 'Python', 'Docker', 'Kubernetes', 'Celery', 'PostgreSQL', 'Redis', 'AWS', 'Git', 'Github'],
    period: '2024.10 ~ 현재',
    summary: '유초등 학습 서비스의 국내 및 글로벌 서비스 백엔드 개발과 운영 업무 수행',
    bullets: [
      '120만 명 규모 서비스의 백엔드 개발 및 운영 — AWS ALB 기준 일 1,200만 건 트래픽 환경에서 API 안정성 모니터링 및 장애 대응 수행',
      'PG사 연동 결제 시스템 설계 및 개발 주도 — 결제 상태 동기화 및 예외 처리 로직을 구현하여 결제 실패 케이스 대응력과 운영 안정성 개선',
      '물류사 연동 물류 시스템 운영 및 유지보수 — 주문·배송 상태 연동 프로세스 관리 및 이슈 해결을 통해 서비스 운영 연속성 확보',
      '회원 관리 핵심 기능 설계 및 개발 — 회원 관리 라이프사이클 설계 참여 및 기능 확장을 통해 서비스 도메인 핵심 기능 안정화',
      'API 문서 표준화 및 테스트 코드 개선 — Swagger 기반 문서 규격 정리와 테스트 코드 리팩토링으로 프론트엔드 및 QA 협업 효율 향상',
      '레거시 코드 리팩토링 및 운영 자동화 — 반복 운영 작업을 기능화하고 코드 구조 개선을 수행하여 유지보수성 및 개발 생산성 향상',
      'ISMS 심사 대비 웹 취약점 개선 — 외부 모의해킹 결과로 도출된 취약점의 원인 분석 및 대응 방안 적용을 통해 서비스 보안 수준 강화',
    ],
  },
  {
    name: 'AI-Guardian',
    stack: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Redis', 'AWS', 'Git', 'Github'],
    period: '2023.12 ~ 2024.04',
    summary: '클라우드 보안 데이터 시각화, 추출을 위한 웹 애플리케이션 개발',
    bullets: [
      '사용자 인증 모의 서버 개발',
      '사용자 로그 기록 미들웨어 개발',
      'Pytest로 테스트 환경 구성',
      'OpenAPI 테스트 환경 세팅',
      '서버 상태 모니터링 / 알람 프로그램 개발',
    ],
  },
  {
    name: 'DashFF',
    stack: ['Django', 'Python', 'Pandas', 'Redshift', 'PostgreSQL', 'Redis', 'AWS', 'Git', 'BitBucket'],
    period: '2022.05 ~ 2023.07',
    summary: '패션 비즈니스 데이터 시각화를 주 기능으로 하는 웹 사이트의 PO를 맡아 운영 및 개발 전담',
    bullets: [
      '사용자와 직접 소통하며 프로젝트의 유지보수, 기능 개선, 소스 리팩토링, 신규 화면 개발 수행',
      'SQL Raw Query Tuning을 통해 데이터 조회 속도 개선',
      '수기로 관리하던 사용자 권한 관리 로직을 DB를 활용하는 방향으로 개편하여 권한 관리에 필요한 유지보수 비용 절감',
      '서비스 오픈 상태 세분화 및 에러 모니터링 프로세스 정립을 통해 서비스 장애 대응 시간 감축',
      '유지보수 항목별 매뉴얼을 신규 작성하여 협업 및 업무 효율 제고',
      '상품 및 이미지 매핑 및 저장, 편집, 조회 공통 기능 개발',
    ],
  },
  {
    name: 'MilkyWay',
    stack: ['Python', 'Electron', 'Node.js', 'Redshift', 'Redis', 'AWS', 'Git', 'Github'],
    period: '2023.01 ~ 2023.07',
    summary: '패션 비즈니스 데이터 시각화, 추출을 위한 데스크톱 애플리케이션 신규 개발 및 런칭',
    bullets: [
      'Django 기반 웹 프로젝트 Electron 마이그레이션',
      '마케팅, 판매 현황을 비롯한 다양한 분야의 데이터를 분석하여 대시보드 화면 신규 개발',
      'Redis 캐싱 도입으로 데이터 조회 효율 개선 (최대 70% 속도 개선)',
      '사용자 제품별 이미지 관리 기능 개발 (기존 수기 관리 업무 프로세스 개선)',
      '비즈니스 데이터 레포트 형식 Excel export 기능 개발 (Pywin32 활용)',
    ],
  },
  {
    name: 'MilkyWeby',
    stack: ['Node.js', 'Express', 'Redshift', 'Redis', 'AWS', 'Git', 'Github'],
    period: '2023.04',
    summary: 'Electron 기반 데스크톱 애플리케이션 → Express 웹 애플리케이션 마이그레이션',
    bullets: [
      'Electron의 ipcMain, ipcRenderer로 구현한 API를 Express로 마이그레이션',
      'Apache 서버에 Node.js 환경 세팅하여 배포',
    ],
  },
  {
    name: 'Crow',
    stack: ['Gin', 'GoLang'],
    period: '2025.04 ~ 2025.05',
    summary: '실시간으로 사용자의 결제 내역을 감지 및 분석하여 Notion API를 통해 Notion에 가계부 내역을 등록하는 서비스',
    note: '사내 사이드 프로젝트',
    bullets: ['기획 및 개발 전담'],
  },
  {
    name: 'MLBTI',
    stack: ['Node.js'],
    period: '2022.09 ~ 2022.10',
    summary: 'MBTI와 같은 심리테스트를 통해 사용자의 패션 성향을 체크하는 웹사이트 기획 및 개발',
    note: '사내 사이드 프로젝트',
    bullets: [],
  },
]

export interface Education {
  school: string
  department: string
  degree: string
  period: string
  projects?: {
    name: string
    stack: string[]
    period: string
    description: string
    github?: string
    demo?: string
  }[]
}

export const educations: Education[] = [
  {
    school: '한국방송통신대학교',
    department: '컴퓨터과학과',
    degree: '학사 졸업',
    period: '2023.09 ~ 2026.03',
  },
  {
    school: 'Wecode',
    department: '개발자 부트캠프 / 백엔드 코스',
    degree: '',
    period: '',
    projects: [
      {
        name: 'Wegabox',
        stack: ['Django', 'Python', 'MySQL'],
        period: '2022.01.10 ~ 2022.01.21',
        description: '메가박스 사이트 모티브의 영화 예매 웹사이트 백엔드 개발',
        github: 'https://github.com/nonasking/28-2nd-Wegabox-backend',
      },
      {
        name: 'Gamsung',
        stack: ['Django', 'Python', 'MySQL'],
        period: '2021.12.27 ~ 2022.01.07',
        description: '삼성전자 사이트 모티브의 전자제품 이커머스 웹사이트 백엔드 개발',
        github: 'https://github.com/wecode-bootcamp-korea/28-1st-Gamsung-backend',
      },
    ],
  },
  {
    school: '건국대학교',
    department: '철학, 상담학',
    degree: '학사 졸업',
    period: '2017.03 ~ 2021.09',
  },
]
