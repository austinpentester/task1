window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const taskinput_some = document.createElement('input');
		taskinput_some.classList.add('text');
		taskinput_some.type = 'text';
		taskinput_some.value = task;
		taskinput_some.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(taskinput_some);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const taskedit_panu = document.createElement('button');
		taskedit_panu.classList.add('edit');
		taskedit_panu.innerText = 'Edit';

		const taskdelete_panu = document.createElement('button');
		taskdelete_panu.classList.add('delete');
		taskdelete_panu.innerText = 'Delete';

		task_actions_el.appendChild(taskedit_panu);
		task_actions_el.appendChild(taskdelete_panu);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
		// task edit pankudiya fundction

		taskedit_panu.addEventListener('click', (e) => {
			if (taskedit_panu.innerText.toLowerCase() == "edit") {
				taskedit_panu.innerText = "Save";
				taskinput_some.removeAttribute("readonly");
				taskinput_some.focus();
			} else {
				taskedit_panu.innerText = "Edit";
				taskinput_some.setAttribute("readonly", "readonly");
			}
		});

		// delect pana kudiya function
		taskdelete_panu.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});