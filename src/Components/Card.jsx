import "../assets/css/index.css";

export default function Card(moviesOrSeries) {
  return moviesOrSeries.data.map((movie) => {
    // - if flag has different code in the API
    let flag = movie.lang;
    if (flag == "en") flag = "gb";
    if (flag == "ja") flag = "jp";
    if (flag == "ko") flag = "kr";

    let vote = Math.ceil(movie.vote / 2);

    return (
      <div key={movie.id} className="col-6">
        <div className="movie_container text-bg-dark p-3">
          <div className="p-3">
            <p>
              <strong>Titolo: </strong>
              {movie.title}
            </p>

            {movie.original_title === movie.title ? (
              ""
            ) : (
              <p>
                <strong>Titolo originale: </strong>
                {movie.original_title}
              </p>
            )}

            <p>
              <strong>Lingua: </strong>
              <img src={`https://flagcdn.com/16x12/${flag}.png`} alt="" />
            </p>
            <p>
              <strong>Voto: </strong>

              {vote == 0 ? (
                <span>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                </span>
              ) : (
                ""
              )}
              {vote == 1 ? (
                <span>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                </span>
              ) : (
                ""
              )}
              {vote == 2 ? (
                <span>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                </span>
              ) : (
                ""
              )}
              {vote == 3 ? (
                <span>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                </span>
              ) : (
                ""
              )}
              {vote == 4 ? (
                <span>
                  <i classname="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-regular   fa-star"></i>
                </span>
              ) : (
                ""
              )}
              {vote == 5 ? (
                <span>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                  <i className="fa-solid   fa-star"></i>
                </span>
              ) : (
                ""
              )}
            </p>
            {!movie.overview ? (
              ""
            ) : (
              <p>
                <strong>Overview: </strong>
                {movie.overview}
              </p>
            )}

            <img
              className="movie_poster"
              src={`https://image.tmdb.org/t/p/w780${movie.img}`}
            />
          </div>
        </div>
      </div>
    );
  });
}
