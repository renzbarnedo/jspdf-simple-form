var options = {
  orientation: 'portrait',
  // orientation: 'landscape',
  unit: 'px', // used in values ex: var paperHeightTenth = paperHeight / 10(mm);
  format: 'letter' //[4(length?), 2(height?)]
};

var doc = new jsPDF(options);
console.log(doc);
var pageSize = doc.internal.pageSize;

var width = pageSize.width;
var height = pageSize.height;

// ML, MT, W, H (units)
// width = 200;
var marginLeft = 50;
var width = width / 2;
var rectangle = doc.rect(marginLeft, 50, width, height / 2);
console.log(doc.internal.getHorizontalCoordinate(rectangle));


// X1, Y1, X2, Y2 (start and end)
var x1 = marginLeft;
var x2 = marginLeft + width;
var line = doc.line(x1, 40, x2, 40);
console.log(doc.internal.getLineHeight(line));


doc.output('dataurlnewwindow');

