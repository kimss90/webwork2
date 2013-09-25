define(['Backbone', 'underscore','./UserSet','config','moment'], function(Backbone, _, UserSet,config,moment){
    var UserSetList = Backbone.Collection.extend({
        model: UserSet,
        initialize: function (models,options) {
            this.problemSet = options.problemSet;
            console.log("in UserSetList initialize");
        },
        url: function () {
            return "/test/courses/" + config.courseSettings.courseID + "/sets/" + this.problemSet.get("set_id") + 
            '/users';
        },
        parse: function(response){
            config.checkForError(response);
            return response;
        }
    });

    return UserSetList;
});