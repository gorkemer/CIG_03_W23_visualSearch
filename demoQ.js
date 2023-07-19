const introToDemog = {
    type: 'html-button-response',
    stimulus: "You will now be asked some questions pertaining to demographic information. Please click 'continue' button to begin. Also, please feel free to skip some questions if you do not feel comfortable answering it. ",
    trial_duration: null,
    choices: ['Continue']
  }
  
const d_age = {
type: 'survey-text',
questions: [
    {prompt: "How old are you?",  rows: 3, columns:5}],
on_finish: function(data){
    data.stimulus = "Age?"  
    data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
    var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
    jsPsych.data.addDataToLastTrial({timestamp});
    data.image_ID = "no_image"
    saveData()
},
trial_duration: null
}

const d_race_open = {
    type: 'survey-text',
    questions: [
        {prompt: "How would you describe your racial identity?",  rows: 3, columns:5}],
    on_finish: function(data){
        data.stimulus = "RaceOpen"  
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
    }

const d_race_closed = {
type: 'survey-multi-choice',
questions: [
    {
    prompt: "Please choose one of the boxes below that fits your ethnicity/race:", 
    name: 'raceClosed', 
    options: ['Asian/Pacific Islander', 'Black/African American', 'Hispanic/Latina(o)', 'White/European American', 'Native American', 'Mixed (please specify at the next screen)', 'Other (please specify at the next screen)'], 
    required: false,
    horizontal: true
    }
],
on_finish: function(data){
    data.stimulus = "raceClosed"  
    data.response = jsPsych.data.get().last(1).values()[0].responses
    var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
    jsPsych.data.addDataToLastTrial({timestamp});
    data.image_ID = "no_image"
    saveData()
    }
}

const d_race_closed_specify = {
    type: 'survey-text',
    questions: [
        {prompt: "Please specify.",  rows: 3, columns:5}],
    on_finish: function(data){
        data.stimulus = "d_race_closed_specify"  
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
    }

const d_race_if_otherMixed = {
    timeline: [d_race_closed_specify],
    conditional_function: function () {
      //var data = jsPsych.data.get().last(1).values()[0];
      if (jsPsych.data.get().last(1).values()[0].response == '{\"raceClosed\":\"Mixed (please specify at the next screen)\"}'||
      jsPsych.data.get().last(1).values()[0].response == '{\"raceClosed\":\"Other (please specify at the next screen)\"}') { //jsPsych.pluginAPI.compareKeys(data.response, "f")
      return true;
      } else {
        return false;
      }
    }
}

/* const postExpQuestions = {
    timeline:[d_age, d_race_closed, d_race_if_otherMixed]//DemoQ1, d_age, d_race_open, d_race_closed,
} */

const d_gender = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "What is your gender?", 
        name: 'gender', 
        options: ['Woman', 'Man', 'Non-binary', 'Agender', 'Other (please specify)'], 
        required: false,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Gender?"  
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    }

const d_gender_other_specify = {
    type: 'survey-text',
    questions: [
        {prompt: "Please specify",  rows: 3, columns:5}],
    on_finish: function(data){
        data.stimulus = "d_gender_other_specify"  
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
    }

const d_gender_if_other = {
    timeline: [d_gender_other_specify],
    conditional_function: function () {
        if (jsPsych.data.get().last(1).values()[0].responses == '{"gender":"Other (please specify)"}') { 
        return true;
        } else {
        return false;
        }
    }
}

/* const postExpQuestions = {
    timeline:[d_gender, d_gender_if_other]//DemoQ1, d_age, d_race_open, d_race_closed,
} */

const d_sexualOri = {
    type: 'survey-multi-select',
    questions: [
        {
        prompt: "What is your sexual orientation (select all that apply)?", 
        name: 'sexualOrientation', 
        options: ['Lesbian/Gay', 'Heterosexual', 'Asexual', 'Bisexual', 'Pansexual', 'demisexual', 'Other'], 
        required: false,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Sexual orientation?"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
}

const d_sexualOri_other_specify = {
    type: 'survey-text',
    questions: [
        {prompt: "Please specify",  rows: 3, columns:5}],
    on_finish: function(data){
        data.stimulus = "d_sexualOri_other_specify"  
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
    }

const d_sexualOri_if_other = {
    timeline: [d_sexualOri_other_specify],
    conditional_function: function () {
        if (jsPsych.data.get().last(1).values()[0].responses == '{"sexualOrientation":"Other"}') { 
        return true;
        } else {
        return false;
        }
    }
}

/* const postExpQuestions = {
    timeline:[d_sexualOri, d_sexualOri_if_other]//DemoQ1, d_age, d_race_open, d_race_closed,
} */

const d_houseIncome = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "What is your family's annual household income? (If you don't know, leave this blank.)", 
        name: 'householdIncome', 
        options: ['Less than $25k', '25-50k', '50-75k', '75-100k', '100k-150k','More than 150k'], 
        required: false,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "householdIncome"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    }

const d_religion = {
    type: 'survey-text',
    questions: [
        {prompt: "If you identify with a religious identity, please list it below.",  rows: 3, columns:5}],
    on_finish: function(data){
        data.stimulus = "religiousOpen"  
        data.response = jsPsych.data.get().last(1).values()[0].response
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
    }

const d_eng_1 = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Is English your first language?", 
        name: 'EnglishFirst', 
        options: ['Yes', 'No'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "English your first and primary language?"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    }

const d_eng_2 = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Is English your primary or one of your primary language?", 
        name: 'EnglishPrimary', 
        options: ['Yes', 'No'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "English your first and primary language?"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    }
const d_english_ifNo = {
    timeline: [d_eng_2],
    conditional_function: function () {
        if (jsPsych.data.get().last(1).values()[0].responses == '{"EnglishFirst":"No"}') { 
        return true;
        } else {
        return false;
        }
    }
}

const d_eng_3 = {
    type: 'survey-text',
    questions: [
        {prompt: "For how many years have you been fluent in English?",  rows: 3, columns:5}],
    on_finish: function(data){
        data.stimulus = "englishHowManyYears"  
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
    }

const d_english_ifNo_2 = {
    timeline: [d_eng_3],
    conditional_function: function () {
        if (jsPsych.data.get().last(1).values()[0].responses == '{"EnglishPrimary":"No"}') { 
        return true;
        } else {
        return false;
        }
    }
}

/* const postExpQuestions = {
    timeline:[d_eng_1, d_english_ifNo, d_english_ifNo_2]//DemoQ1, d_age, d_race_open, d_race_closed,
} */

const d_livedOutside = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Have you lived outside of the U.S. for 2 years or more?", 
        name: 'haveYouLivedOutside', 
        options: ['Yes', 'No'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Have you lived outside of the U.S. for 2 years or more?"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    }

const d_livedOutside_howMany = {
    type: 'survey-text',
    questions: [
        {prompt: "For how many years have you lived in the United States?",  rows: 3, columns:5}],
    on_finish: function(data){
        data.stimulus = "howManyYearsInUS"  
        data.response = jsPsych.data.get().last(1).values()[0].response["Q0"]
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
    }

const d_livedOutside_ifYes = {
    timeline: [d_livedOutside_howMany],
    conditional_function: function () {
        if (jsPsych.data.get().last(1).values()[0].responses == '{"haveYouLivedOutside":"Yes"}') { 
        return true;
        } else {
        return false;
        }
    }
}
    
/* const postExpQuestions = {
    timeline:[d_livedOutside, d_livedOutside_ifYes]//DemoQ1, d_age, d_race_open, d_race_closed,
} */

const d_handed = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Are you right-handed, left-handed, or ambidextrous?", 
        name: 'handed', 
        options: ['Right-handed', 'Left-handed', 'Ambidextrous (please explain)'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "handed"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    }

const d_handed_explain = {
    type: 'survey-text',
    questions: [
        {prompt: "Please explain",  rows: 3, columns:5}],
    on_finish: function(data){
        data.stimulus = "d_handed_explain"  
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
    }

const d_handed_ifAmbi = {
    timeline: [d_handed_explain],
    conditional_function: function () {
        if (jsPsych.data.get().last(1).values()[0].responses == '{"handed":"Ambidextrous (please explain)"}') { 
        return true;
        } else {
        return false;
        }
    }
}

/* const postExpQuestions = {
    timeline:[d_handed, d_handed_ifAmbi]
} */

const d_vision = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Do you wear corrective lenses like contacts or glasses?", 
        name: 'vision', 
        options: ['Yes', 'No'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Do you wear corrective lenses like contacts or glasses?"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    }

const d_vision_2 = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "If so, are you wearing your corrective lenses right now?", 
        name: 'Vision2', 
        options: ['Yes', 'No'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "If so, are you wearing your corrective lenses right now?"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    }

const d_vision_3 = {
    type: 'survey-text',
    questions: [
        {prompt: "Have you had surgery to correct your vision?",  rows: 30, columns:50}],
        on_finish: function(data){
        data.stimulus = "Have you had surgery to correct your vision?"    
        data.response = jsPsych.data.get().last(1).values()[0].response["Q0"]
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
}

const d_vision_4 = {
    type: 'survey-text',
    questions: [
        {prompt: "Do you have any visual impairments? Please tell us about any vision difficulties you have that may have inhibited your ability to see the images you rated:",  rows: 30, columns:50}],
        on_finish: function(data){
        data.stimulus = "Do you have any visual impairments?"    
        data.response = jsPsych.data.get().last(1).values()[0].response["Q0"]
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
}

const d_vision_ifYes = {
    timeline: [d_vision_2],
    conditional_function: function () {
        if (jsPsych.data.get().last(1).values()[0].responses == '{"vision":"Yes"}') { 
        return true;
        } else {
        return false;
        }
    }
}

const d_vision_ifYes_2 = {
    timeline: [d_vision_3, d_vision_4],
    conditional_function: function () {
        if (jsPsych.data.get().last(1).values()[0].responses == '{"Vision2":"Yes"}') { 
        return true;
        } else {
        return false;
        }
    }
}
    
/* const postExpQuestions = {
    timeline:[d_vision, d_vision_ifYes, d_vision_ifYes_2]
} */

const d_politics = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Where do your political views fall?", 
        name: 'politics', 
        options: ['1 (Liberal)', '2', '3', '4', '5', '6', '7 (Conservative)'], 
        required: false,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Where do your political views fall?"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    }

const d_prevPsychClass = {
    type: 'survey-text',
    questions: [
        {prompt: "What psychology classes have you taken during your academic career?",  rows: 30, columns:50}],
        on_finish: function(data){
        data.stimulus = "What psychology classes have you taken during your academic career?"    
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
}
    
/* const postExpQuestions = {
    timeline:[d_politics, d_prevPsychClass]
} */
/// start of Suspicion ///

const susp_study = {
    type: 'survey-text',
    questions: [
        {prompt: "What did you think that study was about? Press 'continue' when you have finished."}], // rows: 30, columns:50
        on_finish: function(data){
        data.stimulus = "What did you think that study was about?"    
        data.response = jsPsych.data.get().last(1).values()[0].response["Q0"]
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
}

const susp_techDiff = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "In that study, were there any technical difficulties?", 
        name: 'Susp_techDiff', 
        options: ['Yes', 'No'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Susp_techDiff"    
        data.response = jsPsych.data.get().last(1).values()[0].responses
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
        }
    } 

const susp_techDiff2 = {
    type: 'survey-text',
    questions: [
        {prompt: "Please elaborate:",  rows: 30, columns:50}],
        on_finish: function(data){
        data.stimulus = "Susp_techDiff2_open"    
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        data.image_ID = "no_image"
        saveData()
    },
    trial_duration: null
}

const susp_techDiffIfYes = {
    timeline: [susp_techDiff2],
    conditional_function: function () {
        if (jsPsych.data.get().last(1).values()[0].responses == '{"Susp_techDiff":"Yes"}') { 
        return true;
        } else {
        return false;
        }
    }
}



/// end of Suspicion ///


var debrief = {
    type: "instructions",
      pages: function(){
        return [`
        <div style="width:700px;"><p style='font-size: 25px'>
        <br><br> <p style="color:blue;">The experiment has ended. Thank you so much for your time! </p>
        <b> Study Debriefing Form </b>
        <p>People often make judgments about others' emotions, and when these judgments are made hastily, they tend to negatively biased. For example, people often believe that others are more threatening, or angry than they actually are. Recently, we found that these negatively biases are exaggerated when people make evaluations of crowds of people compared to individuals. Yet little is known about how this angry-crowd bias depends on the identities of the people in those crowds (e.g., their genders, ages, races, etc.). It's also unclear how perceivers gather information about people in crowds before making these judgements (e.g., whom do they look at, and in what order?). Lastly, we don't know whether a person's own beliefs about crowds, or about others' gender, age, and race, for example, impact these judgments. The study you participated in today is part of a series of studies we're conducting to find some answers to these questions. In our online study, we're asking perceivers to look at computer-generated images of people and tell us how they perceive their gender, race, age, etc. In the lab, we're showing perceivers these computer-generated people (yes, they're completely fake--not real people!), either alone or in crowds, and asking about how emotional they look, positive or negative. In some cases, we track perceivers' eye movements as they inspect these crowds. We also gather information about perceivers' view on race and gender. In another line of experiments, we provide perceivers with short newspaper articles about crowds that either behave peacefully or aggressively. All together, we're hoping these studies reveal new insights into why and how people make biased judgments of individuals and crowds, and how these biases relate to their own beliefs and identities. </p>   
        <p>Please contact the Principal Investigator &#8211 Dr. Tim Sweeny &#8211 if you have questions about this study: timothy.sweeny@du.edu.  </p>
        <p><b>Important:</b> If you participated in this study in person on the University of Denver campus, we would like to ask you to not talk to others who may participate about this study for the next 10 weeks (or until the quarter ends). It is important that people not know about the purpose of the study before they begin so we would appreciate if you did not discuss it before they complete the study. Thank you for your consideration. </p>
        <p>You can close the window after pressing "next" button. Please note that the experiment has ended and your data is saved. </p>
        </div>`]},
        show_clickable_nav:true
    };  

    const postExpQuestions = {
        timeline:[introToDemog, d_age, d_race_closed, d_race_if_otherMixed, 
            d_gender, d_gender_if_other,
            //d_sexualOri, d_sexualOri_if_other,
            d_eng_1, d_english_ifNo, d_english_ifNo_2,
            d_livedOutside, d_livedOutside_ifYes,
            //d_handed, d_handed_ifAmbi,
            d_vision, d_vision_ifYes, d_vision_ifYes_2,
            //susp_study
        ]
    } 