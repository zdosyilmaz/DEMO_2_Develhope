function addData() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();

    let parse = getData();
    if (!!parse) {
        let check = parse.find(x => x == message);
        if (!!check) {
            alert('zaten mevcut.');
            return;
        };

        parse.push(message);
        localStorage.setItem('data', JSON.stringify(parse));
    }
    else {
        localStorage.setItem('data', JSON.stringify([message]));
    }

    showData();
};

function getData() {
    let data = localStorage.getItem('data');
    return !!data ? JSON.parse(data) : [];
};


function deleteData() {
    const filterInput = document.getElementById('filter');
    const filter = filterInput.value;

    let data = getData();
    let check = data?.find(x => x == filter);
    if (!!check) {
        data = data.filter(x => x !== filter);
        localStorage.setItem('data', JSON.stringify(data));
    };

    showData();
}


function updateData() {
    const filterInput = document.getElementById('filter');
    const filter = filterInput.value.trim();

    const updateInput = document.getElementById('message');
    const message = updateInput.value.trim();

    let data = getData();
    data?.map((x, index) => {
        if (x?.includes(filter)) {
            data[index] = x.replaceAll(filter, message);
        }
    });

    localStorage.setItem('data', JSON.stringify(data));
    showData();
}


function showData() {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '';

    let data = getData();
    data?.map(item => {
        const div = document.createElement('div');
        div.textContent = item;
        outputElement.appendChild(div);
    });
};

showData();