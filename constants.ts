
import { Project, Skill, Certification, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    title: 'Multimodal Bio-Acoustics & Behavioral Decoding Engine',
    description: 'Architected a Multi-Task Learning system using a pre-trained HuBERT transformer model to recognize vocalizations and behavioral contexts simultaneously. Improved accuracy to 79.23% using custom loss functions.',
    tags: ['Python', 'PyTorch', 'Gemini API', 'Transformer', 'Bio-Acoustics'],
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop',
    sourceUrl: 'https://github.com/KarthikUppalapati57/Non-Human-Language-2',
  },
  {
    title: 'Automated PII Redaction & Document Intelligence',
    description: 'Engineered a privacy-friendly system using BERT, GPT-4o, and YOLO to detect and redact Personally Identifiable Information and handwritten signatures in legal PDFs with perfect detection in testing.',
    tags: ['Python', 'BERT', 'GPT-4o', 'YOLO', 'Computer Vision'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    sourceUrl: 'https://github.com/KarthikUppalapati57/Redaction-Of-Personally-Identifiable-Information',
  },
  {
    title: 'Customer Churn Prediction Chatbot',
    description: 'Built a full-stack AI chatbot for OTT and banking services using React/Flask. Trained Random Forest models and developed interactive dashboards to visualize churn drivers.',
    tags: ['Python', 'Flask', 'React', 'Random Forest', 'MLOps'],
    imageUrl: 'https://raw.githubusercontent.com/KarthikUppalapati57/MyPortifolio/331a2a5915cc3979523c22398d9a3b98a23fc211/Google_AI_Studio_2025-07-16T00_40_06.599Z.png',
    sourceUrl: 'https://github.com/karthikuppalapati57/customer-churn',
  },
  {
    title: 'Google GenAI Exchange Hackathon Prototype',
    description: 'Developed a personalized career advisor co-pilot using Gemini API, scraping Fortune 500 data with Node.js agents, and deploying a serverless Firebase backend.',
    tags: ['React', 'Firebase', 'Gemini API', 'Node.js', 'Web Scraping'],
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    liveUrl: 'https://personal-advisor-23aa7.web.app',
  },
  {
    title: 'Hospital Readmission Prediction',
    description: 'Developed machine learning techniques to analyze inpatient data, enabling early identification of diabetic patients at higher risk of readmission.',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Healthcare'],
    imageUrl: 'https://raw.githubusercontent.com/KarthikUppalapati57/MyPortifolio/b5e24e911c32a037285892ee5ae1c6900c5d2884/Hospital%20Readmission.484Z.png',
    sourceUrl: 'https://github.com/karthikuppalapati57/Hospital-Readmission-using-ML',
  },
  {
    title: 'CP-ABE On Cloud Security',
    description: 'Developed an advanced cryptographic model leveraging Dynamic Key Generation and QH-CPABE, achieving 50% upgrade in transmission security.',
    tags: ['Cloud Computing', 'Cryptography', 'AWS', 'Security'],
    imageUrl: 'https://raw.githubusercontent.com/KarthikUppalapati57/MyPortifolio/b5e24e911c32a037285892ee5ae1c6900c5d2884/Cp-abe.549Z.png',
    sourceUrl: 'https://github.com/karthikuppalapati57/CP-ABE',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Mindful Tech Solution',
    role: 'AI & ML Engineer Intern',
    location: 'Knoxville, TN',
    period: 'Jan, 2026 - Present',
    bullets: [
      'Architecting a scalable, AI-powered automation system for restaurant operations by building Python-based backend services.',
      'Developing OCR and machine learning models to automatically read, extract, and organize data from invoices and receipts.',
      'Integrating ML models into data processing workflows to automate entry and matching, cutting down manual work significantly.'
    ]
  },
  {
    company: 'Excelerate (Remote)',
    role: 'Prompt Engineering Research Intern',
    location: 'Remote',
    period: 'Jun, 2025 – Jul, 2025',
    bullets: [
      'Designed a framework to measure the real-world impact of AI-generated prompts for educational systems.',
      'Used advanced methods like zero-shot, few-shot, and chain-of-thought to enhance AI-driven learning interactions.',
      'Validated performance by evaluating engagement metrics, accuracy, relevance scoring, and hallucination analysis.'
    ]
  },
  {
    company: 'Aquaechange Agritech Private Limited',
    role: 'Python Developer',
    location: 'Hyderabad, TS, INDIA',
    period: 'Oct, 2023 - Jul, 2024',
    bullets: [
      'Improved real-time system tracking by linking IoT power devices with backend systems using Flask-based REST APIs.',
      'Set up event-driven workflows connecting Feed Bot automated with Flask services via API and trigger-based messages.',
      'Built scalable systems for handling data and sending system alerts, ensuring reliable backend performance.'
    ]
  },
  {
    company: 'Brain O Vision',
    role: 'Web Developer Intern',
    location: 'Hyderabad, TS, INDIA',
    period: 'May, 2022 - Jul, 2022',
    bullets: [
      'Enhanced online shopping experience by creating responsive e-commerce sites for pet food and grocery services.',
      'Built complete web solutions using Python, WordPress, and AWS, utilizing Wappalyzer for architectural insights.',
      'Provided responsive web apps with a user-friendly design ensuring smooth performance across all browsers.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Machine Learning', category: 'Core Competencies' },
  { name: 'Generative AI', category: 'Core Competencies' },
  { name: 'Vertex AI', category: 'Core Competencies' },
  { name: 'NLP', category: 'Core Competencies' },
  { name: 'Prompt Engineering', category: 'Core Competencies' },
  { name: 'Web Development', category: 'Core Competencies' },
  { name: 'DBMS', category: 'Core Competencies' },

  { name: 'Gemini API', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'Scikit-learn', category: 'AI/ML' },
  { name: 'Pandas', category: 'AI/ML' },

  { name: 'AWS', category: 'Cloud & DevOps' },
  { name: 'GCP', category: 'Cloud & DevOps' },
  { name: 'Azure', category: 'Cloud & DevOps' },
  { name: 'Docker', category: 'Cloud & DevOps' },
  { name: 'Firebase', category: 'Cloud & DevOps' },

  { name: 'Python', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'R', category: 'Languages' },

  { name: 'MySQL', category: 'Tools' },
  { name: 'Apache', category: 'Tools' },
  { name: 'WordPress', category: 'Tools' },
  { name: 'Wappalyzer', category: 'Tools' },
];

export const MINI_PROJECTS: Project[] = [
  {
    title: 'Multimodal IMDB Analysis with Keras',
    description: 'An advanced analysis of the IMDB dataset combining both text reviews and associated metadata using Keras.',
    tags: ['Keras', 'TensorFlow', 'Python', 'NLP'],
    imageUrl: 'https://raw.githubusercontent.com/KarthikUppalapati57/MyPortifolio/a86fdf2822c3e6ba14773bea9aeebf78d3ab0390/Multimodal%20IMDB%20Analysis%20with%20Keras.091Z.png',
    sourceUrl: 'https://github.com/karthikuppalapati57',
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Forward Learning Program',
    issuer: 'McKinsey Academy',
    description: 'Business skills, leadership capabilities, and digital transformation.',
    url: 'https://www.credly.com/badges/9f7423f1-757d-4d0a-ab77-1b86ac633094/public_url',
    category: 'McKinsey',
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    description: 'Comprehensive program covering the complete data analysis process.',
    url: 'https://coursera.org/share/dedc2823ae028a891f31c45bff5e9d90',
    category: 'Coursera',
  },
  {
    name: 'Prompt Design in Vertex AI',
    issuer: 'Cloud Skills Boost',
    description: 'Advanced techniques for designing effective prompts for LLMs.',
    url: 'https://www.cloudskillsboost.google/public_profiles/cf97ee7a-dc09-44a0-aea8-af1961e3d424/badges/16377587',
    category: 'Generative AI',
  },
];
