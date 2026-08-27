/* =====================================================================
   PUBLICATION LIST  —  the single source of truth for publications
   (used by both publications.html and the homepage). To add a paper,
   copy one { … } block, paste it at the TOP and edit. "kind" is one of:
   "pub" (published) · "pre" (preprint) · "award" · "thesis".
   "topic" may hold one or two tags separated by "|" (e.g. "MMOT|Entropic OT").
   ===================================================================== */
var PUBS = [
  {year:2026, authors:"V. Ehrlacher, R. Lelotte, L. Nenna", title:"A land of monotone plenty, bis repetita: from classical to weak optimal transport", venue:"Preprint", kind:"pre", topic:"OT theory", pdf:"https://cvgmt.sns.it/media/doc/paper/7811/Monotonicity_EhrLelNen.pdf"},
  {year:2026, authors:"M. Garatti, L. Nenna, S. Rota-Nodari, L. Tamanini", title:"A PDE approach to the Benamou–Brenier formula for the Schrödinger problem", venue:"Preprint", kind:"pre", topic:"Entropic OT|Probabilistic OT", pdf:"https://cvgmt.sns.it/media/doc/paper/7691/BB_PDEapproach.pdf"},
  {year:2026, authors:"E. Bonnet-Weill, V. Ehrlacher, L. Nenna", title:"A reduced-order model for parametrized optimal transport problems", venue:"Preprint", kind:"pre", topic:"Computational OT", pdf:"https://inria.hal.science/hal-05587825"},
  {year:2026, authors:"A. Cancès, L. Nenna, D. Omarov, B. Pass", title:"Ordinary differential equations for regularized variational problems involving semi-discrete optimal transport", venue:"Preprint", kind:"pre", topic:"Computational OT|Entropic OT", pdf:"https://cvgmt.sns.it/paper/7635/"},
  {year:2026, authors:"A. Cancès, Q. Mérigot, L. Nenna", title:"A particle method for a nonlinear multi-marginal optimal transport problem", venue:"Preprint", kind:"pre", topic:"Computational OT|MMOT", pdf:"https://arxiv.org/abs/2603.25584"},
  {year:2026, authors:"V. Ehrlacher, L. Nenna", title:"A sparse approximation of the Lieb functional with moment constraints", venue:"SIAM Journal on Mathematical Analysis", kind:"pub", topic:"Quantum / DFT|MMOT", pdf:"https://arxiv.org/abs/2306.00806"},
  {year:2026, authors:"L. De Pascale, L. Nenna", title:"A variational formulation of a multi-population Mean Field Games with non-local interactions", venue:"Nonlinear Differential Equations and Applications NoDEA", kind:"pub", topic:"Mean field games", pdf:"https://arxiv.org/abs/2408.03118"},

  {year:2025, authors:"L. Nenna, P. Pegon, L. Tocquec", title:"Convergence rates for regularized unbalanced optimal transport: the discrete case", venue:"Preprint", kind:"pre", topic:"Entropic OT", pdf:"https://arxiv.org/abs/2507.07917"},
  {year:2025, authors:"L. Nenna, D. Omarov, B. Pass", title:"Characterizing and computing solutions to regularized semi-discrete optimal transport via an ODE", venue:"Preprint", kind:"pre", topic:"Computational OT|Entropic OT", pdf:"https://arxiv.org/abs/2504.03030"},
  {year:2025, authors:"J. Z. G. Hiew, L. Nenna, B. Pass", title:"An ordinary differential equation for entropic optimal transport and its linearly constrained variants", venue:"Numerische Mathematik", kind:"pub", topic:"Entropic OT|Computational OT", pdf:"https://arxiv.org/abs/2403.20238"},
  {year:2025, authors:"J.-B. Casteras, L. Monsaingeon, L. Nenna", title:"Large deviations for sticky-reflecting Brownian motion with boundary diffusion", venue:"Preprint", kind:"pre", topic:"Probabilistic OT", pdf:"https://inria.hal.science/hal-04895784"},
  {year:2025, authors:"S. Di Marino, M. Lewin, L. Nenna", title:"Grand-Canonical Optimal Transport", venue:"Archive for Rational Mechanics and Analysis", kind:"pub", topic:"Quantum / DFT|MMOT", pdf:"https://arxiv.org/abs/2201.06859"},
  {year:2025, authors:"L. Nenna, B. Pass", title:"An ODE characterisation of multi-marginal optimal transport for pairwise costs", venue:"IMA Journal of Numerical Analysis", kind:"pub", topic:"MMOT|Computational OT", pdf:"https://arxiv.org/abs/2212.12492"},

  {year:2024, authors:"H. Ennaji, Q. Mérigot, L. Nenna, B. Pass", title:"Robust risk management via multi-marginal optimal transport", venue:"Journal of Optimization Theory and Applications", kind:"pub", topic:"Math. economics|MMOT", pdf:"https://hal.science/hal-03852245/file/main.pdf"},
  {year:2024, authors:"S. Di Marino, M. Lewin, L. Nenna", title:"The ground state energy is not always convex in the number of electrons", venue:"The Journal of Physical Chemistry A", kind:"pub", topic:"Quantum / DFT", pdf:"https://cvgmt.sns.it/media/doc/paper/6783/convexity-in-N_v03.pdf"},
  {year:2024, authors:"J.-D. Benamou, G. Carlier, M. Cuturi, L. Nenna, G. Peyré", title:"A numerical method for regularized transportation problems", venue:"Frontiers of Science Award paper", kind:"award", topic:"Computational OT|Entropic OT", pdf:"https://cvgmt.sns.it/media/doc/paper/6774/A_numerical_method_for_regularized_transportation_problems-3.pdf"},

  {year:2023, authors:"L. Nenna, B. Pass", title:"A note on Cournot–Nash equilibria and optimal transport between unequal dimensions", venue:"Optimal Transport Statistics for Economics and Related Topics (Springer)", kind:"pub", topic:"Math. economics|OT theory", pdf:"https://arxiv.org/abs/2209.14888"},
  {year:2023, authors:"L. Nenna, P. Pegon", title:"Convergence rate of entropy-regularized multi-marginal optimal transport costs", venue:"Canadian Journal of Mathematics", kind:"pub", topic:"Entropic OT|MMOT", pdf:"https://arxiv.org/abs/2307.03023"},
  {year:2023, authors:"S. Di Marino, A. Gerolin, L. Nenna", title:"Universal diagonal estimates for minimizers of the Levy–Lieb functional", venue:"Letters in Mathematical Physics", kind:"pub", topic:"Quantum / DFT", pdf:"https://arxiv.org/abs/2303.00496"},

  {year:2022, authors:"L. Nenna, B. Pass", title:"Transport type metrics on the space of probability measures involving singular base measures", venue:"Applied Mathematics & Optimization", kind:"pub", topic:"OT theory", pdf:"https://cvgmt.sns.it/media/doc/paper/5409/metrics.pdf"},

  {year:2020, authors:"L. Nenna, B. Pass", title:"Variational problems involving unequal dimensional optimal transport", venue:"Journal de Mathématiques Pures et Appliquées", kind:"pub", topic:"OT theory", pdf:"https://arxiv.org/abs/1904.00939"},

  {year:2019, authors:"J.-D. Benamou, G. Carlier, S. Di Marino, L. Nenna", title:"An entropy minimization approach to second-order variational mean-field games", venue:"Mathematical Models and Methods in Applied Sciences", kind:"pub", topic:"Mean field games|Entropic OT", pdf:"https://arxiv.org/abs/1807.09078"},
  {year:2019, authors:"J.-D. Benamou, G. Carlier, L. Nenna", title:"Generalized incompressible flows, multi-marginal transport and Sinkhorn algorithm", venue:"Numerische Mathematik", kind:"pub", topic:"Computational OT|MMOT", pdf:"https://arxiv.org/abs/1710.08234"},

  {year:2017, authors:"S. Di Marino, A. Gerolin, L. Nenna", title:"Optimal transportation theory with repulsive costs", venue:"Topological Optimization and Optimal Transport (De Gruyter)", kind:"pub", topic:"Quantum / DFT|MMOT", pdf:"https://arxiv.org/abs/1506.04565"},
  {year:2017, authors:"M. Seidl, S. Di Marino, A. Gerolin, L. Nenna, K. J. H. Giesbertz, P. Gori-Giorgi", title:"The strictly-correlated electron functional for spherically symmetric systems revisited", venue:"Physical Review A", kind:"pub", topic:"Quantum / DFT", pdf:"https://arxiv.org/abs/1702.05022"},

  {year:2016, authors:"A. Blanchet, G. Carlier, L. Nenna", title:"Computation of Cournot–Nash equilibria by entropic regularization", venue:"Vietnam Journal of Mathematics", kind:"pub", topic:"Math. economics|Entropic OT", pdf:"https://arxiv.org/abs/1609.02814"},
  {year:2016, authors:"J.-D. Benamou, G. Carlier, L. Nenna", title:"A numerical method to solve multi-marginal optimal transport problems with Coulomb cost", venue:"Splitting Methods in Communication, Imaging, Science, and Engineering (Springer)", kind:"pub", topic:"Computational OT|Quantum / DFT", pdf:"https://www.math.ucla.edu/~wotaoyin/splittingbook/ch17-benamou-carlier.pdf"},

  {year:2015, authors:"J.-D. Benamou, G. Carlier, M. Cuturi, L. Nenna, G. Peyré", title:"Iterative Bregman projections for regularized transportation problems", venue:"SIAM Journal on Scientific Computing", kind:"award", topic:"Computational OT|Entropic OT", pdf:"https://arxiv.org/abs/1412.5154"},
];
