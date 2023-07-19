var faceTrials = [
  {
  "id": "happy_7N", // 09 April 2023 change: <- 7_neutral_1_happy
  "faceList": ["happy", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral"],
  },
  {
    "id": "sad_7N", // 7_neutral_1_sad
    "faceList": ["sad", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral"],
  },
  {
    "id": "neutral_7N", // 7_neutral_1_neutral
    "faceList": ["neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral"],
  },
  {
    "id": "happy_single", // single_happy
    "faceList": ["happy", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  },
  {
    "id": "sad_single", // single_sad
    "faceList": ["sad", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  },
  {
    "id": "neutral_single", // single_neutral
    "faceList": ["neutral", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  }
]

faceTrials = jsPsych.randomization.repeat(faceTrials, 25) // 1 set is 6 in length. 6 x 10 = 60 trials


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

var keyList = []
var valueList = []
for (let i = 0; i < 120; i++) {
  test = faceTrials[i]
  console.log(test.faceList)
  console.log(jsPsych.randomization.repeat(test.faceList, 1))
  test.faceList = jsPsych.randomization.repeat(test.faceList, 1)
  console.log("new:",test.faceList)
}
//var result = {};

//testResult = Object.assign(...keyList.map((k, i) => ({[k]: valueList[i]})))
//keyList.forEach((key, i) => result[key] = valueList[i]);

////const result = arrayTwo.map((element, index) => arrayOne[index].selected ? arrayOne[index].color : element);

//console.log(result);
//var newFaceList = faceTrials.map((obj, i) => ({ ...obj, faceList: flist[i] }));
////newFaceList = faceTrials.map((obj, i) => ({ ...obj, id: idlist[i] }));
