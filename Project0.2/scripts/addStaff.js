var staffArray = JSON.parse(localStorage.getItem('staffMembers')) || [];

var $ = function(id) {
    return document.getElementById(id);
};

class StaffMember {
    static lastStaffID = 1000;

    constructor(fname, lname, email, dob, salary, pNo, position, address, eircode) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.dob = dob;
        this.salary = salary;
        this.pNo = pNo;
        this.position = position;
        this.staffID = ++StaffMember.lastStaffID;
        this.address = address;
        this.eircode = eircode;
    }
}

var addStaff = function(event) {
    event.preventDefault(); // Prevent form submission

    const fname = $("fName").value;
    const lname = $("lName").value;
    const email = $("email").value;
    const dob = $("dob").value;
    const salary = $("salary").value;
    const pNo = $("phone").value;
    const position = $("position").value;
    const address = $("address").value;
    const eircode = $("eircode").value;

    const newStaffMember = new StaffMember(fname, lname, email, dob, salary, pNo, position, address, eircode);
    
    staffArray.push(newStaffMember);

    localStorage.setItem('staffMembers', JSON.stringify(staffArray));

    $("fName").value = "";
    $("lName").value = "";
    $("email").value = "";
    $("dob").value = "";
    $("salary").value = "";
    $("phone").value = "";
    $("position").value = "management"; // Default position
    $("address").value = "";
    $("eircode").value = "";

    $("addedStaff").textContent = `New staff member ${newStaffMember.fname} added successfully`;
};

window.onload = function () {
    var staffForm = $("staffForm");
    if (staffForm) {
        staffForm.addEventListener("submit", addStaff);
    }
};