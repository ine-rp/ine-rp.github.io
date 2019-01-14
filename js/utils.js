var inherits = function(ctor, superCtor) { // took this right from requrie('util').inherits
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

function AddOnload(myfunc)
{
	if(window.addEventListener)
		window.addEventListener('load', myfunc, false);
	else if(window.attachEvent)
		window.attachEvent('onload', myfunc);
}

 function parseUrlParams(url) {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^?&=]+)=([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = url;

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);

   return urlParams;
}
