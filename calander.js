function goTodo() {
    window.location="todo.html";
}

function goCalander() {
    //window.location="calander.html";
}

function goNotes() {
    window.location="notes.html";
}

function goContact() { 
    window.location="contact.html";
}

function goHome() {
    window.location="home.html";
}


var app = {
	settings: {
		container: $('.calendar'),
		calendar: $('.front'),
		days: $('.weeks span'),
		form: $('.back'),
		input: $('.back input'),
		buttons: $('.back button')
	},

	init: function() {
		instance = this;
		settings = this.settings;
		this.bindUIActions();
	},

	swap: function(currentSide, desiredSide) {
		settings.container.toggleClass('flip');

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();

	},

	bindUIActions: function() {
		settings.days.on('click', function(){
			instance.swap(settings.calendar, settings.form);
			settings.input.focus();
		});

		settings.buttons.on('click', function(){
			instance.swap(settings.form, settings.calendar);
		});
	}
}

app.init();