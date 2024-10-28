
if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  echo "Usage: ./push.sh \"Your commit message\""
  exit 1
fi

  git add .
  git commit -m "$1"
<<<<<<< HEAD
  git push origin main
=======
  git push orgin master
>>>>>>> parent of de3a0b2 (new folder to build bussinesCard using react)
