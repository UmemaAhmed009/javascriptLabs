function submitFeedback(){
    const userName = document.getElementById("name").value;
    const userAge = document.getElementById("age").value;
    const userEmail = document.getElementById("email").value;
    const userJob = document.getElementById("job").value;
    const userDesignation = document.getElementById("designation").value;
    const userProductChoice = document.getElementById("productType").value;
    const userFeedback = document.getElementById("feedbackText").value;

    alert("Thank you for your valuable feedback.");

    document.getElementById("userName").innerText=userName;
    document.getElementById("userAge").innerText=userAge;
    document.getElementById("userEmail").innerText=userEmail;
    document.getElementById("userJob").innerText=userJob;
    document.getElementById("userDesignation").innerText=userDesignation;
    document.getElementById("userProductChoice").innerText=userProductChoice;
    document.getElementById("userFeedback").innerText=userFeedback;

    document.getElementById('userInfo').style.display = 'block';
}
const submitButton = document.getElementById("submitBtn");
submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        submitFeedback();
    }
})