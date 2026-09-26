(function () {
  "use strict";

  const sets = window.MATH_SETS || [];
  const select = document.getElementById("set-select");
  const questions = document.getElementById("questions");
  const commentForm = document.getElementById("comment-form");
  const commentText = document.getElementById("comment-text");
  const commentStatus = document.getElementById("comment-status");

  function getDeviceId() {
    const key = "math-brain-device-id";
    let id = localStorage.getItem(key);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(key, id);
    }
    return id;
  }

  function savedVote(setId, questionId) {
    return Number(localStorage.getItem(`math-brain-vote:${setId}:${questionId}`)) || 0;
  }

  function feedbackMarkup(setId, questionId, displayNumber) {
    const vote = savedVote(setId, questionId);
    return `
      <div class="feedback" data-question-id="${questionId}">
        <span class="feedback-label">这道题怎么样？</span>
        <div class="feedback-actions" role="group" aria-label="评价第 ${displayNumber} 题">
          <button class="feedback-button${vote === 1 ? " is-selected" : ""}" type="button" data-vote="1" aria-pressed="${vote === 1}">↑ 有帮助</button>
          <button class="feedback-button${vote === -1 ? " is-selected" : ""}" type="button" data-vote="-1" aria-pressed="${vote === -1}">↓ 需要改进</button>
        </div>
        <span class="feedback-status" aria-live="polite">${vote ? "已记录你的反馈" : ""}</span>
      </div>
    `;
  }

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
        ${feedbackMarkup(set.id, question.id, index + 1)}
      </article>
    `).join("");
  }

  questions.addEventListener("click", async (event) => {
    const button = event.target.closest(".feedback-button");
    if (!button) return;

    const feedback = button.closest(".feedback");
    const questionId = Number(feedback.dataset.questionId);
    const setId = selectedId();
    const vote = Number(button.dataset.vote);
    const status = feedback.querySelector(".feedback-status");
    const buttons = [...feedback.querySelectorAll(".feedback-button")];

    buttons.forEach((item) => { item.disabled = true; });
    status.textContent = "正在提交…";

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ setId, questionId, vote, deviceId: getDeviceId() })
      });
      if (!response.ok) throw new Error("request failed");

      localStorage.setItem(`math-brain-vote:${setId}:${questionId}`, String(vote));
      buttons.forEach((item) => {
        const selected = Number(item.dataset.vote) === vote;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      status.textContent = "已收到，谢谢你的反馈";
    } catch {
      status.textContent = "暂时没有提交成功，请稍后再试";
    } finally {
      buttons.forEach((item) => { item.disabled = false; });
    }
  });

  commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = commentText.value.trim();
    if (message.length < 2) {
      commentStatus.textContent = "请至少写两个字";
      commentText.focus();
      return;
    }

    const submit = commentForm.querySelector("button[type='submit']");
    submit.disabled = true;
    commentStatus.textContent = "正在提交…";

    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ setId: selectedId(), message, deviceId: getDeviceId() })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "request failed");

      commentText.value = "";
      commentStatus.textContent = "已收到，谢谢你认真告诉我";
    } catch (error) {
      commentStatus.textContent = error.message === "request failed" ? "暂时没有提交成功，请稍后再试" : error.message;
    } finally {
      submit.disabled = false;
    }
  });

  sets.forEach((set) => select.add(new Option(set.label, set.id)));
  select.addEventListener("change", () => { window.location.hash = select.value; });
  window.addEventListener("hashchange", () => {
    render(selectedId());
    commentText.value = "";
    commentStatus.textContent = "";
  });
  render(selectedId());
}());
