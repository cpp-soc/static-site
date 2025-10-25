#!/usr/bin/env bash
set -euo pipefail

git checkout main
git pull origin main

docker build \
  -f app/Dockerfile \
  -t static-site:local \
  app