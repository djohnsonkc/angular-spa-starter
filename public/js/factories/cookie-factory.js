app.factory('cookieFactory', ['ipCookie', function(ipCookie) {

  var _cookieFactory = {};


    var _domain = window.location.hostname;            
    if(_domain == "localhost") {
      _domain = ""; //doesnt work locally
    } 
    else {
      _domain = ".mydomain.com";
    }
    var _expires = 30;
    var _path = '/';


    _cookieFactory.setCookie = function(name, val, opts) {
        //Accept options that are passed in. Otherwise, use the default values
        var options = {
          path: opts && opts.path || _path,
          expires: opts && opts.expires || _expires,
          domain: opts && opts.domain || _domain
        };
        ipCookie(name, val, options);
    }

    _cookieFactory.getCookie = function(name) {

        var val = ipCookie(name) || null;
        return val;
    }

    _cookieFactory.getAllCookies = function() {

      var x = document.cookie;  
      return x;

    }

    _cookieFactory.clearAllCookies = function() {

        //need a better implementation here that will clear all cookies vs. deleting each one by name
        this.setCookie('my_cookie', '');

    }

  return _cookieFactory;

}]);