document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const search = document.getElementById("search").value;

    fetch(`http://localhost:2000/weather?search=${search}`).then((response) => {
        response.json().then((data) => {
            if (data.error)
                console.log(data.error);
            else {
                console.log(data.location);
                document.getElementById("co-rdi").innerText=`${data.location.lat} and ${data.location.long}`;
                document.getElementById("location").innerText=data.address.location;
                document.getElementById("condition").innerText=data.address.condition;
            }
        })
    })

    document.getElementById("search").value = "";
});
