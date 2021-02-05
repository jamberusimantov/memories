let Fetch;
async function getAdvice(e) {
    let baseAPI = 'http://www.boredapi.com/api/activity';
    let method = e.target.parentElement.parentElement.firstChild.firstChild.value; //first select
    let searchValue = e.target.parentElement.parentElement.firstChild.firstChild.nextSibling.value; //second select
    let searchAPI = `${baseAPI}?${method}=${searchValue}`;
    return await fetch(searchAPI).then(res => res.json());
}
async function getProducts() {
    // https://rapidapi.com/wavesong/api/doppelme-avatars?endpoint=apiendpoint_66011bfb-3571-49a1-81f3-b402fb6bc1e3

    let baseAPI = 'https://doppelme-avatars.p.rapidapi.com/';
    let avatar = ['avatar'];
    let method = ['', 'POST']; //delete=>post
    let createAvatar = `${baseAPI}${avatar}/1101`;








    //delete avatar
    // fetch("https://doppelme-avatars.p.rapidapi.com/avatar/DM123456ABC", {
    //         "method": "DELETE",
    //         "headers": {
    //             "x-rapidapi-key": "78b4b3f366mshd416510a2fa36d4p1b23c6jsn02ccbb7f1903",
    //             "x-rapidapi-host": "doppelme-avatars.p.rapidapi.com"
    //         }
    //     })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
}

Fetch = { getAdvice, getProducts };
export default Fetch;