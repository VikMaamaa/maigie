#!/usr/bin/env bash

set -euo pipefail

TEMPLATE_FILE="${2:-.env.example}"
OUTPUT_FILE="${1:-.env}"

if [ ! -f "$TEMPLATE_FILE" ]; then
  echo "Template file '$TEMPLATE_FILE' not found"
  exit 1
fi

echo "Generating '$OUTPUT_FILE' from '$TEMPLATE_FILE' using environment variables..."

> "$OUTPUT_FILE"

while IFS= read -r line || [ -n "$line" ]; do
  # Preserve empty lines and comments
  if [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]]; then
    echo "$line" >> "$OUTPUT_FILE"
    continue
  fi

  # Handle KEY=VALUE lines
  if [[ "$line" =~ ^([A-Za-z_][A-Za-z0-9_]*)=(.*)$ ]]; then
    key="${BASH_REMATCH[1]}"
    default_value="${BASH_REMATCH[2]}"

    # Use environment variable if set, otherwise fall back to default from template
    value="${!key:-$default_value}"
    echo "${key}=${value}" >> "$OUTPUT_FILE"
  else
    # Any other line is copied as-is
    echo "$line" >> "$OUTPUT_FILE"
  fi
done < "$TEMPLATE_FILE"

echo "Generated '$OUTPUT_FILE'."


