mkdir -p public/assets
cp -r assets/build public/assets/
cp -r assets/fonts public/assets/
cp -r assets/icons public/assets/
cp assets/logosmall.png public/assets/
cp assets/rekblock.png public/assets/
cp assets/favicon.ico public/assets/
cp -r partials public/
cp *.hbs public/
cp package.json public/

rsync -avzPO public/ deploy@159.89.11.124:/var/www/ghost/content/themes/cinemaholics/
# zip -r public.zip public