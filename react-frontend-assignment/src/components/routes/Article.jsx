import Spinner from "../loader/Spinner"

const Article = () => {
  return (
    <Spinner>
      <div>
        <h1 className="text-3xl font-bold mb-5">Article Page</h1>
        <p>This is the article section.</p>
      </div>
    </Spinner>
  )
}

export default Article