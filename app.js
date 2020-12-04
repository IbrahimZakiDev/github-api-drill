

function getApis(username) {
    const url = `https://api.github.com/users/${username}/repos`
    fetch(url)
    .then(response => response.json())
    .then(responseJson => generateResults(responseJson))
}

function generateResults(json) {
    $("#results").empty()
    console.log(json)
    let html = ""
    for (let i = 0; i<json.length; i++) {
        console.log(json[i].html_url)
        html+=`
            <li>
            <h4>${json[i].name}</h4>
            <h5><a href="${json[i].html_url}">${json[i].html_url}</a></h5>
            </li>
            `
    }
    $("#results").append(html)
}





function handleSubmit() {
$('form').submit(e => {
    e.preventDefault()
    let item = $('#search').val()
    getApis(item)
})
}

function main() {
    handleSubmit()
}

$(main)
