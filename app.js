let button = document.querySelector('button');
let possec = document.querySelector('#possec');

button.addEventListener('click', function () {
    possec.innerHTML = '';
    let tvShow = document.querySelector('#search').value;
    let url = "http://api.tvmaze.com/singlesearch/shows?q=" + tvShow;

    let getPoster = async () => {
        let res = await axios.get(url);
        console.log(res.data.image.medium);
        return res.data.image.medium;
    }

    getPoster().then(data => {
        let pic = document.createElement("img");
        pic.setAttribute("src", data);
        pic.setAttribute("class", "img-fluid img-thumbnail rounded mx-auto d-block");
        possec.append(pic);
    }).catch(err => {
        possec.innerHTML = "Poster Not Available";
        possec.style.color = 'red';
    })

});