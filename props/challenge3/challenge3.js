// Main functions for challenge3
function Profile(){
  return(
    <div>
      <div className="Card">
        <div className="Card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>

      <div className="Card">
        <div className="Card-content">
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistossomiasis.</p>
        </div>
      </div>

    </div>
  )
}