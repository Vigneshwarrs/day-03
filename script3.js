var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload = ()=> {
    let res = JSON.parse(request.response);
    console.log(res.map((ele)=>{return `Name: ${ele.name.common}, region: ${ele.region}, sub-region: ${ele.subregion}, population: ${ele.population} `}));
}