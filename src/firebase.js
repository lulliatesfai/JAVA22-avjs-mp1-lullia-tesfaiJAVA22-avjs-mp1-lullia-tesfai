let highscorelist; 

async function getFirebase() {
  const url = 'https://highscore2-ea1fd-default-rtdb.europe-west1.firebasedatabase.app/highscore.json';

  // Fetch data from Firebase
  const response = await fetch(url);
  const data = await response.json();


  if (!data) {
    return [];
  }

  // Create an array of objects from the Firebase data
  highscorelist = Object.keys(data).map(key => ({
    name: data[key].name,
    score: data[key].score
  }));
  //Sort the list in numerical order
  highscorelist.sort((a, b) => b.score - a.score);
  //Return the array of objects
  return highscorelist;
}


async function putToFirebase(highscorelist) {
  const url = 'https://highscore2-ea1fd-default-rtdb.europe-west1.firebasedatabase.app/highscore.json';

  const options = {
    method: 'PUT',
    body: JSON.stringify(highscorelist),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }

  const response = await fetch(url, options);

  const data = await response.json();
  return data;
}

export { getFirebase };
export { putToFirebase };