// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.7;

contract Record {
    address public administrator;
    uint256 public hospital_count;
    uint256 public patient_count;
    mapping(address => bool) public hospital;
    mapping(address => bool) public patients;
    mapping(address => mapping(uint => uint256[])) public patient_records;
    mapping(address => uint) public patient_records_count;
    mapping(address => mapping(address=>uint)) public ad_count;
    uint256[] public temparr;

    struct Patient {
        uint256 mr_no;
        string name;
        uint256 CNIC;
    }

    struct Doctor {
        uint256 dr_no;
        string name;
        uint256 CNIC;
        uint256 licence_no;
    }

    mapping(uint256 => Patient) public patientsData;
    mapping(uint256 => bool) isPatient;
    uint256 public patientNumber = 0;

    mapping(uint256 => Doctor) public doctorsData;
    mapping(uint256 => bool) isDoctor;
    uint256 public doctorNumber = 0;

    constructor () {
        administrator = msg.sender;
    }

    function addHospitals(address hosp) public {
        require(administrator == msg.sender);
        require(hospital[hosp] == false);
        hospital[hosp] = true;
        hospital_count++;
    }

    function addPatients(string memory _name, uint256 _CNIC) public {
        require(administrator == msg.sender);
        require(!isPatient[_CNIC], "CNIC exists!");

        uint256 _mr_no = uint(keccak256(abi.encodePacked(msg.sender, block.timestamp, _CNIC))) % 1000000000;
        patientsData[patientNumber] = Patient(_mr_no, _name, _CNIC);
        isPatient[_CNIC] = true;
        patientNumber++;

        patients[msg.sender] = true;
        patient_count++;
    }

    function addDoctors(string memory _name, uint256 _CNIC, uint256 _licence_no) public {
        require(administrator == msg.sender);
        require(!isDoctor[_CNIC], "CNIC exists!");

        uint256 _dr_no = uint(keccak256(abi.encodePacked(msg.sender, block.timestamp, _CNIC))) % 1000000000;
        doctorsData[doctorNumber] = Doctor(_dr_no, _name, _CNIC, _licence_no);
        isDoctor[_CNIC] = true;
        doctorNumber++;
    }

    function addPatientRecords(address patient, uint256[] memory patientRecords) public {
        require(hospital[msg.sender]);
        require(patients[patient]);

        for (uint256 i = 0; i < patientRecords.length; ++i) {
            patient_records[patient][patient_records_count[patient]].push(patientRecords[i]);
        }
        patient_records_count[patient]++;
    }

    function getPatientRecords(address patient) public returns (uint256[] memory) {
        require(hospital[msg.sender]);
        require(patients[patient]);
        delete temparr;

        for (uint256 i = 0; i < patient_records_count[patient]; ++i) {
            for (uint256 j = 0; j < patient_records[patient][i].length; ++j) {
                temparr.push(uint256(patient_records[patient][i][j]));
            }
            temparr.push(uint256(1000));
        }

        return temparr;
    }

    function getPatientRecordsCount(address patient) public returns (uint256) {
        require(hospital[msg.sender]);
        require(patients[patient]);

        return patient_records_count[patient];
    }
}