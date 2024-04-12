import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helpers";

const Filters = ({ setModal, getSubclass }) => {
  const {
    filters: { text, category },
    updateFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const occasions = getUniqueValues(all_products, "occasion");
  const colors = getUniqueValues(all_products, "colors");
  console.log("categories list", categories);

  const data = [
    {
      id: 1,
      name: "subclass1",
    },
    {
      id: 2,
      name: "subclass2",
    },
    {
      id: 3,
      name: "subclass3",
    },
    {
      id: 4,
      name: "subclass4",
    },
  ];

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              style={{ width: "100%" }}
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className="form-control">
            <h5>Category</h5>
            <div
              onClick={() => {
                setModal(true);
              }}>
              {categories.map((c, index) => {
                return (
                  <div>
                    <button
                      key={index}
                      onClick={updateFilters}
                      type="button"
                      name="category"
                      value={c}
                      className={`${category === c ? "active" : null}`}>
                      {c}
                    </button>
                    {/* {getSubclass == 1 ? <div>{data.length <= 0  ? <></> :  <></>  </div> : <></>}} */}

                    {getSubclass == 1 ? (
                      <>
                        {data.length <= 0 ? (
                          <></>
                        ) : (
                          <>
                            {data.map((item, index) => {
                              return (
                                <div>
                                  <p>{item.name}</p>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    ${"" /* color: var(--clr-grey-5); */}
    cursor: pointer;
    font-size: 14px;
  }
  .active {
    border-color: var(--clr-primary-indianred);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  button.all-btn {
    flex: 0 0 100%;
    border: none;
    text-align: left;
    justify-content: start !important;
    position: relative;
  }
  button.all-btn.active:after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: -1px;
    width: 20px;
    height: 1px;
    background: var(--clr-grey-5);
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
