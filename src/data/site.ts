export const profile = {
  name: "Jiading Zhu",
  title:
    "PhD Student, Electrical & Computer Engineering, University of Toronto",
  shortTitle: "PhD Student in ECE at the University of Toronto",
  institution: "University of Toronto",
  location: "Toronto, Canada",
  email: "jiading.light.zhu@gmail.com",
  image: "/assets/jiading.jpg",
  imageAlt: "Portrait of Jiading Zhu",
  description:
    "Generative AI, conversational agents, and digital health research at the University of Toronto.",
  summary:
    "I work on generative AI systems for high-stakes conversational settings, with a focus on motivational-interviewing chatbots for smoking cessation. My research sits at the intersection of controlled generation, conversational agents, alignment, prompt engineering, and digital health.",
  researchSummary:
    "My current work develops and evaluates AI counsellor chatbots that can support smoking cessation using motivational interviewing principles. The work connects language-model generation, clinically grounded interaction design, and collaboration with health researchers and clinicians.",
  about:
    "I am interested in building AI systems that are technically rigorous and useful in real human contexts. Before my PhD, I worked on machine learning systems and benchmarking software, with experience spanning LLM agent workflows, computer vision, NLP, C++ inference implementations, and reinforcement learning research.",
  links: [
    {
      label: "Email",
      href: "mailto:jiading.light.zhu@gmail.com",
      icon: "email",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.ca/citations?user=FDl9F6UAAAAJ&hl=en",
      icon: "scholar",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jiading-zhu/",
      icon: "linkedin",
    },
  ],
  interests: [
    "Generative AI",
    "Conversational Agents",
    "Digital Health",
    "Controlled Generation",
    "Prompt Engineering",
    "Alignment",
  ],
};

export const education = [
  {
    institution: "University of Toronto",
    location: "Toronto, Canada",
    degree:
      "Doctor of Philosophy, The Edward S. Rogers Sr. Department of Electrical & Computer Engineering",
    date: "Sep 2022 - Present",
    bullets: [
      "Supervised by Prof. Jonathan Rose.",
      "Developing generative chatbots that incentivize patients to quit smoking in collaboration with CAMH.",
      "Research topics include controlled generation, conversational systems, prompt engineering, alignment, and digital health.",
    ],
  },
  {
    institution: "University of Toronto",
    location: "Toronto, Canada",
    degree:
      "Bachelor of Applied Science, Engineering Science, Machine Intelligence Option",
    date: "Sep 2015 - Apr 2020",
    bullets: [
      "Specialized in deep learning and reinforcement learning.",
      "Coursework included machine learning, algorithms and data structures, object-oriented programming, databases, and systems.",
    ],
  },
];

export const experience = [
  {
    organization: "CAMH",
    role: "Clinical Observer",
    date: "Jun 2026 - Present",
    location: "Toronto, Canada",
    type: "Clinical research exposure",
    bullets: [
      "Observe real-world motivational interviewing sessions for smoking cessation conducted by expert clinicians at the Nicotine Dependence Clinic.",
      "Connect clinical counselling practice with the design and evaluation of motivational-interviewing chatbot interactions.",
    ],
  },
  {
    organization: "IBM",
    role: "Research Scientist - AI-powered Automation",
    date: "May 2024 - Aug 2024",
    location: "Yorktown Heights, New York",
    type: "Internship",
    bullets: [
      "Worked with the AI Assistant for Business Operations team on LLM-based agentic workflows.",
      "Investigated agent frameworks including CrewAI and LangGraph.",
      "Integrated agentic workflows with open-source LLMs and IBM watsonx Orchestrate.",
      "Developed workflows for synthetic data generation and routing in enterprise automation contexts.",
    ],
  },
  {
    organization: "Primate Labs Inc.",
    role: "Machine Learning Software Developer",
    date: "Mar 2021 - Jun 2022",
    location: "Toronto, Canada",
    type: "Full-time",
    bullets: [
      "Developed machine learning workloads for Geekbench and Geekbench ML.",
      "Integrated computer vision and NLP models using C++ and Python, including MobileNet, RetinaFace, and BERT.",
      "Implemented inference layers from scratch in C++ for Geekbench's internal inference platform.",
      "Added model support across TensorFlow Lite, Core ML, Intel OpenVINO, and related frameworks.",
    ],
  },
  {
    organization: "Rambus Inc.",
    role: "Software Engineering Intern, Digital Design Team",
    date: "May 2018 - May 2019",
    location: "Toronto, Canada",
    type: "Internship",
    bullets: [
      "Designed and tested workflow management solutions for file-generation procedures.",
      "Worked across requirements, analysis, design, estimation, and testing using Python, Perl, TCL, Bash, and GNU Make.",
      "Contributed to a low-code simulation platform for virtual ASIC workflows.",
    ],
  },
];

export const researchExperience = [
  {
    organization: "University of Toronto, Intelligent Adaptive Interventions Lab",
    role: "Research Assistant",
    date: "Sep 2019 - May 2020",
    bullets: [
      "Completed undergraduate thesis work with Prof. Joseph Jay Williams.",
      "Investigated habituation effects in reinforcement learning with linear contextual multi-armed bandit models and Thompson sampling.",
      "Studied the problem in the context of DIAMANTE, a digital-health intervention for patients with co-morbid diabetes and depression.",
    ],
  },
  {
    organization: "Technical University of Darmstadt, Parallel Programming Team",
    role: "Research Assistant",
    date: "May 2019 - Aug 2019",
    bullets: [
      "Modelled EfficientNet performance with respect to network depth, width, and image resolution.",
      "Adapted EfficientNet variants for datasets including Tiny ImageNet and CIFAR-100.",
      "Integrated modelling work with Extra-P performance-modelling software.",
    ],
  },
];

