$( document ).ready(function(){
	var menu = $('.menu-auto');
	var a = menu.find('a, .link');
	var aa = [];
	a.each(function(index, element){
		var pid = $(element).attr('data-pid');
		var id = $(element).attr('data-id');
		var order = $(element).attr('data-order');
		aa.push({ pid: pid, id: id, order: order, element: element });
	});
	for(p in tree){
		console.log(tree[p]);
		tree[p].sort(function(e1, e2){
			var o1 = $(e1).attr('data-order'), o2 = $(e2).attr('data-order'), result;
			result = (!o1 || !o2 || o1==o2) ? 0 : o1 > o2;
			console.log(o1 + ' : ' + o2 + ' :: ' + result);
			return result;
		});
		console.log(p + tree[p]);
	}
});
