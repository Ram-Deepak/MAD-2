async function query(){
    let roll_number = document.querySelector('[name = "roll-number"]').value;
    fetch(`http://localhost:5000/display/${roll_number}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('roll').innerHTML = `Roll NUmber : ${data['roll_number']}`;
            document.getElementById('name').innerHTML = `Name : ${data['name']}`;
            document.getElementById('callsign').innerHTML = `Call Sign : ${data['call_sign']}`;
        });
}

