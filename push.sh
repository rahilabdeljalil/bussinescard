

if [ -z  "$1"]; then
  echo "Eroor : no commit message provided"
  echo "usage : ./push.sh \"Your commit message\" "
  exit 1
  fi

  git add .
  git commit -m "$1"
  git push orgin main