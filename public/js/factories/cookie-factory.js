app.factory('cookieFactory', ['ipCookie', function(ipCookie) {

  var _cookieFactory = {};


    var _domain = window.location.hostname;            
    if(_domain == "localhost") {
      _domain = ""; //doesnt work locally
    } 
    else {
      _domain = ".foxfilterapp.com";
    }
    var _expires = 30;
    var _path = '/';


    _cookieFactory.setCookie = function(name, val, opts) {
        //console.log("cookieFactory.setCookie(" + name + "," + val + ")");
        var options = {
          path: opts && opts.path || _path,
          expires: opts && opts.expires || _expires,
          domain: opts && opts.domain || _domain
        };
        ipCookie(name, val, options);
    }

    _cookieFactory.getCookie = function(name) {

        var val = ipCookie(name) || null;
        //console.log("cookieFactory.getCookie(" + name + ") = " + val);
        return val;
    }

    _cookieFactory.getAllCookies = function() {

      var x = document.cookie;  
      //console.log("cookieFactory.getAllCookies: " + x);
      return x;

    }

    _cookieFactory.clearAllCookies = function() {

        this.setCookie('access_token', '0');
        this.setCookie('account_id', '0');
        this.setCookie('auth_token', '');
        this.setCookie('login', '0');
        this.setCookie('profile_id', '0');
        this.setCookie('profile_name', '');
        this.setCookie('profile_set', '');
        this.setCookie('user_name', '');
        this.setCookie('version', '');
    }

  return _cookieFactory;

}]);