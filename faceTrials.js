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
    "faceList": ["sad", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral"],
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


faceTrials[0]["faceList"] = jsPsych.randomization.repeat(faceTrials[0].faceList,1)
console.log("GORKI:", faceTrials[0]["faceList"])
faceTrials[1]["faceList"] = jsPsych.randomization.repeat(faceTrials[1].faceList,1)
faceTrials[2]["faceList"] = jsPsych.randomization.repeat(faceTrials[2].faceList,1)
faceTrials[3]["faceList"] = jsPsych.randomization.repeat(faceTrials[3].faceList,1)
faceTrials[4]["faceList"] = jsPsych.randomization.repeat(faceTrials[4].faceList,1)
faceTrials[5]["faceList"] = jsPsych.randomization.repeat(faceTrials[5].faceList,1)

