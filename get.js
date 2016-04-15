var request = new XMLHttpRequest();
request.open('GET', 'https://httpbin.org/headers', true);

request.onload = function () {
  console.log(request.status); // HTTP status code
  console.log(request.response); // response body
  console.log(JSON.parse(request.response))
}

request.send();
