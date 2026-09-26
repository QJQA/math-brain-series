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
  if (contentLength > 4096) return json({ ok: false, error: "内容过长" }, 413);

  let input;
  try {
    input = await request.json();
  } catch {
    return json({ ok: false, error: "请求格式不正确" }, 400);
  }

  const setId = typeof input.setId === "string" ? input.setId : "";
  const deviceId = typeof input.deviceId === "string" ? input.deviceId : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (!/^set-\d{2,3}$/.test(setId) || !/^[a-f0-9-]{36}$/i.test(deviceId)) {
    return json({ ok: false, error: "练习组标识不正确" }, 400);
  }
  if (message.length < 2 || message.length > 500) {
    return json({ ok: false, error: "请填写 2–500 个字" }, 400);
  }

  await env.math_brain_feedback.prepare(`
    INSERT INTO set_comments (set_id, device_id, message)
    VALUES (?, ?, ?)
  `).bind(setId, deviceId, message).run();

  return json({ ok: true });
}
