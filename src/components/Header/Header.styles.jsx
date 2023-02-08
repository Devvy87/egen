import styled from "styled-components";


export const Container = styled.nav`

display:flex;
justify-content:space-between;
align-items:center;
.brand {
    img {
        cursor:pointer;
    }
}
.toggle {
    display:none;
}
.links {
    ul {
        display: flex;
        gap: 3rem;
        list-style-type: none;
        li {
            a {
                color: #000000;
                text-decoration: none;
                cursor: pointer;
                transition: var(--default-transition);
                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
}
.account-info {
    display: flex;
    gap: 2rem;
    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 280px) and (max-width:1080px) {
    position: relative;
    padding: 1re, 1 rem;
    z-index:12;
    .account-info{
        display: none;
    }
    .brand {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
      .show {
        opacity: 1 !important;
        visibility: visible !important;
      }
      .links {
        position: absolute;
        overflow-x: hidden;
        top: 0;
        right: 0;
        width: ${({ state }) => (state ? "60%" : "0%")};
        height: 100vh;
        background-color: var(--primary-color);
        opacity: 0;
        visibility: hidden;
        transition: 0.4s ease-in-out;
        ul {
          flex-direction: column;
          text-align: center;
          height: 100%;
          justify-content: center;
          li {
            a {
              color: white;
            }
          }
        }
      }
    }

  }









`
