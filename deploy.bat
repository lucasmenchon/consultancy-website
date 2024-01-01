
npm run build && ^
cd .\dist && ^
echo amariconelli.luccas.dev > CNAME && ^
IF NOT EXIST 404.html (
  echo ^<!DOCTYPE html^>^<html^>^<head^>^<title^>404 Not Found^</title^>^</head^>^<body^>^<p^>404 - Página não encontrada^</p^>^</body^>^</html^>^> > 404.html
)

git init && ^
git add -A && ^
git commit -m "deploy in .bat file" && ^
git push -f git@github.com:lucasmenchon/consultancy-website.git main:gh-pages && ^
cd ..