function doPost(e) {
  var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet(); // AKfycbzwvSJFw-Vct6Lpq7IvW0jQ_H-Y6WQhTTMbvVjWjv4MfidCkisjup_e1DZHyhmEu7mS
  var data = e.parameters;
  
  sheet.appendRow([
    data.formType, 
    data.fname, 
    data.district, 
    data.subDivision,
    data.email,
    data.mobile,
    data.dob,
    data.fathername,
    data.mothername,
    data.category,
    data.gender,
    data.language,
    data.address,
    data.photo1,
    data.photo2,
    data.photo3,
    data.photo4,
    data.photo5,
    data.photo6,
    data.photo7,
    data.photo8
  ]);

  return ContentService.createTextOutput("Data saved successfully.");
}