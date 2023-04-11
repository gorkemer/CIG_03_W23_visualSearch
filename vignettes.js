var vignettes = [
  {
  "Vignette": "I am a lawyer. I often go out to eat with my friends after court, and somehow I always seem to get stuck with the bill. I don't want to pay for everyone; I just don't know how to say anything about it.  Also, I was just promoted to a higher position in another city, but I am content with my job.  My wife, on the other hand, would be ready to move in a second if she heard of the increase in salary. Although the offer would have been easy to keep from her, I told her. I also just bought the new bestseller from Barnes and Noble.",
  "Qs": ["This person is <b> ambitious.</b>","This person is <b>assertive</b>.","This person is <b>kind</b>.","This person is <b>impulsive</b>.","This person is <b>deceptive</b>."],
  "textID": "lawyer"
  },
  {

    "Vignette": "I am a librarian. I was born in east Texas, and I moved to Massachusetts many years ago. Last week, a new person moved into the apartment across the hall.  She was very attractive, so I invited her over for dinner and drinks. We had so much in common that there was never a break in the conversation.",
    "Qs": ["This person is <b>quiet.</b> ","This person is <b>introverted</b>. ", "This person is <b>pleasant</b>.  ","This person is <b>vain</b>. ","This person is <b>prudish</b>. "],
    "textID": "librarian"
  },
  {

    "Vignette": "I am a stockbroker. I live and work in New York City. A friend of mine just called to let me know that if I work an extra 10 hrs this week, I will get a shopping spree for $1,000 to Macy's department store. I told him that I didn't mind working the extra 10 hrs., but I really don't see the need in acquiring any more things. So, I guess I will donate the certificate to a homeless shelter.",
    "Qs": ["This person is <b>materialistic.</b>", "This person is <b>ambitious</b>.","This person is <b>cheerful</b>.","This person is <b>attentive</b>.","This person is <b>greedy</b>."],
    "textID": "stockbroker"
  },
  {
    "Vignette": "I am a computer programmer. My work place is a half a mile from home so I am able to walk to work everyday. I went to the university for a semester, but I had trouble understanding the material in my courses. Consequently, I left. Every year at Halloween, I invite all of my friends over, and we have a large party. This year, I think I am going to dress up as a vampire.",
    "Qs": ["This person is <b>quiet. </b>","This person is <b>intelligent</b>. ","This person is <b>prudish</b>.","This person is <b>pleasant</b>. ","This person is <b>introverted</b> . "],
    "textID": "computerProgram"
  }
]

vignettes[0]["Qs"] = jsPsych.randomization.repeat(vignettes[0].Qs,1)
vignettes[1]["Qs"] = jsPsych.randomization.repeat(vignettes[1].Qs,1)
vignettes[2]["Qs"] = jsPsych.randomization.repeat(vignettes[2].Qs,1)
vignettes[3]["Qs"] = jsPsych.randomization.repeat(vignettes[3].Qs,1)

