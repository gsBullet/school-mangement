/* 
web server install
  sudo apt-get update
  sudo apt upgrade -y
  sudo apt install apache2 -y

  Then access the var/www/index.html file 

node js install with nvm
  sudo apt-get update
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  source ~/.bashrc
  nvm list-remote
  nvm install v20.8.1

php install
  sudo apt update
  sudo apt install -y lsb-release gnupg2 ca-certificates apt-transport-https software-properties-common
  sudo add-apt-repository ppa:ondrej/php
  sudo apt update
  
  sudo apt install php8.2
  sudo apt install php8.2-fpm
  sudo apt install php8.2-{bcmath,fpm,xml,mysql,zip,intl,ldap,gd,cli,bz2,curl,mbstring,pgsql,opcache,soap,cgi}
  
  sudo apt install apache2 libapache2-mod-php8.2
  sudo a2enmod php8.2
  sudo systemctl restart apache2


git install
  sudo apt-get update
  sudo apt-get install git-all
  git version

express with nodejs install (for node js project)
  npm i express 
  (then manualy app.js file create and practice perpose simple hello world project setup)

firwall setup (for local port like 3000 port access if have no domain)
  sudo ufw allow 3000/tcp
  sudo ufw status
  (for access the port some change for this express setup given bellow)
  (before change)
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  (after replace)
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://103.191.240.173:${PORT}`);
  });

proxy install (after terminate the terminal the nodejs project close but the proxy solve this problem open this port after terminate this terminal)
  sudo a2enmod proxy
  sudo a2enmod proxy_http
  sudo /etc/init.d/apache2 restart
  (for watch)
  npm install pm2 -g
  pm2 start app.js --watch (for run this port and watch any change)
  pm2 ls (how much port is running by pm2)
  pm2 restart id (id is denoted the number of running port or app like first one is 0, second one is 1)
  pm2 stop id (stop the port like app)
  pm2 delete id (delete the app)

  proxy passing(120.213.100.173 to workshopnode.shefat.info)
  at first create .conf file in this (/etc/apache2/sites-available/) directories like(workshopnode.shefat.info.conf)
  <VirtualHost *:80>
   ServerName workshopnode.shefat.info
   ProxyPreserveHost on
   ProxyPass / http://localhost:3000/
   ProxyPassReverse / http://localhost:3000/
  </VirtualHost> (write this code in this workshopnode.shefat.info.conf file)
  sudo a2ensite workshopnode.shefat.info.conf
  sudo systemctl restart apache2.service or sudo service apache2 restart
  remove this second parameter port like 0.0.0.0 from this app.js file
  pm2 start app.js
  pm2 start app.js --name express_website (for change this name)

mySQL install
  sudo apt update
  sudo apt install mysql-server
  sudo systemctl start mysql.service
  create sql folder (/var/www/)
  alert **** this is wrong. git clone (/var/www/sql/) folder (https://github.com/phpmyadmin/phpmyadmin.git)
  create a sql conf file the workshop.shefat.info.conf file
  sudo apt update
  phpmyadmin zip file upload(/var/www/sql) directory then upzip by (unzip filename)
  then copy this unzip directory and set .conf file in the document root and Directory

mySQL setup (root password setup)
  sudo mysql
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'dbMa$%!@#*@95ext965874-+/'; (avoid all the @ symbol from this password)
  exit


!DONE!



  
  
*/
