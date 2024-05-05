var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload = ()=> {
    let res = JSON.parse(request.response);
    console.log(res.map((ele)=>ele.flag ));
    console.log(res);
}