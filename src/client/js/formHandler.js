function handleSubmit() {
    event.preventDefault()
    //clear the previous results
    document.getElementById("error").innerHTML = "";
    document.getElementById("results").innerHTML = "";
    // check what text was put into the form field
    let url = document.getElementById('url').value;

    Client.checkForUrl(url);

    console.log("::: Form Submitted :::")
    if(Client.checkForUrl(url)){
        fetch('http://localhost:3000/data',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: url})
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res);
            document.querySelector('#results').innerHTML = `${res.polarity}`;
        })
    }
}

export { handleSubmit }
