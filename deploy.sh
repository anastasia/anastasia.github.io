#!/usr/bin/env bash
cd _site
git status
git checkout -- .well-known
git status
git add -A .
git commit -m "$(date)"
git push private deploy
