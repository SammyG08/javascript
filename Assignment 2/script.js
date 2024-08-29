let contentArea = document.querySelector("#content-area")
let list = document.querySelector(".class-list")
let timetable = document.querySelector(".timetable")
let studentInfo = document.querySelector(".student-info")
let resultSlip = document.querySelector(".result-slip")
let courseRegistration = document.querySelector(".registration")

list.addEventListener("click", function(){
  contentArea.innerHTML = `
  <div class="main">
  <table align="left" id="class-list">
      <tr>
          <th><h2 id="name">NAME</h2></th>
          <th><h2 id="id">ID NUMBER</h2></th>
          <th><h2 id="programs">PROGRAM OFFERED</h2></th>
      </tr>
      <tr>
          <td>
              <ol type="1">
              <li>Pearl</li>
              <li>Hamdiya</li>
              <li>Harriet</li>
              <li>Susan</li>
              <li>Faustina</li>
              <li>Benedicta</li>
              <li>Bridget</li>
              <li>Caroline</li>
              <li>Tracy</li>
              <li>Ernestina</li>
              <li>Mimi</li>
              <li>Christabel</li>
              <li>Joyland</li>
              <li>Mirabel</li>
              <li>Hawa</li>
              <li>Hanan</li>
              <li>Matilda</li>
              <li>Bernice</li>
              <li>Sherelle</li>
              <li>Rahinatu</li>
              <li>Angelina</li>
              <li>Golda</li>
              <li>Elyon</li>
              <li>Gloria</li>
              </ol>
          </td>
          <td>
              <ul>
              <li>0107242001</li>
              <li>0107242002</li>
              <li>0107242003</li>
              <li>0107242004</li>
              <li>0107242005</li>
              <li>0107242006</li>
              <li>0107242007</li>
              <li>0107242008</li>
              <li>0107242009</li>
              <li>0107242010</li>
              <li>0107242011</li>
              <li>0107242012</li>
              <li>0107242013</li>
              <li>0107242014</li>
              <li>0107242015</li>
              <li>0107242016</li>
              <li>0107242017</li>
              <li>0107242018</li>
              <li>0107242019</li>
              <li>0107242020</li>
              <li>0107242021</li>
              <li>0107242022</li>
              <li>0107242023</li>
              <li>0107242024</li>
              </ul>    
          </td>     
          <td>         
              <ul>
              <li>Computer Science</li>
              <li>Computer Science</li>
              <li>Data Science</li>
              <li>Computer Engineering</li>
              <li>Cyber Security</li>
              <li>Software Engineering</li>
              <li>Computer Engineering</li>
              <li>Machine Learning</li>
              <li>Computer Enginerring</li>
              <li>Networking</li>
              <li>IT</li>
              <li>Computer Science</li>
              <li>Computer Science</li>
              <li>Cyber Security</li>
              <li>Cyber Security</li>
              <li>Software Engineering</li>
              <li>Data Science</li>
              <li>Data Science</li>
              <li>IT</li>
              <li>Machine Learning</li>
              <li>Software Engineering</li>
              <li>Computer Science</li>
              <li>Machine Learning</li>
              <li>Networking</li>
              </ul>   
          </td>
      </tr>
  </table>
</div>
`
})

timetable.addEventListener("click", function(){
    contentArea.innerHTML = `
    <div class="table">
    <table id="timetable">
        <caption>Software Engineering L200</caption>
        <tr id="timetable-tr">
            <th id="timetable-th">DAYS</th>
            <th id="timetable-th">7:00AM-9:00AM</th>
            <th id="timetable-th">11:00AM-1:00PM</th>
        </tr>
        <tr id="timetable-tr">
            <td id="timetable-td">Monday</td>
            <td id="timetable-td">System Analysis & Design</td>
            <td id="timetable-td">Microprocessors & Microcontrollers</td>
        </tr>
        <tr id="timetable-tr">
            <td id="timetable-td">Tuesday</td>
            <td id="timetable-td">Data Stuctures & Algorithm</td>
            <td id="timetable-td">Web Programming & Applications</td>
        </tr>
        <tr id="timetable-tr">
            <td id="timetable-td">Wednesday</td>
            <td id="timetable-td">Logic for Computer Science</td>
            <td id="timetable-td">Data Communication</td>
        </tr>
    </table>
    </div>
    `
})

