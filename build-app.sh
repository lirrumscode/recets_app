ionic build --prod

sed -i 's/type="module"//g' ./www/index.html

rm -rf ./recetapp/www/
mkdir -p ./recetapp/www/
cp -r ./www/* ./recetapp/www/

cd ./recetapp

clickable