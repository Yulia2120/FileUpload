$("#file").change(function () {
  if (window.FormData === undefined) {
    alert("В вашем браузере FormData не поддерживается");
  } else {
    var formData = new FormData();
    formData.append("file", $("#file")[0].files[0]);

    $.ajax({
      type: "POST",
      url: "https://localhost:7001/api/Upload/UploadFile",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      dataType: "json",
      success: function (data) {
        alert("Успешно!");
      },
      error: function () {
        alert("Error!");
      },
    });
  }
});
