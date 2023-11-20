function sendEmail(form) {
  event.preventDefault();
  let cName = form.elements["contact-name"]
    ? form.elements["contact-name"].value
    : "";
  let cPhone = form.elements["phone"] ? form.elements["phone"].value : "";
  let cEmail = form.elements["contact-email"]
    ? form.elements["contact-email"].value
    : "";
  let consultingType = form.elements["consulting-type"]
    ? form.elements["consulting-type"].value
    : "";
  let subject = form.elements["subject"] ? form.elements["subject"].value : "";
  let body =
    form.elements["contact-form"] &&
    form.elements["contact-form"]["contact-message"]
      ? form.elements["contact-form"]["contact-message"].value
      : "";

  if (cName == "") {
    alert("Name must be filled out");
    return false;
  }
  if (cPhone == "") {
    alert("Phone No. must be filled out");
    return false;
  }
  //   if (cEmail == '') {
  //     alert('Email must be filled out');
  //     return false;
  //   }
  //   if (subject == '') {
  //     alert('Subject must be filled out');
  //     return false;
  //   }
  //   if (body == '') {
  //     alert('Your message must be filled out');
  //     return false;
  //   }

  let emailBody = `<table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperBody" style="max-width:600px">
              <tbody>
                  <tr>
                      <td align="center" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableCard" style="background-color:#fff;border-color:#e5e5e5;border-style:solid;border-width:0 1px 1px 1px;">
                              <tbody>
                                  <tr>
                                      <td style="background-color:#00d2f4;font-size:1px;line-height:3px" class="topBorder" height="3">&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td style="padding-top: 60px; padding-bottom: 20px;" align="center" valign="middle" class="emailLogo">
                                          <a href="#" style="text-decoration:none" target="_blank">
                                              <img alt="" border="0" src="https://taxvathc.com/images/bg-static.jpg" style="width:100%;max-width:150px;height:auto;display:block" width="150">
                                          </a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding-bottom: 5px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="mainTitle">
                                          <h2 class="text" style="color:#000;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:28px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:36px;text-transform:none;text-align:center;padding:0;margin:0">${subject}</h2>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding-bottom: 30px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="subTitle">
                                          <h4 class="text" style="color:#999;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:16px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:24px;text-transform:none;text-align:center;padding:0;margin:0"> ${cName} | ${cEmail} | ${cPhone}</h4>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding-left:20px;padding-right:20px" align="center" valign="top" class="containtTable ui-sortable">
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableDescription" style="">
                                              <tbody>
                                                  <tr>
                                                      <td style="padding-bottom: 20px;" align="center" valign="top" class="description">
                                                          <p class="text" style="color:#666;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:22px;text-transform:none;text-align:center;padding:0;margin:0">${body}</p>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              </tbody>
          </table>`;

  Email.send({
    name: form.elements["contact-name"].value,
    Host: 'smtp.elasticemail.com',
    PORT: 2525,
    Username: 'mail@taxvathc.com',
    Password: '0729359689ADB280072A6596C9E1F58AFA0C',
    Password: "Ayaat08@0821",
    To: "billal.hossain@ixorasolution.com",
    // To: 'mozumder0204@gmail.com,hossainmohammedanowar@gmail.com',
    From: "info@taxvathc.com",
    Subject: `${cName} Just messeaged you from the TaxVatHC website form.`,
    Body: emailBody, //document.getElementById('contact-message').value,
  }).then(function (response) {
    if (response == "OK") {
      $("#sendmessage").addClass("show");
      $("#errormessage").removeClass("show");
      $(".contactForm").find("input, textarea").val("");
    } else {
      $("#sendmessage").removeClass("show");
      $("#errormessage").addClass("show");
      $("#errormessage").html(msg);
      throw new Error("Error: " + response.statusText);
    }
  });
}
