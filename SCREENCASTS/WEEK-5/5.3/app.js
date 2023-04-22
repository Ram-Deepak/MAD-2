const data = {
    course_id : 1
}

fetch(`http://172.16.128.215:5000/api/course/${data.course_id}`)
    .then((response) => {
        if(!response.ok){
            console.log('Error in response');
            throw new Error('HTTP error, status code : '+ response.status);
        }
        return response.json()})
    .then((data) => console.log(data))
    .catch((error) => console.log(error));