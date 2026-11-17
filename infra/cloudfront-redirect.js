// CloudFront Function (runtime cloudfront-js-2.0), event type: viewer-request, attach to the default behavior.
// 1. Any other host (apex livingwaterclinic.com, http or https) -> 301 to https://www.livingwaterclinic.com/<path>/ (query string kept).
// 2. www URLs without a trailing slash -> 301 to the slash version.
// 3. URLs that end in "/" are rewritten to .../index.html so a plain S3 origin can serve them.
var HOST = 'www.livingwaterclinic.com';

function queryString(q) {
  var parts = [];
  for (var k in q) {
    var item = q[k];
    if (item.multiValue) {
      for (var i = 0; i < item.multiValue.length; i++) {
        parts.push(item.multiValue[i].value === '' ? k : k + '=' + item.multiValue[i].value);
      }
    } else {
      parts.push(item.value === '' ? k : k + '=' + item.value);
    }
  }
  return parts.length ? '?' + parts.join('&') : '';
}

function redirect(location) {
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: { location: { value: location }, 'cache-control': { value: 'max-age=3600' } },
  };
}

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var host = request.headers.host ? request.headers.host.value.toLowerCase() : '';
  var qs = queryString(request.querystring);
  var hasExtension = /\.[A-Za-z0-9]{1,8}$/.test(uri);

  if (uri === '/sitemap_index.xml') return redirect('https://' + HOST + '/sitemap-index.xml');

  // Pretty path with exactly one trailing slash, no double slashes.
  var path = uri.replace(/\/{2,}/g, '/');
  if (!hasExtension && path.charAt(path.length - 1) !== '/') path += '/';

  if (host !== HOST) return redirect('https://' + HOST + path + qs);
  if (path !== uri) return redirect('https://' + HOST + path + qs);

  if (uri.charAt(uri.length - 1) === '/') request.uri = uri + 'index.html';
  return request;
}
