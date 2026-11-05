function Navbar() {
  return (
    <nav className="bg-blue-950 text-white px-6 py-4">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          MyWebsite
        </h1>

        <div className="flex gap-8 items-center">

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>

          <button className="bg-blue-500 px-5 py-2 rounded-lg">
            Login
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar