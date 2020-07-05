const login = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const xhr = new XMLHttpRequest();
    const url = 'http://127.0.0.1:8080';
    xhr.open('POST', url + '/api/login', true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send('user=' + username + '&pass=' + password);
    console.log('user=' + username + '&pass=' + password);
    xhr.onreadystatechange = () => {
        const json = xhr.responseText;
        console.log(json);
    }
}
