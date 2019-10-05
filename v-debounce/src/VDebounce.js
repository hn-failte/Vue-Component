let timer = null;

export default {
	install(Vue, params) {
		let directive = (params && params.name) || "v-debounce";
		let time = (params && params.time) || 3000;
		Vue.directive(directive.replace("v-", ""), {
			bind(el, options) {
				let func = typeof options.value === 'function' ? options.value : () => options.value;
				let event = 'click';
				if(options.modifiers.touch) event = 'touch';
				else if(options.modifiers.keyup) event = 'keyup';
				else if(options.modifiers.keypress) event = 'keypress';
				else if(options.modifiers.touch) event = 'touchend';
				else if(options.modifiers.keydown) event = 'keydown';
				else event = 'click';
				el.addEventListener(event, () => {
					clearTimeout(timer);
					timer = setTimeout(() => {
						func();
					}, time);
				});
			}
		});
	}
};