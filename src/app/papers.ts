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
    \}\n'
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
    \}\n'
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
    }\n'
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
    \}\n'
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
    \}\n'
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
    \}\n'
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
    \}\n'
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
    \}\n'
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
  \}\n'
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
    \}\n'
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
  \}\n'
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
