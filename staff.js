const mainElement = document.querySelector('#staff');
const getStaff = () => {
    fetch('https://reqres.in/api/users').then((response) => response.json()).then((data) => {
        if(data?.data?.length > 0) {
            renderStaff(data.data)
        }
        else {
            let errorMessage = `
                <div class='errorMessage'>Unfortunately we can't show you the staff right now. Please come back later!</div>
            `;
            mainElement.innerHTML = errorMessage;
        }
    });
}

const renderStaff = (data) => {
    let allStaff = '';
    let staffMaxNumberToShow = 5;
    for(let i = 0; i < staffMaxNumberToShow; i++) {
        console.log(data[i]);
        let newStaff = `
            <div class="card">
                <img class="card-img-top" src="${data[i].avatar}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data[i].first_name} ${data[i].last_name}</h5>
                    <p class="card-text">${data[i].email}</p>
                </div>
            </div>
        `
        allStaff += newStaff;
    }
    mainElement.innerHTML = allStaff;
}

getStaff();