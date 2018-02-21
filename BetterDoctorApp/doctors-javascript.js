// fake api
"use strict";

(() => {
    window.DocSearchController = {
        init: () => {
            let searchButton1 = $("#search-button1");
            let searchButton2 = $("#search-button2");
            let searchButton3 = $("#search-button3");
            let searchDoctor = $("#search-doctor");
            let searchSpecialities = $("search-specialities");
            let searchInsurance = $("search-insurance");
            let table = $(".table-sm.doctor tbody");
            let table2 = $(".table-sm.specialty tbody");
            let table3 = $(".table-sm.insurance tbody");

// function search for doctors and bios
            searchButton1.click(() => {
                $.getJSON(// " API HERE ", {
                        name: $("#search-doctor").val(),
                        api_key: "a064fc45488100a6a40c8b7e77f90ca4"
                    }
                ).done(result => {
                    table.empty();
                    result.data.forEach(dataEntry => {
                        let row = $("<tr></tr>");
                        let firstNameColumn = $("<td></td>");
                        firstNameColumn.text(dataEntry.profile.first_name);
                        row.append(firstNameColumn);
                        let lastNameColumn = $("<td></td>");
                        lastNameColumn.text(dataEntry.profile.last_name);
                        row.append(lastNameColumn);
                        let profileColumn = $("<td></td>");
                        profileColumn.text(dataEntry.profile.bio);
                        row.append(profileColumn);
                        table.append(row);
                    });
                });
            });

            searchDoctor.bind("input", () => searchButton1.prop("disabled", !searchDoctor.val()));

// function search for specialities and descriptions
// requires two terms to work w/ a comma
// network works but does not appear

            searchButton2.click(() => {
                $.getJSON("https://api.betterdoctor.com/2016-03-01/specialties?" +
                "user_key=a064fc45488100a6a40c8b7e77f90ca4", {
                    fields: $("search-specialities").val(),
                    "skip": 0,
                    "limit": 100,
                    api_key: "a064fc45488100a6a40c8b7e77f90ca4"
                }
              ).done(result => {
                  table2.empty();
                  result.data.forEach(dataEntry => {
                      let row = $("<tr></tr>");
                      let nameColumn = $("<td></td>");
                      nameColumn.text(dataEntry.name);
                      row.append(nameColumn);
                      let descriptionColumn = $("<td></td>");
                      descriptionColumn.text(dataEntry.description);
                      row.append(descriptionColumn);
                      table2.append(row);
                  });
              }
          );
            });

            searchSpecialities.bind("input", () => searchButton2.prop(!searchSpecialities.val()));

// function search for insurance, require two search terms w/ a comma
// network works but does not appear

            searchButton3.click(() => {
                $.getJSON("https://api.betterdoctor.com/2016-03-01/insurances?" +
                "user_key=a064fc45488100a6a40c8b7e77f90ca4", {
                    fields: $("search-insurance").val(),
                    "skip": 0,
                    "limit": 100,
                    api_key: "a064fc45488100a6a40c8b7e77f90ca4"
                }
                ).done(result => {
                    table3.empty();
                    result.data.forEach(dataEntry => {
                        let row = $("<tr></tr>");
                        let insuranceColumn = $("<td></td>");
                        insuranceColumn.text(dataEntry.name);
                        row.append(insuranceColumn);
                        let planColumn = $("<td></td>");
                        planColumn.text(dataEntry.uid);
                        row.append(planColumn);
                        table3.append(row);
                    });
                });
            });

            searchInsurance.bind("input", () => searchButton3.prop(!searchInsurance.val()));
          // after button stuff
        }
    };
})();
