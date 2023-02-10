// 『8-2-1: Ajax でタスクを削除する』で記述するコード.
// 『8-2-3: コントローラからJavaScriptを返して実行する』で不要になるためにコメントアウトする.
//
document.addEventListener('turbolinks:load', function() {
  document.querySelectorAll('td').forEach(function(td) {
    td.addEventListener('mouseover', function(e) {
      e.currentTarget.style.backgroundColor = '#eff';
    });

    td.addEventListener('mouseout', function(e) {
      e.currentTarget.style.backgroundColor = '';
    });
  });
});
