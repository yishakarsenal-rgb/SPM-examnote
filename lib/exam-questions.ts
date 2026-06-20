export interface ExamQuestion {
  id: number
  chapter: number
  topic: string
  question: string
  options: string[]
  answer: number // 0-indexed
  explanation: string
}

export const examQuestions: ExamQuestion[] = [
  // ===== CHAPTER 1: INTRODUCTION TO SPM =====
  {
    id: 1, chapter: 1, topic: "Project Definition",
    question: "Which of the following BEST describes a project?",
    options: [
      "A repetitive process producing standardized outputs.",
      "A temporary and unique endeavor with a defined beginning and end.",
      "An ongoing operational activity within an organization.",
      "A functional department responsible for producing goods."
    ],
    answer: 1,
    explanation: "A project is defined as a temporary and unique endeavor undertaken to create a specific product, service, or result with a defined beginning and end (PMI definition)."
  },
  {
    id: 2, chapter: 1, topic: "Project Characteristics",
    question: "Which of the following is NOT a characteristic of a project?",
    options: [
      "It has a single definable purpose.",
      "It involves unfamiliarity and risk.",
      "It produces standardized, repetitive outputs.",
      "It is a phased process."
    ],
    answer: 2,
    explanation: "Projects produce unique deliverables, not standardized, repetitive outputs. Repetitive standardized output is a characteristic of mass production processes, not projects."
  },
  {
    id: 3, chapter: 1, topic: "Production Types",
    question: "Which production type requires the HIGHEST level of complex management planning?",
    options: [
      "Mass production",
      "Batch production",
      "Project (non-repetitive) production",
      "Continuous production"
    ],
    answer: 2,
    explanation: "Project (non-repetitive) production involves one-off, unique items. Since there is no prior learning curve, it requires the highest level of complex management planning compared to mass or batch production."
  },
  {
    id: 4, chapter: 1, topic: "Organizational Structures",
    question: "In which organizational structure do project team members have dual reporting relationships?",
    options: [
      "Functional structure",
      "Projectized structure",
      "Matrix organization",
      "Internal project management"
    ],
    answer: 2,
    explanation: "In a matrix organization, staff have both functional and project responsibilities, creating dual reporting relationships. This creates complexity but leverages both functional expertise and project focus."
  },
  {
    id: 5, chapter: 1, topic: "Triple Constraint",
    question: "The 'Triple Constraint' in project management refers to which three factors?",
    options: [
      "Planning, Execution, Monitoring",
      "Time, Cost, and Quality",
      "Scope, Risk, and Stakeholders",
      "Resources, Communication, and Integration"
    ],
    answer: 1,
    explanation: "The Triple Constraint consists of Time (schedule), Cost (budget), and Quality (scope/performance). Changes to one constraint typically affect the others."
  },
  {
    id: 6, chapter: 1, topic: "Project vs. Program",
    question: "What is the PRIMARY distinction between a project and a program?",
    options: [
      "Programs are always more expensive than projects.",
      "Projects are managed by senior managers; programs by junior ones.",
      "A program is a set of related projects aimed at a broader strategic goal; a project is a single temporary endeavor.",
      "Projects have longer durations than programs."
    ],
    answer: 2,
    explanation: "A program is a set of related projects aimed at a broader strategic goal, typically longer-lasting and may not have a fixed end date. A project is a single, temporary, unique endeavor."
  },
  {
    id: 7, chapter: 1, topic: "Project Management Skills",
    question: "Which of the following is listed as a required skill for a Project Manager in the course material?",
    options: [
      "Software programming expertise",
      "Legal certification",
      "Financial awareness",
      "Physical engineering competency"
    ],
    answer: 2,
    explanation: "The course identifies financial awareness as a key required skill for project managers, along with marketing appreciation, technical knowledge, planning skills, strategic awareness, and quality management."
  },
  {
    id: 8, chapter: 1, topic: "Internal vs External Projects",
    question: "An external project differs from an internal project in that:",
    options: [
      "External projects always have lower budgets.",
      "External projects are done for an outside client, usually under contract, and generate revenue.",
      "Internal projects involve more team members.",
      "External projects are managed by the organization's own staff only."
    ],
    answer: 1,
    explanation: "External projects are conducted for outside clients, usually under contract, and generate revenue. Internal projects are done to improve organizational operations with an internal sponsor."
  },
  {
    id: 9, chapter: 1, topic: "Project Lifecycle",
    question: "Which description BEST characterizes the project lifecycle?",
    options: [
      "A circular process that never ends.",
      "A series of phases through which a project passes from initiation to closure.",
      "A single phase of execution.",
      "Only applicable to construction projects."
    ],
    answer: 1,
    explanation: "The project lifecycle is a series of phases (e.g., Initiation, Planning, Execution, Closure) through which a project passes. Each phase produces deliverables that move the project forward."
  },
  {
    id: 10, chapter: 1, topic: "SPM Need",
    question: "Why is project management considered necessary in modern organizations?",
    options: [
      "It guarantees zero project failures.",
      "It eliminates the need for budgeting.",
      "It plans, coordinates, and controls the complex, diverse activities involved in modern projects.",
      "It replaces the need for skilled team members."
    ],
    answer: 2,
    explanation: "Project management is required to plan, coordinate, and control the complex, diverse activities involved in modern projects. It provides systematic approaches to achieve project goals within constraints."
  },

  // ===== CHAPTER 2: PROJECT INTEGRATION MANAGEMENT =====
  {
    id: 11, chapter: 2, topic: "Project Charter",
    question: "What is the PRIMARY purpose of a Project Charter?",
    options: [
      "To list all project risks.",
      "To formally authorize the project and give the PM authority to apply organizational resources.",
      "To document project costs.",
      "To assign work packages to team members."
    ],
    answer: 1,
    explanation: "The Project Charter formally authorizes the existence of a project and provides the Project Manager with authority to apply organizational resources to project activities."
  },
  {
    id: 12, chapter: 2, topic: "NPV Decision",
    question: "A project has an NPV of -$50,000. What should the organization do?",
    options: [
      "Accept the project as it has potential.",
      "Accept the project if the team is experienced.",
      "Reject the project.",
      "Delay the decision pending further analysis."
    ],
    answer: 2,
    explanation: "The NPV decision rule states: If NPV < 0, REJECT the project. A negative NPV means the project will destroy value for the organization."
  },
  {
    id: 13, chapter: 2, topic: "NPV Calculation",
    question: "If a project yields $10,000 in Year 1 and the discount rate is 10%, what is the present value of Year 1 cash flow?",
    options: [
      "$11,000",
      "$10,000",
      "$9,090.91",
      "$9,000"
    ],
    answer: 2,
    explanation: "PV = Cash Flow / (1+r)^t = $10,000 / (1.10)^1 = $10,000 / 1.10 = $9,090.91. The discount factor for Year 1 at 10% is 0.9091."
  },
  {
    id: 14, chapter: 2, topic: "ROI",
    question: "The ROI formula is:",
    options: [
      "(Total Costs - Total Benefits) / Total Benefits",
      "(Total Discounted Benefits - Total Discounted Costs) / Discounted Costs",
      "NPV / Initial Investment",
      "Total Revenue / Total Expenses"
    ],
    answer: 1,
    explanation: "ROI = (Total Discounted Benefits - Total Discounted Costs) / Discounted Costs. This measures the return per dollar invested after discounting cash flows. Higher ROI is better."
  },
  {
    id: 15, chapter: 2, topic: "Sunk Cost",
    question: "A project has already spent $200,000 on development that yielded no useful results. Should this amount be included in future project budgets?",
    options: [
      "Yes, it must be recovered through future revenue.",
      "Yes, it represents the project's historical cost.",
      "No, it is a sunk cost and should not be included in future budget decisions.",
      "Only if approved by senior management."
    ],
    answer: 2,
    explanation: "Sunk costs — money already spent — should NOT be included in revised project budgets or investment decisions. Past expenditures are irrelevant to future decision-making."
  },
  {
    id: 16, chapter: 2, topic: "Integration Processes",
    question: "Which Integration Management process involves identifying, evaluating, and managing changes throughout the project lifecycle?",
    options: [
      "Directing and Managing Project Work",
      "Developing the Project Management Plan",
      "Performing Integrated Change Control",
      "Closing the Project"
    ],
    answer: 2,
    explanation: "Performing Integrated Change Control involves identifying, evaluating, and managing changes throughout the project lifecycle to ensure only approved changes are implemented."
  },
  {
    id: 17, chapter: 2, topic: "SWOT",
    question: "In project selection, SWOT analysis stands for:",
    options: [
      "Schedule, Work, Operations, Time",
      "Strengths, Weaknesses, Opportunities, Threats",
      "System, Workflow, Output, Testing",
      "Scope, WBS, Operations, Timeline"
    ],
    answer: 1,
    explanation: "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats. It is a strategic planning tool used to identify and evaluate potential projects against organizational capabilities and environmental factors."
  },
  {
    id: 18, chapter: 2, topic: "IRR",
    question: "The Internal Rate of Return (IRR) is best defined as:",
    options: [
      "The total profit of a project.",
      "The discount rate at which the NPV of the project equals zero.",
      "The percentage of budget consumed.",
      "The rate of return on investment in the first year."
    ],
    answer: 1,
    explanation: "IRR is the discount rate at which the NPV equals zero. It measures how fast money returns after investment. A higher IRR is generally better."
  },
  {
    id: 19, chapter: 2, topic: "Project Selection",
    question: "When using capital rationing to select projects, the correct approach is to:",
    options: [
      "Select the project with the highest total NPV.",
      "Select projects based on Profitability Index (PI) = NPV / Initial Investment.",
      "Select the project with the longest payback period.",
      "Select the project with the lowest IRR."
    ],
    answer: 1,
    explanation: "Under capital rationing (limited budget), calculate the Profitability Index (PI) = NPV / Initial Investment for each project and rank them by PI to maximize value with limited resources."
  },
  {
    id: 20, chapter: 2, topic: "Project Management Plan",
    question: "The Project Management Plan is an output of which Integration Management process?",
    options: [
      "Developing the Project Charter",
      "Monitoring and Controlling Project Work",
      "Developing the Project Management Plan",
      "Closing the Project"
    ],
    answer: 2,
    explanation: "Developing the Project Management Plan is the process that coordinates all planning efforts into a coherent document. The output is the Project Management Plan."
  },

  // ===== CHAPTER 3: PROJECT SCOPE MANAGEMENT =====
  {
    id: 21, chapter: 3, topic: "Scope Creep",
    question: "Scope creep refers to:",
    options: [
      "The slow reduction of project scope due to budget cuts.",
      "Uncontrolled additions to project scope, leading to higher costs and extended timelines.",
      "The formal process of scope verification.",
      "Adding features requested by the sponsor."
    ],
    answer: 1,
    explanation: "Scope creep is the uncontrolled change in a project's scope — the tendency to include more tasks than originally specified without proper change control, leading to higher costs and extended timelines."
  },
  {
    id: 22, chapter: 3, topic: "WBS",
    question: "According to the 80/8 Rule for Work Breakdown Structures, work packages should:",
    options: [
      "Represent 80% of the total project cost and be 8 months long.",
      "Not be longer than 80 hours or smaller than 8 hours.",
      "Have 80 tasks and 8 sub-tasks.",
      "Be reviewed every 80 days with 8 team members."
    ],
    answer: 1,
    explanation: "The 80/8 Rule states that work packages (the lowest level of the WBS) should not be longer than 80 hours or smaller than 8 hours to maintain manageable and trackable deliverables."
  },
  {
    id: 23, chapter: 3, topic: "100% Rule",
    question: "The 100% Rule for a WBS means that:",
    options: [
      "All team members must work 100% of their time on the project.",
      "The WBS must include 100% of the work defined by the project scope.",
      "Project quality must be 100%.",
      "The project budget must be 100% accurate."
    ],
    answer: 1,
    explanation: "The 100% Rule states the WBS must include 100% of all project work and capture all deliverables — internal, external, and interim. Each level represents 100% of the parent node's scope."
  },
  {
    id: 24, chapter: 3, topic: "Scope Statement",
    question: "Why is the Project Scope Statement described as 'the most important tool the project has'?",
    options: [
      "Because it contains the project budget.",
      "Because it lists all team member roles.",
      "Because it evaluates every change request and communicates project limits to stakeholders.",
      "Because it contains the project schedule."
    ],
    answer: 2,
    explanation: "The Project Scope Statement is the most important tool because it is used to evaluate every change request, communicates project limits, and frames the project for all stakeholders."
  },
  {
    id: 25, chapter: 3, topic: "Scope Verification",
    question: "Scope verification involves:",
    options: [
      "Developing the initial project scope.",
      "Breaking the scope into work packages.",
      "Confirming completed deliverables against the scope statement.",
      "Assigning responsibilities to team members."
    ],
    answer: 2,
    explanation: "Scope Verification involves confirming completed deliverables against the scope statement to ensure what was delivered matches what was planned. It is a formal acceptance process."
  },
  {
    id: 26, chapter: 3, topic: "WBS Structure",
    question: "In a standard WBS hierarchy, which level directly contains work packages?",
    options: [
      "Level 1 (Project Goal)",
      "Level 2 (Objectives)",
      "Level 3 (Activities)",
      "Level 4 (Tasks)"
    ],
    answer: 3,
    explanation: "Work packages are at the lowest level of the WBS — Level 4 (Tasks) in the standard structure. The hierarchy is: Level 1=Goal → Level 2=Objectives → Level 3=Activities → Level 4=Tasks/Work Packages."
  },
  {
    id: 27, chapter: 3, topic: "Change Control",
    question: "In scope change control, when must approved changes be communicated?",
    options: [
      "After the work has started.",
      "Only to the project manager.",
      "Before work starts, to all affected stakeholders.",
      "Only at the end of the project phase."
    ],
    answer: 2,
    explanation: "All approved scope changes must be communicated BEFORE work starts to ensure all affected stakeholders are informed. This prevents unauthorized work and maintains proper change control."
  },
  {
    id: 28, chapter: 3, topic: "Scope Components",
    question: "Which of the following is NOT a component of a Project Scope Statement?",
    options: [
      "Project Justification",
      "Constraints",
      "Network Diagram",
      "Assumptions"
    ],
    answer: 2,
    explanation: "A Network Diagram is a schedule management tool, not a component of the Scope Statement. The Scope Statement includes: Project Justification, Brief Description, Constraints, Assumptions, Dependencies, and Definition of Success."
  },
  {
    id: 29, chapter: 3, topic: "Assumptions",
    question: "In a project scope statement, 'assumptions' are defined as:",
    options: [
      "Known facts that are confirmed.",
      "Conditions accepted as true without proof for planning purposes.",
      "Identified project risks.",
      "Required deliverables from the client."
    ],
    answer: 1,
    explanation: "Assumptions are conditions accepted as true without proof for planning purposes (e.g., labor contributions from beneficiaries, good weather conditions). If an assumption proves false, it becomes a risk."
  },
  {
    id: 30, chapter: 3, topic: "WBS Numbering",
    question: "What is the purpose of using a unique numbering system (e.g., 1.1.1) in a WBS?",
    options: [
      "To indicate the cost of each work package.",
      "To track each element for schedule development and assignment.",
      "To prioritize tasks.",
      "To indicate the duration of each activity."
    ],
    answer: 1,
    explanation: "A unique numbering system in a WBS allows tracking of each element for schedule development, cost tracking, and responsibility assignment throughout the project lifecycle."
  },

  // ===== CHAPTER 4: PROJECT SCHEDULE MANAGEMENT =====
  {
    id: 31, chapter: 4, topic: "Critical Path",
    question: "The critical path is BEST defined as:",
    options: [
      "The shortest path through the network diagram.",
      "The path with the most activities.",
      "The longest total duration path through the network, determining minimum project completion time.",
      "The path with the highest cost activities."
    ],
    answer: 2,
    explanation: "The critical path is the longest total duration path through the network. It determines the minimum project completion time. Activities on the critical path have zero total float."
  },
  {
    id: 32, chapter: 4, topic: "Total Float",
    question: "An activity has ES=5, EF=8, LS=9, LF=12. What is the Total Float?",
    options: [
      "0 days",
      "3 days",
      "4 days",
      "1 day"
    ],
    answer: 2,
    explanation: "Total Float = LS - ES = 9 - 5 = 4 days. Alternatively, Total Float = LF - EF = 12 - 8 = 4 days. Since Float ≠ 0, this activity is NOT on the critical path."
  },
  {
    id: 33, chapter: 4, topic: "PERT",
    question: "Using PERT, if Optimistic=4 days, Most Likely=7 days, and Pessimistic=16 days, what is the expected duration?",
    options: [
      "7 days",
      "9 days",
      "8 days",
      "10 days"
    ],
    answer: 2,
    explanation: "PERT Formula: TE = (O + 4ML + P) / 6 = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 days."
  },
  {
    id: 34, chapter: 4, topic: "Dependency Types",
    question: "Which dependency type is the MOST COMMON in project scheduling?",
    options: [
      "Start to Finish (SF)",
      "Start to Start (SS)",
      "Finish to Finish (FF)",
      "Finish to Start (FS)"
    ],
    answer: 3,
    explanation: "Finish to Start (FS) is the most common dependency type, where the successor activity cannot begin until the predecessor activity is complete."
  },
  {
    id: 35, chapter: 4, topic: "Forward Pass",
    question: "When multiple predecessors feed into a single activity, the Early Start (ES) of that activity is:",
    options: [
      "The minimum of all predecessors' Early Finish values + 1.",
      "The maximum of all predecessors' Early Finish values + 1.",
      "The average of all predecessors' Early Finish values.",
      "Equal to the first predecessor's Early Finish."
    ],
    answer: 1,
    explanation: "When multiple predecessors feed into an activity, ES = MAX(all predecessors' EF) + 1. The activity cannot start until ALL predecessors are complete."
  },
  {
    id: 36, chapter: 4, topic: "Backward Pass",
    question: "When an activity has multiple successors, its Late Finish (LF) is:",
    options: [
      "The maximum of all successors' Late Start values - 1.",
      "The minimum of all successors' Late Start values - 1.",
      "The average of all successors' Late Start values.",
      "Equal to the last successor's Late Start."
    ],
    answer: 1,
    explanation: "When an activity has multiple successors, LF = MIN(all successors' LS) - 1. The activity must finish in time for the EARLIEST-starting successor."
  },
  {
    id: 37, chapter: 4, topic: "Mandatory Dependency",
    question: "A mandatory (hard logic) dependency differs from a discretionary dependency in that:",
    options: [
      "Mandatory dependencies can be changed by the project team.",
      "Mandatory dependencies are inherent in the nature of the work and cannot be changed.",
      "Discretionary dependencies arise from physical constraints.",
      "Mandatory dependencies are preferred by the sponsor."
    ],
    answer: 1,
    explanation: "Mandatory (hard logic) dependencies are inherent in the nature of the work and cannot be changed (e.g., code must be written before testing). Discretionary (soft logic) dependencies are defined by the team and may be changed."
  },
  {
    id: 38, chapter: 4, topic: "Schedule Monitoring",
    question: "If the SPI for a project is 0.85, what does this indicate?",
    options: [
      "The project is 15% ahead of schedule.",
      "The project is 15% under budget.",
      "The project is behind schedule.",
      "The project is ahead of schedule."
    ],
    answer: 2,
    explanation: "SPI = EV / PV. SPI = 0.85 < 1.0 means the project is behind schedule (earning less value than planned). An SPI > 1 indicates ahead of schedule."
  },
  {
    id: 39, chapter: 4, topic: "CPM",
    question: "If a project has TWO paths and Path A=18 days, Path B=22 days, what is the critical path duration?",
    options: [
      "18 days",
      "20 days",
      "22 days",
      "40 days"
    ],
    answer: 2,
    explanation: "The critical path is the LONGEST path — 22 days (Path B). This is the minimum project duration. Path A has 4 days of float (22-18=4)."
  },
  {
    id: 40, chapter: 4, topic: "Parametric Estimating",
    question: "Which estimating technique uses industry standards or productivity rates (e.g., $50 per line of code) to estimate activity durations?",
    options: [
      "Analogous estimating",
      "PERT estimating",
      "Parametric estimating",
      "Expert judgment"
    ],
    answer: 2,
    explanation: "Parametric estimating uses project characteristics (parameters) in a mathematical model, such as productivity rates or industry standards, to estimate costs or durations."
  },

  // ===== CHAPTER 5: PROJECT COST MANAGEMENT =====
  {
    id: 41, chapter: 5, topic: "EVM - CPI",
    question: "A project has EV=$120,000 and AC=$150,000. What is the CPI and what does it indicate?",
    options: [
      "CPI=1.25 — under budget",
      "CPI=0.80 — over budget",
      "CPI=0.80 — ahead of schedule",
      "CPI=1.25 — behind schedule"
    ],
    answer: 1,
    explanation: "CPI = EV / AC = $120,000 / $150,000 = 0.80. CPI < 1.0 means over budget (spending more than the value earned). For every $1 spent, only $0.80 of value is earned."
  },
  {
    id: 42, chapter: 5, topic: "EVM - SV",
    question: "A project has EV=$80,000 and PV=$100,000. What is the Schedule Variance (SV)?",
    options: [
      "+$20,000 — ahead of schedule",
      "-$20,000 — behind schedule",
      "$80,000 — on schedule",
      "+$20,000 — under budget"
    ],
    answer: 1,
    explanation: "SV = EV - PV = $80,000 - $100,000 = -$20,000. Negative SV means behind schedule (less work was accomplished than planned)."
  },
  {
    id: 43, chapter: 5, topic: "EVM - EAC",
    question: "A project has BAC=$500,000 and CPI=0.8. What is the Estimate at Completion (EAC)?",
    options: [
      "$400,000",
      "$500,000",
      "$625,000",
      "$600,000"
    ],
    answer: 2,
    explanation: "EAC = BAC / CPI = $500,000 / 0.8 = $625,000. Since the project is over budget (CPI<1), the forecasted total cost ($625,000) exceeds the original budget ($500,000)."
  },
  {
    id: 44, chapter: 5, topic: "EVM - TCPI",
    question: "TCPI (To-Complete Performance Index) is calculated as:",
    options: [
      "(BAC - AC) / (BAC - EV)",
      "(BAC - EV) / (BAC - AC)",
      "(EV - AC) / BAC",
      "BAC / CPI"
    ],
    answer: 1,
    explanation: "TCPI = (BAC - EV) / (BAC - AC). It represents the required cost efficiency needed to complete the remaining work within the original budget. TCPI > 1 means higher efficiency is required."
  },
  {
    id: 45, chapter: 5, topic: "EVM - ETC",
    question: "If EAC=$300,000 and AC=$120,000, what is the Estimate to Complete (ETC)?",
    options: [
      "$420,000",
      "$180,000",
      "$300,000",
      "$120,000"
    ],
    answer: 1,
    explanation: "ETC = EAC - AC = $300,000 - $120,000 = $180,000. This is how much MORE money is needed to complete the project from the current point."
  },
  {
    id: 46, chapter: 5, topic: "Estimate Types",
    question: "Which cost estimate type has an accuracy range of -5% to +10% and is done within 1 year of completion?",
    options: [
      "ROM Estimate",
      "Budgetary Estimate",
      "Definitive Estimate",
      "Parametric Estimate"
    ],
    answer: 2,
    explanation: "Definitive Estimates have the highest accuracy of -5% to +10% and are made within 1 year of project completion. ROM is -50% to +100% (done 3+ years out); Budgetary is -10% to +25% (1-2 years out)."
  },
  {
    id: 47, chapter: 5, topic: "Cost Types",
    question: "Which of the following is an example of an INDIRECT cost?",
    options: [
      "Software licenses for the project",
      "Salaries of project team members",
      "Office electricity and internet charges",
      "Hardware purchased for the project"
    ],
    answer: 2,
    explanation: "Indirect costs are not directly related to producing project deliverables, such as electricity, internet, rent, and office supplies. Direct costs are directly tied to deliverables (hardware, software, team salaries)."
  },
  {
    id: 48, chapter: 5, topic: "EVM - CV",
    question: "Cost Variance (CV) is BEST interpreted as:",
    options: [
      "EV - PV, indicating schedule status",
      "EV - AC, indicating budget status; positive means under budget",
      "AC - EV, indicating spending rate",
      "PV - AC, indicating budget consumed"
    ],
    answer: 1,
    explanation: "CV = EV - AC. A positive CV means under budget (spending less than earned). A negative CV means over budget. CV measures cost performance."
  },
  {
    id: 49, chapter: 5, topic: "Opportunity Cost",
    question: "A company can invest in either Project A ($200,000 NPV) or Project B ($350,000 NPV). If it chooses Project A, the opportunity cost is:",
    options: [
      "$200,000",
      "$350,000",
      "$150,000",
      "$550,000"
    ],
    answer: 1,
    explanation: "The opportunity cost of choosing Project A over Project B is the NPV of the forgone project — $350,000 (Project B). Opportunity cost represents the value given up by not selecting the alternative."
  },
  {
    id: 50, chapter: 5, topic: "Bottom-Up Estimating",
    question: "What is the MAIN advantage of bottom-up cost estimating?",
    options: [
      "It is the quickest method.",
      "It requires no historical data.",
      "It provides the most accurate estimates by summing individual activity costs.",
      "It is the least expensive method."
    ],
    answer: 2,
    explanation: "Bottom-up estimating provides the MOST ACCURATE estimates by estimating individual work items/activities and summing them up. The main disadvantage is that it is time-consuming and costly."
  },

  // ===== CHAPTER 6: HR MANAGEMENT =====
  {
    id: 51, chapter: 6, topic: "Maslow",
    question: "According to Maslow's Hierarchy of Needs, which need must be satisfied FIRST before higher-level needs can motivate behavior?",
    options: [
      "Esteem needs",
      "Safety needs",
      "Social/Belonging needs",
      "Physiological needs"
    ],
    answer: 3,
    explanation: "In Maslow's Hierarchy, physiological needs (food, water, shelter) are at the base and must be satisfied first. The hierarchy proceeds: Physiological → Safety → Social → Esteem → Self-Actualization."
  },
  {
    id: 52, chapter: 6, topic: "McGregor",
    question: "McGregor's Theory Y assumes that workers:",
    options: [
      "Hate work and need constant supervision.",
      "Are motivated only by financial rewards.",
      "Can work without supervision, want to achieve, and seek esteem and self-actualization.",
      "Need coercion and threats to perform."
    ],
    answer: 2,
    explanation: "Theory Y (McGregor) holds that workers can be self-directed, want to achieve, and seek intrinsic rewards like esteem and self-actualization. Theory X holds the opposite — workers hate work and need coercion."
  },
  {
    id: 53, chapter: 6, topic: "Herzberg",
    question: "According to Herzberg's Two-Factor Theory, salary is classified as:",
    options: [
      "A motivator that creates job satisfaction.",
      "A hygiene factor that prevents dissatisfaction but does not create satisfaction.",
      "A self-actualization need.",
      "A performance incentive."
    ],
    answer: 1,
    explanation: "Herzberg classified salary as a HYGIENE FACTOR — it prevents dissatisfaction when present but does NOT create satisfaction. Motivators (achievement, recognition, responsibility) actually create job satisfaction."
  },
  {
    id: 54, chapter: 6, topic: "Tuckman",
    question: "At which stage of Tuckman's Team Development Model do team members show hostility and believe they can do better individually?",
    options: [
      "Forming",
      "Storming",
      "Norming",
      "Performing"
    ],
    answer: 1,
    explanation: "During the Storming stage, team members resist control, show hostility, and believe they can do better individually. This is a natural but challenging phase of team development."
  },
  {
    id: 55, chapter: 6, topic: "Vroom",
    question: "Vroom's Expectancy Theory states that motivation equals:",
    options: [
      "Need + Drive + Incentive",
      "Expectancy × Instrumentality × Valence",
      "Achievement + Power + Affiliation",
      "Salary + Recognition + Responsibility"
    ],
    answer: 1,
    explanation: "Vroom's Expectancy Theory: Motivation = Expectancy × Instrumentality × Valence. People are motivated when they expect that their effort will lead to performance (Expectancy), performance to reward (Instrumentality), and value the reward (Valence)."
  },
  {
    id: 56, chapter: 6, topic: "McClelland",
    question: "McClelland's Achievement Motivation Theory identifies three learned needs. Which is NOT one of them?",
    options: [
      "Need for Achievement (nAch)",
      "Need for Power (nPow)",
      "Need for Affiliation (nAff)",
      "Need for Security (nSec)"
    ],
    answer: 3,
    explanation: "McClelland identified three needs: Achievement (nAch), Power (nPow), and Affiliation (nAff). Need for Security is from Maslow's hierarchy, not McClelland's theory."
  },
  {
    id: 57, chapter: 6, topic: "Conflict Resolution",
    question: "Which conflict resolution strategy is considered the BEST approach as it results in a mutually beneficial solution?",
    options: [
      "Forcing/Directing",
      "Withdrawal/Avoiding",
      "Collaborating/Problem-Solving",
      "Smoothing/Accommodating"
    ],
    answer: 2,
    explanation: "Collaborating/Problem-Solving is the best resolution strategy — parties work together to find a solution that satisfies everyone. Forcing creates resentment; Avoidance delays the problem; Smoothing provides only temporary relief."
  },
  {
    id: 58, chapter: 6, topic: "Halo Effect",
    question: "The 'Halo Effect' in HR management refers to:",
    options: [
      "A team building technique.",
      "Assuming excellence in one area implies excellence in all areas.",
      "A performance appraisal method.",
      "Recognizing outstanding team performance."
    ],
    answer: 1,
    explanation: "The Halo Effect is the tendency to assume that because someone excels in one area (e.g., programming), they will excel in another (e.g., project management). This can lead to poor role assignments."
  },
  {
    id: 59, chapter: 6, topic: "HR Processes",
    question: "Which HR process focuses on developing and enhancing individual competencies and team interaction?",
    options: [
      "Plan HR Management",
      "Acquire Project Team",
      "Develop Project Team",
      "Manage Project Team"
    ],
    answer: 2,
    explanation: "Develop Project Team focuses on developing competencies, team interaction, and building team cohesion. The goal is to transform individuals into an effective, coordinated group."
  },
  {
    id: 60, chapter: 6, topic: "Theory Z",
    question: "Ouchi's Theory Z management style is characterized by:",
    options: [
      "Authoritarian control and strict supervision.",
      "Participative management based on commitment, opportunity, and advancement.",
      "Financial incentives as the primary motivator.",
      "Individual performance rewards only."
    ],
    answer: 1,
    explanation: "Theory Z (Ouchi) is based on Japanese management principles: participative decision-making, long-term employment, commitment, opportunity, and advancement. It emphasizes trust and collective responsibility."
  },

  // ===== CHAPTER 7: RISK MANAGEMENT =====
  {
    id: 61, chapter: 7, topic: "Risk Definition",
    question: "In project management, risk is BEST defined as:",
    options: [
      "Any event that has already occurred and caused harm.",
      "The possibility of potential harm from a present process or future event.",
      "The certainty of project failure.",
      "Budget overruns already experienced."
    ],
    answer: 1,
    explanation: "Risk is the possibility of potential harm from a present process or future event. It is associated with uncertainty and probability — risk has not yet occurred but has potential to happen."
  },
  {
    id: 62, chapter: 7, topic: "Risk Index",
    question: "A risk has Probability=High(3) and Impact=Medium(2). What is its Risk Index?",
    options: [
      "2",
      "3",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "Risk Index = Probability × Impact = 3 × 2 = 6. This is a high-priority risk requiring a first-priority mitigation or transfer response."
  },
  {
    id: 63, chapter: 7, topic: "Risk Response",
    question: "For a risk with Risk Index=9 (Probability=High, Impact=High), which response strategy should IMMEDIATELY be applied?",
    options: [
      "Accept and monitor",
      "Transfer to insurance",
      "Avoid — make changes to remove the risk entirely",
      "Mitigate — reduce impact"
    ],
    answer: 2,
    explanation: "Risk Index=9 (the maximum, High×High) requires immediate AVOIDANCE — making changes to the project to completely remove the risk. This is the highest priority risk requiring the most aggressive response."
  },
  {
    id: 64, chapter: 7, topic: "Risk Categories",
    question: "External risks are generally harder to manage than internal risks because:",
    options: [
      "They are always more expensive.",
      "They come from the external environment (political, socioeconomic, geographic) and are largely outside the project's control.",
      "They involve team members.",
      "They are always higher probability."
    ],
    answer: 1,
    explanation: "External risks come from the environment — political system, socioeconomic context, geography, infrastructure — and are largely outside the project team's control, making them more difficult to manage."
  },
  {
    id: 65, chapter: 7, topic: "Contingency Plan",
    question: "A contingency plan is BEST described as:",
    options: [
      "A plan that replaces the project management plan.",
      "Predefined actions the team will take if an identified risk actually occurs.",
      "A plan to reduce the probability of risk.",
      "The project budget reserve for cost overruns."
    ],
    answer: 1,
    explanation: "A contingency plan consists of predefined actions the project team will take if one of the identified risks actually occurs. It is prepared in advance during risk planning."
  },
  {
    id: 66, chapter: 7, topic: "Risk Transfer",
    question: "Purchasing insurance for potential equipment damage is an example of which risk response strategy?",
    options: [
      "Risk Avoidance",
      "Risk Mitigation",
      "Risk Transfer",
      "Risk Acceptance"
    ],
    answer: 2,
    explanation: "Risk Transfer moves the financial liability of a risk to a third party (e.g., insurance company, contractor). The risk itself doesn't go away, but the financial consequences are transferred."
  },
  {
    id: 67, chapter: 7, topic: "Risk Management Cycle",
    question: "In the PDCA approach to risk management, the 'Check' stage involves:",
    options: [
      "Identifying and quantifying risks.",
      "Executing activities to mitigate risks.",
      "Evaluating the effectiveness of the risk management plan and response actions.",
      "Improving the risk plan based on new information."
    ],
    answer: 2,
    explanation: "In the PDCA cycle for risk management, Check (Risk Plan Evaluation) involves evaluating the effectiveness of the risk management plan and the response actions taken."
  },
  {
    id: 68, chapter: 7, topic: "Fallback Plan",
    question: "A fallback plan differs from a contingency plan in that:",
    options: [
      "Fallback plans are less expensive.",
      "Fallback plans are used when mitigation/contingency actions have NOT worked for high-impact risks.",
      "Fallback plans replace the project management plan.",
      "Fallback plans are created after the project ends."
    ],
    answer: 1,
    explanation: "Fallback plans are prepared for high-impact risks and are used when the primary contingency or mitigation actions have not worked. They are the 'last resort' response strategy."
  },
  {
    id: 69, chapter: 7, topic: "Brainstorming",
    question: "In risk identification, brainstorming is used to:",
    options: [
      "Calculate the probability of each risk.",
      "Generate a comprehensive list of potential risks through group discussion.",
      "Develop response strategies for identified risks.",
      "Quantify the financial impact of risks."
    ],
    answer: 1,
    explanation: "Brainstorming in risk identification allows a group to generate a comprehensive list of potential risks. After listing risks, they are then quantified by probability and impact."
  },
  {
    id: 70, chapter: 7, topic: "Contingency Reserve",
    question: "A contingency budget reserve is BEST described as:",
    options: [
      "The project's entire budget.",
      "A financial provision held to mitigate costs caused by a risk event.",
      "The project manager's salary fund.",
      "The cost to hire additional team members."
    ],
    answer: 1,
    explanation: "A contingency budget reserve is a financial provision held by the project or organization specifically to mitigate costs caused by identified risk events. It is different from management reserves (for unknown unknowns)."
  },

  // ===== CHAPTER 8: QUALITY MANAGEMENT =====
  {
    id: 71, chapter: 8, topic: "Quality Definition",
    question: "Which BEST describes the difference between quality and grade in project management?",
    options: [
      "Quality refers to the number of features; grade refers to defect-free production.",
      "Quality is the absence of defects; grade is the category of features. High quality, low grade is acceptable.",
      "Grade is always more important than quality.",
      "Quality and grade are identical concepts."
    ],
    answer: 1,
    explanation: "Quality = absence of defects (conformance to requirements). Grade = category of features. A product can be high quality (no defects) but low grade (few features). Low quality is never acceptable; low grade may be acceptable if the client knows."
  },
  {
    id: 72, chapter: 8, topic: "PDCA",
    question: "The PDCA quality cycle was originally developed by:",
    options: [
      "PMI",
      "ISO",
      "Shewhart (later made popular by Deming)",
      "Peter Drucker"
    ],
    answer: 2,
    explanation: "The PDCA (Plan-Do-Check-Act) cycle was originally developed by Shewhart and later made popular by W. Edwards Deming. It is the most popular quality assurance tool for continuous improvement."
  },
  {
    id: 73, chapter: 8, topic: "QA vs QC",
    question: "Which statement CORRECTLY distinguishes Quality Assurance (QA) from Quality Control (QC)?",
    options: [
      "QA is reactive and identifies defects in products; QC is proactive and ensures processes are followed.",
      "QA is proactive and process-oriented; QC is reactive and product-oriented.",
      "QA and QC are the same process.",
      "QC ensures right processes; QA ensures right products."
    ],
    answer: 1,
    explanation: "QA is proactive and process-oriented — ensuring the RIGHT processes are being followed. QC is reactive and product-oriented — ensuring the RIGHT products are produced by identifying defects."
  },
  {
    id: 74, chapter: 8, topic: "Quality Processes",
    question: "Which quality management process involves confirming that quality standards will be used and identifying sources of those standards?",
    options: [
      "Quality Assurance",
      "Quality Control",
      "Quality Definition",
      "Quality Improvements"
    ],
    answer: 2,
    explanation: "Quality Definition involves identifying what quality standards will be used for the project. Sources include the donor, beneficiaries, organization, and external agencies (e.g., Sphere standards)."
  },
  {
    id: 75, chapter: 8, topic: "Quality Characteristics",
    question: "Which quality characteristic refers to the ability of a product/service to perform its intended function without unacceptable failure under normal conditions?",
    options: [
      "Functionality",
      "Reliability",
      "Suitability",
      "Completeness"
    ],
    answer: 1,
    explanation: "Reliability is the ability to perform as intended under normal conditions without unacceptable failures. It is different from functionality (performing the intended function) and suitability (fitness for use)."
  },
  {
    id: 76, chapter: 8, topic: "Sphere Standard",
    question: "The Sphere Standard in project management is primarily applicable to:",
    options: [
      "IT software projects",
      "Construction projects",
      "Emergency/humanitarian projects — defining minimum standards for water, sanitation, shelter, food, and nutrition",
      "Financial management projects"
    ],
    answer: 2,
    explanation: "The Sphere Standard is a worldwide recognized standard for emergency/humanitarian projects that defines minimum standards for water, sanitation, health, shelter, food security, and nutrition."
  },
  {
    id: 77, chapter: 8, topic: "Quality Audit",
    question: "A quality audit's PRIMARY goal is to:",
    options: [
      "Punish team members who make quality errors.",
      "Identify lessons learned and improve tools, techniques, and processes.",
      "Terminate the project if quality standards are not met.",
      "Replace the project manager."
    ],
    answer: 1,
    explanation: "Quality audits are structured reviews aimed at identifying lessons learned and improving the organization's tools, techniques, and processes. They are constructive — not punitive."
  },
  {
    id: 78, chapter: 8, topic: "Consistency Quality",
    question: "Which quality characteristic ensures that services are delivered in the same way to every beneficiary?",
    options: [
      "Reliability",
      "Completeness",
      "Consistency",
      "Timeliness"
    ],
    answer: 2,
    explanation: "Consistency means services are delivered in the same way for every beneficiary — ensuring fairness and standardization. It differs from reliability (no failures) and timeliness (delivered when needed)."
  },
  {
    id: 79, chapter: 8, topic: "Corrective Actions",
    question: "When a quality audit identifies required corrective actions, these actions must be:",
    options: [
      "Implemented immediately without review.",
      "Discussed only at the next project meeting.",
      "Approved through change control processes before implementation.",
      "Rejected if they affect the project budget."
    ],
    answer: 2,
    explanation: "Corrective actions identified from quality audits must be approved through change control processes before implementation. This ensures all changes are properly reviewed, documented, and authorized."
  },
  {
    id: 80, chapter: 8, topic: "Quality in Humanitarian Projects",
    question: "In humanitarian/development projects, quality standards come from multiple sources. Which is NOT a typical source?",
    options: [
      "Donor requirements",
      "Beneficiary needs",
      "The project manager's personal preferences",
      "External agencies and sector standards"
    ],
    answer: 2,
    explanation: "Quality standards come from donors, beneficiaries, the organization, and external agencies (like Sphere). The project manager's personal preferences are NOT a valid source of quality standards."
  },

  // ===== MIXED COMPREHENSIVE QUESTIONS =====
  {
    id: 81, chapter: 5, topic: "EVM Comprehensive",
    question: "A project has BAC=$400,000, is 60% complete, and has spent AC=$280,000. It was planned to be 70% complete. What is the CPI?",
    options: [
      "CPI = 0.86 — over budget",
      "CPI = 0.86 — under budget",
      "CPI = 0.75 — over budget",
      "CPI = 1.17 — under budget"
    ],
    answer: 0,
    explanation: "EV = 60% × $400,000 = $240,000. CPI = EV/AC = $240,000/$280,000 = 0.857 ≈ 0.86. Since CPI < 1, the project is OVER BUDGET. SPI = EV/PV = $240,000/(70%×$400,000) = $240,000/$280,000 = 0.86 — also behind schedule."
  },
  {
    id: 82, chapter: 4, topic: "CPM Network",
    question: "Activity A (5 days) → Activity B (3 days) and Activity A (5 days) → Activity C (7 days). Both B and C lead to Activity D (4 days). What is the critical path duration?",
    options: [
      "12 days (A→B→D)",
      "16 days (A→C→D)",
      "19 days",
      "9 days"
    ],
    answer: 1,
    explanation: "Path 1: A+B+D = 5+3+4 = 12 days. Path 2: A+C+D = 5+7+4 = 16 days. The critical path is the LONGEST path: 16 days (A→C→D). Activity B has 16-12=4 days of float."
  },
  {
    id: 83, chapter: 2, topic: "Payback Period",
    question: "A project costs $120,000 upfront and earns $30,000/year. What is the payback period?",
    options: [
      "3 years",
      "4 years",
      "5 years",
      "6 years"
    ],
    answer: 1,
    explanation: "Payback Period = Initial Investment / Annual Cash Flow = $120,000 / $30,000 = 4 years. This is the time to recover the initial investment before accumulating profit."
  },
  {
    id: 84, chapter: 3, topic: "WBS Hierarchy",
    question: "In a WBS, the element at Level 1 represents:",
    options: [
      "Individual tasks and work packages",
      "Activities to be completed",
      "Project objectives",
      "The overall project goal"
    ],
    answer: 3,
    explanation: "Level 1 of the WBS represents the overall Project Goal. The hierarchy descends: Level 1=Goal → Level 2=Objectives → Level 3=Activities → Level 4=Tasks/Work Packages."
  },
  {
    id: 85, chapter: 6, topic: "Team Stage Action",
    question: "A newly formed project team is getting to know each other and establishing ground rules. What stage is this?",
    options: [
      "Performing",
      "Norming",
      "Storming",
      "Forming"
    ],
    answer: 3,
    explanation: "During the Forming stage, team members are acquainting themselves, establishing ground rules, and thinking about their own contribution. It is the initial stage where the team begins to form its identity."
  },
  {
    id: 86, chapter: 7, topic: "Risk Priority",
    question: "Of four risks with indices 9, 6, 4, and 1, in what ORDER should they be addressed?",
    options: [
      "1, 4, 6, 9",
      "9, 6, 4, 1",
      "4, 6, 9, 1",
      "All simultaneously"
    ],
    answer: 1,
    explanation: "Risks are addressed highest priority first: 9 (Avoid immediately), then 6 (Mitigate/Transfer — 1st priority), then 4 (Mitigate/Transfer — 2nd priority), then 1 (Accept & Monitor). Address the highest-risk items first."
  },
  {
    id: 87, chapter: 8, topic: "PDCA Application",
    question: "A project discovers that its water distribution process is not meeting quality standards. In the PDCA cycle, adjusting the process based on monitoring results happens in which step?",
    options: [
      "Plan",
      "Do",
      "Check",
      "Act"
    ],
    answer: 3,
    explanation: "In the PDCA cycle, 'Act' involves applying actions necessary for improvement when the Check phase finds results require changes. This is where process adjustments and improvements are made."
  },
  {
    id: 88, chapter: 1, topic: "Project Management Universal",
    question: "Which statement about project management is MOST accurate?",
    options: [
      "Project management is only applicable to construction projects.",
      "Project management is now universal — applied across banking, IT, construction, healthcare, and more.",
      "Project management is only used for projects costing over $1 million.",
      "Project management replaces functional management."
    ],
    answer: 1,
    explanation: "Project management is now universal and applied across all industries — banking, IT, construction, healthcare, manufacturing, humanitarian work, and beyond. It provides a structured approach to achieving any project goal."
  },
  {
    id: 89, chapter: 5, topic: "VAC",
    question: "A project has BAC=$600,000 and EAC=$750,000. What is the Variance at Completion (VAC)?",
    options: [
      "+$150,000 — under budget",
      "-$150,000 — over budget",
      "$600,000",
      "$750,000"
    ],
    answer: 1,
    explanation: "VAC = BAC - EAC = $600,000 - $750,000 = -$150,000. Negative VAC indicates the project is projected to be OVER BUDGET by $150,000 at completion."
  },
  {
    id: 90, chapter: 4, topic: "SS Dependency",
    question: "In a Start-to-Start (SS) dependency, the successor activity:",
    options: [
      "Cannot start until the predecessor finishes.",
      "Depends on the START of the predecessor — activities can run in parallel.",
      "Must finish at the same time as the predecessor.",
      "Is completely independent of the predecessor."
    ],
    answer: 1,
    explanation: "In a Start-to-Start (SS) dependency, the successor's start depends on the START of the predecessor. This allows activities to overlap/run in parallel, compressing the schedule."
  },
  {
    id: 91, chapter: 3, topic: "Change Approvers",
    question: "Who approves scope changes that affect project budget or schedule?",
    options: [
      "Only the project manager",
      "The project team members",
      "The donor/funder",
      "The quality assurance officer"
    ],
    answer: 2,
    explanation: "Budget and schedule changes require DONOR approval. Organization management approves strategy/methodology changes. Beneficiaries approve changes affecting their expectations. The project manager may approve minor administrative changes."
  },
  {
    id: 92, chapter: 6, topic: "Herzberg Motivators",
    question: "Which of the following is a MOTIVATOR in Herzberg's Two-Factor Theory?",
    options: [
      "Job security",
      "Company policies",
      "Working conditions",
      "Achievement and recognition"
    ],
    answer: 3,
    explanation: "Achievement and recognition are Motivators in Herzberg's theory — they create job satisfaction. Job security, company policies, and working conditions are Hygiene Factors — they prevent dissatisfaction but don't create satisfaction."
  },
  {
    id: 93, chapter: 2, topic: "Integration Closure",
    question: "Which Integration Management process ensures all project activities are formally finalized?",
    options: [
      "Monitoring and Controlling Project Work",
      "Performing Integrated Change Control",
      "Closing the Project or Phase",
      "Developing the Project Charter"
    ],
    answer: 2,
    explanation: "Closing the Project or Phase is the final Integration Management process — it finalizes all activities to formally close the project or phase, including archiving documents and releasing resources."
  },
  {
    id: 94, chapter: 7, topic: "Risk Internal",
    question: "Which of the following is an example of an INTERNAL project risk?",
    options: [
      "A change in government regulations",
      "Natural disaster affecting the project site",
      "Lack of qualified resources within the project organization",
      "Currency exchange rate fluctuation"
    ],
    answer: 2,
    explanation: "Internal risks come from within the project organization, such as limited sponsor support, lack of qualified resources, or poor management competencies. Government regulations and natural disasters are external risks."
  },
  {
    id: 95, chapter: 5, topic: "Cost Baseline",
    question: "The Cost Baseline is an output of which Cost Management process?",
    options: [
      "Planning Cost Management",
      "Estimating Costs",
      "Determining the Budget",
      "Controlling Costs"
    ],
    answer: 2,
    explanation: "The Cost Baseline is an output of Determining the Budget — the process of allocating cost estimates to individual work items to establish a time-phased budget that serves as the basis for performance measurement."
  },
  {
    id: 96, chapter: 8, topic: "Quality Timeliness",
    question: "Which quality characteristic refers to delivering a product/service WHEN IT IS NEEDED by beneficiaries?",
    options: [
      "Reliability",
      "Consistency",
      "Timeliness",
      "Completeness"
    ],
    answer: 2,
    explanation: "Timeliness refers to the delivery of a product or service when needed. A high-quality product delivered too late may fail to meet quality standards for timeliness."
  },
  {
    id: 97, chapter: 4, topic: "Analogous Estimating",
    question: "Analogous estimating uses which primary input for duration estimation?",
    options: [
      "Detailed task breakdowns from the current project",
      "Actual duration data from a previous, similar project",
      "Expert interviews for the current project",
      "Statistical models and industry rates"
    ],
    answer: 1,
    explanation: "Analogous (top-down) estimating uses the actual duration of a previous similar project as the basis for the current estimate. It is less accurate but quicker and cheaper than bottom-up estimating."
  },
  {
    id: 98, chapter: 1, topic: "Batch Production",
    question: "Batch production is characterized by:",
    options: [
      "One-off unique items with no prior learning curve.",
      "Large volumes of identical items on a continuous line.",
      "Moderate quantities with periodic modification, organized by functional departments.",
      "Fully automated production requiring zero management."
    ],
    answer: 2,
    explanation: "Batch production involves moderate quantities with periodic modification. It requires more management control than mass production and is typically organized around functional departments."
  },
  {
    id: 99, chapter: 6, topic: "Compromise",
    question: "In the Compromising conflict resolution strategy:",
    options: [
      "One party wins and the other loses.",
      "The conflict is avoided entirely.",
      "All parties give something up to reach a partial solution.",
      "An external arbitrator makes the decision."
    ],
    answer: 2,
    explanation: "Compromising provides a solution that partially satisfies all parties — everyone gives something up. It is quick but may not be the best long-term solution, unlike collaborating/problem-solving."
  },
  {
    id: 100, chapter: 5, topic: "EVM Summary",
    question: "Which EVM metric tells you IF you need to work MORE EFFICIENTLY going forward to finish within the original budget?",
    options: [
      "CPI",
      "SPI",
      "TCPI",
      "VAC"
    ],
    answer: 2,
    explanation: "TCPI (To-Complete Performance Index) = (BAC - EV) / (BAC - AC). It tells you the cost efficiency REQUIRED for the remaining work to finish within the original budget. TCPI > 1 means you need to work more efficiently than you have been."
  }
]

export const chapterInfo = [
  { id: 1, name: "Introduction to SPM", shortName: "Ch.1 Intro", color: "text-cyan-400" },
  { id: 2, name: "Integration Management", shortName: "Ch.2 Integration", color: "text-blue-400" },
  { id: 3, name: "Scope Management", shortName: "Ch.3 Scope", color: "text-teal-400" },
  { id: 4, name: "Schedule Management", shortName: "Ch.4 Schedule", color: "text-violet-400" },
  { id: 5, name: "Cost Management", shortName: "Ch.5 Cost", color: "text-emerald-400" },
  { id: 6, name: "HR Management", shortName: "Ch.6 HR", color: "text-orange-400" },
  { id: 7, name: "Risk Management", shortName: "Ch.7 Risk", color: "text-red-400" },
  { id: 8, name: "Quality Management", shortName: "Ch.8 Quality", color: "text-cyan-300" },
]
