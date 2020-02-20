frappe.pages['devarsh-bhakla'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Jane do',
		single_column: true
	});
	page.set_title_sub('My Page')
	page.set_indicator('Pending', 'blue')
	let $btn = page.set_primary_action('New', () => create_new(), 'octicon octicon-plus')
	page.clear_primary_action()
	let $btn1 = page.set_secondary_action('Refresh', () => refresh(), 'octicon octicon-sync')
	let field = page.add_field({
		label: 'Status',
		fieldtype: 'Select',
		fieldname: 'status',
		options: [
			'Open',
			'Closed',
			'Cancelled'
		],
		change() {
			console.log(field.get_value());
		}
	});
	// page.remove_inner_toolbar()
	page.add_inner_button('Update Posts', () => update_posts())
	// page.remove_inner_button('Update Posts')

	
}