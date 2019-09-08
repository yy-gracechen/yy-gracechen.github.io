read -p "Are you in the working directory? " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

echo Using Python Version:
python --version
echo
echo Serving Static Website on http://localhost:8000
python -m SimpleHTTPServer &
