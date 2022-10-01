import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useState } from 'react';
import SearchComponent from '../../components/SearchComponent';

function Header() {
  const [user, setUser] = useState('');
  const [isLoged, setIsLoged] = useState(false);
  return (
    <nav>
      <div className="">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <span className="flex gap-5 self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-12">
              Cera
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <SearchComponent />
            {/* <Icon
              className=" relative -left-6 -bottom-2.5"
              icon="carbon:shopping-cart"
              width="24"
            /> */}
            {isLoged ? (
              <Dropdown
                arrowIcon={true}
                inline={true}
                label={
                  <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <Avatar
                      alt="User settings"
                      img={
                        isLoged
                          ? 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                          : { user }
                      }
                      rounded={true}
                    />
                  </div>
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Omakase Green</span>
                  <span className="block truncate text-sm font-medium">
                    Omakase@gmail.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Account</Dropdown.Item>
                <Dropdown.Item>Wishlist</Dropdown.Item>
                <Dropdown.Item>my Cart</Dropdown.Item>
                <Dropdown.Item>Shipping Status</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setIsLoged(!isLoged)}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Dropdown
                arrowIcon={true}
                inline={true}
                label={
                  <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      className=" absolute -left-1 w-12 h-12 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm text-center">Cera Scrubs</span>
                  <span className="block truncate text-sm font-medium">
                    please login before you order.
                  </span>
                </Dropdown.Header>
                <Dropdown.Item onClick={() => setIsLoged(!isLoged)}>
                  Login
                </Dropdown.Item>
                <Dropdown.Item>Register</Dropdown.Item>
              </Dropdown>
            )}

            <Navbar.Toggle />
          </div>
          <div className='-translate-x-9 '>
            <Navbar.Collapse>
              <Navbar.Link href="/navbars">HOME</Navbar.Link>
              <Navbar.Link href="/navbars">ABOUT CERA</Navbar.Link>
              <Navbar.Link href="/navbars">CONTACT US</Navbar.Link>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </nav>
  );
}

export default Header;
