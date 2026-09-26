(function () {
  "use strict";

  const sets = window.MATH_SETS || [];
  const select = document.getElementById("set-select");
  const questions = document.getElementById("questions");

  function selectedId() {
    const id = window.location.hash.slice(1);
    return sets.some((set) => set.id === id) ? id : sets[0]?.id;
  }

  function render(id) {
    const set = sets.find((item) => item.id === id) || sets[0];
    if (!set) return;

    document.title = set.title;
    document.getElementById("set-meta").textContent = `${set.label} · 共 ${set.questions.length} 题`;
    document.getElementById("page-title").textContent = set.title;
    document.getElementById("set-intro").textContent = set.intro;
    select.value = set.id;
    questions.innerHTML = set.questions.map((question, index) => `
      <article>
        <div class="question-head">
          <span class="number">${String(index + 1).padStart(2, "0")}</span>
          <h2>${question.type}</h2>
        </div>
        <div class="problem">${question.problem}</div>
        <details>
          <summary>显示答案与解析</summary>
          <div class="answer">${question.answer}</div>
        </details>
      </article>
    `).join("");
  }

  sets.forEach((set) => select.add(new Option(set.label, set.id)));
  select.addEventListener("change", () => { window.location.hash = select.value; });
  window.addEventListener("hashchange", () => render(selectedId()));
  render(selectedId());
}());
