/*  jquery-checkbox-edit.js
*  jquery-checkbox-edit
*  
*  Created by Thomas Hanley on 2008-08-15.
*  http://tjhanley.com
*  Copyright 2008 thomas hanley
*  Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

// ==================================================================
// = usage: put your checkboxes in a div with a class jq-checkboxes =
// = let'r rip                                                      =
// ==================================================================

// TODO: 1) Create an api to add an edit/done button/image
//       2) Allow for different types of effects options
//       3) Anything else you can think of?

// ENJOY!

//on page load call init
jQuery(document).ready(function(){
  var container = 'jq-checkboxes'; //no (.)
  jq_checkboxes_init(container);
  jQuery('.' + container).after('<div class="' + container + '-done">done</div>');
  jQuery('.' + container + '-done').bind('click',function(e){jq_checkboxes_init(container)});
}); 


function jq_checkboxes_init(container){
  jQuery('.' + container + '-done').hide();
  txtCont = jQuery('.' + container).css('border','solid 1px #ccc'); 
  jQuery('.' + container + ' > *').wrapAll('<div class="' + container + '-frm-elements">');
  jQuery('.' + container + '-frm-elements').hide().before('<div class="' + container + '-text-elements"></div>');
  labelsForChecked = jQuery('.' + container + ' > *').find('input[@type="checkbox"][checked]').next();
  var out='';
  if(labelsForChecked.length == 0){
    out = '[nothing selected]'
  }   
  jQuery.each(labelsForChecked,function(i,val){out+= jQuery(val).text() + "<br>"})
  jQuery('.' + container + '-text-elements').show('fast').html(out).bind('click',function(e){
    jQuery('.' + container + '-text-elements').hide('fast');
    jQuery('.' + container + '-frm-elements').show('fast');
    jQuery('.' + container + '-done').show();
  });
}