import { Paper } from './paper';

export const PAPERS: Paper[] = [
  { 
  link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7984535/pdf/978-3-030-72013-1_Chapter_28.pdf/?tool=EBI', 
  title: 'Goblint: Thread-Modular Abstract Interpretation Using Side-Effecting Constraints:(Competition Contribution)', 
  conference: 'TACAS', 
  year: 2021,
  description: 'Explains the verification approach used in Goblint, its architecture, strengths and weaknesses.',
  citation: '\@article \{PMCID:PMC7984535\,\n\
    Title = \{Goblint: Thread-Modular Abstract Interpretation Using Side-Effecting Constraints : (Competition Contribution)\}\,\n\
    Author = \{Saan\, Simmo and Schwarz\, Michael and Apinis\, Kalmer and Erhard\, Julian and Seidl\, Helmut and Vogler\, Ralf and Vojdani\, Vesal\}\,\n\
    Volume = \{12652\}\,\n\
    Month = \{February\}\,\n\
    Year = \{2021\}\,\n\
    Journal = \{Tools and Algorithms for the Construction and Analysis of Systems27th International Conference\, TACAS 2021\, Held as Part of the European Joint Conferences on Theory and Practice of Software\, ETAPS 2021\, Luxembourg City\, Luxembourg\, March 27 – April 1\, 2021\, Proceedings\, Part II\}\,\n\
    Pages = \{438—442\}\,\n\
    Abstract = \{Goblint is a static analysis framework for C programs specializing in data race analysis. It relies on thread-modular abstract interpretation where thread interferences are accounted for by means of flow-insensitive global invariants.\}\,\n\
    URL = \{https://europepmc.org/articles/PMC7984535\}\,\n\
  \}\n'
  },
  { 
  link: 'https://link.springer.com/chapter/10.1007/978-3-030-41103-9_5', 
  title: 'Incremental Abstract Interpretation', 
  conference: 'LNCS', 
  year: 2020,
  description: 'Shows how the top-down solver can be employed for the incremental analysis of program code that is undergoing changes.',
  citation: '\@Inbook\{Seidl2020\,\n\
    author="Seidl\, Helmut\n\
    and Erhard, Julian\n\
    and Vogler, Ralf"\,\n\
    editor="Di Pierro\, Alessandra\n\
    and Malacaria\, Pasquale\n\
    and Nagarajan\, Rajagopal"\,\n\
    title="Incremental Abstract Interpretation"\,\n\
    bookTitle="From Lambda Calculus to Cybersecurity Through Program Analysis: Essays Dedicated to Chris Hankin on the Occasion of His Retirement"\,\n\
    year="2020"\,\n\
    publisher="Springer International Publishing"\,\n\
    address="Cham"\,\n\
    pages="132--148"\,\n\
    abstract="Non-incremental static analysis by abstract interpretation has to be rerun every time the code to be analyzed changes. For large code bases\, this incurs a significant overhead\, in particular\, if the individual changes to the code are small. In order to accelerate the analysis on changing code bases\, incremental static analysis reuses analysis results computed for earlier versions of the source code where possible. We show that this behavior can seamlessly be achieved for the analysis of C programs if a local generic solver such as the top-down solver is used as the fixed-point engine. This solver maintains a set of stable unknowns for which fixpoint iteration has already stabilized and it recursively destabilizes dependent unknowns on change. We indicate how this machinery can be applied to selectively invalidate results for those unknowns that may be directly or indirectly affected by program changes. We also explain the technical difficulties faced when realizing this basic idea within an analysis infra-structure such as Goblint. We also report the results of a preliminary experimental evaluation concerning the impact of incrementalization on analysis performance."\,\n\
    isbn="978-3-030-41103-9"\,\n\
    doi="10.1007/978-3-030-41103-9_5"\,\n\
    url="https://doi.org/10.1007/978-3-030-41103-9_5"\n\
    }\n'
  },
  { 
  link: 'https://dl.acm.org/doi/abs/10.1145/3236950.3236967', 
  title: 'Three Improvements to the Top-Down Solver', 
  conference: 'PPDP', 
  year: 2018,
  description: 'Describes how the top-down solver can be tuned to deal with non-monotonic right-hand sides, store abstract values only where necessary, and to work with side-effecting constraint systems.',
  citation: ''
  },
  { 
  link: 'http://dl.acm.org/authorize?N27656', 
  title: 'Static race detection for device drivers: the Goblint approach', 
  conference: 'ASE', 
  year: 2016,
  description: 'This is the definitive overview of Goblint as a static data race analyzer.',
  citation: ''
  },
  { 
  link: 'http://dx.doi.org/10.1007/978-3-662-53413-7_22', 
  title: 'Enforcing Termination of Interprocedural Analysis', 
  conference: 'SAS', 
  year: 2016,
  description: 'Describes how to make solvers always terminate for interprocedural analysis.',
  citation: ''
  },
  { 
  link: '/assets/papers/flags.pdf', 
  title: 'Precise Analysis of Value-Dependent Synchronization in Priority Scheduled Programs', 
  conference: 'VMCAI', 
  year: 2014,
  description: 'Describes how to deal with synchronization using integer variables checked by the programmer.',
  citation: ''
  },
  { 
  link: 'http://dl.acm.org/authorize?N27657', 
  title: 'How to combine widening and narrowing for non-monotonic systems of equations', 
  conference: 'PLDI', 
  year: 2013,
  description: 'We had long been searching for a way to introduce widening/narrowings into the demand-driven solvers used in Goblint. This paper shows how to do it.',
  citation: ''
  },
  { 
  link: '/assets/papers/side.pdf', 
  title: 'Side-effecting constraint systems: A Swiss army knife for program analysis', 
  conference: 'APLAS', 
  year: 2012,
  description: 'Generalizes the global invariant approach to arbitrary side-effecting constraints. This is the theoretical foundation of the Goblint analysis framework.',
  citation: ''
  },
  { 
  link: '/assets/papers/class.pdf', 
  title: 'Class-modular, class-escape and points-to analysis for object-oriented languages', 
  conference: 'NFM', 
  year: 2012,
  description: 'Describes a class-escape analysis for C++ implemented in Goblint using LLVM as frontend.',
  citation: ''
  },
  { 
  link: 'http://dl.acm.org/authorize?N27658', 
  title: 'Static analysis of interrupt-driven programs synchronized via the priority ceiling protocol', 
  conference: 'POPL', 
  year: 2011,
  description: 'Presents the techniques the analyzer uses to analyze OSEK programs.',
  citation: ''
  },
  { 
  link: '/assets/papers/coq.pdf', 
  title: 'Verifying a Local Generic Solver in Coq', 
  conference: 'SAS', 
  year: 2010,
  description: 'A verified version of the local solver used in Goblint.',
  citation: ''
  },
  { 
  link: '/assets/papers/regions.pdf', 
  title: 'Region analysis for race detection', 
  conference: 'SAS', 
  year: 2009,
  description: 'This paper explains the region analysis method that we use to deal with medium-grained locking.',
  citation: ''
  },
  { 
  link: '/assets/papers/must-alias.pdf', 
  title: 'A smooth combination of linear and Herbrand equalities for polynomial time must-alias analysis', 
  conference: 'FM', 
  year: 2009,
  description: 'Presents the key ideas for dealing with per-element locking',
  citation: ''
  },
  { 
  link: '/assets/papers/goblint.pdf', 
  title: 'Goblint: path-sensitive data race analysis', 
  conference: 'SPLST', 
  year: 2007,
  description: 'Overview of the race detection analysis and how it uses property-simulation to obtain a path-sensitive analysis.',
  citation: ''
  },
  { 
  link: '/assets/papers/invariants.pdf', 
  title: 'Global invariants for analysing multi-threaded applications', 
  conference: 'NWPT', 
  year: 2002,
  description: 'Describes the underlying nested-fixpoint style thread-modular analysis engine that enables us to analyze multi-threaded programs soundly.',
  citation: ''
  }
];
