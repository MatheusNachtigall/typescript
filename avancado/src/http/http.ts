import Response from "./response";

enum HttpVerbs {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export class Http {
  get(url: string) {
    return new Promise((resolve, reject) => {
      let xhttp: XMLHttpRequest = this.createXHttpRequest(HttpVerbs.GET, url);
      this.configureCallback(xhttp, resolve, reject);
      xhttp.send();
    });
  }

  post(url: string, data: object) {
    return new Promise((resolve, reject) => {
      let xhttp: XMLHttpRequest = this.createXHttpRequest(HttpVerbs.POST, url);
      this.configureCallback(xhttp, resolve, reject);
      xhttp.send(JSON.stringify(data));
    });
  }

  createXHttpRequest(method: HttpVerbs, url: string) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    return xhttp;
  }

  private configureCallback(xhttp: XMLHttpRequest, resolve, reject) {
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        const response = new Response(this.responseText, this.status);
        if (this.status.toString().startsWith("20")) {
          resolve(response);
        } else {
          if (
            this.status.toString().startsWith("40") ||
            this.status.toString().startsWith("50")
          ) {
            //Erro
            reject(this.responseText);
          }
        }
      }
    };
  }
}