export const publications = [
  {
    title:
      "What are They Thinking? Delineation, Probing and Tracking of Concepts in LLMs",
    authors:
      "Mohamed Abdelwahab, Michelle Yu Collins, Sihan Chen, Yi Cheng Zhao, Zafarullah Mahmood, Jiading Zhu, Soliman Ali, and Jonathan Rose",
    venue: "arXiv preprint arXiv:2605.28823",
    summary:
      "Introduces a framework for delineating, probing, and tracking internal concepts in large language models, with the goal of making model reasoning more inspectable.",
    year: "2026",
    citations: "",
    href: "https://arxiv.org/abs/2605.28823",
    tags: ["LLMs", "Interpretability"],
    featured: false,
  },
  {
    title:
      "A Fully Generative Motivational Interviewing Counsellor Chatbot for Moving Smokers Towards the Decision to Quit",
    authors:
      "Zafar Mahmood, Soliman Ali, Jiading Zhu, Mohamed Abdelwahab, Max Y. Collins, Simon Chen, Yicheng C. Zhao, Jodi Wolff, Osnat Melamed, Nadia Minian, Marta Maslej, Carolynne Cooper, Matt Ratto, Peter Selby, and Jonathan Rose",
    venue: "Findings of the Association for Computational Linguistics: ACL 2025",
    summary:
      "Presents a fully generative motivational-interviewing counsellor chatbot designed to help smokers move toward deciding to quit.",
    year: "2025",
    citations: "14",
    href: "https://scholar.google.ca/citations?user=FDl9F6UAAAAJ&hl=en",
    tags: ["Motivational Interviewing", "Conversational Agents"],
    featured: true,
  },
  {
    title:
      "The Impact of ChatGPT Exposure on User Interactions With a Motivational Interviewing Chatbot: Quasi-Experimental Study",
    authors:
      "Jiading Zhu, Alec Dong, Cindy Wang, Scott Veldhuizen, Mohamed Abdelwahab, Andrew Brown, Peter Selby, and collaborators",
    venue: "JMIR Formative Research 9(1), e56973",
    summary:
      "Studies how exposure to ChatGPT changed user interactions with a motivational-interviewing chatbot in a quasi-experimental digital-health setting.",
    year: "2025",
    citations: "3",
    href: "https://scholar.google.ca/citations?user=FDl9F6UAAAAJ&hl=en",
    tags: ["Digital Health", "Evaluation"],
    featured: true,
  },
  {
    title:
      "Automated Coding of Counsellor and Client Behaviours in Motivational Interviewing Transcripts: Validation and Application",
    authors:
      "Soliman Ali, Jiading Zhu, Alex Guo, Xiao Nan Ye, Qilin Gu, Jodi Wolff, Carolynne Cooper, Osnat C. Melamed, Peter Selby, and Jonathan Rose",
    venue: "NLP-AI4Health, pages 25-54",
    summary:
      "Validates automated coding methods for counsellor and client behaviours in motivational-interviewing transcripts, supporting scalable analysis of counselling interactions.",
    year: "2025",
    citations: "2",
    href: "https://scholar.google.ca/citations?user=FDl9F6UAAAAJ&hl=en",
    tags: ["NLP", "Digital Health"],
    featured: false,
  },
  {
    title:
      "RAG-Verus: Repository-Level Program Verification with LLMs using Retrieval Augmented Generation",
    authors: "Sicheng Zhong, Jiading Zhu, Yifang Tian, and Xujie Si",
    venue: "arXiv preprint arXiv:2502.05344",
    summary:
      "Uses retrieval-augmented generation to support repository-level program verification with LLMs.",
    year: "2025",
    citations: "5",
    href: "https://arxiv.org/abs/2502.05344",
    tags: ["LLMs", "Program Verification"],
    featured: false,
  },
  {
    title:
      "Generation, Distillation and Evaluation of Motivational Interviewing-Style Reflections with a Foundational Language Model",
    authors:
      "Andrew Brown, Jiading Zhu, Mohamed Abdelwahab, Alec Dong, Cindy Wang, and Jonathan Rose",
    venue:
      "Proceedings of the 18th Conference of the European Chapter of the Association for Computational Linguistics",
    summary:
      "Generates, distills, and evaluates motivational-interviewing-style reflections from a foundation model.",
    year: "2024",
    citations: "10",
    href: "https://arxiv.org/abs/2402.01051",
    tags: ["Motivational Interviewing", "LLMs"],
    featured: true,
  },
];

export const skills = [
  {
    group: "Programming",
    items: ["Python", "C++", "C", "Java", "MATLAB", "Julia"],
  },
  {
    group: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "scikit-learn"],
  },
  {
    group: "Systems and Tools",
    items: [
      "Unix",
      "PostgreSQL",
      "Git",
      "MongoDB",
      "Perl",
      "TCL",
      "GNU Make",
      "Verilog-HDL",
    ],
  },
];

export const researchHighlights = [
  {
    title: "Generative MI chatbot research",
    body: "Developing and evaluating fully generative counsellor chatbots that use motivational interviewing principles to help smokers move toward quitting.",
  },
  {
    title: "Clinically grounded evaluation",
    body: "Connecting LLM behaviour with clinical practices through collaboration with CAMH and observation of real motivational interviewing sessions.",
  },
  {
    title: "Controlled generation and alignment",
    body: "Studying how language models can generate useful, context-sensitive responses while staying aligned with therapeutic communication goals.",
  },
];
