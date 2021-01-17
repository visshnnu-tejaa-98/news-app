let API_KEY = "2512986cefc74926af44ac588d42c25f"
let bitcoin = document.getElementById("bitcoin")
bitcoin.addEventListener("click",function(){
    gettingData(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-16&sortBy=publishedAt&apiKey=2512986cefc74926af44ac588d42c25f`)
})

let headlines = document.getElementById("headlines")
headlines.addEventListener("click",function(){
    gettingData(`http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2512986cefc74926af44ac588d42c25f`)
})

let apple = document.getElementById("apple")
apple.addEventListener("click",function(){
    gettingData(`http://newsapi.org/v2/everything?q=apple&from=2021-01-15&to=2021-01-15&sortBy=popularity&apiKey=2512986cefc74926af44ac588d42c25f`)
})

let techchrunch = document.getElementById("techchrunch")
techchrunch.addEventListener("click",function(){
    gettingData(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2512986cefc74926af44ac588d42c25f`)
})

let wallStreetJournal = document.getElementById("wallStreetJournal")
wallStreetJournal.addEventListener("click",function(){
    gettingData(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=2512986cefc74926af44ac588d42c25f`)
})

gettingData(`http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2512986cefc74926af44ac588d42c25f`)


function gettingData(url){
    let row = document.getElementById("row")
    row.innerHTML = ""
    async function getData(){
        let apiResponse = await fetch(url)
        let apiData = await apiResponse.json()
        console.log(apiData)
        for(let i=0;i<apiData.articles.length;i++){
            
            
            if(i!==6 && i!==14 && i!==11){
                console.log(apiData.articles[i])
                let string = apiData.articles[i].description.split("")
                let stringTruncate = []
                for(let i=0;i<string.length;i++){
                    if(i<=100){
                        stringTruncate.push(string[i])
                    }
                }
                stringTruncate.push("...")
                // console.log(stringTruncate.join(""))
                
                let string1 = apiData.articles[i].title.split("")
                let stringTruncate1 = []
                for(let i=0;i<string1.length;i++){
                    if(i<=100){
                        stringTruncate1.push(string[i])
                    }
                }
                stringTruncate1.push("...")
                let col = document.createElement("div")
                col.classList.add("col-sm-6","mt-3")
                col.innerHTML = `
                <a href="${apiData.articles[i].url}">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title ">${stringTruncate1.join("")}</h5>
                    <p class="card-text text text-muted">${stringTruncate.join("")}</p>
                    <i class="text-muted time" id="time">${apiData.articles[i].publishedAt}</i>
                    </div>
                </div>
                </a>
                `
                row.appendChild(col)
            }
        }
    }
    getData()
}

