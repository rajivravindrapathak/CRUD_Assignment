### Issue Board

Issue board is React app to create/edit/delete/view issue Using Json-server(Rest api) or deployed api(mongoDb and nodejs) and axios(fetch).

### Requirements:

This app should list all the issues in the first page. Each issue will have two
fields - title and description.

### Create

There must be "Create new issue" in the top. On clicking the button, it should bring to new page (it is a route). In the "Create new issue" page, we can give the title(input) and description(text area) for the issue.
We can enter description in markdown format. Finally we have to click "Save" to save the issue.

Then on returning to home page, we should see the newly created issue in the issues list.

In the list, each issue will have two buttons - "Edit" and "Delete"

### Edit

If I click the edit button, it will allow me to edit same exact issue.
I will update title or description or both, the click "Save". It will save the respective issue.

### Delete

If I click the delete button, it will delete the issue and remove it from the UI.

### Data Storage

you can do using Axios or fetch, json server. Like CRUD(Create, Read, Update(Edit), Delete).
