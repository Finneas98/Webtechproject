// Retrieve staff members from localStorage if available, or create an empty array
let staffArray = JSON.parse(localStorage.getItem('staffMembers')) || [];

var $ = function(id){
    return document.getElementById(id);
};

class StaffMember {
    static lastStaffID = 1000;

    constructor(fname, lname, email, dob, salary, pNo, position){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.dob = dob;
        this.salary = salary;
        this.pNo = pNo;
        this.position = position;
        this.staffID = ++StaffMember.lastStaffID;
    }
}



var addStaff = function(){
    // Get values from the form
    const fname = $("fName").value;
    const lname = $("lName").value;
    const email = $("email").value;
    const dob = new Date($("dob").value);
    const salary = parseFloat($("salary").value);
    const pNo = $("pNo").value;
    const position = $("position").value;

    // Create a new StaffMember instance
    const newStaffMember = new StaffMember(fname, lname, email, dob, salary, pNo, position);

    // Add the new instance to the staffArray
    staffArray.push(newStaffMember);

    console.log("New Staff Member added:", newStaffMember);

    // Store the updated staffArray in localStorage
    localStorage.setItem('staffMembers', JSON.stringify(staffArray));

    $("fName").value = "";
    $("lName").value = "";
    $("email").value = "";
    $("dob").value = "";
    $("salary").value = "";
    $("pNo").value = "";
    $("position").value = "";

    $("addedStaff").textContent = `New staff member ${newStaffMember.fname} added successfully`;
};

window.onload = function () {
    $("addStaff").addEventListener("click", addStaff);
};