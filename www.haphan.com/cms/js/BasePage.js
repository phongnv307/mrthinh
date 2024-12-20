function textbox_autoheight(f, max, height) {
  var max = typeof max == "undefined" ? 1000 : max;
  if (f.scrollHeight > max) {
    if (f.style.overflowY != "scroll") {
      f.style.overflowY = "scroll";
    }
    return;
  }
  if (f.style.overflowY != "hidden") {
    f.style.overflowY = "hidden";
  }
  var scrollH = 0;
  if (height != "undefined") {
    scrollH = f.scrollHeight + height;
  } else {
    scrollH = f.scrollHeight;
  }
  if (scrollH > f.style.height.replace(/[^0-9]/g, "")) {
    f.style.height = scrollH + "px";
  }
}
String.prototype.replaceAll = function (replaceValue, newValue) {
  var functionReturn = this;
  while (true) {
    var currentValue = functionReturn;
    functionReturn = functionReturn.replace(replaceValue, newValue);
    if (functionReturn == currentValue) break;
  }
  return functionReturn;
};
function formatTime(textValue) {
  var functionReturn = new String(textValue);
  functionReturn = functionReturn.replaceAll(":", "");
  if (!isNaN(functionReturn)) {
    if (functionReturn.length >= 2) {
      var tempText = new String("");
      tempText = functionReturn.substr(0, 2) + ":";
      tempText += functionReturn.substr(2);
      functionReturn = tempText;
    }
    return functionReturn;
  }
  return "";
}
var dtCh = ".";
var minYear = 1900;
var maxYear = 9999;
function isInteger(s) {
  var i;
  for (i = 0; i < s.length; i++) {
    // Check that current character is number.
    var c = s.charAt(i);
    if (c < "0" || c > "9") return false;
  }
  // All characters are numbers.
  return true;
}
function stripCharsInBag(s, bag) {
  var i;
  var returnString = "";
  // Search through string's characters one by one.
  // If character is not in bag, append to returnString.
  for (i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (bag.indexOf(c) == -1) returnString += c;
  }
  return returnString;
}
function daysInFebruary(year) {
  // February has 29 days in any year evenly divisible by four,
  // EXCEPT for centurial years which are not also divisible by 400.
  return year % 4 == 0 && (!(year % 100 == 0) || year % 400 == 0) ? 29 : 28;
}
function DaysArray(n) {
  for (var i = 1; i <= n; i++) {
    this[i] = 31;
    if (i == 4 || i == 6 || i == 9 || i == 11) {
      this[i] = 30;
    }
    if (i == 2) {
      this[i] = 29;
    }
  }
  return this;
}
function isDate(txt, dtStr) {
  var daysInMonth = DaysArray(12);
  var pos1 = dtStr.indexOf(dtCh);
  var pos2 = dtStr.indexOf(dtCh, pos1 + 1);
  var strDay = dtStr.substring(0, pos1);
  var strMonth = dtStr.substring(pos1 + 1, pos2);
  var strYear = dtStr.substring(pos2 + 1);
  strYr = strYear;
  if (strDay.charAt(0) == "0" && strDay.length > 1)
    strDay = strDay.substring(1);
  if (strMonth.charAt(0) == "0" && strMonth.length > 1)
    strMonth = strMonth.substring(1);
  for (var i = 1; i <= 3; i++) {
    if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1);
  }
  month = parseInt(strMonth);
  day = parseInt(strDay);
  year = parseInt(strYr);
  //alert(day + "." + month + "." + year)
  //alert(pos1 + " " + pos2);
  if (pos1 == -1 || pos2 == -1) {
    $(txt).css("background-color", "#ffcc00");
    $(txt).attr("title", "Vui lòng nhập ngày theo định dạng dd.MM.yyyy !");
    return false;
  }
  if (strMonth.length < 1 || month < 1 || month > 12) {
    $(txt).css("background-color", "#ffcc00");
    $(txt).attr("title", "Vui lòng nhập tháng hợp lệ!");
    return false;
  }
  if (
    strDay.length < 1 ||
    day < 1 ||
    day > 31 ||
    (month == 2 && day > daysInFebruary(year)) ||
    day > daysInMonth[month]
  ) {
    //alert("asdfadsf");
    $(txt).css("background-color", "#ffcc00");
    $(txt).attr("title", "Vui lòng nhập ngày hợp lệ!");
    return false;
  }
  if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
    $(txt).css("background-color", "#ffcc00");
    $(txt).attr("title", "Vui lòng nhập năm hợp lệ!");
    return false;
  }
  if (
    dtStr.indexOf(dtCh, pos2 + 1) != -1 ||
    isInteger(stripCharsInBag(dtStr, dtCh)) == false
  ) {
    $(txt).css("background-color", "#ffcc00");
    $(txt).attr("title", "Vui lòng nhập năm hợp lệ!");
    return false;
  }
  $(txt).css("background-color", "Transparent");
  $(txt).attr("title", "");
  return true;
}
function ValidateForm(txt) {
  if (isDate(txt, txt.value) == false) {
    //txt.focus()
    //$(txt).css('background-color', "#ffcc00");
    return false;
  }
  return true;
}
function ValidateFromGrid(dtStr) {
  var daysInMonth = DaysArray(12);
  var pos1 = dtStr.indexOf(dtCh);
  var pos2 = dtStr.indexOf(dtCh, pos1 + 1);
  var strDay = dtStr.substring(0, pos1);
  var strMonth = dtStr.substring(pos1 + 1, pos2);
  var strYear = dtStr.substring(pos2 + 1);
  strYr = strYear;
  if (strDay.charAt(0) == "0" && strDay.length > 1)
    strDay = strDay.substring(1);
  if (strMonth.charAt(0) == "0" && strMonth.length > 1)
    strMonth = strMonth.substring(1);
  for (var i = 1; i <= 3; i++) {
    if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1);
  }
  month = parseInt(strMonth);
  day = parseInt(strDay);
  year = parseInt(strYr);
  if (pos1 == -1 || pos2 == -1) {
    return false;
  }
  if (strMonth.length < 1 || month < 1 || month > 12) {
    return false;
  }
  if (
    strDay.length < 1 ||
    day < 1 ||
    day > 31 ||
    (month == 2 && day > daysInFebruary(year)) ||
    day > daysInMonth[month]
  ) {
    return false;
  }
  if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
    return false;
  }
  if (
    dtStr.indexOf(dtCh, pos2 + 1) != -1 ||
    isInteger(stripCharsInBag(dtStr, dtCh)) == false
  ) {
    return false;
  }
  return true;
}
function AlertMessage(message) {
  var html = "";
  html +=
    '<div id="myModal2" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2"';
  html += '    aria-hidden="true">';
  html += '    <div class="modal-header">';
  html +=
    '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">';
  html += "            ×</button>";
  html += '        <h3 id="myModalLabel2">';
  html += "            Alert</h3>";
  html += "    </div>";
  html += '    <div class="modal-body">';
  html += '        <p id="idMessage">';
  html += "            " + message + "</p>";
  html += "    </div>";
  html += '    <div class="modal-footer">';
  html += '        <button data-dismiss="modal" class="btn btn-primary">';
  html += "            OK</button>";
  html += "    </div>";
  html += "</div>";
  document.getElementById("idAlert").innerHTML = html;
  $("#myModal2").modal("show");
}
/*
 * myboxy.js
 */
