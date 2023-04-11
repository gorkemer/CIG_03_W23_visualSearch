const DemoQ1 = {
    type: 'html-button-response',
    stimulus: "You will now be asked some questions pertaining to demographic information. Please click 'continue' button to begin.",
    trial_duration: null,
    choices: ['Continue']
  }
  
const DemoQ2 = {
type: 'survey-text',
questions: [
    {prompt: "How old are you?",  rows: 3, columns:5}],
on_finish: function(data){
    data.stimulus = "Age?"  
    data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
    var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
    jsPsych.data.addDataToLastTrial({timestamp});
    saveData()
},
trial_duration: null
}

const DemoQ3 = {
type: 'survey-multi-choice',
questions: [
    {
    prompt: "Please choose one of the boxes below that fits your ethnicity/race:", 
    name: 'ethnicityQ', 
    options: ['Asian/Pacific Islander', 'Black/African American', 'Hispanic/Latina(o)', 'White/European American', 'Native American', 'Mixed', 'Other'], 
    required: true,
    horizontal: true
    }
],
on_finish: function(data){
    data.stimulus = "Ethnicity?"  
    data.response = jsPsych.data.get().last(1).values()[0].response['ethnicityQ']
    var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
    jsPsych.data.addDataToLastTrial({timestamp});
    saveData()
    }
}

const DemoQ4 = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "What is your gender", 
        name: 'gender', 
        options: ['Woman', 'Man', 'Other'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Gender?"  
        data.response = jsPsych.data.get().last(1).values()[0].response['gender']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
        }
    }

const DemoQ5 = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "'Transgender' is commonly used to refer to people who identify with a gender other than the gender they were assigned at birth. Are you transgender?", 
        name: 'transgender', 
        options: ['Yes', 'No'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Transgender"  
        data.response = jsPsych.data.get().last(1).values()[0].response['transgender']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
        }
    }

const DemoQ6 = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Next we would like you to indicate how you completed this study. To demonstrate that you are paying attention, please select 'None' below. ", 
        name: 'transgender', 
        options: ['Laptop', 'Desktop', 'Phone', 'None'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Attention Check"  
        data.response = jsPsych.data.get().last(1).values()[0].response['transgender']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    }
}

const DemoQ7 = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "What is your sexual orientation?", 
        name: 'sexualOrientation', 
        options: ['Lesbian/Gay', 'Heterosexual', 'Asexual', 'Bisexual', 'Pansexual', 'Other'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Sexual orientation?"    
        data.response = jsPsych.data.get().last(1).values()[0].response['sexualOrientation']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
        }
}

const DemoQ8 = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Is English your first and primary language?", 
        name: 'English', 
        options: ['Yes', 'No'], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "English your first and primary language?"    
        data.response = jsPsych.data.get().last(1).values()[0].response['English']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
        }
    }

const DemoQ9 = { // add a conditional node show this if they respond "no" to the above question
    type: 'survey-text',
    questions: [
        {prompt: "For how many years have you lived in the United States?",  rows: 3, columns:5}],
        on_finish: function(data){
        data.stimulus = "years have you lived in the United States?"    
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    },
    trial_duration: null
}


const if_node = {
    timeline: [DemoQ9],
    conditional_function: function () {
      //var data = jsPsych.data.get().last(1).values()[0];
      if (jsPsych.data.get().last(1).values()[0].response == "No") { //jsPsych.pluginAPI.compareKeys(data.response, "f")
      return true;
      } else {
        return false;
      }
    },
};


const DemoQ10 = {
    type: 'survey-text',
    questions: [
        {prompt: "What do you think the purpose of this experiment was?",  rows: 30, columns:50}],
        on_finish: function(data){
        data.stimulus = "Purpose of this experiment was?"    
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    },
    trial_duration: null
}

const DemoQ11 = {
    type: 'survey-text',
    questions: [
        {prompt: "Please tell us about if you had difficulty hearing the audio clip? ",  rows: 30, columns:50}],
        on_finish: function(data){
        data.stimulus = "Any difficulty hearing the audio clip?"
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    },
    trial_duration: null
}

const DemoQ12 = {
    type: 'survey-text',
    questions: [
        {prompt: "Did you experience any issues with this study? If yes, please describe them in as much detail as possible below: ",  rows: 30, columns:50}],
    on_finish: function(data){
        data.stimulus = "Any issues with this study?"
        data.response = jsPsych.data.get().last(1).values()[0].response['Q0']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    },
    trial_duration: null
}

const DemoQ13 = {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Throughout the study, you listened to a sound clip. Please indicate below what sound you listened to.  ", 
        name: 'soundClip', 
        options: ['Typing on a keyboard', 'Singing', 'A crowd of people', 'White Noise', "A few people talking"], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "Please indicate below what sound you listened to."
        data.response = jsPsych.data.get().last(1).values()[0].response['soundClip']
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    }
}



