var $ = function(id){
    return document.getElementById(id);
};

class staffMember {
    
    static lastStaffID = 1000;
    
    constructor(fname, staffID){
        this.fname = fname;
        this.staffID = ++staffMember.lastStaffID;
    }
}

var addStaff = function(){
    
    var instance = new staffMember(
        $("fName").value
    );

    console.log("New Staff Member:", instance); // Log the instance

    $("addStaffForm").submit();
};

window.onload = function () {
    $("addStaff").addEventListener("click", addStaff);
};