$.fn.myBoxy = function (popup, options) {
  myoptions = jQuery.extend(
    {
      title: "Alerts",
      message: "",
      type: "alert",
      refresh: false,
      modal: true,
      afterHide: function () {},
      callback: function () {},
    },
    options,
  );
  var content =
    '<div class="popup" style="width:460px;margin:0 auto">' +
    '<div class="title-popup">' +
    "<span>" +
    myoptions.title +
    "</span>";
  if (myoptions.refresh == true) {
    content +=
      '<a title="Đóng lại" style="opacity:1;" class="btn-close close" onclick="Boxy.get(this).hide();location.reload();"><img src="Images/boxy/close_boxy.png" width="30" height="30" alt="Đóng lại" /></a>';
  } else {
    content +=
      '<a title="Đóng lại" style="opacity:1;" class="btn-close close" onclick="Boxy.get(this).hide();"><img src="Images/boxy/close_boxy.png" width="30" height="30" alt="Đóng lại"/></a>';
  }
  content += "</div>" + '<div class="content-popup">';
  if (myoptions.type == "alert") {
    content +=
      '<div class="bar-notice notice-warning"><span class="ico"></span>' +
      myoptions.message +
      '</div><div class="clear"></div>';
  }
  if (myoptions.type == "success") {
    content +=
      '<div class="bar-notice notice-sucess"><span class="ico"></span>' +
      myoptions.message +
      '</div><div class="clear"></div>';
  } else if (myoptions.type == "confirm") {
    content +=
      '<div class="bar-notice notice-confirm"><span class="ico"></span>' +
      myoptions.message +
      '</div><div class="clear"></div>';
  } else if (myoptions.type == "error") {
    content +=
      '<div class="bar-notice notice-error"><span class="ico"></span>' +
      myoptions.message +
      '</div><div class="clear"></div>';
  } else if (myoptions.type == "message" || myoptions.type == "loading") {
    content += "<div>" + myoptions.message + "</div>";
  }
  content += "</div>";
  if (
    myoptions.type == "alert" ||
    myoptions.type == "success" ||
    myoptions.type == "message"
  ) {
    content +=
      '<div class="footer-popup" style="height:27px;">' +
      '<div class="btn-default">';
    if (myoptions.refresh == true) {
      content +=
        '<input class="btn-cancel close" style="opacity: 1;" type="button" onclick="Boxy.get(this).hide();location.reload();" value="Close" />';
    } else {
      content +=
        '<input class="btn-cancel close" style="opacity: 1;" type="button" onclick="Boxy.get(this).hide();" value="Close" />';
    }
    content += "</div>";
  } else if (myoptions.type == "confirm") {
    content +=
      '<div class="footer-popup">' +
      '<div class="btn-default btn-double"><input id="accept" style="opacity: 1;" class="btn-accept" name="" type="button" value="Accept" />' +
      '<input id="reject" class="btn-cancel close" name="" style="opacity: 1;" onclick="Boxy.get(this).hide();" type="button" value="Cancel" /></div>' +
      "</div>";
  } else if (myoptions.type == "loading") {
    content += '<div class="footer-popup">';
  }
  content += "</div>";
  new popup(content, myoptions);
  if (myoptions.type == "confirm") {
    $("#accept").click(myoptions.callback);
  }
  return false;
};
