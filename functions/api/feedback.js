const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff"
  }
});

export async function onRequestPost(context) {
  const { request, env } = context;
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 2048) return json({ ok: false, error: "请求内容过大" }, 413);

  let input;
  try {
    input = await request.json();
  } catch {
    return json({ ok: false, error: "请求格式不正确" }, 400);
  }

  const setId = typeof input.setId === "string" ? input.setId : "";
  const questionId = Number(input.questionId);
  const deviceId = typeof input.deviceId === "string" ? input.deviceId : "";
  const vote = Number(input.vote);

  if (!/^set-\d{2,3}$/.test(setId) || !Number.isInteger(questionId) || questionId < 1 || questionId > 100) {
    return json({ ok: false, error: "题目标识不正确" }, 400);
  }
  if (!/^[a-f0-9-]{36}$/i.test(deviceId) || ![-1, 1].includes(vote)) {
    return json({ ok: false, error: "反馈内容不正确" }, 400);
  }

  await env.math_brain_feedback.prepare(`
    INSERT INTO question_feedback (set_id, question_id, device_id, vote, updated_at)
    VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(set_id, question_id, device_id)
    DO UPDATE SET vote = excluded.vote, updated_at = CURRENT_TIMESTAMP
  `).bind(setId, questionId, deviceId, vote).run();

  return json({ ok: true });
}
