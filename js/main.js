$.fn.validate = function(){
    $.each(this,function(i,elem){
        console.log("validating " + $(elem).attr("name"));

        if($(elem).is('input')){
            if($(elem).attr("type")=="text"){
                console.log($(elem).attr("name") + " is of type text");
                (checkEmpty($(elem))?setError($(elem)):setSuccess($(elem)));
            }else if($(elem).attr("type")=="email"){
                console.log($(elem).attr("name") + " is of type email");
                (checkEmpty($(elem))?setError($(elem)):setSuccess($(elem)));
            }else if($(elem).attr("type")=="phone"){
                console.log($(elem).attr("name") + " is of type phone");
                (checkEmpty($(elem))?setError($(elem)):setSuccess($(elem)));
            }
        }
    });
};

/**
 *
 * @param elem
 * @returns {boolean}
 */
function checkEmpty(_$elem){
    return ($.trim(_$elem.val()) == '');
}

/**
 *
 * @param _$elem
 */
function setError(_$elem){
    var _$formGroup = _$elem.closest('.form-group');
    _$formGroup.removeClass('has-success').addClass('has-error')
    var _$formFeedbackControl = _$formGroup.find('.form-control-feedback');
    _$formFeedbackControl.removeClass('glyphicon-ok').addClass('glyphicon-remove');
}

/**
 *
 * @param _$elem
 */
function setSuccess(_$elem){
    var _$formGroup = _$elem.closest('.form-group');
    _$formGroup.removeClass('has-error').addClass('has-success')
    var _$formFeedbackControl = _$formGroup.find('.form-control-feedback');
    _$formFeedbackControl.removeClass('glyphicon-remove').addClass('glyphicon-ok');
}


$().ready(function(){
    console.log("ready");
    $("input").validate();
});