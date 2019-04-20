todoApp.factory('todoService',['$http',function($http){
    var server = {};

    var userconnected = null;

    let serverAddr = "https://tranquil-ridge-75834.herokuapp.com";

    server.getUserConnected = function() {
        return userconnected;
    }

    server.setUserConnected = function(username) {
        userconnected = username;
    }

    server.addList = function(list, callback) {
        var req = {
            name:list.name,
            username:list.username
        };
        $http.post(serverAddr+'/addList', req)
            .then(function(res) {
                callback(res);
            });
    };

    server.deleteList = function(id, callback) {
        $http.post(serverAddr+'/deleteList', req)
            .then(function(res) {
                callback(res);
            });
    };
    

    server.addTask = function (list, text, callback) {
        var req = {
            listid : list._id,
            text : text
        };
        //console.log(req);
        $http.post(serverAddr+'/addTask', req)
            .then(function (res) {
                //console.log(res);
                callback(res);
            });
    };

    server.getAll = function(username, callback) {
        var req ={
            username: username
        }
        //console.log(username);
        $http.post(serverAddr+'/getAll', req)
            .then(function(res) {
                //console.log(res);
                callback(res);
            });
    };

    server.deleteTask = function(list, index, callback) {
        var req = {
            listid: list._id,
            taskid: list.task[index]._id
        };
        $http.post(serverAddr+'/deleteTask', req)
            .then(function(res) {
                callback(res);
            });
    };

    server.updateTaskText = function(listid, taskid, text, callback) {
        var req = {
            listid : listid,
            taskid : taskid,
            text : text
        };
        $http.post(serverAddr+'/updateTaskText', req)
            .then(function(res) {
                callback(res);
            });
    };

    server.updateTaskChecked = function(listid, taskid, checked, callback) {
        var req = {
            listid : listid,
            taskid : taskid,
            checked : checked
        };
        $http.post(serverAddr+'/updateTaskChecked', req)
            .then(function(res) {
                callback(res);
            });
    };

    server.addUser = function(user, callback) {
        var req = {
            username : user.username,
            password : user.password
        };
        $http.post(serverAddr+'/addUser', req)
            .then(function(res) {
                callback(res.data.success);
            });
    };

    server.findUser = function(user, callback) {
       var req = {
            username : user.username,
            password : user.password
        };
        $http.post(serverAddr+'/findUser', req)
            .then(function(res) {
                callback(res.data.success);
            });
    };

    server.findUserByUsername = function(user, callback) {
        var req = {
            username: user.username,
            password: user.password
        };
        $http.post(serverAddr+'/findUserByUsername', req)
            .then(function(res) {
                callback(res.data.username);
            });
    };

    return server;
}]);