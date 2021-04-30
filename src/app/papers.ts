import { Paper } from './paper';

export const PAPERS: Paper[] = [
  { 
  link: 'https://link.springer.com/chapter/10.1007/978-3-030-41103-9_5', 
  title: 'Incremental Abstract Interpretation', 
  conference: 'LNCS\'20', 
  description: 'Shows how the top-down solver can be employed for the incremental analysis of program code that is undergoing changes.'
  },
  { 
  link: 'https://dl.acm.org/doi/abs/10.1145/3236950.3236967', 
  title: 'Three Improvements to the Top-Down Solver', 
  conference: 'PPDP\'18', 
  description: 'Describes how the top-down solver can be tuned to deal with non-monotonic right-hand sides, store abstract values only where necessary, and to work with side-effecting constraint systems.'
  },
  { 
  link: 'http://dl.acm.org/authorize?N27656', 
  title: 'Static race detection for device drivers: the Goblint approach', 
  conference: 'ASE\'16', 
  description: 'This is the definitive overview of Goblint as a static data race analyzer.'
  },
  { 
  link: 'http://dx.doi.org/10.1007/978-3-662-53413-7_22', 
  title: 'Enforcing Termination of Interprocedural Analysis', 
  conference: 'SAS\'16', 
  description: 'Describes how to make solvers always terminate for interprocedural analysis.'
  },
  { 
  link: 'http://goblint.in.tum.de/papers/flags.pdf', 
  title: 'Precise Analysis of Value-Dependent Synchronization in Priority Scheduled Programs', 
  conference: 'VMCAI\'14', 
  description: 'Describes how to deal with synchronization using integer variables checked by the programmer.'
  },
  { 
  link: 'http://dl.acm.org/authorize?N27657', 
  title: 'How to combine widening and narrowing for non-monotonic systems of equations', 
  conference: 'PLDI\'13', 
  description: 'We had long been searching for a way to introduce widening/narrowings into the demand-driven solvers used in Goblint. This paper shows how to do it.'
  },
  { 
  link: 'http://goblint.in.tum.de/papers/side.pdf', 
  title: 'Side-effecting constraint systems: A Swiss army knife for program analysis', 
  conference: 'APLAS\'12', 
  description: 'Generalizes the global invariant approach to arbitrary side-effecting constraints. This is the theoretical foundation of the Goblint analysis framework.'
  },
  { 
  link: 'http://goblint.in.tum.de/papers/class.pdf', 
  title: 'Class-modular, class-escape and points-to analysis for object-oriented languages', 
  conference: 'NFM\'12', 
  description: 'Describes a class-escape analysis for C++ implemented in Goblint using LLVM as frontend.'
  },
  { 
  link: 'http://dl.acm.org/authorize?N27658', 
  title: 'Static analysis of interrupt-driven programs synchronized via the priority ceiling protocol', 
  conference: 'POPL\'11', 
  description: 'Presents the techniques the analyzer uses to analyze OSEK programs.'
  },
  { 
  link: 'http://goblint.in.tum.de/papers/coq.pdf', 
  title: 'Verifying a Local Generic Solver in Coq', 
  conference: 'SAS\'10', 
  description: 'A verified version of the local solver used in Goblint.'
  },
  { 
  link: 'http://goblint.in.tum.de/papers/regions.pdf', 
  title: 'Region analysis for race detection', 
  conference: 'SAS\'09', 
  description: 'This paper explains the region analysis method that we use to deal with medium-grained locking.'
  },
  { 
  link: 'http://goblint.in.tum.de/papers/must-alias.pdf', 
  title: 'A smooth combination of linear and Herbrand equalities for polynomial time must-alias analysis', 
  conference: 'FM\'09', 
  description: 'Presents the key ideas for dealing with per-element locking'
  },
  { 
  link: 'http://goblint.in.tum.de/papers/goblint.pdf', 
  title: 'Goblint: path-sensitive data race analysis', 
  conference: 'SPLST\'07', 
  description: 'Overview of the race detection analysis and how it uses property-simulation to obtain a path-sensitive analysis.'
  },
  { 
  link: 'http://goblint.in.tum.de/papers/invariants.pdf', 
  title: 'Global invariants for analysing multi-threaded applications', 
  conference: 'NWPT\'02', 
  description: 'Describes the underlying nested-fixpoint style thread-modular analysis engine that enables us to analyze multi-threaded programs soundly.'
  }
];
