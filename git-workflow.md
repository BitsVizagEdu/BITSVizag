# GitHub Push and Merge Workflow

Use this exact flow to push your work and create a pull request:

```bash
# 1) Check your branch
git branch

# 2) Switch to your working branch (if needed)
git checkout professional-updates

# 3) Add and commit changes
git add .
git commit -m "your commit message"

# 4) Push your branch to GitHub
git push origin professional-updates
```

Then on GitHub:

1. Open the repository.
2. Click **Compare & pull request** for `professional-updates`.
3. Set base branch to your main college account branch (usually `main`).
4. Create the pull request and merge after review.
