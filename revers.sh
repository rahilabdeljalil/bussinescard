if[-z $1]; then
  echo " Error : please provide commit hash to revert"
  echo " Usage : ./revert.sh <commit hash> "
  exist 1
  fi

  git revert "$1" --no-edit