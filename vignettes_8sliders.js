var vignettes8sliders = [
  {
  "Vignette": "Now think about the short description you read of the person who described themselves as a <strong>lawyer</strong>. Compared to the average person, to what extent do you think they are capable of each of the following:",
  "Qs": ["Experiencing hunger","Experiencing physical or emotional pain ","Experiencing physical or emotional pleasure","Experiencing fear","Planning", "Exercising self-control", "Remembering", "Acting morally"],
  "textID": "lawyer"
  },
  {
  "Vignette": "Now think about the short description you read of the person who described themselves as a <strong>librarian</strong>. Compared to the average person, to what extent do you think they are capable of each of the following:",
  "Qs": ["Experiencing hunger","Experiencing physical or emotional pain ","Experiencing physical or emotional pleasure","Experiencing fear","Planning", "Exercising self-control", "Remembering", "Acting morally"],
  "textID": "librarian"
  },
  {
  "Vignette": "Now think about the short description you read of the person who described themselves as a <strong>stockbroker</strong>. Compared to the average person, to what extent do you think they are capable of each of the following:",
  "Qs": ["Experiencing hunger","Experiencing physical or emotional pain ","Experiencing physical or emotional pleasure","Experiencing fear","Planning", "Exercising self-control", "Remembering", "Acting morally"],
  "textID": "stockbroker"
  },
  {
  "Vignette": "Now think about the short description you read of the person who described themselves as a <strong>computer programmer</strong>. Compared to the average person, to what extent do you think they are capable of each of the following:",
  "Qs": ["Experiencing hunger","Experiencing physical or emotional pain ","Experiencing physical or emotional pleasure","Experiencing fear","Planning", "Exercising self-control", "Remembering", "Acting morally"],
  "textID": "computeer programmer"
  }
]

vignettes8sliders[0]["Qs"] = jsPsych.randomization.repeat(vignettes8sliders[0].Qs,1)
vignettes8sliders[1]["Qs"] = jsPsych.randomization.repeat(vignettes8sliders[1].Qs,1)
vignettes8sliders[2]["Qs"] = jsPsych.randomization.repeat(vignettes8sliders[2].Qs,1)
vignettes8sliders[3]["Qs"] = jsPsych.randomization.repeat(vignettes8sliders[3].Qs,1)

