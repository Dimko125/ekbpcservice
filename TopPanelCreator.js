function CreateTopPanel()
{
	var panelBlock = document.getElementsByClassName('topPanel')[0];
	panelBlock.innerHTML = "<div>\
					<a href='index.html'>\
						<div>\
							<span>ГЛАВНАЯ</span>\
						</div>\
					</a>\
					<a href='services.html'>\
						<div>\
							<span>УСЛУГИ</span>\
						</div>\
					</a>\
					<a href='contacts.html'>\
						<div>\
							<span>КОНТАКТЫ</span>\
						</div>\
					</a>\
					<a href='order.html'>\
						<div style='border-bottom: 3px red solid; border-top: 3px red solid;'>\
							<span>СДЕЛАТЬ ЗАКАЗ</span>\
						</div>\
					</a>\
					<a href=''>\
						<div>\
							<span>ЕЩЕ</span>\
						</div>\
					</a>\
				</div>";
}