studentInfo.addEventListener("click", function(){
  contentArea.innerHTML = `
  <div class="details">
  <table align="center" class="student-info">
      <tr id="student-tr">
          <th id="student-th">Student Name</th>
          <td id="student-td">Samuel Kwesi Gbedy</td>
      </tr>
      <tr id="student-tr">
          <th id="student-th">Student ID</th>
          <td id="student-td">4231230180</td>
      </tr>
      <tr id="student-tr">
          <th id="student-th">Email</th>
          <td id="student-td">gbedysamuel@gmail.com</td>
      </tr>
      <tr id="student-tr">
          <th id="student-th">Phone</th>
          <td id="student-td">0549021305</td>
      </tr>
      <tr id="student-tr">
          <th id="student-th">Program</th>
          <td id="student-td">Software Engineering</td>
      </tr>
  </table>
</div>
`
})

resultSlip.addEventListener("click", function(){
  contentArea.innerHTML = `
  <div class="slip">
    <table align="center" class="resultslip">
      <tr id="slip-tr">
        <th id="slip-th">Course Name</th>
        <th id="slip-th">Marks</th>
        <th id="slip-th">Grade</th>
        <th id="slip-th">GPA</th>
        <th id="slip-th">Credit Hours</th>
      </tr>
      <tr id="slip-tr">
        <th id="slip-th">Data Structures & Algorithm</th>
        <td id="slip-td">-</td>
        <td id="slip-td">-</td>
        <td id="slip-td">-</td>
        <td id="slip-td">3</td>
      </tr>
      <tr id="slip-tr">
        <th id="slip-th">System Analysis & Design</th>
        <td id="slip-td">-</td>
        <td id="slip-td">-</td>
        <td id="slip-td">-</td>
        <td id="slip-td">3</td>
      </tr>
      <tr id="slip-tr">
        <th id="slip-th">Microprocessor & Microcontrollers</th>
        <td id="slip-td">-</td>
        <td id="slip-td">-</td>
        <td id="slip-td">-</td>
        <td id="slip-td">3</td>
      </tr>
      <tr id="slip-tr">
        <th id="slip-th">Webprogramming and Appplications</th>
        <td id="slip-td">-</td>
        <td id="slip-td">-</td>
        <td id="slip-td">-</td>
        <td id="slip-td">3</td>
      </tr>
      <tr id="slip-tr">
        <th id="slip-th">Data Communication</th>
          <td id="slip-td">-</td>
          <td id="slip-td">-</td>
          <td id="slip-td">-</td>
          <td id="slip-td">3</td>
        </tr id="slip-tr">
        <tr id="slip-tr">
          <th id="slip-th">Logic for Computer Science</th>
          <td id="slip-td">-</td>
          <td id="slip-td">-</td>
          <td id="slip-td">-</td>
          <td id="slip-td">3</td>
        </tr>
        <tr id="slip-tr">
          <th id="slip-th"></th>
          <th id="slip-th">CGPA</th>
          <th id="slip-th">Percentage</th>
          <th id="slip-th">Class</th>
          <th id="slip-th">Credit Passed</td>
        </tr>
        <tr id="slip-tr">
          <td id="slip-td"></td>
          <td id="slip-td">-</td>
          <td id="slip-td">-</td>
          <td id="slip-td">-</td>
          <td id="slip-td">-</td>
        </tr>
      </table>
    </div>  
  `
})

