# Relay - Real-Time Chat App  

Relay is a real-time chat application built using the **MERN stack**, **Socket.io**, **TailwindCSS**, and **Daisy UI**. It enables seamless real-time communication with modern features for user interaction and management.



## 🌟 Features  

- **Authentication & Authorization** with JWT  
- **Real-time Messaging** using Socket.io  
- **Online User Status**  
- **Global State Management** with Zustand  
- **Responsive UI** using TailwindCSS & Daisy UI  
- **Error Handling** on both client and server sides  




## 🔧 Technologies Used  

- **Frontend**: React, TailwindCSS, Daisy UI, Socket.io client, Zustand (for state management), React Router.  
- **Backend**: Node.js, Express.js (for API routes, authentication), Socket.io server.  
- **Database**: MongoDB (for storing user data and messages).  
- **Authentication**: JWT (JSON Web Token) for secure login.  
- **Deployment**: Render.com for live deployment.




## 🛠 Installation  

To get started with the development environment, clone the repository and install dependencies:

```bash
git clone https://github.com/asha-saini06/relay-chat-app.git
cd relay-chat-app
npm install
```

### Backend Setup & Environment Variables

Before running the app, you need to configure the backend by setting up the necessary environment variables in a `.env` file:

1. **`MONGODB_URI`**: The connection string to your MongoDB database (e.g., MongoDB Atlas).
2. **`PORT`**: The port on which the server will run (default is `5000`).
3. **`JWT_SECRET`**: A secret key used for JWT authentication to ensure security in token generation and verification.
4. **`CLOUDINARY_CLOUD_NAME`**: Your Cloudinary cloud name for media file uploads.
5. **`CLOUDINARY_API_KEY`**: The API key provided by Cloudinary for authentication.
6. **`CLOUDINARY_API_SECRET`**: The API secret used by Cloudinary for secure file upload requests.


#### Example `.env` file:

```bash
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=your-very-secure-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

Make sure to replace the placeholders with your actual credentials and settings. Once the environment variables are set up, you're ready to proceed with running the backend server.

### Running the Development Server  

To run the app locally, execute the following command:

```bash
npm run dev
```

This will start the app at `http://localhost:3000`.




## 🔄 Deployment  

This app is deployed on [Render.com](https://render.com/) for public access. The live app can be accessed here:

[Relay Chat App - Live](https://relay-chat-app-491v.onrender.com/)




## 🤝 Contributing  

Contributions are welcome! If you'd like to contribute to the project, follow these steps:

1. Fork the repository.  
2. Create a new branch (`git checkout -b feature/your-feature`).  
3. Commit your changes (`git commit -am 'Add some feature'`).  
4. Push to the branch (`git push origin feature/your-feature`).  
5. Create a new Pull Request.

---
