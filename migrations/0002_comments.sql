CREATE TABLE IF NOT EXISTS set_comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  set_id TEXT NOT NULL,
  device_id TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_comments_set_time
ON set_comments (set_id, created_at DESC);
