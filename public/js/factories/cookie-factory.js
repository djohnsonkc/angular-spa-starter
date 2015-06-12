app.factory('cookieFactory', ['$cookies', function($cookies) {

  var _cookieFactory = {};


    var _domain = window.location.hostname;            
    if(_domain == "localhost") {
      _domain = ""; //doesnt work locally
    } 
    else {
      _domain = ".hmklab.com";
    }

    var _expires = new Date() + 7; //one week in seconds
    var _maxAge = 86400000 //1 day in milliseconds
    var _expirationUnit = "seconds";//hours, minutes, seconds
    var _path = '/';

    _cookieFactory.getExpiration = function(maxAgeSeconds) {

      var now = new Date();
      var time = now.getTime();
      var expireTime = time + maxAgeSeconds;
      now.setTime(expireTime);
      
      return now.toGMTString();

    }

    _cookieFactory.setCookie = function(name, val, opts) {

        var expires;
        if(opts && opts.maxAge) {
          expires = this.getExpiration(opts.maxAge);
        }
        else {
          expires = this.getExpiration(_maxAge);
        }

        //Accept options that are passed in. Otherwise, use the default values
        var options = {
          path: opts && opts.path || _path,
          expires: expires,
          domain: opts && opts.domain || _domain
        };
        $cookies.put(name, val, options);
    }

    _cookieFactory.getCookie = function(name) {
        return $cookies.get(name)
    }

    _cookieFactory.clearAllCookies = function() {

        //need a better implementation here that will clear all cookies vs. deleting each one by name
        this.setCookie('account_id', '');
        this.setCookie('person_id', '');
        this.setCookie('access_token', '');
        //this.setCookie('user_name', ''); //keep this cookie
        this.setCookie('login', '0');
    }

  return _cookieFactory;

}]);