courseRegistration.addEventListener("click", function(){
  contentArea.innerHTML = `
  <div class="info">
    <table align="center" class="reg">
      <tr class="headings">
        <th id="reg-th">Course Name</th>
        <th id="reg-th">Lecturer</th>
        <th id="reg-th">Credit Hours</th>
      </tr>            
      <tr id="reg-tr">
        <td id="reg-td">
        <form action="gbedysamuel@gmail.com" method="post" enctype="text/plain">
        <input type="checkbox" name="check" value="">
        <span>CSNS241 - Data Communictaions</span>
        </form>
        </td>
        <td id="reg-td">
        <span>Dr.MABIEFAM MARTIN UJAKPA</span>
        </td>
        <td id="reg-td">3</td>
      </tr>
      <tr id="reg-tr">
        <td id="reg-td">
        <form action="gbedysamuel@gmail.com" method="post" enctype="text/plain">
        <input type="checkbox" name="check" value="">
        <span>CSSD201 - Data Structures & Algorithms</span>
        </form>
        </td>
        <td id="reg-td">
        <span>Dr.MABIEFAM MARTIN UJAKPA</span>
        </td>
        <td id="reg-td">3</td>
      </tr>
      <tr id="reg-tr">
        <td id="reg-td">
        <form action="gbedysamuel@gmail.com" method="post" enctype="text/plain">
        <input type="checkbox" name="check" value="">
        <span>CSSD205 - Logic In Computer Science</span>
        </form>
        </td>
        <td id="reg-td">
        <span>Dr.MABIEFAM MARTIN UJAKPA</span>
        </td>
        <td id="reg-td">3</td>
      </tr>
      <tr id="reg-tr">
        <td id="reg-td">
        <form action="gbedysamuel@gmail.com" method="post" enctype="text/plain">
        <input type="checkbox" name="check" value="">
        <span>CSSD203 - Microprocessors & Microcontrollers</span>
        </form>
        </td>
        <td id="reg-td">
        <span>Dr.MABIEFAM MARTIN UJAKPA</span>
        </td>
        <td id="reg-td">3</td>
      </tr>
      <tr id="reg-tr">
        <td id="reg-td">
        <form action="gbedysamuel@gmail.com" method="post" enctype="text/plain">
        <input type="checkbox" name="check" value="">
        <span>CSSD223 - System Analysis & Design</span>
        </form>
        </td>
        <td id="reg-td">
        <span>Dr.MABIEFAM MARTIN UJAKPA</span>
        </td>
        <td id="reg-td">3</td>
      </tr>
      <tr id="reg-tr">
        <td id="reg-td">
        <form action="gbedysamuel@gmail.com" method="post" enctype="text/plain">
        <input type="checkbox" name="check" value="">
        <span>CSSD209 - Webprogramming & Applications</span>
        </form>
        </td>
        <td id="reg-td">
        <span>Dr.MABIEFAM MARTIN UJAKPA</span>
        </td>
        <td id="reg-td">3</td>
      </tr>
    </table><br>
    <p id="reg-p">Total Credit Available: 18</p>
    <p id="reg-p">Total Credit Registered: 18</p><br><br><br>

    <table class="approval" align="center">
      <tr class="data">
        <th id="th">FOR STUDENT USE</th>
        <th id="th">FOR OFFICIAL USE</th>
      </tr><br><br>
      <tr class="data">
        <td id="td">Student Signature:<span id="empty"><span id="text">dhjvdhvjhvayvadyvavdgvgdfvdfbsdfbsbdbgbfgbfgnfhnfhnghngh</span></span></td>
        <td id="td">Official Stamp: <span id="span"></span></td>
      </tr>
      <tr class="data">
        <td id="td">Date:<span id="empty"><span id="text">dhjvdhvjhvayvadyvavdgvgdfvdfbsdfbsbdbgbfgbfgnfhnfhnghngh</span></td>
        <td id="td">Date:<span id="empty"><span id="text">dhjvdhvjhvayvadyvavdgvgdfvdfbsdfbsbdbgbfgbfgnfhnfhnghngh</span></span></td>
      </tr>
      <tr class="data">
        <td id="td"></td>
        <td id="td">Received By:<span id="empty"><span id="text">dhjvdhvjhvayvadyvavdgvgdfvdfbsdfbsbdbgbfgbfgnfhnfhnghngh</span></span></td>
      </tr>
    </table>
  </div>
  `
})