const DemoQ14 = { // add a conditional node show this if they respond "no" to the above question
    type: 'html-slider-response_original',
    stimulus: function(){
        return `
      <div style = "width:700px;">
        <p> During the study, to what extend did you find the audio clip distracting?</p>
      </div>`},
    on_finish: function(data){
        data.stimulus = "did you find the audio clip distracting?"  
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    },
    trial_duration: null,
    require_movement: true,
    labels: function(){
        return ["Not at all", "Extremely"] //[`${jsPsych.timelineVariable('anchorMin_1', true)}`, '', `${jsPsych.timelineVariable('anchorMax_1', true)}`]
      },
    slider_start: 3,
    min: 1,
    max: 7
}

const DemoQ15 = { // add a conditional node show this if they respond "no" to the above question
    type: 'html-slider-response_original',
    stimulus: function(){
        return `
      <div style = "width:700px;">
        <p> At what percentage was your volume set to?</p>
      </div>`},
    on_finish: function(data){
        data.stimulus = "VolumePercentage"  
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    },
    trial_duration: null,
    require_movement: true,
    labels: function(){
        return ["0", "100"] //[`${jsPsych.timelineVariable('anchorMin_1', true)}`, '', `${jsPsych.timelineVariable('anchorMax_1', true)}`]
      },
    min: 0,
    max: 100
}

const DemoQ16= {
    type: 'survey-multi-choice',
    questions: [
        {
        prompt: "Excluding any initial adjustments at the beginning of the study, did you have to adjust your audio volume throughout the study for any reason whatsoever? ", 
        name: 'changeVolume', 
        options: ['Yes, I decreased the volume during the study', 'No, not at all', 'Yes, I increased the volume during the study', "Yes, I adjusted my volume multiple times"], 
        required: true,
        horizontal: true
        }
    ],
    on_finish: function(data){
        data.stimulus = "didYouAdjustVolume?"
        data.response = jsPsych.data.get().last(1).values()[0].question_order[0]
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    }
}

const DemoQ17 = { // add a conditional node show this if they respond "no" to the above question
    type: 'html-slider-response_original',
    stimulus: function(){
        return `
      <div style = "width:700px;">
        <p> Thinking about where you are right now, how crowded is your current environment?</p>
      </div>`},
    on_finish: function(data){
        data.stimulus = "HowCrowdedYourEnvo"  
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    },
    trial_duration: null,
    require_movement: true,
    labels: function(){
        return ["Not at all", "Extremely"] //[`${jsPsych.timelineVariable('anchorMin_1', true)}`, '', `${jsPsych.timelineVariable('anchorMax_1', true)}`]
      },
    min: 0,
    max: 100
}

const DemoQ18 = { // add a conditional node show this if they respond "no" to the above question
    type: 'html-slider-response_original',
    stimulus: function(){
        return `
      <div style = "width:700px;">
        <p> Thinking back to the beginning of the study, how immersed were you in the visualization exercise?</p>
      </div>`},
    on_finish: function(data){
        data.stimulus = "HowImmersedYouWere"  
        var timestamp = (new Date).toISOString().replace(/z|t/gi,' ').trim();
        jsPsych.data.addDataToLastTrial({timestamp});
        saveData()
    },
    trial_duration: null,
    require_movement: true,
    labels: function(){
        return ["Not at all", "Extremely"] //[`${jsPsych.timelineVariable('anchorMin_1', true)}`, '', `${jsPsych.timelineVariable('anchorMax_1', true)}`]
      },
    slider_start: 3,
    min: 1,
    max: 7
}


var debrief = {
    type: "instructions",
      pages: function(){
        return [`<div style="width:700px;"><p style='font-size: 25px'>
        <br><br> <p style="color:blue;">The experiment has ended. Thank you so much for your time! </p>
        This study is concerned with how environmental cues may influence the ways in which people think about others. In this study, you were asked to listen to a sound clip (e.g., white noise, a few people talking, or crowd of people) and mentally visualize what it might be like in that type of an environment. Next, you were asked to evaluate multiple individuals (e.g., a librarian, computer programmer) while listening to these sound clips in the background. We were primarily interested in the extent to which cues of crowding impact judgments about novel individuals. We expect this study to have important implications for how scientists understand the impact of crowds in social perception and how people respond to others in crowded contexts. For this reason, we highly value your participation today and we expect it to have an important impact.\
        <br><br>IMPORTANT: We would like to ask to not to talk with anyone who might be a participant in this study. The main reason for this is that it is important that people respond naturally to this study, and it can be hard to do that when you know the details. Thank you for your consideration. \
        <br><br>If you have additional questions, comments, or otherwise concerns regarding this experiment or the SPA Lab, feel free to email Spencer dobbs at Spencer.dobbs@du.edu, Gorkem Er at Gorkem.Er@du.edu, or Professor Max Weisbuch at max.weisbuch@du.edu or the SPA Lab email at dupsychstudy@gmail.com \
        <br> You can close the window after pressing "next" button. Please note that the experiment has ended and your data is saved. You will not be redirected to SONA. Your grants will be awarded manually within 48 hours.

    `]},
        show_clickable_nav:true
    };  