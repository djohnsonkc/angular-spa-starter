app.factory('dataFactory', ['$http', 'cookieFactory', function($http, cookieFactory) {

  var _dataFactory = {};



    $http.defaults.headers.common['Content-Type'] = "application/json";
    //no-cache is important for Google Chrome. Otherwise, it will display incorrect cached JSON
    $http.defaults.headers.common['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    $http.defaults.headers.common['Pragma'] = 'no-cache';
    $http.defaults.headers.common['Expires'] = '0';

    //IMPORANT: These must be kept fresh. Setting them here is a static setting and only happens when the dataFactory is instantiated
    // $http.defaults.headers.common['x-access-token'] = cookieFactory.getCookie('access_token') || "";
    // $http.defaults.headers.common['account_id'] = cookieFactory.getCookie('account_id') || "0";
    var refreshCookieReferencedHeaders = function() {
        $http.defaults.headers.common['x-access-token'] = cookieFactory.getCookie('access_token') || "";
        $http.defaults.headers.common['account_id'] = cookieFactory.getCookie('account_id') || "0";
    }


 
    _dataFactory.getAccount = function(id) {


        refreshCookieReferencedHeaders();

        var req = {
         method: 'GET',
         url: '/api/v1/accounts/' + id
        };

        return $http(req);

    };

    _dataFactory.addAccount = function(data) {

        refreshCookieReferencedHeaders();

        var req = {
         method: 'POST',
         url: '/api/v1/accounts',
         data: JSON.stringify(data)
        };

        return $http(req);

    };

    _dataFactory.deleteAccount = function(id) {

        refreshCookieReferencedHeaders();

        var req = {
         method: 'DELETE',
         url: '/api/v1/accounts/' + id
        };

        return $http(req);

    };
 
 
    _dataFactory.updateAccount = function(id) {

        refreshCookieReferencedHeaders();

        var req = {
         method: 'PUT',
         url: '/api/v1/account/' + id,
         data: JSON.stringify(data)
        };

        return $http(req);

    };

   


  return _dataFactory;

}]);