export interface Calculation {
  formula: string
  example: string
  result?: string
}

export interface NoteSection {
  title: string
  content: string[]
  highlight?: string
  calculations?: Calculation[]
}

export interface ChapterNote {
  id: string
  chapter: number
  title: string
  icon: string
  color: string
  sections: NoteSection[]
  keyTerms: { term: string; definition: string }[]
}

export const studyNotes: ChapterNote[] = [
  {
    id: "ch1",
    chapter: 1,
    title: "Introduction to SPM",
    icon: "BookOpen",
    color: "from-cyan-500/20 to-blue-500/20",
    keyTerms: [
      { term: "Project", definition: "A temporary, unique endeavor undertaken to create a specific product, service, or result with a defined beginning and end." },
      { term: "Program", definition: "A set of related projects aimed at a broader strategic goal, typically longer-lasting and may not have a fixed end date." },
      { term: "Project Management", definition: "The application of knowledge, skills, tools, and techniques to project activities to meet project requirements." },
      { term: "Triple Constraint", definition: "The three key interrelated variables of project management: Time, Cost, and Quality." },
      { term: "Internal Project", definition: "A project done to improve organizational operations with an internal sponsor." },
      { term: "External Project", definition: "A project done for an outside client, usually under contract, generating revenue." },
    ],
    sections: [
      {
        title: "What is a Project?",
        content: [
          "A project is a one-off process with a single, definable end result or product (e.g., building a house, developing a new IT system).",
          "PMI Definition: A temporary and unique endeavor undertaken to create a specific product, service, or result with a defined beginning and end.",
          "Key Characteristics: Single definable purpose, defined constraints (cost, schedule, performance), multidisciplinary, unique, involves unfamiliarity and risk, temporary activity, phased process.",
          "Projects vs. Processes: Projects are temporary and create unique deliverables; Processes are ongoing and produce standardized output.",
        ]
      },
      {
        title: "Production System Types",
        content: [
          "Mass Production: Large volumes of identical items (e.g., vehicle assembly line). Capital-intensive, minimal management intervention.",
          "Batch Production: Moderate quantities with periodic modification. More management control, organized around functional departments.",
          "Project (Non-Repetitive) Production: One-off, unique items. No prior learning curve; requires high levels of complex management planning.",
        ]
      },
      {
        title: "Organizational Structures",
        content: [
          "Functional Structure: People organized around functional groups (sales, finance, operations). Compartmentalized; can limit cross-functional collaboration.",
          "Internal (Non-Executive) Project Management: Project team operates within an existing functional structure. Good flexibility in resource use; specialist knowledge easily shared.",
          "External Project Management: External project manager appointed on consultancy basis. Acts as an external agent on behalf of the client.",
          "Matrix Organization: Staff have both functional and project responsibilities — dual reporting relationships create complexity.",
        ],
        highlight: "The internal system also has the advantage that specialist knowledge can easily be built up and shared within the function."
      },
      {
        title: "The Need for Project Management",
        content: [
          "Project management plans, coordinates, and controls the complex, diverse activities involved in modern projects.",
          "Required skills for PMs: Financial Awareness, Marketing Appreciation, Technical Knowledge, Planning Skills, Strategic Awareness, Quality Management.",
          "Project management is now universal — applied in banking, IT, construction, healthcare, and beyond.",
        ]
      }
    ]
  },
  {
    id: "ch2",
    chapter: 2,
    title: "Project Integration Management",
    icon: "GitMerge",
    color: "from-blue-500/20 to-violet-500/20",
    keyTerms: [
      { term: "Project Charter", definition: "A formal document that authorizes the existence of a project and provides the PM with authority to apply organizational resources." },
      { term: "NPV", definition: "Net Present Value — the total present value of a time series of cash flows. Higher NPV is better; accept if NPV > 0." },
      { term: "IRR", definition: "Internal Rate of Return — the discount rate when NPV equals zero. Measures how fast money returns after investment." },
      { term: "ROI", definition: "Return on Investment = (Total Discounted Benefits - Total Discounted Costs) / Discounted Costs. Higher ROI is better." },
      { term: "Payback Period", definition: "The time it takes to recover the initial investment before starting to accumulate profit." },
      { term: "SWOT Analysis", definition: "Strengths, Weaknesses, Opportunities, Threats — a strategic planning tool to identify and select valuable projects." },
      { term: "Sunk Cost", definition: "Money that has already been spent. Should NOT be included in future project budgets or investment decisions." },
    ],
    sections: [
      {
        title: "Six Integration Management Processes (PMBOK)",
        content: [
          "1. Developing the Project Charter — formally authorizes the project.",
          "2. Developing the Project Management Plan — coordinating all planning efforts into a coherent document.",
          "3. Directing and Managing Project Work — carrying out the project management plan.",
          "4. Monitoring and Controlling Project Work — overseeing activities to meet performance objectives.",
          "5. Performing Integrated Change Control — identifying, evaluating, and managing changes throughout the lifecycle.",
          "6. Closing the Project or Phase — finalizing all activities to formally close the project.",
        ]
      },
      {
        title: "Project Selection Methods",
        content: [
          "1. Broad Organizational Needs: Use the 'Need, Funding, Will' test.",
          "2. Categorizing IT Projects: By impetus (problems, opportunities, directives), by timing (time window, duration), by priority (high/medium/low).",
          "3. Financial Analysis: NPV, ROI, Payback Period.",
          "4. Weighted Scoring Model: Assigns weights to criteria and ranks projects.",
          "5. Balanced Scorecard: Evaluates projects across financial, customer, process, and learning dimensions.",
        ]
      },
      {
        title: "NPV Calculation",
        content: [
          "Formula: NPV = Σ [Cash Flow_t / (1+r)^t] where r = discount rate, t = year.",
          "Discount Factor for year t = 1 / (1+r)^t",
          "Decision: Accept if NPV > 0, Reject if NPV < 0, Indifferent if NPV = 0.",
          "For mutually exclusive projects: choose the one with the HIGHEST positive NPV.",
          "For capital rationing: calculate Profitability Index (PI) = NPV / Initial Investment, rank by PI.",
        ],
        highlight: "NPV Decision Rule: If NPV > 0 → ACCEPT | If NPV < 0 → REJECT | If NPV = 0 → INDIFFERENT"
      },
      {
        title: "Four-Stage IT Project Selection",
        content: [
          "1. Strategic Alignment — link IT strategic plan to overall organizational strategy.",
          "2. Business Area Analysis — identify core business processes critical to strategic goals.",
          "3. Project Definition — outline potential IT projects in terms of scope, benefits, constraints.",
          "4. Project Selection & Resource Allocation — choose specific projects and assign resources.",
        ]
      }
    ]
  },
  {
    id: "ch3",
    chapter: 3,
    title: "Project Scope Management",
    icon: "Target",
    color: "from-teal-500/20 to-cyan-500/20",
    keyTerms: [
      { term: "Scope", definition: "The description of the boundaries of the project — what it will deliver and what it will not deliver." },
      { term: "Scope Creep", definition: "Uncontrolled changes in a project's scope — the tendency to include more tasks than originally specified, leading to higher costs and extended timelines." },
      { term: "WBS", definition: "Work Breakdown Structure — a hierarchical, outcome-oriented analysis of all work involved in the project that defines total scope." },
      { term: "Work Package", definition: "The lowest level of the WBS — a deliverable. By the 80/8 rule: not longer than 80 hours, not smaller than 8 hours." },
      { term: "100% Rule", definition: "The WBS must include 100% of the work defined by the project scope and capture all deliverables — internal, external, and interim." },
      { term: "Scope Statement", definition: "A document used to develop and confirm a common understanding of project scope among stakeholders. The most important tool to frame the project." },
    ],
    sections: [
      {
        title: "Scope Management Steps",
        content: [
          "1. Defining the Scope — identifying all work the project will accomplish to achieve its final goal.",
          "2. Assigning Scope Work (WBS) — breaking the scope into manageable pieces and assigning responsibilities.",
          "3. Verifying the Scope — confirming completed deliverables against the scope statement.",
          "4. Adapting the Scope — updating the scope from authorized changes.",
        ]
      },
      {
        title: "Project Scope Statement Components",
        content: [
          "Project Justification — describes the need, problem being solved, target communities and locations.",
          "Brief Description — summarizes tangible outputs (e.g., number of beneficiaries receiving a loan).",
          "Constraints — significant limitations from donor, beneficiaries, or local conditions.",
          "Assumptions — conditions accepted as true without proof (e.g., labor contributions from beneficiaries).",
          "Dependencies — internal or external factors on which the project is dependent.",
          "Definition of Success — meeting activities on time, under budget, with quality acceptable to stakeholders.",
        ],
        highlight: "The Project Scope Statement is the most important tool the project has to frame the project — it evaluates every change request and communicates project limits."
      },
      {
        title: "Work Breakdown Structure (WBS)",
        content: [
          "An outcome-oriented hierarchical tree structure organizing the total scope of the project.",
          "Structure: Level 1 = Project Goal → Level 2 = Objectives → Level 3 = Activities → Level 4 = Tasks (work packages).",
          "100% Rule: WBS includes 100% of all project work; each level's children represent 100% of the parent node's scope.",
          "80/8 Rule: Work packages should not be longer than 80 hours or smaller than 8 hours.",
          "A unique numbering system (e.g., 1.1.1) tracks each element for schedule development.",
        ]
      },
      {
        title: "Scope Change Control Plan",
        content: [
          "Purpose: Minimize scope creep while maintaining balance between flexibility and control.",
          "Components: Change Request Form, Scope Change Analysis, Scope Change Approval, Update Project Plans, Communicate Changes.",
          "All changes must be approved BEFORE work starts.",
          "Approvers: Donor (budget/schedule changes), Organization Management (strategy/methodology changes), Beneficiaries (changes affecting their expectations).",
        ]
      }
    ]
  },
  {
    id: "ch4",
    chapter: 4,
    title: "Project Schedule Management",
    icon: "Calendar",
    color: "from-violet-500/20 to-blue-500/20",
    keyTerms: [
      { term: "Critical Path", definition: "The longest path through the network diagram — determines the minimum project duration. Activities on this path have zero float." },
      { term: "Float / Slack", definition: "The amount of time an activity can be delayed without delaying the project. Critical path activities have 0 float." },
      { term: "PERT", definition: "Program Evaluation and Review Technique. Formula: (O + 4M + P) / 6 where O=Optimistic, M=Most Likely, P=Pessimistic." },
      { term: "ES", definition: "Early Start — the earliest time an activity can begin." },
      { term: "EF", definition: "Early Finish — EF = ES + Duration - 1 (using Day 0 convention)." },
      { term: "LS", definition: "Late Start — the latest time an activity can begin without delaying the project. LS = LF - Duration + 1." },
      { term: "LF", definition: "Late Finish — the latest time an activity can end without delaying the project." },
      { term: "Total Float", definition: "Total Float = LS - ES = LF - EF. Zero float means the activity is on the critical path." },
      { term: "Mandatory Dependency", definition: "An inherent dependency in the nature of the work (hard logic). E.g., code must be written before it can be tested." },
      { term: "Discretionary Dependency", definition: "A dependency defined by the project team (soft logic). May limit later scheduling options." },
    ],
    sections: [
      {
        title: "Schedule Management Steps",
        content: [
          "1. Defining the Schedule — activity sequencing, dependencies, and duration estimation.",
          "2. Publishing the Schedule — communicating the project schedule to the team and stakeholders.",
          "3. Monitoring the Schedule — tracking schedule variances using CPI and SPI.",
          "4. Updating the Schedule — revising the schedule based on actual progress.",
        ]
      },
      {
        title: "Activity Duration Estimation Methods",
        content: [
          "Analogous Estimating (Top-Down): Use actual duration of a previous, similar activity as the basis.",
          "Parametric Estimating: Use a rate or industry standard for productivity (e.g., survey data per day).",
          "PERT Estimating: Expected Time = (Optimistic + 4 × Most Likely + Pessimistic) / 6",
        ],
        highlight: "PERT Formula: TE = (O + 4ML + P) / 6",
        calculations: [
          {
            formula: "PERT: TE = (O + 4ML + P) / 6",
            example: "For a coding task: Optimistic = 2 days, Most Likely = 5 days, Pessimistic = 8 days. TE = (2 + 4×5 + 8) / 6 = (2 + 20 + 8) / 6 = 30 / 6 = 5 days",
            result: "5 days"
          },
          {
            formula: "PERT Variance: σ² = ((P - O) / 6)²",
            example: "Pessimistic = 8, Optimistic = 2. σ² = ((8 - 2) / 6)² = (6 / 6)² = 1² = 1",
            result: "1 (variance)"
          },
          {
            formula: "PERT Standard Deviation: σ = (P - O) / 6",
            example: "Pessimistic = 8, Optimistic = 2. σ = (8 - 2) / 6 = 6 / 6 = 1 day",
            result: "1 day"
          }
        ]
      },
      {
        title: "Dependency Relationship Types",
        content: [
          "Finish to Start (FS): Successor cannot begin until predecessor completes. Most common type.",
          "Start to Start (SS): Successor depends on the START of predecessor. Activities can run in parallel.",
          "Finish to Finish (FF): Successor's finish depends on the predecessor's finish.",
          "Start to Finish (SF): Successor's finish depends on the START of predecessor. Rarely used.",
          "External Dependencies: Relationships between project and non-project activities (e.g., hardware delivery from supplier).",
        ]
      },
      {
        title: "Critical Path Method (CPM) Rules",
        content: [
          "Forward Pass: ES(start) = 0; EF = ES + Duration - 1; Next ES = Previous EF + 1; Multiple predecessors → ES = MAX(all EFs) + 1.",
          "Backward Pass: LF(last) = Project Duration - 1; LS = LF - Duration + 1; Predecessor LF = Successor LS - 1; Multiple successors → LF = MIN(all LS) - 1.",
          "Total Float = LS - ES = LF - EF",
          "Free Float = MIN(Successor ES) - EF - 1",
          "Critical Path: All activities with Total Float = 0. A project can have TWO critical paths.",
        ],
        highlight: "Critical Path = The longest total duration path through the network. It is the shortest possible project completion time.",
        calculations: [
          {
            formula: "EF = ES + Duration - 1",
            example: "Activity starts on Day 2 (ES=2), Duration = 5 days. EF = 2 + 5 - 1 = 6 (activity ends on Day 6)",
            result: "Day 6"
          },
          {
            formula: "LS = LF - Duration + 1",
            example: "Latest Finish is Day 10, Duration = 5 days. LS = 10 - 5 + 1 = 6 (must start by Day 6)",
            result: "Day 6"
          },
          {
            formula: "Total Float = LS - ES",
            example: "Late Start = Day 8, Early Start = Day 5. Total Float = 8 - 5 = 3 days (can be delayed 3 days)",
            result: "3 days"
          },
          {
            formula: "Total Float = LF - EF",
            example: "Late Finish = Day 12, Early Finish = Day 9. Total Float = 12 - 9 = 3 days (same result)",
            result: "3 days"
          },
          {
            formula: "Free Float = MIN(Successor ES) - EF - 1",
            example: "Activity EF = Day 6. Next activity (Successor) ES = Day 8. Free Float = 8 - 6 - 1 = 1 day",
            result: "1 day"
          },
          {
            formula: "Critical Path Duration",
            example: "Path A: 5 + 6 + 7 = 18 days. Path B: 8 + 4 + 5 = 17 days. Critical Path = Path A = 18 days (longest path)",
            result: "18 days (Path A)"
          }
        ]
      }
    ]
  },
  {
    id: "ch5",
    chapter: 5,
    title: "Project Cost Management",
    icon: "DollarSign",
    color: "from-emerald-500/20 to-teal-500/20",
    keyTerms: [
      { term: "ROM Estimate", definition: "Rough Order of Magnitude — accuracy of -50% to +100%. Done very early in a project (3+ years before completion)." },
      { term: "Budgetary Estimate", definition: "Accuracy of -10% to +25%. Made 1-2 years before project completion for budget allocation." },
      { term: "Definitive Estimate", definition: "Most accurate estimate — accuracy of -5% to +10%. Made within 1 year of completion." },
      { term: "EVM", definition: "Earned Value Management — integrates scope, schedule, and cost to assess project performance and forecast completion." },
      { term: "PV", definition: "Planned Value — the authorized budget assigned to scheduled work. Also called BCWS (Budgeted Cost of Work Scheduled)." },
      { term: "EV", definition: "Earned Value — the value of work actually performed. EV = % Complete × BAC. Also called BCWP." },
      { term: "AC", definition: "Actual Cost — the actual cost incurred for work performed. Also called ACWP." },
      { term: "CV", definition: "Cost Variance = EV - AC. Positive = Under budget. Negative = Over budget." },
      { term: "SV", definition: "Schedule Variance = EV - PV. Positive = Ahead of schedule. Negative = Behind schedule." },
      { term: "CPI", definition: "Cost Performance Index = EV / AC. CPI > 1 = Under budget (good). CPI < 1 = Over budget (bad)." },
      { term: "SPI", definition: "Schedule Performance Index = EV / PV. SPI > 1 = Ahead of schedule (good). SPI < 1 = Behind schedule (bad)." },
      { term: "EAC", definition: "Estimate at Completion. EAC = BAC / CPI (most common). The forecasted total project cost." },
      { term: "ETC", definition: "Estimate to Complete = EAC - AC. How much more money is needed to finish the project." },
      { term: "TCPI", definition: "To-Complete Performance Index = (BAC - EV) / (BAC - AC). The required CPI to finish within budget." },
      { term: "BAC", definition: "Budget at Completion — the total approved budget for the project." },
      { term: "VAC", definition: "Variance at Completion = BAC - EAC. Projected budget surplus or deficit at completion." },
    ],
    sections: [
      {
        title: "Four Cost Management Processes",
        content: [
          "1. Planning Cost Management — determining policies, procedures, and documentation. Output: Cost Management Plan.",
          "2. Estimating Costs — developing an approximation of costs of resources needed. Output: Activity Cost Estimates.",
          "3. Determining the Budget — allocating cost estimates to individual work items. Output: Cost Baseline.",
          "4. Controlling Costs — controlling changes to the project budget. Output: Work Performance Information, Change Requests.",
        ]
      },
      {
        title: "Cost Estimation Techniques",
        content: [
          "Analogous (Top-Down): Use actual cost of a previous similar project. Less costly but less accurate.",
          "Bottom-Up: Estimate individual work items/activities and sum them up (activity-based costing). Most accurate but time-consuming.",
          "Parametric: Use project characteristics (parameters) in a mathematical model (e.g., $50 per line of code).",
        ]
      },
      {
        title: "Earned Value Management (EVM) Formulas",
        content: [
          "PV = % Planned × BAC (Planned Value — what should have been done)",
          "EV = % Complete × BAC (Earned Value — what was actually done)",
          "AC = Actual Cost Incurred",
          "CV = EV - AC (+ = under budget, - = over budget)",
          "SV = EV - PV (+ = ahead, - = behind)",
          "CPI = EV / AC (>1 good, <1 bad)",
          "SPI = EV / PV (>1 good, <1 bad)",
          "EAC = BAC / CPI (forecast total cost)",
          "ETC = EAC - AC (remaining cost to finish)",
          "TCPI = (BAC - EV) / (BAC - AC) (required efficiency to finish on budget)",
          "VAC = BAC - EAC (projected surplus/deficit)",
        ],
        highlight: "EVM Key: EV is always in the middle. CV compares EV to cost (AC). SV compares EV to plan (PV).",
        calculations: [
          {
            formula: "PV = % Planned × BAC",
            example: "Project BAC = $100,000. At Week 4, you planned to be 40% complete. PV = 0.40 × $100,000 = $40,000",
            result: "$40,000"
          },
          {
            formula: "EV = % Complete × BAC",
            example: "Project BAC = $100,000. At Week 4, you are actually 35% complete. EV = 0.35 × $100,000 = $35,000",
            result: "$35,000"
          },
          {
            formula: "CV = EV - AC",
            example: "EV = $35,000, AC = $37,000. CV = $35,000 - $37,000 = -$2,000 (OVER budget by $2,000)",
            result: "-$2,000"
          },
          {
            formula: "SV = EV - PV",
            example: "EV = $35,000, PV = $40,000. SV = $35,000 - $40,000 = -$5,000 (BEHIND schedule)",
            result: "-$5,000"
          },
          {
            formula: "CPI = EV / AC",
            example: "EV = $35,000, AC = $37,000. CPI = $35,000 / $37,000 = 0.946 (spent $1.06 for every $1.00 earned)",
            result: "0.946 (BAD)"
          },
          {
            formula: "EAC = BAC / CPI",
            example: "BAC = $100,000, CPI = 0.946. EAC = $100,000 / 0.946 = $105,710 (project will cost $5,710 MORE)",
            result: "$105,710"
          },
          {
            formula: "ETC = EAC - AC",
            example: "EAC = $105,710, AC = $37,000. ETC = $105,710 - $37,000 = $68,710 (need $68,710 more to finish)",
            result: "$68,710"
          },
          {
            formula: "TCPI = (BAC - EV) / (BAC - AC)",
            example: "BAC = $100,000, EV = $35,000, AC = $37,000. TCPI = ($100,000 - $35,000) / ($100,000 - $37,000) = $65,000 / $63,000 = 1.032 (need to improve efficiency)",
            result: "1.032"
          },
          {
            formula: "VAC = BAC - EAC",
            example: "BAC = $100,000, EAC = $105,710. VAC = $100,000 - $105,710 = -$5,710 (projected budget deficit)",
            result: "-$5,710"
          }
        ]
      },
      {
        title: "Key Financial Definitions",
        content: [
          "Direct Costs: Directly related to producing deliverables (salaries, hardware, software).",
          "Indirect Costs: Not directly related to deliverables (electricity, internet, rent, office supplies).",
          "Sunk Costs: Money already spent — should NOT be included in revised project budgets.",
          "Variable Costs: Change with production (cost of materials).",
          "Fixed Costs: Do not change with production (rent, setup costs).",
          "Opportunity Cost: The cost given up by selecting one project over another.",
        ]
      }
    ]
  },
  {
    id: "ch6",
    chapter: 6,
    title: "Project Human Resource Management",
    icon: "Users",
    color: "from-orange-500/20 to-amber-500/20",
    keyTerms: [
      { term: "Maslow's Hierarchy", definition: "5-level need hierarchy: Physiological → Safety → Social → Esteem → Self-Actualization. Must satisfy lower needs before higher ones motivate." },
      { term: "Theory X", definition: "McGregor: Workers hate work, need coercion and control. Managers must use pressure and threats." },
      { term: "Theory Y", definition: "McGregor: Workers can work without supervision, want to achieve, enjoy esteem and self-actualization." },
      { term: "Theory Z", definition: "Ouchi: Based on Japanese participative management. Workers motivated by commitment, opportunity, and advancement." },
      { term: "Herzberg Hygiene Factors", definition: "Prevent dissatisfaction but don't cause satisfaction: salary, working conditions, job security, supervision, company policies." },
      { term: "Herzberg Motivators", definition: "Produce job satisfaction: achievement, recognition, the work itself, responsibility, advancement, growth." },
      { term: "Vroom Expectancy Theory", definition: "Motivation = Expectancy × Instrumentality × Valence. People act if they expect good rewards." },
      { term: "McClelland's Achievement Theory", definition: "People motivated by three needs: Achievement (nAch), Power (nPow), Affiliation (nAff). These are learned, not innate." },
      { term: "Tuckman's Team Stages", definition: "Forming → Storming → Norming → Performing → Adjourning. Five stages of team development." },
      { term: "Halo Effect", definition: "Assuming excellence in one area (e.g., programming) means excellence in another (e.g., project management)." },
    ],
    sections: [
      {
        title: "HR Management Processes",
        content: [
          "1. Plan HR Management (Planning) — identify and document roles, responsibilities, required skills, reporting relationships, and create staff management plan.",
          "2. Acquire Project Team (Executing) — attain and assign human resources. Staff may come from inside or outside the organization.",
          "3. Develop Project Team (Executing) — develop and enhance team into an effective, coordinated group.",
          "4. Manage Project Team (Executing) — track and report on team performance; conduct appraisals; resolve issues.",
        ]
      },
      {
        title: "Motivation Theories Summary",
        content: [
          "Maslow (Hierarchy of Needs): Physiological → Safety → Social → Esteem → Self-Actualization. Deficiency needs must be met before growth needs.",
          "McGregor X/Y: X = coercive management; Y = empowering management.",
          "Ouchi Z: Participative, commitment-based Japanese management style.",
          "Herzberg: Hygiene factors prevent dissatisfaction; Motivators create satisfaction.",
          "Vroom: Motivation = Expectancy × Instrumentality × Valence.",
          "McClelland: Achievement (nAch), Power (nPow), Affiliation (nAff) — all learned through experience.",
        ],
        highlight: "Herzberg: Salary is a hygiene factor (prevents dissatisfaction), NOT a motivator. Achievement and recognition ARE motivators."
      },
      {
        title: "Tuckman's Team Development Stages",
        content: [
          "Forming: Team acquaints and establishes ground rules; individuals think about their contribution.",
          "Storming: Team members resist control, show hostility, believe they can do better individually.",
          "Norming: Team works together, develops close relationships, feelings of camaraderie emerge.",
          "Performing: Team members work as one unit toward getting the job done.",
          "Adjourning: Team disbands after achieving goals; members return to departments or move to other projects.",
        ]
      },
      {
        title: "Conflict Resolution Strategies",
        content: [
          "Compromising: Provide solutions that partially satisfy all parties. All parties give something up.",
          "Withdrawal/Avoiding: PM temporarily withdraws; assumes conflict will resolve itself or waits for better preparation.",
          "Smoothing/Accommodating: Focus on points of agreement rather than differences; problem may resurface later.",
          "Forcing/Directing: PM imposes a decision without listening to parties. Fast but creates resentment.",
          "Collaborating/Problem-Solving: Best resolution — parties work together to find a mutually beneficial solution.",
        ]
      }
    ]
  },
  {
    id: "ch7",
    chapter: 7,
    title: "Project Risk Management",
    icon: "AlertTriangle",
    color: "from-red-500/20 to-orange-500/20",
    keyTerms: [
      { term: "Risk", definition: "The possibility of potential harm from a present process or future event. Also associated with the probability of the event occurring." },
      { term: "Internal Risk", definition: "Comes from the project organization — limited support, lack of qualified resources, poor management competencies." },
      { term: "External Risk", definition: "Comes from the environment — political system, socioeconomic context, geography, infrastructure. More difficult to manage." },
      { term: "Risk Index", definition: "Risk Priority = Probability × Impact. Used to rank risks from highest to lowest for response planning." },
      { term: "Contingency Plan", definition: "Predefined actions the project team will take if one of the identified risks occurs." },
      { term: "Fallback Plan", definition: "Plans for high-impact risks, used when activities to reduce/mitigate the risk have not worked." },
      { term: "Contingency Budget Reserve", definition: "A financial provision held by the project or organization to mitigate costs caused by a risk event." },
      { term: "Risk Avoidance", definition: "Making changes to the project to completely remove the risk." },
      { term: "Risk Mitigation", definition: "Taking action to reduce the impact or probability of the risk occurring." },
      { term: "Risk Transfer", definition: "Moving the liability of the risk to a third party (e.g., insurance, outsourcing)." },
      { term: "Risk Acceptance", definition: "Accepting the consequences of the risk. Used when risk is small or no response strategy is feasible." },
      { term: "SWOT for Risk", definition: "Strengths, Weaknesses, Opportunities, Threats analysis used to identify potential project risks." },
    ],
    sections: [
      {
        title: "Risk Management Stages (PDCA)",
        content: [
          "Plan (Risk Planning): Identify, quantify, and develop a response plan for risks.",
          "Do (Risk Response): Execute activities to mitigate, monitor, and respond to risk events.",
          "Check (Risk Plan Evaluation): Evaluate effectiveness of the risk management plan and response actions.",
          "Adapt (Risk Plan Improvement): Improve the risk plan, response mechanisms, and update risk levels.",
        ]
      },
      {
        title: "Risk Identification Methods",
        content: [
          "Brainstorming: Group generates comprehensive list of potential risks; then quantified by probability and impact.",
          "Interviewing: Interview subject matter experts and team members from similar projects.",
          "SWOT Analysis: Identify risks through Strengths, Weaknesses, Opportunities, Threats analysis.",
          "Document Review: Review project documentation, assumptions, and previous project lessons learned.",
        ]
      },
      {
        title: "Risk Quantification (Probability × Impact Matrix)",
        content: [
          "Scale: High=3, Medium=2, Low=1 for both Probability and Impact.",
          "Risk Index = Probability × Impact (range: 1 to 9).",
          "Priority: Risk Index 9 = Highest priority; Risk Index 1 = Lowest priority.",
          "Example: Risk C (High×High = 9) → Avoid immediately; Risk D (Medium×High = 6) → Mitigate first priority.",
        ],
        highlight: "Risk Priority Table: Index 9 → Avoid | Index 6-4 → Mitigate/Transfer (1st) | Index 3-2 → Mitigate/Transfer (2nd) | Index 1 → Accept & Monitor"
      },
      {
        title: "Risk Response Strategies",
        content: [
          "Avoid (Index 9): Make changes to project to completely remove the risk. Take immediate action.",
          "Mitigate (Index 4-6): Reduce the impact or probability. Include preventive tasks in the project schedule.",
          "Transfer (Index 3-4): Move risk liability to third party (insurance, contractor, partner organization).",
          "Accept (Index 1-2): Accept consequences. Used when risk is small or no response strategy is economically feasible.",
        ]
      }
    ]
  },
  {
    id: "ch8",
    chapter: 8,
    title: "Project Quality Management",
    icon: "CheckCircle",
    color: "from-cyan-500/20 to-emerald-500/20",
    keyTerms: [
      { term: "Quality", definition: "\"The totality of characteristics of an entity that bear on its ability to satisfy stated or implied needs.\" Conformance to requirements OR fitness for use." },
      { term: "Quality vs. Grade", definition: "Quality = absence of defects. Grade = additional features. A product can be high quality (no defects) but low grade (few features)." },
      { term: "PDCA Cycle", definition: "Plan-Do-Check-Act (Shewhart/Deming Cycle) — the most popular quality assurance tool for continuous improvement." },
      { term: "Quality Definition", definition: "Identifying quality standards from donors, beneficiaries, organization, and external agencies." },
      { term: "Quality Assurance", definition: "Providing evidence to create confidence that quality-related activities are being performed effectively. Proactive." },
      { term: "Quality Control", definition: "Monitoring and verifying that outputs meet quality standards. Reactive — identifies defects in products/services." },
      { term: "Quality Audit", definition: "Structured review of quality management activities to identify lessons learned and improve performance." },
      { term: "Sphere Standard", definition: "Worldwide recognized standard for emergency projects — defines minimum standards for water, sanitation, health, shelter, food security, nutrition." },
    ],
    sections: [
      {
        title: "Four Quality Management Processes",
        content: [
          "1. Quality Definition — identify what quality standards will be used; sources include donor, beneficiaries, organization, and external agencies.",
          "2. Quality Assurance — proactive confirmation that quality processes are in place and working.",
          "3. Quality Control — monitoring and verifying outputs meet quality standards.",
          "4. Quality Improvements — continuous improvement of processes based on findings from QA and QC.",
        ]
      },
      {
        title: "Quality Characteristics",
        content: [
          "Functionality: Degree to which equipment performs its intended function.",
          "Performance: How well a product/service performs the beneficiary's intended use.",
          "Reliability: Ability to perform as intended under normal conditions without unacceptable failures.",
          "Relevance: How a product/service meets the actual needs of beneficiaries.",
          "Timeliness: Delivery of product/service when needed.",
          "Suitability: Fitness for use — appropriateness and correctness for intended application.",
          "Completeness: Service is complete and includes the entire scope.",
          "Consistency: Services delivered in the same way for every beneficiary.",
          "Maintainability: Ease of performing maintenance on a product.",
        ]
      },
      {
        title: "The PDCA (Shewhart/Deming) Cycle",
        content: [
          "Plan: Establish objectives and processes required to deliver desired results.",
          "Do: Implement the developed process.",
          "Check: Monitor and evaluate the implemented process by testing results against objectives.",
          "Act: Apply actions necessary for improvement if results require changes.",
        ],
        highlight: "The PDCA Cycle is never-ending — it repeats throughout the project lifetime to continuously improve internal efficiency and quality."
      },
      {
        title: "Quality Assurance vs Quality Control",
        content: [
          "Quality Assurance (QA): Proactive, process-oriented. Ensures the RIGHT processes are being followed. Occurs during implementation.",
          "Quality Control (QC): Reactive, product-oriented. Ensures the RIGHT products are produced. Identifies defects.",
          "Quality Audits: Structured reviews to identify lessons learned. Done by project staff or consultants. Goal: improve tools, techniques, and processes.",
          "If corrective actions are needed from audits, they must be approved through change control processes.",
        ]
      }
    ]
  }
]
