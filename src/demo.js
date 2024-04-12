import React from "react";

const demo = () => {
  return (
    <Wrap>
      <div className="section-center">
        <div className="title">
          <h2>Sub Category</h2>
          <div className="underline"></div>
        </div>
        <div className="row">
          {getdata2 && getdata2.length > 0
            ? getdata2.map((c, index) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    className="col-md-4"
                    key={index}
                    onClick={() => {
                      setModal(true);
                    }}>
                    <div className="a">
                      <img
                        src={c.image_full_path}
                        alt=""
                        style={{ marginBottom: "0px !important" }}
                      />
                      <button type="button" name="category" value={c.name}>
                        {c.name}
                      </button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <ReactModal
        isOpen={getModal}
        onRequestClose={() => {
          setModal(false);
        }}
        style={customStyles}>
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.6rem",
              background: "gainsboro",
            }}>
            <b style={{ fontSize: "18px", margin: "0px" }}>PASSWORD</b>
          </div>
          <div className="model_sizing">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Enter password"
                  className="password_input_modal"
                  // onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                className="btn"
                style={{ width: "100%", margin: "0px" }}
                // onClick={() => SigninMall()}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      </ReactModal>
    </Wrapper>
  );
};

export default demo;
