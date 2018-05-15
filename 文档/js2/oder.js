//初始化单页view
var viewApi = mui('#app').view({
	defaultPage: '#setting'
});


mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
var view = viewApi.view;
(function($, doc) {
	$.init();
	$.ready(function() {
		/**
		 * 获取对象属性的值
		 * 主要用于过滤三级联动中，可能出现的最低级的数据不存在的情况，实际开发中需要注意这一点；
		 * @param {Object} obj 对象
		 * @param {String} param 属性名
		 * inde de qu 是获取的是修改地址的市区县
		 */
		var inde = ""; //市
		var de = ""; //区
		var qu = ""; //县
	var suio = doc.getElementById('guanyu').value;
		var _getParam = function(obj, param) {
			return obj[param] || '';
		};
		var cityPicker3 = new $.PopPicker({
			layer: 3
		});
		cityPicker3.setData(cityData3);
		var showCityPickerButton = doc.getElementById('showCityPicker3');
		var cityResult3 = doc.getElementById('cityResult3');
		showCityPickerButton.addEventListener('tap', function(event) {
			cityPicker3.show(function (targets) {
				cityResult3.innerText = _getParam(targets[0], 'text') + " " + _getParam(targets[1], 'text') + " " + _getParam(targets[2], 'text');
				cityResult3.style.color="black"
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		var showCityPickerButtons = doc.getElementById('showCityPicker34');
		var cityResult3s = doc.getElementById('cityResult34');
		showCityPickerButtons.addEventListener('tap', function (event) {
			cityPicker3.show(function (items) {
				console.log(items);
				cityResult3s.innerText = _getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
				inde = _getParam(items[0], 'value');
				de = _getParam(items[1], 'value');
				qu = _getParam(items[2], 'value')
			
				cityResult3.style.color = "black"
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		var oldBack = $.back;
		var cityResult3 = document.getElementById('cityResult34');
		$.back = function () {
			if (viewApi.canBack()) { //如果view可以后退，则执行view的后退
				viewApi.back();
			} else { //执行webview后退
				oldBack();
			}
		};

		// view.addEventListener('pageBeforeShow', function (e) {
		// 	//                console.log(e.detail.page.id + ' beforeShow');
		// 	console.log(12)
		// });
		view.addEventListener('pageShow', function (e) {
		console.log(inde, de, qu);
		  console.log(suio);
		  var Nsui = document.getElementById('jhoo').value;
		  console.log(Nsui)
		});
		// view.addEventListener('pageBeforeBack', function (e) {
		// 	//                console.log(e.detail.page.id + ' beforeBack');
		// 	console.log(13)
		// });
		view.addEventListener('pageBack', function (e) {
			//                console.log(e.detail.page.id + ' back');
			console.log(14)
		});
	});
	
})(mui, document);

var ee = $('.diz-right').val();
console.log(ee)
//初始化单页view
// var viewApi = mui('#app').view({
//     defaultPage: '#setting'
// });


// mui('.mui-scroll-wrapper').scroll({
//     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });

// var view = viewApi.view;
// (function($) {
//     //处理view的后退与webview后退
// 	var oldBack = $.back;
// 	var cityResult3 = document.getElementById('cityResult34');
//     $.back = function() {
//         if (viewApi.canBack()) { //如果view可以后退，则执行view的后退
//             viewApi.back();
//         } else { //执行webview后退
//             oldBack();
//         }
// 	};
	
//     view.addEventListener('pageBeforeShow', function(e) {
//         //                console.log(e.detail.page.id + ' beforeShow');
//     });
//     view.addEventListener('pageShow', function(e) {
//                 //   console.log(cityResult3.innerText)
//     });
//     view.addEventListener('pageBeforeBack', function(e) {
//         //                console.log(e.detail.page.id + ' beforeBack');
//     });
//     view.addEventListener('pageBack', function(e) {
//         //                console.log(e.detail.page.id + ' back');
// 	});
	
// })(mui);

$('.mask').click(function () {

	$(this).css('display', 'none');
	$('.beimian').removeClass('silde');

})
$('.coupon').click(function () {
	$('.mask').css('display', 'block');
	$('.beimian').addClass('silde');
})
$('.icon-s').click(function () {
	$('.mask').css('display', 'none');

	$('.beimian').removeClass('silde');

})

$('.oo-pp').each(function(){
	$(this).click(function(){
		if ($(this).attr('checked')){
			$('.oo-pp').removeAttr('checked');
			$('.oo-pp').next().removeClass("mark");
			$(this).attr('checked', 'checked');
			$(this).next("label").addClass("mark");
			if ($(".lll-op").is(":checked")){
				$(".sl-kk").css("display","block")
			}else{
				$(".sl-kk").css("display", "none")
			}
		}
	})
})

		
		

