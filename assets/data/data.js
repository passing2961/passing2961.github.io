/* =========================================================================
   Site content for Young-Jun Lee's personal website.
   Edit this file to update content; pages render from these objects.
   ========================================================================= */

window.SITE = {
  /* ---- Identity / header ---- */
  name: "Young-Jun Lee",
  roles: [
    "Incoming Applied Scientist @ Amazon (Alexa AI)",
    "Visiting Scholar @ University of Minnesota",
  ],
  profilePic: "assets/img/youngjun_lee.jpeg",
  location: "Minneapolis, MN, USA",

  /* ---- Contact / social links ---- */
  links: {
    email: "passing2961@gmail.com",
    homepage: "https://sites.google.com/view/passing2961/home",
    scholar: "https://scholar.google.com/citations?user=8EgjKPUAAAAJ",
    linkedin: "https://www.linkedin.com/in/passing2961",
    github: "https://github.com/passing2961",
  },

  /* ---- About-page bio paragraphs (HTML allowed) ---- */
  bio: [
    `I am an incoming <strong>Applied Scientist</strong> at <strong>Amazon</strong> (Alexa AI), starting Fall 2026,
     and currently a <strong>Visiting Scholar</strong> at the <strong>University of Minnesota</strong>.`,
    `I completed my <strong>Ph.D. in Computer Science</strong> at <strong>KAIST</strong> (School of Computing),
     where I was fortunate to be advised by Prof. <a href="https://scholar.google.com/citations?user=KExk0BUAAAAJ" target="_blank" rel="noopener">Ho-Jin Choi</a>
     in the Knowledge Engineering and Artificial Intelligence Lab. Before that, I received my B.S. in Software from
     Sungkyunkwan University.`,
    `My research centers on <strong>large language models</strong> &mdash; building conversational and multi-modal agents,
     constructing large-scale high-quality datasets, and evaluating and improving their reasoning, refinement, and reliability.
     During my Ph.D. I built LLM-based frameworks for empathetic, personalized, and image-sharing dialogue
     (e.g., <em>Stark</em>, <em>DialogCC</em>), and studied the perception and multi-turn behavior of large vision&ndash;language models
     (e.g., <em>MultiVerse</em>). I also worked on evaluating refinement capability in language models (<em>RefineBench</em>).`,
    `Currently, I study how to internalize and evaluate <strong>scientific-discovery capability</strong> in AI agents,
     including evolution-based fine-tuning across hundreds of optimization tasks and the mechanisms behind robust
     chain-of-thought reasoning.`,
  ],

  /* ---- News (most recent first) ---- */
  news: [
    { date: "Jun 2026", html: `Invited speaker at the <strong>AiDDA Conference 2026</strong> (OpenEvolve Team Session), presenting <em>Evolution Fine-Tuning</em>.` },
    { date: "May 2026", html: `Invited speaker at the <strong>CAIS 2026 Workshop on AI Agents for Discovery in the Wild (AID-Wild)</strong>; <em>Evolution Fine-Tuning</em> accepted as an Oral.` },
    { date: "Jan 2026", html: `<strong>RefineBench</strong> accepted to <strong>ICLR 2026</strong> (also Top 1%, Oral, Best Paper Runner-up at the Multi-Turn Interactions in LLMs workshop @ NeurIPS 2025).` },
    { date: "Oct 2025", html: `Started as an <strong>Applied Scientist Intern</strong> at <strong>Amazon</strong>, working on partial chain-of-thought fine-tuning for robust reasoning LMs.` },
    { date: "Jul 2025", html: `<strong>MultiVerse</strong> accepted to <strong>ICCV 2025</strong>.` },
    { date: "Aug 2025", html: `Successfully defended my Ph.D. at <strong>KAIST</strong>. ` },
    { date: "Mar 2025", html: `Joined the <strong>University of Minnesota</strong> as a Visiting Scholar.` },
  ],

  /* ---- Education ---- */
  education: [
    {
      school: "Korea Advanced Institute of Science and Technology (KAIST)",
      location: "Daejeon, South Korea",
      lines: [
        { left: "Ph.D. in Computer Science, School of Computing &mdash; Advisor: Ho-Jin Choi", right: "Sep 2019 &ndash; Aug 2025" },
        { left: "M.S. in Computer Science, School of Computing &mdash; Advisor: Ho-Jin Choi", right: "Aug 2017 &ndash; Aug 2019" },
      ],
    },
    {
      school: "Sungkyunkwan University (SKKU)",
      location: "Suwon, South Korea",
      lines: [
        { left: "B.S. in Software", right: "Mar 2013 &ndash; Jun 2017" },
      ],
    },
  ],

  /* ---- Experience ---- */
  experience: [
    {
      org: "Amazon",
      location: "Bellevue, WA, USA",
      title: "Incoming Applied Scientist, Alexa AI",
      date: "Oct 2026 &ndash; Present",
      items: [],
    },
    {
      org: "University of Minnesota",
      location: "Minneapolis, MN, USA",
      title: "Visiting Scholar",
      date: "Mar 2025 &ndash; Sep 2026",
      items: [
        "Researching how to internalize scientific-discovery capability into large language models, and how to evaluate scientific-discovery capability in AI agents.",
      ],
    },
    {
      org: "Amazon",
      location: "Bellevue, WA, USA",
      title: "Applied Scientist Intern",
      date: "Jul 2025 &ndash; Oct 2025",
      items: [
        "Investigated the underlying mechanism of partial chain-of-thought fine-tuning for robust reasoning language models.",
      ],
    },
    {
      org: "Knowledge Engineering and Artificial Intelligence Lab, KAIST",
      location: "Daejeon, South Korea",
      title: "Graduate Research Assistant",
      date: "Aug 2017 &ndash; Aug 2025",
      items: [
        "Task-oriented persona-based dialogue generation combining multi-modal interaction and knowledge modeling: built LLM-based frameworks for empathetic communication, personalized dialogue, and multi-modal (image-sharing) dialogue, and constructed large-scale, high-quality datasets.",
        "Smart-home-based AI Learning Assistant (AILA) platform for non-contact English learning.",
        "Affective virtual TA service based on deep learning for foreign-language education.",
        "Intelligent chat services API for clinical-trial support based on biomedical NLP (Rasa framework).",
        "Conversational solution based on pragmatic and context analysis: a neural emotional response-generation model.",
      ],
    },
  ],

  /* ---- Publications ----
     authorsHtml: full author string; own name marked with <b>.
     Use <sup>*</sup> for equal contribution.
  */
  publications: {
    note: "Author shown in <strong>bold</strong>; <sup>*</sup> denotes equal contribution.",
    selected: ["evofinetune", "refinebench", "multiverse", "stark", "lmshareimages", "dialogcc"],
    conference: [
      { id: "evofinetune", title: "Evolution Fine-Tuning: Learning to Discover Across 371 Optimization Tasks",
        authors: `<b>Young-Jun Lee</b><sup>*</sup>, Seungone Kim<sup>*</sup>, Minki Kang, Alistair Cheong Liang Chuen, Zerui Chen, Seungho Han, Taehee Jung, Dongyeop Kang`,
        venue: "Under review", note: "Accepted to CAIS AID-Wild 2026, Oral." },
      { id: "structure", title: "Structure Liberates: How Constrained Sensemaking Produces More Novel Research Output",
        authors: `James Mooney, Zae Myung Kim, <b>Young-Jun Lee</b>, Dongyeop Kang`,
        venue: "arXiv preprint", note: "" },
      { id: "refinebench", title: "RefineBench: Evaluating Refinement Capability in Language Models",
        authors: `<b>Young-Jun Lee</b><sup>*</sup>, Seungone Kim<sup>*</sup>, Byung-Kwan Lee, Minkyeong Moon, Yechan Hwang, Jong Myoung Kim, Graham Neubig, Sean Welleck, Ho-Jin Choi`,
        venue: "ICLR 2026", note: "Also at Multi-Turn Interactions in LLMs @ NeurIPS 2025; Top 1%, Oral, Best Paper Runner-up." },
      { id: "assurai", title: "AssurAI: Experience with Constructing Korean Socio-cultural Datasets to Discover Potential Risks of Generative AI",
        authors: `Chae-Gyun Lim, Seung-Ho Han, EunYoung Byun, &hellip;, <b>Young-Jun Lee</b>, &hellip;, Ho-Jin Choi`,
        venue: "arXiv preprint", note: "" },
      { id: "vpp", title: "Visual Perception Probing for Vision-Language Models",
        authors: `<b>Young-Jun Lee</b>, Byung-Kwan Lee`,
        venue: "Under review", note: "" },
      { id: "multiverse", title: "MultiVerse: A Multi-Turn Conversation Benchmark for Evaluating Large Vision and Language Models",
        authors: `<b>Young-Jun Lee</b>, Byung-Kwan Lee, Jianshu Zhang, Yechan Hwang, Byungsoo Ko, Han-Gyu Kim, Dongyu Yao, Xuankun Rong, Eojin Joo, Seung-Ho Han, Bowon Ko, Ho-Jin Choi`,
        venue: "ICCV 2025", note: "Also at KnowledgeMR Workshop @ ICCV 2025." },
      { id: "skillofmind", title: "Enhancing Conversational Agents with Skill-of-Mind-Infused Large Language Model",
        authors: `<b>Young-Jun Lee</b>, Dokyong Lee, Junyoung Youn, Kyeongjin Oh, Ho-Jin Choi`,
        venue: "arXiv preprint, 2024", note: "" },
      { id: "intriguing", title: "Intriguing Properties of Large Language and Vision Models",
        authors: `<b>Young-Jun Lee</b>, Byungsoo Ko, Han-Gyu Kim, Yechan Hwang, Ho-Jin Choi`,
        venue: "arXiv preprint, 2024", note: "" },
      { id: "stark", title: "Stark: Social Long-Term Multi-Modal Conversation with Persona Commonsense Knowledge",
        authors: `<b>Young-Jun Lee</b>, Dokyong Lee, Junyoung Youn, Kyeongjin Oh, Byungsoo Ko, Jonghwan Hyeon, Ho-Jin Choi`,
        venue: "EMNLP 2024 (Findings)", note: "" },
      { id: "argfin", title: "Enhancing Arguments Recognition for Financial Mathematical Reasoning over Hybrid Data",
        authors: `Jinsu Lim, Yechan Hwang, <b>Young-Jun Lee</b>, Ho-Jin Choi`,
        venue: "EMNLP 2024 (Findings)", note: "" },
      { id: "incompletesyntax", title: "Does Incomplete Syntax Influence Korean Language Model? Focusing on Word Order and Case Markers",
        authors: `Jong Myoung Kim, <b>Young-Jun Lee</b>, Yong-jin Han, Sangkeun Jung, Ho-Jin Choi`,
        venue: "COLM 2024", note: "" },
      { id: "shareimages", title: "Large Language Models Can Share Images, Too!",
        authors: `<b>Young-Jun Lee</b>, Dokyong Lee, Joo Won Sung, Jonghwan Hyeon, Ho-Jin Choi`,
        venue: "ACL 2024 (Findings)", note: "", aliasId: "lmshareimages" },
      { id: "dialogcc", title: "DialogCC: An Automated Pipeline for Creating High-Quality Multi-Modal Dialogue Dataset",
        authors: `<b>Young-Jun Lee</b>, Byungsoo Ko, Han-Gyu Kim, Jonghwan Hyeon, Ho-Jin Choi`,
        venue: "NAACL 2024", note: "Also at Instruction Workshop @ NeurIPS 2023." },
      { id: "debias", title: "A Simple Debiasing Framework for Out-of-Distribution Detection in Human Action Recognition",
        authors: `Minho Sim, <b>Young-Jun Lee</b>, Dongkun Lee, Jongwhoa Lee, Ho-Jin Choi`,
        venue: "ECAI 2023", note: "" },
      { id: "ambiguity", title: "Semantic Ambiguity Detection in Sentence Classification Using Task-Specific Embeddings",
        authors: `Jong Myoung Kim, <b>Young-Jun Lee</b>, Sangkeun Jung, Ho-Jin Choi`,
        venue: "ACL 2023 (Industry)", note: "" },
      { id: "gpt3empathy", title: "Does GPT-3 Generate Empathetic Dialogues? A Novel In-Context Example Selection Method and Automatic Evaluation Metric for Empathetic Dialogue Generation",
        authors: `<b>Young-Jun Lee</b>, Chae-Gyun Lim, Ho-Jin Choi`,
        venue: "COLING 2022", note: "" },
      { id: "koreanemotion", title: "Korean-Specific Emotion Annotation Procedure Using N-Gram-Based Distant Supervision and Korean-Specific-Feature-Based Distant Supervision",
        authors: `<b>Young-Jun Lee</b>, Chae-Gyun Lim, Ho-Jin Choi`,
        venue: "LREC 2020", note: "" },
      { id: "responsegen", title: "Deep Learning Based Response Generation Using Emotion Feature Extraction",
        authors: `<b>Young-Jun Lee</b>, Chae-Gyun Lim, Ho-Jin Choi`,
        venue: "IEEE BigComp 2020", note: "Best Paper Award (1st)." },
    ],
    journal: [
      { id: "ser", title: "Improving Speech Emotion Recognition by Fusing Self-Supervised Learning and Spectral Features via Mixture of Experts",
        authors: `Jonghwan Hyeon, Yung-Hwan Oh, <b>Young-Jun Lee</b>, Ho-Jin Choi`,
        venue: "Data & Knowledge Engineering (DKE), 2024", note: "" },
    ],
    workshop: [
      { id: "chartjudge", title: "Can MLLMs Judge Charts? Evaluating the Reliability of MLLM-as-a-Judge in Chart Understanding",
        authors: `Yujin Min, <b>Young-Jun Lee</b>, YunSeok Choi`,
        venue: "RespMultimodal Workshop @ KDD 2026", note: "" },
      { id: "zscotempathy", title: "Investigating the Effects of Zero-Shot Chain-of-Thought on Empathetic Dialogue Generation",
        authors: `<b>Young-Jun Lee</b>, Dokyong Lee, Jihui Im, Joo Won Sung, Ho-Jin Choi`,
        venue: "Instruction Workshop @ NeurIPS 2023", note: "" },
      { id: "augfin", title: "Augmentation for Context in Financial Numerical Reasoning over Textual and Tabular Data with Large-Scale Language Model",
        authors: `Yechan Hwang<sup>*</sup>, Jinsu Lim<sup>*</sup>, <b>Young-Jun Lee</b>, Ho-Jin Choi`,
        venue: "Instruction Workshop @ NeurIPS 2023", note: "" },
      { id: "personachatgen", title: "PersonaChatGen: Generating Personalized Dialogues Using GPT-3",
        authors: `<b>Young-Jun Lee</b>, Chae-Gyun Lim, Yunsu Choi, Ji-Hui Im, Ho-Jin Choi`,
        venue: "CCGPK Workshop @ COLING 2022", note: "Best Paper Award." },
    ],
  },

  /* ---- Honors & Awards ---- */
  awards: [
    { date: "2025", html: `<strong>Top 1%, Oral, Best Paper Runner-up Award</strong> &mdash; Multi-Turn Interactions in LLMs @ NeurIPS 2025.` },
    { date: "2023", html: `<strong>Outstanding Paper Award</strong> &mdash; HCLT 2023.` },
    { date: "2022", html: `<strong>Best Paper Award</strong> &mdash; CCGPK Workshop @ COLING 2022.` },
    { date: "2020", html: `<strong>Best Paper Award (1st)</strong> &mdash; IEEE BigComp 2020.` },
    { date: "2014", html: `<strong>Dean's List Scholarship for Academic Excellence</strong> &mdash; Sungkyunkwan University.` },
  ],

  /* ---- Patents ---- */
  patents: [
    { title: "Device and Method for Generating Personalized and Empathy-Based Conversations Using Memory in Counseling Domain",
      inventors: `Ho-Jin Choi, <b>Young-Jun Lee</b>, Chae-Gyun Lim, Do Kyong Lee, Joo-Won Sung, Kyeong-Jin Oh`, status: "Pending (KR)", year: "2024" },
    { title: "An Apparatus and Method for Persona-Based and Knowledge-Grounded Dialog Generation in Consultation Domain",
      inventors: `Ho-Jin Choi, Chae-Gyun Lim, <b>Young-Jun Lee</b>, Do Kyong Lee, Chang-Won Ok, Jun-Young Yoon`, status: "Pending (KR)", year: "2022" },
    { title: "Emotional Classification in Dialogue Using Word-Level Emotion Embedding Based on Semi-Supervised Learning and LSTM Model",
      inventors: `Ho-Jin Choi, <b>Young-Jun Lee</b>`, status: "Pending (US) / KR 10-2315830-0000", year: "2022" },
    { title: "Evaluation of Empathetic Dialogue Generation Methods and Capabilities Using GPT-3",
      inventors: `Ho-Jin Choi, <b>Young-Jun Lee</b>`, status: "Pending (KR)", year: "2022" },
    { title: "A Method to Respond Based on Sentence Paraphrase Recognition for a Dialog System",
      inventors: `Ho-Jin Choi, Kyo-Joong Oh, <b>Young-Jun Lee</b>, Soo-Hwan Park`, status: "Pending (US)", year: "2022" },
    { title: "Method and System for Authenticating Stroke-Based Handwritten Signature Using Machine Learning",
      inventors: `Chan-Yong Park, Ho-Jin Choi, <b>Young-Jun Lee</b>`, status: "KR 10-2111858-0000", year: "2020" },
    { title: "Deep Learning Based Emotional Response Generation Using the Emotion Feature Extractor",
      inventors: `Ho-Jin Choi, <b>Young-Jun Lee</b>`, status: "Pending (KR)", year: "2019" },
  ],

  /* ---- Invited Talks ---- */
  talks: [
    { venue: "AiDDA Conference 2026", location: "Virtual", role: "Invited Speaker &mdash; OpenEvolve Team Session",
      date: "Jun 2026", title: "Evolution Fine-Tuning: Learning to Discover Across 371 Optimization Tasks" },
    { venue: "CAIS 2026 Workshop on AI Agents for Discovery in the Wild (AID-Wild)", location: "San Jose, CA, USA",
      role: "Invited Speaker &mdash; OpenEvolve Team Demo Session", date: "May 2026",
      title: "Evolution Fine-Tuning: Learning to Discover Across 371 Optimization Tasks" },
  ],

  /* ---- Teaching ---- */
  teaching: [
    { title: "Introduction to Artificial Intelligence (CS470)", org: "School of Computing, KAIST", date: "2020 &ndash; 2025" },
    { title: "Trends of NLP", org: "Telecommunications Technology Association (TTA)", date: "2020" },
    { title: "Information Retrieval", org: "School of Computing, KAIST", date: "2020" },
    { title: "Special Topics in Software", org: "School of Computing, KAIST", date: "2020" },
    { title: "Deep Learning and NLP, Smart Energy Platform Technology", org: "School of Computing, KAIST", date: "2020" },
    { title: "Computer Science Project", org: "School of Computing, KAIST", date: "2019" },
  ],

  /* ---- Academic Service ---- */
  service: [
    { year: "2026", html: `<strong>Conference Reviewer:</strong> ICML, ICLR, NeurIPS (ED), COLM, EACL SRW, ARR` },
    { year: "2025", html: `<strong>Conference Reviewer:</strong> COLM, ICLR, ARR` },
    { year: "2024", html: `<strong>Conference Reviewer:</strong> EMNLP, COLING, NAACL, WiNLP @ EMNLP, ARR` },
  ],

  /* ---- Skills ---- */
  skills: [
    { label: "Programming", value: "Python, C, Java, Android" },
    { label: "ML Frameworks", value: "PyTorch, PyTorch Lightning, TensorFlow, Keras, Hugging Face" },
    { label: "Web & Tools", value: "Flask, REST API, Gradio, Streamlit" },
    { label: "Languages", value: "Korean (Native), English (Working Proficiency)" },
  ],

  /* ---- CV PDF (drop your compiled PDF here) ---- */
  cvPdf: "assets/cv/Young-Jun-Lee-CV.pdf",
};
