rm -rf public/*
cp *.hbs public/
cp package.json public/
cp -r partials public/
mkdir -p public/assets/js/lib
cp -r assets/build public/assets/
cp assets/*.png public/assets/
cp -r assets/js/lib public/assets/js/
ditto -c -k --sequesterRsrc --keepParent public public.zip