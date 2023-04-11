/**
 * jspsych-html-slider-response_8sliders
 * a jspsych plugin for free response survey questions for 8 sliders! 
 *
 * Gorkem Er
 *
 *
 */


jsPsych.plugins['html-slider-response_8sliders'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'html-slider-response_8sliders',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },

      stimulus_2: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus 2',
        default: undefined,
        description: 'The HTML string to be displayed'
      },

      stimulus_3: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus 3',
        default: undefined,
        description: 'The HTML string to be displayed'
      },

      stimulus_4: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus 4 ',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      stimulus_5: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus 5 ',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      stimulus_6: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus 6 ',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      stimulus_7: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus 7 ',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      stimulus_8: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus 8 ',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      min: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Min slider',
        default: 0,
        description: 'Sets the minimum value of the slider.'
      },
      max: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Max slider',
        default: 100,
        description: 'Sets the maximum value of the slider',
      },
      slider_start: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Slider starting value',
        default: 50,
        description: 'Sets the starting value of the slider',
      },
      step: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Step',
        default: 1,
        description: 'Sets the step of the slider'
      },
      labels: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name:'Labels',
        default: [],
        array: true,
        description: 'Labels of the slider.',
      },
      slider_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name:'Slider width',
        default: null,
        description: 'Width of the slider in pixels.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        array: false,
        description: 'Label of the button to advance.'
      },
      require_movement: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Require movement',
        default: false,
        description: 'If true, the participant will have to move the slider before continuing.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the slider.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when user makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    // half of the thumb width value from jspsych.css, used to adjust the label positions
    var half_thumb_width = 7.5; 

    var html = '<div id="jspsych-html-slider-response-wrapper" style="margin: 20px 0px;">';
    html += '<div id="jspsych-html-slider-response-stimulus">' + trial.stimulus + '</div>';

    html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';

    if(trial.slider_width !== null){
      html += 'width:'+trial.slider_width+'px;';
    } else {
      html += 'width:auto;';
    }
    html += '">';
    html += '<input type="range" class="jspsych-slider" value="'+trial.slider_start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" id="jspsych-html-slider-response-response"></input>';
    html += '<div>'
    for(var j=0; j < trial.labels.length; j++){
      var label_width_perc = 100/(trial.labels.length-1);
      var percent_of_range = j * (100/(trial.labels.length - 1));
      var percent_dist_from_center = ((percent_of_range-50)/50)*100;
      var offset = (percent_dist_from_center * half_thumb_width)/100;
      html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; '+
      'left:calc('+percent_of_range+'% - ('+label_width_perc+'% / 2) - '+offset+'px); text-align: center; width: '+label_width_perc+'%;">';  
      html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
      html += '</div>'
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';

    ///// #2 SLIDER //////

    html += '<div id="jspsych-html-slider-response-wrapper" style="margin: 20px 0px;">';
    html += '<div id="jspsych-html-slider-response-stimulus2">' + trial.stimulus_2 + '</div>';

    html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';

    if(trial.slider_width !== null){
      html += 'width:'+trial.slider_width+'px;';
    } else {
      html += 'width:auto;';
    }
    html += '">';

    html += '<input type="range" class="jspsych-slider" value="'+trial.slider_start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" id="jspsych-html-slider-response-response2"></input>';
    html += '<div>'
    for(var j=0; j < trial.labels.length; j++){
      var label_width_perc = 100/(trial.labels.length-1);
      var percent_of_range = j * (100/(trial.labels.length - 1));
      var percent_dist_from_center = ((percent_of_range-50)/50)*100;
      var offset = (percent_dist_from_center * half_thumb_width)/100;
      html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; '+
      'left:calc('+percent_of_range+'% - ('+label_width_perc+'% / 2) - '+offset+'px); text-align: center; width: '+label_width_perc+'%;">';  
      html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
      html += '</div>'
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';

    //// End of #2 SLIDER /////


    ///// #3 SLIDER //////

    html += '<div id="jspsych-html-slider-response-wrapper" style="margin: 20px 0px;">';
    html += '<div id="jspsych-html-slider-response-stimulus3">' + trial.stimulus_3 + '</div>';

    html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';

    if(trial.slider_width !== null){
      html += 'width:'+trial.slider_width+'px;';
    } else {
      html += 'width:auto;';
    }
    html += '">';

    html += '<input type="range" class="jspsych-slider" value="'+trial.slider_start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" id="jspsych-html-slider-response-response3"></input>';
    html += '<div>'
    for(var j=0; j < trial.labels.length; j++){
      var label_width_perc = 100/(trial.labels.length-1);
      var percent_of_range = j * (100/(trial.labels.length - 1));
      var percent_dist_from_center = ((percent_of_range-50)/50)*100;
      var offset = (percent_dist_from_center * half_thumb_width)/100;
      html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; '+
      'left:calc('+percent_of_range+'% - ('+label_width_perc+'% / 2) - '+offset+'px); text-align: center; width: '+label_width_perc+'%;">';  
      html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
      html += '</div>'
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';
    
   //// End of #3 SLIDER /////


   ///// #4 SLIDER //////

   html += '<div id="jspsych-html-slider-response-wrapper" style="margin: 20px 0px;">';
   html += '<div id="jspsych-html-slider-response-stimulus4">' + trial.stimulus_4 + '</div>';

   html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';

   if(trial.slider_width !== null){
     html += 'width:'+trial.slider_width+'px;';
   } else {
     html += 'width:auto;';
   }
   html += '">';

  html += '<input type="range" class="jspsych-slider" value="'+trial.slider_start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" id="jspsych-html-slider-response-response4"></input>';
  html += '<div>'
  for(var j=0; j < trial.labels.length; j++){
    var label_width_perc = 100/(trial.labels.length-1);
    var percent_of_range = j * (100/(trial.labels.length - 1));
    var percent_dist_from_center = ((percent_of_range-50)/50)*100;
    var offset = (percent_dist_from_center * half_thumb_width)/100;
    html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; '+
    'left:calc('+percent_of_range+'% - ('+label_width_perc+'% / 2) - '+offset+'px); text-align: center; width: '+label_width_perc+'%;">';  
    html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
    html += '</div>'
  }
  html += '</div>';
  html += '</div>';
  html += '</div>';

  //// End of #4 SLIDER /////


  ///// #5 SLIDER //////

   html += '<div id="jspsych-html-slider-response-wrapper" style="margin: 20px 0px;">';
   html += '<div id="jspsych-html-slider-response-stimulus5">' + trial.stimulus_5 + '</div>';

   html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';

   if(trial.slider_width !== null){
     html += 'width:'+trial.slider_width+'px;';
   } else {
     html += 'width:auto;';
   }
   html += '">';

  html += '<input type="range" class="jspsych-slider" value="'+trial.slider_start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" id="jspsych-html-slider-response-response5"></input>';
  html += '<div>'
  for(var j=0; j < trial.labels.length; j++){
    var label_width_perc = 100/(trial.labels.length-1);
    var percent_of_range = j * (100/(trial.labels.length - 1));
    var percent_dist_from_center = ((percent_of_range-50)/50)*100;
    var offset = (percent_dist_from_center * half_thumb_width)/100;
    html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; '+
    'left:calc('+percent_of_range+'% - ('+label_width_perc+'% / 2) - '+offset+'px); text-align: center; width: '+label_width_perc+'%;">';  
    html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
    html += '</div>'
  }
  html += '</div>';
  html += '</div>';
  html += '</div>';

  //// End of #5 SLIDER /////

  ///// #6 SLIDER //////

  html += '<div id="jspsych-html-slider-response-wrapper" style="margin: 20px 0px;">';
  html += '<div id="jspsych-html-slider-response-stimulus6">' + trial.stimulus_6 + '</div>';

  html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';

  if(trial.slider_width !== null){
    html += 'width:'+trial.slider_width+'px;';
  } else {
    html += 'width:auto;';
  }
  html += '">';

 html += '<input type="range" class="jspsych-slider" value="'+trial.slider_start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" id="jspsych-html-slider-response-response6"></input>';
 html += '<div>'
 for(var j=0; j < trial.labels.length; j++){
   var label_width_perc = 100/(trial.labels.length-1);
   var percent_of_range = j * (100/(trial.labels.length - 1));
   var percent_dist_from_center = ((percent_of_range-50)/50)*100;
   var offset = (percent_dist_from_center * half_thumb_width)/100;
   html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; '+
   'left:calc('+percent_of_range+'% - ('+label_width_perc+'% / 2) - '+offset+'px); text-align: center; width: '+label_width_perc+'%;">';  
   html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
   html += '</div>'
 }
 html += '</div>';
 html += '</div>';
 html += '</div>';

 //// End of #6 SLIDER /////

 ///// #7 SLIDER //////

 html += '<div id="jspsych-html-slider-response-wrapper" style="margin: 20px 0px;">';
 html += '<div id="jspsych-html-slider-response-stimulus7">' + trial.stimulus_7 + '</div>';

 html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';

 if(trial.slider_width !== null){
   html += 'width:'+trial.slider_width+'px;';
 } else {
   html += 'width:auto;';
 }
 html += '">';

html += '<input type="range" class="jspsych-slider" value="'+trial.slider_start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" id="jspsych-html-slider-response-response7"></input>';
html += '<div>'
for(var j=0; j < trial.labels.length; j++){
  var label_width_perc = 100/(trial.labels.length-1);
  var percent_of_range = j * (100/(trial.labels.length - 1));
  var percent_dist_from_center = ((percent_of_range-50)/50)*100;
  var offset = (percent_dist_from_center * half_thumb_width)/100;
  html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; '+
  'left:calc('+percent_of_range+'% - ('+label_width_perc+'% / 2) - '+offset+'px); text-align: center; width: '+label_width_perc+'%;">';  
  html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
  html += '</div>'
}
html += '</div>';
html += '</div>';
html += '</div>';

//// End of #7 SLIDER /////

///// #8 SLIDER //////

html += '<div id="jspsych-html-slider-response-wrapper" style="margin: 20px 0px;">';
html += '<div id="jspsych-html-slider-response-stimulus8">' + trial.stimulus_8 + '</div>';

html += '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';

if(trial.slider_width !== null){
  html += 'width:'+trial.slider_width+'px;';
} else {
  html += 'width:auto;';
}
html += '">';

html += '<input type="range" class="jspsych-slider" value="'+trial.slider_start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" id="jspsych-html-slider-response-response8"></input>';
html += '<div>'
for(var j=0; j < trial.labels.length; j++){
 var label_width_perc = 100/(trial.labels.length-1);
 var percent_of_range = j * (100/(trial.labels.length - 1));
 var percent_dist_from_center = ((percent_of_range-50)/50)*100;
 var offset = (percent_dist_from_center * half_thumb_width)/100;
 html += '<div style="border: 1px solid transparent; display: inline-block; position: absolute; '+
 'left:calc('+percent_of_range+'% - ('+label_width_perc+'% / 2) - '+offset+'px); text-align: center; width: '+label_width_perc+'%;">';  
 html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
 html += '</div>'
}
html += '</div>';
html += '</div>';
html += '</div>';

//// End of #8 SLIDER /////


    if (trial.prompt !== null){
      html += trial.prompt;
    }

    // add submit button
    html += '<button id="jspsych-html-slider-response-next" class="jspsych-btn" '+ (trial.require_movement ? "disabled" : "") + '>'+trial.button_label+'</button>';

    display_element.innerHTML = html;

    var response = {
      rt: null,
      response: null,
      response2: null,
      response3: null,
      response4: null,
      response5: null,
      response6: null,
      response7: null,
      response8: null
    };

    if(trial.require_movement){
      display_element.querySelector('#jspsych-html-slider-response-response').addEventListener('click', function(){
        display_element.querySelector('#jspsych-html-slider-response-next').disabled = false;
      });
    }

    display_element.querySelector('#jspsych-html-slider-response-next').addEventListener('click', function() {
      // measure response time
      var endTime = performance.now();
      response.rt = endTime - startTime;
      response.response = display_element.querySelector('#jspsych-html-slider-response-response').valueAsNumber;
      response.response2 = display_element.querySelector('#jspsych-html-slider-response-response2').valueAsNumber;
      response.response3 = display_element.querySelector('#jspsych-html-slider-response-response3').valueAsNumber;
      response.response4 = display_element.querySelector('#jspsych-html-slider-response-response4').valueAsNumber;
      response.response5 = display_element.querySelector('#jspsych-html-slider-response-response5').valueAsNumber;
      response.response6 = display_element.querySelector('#jspsych-html-slider-response-response6').valueAsNumber;
      response.response7 = display_element.querySelector('#jspsych-html-slider-response-response7').valueAsNumber;
      response.response8 = display_element.querySelector('#jspsych-html-slider-response-response8').valueAsNumber;

      if(trial.response_ends_trial){
        end_trial();
      } else {
        display_element.querySelector('#jspsych-html-slider-response-next').disabled = true;
      }

    });

    function end_trial(){

      jsPsych.pluginAPI.clearAllTimeouts();

      // save data
      var trialdata = {
        rt: response.rt,
        stimulus: trial.stimulus,
        stimulus2: trial.stimulus_2,
        stimulus3: trial.stimulus_3,
        stimulus4: trial.stimulus_4,
        stimulus5: trial.stimulus_5,
        stimulus6: trial.stimulus_6,
        stimulus7: trial.stimulus_7,
        stimulus8: trial.stimulus_8,
        slider_start: trial.slider_start,
        response: response.response,
        response2: response.response2,
        response3: response.response3,
        response4: response.response4,
        response5: response.response5,
        response6: response.response6,
        response7: response.response7,
        response8: response.response8
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    }

    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-html-slider-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

    var startTime = performance.now();
  };

  return plugin;
})();
