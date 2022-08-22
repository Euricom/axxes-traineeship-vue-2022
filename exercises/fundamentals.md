# Vue Fundamentals - Exercises

## Text Toggle

Use a button to toggle (hide/show) a paragraph of text

- Look for 3 solutions

## Todo List

Create a small TODO list

- Show list of tasks
- Text `input` to enter a task
- Press `enter` key to add the task
- Add button (per task) to remove task
- Add button (per task) to mark done
- Show the total count of tasks
- Apply some style

## Alert

Create dismissible bootstrap alert component

- Use bootstrap styling:<br/>
  https://getbootstrap.com/docs/5.2/components/alerts/
- Create VueJS component

<!-- prettier-ignore -->

```vue
<!-- default alert: warning -->
<Alert> Almost out of stock </Alert>

<!-- custom alert with event -->
<Alert type="alert" @closed="handleClosed"> <strong>Alert!</strong> We have a problem. </Alert>
```

- Don't use jquery or the bootstrap js library
- Log a message to the console if the dialog is closed

## Product list

> Build an app to show a list of products

- Use `https://euricom-test-api.herokuapp.com` to get a list of products
- Use `fetch` api or `axios` to access data
- Use bootstrap for styling
- Show image, title, sku and price in table format.
- Optional
  - Make an alternative view to show products in grid and switch between the views
  - In the product table make the headers clickable to sort rows
  - Provide load more, paging or infinite scrolling
