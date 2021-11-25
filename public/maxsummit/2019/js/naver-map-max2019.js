(function() {

  function drawNaverMap() {
    var map_height  = "400px";
    var UserAgent = navigator.userAgent;
    // mobile 일 때
    if (UserAgent.match(/iPhone|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
      map_height = "250px";
    }



    var div_map = document.getElementsByClassName('sec_map')[0];
    // for dev : 크기만 맞추기 위해서.
    /*
    if (!location.href.includes('maxsummit.co')) {
      var children = div_map.childNodes;
      for (var i = 0; i < children.length; i++) {
        if (children[i].nodeName == "IMG") {
          children[i].style.minHeight = map_height;
          break;
        }
      }
      return;
    }
    */
    div_map.style.height = map_height;

    // Naver Map API
    var HOME_PATH = window.HOME_PATH || '.';
    var position = new naver.maps.LatLng(37.482415, 127.035400);

    var map = new naver.maps.Map(div_map, {
      center: position,
      zoom: 12,
      scrollWheel: false,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT
      }
    });

    var markerOptions = {
      position: position.destinationPoint(90, 15),
      map: map,
      icon: {
        url: '../images/icon_05.png',
        size: new naver.maps.Size(70, 96),
        origin: new naver.maps.Point(0, 0)
      }
    };

    var marker = new naver.maps.Marker(markerOptions);

  }

  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) { //IE
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        drawNaverMap();
      }
    };
  } else { //Others
    script.onload = function() {
      drawNaverMap();
    }
  }
  //script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?clientId=17WUoXfbYkssaxUP0ynz";
  <!-- 2019-03-28 : 네이버클라우드 플랫폼 지도 교체-->
  script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=doi5j4bm1v";
  document.getElementsByTagName("head")[0].appendChild(script);
})();
