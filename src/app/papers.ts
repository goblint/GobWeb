import { Paper } from './paper';

export const PAPERS: Paper[] = [
  {
  link: 'https://dl.acm.org/doi/10.1145/3689492.3690053',
  title: 'Abstract Debuggers: Exploring Program Behaviors using Static Analysis Results',
  conference: 'Onward!',
  year: 2024,
  description: 'Proposes a novel notion of abstract debuggers, which allow developers to explore abstract program states, as computed by sound static analyzers.',
  citation: '@inproceedings{10.1145/3689492.3690053,\n\
    author = {Holter, Karoliine and Hennoste, Juhan Oskar and Lam, Patrick and Saan, Simmo and Vojdani, Vesal},\n\
    title = {Abstract Debuggers: Exploring Program Behaviors using Static Analysis Results},\n\
    year = {2024},\n\
    isbn = {9798400712159},\n\
    publisher = {Association for Computing Machinery},\n\
    address = {New York, NY, USA},\n\
    url = {https://doi.org/10.1145/3689492.3690053},\n\
    doi = {10.1145/3689492.3690053},\n\
    abstract = {Traditional, or concrete, debuggers allow developers to step through programs and explore the corresponding concrete program states—developers can query current values of program variables. This exploration enables developers to formulate and refine hypotheses about program behaviors. We propose the novel notion of abstract debuggers, which allow developers to explore abstract program states, as computed by sound static analyzers. Giving developers the ability to interactively explore abstract states empowers them to work with hypotheses that are true for all program executions: they can examine and rule out false positives, or better understand a static analysis’s declaration that some code is indeed safe. Abstract debuggers’ interfaces, reminiscent of conventional debuggers, aim to make navigating and interpreting static analysis results more straightforward. We have formalized the concept, applied it by implementing a tool that leverages the static analyzer Goblint, and illustrate its usefulness through case studies.},\n\
    booktitle = {Proceedings of the 2024 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software},\n\
    pages = {130-146},\n\
    numpages = {17},\n\
    keywords = {Abstract Interpretation, Automated Software Verification, Data Race Detection, Explainability, Visualization},\n\
    location = {Pasadena, CA, USA},\n\
    series = {Onward! \'24},\n\
    }',
  authors: ['K. Holter', 'J. O. Hennoste', 'P. Lam', 'S. Saan', 'V. Vojdani'],
  video: 'https://youtu.be/bxm53PA0MRA'
  },
  {
  link: 'https://dl.acm.org/doi/10.1145/3678720.3685320',
  title: 'Abstract Debugging with GobPie',
  conference: 'DEBT@ISSTA',
  year: 2024,
  description: 'GobPie features abstract debugging, a novel approach to presenting static analysis results, which complements traditional debugging methods by making program analysis results visible.',
  citation: '@inproceedings{10.1145/3678720.3685320,\n\
    author = {Holter, Karoliine and Hennoste, Juhan Oskar and Saan, Simmo and Lam, Patrick and Vojdani, Vesal},\n\
    title = {Abstract Debugging with GobPie},\n\
    year = {2024},\n\
    isbn = {9798400711107},\n\
    publisher = {Association for Computing Machinery},\n\
    address = {New York, NY, USA},\n\
    url = {https://doi.org/10.1145/3678720.3685320},\n\
    doi = {10.1145/3678720.3685320},\n\
    abstract = {GobPie is an IDE integration designed to enhance the usability and explainability of the abstract interpretation-based static analyzer Goblint. GobPie features abstract debugging, a novel approach to presenting static analysis results, which complements traditional debugging methods by making program analysis results visible. Its goal is to help resolve rare but real software issues. Unlike traditional debugging, which proceeds step-by-step to observe concrete states, abstract debugging uses static analysis results to simulate the same steps, offering insights into all possible execution paths.},\n\
    booktitle = {Proceedings of the 2nd ACM International Workshop on Future Debugging Techniques},\n\
    pages = {32-33},\n\
    numpages = {2},\n\
    keywords = {Abstract Interpretation, Automated Software Verification, Data Race Detection, Explainability, Visualization},\n\
    location = {Vienna, Austria},\n\
    series = {DEBT 2024}\n\
    }',
  authors: ['K. Holter', 'J. O. Hennoste', 'S. Saan', 'P. Lam', 'V. Vojdani'],
  video: 'https://youtu.be/KtLFdxMAdD8'
  },
  {
  link: 'https://link.springer.com/article/10.1007/s10009-024-00768-9',
  title: 'Interactive abstract interpretation: reanalyzing multithreaded C programs for cheap',
  conference: 'STTT',
  year: 2024,
  description: 'Proposes a framework for interactive abstract interpretation of multithreaded C code to put sound program analysis at the fingertips of the software developer.',
  citation: '@article{Erhard2024,\n\
    author = {Erhard, Julian and Saan, Simmo and Tilscher, Sarah and Schwarz, Michael and Holter, Karoliine and Vojdani, Vesal and Seidl, Helmut},\n\
    title = {Interactive abstract interpretation: reanalyzing multithreaded C programs for cheap},\n\
    journal = {International Journal on Software Tools for Technology Transfer},\n\
    year = {2024},\n\
    issn = {14332779},\n\
    publisher = {Springer Science and Business Media Deutschland GmbH},\n\
    url = {https://link.springer.com/article/10.1007/s10009-024-00768-9},\n\
    doi = {10.1007/s10009-024-00768-9},\n\
    abstract = {To put sound program analysis at the fingertips of the software developer, we propose a framework for interactive abstract interpretation of multithreaded C code. Abstract interpretation provides sound analysis results, but can be quite costly in general. To achieve quick response times, we incrementalize the analysis infrastructure, including postprocessing, without necessitating any modifications to the analysis specifications themselves. We rely on the local generic fixpoint engine TD – which we enhance with reluctant destabilization to minimize reanalysis effort. Dedicated further improvements support precise incremental analysis of program properties that include concurrency deficiencies such as data-races. The framework has been implemented in the static analyzer Goblint, and combined with the MagpieBridge framework to relay findings to IDEs. We evaluate our implementation w.r.t. the yard sticks of response time and consistency. We also provide examples of program development highlighting the usability of our approach.},\n\
    keywords = {Static Analysis, Abstract Interpretation, Incremental Static Analysis},\n\
    }',
  authors: ['J. Erhard', 'S. Saan', 'S. Tilscher', 'M. Schwarz', 'K. Holter', 'V. Vojdani', 'H. Seidl'],
  video: null
  },
  {
  link: 'https://dl.acm.org/doi/proceedings/10.1145/3652588',
  title: 'When to Stop Going Down the Rabbit Hole: Taming Context-Sensitivity on the Fly',
  conference: 'SOAP@PLDI',
  year: 2024,
  description: 'Presents a general framework for context-sensitivity that allows formalizing not only known approaches such as full context or call strings but also combinations of these. We propose three generic lifters in this framework to bound the number of encountered contexts on the fly.',
  citation: '@inproceedings{10.1145/3652588.3663321,\n\
    author = {Erhard, Julian and Schinabeck, Johanna Franziska and Schwarz, Michael and Seidl, Helmut},\n\
    title = {When to Stop Going Down the Rabbit Hole: Taming Context-Sensitivity on the Fly},\n\
    year = {2024},\n\
    isbn = {9798400706219},\n\
    publisher = {Association for Computing Machinery},\n\
    address = {New York, NY, USA},\n\
    url = {https://doi.org/10.1145/3652588.3663321},\n\
    doi = {10.1145/3652588.3663321},\n\
    abstract = {Context-sensitive analysis of programs containing recursive procedures may be expensive, in particular, when using expressive domains, rendering the set of possible contexts large or even infinite. Here, we present a general framework for context-sensitivity that allows formalizing not only known approaches such as full context or call strings but also combinations of these. We propose three generic lifters in this framework to bound the number of encountered contexts on the fly. These lifters are implemented within the abstract interpreter Goblint and compared to existing approaches to context-sensitivity on the SV-COMP benchmark suite. On a subset of recursive benchmarks, all proposed lifters manage to reduce the number of stack overflows and timeouts compared to a full context approach, with one of them improving the number of correct verdicts by 31\% and showing promising results on the considered SV-COMP categories.},\n\
    booktitle = {Proceedings of the 13th ACM SIGPLAN International Workshop on the State Of the Art in Program Analysis},\n\
    pages = {35-44},\n\
    numpages = {10},\n\
    keywords = {abstract interpretation, context-sensitive analysis, software verification, static program analysis},\n\
    location = {Copenhagen, Denmark},\n\
    series = {SOAP 2024}\n\
    }',
  authors: ['J. Erhard', 'J. F. Schinabeck', 'M. Schwarz', 'H. Seidl'],
  video: '//youtu.be/5ylZroZT1gw'
  },
  {
  link: 'https://link.springer.com/article/10.1007/s10009-024-00755-0',
  title: 'Non-numerical weakly relational domains',
  conference: 'STTT',
  year: 2024,
  description: 'The weakly relational domain of Octagons offers a decent compromise between precision and efficiency for numerical properties. Here, we are concerned with the construction of non-numerical relational domains. We provide a general construction of weakly relational domains, which we exemplify with an extension of constant propagation by disjunctions.',
  citation: '@article{10.1007/s10009-024-00755-0,\n\
    author = {Seidl, Helmut and Erhard, Julian and Tilscher, Sarah and Schwarz, Michael},\n\
    year = {2024},\n\
    month = {06},\n\
    pages = {1-16},\n\
    title = {Non-numerical weakly relational domains},\n\
    journal = {International Journal on Software Tools for Technology Transfer},\n\
    doi = {10.1007/s10009-024-00755-0}\n\
    }',
  authors: ['H. Seidl', 'J. Erhard', 'S. Tilscher', 'M. Schwarz'],
  video: null
  },
  {
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-56222-8_16',
    title: '2-Pointer Logic',
    conference: 'Taming the Infinities of Concurrency: Essays Dedicated to Javier Esparza on the Occasion of His 60th Birthday',
    year: 2024,
    description: 'For reasoning about properties of pointers, we consider conjunctions of equalities and dis-equalities\
    between terms built up from address constants by addition of offsets and dereferencing. We call the\
    resulting class of formulas 2-pointer logic. We introduce a quantitative version of congruence closure to\
    provide polynomial time algorithms for deciding satisfiability as well as implication between formulas. By\
    generalizing quantitative congruence closure to quantitative finite automata, we succeed in constructing\
    canonical normal forms so that checking of equivalence between conjunctions reduces to syntactic\
    equality.',
    citation: '@Inbook{Seidl2024,\n\
      author="Seidl, Helmut\n\
      and Erhard, Julian\n\
      and Schwarz, Michael\n\
      and Tilscher, Sarah",\n\
      editor="Kiefer, Stefan\n\
      and K{\\v{r}}et{\'i}nsk{\'y}, Jan\n\
      and Ku{\\v{c}}era, Anton{\'i}n",\n\
      title="2-Pointer Logic",\n\
      bookTitle="Taming the Infinities of Concurrency: Essays Dedicated to Javier Esparza on the Occasion of His 60th Birthday",\n\
      year="2024",\n\
      publisher="Springer Nature Switzerland",\n\
      address="Cham",\n\
      pages="281--307",\n\
       isbn="978-3-031-56222-8",\n\
      doi="10.1007/978-3-031-56222-8_16",\n\
      url="https://doi.org/10.1007/978-3-031-56222-8_16"\n\
      }',
      authors: ['H. Seidl', 'J. Erhard', 'M. Schwarz', 'S. Tilscher'],
  video: null
  },
  {
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-57256-2_25',
    title: 'Goblint: Abstract Interpretation for Memory Safety and Termination',
    conference: 'TACAS',
    year: 2024,
    description: 'Reports on Goblint\'s participation in SV-Comp and the new support for memory safety and termination.',
    citation: '@InProceedings{10.1007/978-3-031-57256-2_25,\n\
    author="Saan, Simmo\n\
    and Erhard, Julian\n\
    and Schwarz, Michael\n\
    and Bozhilov, Stanimir\n\
    and Holter, Karoliine\n\
    and Tilscher, Sarah\n\
    and Vojdani, Vesal\n\
    and Seidl, Helmut",\n\
    editor="Finkbeiner, Bernd\n\
    and Kov{\\\'a}cs, Laura",\n\
    title="Goblint: Abstract Interpretation for Memory Safety and Termination",\n\
    booktitle="Tools and Algorithms for the Construction and Analysis of Systems",\n\
    year="2024",\n\
    publisher="Springer Nature Switzerland",\n\
    address="Cham",\n\
    pages="381--386",\n\
    isbn="978-3-031-57256-2"\n\
    }',
  authors: ['S. Saan',  'J. Erhard', 'M. Schwarz', 'S. Bozhilov', 'K. Holter', 'S. Tilscher', 'V. Vojdani', 'H. Seidl'],
  video: null
  },
  {
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-57256-2_17',
    title: 'Goblint Validator: Correctness Witness Validation by Abstract Interpretation',
    conference: 'TACAS',
    year: 2024,
    description: 'Reports on Goblint Validator\'s participation in SV-Comp.',
    citation: '@InProceedings{10.1007/978-3-031-57256-2_17,\n\
    author="Saan, Simmo\n\
    and Erhard, Julian\n\
    and Schwarz, Michael\n\
    and Bozhilov, Stanimir\n\
    and Holter, Karoliine\n\
    and Tilscher, Sarah\n\
    and Vojdani, Vesal\n\
    and Seidl, Helmut",\n\
    editor="Finkbeiner, Bernd\n\
    and Kov{\\\'a}cs, Laura",\n\
    title="Goblint Validator: Correctness Witness Validation by Abstract Interpretation",\n\
    booktitle="Tools and Algorithms for the Construction and Analysis of Systems",\n\
    year="2024",\n\
    publisher="Springer Nature Switzerland",\n\
    address="Cham",\n\
    pages="335--340",\n\isbn="978-3-031-57256-2"\n\
    }',
  authors: ['S. Saan',  'J. Erhard', 'M. Schwarz', 'S. Bozhilov', 'K. Holter', 'S. Tilscher', 'V. Vojdani', 'H. Seidl'],
  video: null
  },
  {
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-50524-9_4',
    title: 'Correctness Witness Validation by Abstract Interpretation',
    conference: 'VMCAI',
    year: 2024,
    citation: '@inproceedings{DBLP:conf/vmcai/SaanSESTV24,\n\
    author       = {Simmo Saan and\n\
                    Michael Schwarz and\n\
                    Julian Erhard and\n\
                    Helmut Seidl and\n\
                    Sarah Tilscher and\n\
                    Vesal Vojdani},\n\
    editor       = {Rayna Dimitrova and\n\
                    Ori Lahav and\n\
                    Sebastian Wolff},\n\
    title        = {Correctness Witness Validation by Abstract Interpretation},\n\
    booktitle    = {Verification, Model Checking, and Abstract Interpretation - 25th International\n\
                    Conference, {VMCAI} 2024, London, United Kingdom, January 15-16, 2024,\n\
                    Proceedings, Part {I}},\n\
    series       = {Lecture Notes in Computer Science},\n\
    volume       = {14499},\n\
    pages        = {74--97},\n\
    publisher    = {Springer},\n\
    year         = {2024},\n\
    url          = {https://doi.org/10.1007/978-3-031-50524-9\_4},\n\
    doi          = {10.1007/978-3-031-50524-9\_4},\n\
    timestamp    = {Sat, 10 Feb 2024 18:04:44 +0100},\n\
    biburl       = {https://dblp.org/rec/conf/vmcai/SaanSESTV24.bib},\n\
    bibsource    = {dblp computer science bibliography, https://dblp.org}\n\
    }',
    description: 'Witnesses record automated program analysis results and make them exchangeable. To validate correctness witnesses through abstract interpretation, we introduce a novel abstract operation unassume.\
    This operator incorporates witness invariants into the abstract program state. Given suitable invariants, the unassume operation can accelerate fixpoint convergence and yield more precise results.\
    We demonstrate the feasibility of this approach by augmenting an abstract interpreter with unassume operators and evaluating the impact of incorporating witnesses on performance and precision.\
    ',
    authors: ['S. Saan', 'M. Schwarz', 'J. Erhard', 'H. Seidl', 'S. Tilscher', 'V. Vojdani'],
  video: 'https://youtu.be/DgJRwysM5io'
  },
  {
    link: 'https://rdcu.be/dpwHX', // Springer Authorizer until they finally make it OpenAccess as contractually agreed to
    title: 'Octagons Revisited: Elegant Proofs and Simplified Algorithms',
    conference: 'SAS',
    year: 2023,
    description: 'Here, we provide simplified cubic time\
    algorithms for computing the closure of Octagon abstract relations both\
    over the rationals and the integers which avoid introducing auxiliary\
    variables. They are based on a more general formulation by means of\
    2-projective domains which allows for an elegant short correctness proof.\
    The notion of 2-projectivity also lends itself to efficient algorithms for\
    incremental normalization. For the Octagon domain, we also provide\
    an improved construction for linear programming based best abstract\
    transformers for affine assignments.',
    citation: '@inproceedings{DBLP:conf/sas/SchwarzS23,\n\
      author       = {Michael Schwarz and\n\
                      Helmut Seidl},\n\
      editor       = {Manuel V. Hermenegildo and\n\
                      Jos{\\\'{e}} F. Morales},\n\
      title        = {Octagons Revisited - Elegant Proofs and Simplified Algorithms},\n\
      booktitle    = {Static Analysis - 30th International Symposium, {SAS} 2023, Cascais,\n\
                      Portugal, October 22-24, 2023, Proceedings},\n\
      series       = {Lecture Notes in Computer Science},\n\
      volume       = {14284},\n\
      pages        = {485--507},\n\
      publisher    = {Springer},\n\
      year         = {2023},\n\
      url          = {https://doi.org/10.1007/978-3-031-44245-2_21},\n\
      doi          = {10.1007/978-3-031-44245-2_21},\n\
      timestamp    = {Thu, 09 Nov 2023 21:13:05 +0100},\n\
      biburl       = {https://dblp.org/rec/conf/sas/SchwarzS23.bib},\n\
      bibsource    = {dblp computer science bibliography, https://dblp.org}\n\
    }',
    // Escaping as above is sufficient, yields correct output when copied.
    authors: ['M. Schwarz', 'H. Seidl'],
  video: 'https://youtu.be/qgbB1BecPKM'
  },
  {
    link: 'https://dl.acm.org/doi/abs/10.1145/3589250.3596140',
    title: 'When Long Jumps Fall Short: Control-Flow Tracking and Misuse Detection for Non-local Jumps in C',
    conference: 'SOAP@PLDI',
    year: 2023,
    description: 'We design novel analyses to both track control-flow of programs using setjmp/longjmp and to detect misuses of these non-local jumps leading to Undefined Behavior.',
    citation: '\@inproceedings\{DBLP:conf/pldi/0007EVSS23\,\n\
    author       = \{Michael Schwarz and\n\
                    Julian Erhard and\n\
                    Vesal Vojdani and\n\
                    Simmo Saan and\n\
                    Helmut Seidl\}\,\n\
    editor       = \{Pietro Ferrara and\n\
                    Liana Hadarean\},\n\
    title        = \{When Long Jumps Fall Short: Control-Flow Tracking and Misuse Detection for Non-local Jumps in \{C\}\},\n\
    booktitle    = \{Proceedings of the 12th \{ACM\} \{SIGPLAN\} International Workshop on\n\
                    the State Of the Art in Program Analysis\, \{SOAP\} 2023\, Orlando\, FL\,\n\
                    USA\, 17 June 2023\}\,\n\
    pages        = \{20--26\}\,\n\
    publisher    = \{\{ACM\}\}\,\n\
    year         = \{2023\}\,\n\
    url          = \{https://doi.org/10.1145/3589250.3596140\}\,\n\
    doi          = \{10.1145/3589250.3596140\}\,\n\
  \}\n',
  authors: ['M.Schwarz', 'J. Erhard', 'V. Vojdani', 'S. Saan', 'H. Seidl'],
  video: null
  },
  {
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-30044-8_2',
    title: 'Clustered Relational Thread-Modular Abstract Interpretation with Local Traces',
    conference: 'ESOP',
    year: 2023,
    description: 'We construct novel thread-modular analyses tracking relational information for clusters of global variables and provide a framework to increase the precision of analyses by splitting control locations based on abstractions of local traces. As one instance, we obtain an analysis of dynamic thread creation and joining. Interestingly, tracking less relational information for globals may result in higher precision.',
    citation: '\@inproceedings\{DBLP:conf/esop/SchwarzSSEV23\,\n\
      author       = \{Michael Schwarz and\n\
                      Simmo Saan and\n\
                      Helmut Seidl and\n\
                      Julian Erhard and\n\
                      Vesal Vojdani\}\,\n\
      editor       = \{Thomas Wies\}\,\n\
      title        = \{Clustered Relational Thread-Modular Abstract Interpretation with Local\n\
                      Traces\}\,\n\
      booktitle    = \{Programming Languages and Systems - 32nd European Symposium on Programming\,\n\
                      \{ESOP\} 2023, Held as Part of the European Joint Conferences on Theory\n\
                      and Practice of Software\, \{ETAPS\} 2023\, Paris\, France\, April 22-27\,\n\
                      2023\, Proceedings\}\,\n\
      series       = \{Lecture Notes in Computer Science\}\,\n\
      volume       = \{13990\}\,\n\
      pages        = \{28--58\}\,\n\
      publisher    = \{Springer\}\,\n\
      year         = \{2023\}\,\n\
      url          = \{https://doi.org/10.1007/978-3-031-30044-8\_2}\,\n\
      doi          = \{10.1007/978-3-031-30044-8\_2\}\,\n\
      timestamp    = \{Sat\, 13 May 2023 01:07:18 +0200\}\,\n\
      biburl       = \{https://dblp.org/rec/conf/esop/SchwarzSSEV23.bib\}\,\n\
      bibsource    = \{dblp computer science bibliography\, https://dblp.org\}\n\
    \}\n',
    authors: ['M. Schwarz', 'S. Saan', 'H. Seidl', 'J. Erhard', 'V. Vojdani'],
  video: null
  },
  {
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-30820-8_34',
    title: 'Goblint: Autotuning Thread-Modular Abstract Interpretation - (Competition Contribution)',
    conference: 'TACAS',
    year: 2023,
    description: 'Reports on Goblint\'s participation in SV-Comp and the new autotuner feature.',
    citation: '\@inproceedings\{DBLP:conf/tacas/SaanSEPSTV23\,\n\
    author       = \{Simmo Saan and\n\
                    Michael Schwarz and\n\
                    Julian Erhard and\n\
                    Manuel Pietsch and\n\
                    Helmut Seidl and\n\
                    Sarah Tilscher and\n\
                    Vesal Vojdani\}\,\n\
    editor       = \{Sriram Sankaranarayanan and\n\
                    Natasha Sharygina\}\,\n\
    title        = \{Goblint: Autotuning Thread-Modular Abstract Interpretation - (Competition\n\
                    Contribution)\}\,\n\
    booktitle    = \{Tools and Algorithms for the Construction and Analysis of Systems\n\
                    - 29th International Conference\, \{TACAS\} 2023\, Held as Part of the\n\
                    European Joint Conferences on Theory and Practice of Software\, \{ETAPS\}\n\
                    2022\, Paris\, France\, April 22-27\, 2023\, Proceedings\, Part \{II\}\}\,\n\
    series       = \{Lecture Notes in Computer Science\}\,\n\
    volume       = \{13994\}\,\n\
    pages        = \{547--552},\n\
    publisher    = \{Springer\}\,\n\
    year         = \{2023\}\,\n\
    url          = \{https://doi.org/10.1007/978-3-031-30820-8\_34\}\,\n\
    doi          = \{10.1007/978-3-031-30820-8\_34\}\,\n\
    timestamp    = \{Sat\, 13 May 2023 01:07:18 +0200\}\,\n\
    biburl       = \{https://dblp.org/rec/conf/tacas/SaanSEPSTV23.bib\}\,\n\
    bibsource    = \{dblp computer science bibliography\, https://dblp.org\}\n\
  \}\n',
  authors: ['S. Saan', 'M. Schwarz', 'J. Erhard', 'M. Pietsch', 'H. Seidl', 'S. Tilscher', 'V. Vojdani'],
  video: null
  },
  {
    link: 'https://arxiv.org/abs/2209.10445',
    title: 'Interactive Abstract Interpretation: Reanalyzing Whole Programs for Cheap',
    conference: 'arXiv CoRR',
    year: 2022,
    description: 'Preprint of our work on efficient incremental analysis of large programs.\
      Demonstrates a generic approach to incrementalize any analysis and shows how to put it at the finger-tips of the developers.',
    citation: '\@misc\{https://doi.org/10.48550/arxiv.2209.10445\,\n\
      doi = \{10.48550/ARXIV.2209.10445\}\,\n\
      url = \{https://arxiv.org/abs/2209.10445\}\,\n\
      author = \{Erhard, Julian and Saan, Simmo and Tilscher, Sarah and Schwarz, Michael and Holter, Karoliine and Vojdani, Vesal and Seidl, Helmut\}\,\n\
      keywords = \{Programming Languages (cs.PL), FOS: Computer and information sciences, FOS: Computer and information sciences, D.2.4\}\,\n\
      title = \{Interactive Abstract Interpretation: Reanalyzing Whole Programs for Cheap\}\,\n\
      publisher = \{arXiv\}\,\n\
      year = \{2022\}\,\n\
      copyright = \{arXiv.org perpetual, non-exclusive license\}\,\n\
      \}\n',
      authors: ['J. Erhard', 'S. Saan', 'S. Tilscher', 'M. Schwarz', 'K. Holter', 'V. Vojdani', 'H. Seidl'],
  video: null
  },
  {
    link: 'https://link.springer.com/chapter/10.1007/978-981-19-9601-6_9',
    title: 'The Top-Down Solver: An Exercise in A²I',
    conference: 'CSV',
    year: 2022,
    description: 'Demonstrates how a top-down solver can be constructed starting from a simple evaluator of non-recursive functions by abstract interpretation to the abstract interpreter (A²I, as proposed by Cousot).',
    citation: '@Inbook\{Tilscher2023\,\
      author="Tilscher\, Sarah\
      and Stade\, Yannick\
      and Schwarz\, Michael\
      and Vogler\, Ralf\
      and Seidl\, Helmut"\,\
      editor="Arceri\, Vincenzo\
      and Cortesi\, Agostino\
      and Ferrara\, Pietro\
      and Olliaro\, Martina"\,\
      title="The Top-Down Solver---An Exercise in A^2I"\,\
      bookTitle="Challenges of Software Verification"\,\
      year="2023"\,\
      publisher="Springer Nature Singapore"\,\
      address="Singapore"\,\
      pages="157--179"\,\
      isbn="978-981-19-9601-6"\,\
      doi="10.1007/978-981-19-9601-6_9"\,\
      \}',
      authors: ['S. Tilscher', 'Y. Stade', 'M. Schwarz', 'R. Vogler', 'H. Seidl'],
  video: 'https://youtu.be/ZJZRThqF5WE'
  },
  {
    link: 'https://www.cambridge.org/core/journals/mathematical-structures-in-computer-science/article/three-improvements-to-the-topdown-solver/CE9A5F2A3FD62ECF9E6683598322CD52',
    title: 'Three Improvements to the Top-Down Solver',
    conference: 'MSCS',
    year: 2022,
    description: 'Gives a comprehensive account of the local solver TD3 used in Goblint and why it is especially suited to the context-sensitive analysis of multi-threaded programs. Extended Version of our PPDP \'18 paper.',
    citation: '\@article\{seidl_vogler_2021\,\n\
      title=\{Three improvements to the top-down solver\}\,\n\
      volume=\{31\}\,\n\
      DOI=\{10.1017/S0960129521000499\},\n\
      number=\{9\}\,\n\
      journal=\{Mathematical Structures in Computer Science\}\,\n\
      publisher=\{Cambridge University Press\}\,\n\
      author=\{Seidl, Helmut and Vogler, Ralf\}\,\n\
      year=\{2021\}\,\n\
      pages=\{1090–1134\}\,\n\
      \}\n',
      authors: ['H. Seidl', 'R. Vogler'],
  video: null
  },
  {
    link: 'https://link.springer.com/chapter/10.1007/978-3-030-88806-0_18',
    title: 'Improving Thread-Modular Abstract Interpretation',
    conference: 'SAS',
    year: 2021,
    description: 'Describes various thread-modular non-relational value analyses that are implemented in Goblint as abstractions of a local trace semantics. ',
    citation: '\@InProceedings\{10.1007/978-3-030-88806-0_18,\n\
      author=\{Schwarz, Michael\n\
      and Saan, Simmo\n\
      and Seidl, Helmut\n\
      and Apinis, Kalmer\n\
      and Erhard, Julian\n\
      and Vojdani, Vesal\},\n\
      editor=\{Dr\{\\u{a\}\}goi, Cezara\n\
      and Mukherjee, Suvam\n\
      and Namjoshi, Kedar\},\n\
      title=\{Improving Thread-Modular Abstract Interpretation\},\n\
      booktitle=\{Static Analysis\},\n\
      year=\{2021\},\n\
      publisher=\{Springer International Publishing\},\n\
      address=\{Cham\},\n\
      pages=\{359--383\},\n\
      abstract=\{We give thread-modular non-relational value analyses as abstractions of a local trace semantics. The semantics as well as the analyses are formulated by means of global invariants and side-effecting constraint systems. We show that a generalization of the analysis provided by the static analyzer Goblint as well as a natural improvement of Antoine Min\{\\\'e\}\'s approach can be obtained as instances of this general scheme. We show that these two analyses are incomparable w.r.t. precision and provide a refinement which improves on both precision-wise. We also report on a preliminary experimental comparison of the given analyses on a meaningful suite of benchmarks.\},\n\
      isbn=\{978-3-030-88806-0\}\n\
      \}',
      authors: ['M. Schwarz', 'S. Saan', 'H. Seidl', 'K. Apinis', 'J. Erhard', 'V. Vojdani'],
  video: 'https://youtu.be/hWHvePmJY2k'
  },
  {
  link: 'https://link.springer.com/chapter/10.1007%2F978-3-030-72013-1_28',
  title: 'Goblint: Thread-Modular Abstract Interpretation Using Side-Effecting Constraints:(Competition Contribution)',
  conference: 'TACAS',
  year: 2021,
  description: 'Reports on Goblint\'s participation in SV-Comp.',
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
  \}\n',
  authors: ['S. Saan', 'M. Schwarz', 'K. Apinis', 'J. Erhard', 'H. Seidl', 'R. Vogler', 'V. Vojdani'],
  video: 'https://youtu.be/L_UmMI84vpE'
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
    }\n',
    authors: ['H. Seidl', 'J. Erhard', 'R. Vogler'],
  video: null
  },
  {
  link: 'https://dl.acm.org/doi/abs/10.1145/3236950.3236967',
  title: 'Three Improvements to the Top-Down Solver',
  conference: 'PPDP',
  year: 2018,
  description: 'Describes how the top-down solver can be tuned to deal with non-monotonic right-hand sides, store abstract values only where necessary, and to work with side-effecting constraint systems.',
  citation: '\@inproceedings\{10.1145\/3236950.3236967\,\n\
    author = \{Seidl\, Helmut and Vogler\, Ralf\}\,\n\
    title = \{Three Improvements to the Top-Down Solver}\,\n\
    year = \{2018\}\,\n\
    isbn = \{9781450364416\}\,\n\
    publisher = \{Association for Computing Machinery\}\,\n\
    address = \{New York\, NY\, USA\}\,\n\
    url = \{https://doi.org/10.1145/3236950.3236967\}\,\n\
    doi = \{10.1145\/3236950.3236967\}\,\n\
    abstract = \{The local solver TD is a generic fixpoint engine which explores a given system of equations on demand. It has been successfully applied to the interprocedural analysis of procedural languages. The solver TD gains efficiency by detecting variable dependencies on the fly. This algorithm has been recently extended to deal with widening and narrowing as well. In particular\, it has been equipped with an automatic detection of widening and narrowing points. That version\, however\, is only guaranteed to terminate under two conditions: only finitely many variables are encountered\, and all right-hand sides are monotonic. While the first condition is unavoidable\, the second limits the applicability of the solver. Another limitation is that the solver maintains the current abstract values of all encountered variables in one data-structure --- thus prohibiting interprocedural analyses to scale to larger programs.In the present paper\, we therefore extend the top-down solver TD in three ways. First\, we indicate how the restriction to monotonic right-hand sides can be lifted. Then we show how the solver can be tuned to store abstract values only when it turns out to be inevitable. Finally\, we also show how the solver can be extended to side-effeeting equation systems\, which have successfully been applied to seamlessly combine context-sensitive with flow-insensitive analyses.},\n\
    booktitle = \{Proceedings of the 20th International Symposium on Principles and Practice of Declarative Programming\}\,\n\
    articleno = \{21\}\,\n\
    numpages = \{14\}\,\n\
    keywords = \{local solvers\, abstract interpretation\, static analysis\}\,\n\
    location = \{Frankfurt am Main\, Germany}\,\n\
    series = \{PPDP \'18\}\n\
    \}\n',
    authors: ['H. Seidl', 'R. Vogler'],
  video: null
  },
  {
  link: 'https://link.springer.com/chapter/10.1007/978-3-319-68167-2_1',
  title: 'Proving Absence of Starvation by Means of Abstract Interpretation and Model Checking',
  conference: 'ATVA',
  year: 2017,
  description: 'Describes how to combine Abstract Interpretation and Model Checking to prove the absence of starvation.',
  citation: '@InProceedings\{10.1007/978-3-319-68167-2_1\,\n\
    author=\{Seidl\, Helmut\n\
    and Vogler, Ralf\},\n\
    editor=\{D\'Souza\, Deepak\n\
    and Narayan Kumar\, K.\}\,\n\
    title=\{Proving Absence of Starvation by Means of Abstract Interpretation and Model Checking\}\,\n\
    booktitle=\{Automated Technology for Verification and Analysis\}\,\n\
    year=\{2017\}\,\n\
    publisher=\{Springer International Publishing\}\,\n\
    address=\{Cham\}\,\n\
    pages=\{3--22\}\,\n\
    isbn=\{978-3-319-68167-2\}\n\
    \}\n',
    authors: ['H. Seidl', 'R. Vogler'],
  video: null
  },
  {
  link: 'http://dl.acm.org/authorize?N27656',
  title: 'Static race detection for device drivers: the Goblint approach',
  conference: 'ASE',
  year: 2016,
  description: 'This is the definitive overview of Goblint as a static data race analyzer.',
  citation: '@inproceedings\{10.1145/2970276.2970337\,\n\
    author = \{Vojdani\, Vesal and Apinis, Kalmer and R\~{o}tov\, Vootele and Seidl\, Helmut and Vene\, Varmo and Vogler\, Ralf\}\,\n\
    title = \{Static Race Detection for Device Drivers: The Goblint Approach\}\,\n\
    year = \{2016\}\,\n\
    isbn = \{9781450338455\}\,\n\
    publisher = \{Association for Computing Machinery\}\,\n\
    address = \{New York\, NY\, USA\}\,\n\
    url = \{https://doi.org/10.1145/2970276.2970337\}\,\n\
    doi = \{10.1145/2970276.2970337\}\,\n\
    abstract = \{ Device drivers rely on fine-grained locking to ensure safe access to shared data structures. For human testers\, concurrency makes such code notoriously hard to debug; for automated reasoning\, dynamically allocated memory and low-level pointer manipulation poses significant challenges. We present a flexible approach to data race analysis\, implemented in the open source Goblint static analysis framework\, that combines different pointer and value analyses in order to handle a wide range of locking idioms\, including locks allocated dynamically as well as locks stored in arrays. To the best of our knowledge\, this is the most ambitious effort\, having lasted well over ten years\, to create a fully automated static race detection tool that can deal with most of the intricate locking schemes found in Linux device drivers. Our evaluation shows that these analyses are sufficiently precise\, but practical use of these techniques requires inferring environmental and domain-specific assumptions. \}\,\n\
    booktitle = \{Proceedings of the 31st IEEE/ACM International Conference on Automated Software Engineering\}\,\n\
    pages = \{391–402\}\,\n\
    numpages = \{12\}\,\n\
    keywords = \{abstract interpretation\, Concurrency\, race condition\}\,\n\
    location = \{Singapore\, Singapore}\,\n\
    series = \{ASE 2016\}\n\
    \}\n',
    authors: ['V. Vojdani', 'K. Apinis', 'V. Rõtov', 'H. Seidl', 'V. Vene', 'R. Vogler'],
  video: null
  },
  {
  link: 'http://dx.doi.org/10.1007/978-3-662-53413-7_22',
  title: 'Enforcing Termination of Interprocedural Analysis',
  conference: 'SAS',
  year: 2016,
  description: 'Describes how to make solvers always terminate for interprocedural analysis.',
  citation: '\@InProceedings\{10.1007\/978-3-662-53413-7_22\,\n\
    author=\"Schulze Frielinghaus\, Stefan\n\
    and Seidl\, Helmut\n\
    and Vogler\, Ralf\"\,\n\
    editor=\"Rival\, Xavier\"\,\n\
    title=\"Enforcing Termination of Interprocedural Analysis\"\,\n\
    booktitle=\"Static Analysis\"\,\n\
    year=\"2016\"\,\n\
    publisher=\"Springer Berlin Heidelberg\"\,\n\
    address=\"Berlin\, Heidelberg\"\,\n\
    pages=\"447--468\"\,\n\
    abstract=\"Interprocedural analysis by means of partial tabulation of summary functions may not terminate when the same procedure is analyzed for infinitely many abstract calling contexts or when the abstract domain has infinite strictly ascending chains. As a remedy\, we present a novel local solver for general abstract equation systems\, be they monotonic or not\, and prove that this solver fails to terminate only when infinitely many variables are encountered. We clarify in which sense the computed results are sound. Moreover\, we show that interprocedural analysis performed by this novel local solver\, is guaranteed to terminate for all non-recursive programs --- irrespective of whether the complete lattice is infinite or has infinite strictly ascending or descending chains\.\"\,\n\
    isbn=\"978-3-662-53413-7\"\n\
    }\n',
    authors: ['S. Schulze Frielinghaus', 'H. Seidl', 'R. Vogler'],
  video: null
  },
  {
  link: 'https://link.springer.com/chapter/10.1007/978-3-319-27810-0_14',
  title: 'Enhancing Top-Down Solving with Widening and Narrowing',
  conference: 'International Conference on Semantics, Logics, and Calculi',
  year: 2016,
  description: 'Presents an enhancement of the generic fixpoint algorithm TD which can deal with widening and narrowing even for non-monotonic systems of equations.',
  citation: '\@Inbook{Apinis2016\,\n\
    author=\"Apinis\, Kalmer and Seidl\, Helmut and Vojdani\, Vesal\"\,\n\
    editor=\"Probst, Christian W. and Hankin, Chris and Hansen, Ren\{\'e\} Rydhof\"\,\n\
    title=\"Enhancing Top-Down Solving with Widening and Narrowing\"\,\n\
    bookTitle=\"Semantics, Logics, and Calculi: Essays Dedicated to Hanne Riis Nielson and Flemming Nielson on the Occasion of Their 60th Birthdays\"\,\n\
    year=\"2016\"\,\n\
    publisher=\"Springer International Publishing\"\,\n\
    address=\"Cham\"\,\n\
    pages=\"272--288\"\,\n\
    abstract=\"We present an enhancement of the generic fixpoint algorithm TD which can deal with widening and narrowing even for non-monotonic systems of equations. In contrast to corresponding enhancements proposed for other standard fixpoint algorithms\, no extra priorities on variables are required. Still\, a mechanism can be devised so that occurrences of the widening/narrowing operator are inserted as well as removed dynamically.\"\,\n\
    isbn=\"978-3-319-27810-0\"\,\n\
    doi=\"10.1007/978-3-319-27810-0_14\"\,\n\
    url=\"https://doi.org/10.1007/978-3-319-27810-0_14\"\n\
    \}\n',
  authors: ['K. Apinis', 'H. Seidl', 'V. Vojdani'],
  video: null
  },
  {
  link: '/assets/papers/flags.pdf',
  title: 'Precise Analysis of Value-Dependent Synchronization in Priority Scheduled Programs',
  conference: 'VMCAI',
  year: 2014,
  description: 'Describes how to deal with synchronization using integer variables checked by the programmer.',
  citation: '\@inproceedings\{inproceedings\,\n\
    author = \{Schwarz\, Martin and Seidl\, Helmut and Vojdani\, Vesal and Apinis\, Kalmer\}\,\n\
    year = \{2014\}\,\n\
    month = \{01\}\,\n\
    pages = \{\}\,\n\
    title = \{Precise Analysis of Value-Dependent Synchronization in Priority Scheduled Programs\}\,\n\
    volume = \{8318\}\,\n\
    doi = \{10.1007\/978-3-642-54013-4_2\}\n\
    \}\n',
    authors: ['M. D. Schwarz', 'H. Seidl', 'V. Vojdani', 'K. Apinis'],
  video: null
  },
  {
  link: 'http://dl.acm.org/authorize?N27657',
  title: 'How to combine widening and narrowing for non-monotonic systems of equations',
  conference: 'PLDI',
  year: 2013,
  description: 'We had long been searching for a way to introduce widening/narrowings into the demand-driven solvers used in Goblint. This paper shows how to do it.',
  citation: '\@article\{10.1145\/2499370.2462190\,\n\
    author = \{Apinis\, Kalmer and Seidl\, Helmut and Vojdani\, Vesal\}\,\n\
    title = \{How to Combine Widening and Narrowing for Non-Monotonic Systems of Equations\}\,\n\
    year = \{2013\}\,\n\
    issue_date = \{June 2013\}\,\n\
    publisher = \{Association for Computing Machinery\}\,\n\
    address = \{New York\, NY\, USA\}\,\n\
    volume = \{48\}\,\n\
    number = \{6\}\,\n\
    issn = \{0362-1340\}\,\n\
    url = \{https://doi.org/10.1145/2499370.2462190\}\,\n\
    doi = \{10.1145/2499370.2462190\}\,\n\
    abstract = \{Non-trivial analysis problems require complete lattices with infinite ascending and descending chains. In order to compute reasonably precise post-fixpoints of the resulting systems of equations\, Cousot and Cousot have suggested accelerated fixpoint iteration by means of widening and narrowing.The strict separation into phases\, however\, may unnecessarily give up precision that cannot be recovered later. While widening is also applicable if equations are non-monotonic\, this is no longer the case for narrowing. A narrowing iteration to improve a given post-fixpoint\, additionally\, must assume that all right-hand sides are monotonic. The latter assumption\, though\, is not met in presence of widening. It is also not met by equation systems corresponding to context-sensitive interprocedural analysis\, possibly combining context-sensitive analysis of local information with flow-insensitive analysis of globals.As a remedy\, we present a novel operator that combines a given widening operator with a given narrowing operator. We present adapted versions of round-robin as well as of worklist iteration\, local\, and side-effecting solving algorithms for the combined operator and prove that the resulting solvers always return sound results and are guaranteed to terminate for monotonic systems whenever only finitely many unknowns (constraint variables) are encountered.\}\,\n\
    journal = \{SIGPLAN Not.\}\,\n\
    month = jun\,\n\
    pages = \{377–386\}\,\n\
    numpages = \{10\}\,\n\
    keywords = \{constraint solving\, fixpoint iteration\, static program analysis\}\n\
    \}\n\
    \n\
    \@inproceedings\{10.1145/2491956.2462190\,\n\
    author = \{Apinis\, Kalmer and Seidl\, Helmut and Vojdani\, Vesal\}\,\n\
    title = \{How to Combine Widening and Narrowing for Non-Monotonic Systems of Equations\}\,\n\
    year = \{2013\}\,\n\
    isbn = \{9781450320146\}\,\n\
    publisher = \{Association for Computing Machinery\}\,\n\
    address = \{New York\, NY\, USA\}\,\n\
    url = \{https://doi.org/10.1145/2491956.2462190\}\,\n\
    doi = \{10.1145/2491956.2462190\}\,\n\
    abstract = \{Non-trivial analysis problems require complete lattices with infinite ascending and descending chains. In order to compute reasonably precise post-fixpoints of the resulting systems of equations\, Cousot and Cousot have suggested accelerated fixpoint iteration by means of widening and narrowing.The strict separation into phases\, however\, may unnecessarily give up precision that cannot be recovered later. While widening is also applicable if equations are non-monotonic\, this is no longer the case for narrowing. A narrowing iteration to improve a given post-fixpoint\, additionally\, must assume that all right-hand sides are monotonic. The latter assumption\, though\, is not met in presence of widening. It is also not met by equation systems corresponding to context-sensitive interprocedural analysis\, possibly combining context-sensitive analysis of local information with flow-insensitive analysis of globals.As a remedy\, we present a novel operator that combines a given widening operator with a given narrowing operator. We present adapted versions of round-robin as well as of worklist iteration\, local\, and side-effecting solving algorithms for the combined operator and prove that the resulting solvers always return sound results and are guaranteed to terminate for monotonic systems whenever only finitely many unknowns (constraint variables) are encountered.\}\,\n\
    booktitle = \{Proceedings of the 34th ACM SIGPLAN Conference on Programming Language Design and Implementation\}\,\n\
    pages = \{377–386\}\,\n\
    numpages = \{10\}\,\n\
    keywords = \{fixpoint iteration\, constraint solving\, static program analysis\}\,\n\
    location = \{Seattle\, Washington\, USA\}\,\n\
    series = \{PLDI \'13\}\n\
    \}\n',
    authors: ['K. Apinis', 'H. Seidl', 'V. Vojdani'],
  video: null
  },
  {
  link: '/assets/papers/side.pdf',
  title: 'Side-effecting constraint systems: A Swiss army knife for program analysis',
  conference: 'APLAS',
  year: 2012,
  description: 'Generalizes the global invariant approach to arbitrary side-effecting constraints. This is the theoretical foundation of the Goblint analysis framework.',
  citation: '\@InProceedings\{10.1007/978-3-642-35182-2_12\,\n\
    author=\"Apinis\, Kalmer\n\
    and Seidl\, Helmut\n\
    and Vojdani\, Vesal\"\,\n\
    editor=\"Jhala\, Ranjit\n\
    and Igarashi\, Atsushi\"\,\n\
    title=\"Side-Effecting Constraint Systems: A Swiss Army Knife for Program Analysis\"\,\n\
    booktitle=\"Programming Languages and Systems\"\,\n\
    year=\"2012\"\,\n\
    publisher=\"Springer Berlin Heidelberg\"\,\n\
    address=\"Berlin\, Heidelberg\"\,\n\
    pages=\"157--172\"\,\n\
    abstract=\"Side-effecting constraint systems were originally introduced for the analysis of multi-threaded code [22]. In this paper, we show how this formalism provides a unified framework for realizing efficient interprocedural analyses where the amount of context-sensitivity can be tweaked and where the context-sensitive analyses of local properties can be combined with flow-insensitive analyses of global properties, e.g., about the heap. Side-effecting constraint systems thus form the ideal basis for building general-purpose infrastructures for static analysis. One such infrastructure is the analyzer generator Goblint, which we used to practically evaluate this approach on real-world examples.\"\,\n\
    isbn=\"978-3-642-35182-2\"\n\
    \}\n',
    authors: ['K. Apinis', 'H. Seidl', 'V. Vojdani'],
  video: null
  },
  {
  link: '/assets/papers/class.pdf',
  title: 'Class-modular, class-escape and points-to analysis for object-oriented languages',
  conference: 'NFM',
  year: 2012,
  description: 'Describes a class-escape analysis for C++ implemented in Goblint using LLVM as frontend.',
  citation: '\@InProceedings\{10.1007/978-3-642-28891-3_11\,\n\
    author=\"Herz\, Alexander\n\
    and Apinis\, Kalmer\"\,\n\
    editor=\"Goodloe\, Alwyn E.\n\
    and Person\, Suzette\"\,\n\
    title=\"Class-Modular\, Class-Escape and Points-to Analysis for Object-Oriented Languages\"\,\n\
    booktitle=\"NASA Formal Methods\"\,\n\
    year=\"2012\"\,\n\
    publisher=\"Springer Berlin Heidelberg\"\,\n\
    address=\"Berlin\, Heidelberg\"\,\n\
    pages=\"106--119\"\,\n\
    abstract=\"We present a combined class-modular points-to and class-escape analysis that allows to analyze class declarations even if no information about the code that invokes the class\'s methods is available as is the case for e.g. shared libraries. Any standard whole-program or summary-based points-to analysis can be plugged into our framework and thus be transformed into a class-modular\, class-escape and points-to analysis. The analysis framework uses the flow restrictions imposed by the access modifiers (e.g. private\, public and protected in Java) to find all fields that may be modified by code that is not part of the class declaration. These fields escape the class. Unlike method-based summaries instantiated with an unknown context\, our analysis framework can give detailed points-to information for non-escaping fields. In addition\, the knowledge of which fields belong to the region that does not escape a class can be exploited to perform other analysis like class-modular object in-lining [6] more efficiently or enable the automatic inference of class invariants [10]. We prove the soundness of the analysis and present a set of benchmarks showing that the analysis is suitable to analyze real world code and that more than 75{\%} of the fields from the benchmarked classes are identified as non-escaping.\"\,\n\
    isbn=\"978-3-642-28891-3\"\n\
    \}\n',
      authors: ['A. Herz', 'K. Apinis'],
  video: null
  },
  {
  link: 'http://dl.acm.org/authorize?N27658',
  title: 'Static analysis of interrupt-driven programs synchronized via the priority ceiling protocol',
  conference: 'POPL',
  year: 2011,
  description: 'Presents the techniques the analyzer uses to analyze OSEK programs.',
  citation: '\@article\{10.1145/1925844.1926398\,\n\
    author = \{Schwarz\, Martin D. and Seidl\, Helmut and Vojdani\, Vesal and Lammich\, Peter and M\\\"\{u\}ller-Olm\, Markus\}\,\n\
    title = \{Static Analysis of Interrupt-Driven Programs Synchronized via the Priority Ceiling Protocol\}\,\n\
    year = \{2011\}\,\n\
    issue_date = \{January 2011\}\,\n\
    publisher = \{Association for Computing Machinery\}\,\n\
    address = \{New York\, NY\, USA\}\,\n\
    volume = \{46\}\,\n\
    number = \{1\}\,\n\
    issn = \{0362-1340\}\,\n\
    url = \{https://doi.org/10.1145/1925844.1926398\}\,\n\
    doi = \{10.1145/1925844.1926398\}\,\n\
    abstract = \{We consider programs for embedded real-time systems which use priority-driven preemptive scheduling with task priorities adjusted dynamically according to the immediate ceiling priority protocol. For these programs, we provide static analyses for detecting data races between tasks running at different priorities as well as methods to guarantee transactional execution of procedures. Beyond that, we demonstrate how general techniques for value analyses can be adapted to this setting by developing a precise analysis of affine equalities.\}\,\n\
    journal = \{SIGPLAN Not.\}\,\n\
    month = jan\,\n\
    pages = \{93–104\}\,\n\
    numpages = \{12\}\,\n\
    keywords = \{interrupt-driven concurrency\, abstract domains\, interprocedural analysis\}\n\
    \}\n\
    \n\
    \@inproceedings\{10.1145/1926385.1926398\,\n\
    author = \{Schwarz\, Martin D. and Seidl\, Helmut and Vojdani\, Vesal and Lammich\, Peter and M\\\"\{u\}ller-Olm\, Markus\}\,\n\
    title = \{Static Analysis of Interrupt-Driven Programs Synchronized via the Priority Ceiling Protocol\}\,\n\
    year = \{2011\}\,\n\
    isbn = \{9781450304900\}\,\n\
    publisher = \{Association for Computing Machinery\}\,\n\
    address = \{New York\, NY\, USA\}\,\n\
    url = \{https://doi.org/10.1145/1926385.1926398\}\,\n\
    doi = \{10.1145/1926385.1926398\}\,\n\
    abstract = \{We consider programs for embedded real-time systems which use priority-driven preemptive scheduling with task priorities adjusted dynamically according to the immediate ceiling priority protocol. For these programs\, we provide static analyses for detecting data races between tasks running at different priorities as well as methods to guarantee transactional execution of procedures. Beyond that\, we demonstrate how general techniques for value analyses can be adapted to this setting by developing a precise analysis of affine equalities.\}\,\n\
    booktitle = \{Proceedings of the 38th Annual ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages\}\,\n\
    pages = \{93–104\}\,\n\
    numpages = \{12\}\,\n\
    keywords = \{abstract domains\, interrupt-driven concurrency\, interprocedural analysis\}\,\n\
    location = \{Austin\, Texas\, USA\}\,\n\
    series = \{POPL \'11\}\n\
    \}\n',
    authors: ['M. D. Schwarz', 'H. Seidl', 'V. Vojdani', 'P. Lammich', 'M. Müller-Olm'],
  video: null
  },
  {
  link: '/assets/papers/coq.pdf',
  title: 'Verifying a Local Generic Solver in Coq',
  conference: 'SAS',
  year: 2010,
  description: 'A verified version of the local solver used in Goblint.',
  citation: '\@Inproceedings\{HofmannEtAl2010a\,\n\
    author = \{Hofmann\, Martin and Karbyshev\, Aleksandr and Seidl\, Helmut\}\,\n\
    title = \{Verifying a Local Generic Solver in Coq\}\,\n\
    year = \{2010\}\,\n\
    abstract = \{Fixpoint engines are the core components of program analysis tools and compilers. If these tools are to be trusted\, special attention should be paid also to the correctness of such$\~$ solvers\. In this paper we consider the local generic fixpoint solver RLD which can be applied to constraint systems over some lattice where the right-hand sides are given as$\~$ arbitrary functions implemented in some specification language. The verification of this algorithm is challenging, because it uses higher-order functions and relies on side effects to track$\~$ variable dependences as they are encountered dynamically during fixpoint iterations. Here\, we present a correctness proof of this algorithm which has been formalized by means of the$\~$ interactive proof assistant COQ.\}\,\n\
    booktitle = \{SAS\}\,\n\
    pages = \{340-355\}\n\
  \}\n',
  authors: ['M. Hofmann', 'A. Karbyshev', 'H. Seidl'],
  video: null
  },
  {
  link: '/assets/papers/regions.pdf',
  title: 'Region analysis for race detection',
  conference: 'SAS',
  year: 2009,
  description: 'This paper explains the region analysis method that we use to deal with medium-grained locking.',
  citation: '\@InProceedings\{10.1007/978-3-642-03237-0_13\,\n\
    author=\"Seidl\, Helmut\n\
    and Vojdani\, Vesal\"\,\n\
    editor=\"Palsberg\, Jens\n\
    and Su\, Zhendong\"\,\n\
    title=\"Region Analysis for Race Detection\"\,\n\
    booktitle=\"Static Analysis\"\,\n\
    year=\"2009\"\,\n\
    publisher=\"Springer Berlin Heidelberg\"\,\n\
    address=\"Berlin\, Heidelberg\"\,\n\
    pages=\"171--187\"\,\n\
    abstract=\"Automatic race detection of C programs requires fast\, yet sufficiently precise analysis of dynamic memory. Therefore\, we present a region-based pointer analysis which seeks to identify disjoint regions of dynamically allocated objects to ensure that write accesses to the same region are always protected by the same mutexes. Our approach has been implemented within the interprocedural analyzer of concurrent C programs GobLint and we have successfully applied it on code from the Linux kernel\, such as the access vector cache. This code relies on a synchronized hash table where an array of doubly linked lists is protected by an array of locks.\"\,\n\
    isbn=\"978-3-642-03237-0\"\n\
    \}\n',
    authors: ['H. Seidl', 'V. Vojdani'],
  video: null
  },
  {
  link: '/assets/papers/must-alias.pdf',
  title: 'A smooth combination of linear and Herbrand equalities for polynomial time must-alias analysis',
  conference: 'FM',
  year: 2009,
  description: 'Presents the key ideas for dealing with per-element locking',
  citation: '\@inproceedings\{DBLP:conf/fm/SeidlVV09\,\n\
    author    = \{Helmut Seidl and\n\
                 Vesal Vojdani and\n\
                 Varmo Vene\}\,\n\
    editor    = \{Ana Cavalcanti and\n\
                 Dennis Dams\}\,\n\
    title     = \{A Smooth Combination of Linear and Herbrand Equalities for Polynomial\n\
                 Time Must-Alias Analysis\}\,\n\
    booktitle = \{\{FM\} 2009: Formal Methods\, Second World Congress\, Eindhoven\, The Netherlands\,\n\
                 November 2-6\, 2009. Proceedings\}\,\n\
    series    = \{Lecture Notes in Computer Science\}\,\n\
    volume    = \{5850\}\,\n\
    pages     = \{644--659\}\,\n\
    publisher = \{Springer\}\,\n\
    year      = \{2009\}\,\n\
    url       = \{https://doi.org/10.1007/978-3-642-05089-3\_41\}\,\n\
    doi       = \{10.1007/978-3-642-05089-3\_41\}\,\n\
    timestamp = \{Sun, 02 Jun 2019 21:24:31 +0200\}\,\n\
    biburl    = \{https://dblp.org/rec/conf/fm/SeidlVV09.bib\}\,\n\
    bibsource = \{dblp computer science bibliography\, https://dblp.org\}\n\
  \}\n',
  authors: ['H. Seidl', 'V. Vojdani', 'V. Vene'],
  video: null
  },
  {
  link: '/assets/papers/goblint.pdf',
  title: 'Goblint: path-sensitive data race analysis',
  conference: 'SPLST',
  year: 2007,
  description: 'Overview of the race detection analysis and how it uses property-simulation to obtain a path-sensitive analysis.',
  citation: '\@article\{VojdaniVene09\,\n\
    author = \{Vesal Vojdani and Varmo Vene\}\,\n\
    title = \{Goblint: Path-sensitive data race analysis\}\,\n\
    journal = \{Annales Univ. Sci. Budapest.\, Sect. Comp.\}\,\n\
    volume = 30\,\n\
    pages = \{141--155\}\,\n\
    year = \{2009\}\,\n\
  \}\n',
  authors: ['V. Vojdani', 'V. Vene'],
  video: null
  },
  {
  link: '/assets/papers/invariants.pdf',
  title: 'Global invariants for analysing multi-threaded applications',
  conference: 'Proceedings of the Estonian Academy of Sciences. Physics. Mathematics',
  year: 2003,
  description: 'Describes the underlying nested-fixpoint style thread-modular analysis engine that enables us to analyze multi-threaded programs soundly.',
  citation: '\@article\{Seidl03\,\n\
    author = \{Helmut Seidl and Varmo Vene and Markus M\{\\\"u\}ller-Olm\}\,\n\
    title = \{Global invariants for analyzing multithreaded applications\}\,\n\
    journal = \{Proc. of the Estonian Academy of Sciences: Phys.\, Math.\}\,\n\
    volume = \{52\}\,\n\
    number = \{4\}\,\n\
    pages = \{413--436\}\,\n\
    year = \{2003\}\,\n\
  \}\n',
  authors: ['H. Seidl', 'V. Vene', 'M. Müller-Olm'],
  video: null
  }
];
