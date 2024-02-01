# Application Symfony SolRenov17

## Description
Site web PHP Symfony réalisé dans le cadre d'un stage de formation DWWM auprès d'un artisan solier moquettiste. (Désormais fermé)

## Prérequis
- PHP >= 8.1
- Composer
- Node.js >= 14.x
- npm >= 6.x
- MySQL >= 8.0

## Installation
1. Cloner le dépôt :
    ```bash
    git clone https://github.com/LouisC98/solrenov17.git
    ```
2. Installer les dépendances PHP via Composer :
    ```bash
    composer install
    ```
3. Installer les dépendances JavaScript via npm :
    ```bash
    npm install
    ```
4. Créer la base de données et charger les schémas initiaux :
    ```bash
    php bin/console doctrine:database:create
    php bin/console doctrine:migrations:migrate
    ```
5. Lancer le serveur de développement Symfony et le serveur de développement Webpack Encore :
    ```bash
    symfony server:start -d
    npm run dev-server
    ```

## Configuration
### Variables d'environnement
- Créer un fichier `.env` et configurer les valeurs selon votre environnement :
    ```dotenv
    APP_ENV=dev
    APP_SECRET=votre_secret
    DATABASE_URL="mysql://utilisateur:mot_de_passe@localhost:3306/nom_base_de_donnees?serverVersion=8&charset=utf8mb4"
    MAILER_DSN=smtp://user:pass@mailserver:port?encryption=tls&auth_mode=login
    ```

## Scripts disponibles
- Lancer le serveur de développement Symfony :
    ```bash
    symfony server:start
    ```
- Lancer le serveur de développement Webpack Encore :
    ```bash
    npm run dev-server
    ```
