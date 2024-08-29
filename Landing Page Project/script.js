let signUp = document.getElementById("signup")
let body = document.querySelector("body")

let text =  `
<div class="sign-up">
<h2 id="signup-screen">Registration Form</h2>
<form action="mailto:gbedysamuel@gmail.com" method="post" enctype="text/plain" id="form">
<label for="firstname"><h4 class="fn">Firstname</h4></label>
<input type="text" value="" name="firstname"required><br><br>
<label for="lastname"><h4 class="fn">Lastname</h4></label>
<input type="text" value="" name="lastname" required><br><br>
<label for="email"><h4 class="fn">Email</h4></label>
<input type="email" value="" name="email" required><br><br>
<label for="phone"><h4 class="fn">Phone</h4></label>
<input type="number" value="" name="phone" required maxlength="12"><br><br>
<label for="username"><h4 class="fn">Username</h4></label>
<input type="text" value="" name ="username" required minlength="4"><br><br>
<label for="pass"><h4 class="fn">Password</h4></label>
<input type="password" value="" name ="pass" required minlength="8"><br><br><br>
<select id="login"><option>male</option><option>female</option></select><br><br>
<input type="submit" value="Submit" id="login"><br><br>
</form>    
</div>    
`
signUp.addEventListener("click", function(){
    body.innerHTML = text
})