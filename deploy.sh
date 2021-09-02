cd _site
git status
git checkout -- .well-known
git status
git add .
git commit -m "$(date)"
git push private deploy
