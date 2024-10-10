
call npm run build
call scp -r ./_site/* spritfest.se@ssh.spritfest.se:/customers/4/1/c/spritfest.se/httpd.www/sexit
call ssh spritfest.se@ssh.spritfest.se chmod -R 644 /customers/4/1/c/spritfest.se/httpd.www/sexit