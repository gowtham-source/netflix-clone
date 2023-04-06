
# <p align="center">Netflix-clone DEVREV!</p>

<h1 align="center">Hi There, I'm Sakthi Murugeshwari👋</h1>
<h5 align="center">From 3rd yr cse, SEC</h5>

<p align="center">
<img src="https://user-images.githubusercontent.com/75899822/230385926-ddd32181-a547-4469-b903-54377ea5300a.png" alt="sakthiflix" width="520" height="320">
</p>

This project is a web application that replicates the functionality of popular video streaming service, Netflix. The application is designed to provide users with a seamless and engaging viewing experience, with features that include:

1. A landing page that displays popular movies and TV shows, as well as a search bar for users to search for specific titles.
2. A user authentication system that allows users to create accounts, log in, and log out.
3. A user profile page that displays a user's viewing history and watch list.
4. A media player that allows users to stream movies and TV shows.
5. A backend API that serves movie and TV show data to the frontend.

---
**NOTE:**

This project is Netflix clone that I have developed using modern MERN (MongoDB, Express.js, React, Node.js) concepts instead of outdated libraries
Additionally, the recommendation model used in this project is portable and can be run anywhere.

---

### Technology Stack
FrameWorks:
- [x] React
- [x] Mongodb
- [x] Firebase
- [x] Flask
- [x] Streamlit

MERN STACK

Packages used:
* Tensorflow
* Sci-kit Learn(sklearn)
* Pickle
* request

## Features
### **Landing Page**
 - The landing page is the first page users see when they visit the application. It displays popular movies and TV shows that users can click on to start watching. The page also includes a search bar that allows users to search for specific titles by keywords such as title, actors, and director.

 - The search functionality is powered by the TMDB API, which allows the application to access a large collection of movies and TV shows. Users can click on a title to see more information about it, including its release date, genre, rating, and summary.

![image](https://user-images.githubusercontent.com/75899822/230412069-0dfe778b-40de-42cf-9a3b-04b60aba0cdb.png)

### **Authentication System**
 - The authentication system allows users to create accounts, log in, and log out of the application. This is achieved using Firebase Auth, which provides a secure and reliable user authentication service.

 - When a user creates an account, their information is stored securely in the application's MongoDB database. This information includes their email address, password, viewing history, and watch list.

 - Once a user has logged in, they can access their profile page, where they can view their viewing history and manage their watch list. The profile page also includes a logout button that allows users to log out of the application.

![image](https://user-images.githubusercontent.com/75899822/230411308-2817e3d4-3fa3-4556-a08c-3929f993dbde.png)

### **User Profile Page**
 - The user profile page displays a user's viewing history and watch list. This allows users to keep track of what they have watched and what they want to watch next. The viewing history is stored in the MongoDB database and is updated in real-time as the user watches movies and TV shows.

 - The watch list is stored using a linked list data structure, which allows for efficient adding and removing of items. Users can add titles to their watch list by clicking on the "Add to Watch List" button on the title's page. They can also remove titles from
![image](https://user-images.githubusercontent.com/75899822/230413794-65d8f53c-18b6-44d6-adde-ec3e081dfa01.png)
In the above image users add their watch list, it is stored in the user(mongodb database)
</br>

![image](https://user-images.githubusercontent.com/75899822/230415267-e8b12bbe-546e-4faf-87ab-e65a03057554.png)

### **Recommendation System**
 - The recommendation system is a key feature of the Netflix clone, and it's designed to provide users with personalized recommendations based on their viewing history and preferences. The system is built using machine learning algorithms, specifically collaborative and content-based filtering.

 - Collaborative filtering works by finding patterns in user behavior, such as which movies they watch and how they rate them. This data is used to identify other users who have similar tastes, and the system recommends movies and TV shows that those users have enjoyed.

 - Content-based filtering works by analyzing the content of movies and TV shows, such as their genre, director, and actors. This data is used to recommend other movies and TV shows that share similar content.

 - The recommendation system uses a hybrid approach that combines both collaborative and content-based filtering. It also uses cosine similarity to identify similarities between movies and TV shows, which helps to improve the accuracy of the recommendations.

 - Cosine similarity is a technique used in the recommendation system to calculate the similarity between two movies or TV shows. It's a measure of the cosine angle between two vectors, where each vector represents the features of a movie or TV show.

 - In the context of the recommendation system, cosine similarity is used to identify similarities between movies and TV shows based on their features, such as genre, director, and actors. The more similar two movies or TV shows are, the higher their cosine similarity score.

 - To calculate the cosine similarity score, the system creates a vector for each movie or TV show, where each element of the vector corresponds to a feature of the movie or TV show. For example, if one of the features is the genre of the movie, then each element of the vector would represent a different genre.

 - Once the vectors are created, the cosine similarity score is calculated as the dot product of the two vectors divided by the product of their magnitudes. This gives a score between 0 and 1, where 1 indicates that the two movies or TV shows are identical, and 0 indicates that they have no similarity.

 - The recommendation model was trained using a dataset of movies and TV shows, and the resulting model was stored as a pickle file. The model is loaded by a Flask API that serves the user input from recent interactions and sends it as a JSON file to the API. The Flask API then returns a JSON output to the React site, which displays the recommendations to the user.
 
 - By using cosine similarity to identify similarities between movies and TV shows, the recommendation system is able to provide more accurate recommendations that are tailored to each user's preferences. This helps to improve the overall user experience and encourages users to discover new content on the platform.

## Setup
First copy the repo of Sakthiflix (in Terminal)
```
git clone 
```
And then go to the project folder 
```
cd sakthiflix
```
For Frontend
```
cd netflix_front
yarn
```
For Backend
```
cd ..
cd netflix_back
yarn
```

And for recommendation system
```
cd ..
pip install -r requirements.txt
```

## To run this Webapp
For Frontend & Backend run the below command to start the developement server locally at port 3000 & 5000 respectively
Terminal 1 (for frontend)
```
yarn start
```
or 
```
yarn dev
```
Terminal 2 (for backend)
```
yarn start
```
---
**NOTE:**

Before starting the backend service, setup the Mongodb @local machine

---

For Recommendation System (flask api)
```
python main.py
```
To check this api locally we can pass the the --curl command in terminal or nodeman </br>
Here is the eg: to test this api using --curl command 
```
curl --header "Content-Type: application/json" --request POST --data "{\"movie\":\"The Godfather\"}" http://localhost:5000/recommend
```
The above command sends the input as "The GodFather" in the format of json `{"movie":"The GodFather"}` to the flask api server
</br>
sample output(request from the server)
<p align="center">
<img src="https://user-images.githubusercontent.com/75899822/230395688-56ccc2d1-d860-4378-863e-a690d0ac1514.png" alt="sakthiflix" width="700" height="300">
</p>
and this our Recommended movie list responded from our server.

And we can also run this recommendation model 
</br>
To run this
```
streamlit run app.py
```

![image](https://user-images.githubusercontent.com/75899822/230402281-6f3c5112-ac25-4047-937c-470ac659abf4.png)


### Feature Enhancement

- Further this can be developed and handled with the large scale of user data, and a admin controls which includes a dashboard of analytics that shows the insights of the user interactions and enables us to develop some more features.
- The recommendation system can also be enhanced with the optimal feature such as recommendations based on seasonal trends, location based etc...
- And needs to setup the Subscription page which includes the transaction services!
- "Last but not least, A Chatbot system developed based on the Generative model with cosine similarity and sentiment analyzer that suggest the movies for the user based on their current mood - This will help us to interact with the user based on user emotions etc.."

