read -p "Are you in the working directory? " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

git add ./*
git commit -m "Update Source"
git push origin master