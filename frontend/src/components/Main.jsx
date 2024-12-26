import React from "react";

function Main() {
  return (
    <div className="purple-background pb-5">
      <div className="container">
        <div className="mb-3 pt-4 mr-2 ml-2">
          <h2 className="row title text-wrap">
            ZAINWESTUJ W SWOJĄ
            <span style={{ color: "white" }}>PRZYSZŁOŚĆ</span>
          </h2>
        </div>
        <div className="row justify-content-center pt-4">
          <div className="col-lg-9 p-4 dark-purple-background ml-1 mr-1">
            <div className="row">
              <div className="col">
                <p className="inner-title">
                  Ogólnopolska wyszukiwarka kursów IT
                </p>
              </div>
            </div>
            <form className="row">
              <div className="col-md form-group">
                <div className="row pt-1">
                  <div className="col">
                    <label className="input-label">Technologia</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      className="pt-1 pb-1 pl-2 mr-1 form-control rounded-0 input-styles"
                      type="text"
                      placeholder="np. Java, Python"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md form-group">
                <div className="row pt-1">
                  <div className="col">
                    <label className="input-label">Lokalizacja</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      className="pt-1 pb-1 mr-1 pl-2 input-styles form-control rounded-0"
                      type="text"
                      placeholder="np. Java, Python"
                    />
                  </div>
                </div>
              </div>
              <div className="col ml-3 mt-2 pb-3 d-flex justify-content-center align-items-end">
                <button
                  type="submit"
                  className="btn btn-secondary rounded-pill custom-btn pl-5 pr-5"
                >
                  Szukaj
                </button>
              </div>
            </form>
            <div className="row link mt-2 mb-3">
              <div className="col mt-2">
                <a className="link" href="#">
                  Wyszukiwarka zaawansowana
                </a>
              </div>
            </div>
            <div className="row no-gutters justify-content-start align-items-center">
              <div className="col-auto">
                <p className="mb-0">Szybkie filtry:</p>
              </div>
              <div className="row ml-2">
                <div className="col-auto p-1 search-logo-background justify-content-center">
                  <img className="search-logo" src="img/csharp.png" alt="c#" />
                </div>
                <div className="col-auto p-1 search-logo-background justify-content-center">
                  <img
                    className="search-logo"
                    src="img/javascript.png"
                    alt="js"
                  />
                </div>
                <div className="col-auto p-1 search-logo-background justify-content-center">
                  <img className="search-logo" src="img/java.png" alt="java" />
                </div>
                <div className="col-auto p-1 search-logo-background justify-content-center">
                  <img
                    className="search-logo"
                    src="img/python.png"
                    alt="python"
                  />
                </div>
                <div className="col-auto p-1 search-logo-background justify-content-center">
                  <img
                    className="search-logo"
                    src="https://static.wixstatic.com/media/127fea_06196dcabc30445bbd9baa1f6aa1bee2~mv2.png"
                    alt="img/cplus.png"
                  />
                </div>
                <div className="col-auto p-1 search-logo-background justify-content-center">
                  <img
                    className="search-logo"
                    src="img/docker.png"
                    alt="docker"
                  />
                </div>
                <div className="col-auto p-1 search-logo-background justify-content-center">
                  <img className="search-logo" src="img/sql.png" alt="sql" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
