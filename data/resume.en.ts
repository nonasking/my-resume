import type { WorkExperience, Project, Education } from './resume'
import { skills } from './resume'

export { skills }

export const profile = {
  name: '강민성',
  title: 'Backend Developer Focused on Data & Efficiency',
  email: 'nonasking@gmail.com',
  phone: '010-3708-0649',
  github: 'https://github.com/nonasking',
}

export const introduction =
  'I have operated a B2C service handling 12 million daily requests, designing stability-focused backend systems in high-reliability domains such as payment processing and logistics.\n\nWith hands-on experience in API design using Python frameworks, asynchronous processing, and service operation in AWS infrastructure environments, I aim to build sustainable systems through structured problem analysis.'

export const workExperiences: WorkExperience[] = [
  {
    company: '단비교육',
    team: 'Learning Service Dev Team 1',
    role: 'Backend Developer',
    period: '2024.10 ~ Present',
    current: true,
    description: 'Backend development for early childhood education service "Wink" — responsible for backend development across service and admin domains.',
  },
  {
    company: 'Astron Security',
    team: 'AI Technology Team',
    role: 'Backend Developer',
    period: '2023.12 ~ 2024.04',
    current: false,
    description: 'Cloud security data dashboard web service development — responsible for web platform development and server management.',
  },
  {
    company: 'F&F',
    team: 'Data Planning Team',
    role: 'Web Developer',
    period: '2022.03 ~ 2023.07 / 1yr 5mo',
    current: false,
    description:
      'User data dashboard web service development — involved in web platform development and data analysis, with PO (Project Owner) responsibilities as needed.',
  },
]

export const projects: Project[] = [
  {
    name: 'Wink',
    stack: ['Django', 'Python', 'Docker', 'Kubernetes', 'Celery', 'PostgreSQL', 'Redis', 'AWS', 'Git', 'Github'],
    period: '2024.10 ~ Present',
    summary: 'Backend development and operations for domestic and global services of an early childhood education platform with 1.2M users',
    bullets: [
      'Backend development and operations for a 1.2M-user service — API stability monitoring and incident response in an environment with 12M daily requests per AWS ALB metrics',
      'Led the design and development of PG payment system integration — implemented payment status synchronization and exception handling logic, improving payment failure response capability and operational stability',
      'Operations and maintenance of logistics system integration — managed order and delivery status sync processes and resolved issues to ensure service continuity',
      'Designed and developed core member management features — participated in user lifecycle design and feature expansion to stabilize core service domain functionality',
      'API documentation standardization and test code improvements — organized Swagger-based documentation standards and refactored test code to improve collaboration efficiency with frontend and QA teams',
      'Legacy code refactoring and operational automation — automated repetitive operational tasks and improved code structure to enhance maintainability and development productivity',
      'Web vulnerability remediation for ISMS audit — analyzed root causes and applied countermeasures for vulnerabilities identified through external penetration testing to strengthen service security',
    ],
  },
  {
    name: 'AI-Guardian',
    stack: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Redis', 'AWS', 'Git', 'Github'],
    period: '2023.12 ~ 2024.04',
    summary: 'Web application development for cloud security data visualization and extraction',
    bullets: [
      'Developed user authentication mock server',
      'Developed user log recording middleware',
      'Configured test environment with Pytest',
      'Set up OpenAPI test environment',
      'Developed server status monitoring and alert system',
    ],
  },
  {
    name: 'DashFF',
    stack: ['Django', 'Python', 'Pandas', 'Redshift', 'PostgreSQL', 'Redis', 'AWS', 'Git', 'BitBucket'],
    period: '2022.05 ~ 2023.07',
    summary: 'Served as PO and was solely responsible for operations and development of a fashion business data visualization web platform',
    bullets: [
      'Communicated directly with users to perform maintenance, feature improvements, source refactoring, and new screen development',
      'Improved data retrieval speed through SQL raw query tuning',
      'Reorganized user permission management from manual to DB-based approach, reducing permission management maintenance costs',
      'Reduced service incident response time by refining service status granularity and establishing an error monitoring process',
      'Created new maintenance manuals for each item to improve collaboration and work efficiency',
      'Developed common features for product and image mapping, storage, editing, and retrieval',
    ],
  },
  {
    name: 'MilkyWay',
    stack: ['Python', 'Electron', 'Node.js', 'Redshift', 'Redis', 'AWS', 'Git', 'Github'],
    period: '2023.01 ~ 2023.07',
    summary: 'New development and launch of a desktop application for fashion business data visualization and extraction',
    bullets: [
      'Migrated Django-based web project to Electron',
      'Developed new dashboard screens by analyzing data across various areas including marketing and sales performance',
      'Improved data retrieval efficiency by introducing Redis caching (up to 70% speed improvement)',
      'Developed user product image management feature (improved manual management workflow)',
      'Developed business data report Excel export feature (using Pywin32)',
    ],
  },
  {
    name: 'MilkyWeby',
    stack: ['Node.js', 'Express', 'Redshift', 'Redis', 'AWS', 'Git', 'Github'],
    period: '2023.04',
    summary: 'Migrated Electron-based desktop application to Express web application',
    bullets: [
      'Migrated API implemented with Electron ipcMain/ipcRenderer to Express',
      'Set up Node.js environment on Apache server and deployed',
    ],
  },
  {
    name: 'Crow',
    stack: ['Gin', 'GoLang'],
    period: '2025.04 ~ 2025.05',
    summary: 'Service that detects and analyzes user payment history in real-time and registers household account entries into Notion via the Notion API',
    note: 'Internal Side Project',
    bullets: ['Solely responsible for planning and development'],
  },
  {
    name: 'MLBTI',
    stack: ['Node.js'],
    period: '2022.09 ~ 2022.10',
    summary: 'Planned and developed a website that checks fashion tendencies through MBTI-style psychological tests',
    note: 'Internal Side Project',
    bullets: [],
  },
]

export const educations: Education[] = [
  {
    school: '한국방송통신대학교',
    department: 'Computer Science',
    degree: "Bachelor's Degree",
    period: '2023.09 ~ 2026.03',
  },
  {
    school: 'Wecode',
    department: 'Developer Bootcamp / Backend Course',
    degree: '',
    period: '',
    projects: [
      {
        name: 'Wegabox',
        stack: ['Django', 'Python', 'MySQL'],
        period: '2022.01.10 ~ 2022.01.21',
        description: 'Backend development of a movie ticketing website inspired by Megabox',
        github: 'https://github.com/nonasking/28-2nd-Wegabox-backend',
      },
      {
        name: 'Gamsung',
        stack: ['Django', 'Python', 'MySQL'],
        period: '2021.12.27 ~ 2022.01.07',
        description: 'Backend development of an electronics e-commerce website inspired by Samsung Electronics',
        github: 'https://github.com/wecode-bootcamp-korea/28-1st-Gamsung-backend',
      },
    ],
  },
  {
    school: '건국대학교',
    department: 'Philosophy, Counseling',
    degree: "Bachelor's Degree",
    period: '2017.03 ~ 2021.09',
  },
]
