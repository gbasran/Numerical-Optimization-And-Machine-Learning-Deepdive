/* ============================================================
   Sidebar Navigation — injected into every page
   ============================================================ */
(function () {
  var pages = [
    { num: "01", file: "cg-01-math-foundations.html", title: "Taylor, Norms, Convergence" },
    { num: "02", file: "cg-02-multivariable-bridge.html", title: "Multivariable Calculus Bridge" },
    { num: "03", file: "cg-03-linear-algebra.html", title: "Linear Algebra Essentials" },
    { num: "04", file: "cg-04-optimality.html", title: "Optimality Conditions" },
    { num: "05", file: "cg-05-convexity.html", title: "Convexity" },
    { num: "06", file: "cg-06-gradient-descent.html", title: "Gradient Descent" },
    { num: "07", file: "cg-07-newton-method.html", title: "Newton's Method" },
    { num: "08", file: "cg-08-line-search.html", title: "Line Search Methods" },
    { num: "09", file: "cg-09-trust-region.html", title: "Trust-Region Methods", core: true },
    { num: "10", file: "cg-10-conjugate-gradient.html", title: "Conjugate Gradient", core: true },
    { num: "11", file: "cg-11-nonlinear-cg.html", title: "Nonlinear CG", core: true },
    { num: "12", file: "cg-12-bfgs.html", title: "BFGS Method", core: true },
    { num: "13", file: "cg-13-sr1-dfp.html", title: "SR1 & DFP", core: true },
    { num: "14", file: "cg-14-nonlinear-equations.html", title: "Nonlinear Equations", core: true },
    { num: "15", file: "cg-15-constrained.html", title: "Constrained & KKT", core: true },
    { num: "16", file: "cg-16-lp-interior-point.html", title: "LP & Interior Point", core: true },
    { num: "17", file: "cg-17-method-map.html", title: "Method Map", synth: true },
    { num: "18", file: "cg-18-exam-computations.html", title: "Exam: Computations", synth: true },
    { num: "19", file: "cg-19-exam-theory.html", title: "Exam: Theory", synth: true },
    { num: "20", file: "cg-20-formula-sheet.html", title: "Formula Sheet", synth: true }
  ];

  var currentFile = window.location.pathname.split("/").pop();

  /* Build sidebar HTML */
  var html = '<div class="sidebar" id="sidebar">';
  html += '<div class="sidebar-header"><a href="index.html">MATH 3850</a></div>';
  html += '<div class="sidebar-section">Pre-Midterm</div>';

  for (var i = 0; i < pages.length; i++) {
    var p = pages[i];

    /* Section dividers */
    if (p.num === "09") html += '<div class="sidebar-section">Post-Midterm</div>';
    if (p.num === "17") html += '<div class="sidebar-section">Exam Prep</div>';

    var active = (currentFile === p.file) ? " active" : "";
    var accent = p.core ? " core" : (p.synth ? " synth" : "");

    html += '<a class="sidebar-link' + active + accent + '" href="' + p.file + '">';
    html += '<span class="sidebar-num">' + p.num + '</span>';
    html += '<span class="sidebar-title">' + p.title + '</span>';
    html += '</a>';
  }

  html += '</div>';

  /* Toggle button for mobile */
  html += '<button class="sidebar-toggle" id="sidebar-toggle" aria-label="Toggle navigation">&#9776;</button>';

  document.body.insertAdjacentHTML("afterbegin", html);

  /* Toggle behavior */
  var toggle = document.getElementById("sidebar-toggle");
  var sidebar = document.getElementById("sidebar");
  toggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  /* Close sidebar when clicking a link on mobile */
  var links = sidebar.querySelectorAll(".sidebar-link");
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener("click", function () {
      if (window.innerWidth <= 1100) {
        sidebar.classList.remove("open");
      }
    });
  }

  /* Scroll active link into view */
  var activeLink = sidebar.querySelector(".sidebar-link.active");
  if (activeLink) {
    activeLink.scrollIntoView({ block: "center", behavior: "instant" });
  }
})();
