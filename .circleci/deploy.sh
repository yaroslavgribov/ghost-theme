ls -ld $(find .)
mkdir -p public/assets
cp -r assets/{build,fonts,icons,bill.svg,comments.png,favicon.ico,logosmall.png,rekblock.png} public/assets
cp -r partials public/
cp *.hbs public/
cp package.json public/

rsync -avzP public/ deploy@159.89.11.124:/home/deploy/theme/
# zip -r public.zip public