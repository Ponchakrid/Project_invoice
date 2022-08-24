const { event } = require("jquery");

function addSelect() {
    var T = document.getElementById('xTable');

    var R = document.querySelectorAll('tbody .qrow')[0];

    var C = R.cloneNode(true);

    T.appendChild(C);

}

  function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }