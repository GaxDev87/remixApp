import { Link } from "@remix-run/react";

export default function CreatePost() {
  return (
    <form method="POST">
      <div>
        <label htmlFor="title" />
        <input type="text" id="title" name="title" />
      </div>

      <div>
        <label htmlFor="content" />
        <input type="text" id="content" name="content" />
      </div>

      <button type="submit">Add new post</button>
    </form>
  )
}
