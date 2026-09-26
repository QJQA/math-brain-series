CREATE TABLE IF NOT EXISTS question_feedback (
  set_id TEXT NOT NULL,
  question_id INTEGER NOT NULL,
  device_id TEXT NOT NULL,
  vote INTEGER NOT NULL CHECK (vote IN (-1, 1)),
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (set_id, question_id, device_id)
);

CREATE INDEX IF NOT EXISTS idx_feedback_question
ON question_feedback (set_id, question_id, vote);
