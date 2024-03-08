rm -rf public/*
cp *.hbs public/
cp package.json public/
cp -r partials public/
cp -r assets/build public/assets/
cp assets/*.png public/assets/
ditto -c -k --sequesterRsrc --keepParent public public.zip