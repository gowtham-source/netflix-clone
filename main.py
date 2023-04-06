import pickle
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load the movie list and similarity matrix
movies = pickle.load(open('model/movie_list.pkl', 'rb'))
similarity = pickle.load(open('model/similarity.pkl', 'rb'))

# Define the API route


@app.route('/recommend', methods=['POST'])
def recommend_movies():
    selected_movie = request.json['movie']
    index = movies[movies['title'] == selected_movie].index[0]
    distances = sorted(
        list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_movie_names = []
    # recommended_movie_posters = []
    for i in distances[1:14]:
        # fetch the movie poster
        movie_id = movies.iloc[i[0]].movie_id
        # recommended_movie_posters.append(fetch_poster(movie_id))
        recommended_movie_names.append(movies.iloc[i[0]].title)

    # Return the recommended movie names and posters as a JSON response
    response = {'recommended_movies': recommended_movie_names}
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
