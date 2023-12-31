# For Fresher and Beginners in ReactJS
Note: I have created this project from scratch while learning NextJS, there are many rooms empty for improvements, if you can improve code then please **contribute**.
Thank you.


## Setting up Strapi E-Commerce Backend with PostgreSQL

For frontend, we are using [NextJS](https://github.com/faiz-ansari-afk/ijazat_next "NextJS Frontend").

Welcome to the guide on setting up a Strapi E-Commerce backend using PostgreSQL as the database. This guide will walk you through the process of setting up your development environment and running the Strapi backend locally.

## Setup
**Prerequisites**
Before you begin, make sure you have the following installed on your system:

Node.js (version: 16.14.2): Make sure you have Node.js installed. You can download it from https://nodejs.org/.

PostgreSQL(version 15.2): Install PostgreSQL on your system. You can download it from https://www.postgresql.org/download/.
-  setup first time database username and master password.
- *Note:* Keep it running in backend to make sure our strapi is connected to database.
- We will be talking about hosting strapi soon...(don&apos;t worry).
<br>
[========]

### Step 1: Clone the Repository
Clone the Strapi E-Commerce backend repository to your local machine:
`git clone https://github.com/faiz-ansari-afk/ijazat_next.git`
<br>
### Step 2: Install Dependencies
Navigate to the project directory and install the necessary dependencies:
`cd ijazat_strapi`

`npm install`

### Step 3: Configure PostgreSQL
Create a new PostgreSQL database for your Strapi project.

Open the .env file in the project root and update the database connection settings:
```env
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=your_database_name
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
```

### Step 4: Run Migrations
Run the database migrations to create the required tables:
`npm run build`

### Step 5: Start the Strapi Server
Start the Strapi server by running:
`npm run develop`

The server will start, and you'll be able to access the Strapi admin panel at `http://localhost:1337/admin`

### Step 6: Set Up Admin Account
Open the admin panel and sign up with a new admin account.

Once logged in, you can start creating content types, managing products, and configuring your e-commerce backend.

## Additional Configuration
You can customize the content types, API endpoints, and authentication settings according to your e-commerce project's requirements.

For production deployment, make sure to secure your environment variables and consider using a process manager like PM2 to manage the Strapi server.

## Conclusion
You have successfully set up a Strapi E-Commerce backend with PostgreSQL as the database. You can now start building and customizing your e-commerce application using the Strapi admin panel and API endpoints. If you need further assistance, refer to the Strapi documentation.

**Happy coding!**




# Now configuring premade Ecommerce to work:
*Note: For practice purpose, you don&apos;t have to follow below setup, above setup is enough for fresher.*
Env vars that are automatically generated by Strapi are:
If not then add it manually.
```javascript
HOST=0.0.0.0
PORT=1337
APP_KEYS=any long secret key
API_TOKEN_SALT=any secret key 1
ADMIN_JWT_SECRET=any secret key 2
JWT_SECRET=any secret key 3
```
##Setting up Cloudinary for Strapi Image Storage
In this guide, we&apos;ll walk you through the process of setting up Cloudinary as the image storage provider for your Strapi project. Cloudinary is a popular cloud-based service that allows you to manage and optimize images and videos for your application.

Before you begin, make sure you have the following:

1. **Strapi Project**: Make sure you have a Strapi project set up and running.
3. **Cloudinary Account**: Sign up for a Cloudinary account at https://cloudinary.com.

### Step 1: Install the Cloudinary Provider
1. In your Strapi project directory, install the Cloudinary provider package: <br></br`npm>`npm install strapi-provider-upload-cloudinary --save` or you can explore the plugin market to install this extension
2. Once the installation is complete, restart your Strapi server.

### Step 2: Configure Cloudinary in Strapi
Open your Strapi project.

Navigate to the `config/plugins.js` file.

Add the Cloudinary provider configuration to the upload object:

```javascript
module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });
```
### Step 3: Set Environment Variables
1. Add your Cloudinary credentials to the existing `.env` file:
```javascript
#previous env vars...
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
[========]

### Conclusion
You have successfully set up Cloudinary as the image storage provider for your Strapi project. Now, your application can seamlessly upload and manage images using Cloudinary&apos;s services. Remember to refer to the Cloudinary documentation for more advanced features and customization options.

## Remember This
1. If you are using cloudinary for image optimization the API response returned by Strapi is `String`(url only)
2. If you are working in local development without cloudinary, then the API response returned by Strapi is `JSON`, where you have to dig down the nested field to get the image URL. 
3. There is already a function I have created to do this hardwork at [Frontend](http://https://github.com/faiz-ansari-afk/ijazat_next "Frontend") (repo).
4. Just pass the json and it will return you the Image URL.

5. For NextJS ISR you will be needed one more env var `WEBHOOK_TOKEN=your secret value` this value must match with the value in Frontend env var to properly work ISR revalidation and other SMS services.

